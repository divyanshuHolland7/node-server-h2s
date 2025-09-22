import { makeApolloClient } from "../../lib/apollo.js";
import { CREATE_EMPTY_CART, ADD_CUSTOM_PRICE_PRODUCT_TO_CART,WEBSHOP_PRODUCTS_QUERY } from "../../queries/mutation.js";


export async function createCart(req, res) {
  try {
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;
    const client = makeApolloClient({ customerToken });

    const { data, errors } = await client.mutate({
      mutation: CREATE_EMPTY_CART,
    });
    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));

    res.json({ success: true, cartId: data.createEmptyCart });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}



export async function addCustomPriceItem(req, res) {
  try {
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;
    const client = makeApolloClient({ customerToken });

    const {
      cartId,
      sku,
      quantity = 1,
      customPrice = null,
      selectedOptions = [],
    } = req.body || {};

    if (!sku) return res.status(400).json({ success: false, error: "Missing sku" });

    // 1) Ensure cart id (customer or guest depending on token)
    let ensuredCartId = cartId;
    if (!ensuredCartId) {
      const { data, errors } = await client.mutate({ mutation: CREATE_EMPTY_CART });
      if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));
      ensuredCartId = data.createEmptyCart;
    }

    // 2) Build inputs
    const customizable_options = selectedOptions.map(({ id, value }) => ({ id, value }));
    const cart_items = [
      {
        sku,
        qty: Number(quantity),
        custom_price: customPrice,
        customizable_options,
      },
    ];

    // 3) Add item
    const { data, errors } = await client.mutate({
      mutation: ADD_CUSTOM_PRICE_PRODUCT_TO_CART,
      variables: { cart_id: ensuredCartId, cart_items },
    });
    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));
    res.json({
      success: true,
      cartId: ensuredCartId,
      cart: data.addCustomPriceProductToCart.cart,
    });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}


export async function getWebshopProducts(req, res) {
  try {
    const { filteredData, locale = "en" } = req.body || {};

    // Handle the "skip" case exactly like your React code
    const shouldSkip =
      filteredData == null ||
      (Array.isArray(filteredData) && filteredData.length === 0) ||
      (typeof filteredData === "object" && !Array.isArray(filteredData) && Object.keys(filteredData).length === 0);

    if (shouldSkip) {
      return res.json({
        success: true,
        data: {
          webshopProducts: {
            total_count: 0,
            items: [],
            page_info: { current_page: 1, total_pages: 0 },
          },
        },
      });
    }

    // Map locale -> Store header (CAPITAL S matters in Magento)
    const store = locale === "nl" ? "default" : "en";
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;

    const client = makeApolloClient({ customerToken, store });

    // Optional: add a hard timeout using AbortController (Node 18+)
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 15000);

    const { data, errors } = await client.query({
      query: WEBSHOP_PRODUCTS_QUERY,
      variables: { filteredData },
      context: { fetchOptions: { signal: ac.signal } }, // passed to HttpLink
      fetchPolicy: "no-cache",
    });

    clearTimeout(t);

    if (errors?.length) {
      throw new Error(errors.map(e => e.message).join(" | "));
    }

        console.log(data,"----data")
    return res.json({ success: true, data });
  } catch (e) {
    // Surface GraphQL errors clearly to caller
    return res.status(500).json({ success: false, error: e.message });
  }
}