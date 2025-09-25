import { makeApolloClient } from "../../lib/apollo.js";
import { CREATE_EMPTY_CART, ADD_CUSTOM_PRICE_PRODUCT_TO_CART,WEBSHOP_PRODUCTS_QUERY,LOGIN_USER_CART,ADD_VIRTUAL_PRODUCT_TO_CART,TRUNCATE_CART ,NEWBOOKING} from "../../queries/mutation.js";




function toSkuArray(input) {
  // already array → clean it
  if (Array.isArray(input)) return input.map(String).map(s => s.trim()).filter(Boolean);

  // JSON string that looks like an array → parse it
  if (typeof input === "string") {
    const t = input.trim();
    if (t.startsWith("[") && t.endsWith("]")) {
      try {
        const arr = JSON.parse(t);
        return Array.isArray(arr) ? arr.map(String).map(s => s.trim()).filter(Boolean) : [];
      } catch {
        // fall through to CSV handling
      }
    }
    // CSV fallback: "sku1, sku2"
    if (t.includes(",")) return t.split(",").map(s => s.trim()).filter(Boolean);
    // single sku string
    return t ? [t] : [];
  }

  // common object shapes
  if (input && typeof input === "object") {
    if (Array.isArray(input.skus))   return toSkuArray(input.skus);
    if (Array.isArray(input.items))  return toSkuArray(input.items);
  }

  return [];
}

function normalizeCustomOptions(input) {
  if (!input) return [];
  if (Array.isArray(input)) {
    return input
      .map(o => ({ id: o?.id, value: o?.value }))
      .filter(o => o.id != null && o.value != null);
  }
  // { id: x, value: y } single object
  if (typeof input === "object") {
    const { id, value } = input;
    if (id != null && value != null) return [{ id, value }];
  }
  return [];
}

function toISODate(dateLike) {
  if (!dateLike) return null;
  if (typeof dateLike === "string") {
    const s = dateLike.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
    const d = new Date(s);
    return isNaN(d) ? null : d.toISOString().slice(0, 10);
  }
  const d = new Date(dateLike);
  return isNaN(d) ? null : d.toISOString().slice(0, 10);
}


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
      customPrice=null,
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
      console.log("sekectedoptions",typeof selectedOptions)
    // 2) Build inputs
     const customizable_options = selectedOptions?.map(
        ({ id, value }) => {
          return { id, value };
        }
      );
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
    const skus = toSkuArray(filteredData);     // <-- normalize here

    if (!skus.length) {
      return res.json({
        success: true,
        data: { products: { items: [], total_count: 0, page_info: { page_size: 20 } } },
        _debug: { reason: "empty-or-bad filteredData" }
      });
    }

    const store = locale === "nl" ? "default" : "en";
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;
    const client = makeApolloClient({ customerToken, store });

    const { data, errors } = await client.query({
      query: WEBSHOP_PRODUCTS_QUERY,           // must declare $filteredData: [String!]!
      variables: { filteredData: skus },       // <-- now an array of strings
      fetchPolicy: "no-cache",
    });

    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));
    return res.json({ success: true, data, _debug: { skus, store } });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
}



export async function addVirtualProductToCart(req, res) {
  try {
    const { cart_id, sku, quantity = 1, customOptions } = req.body || {};
    if (!sku) return res.status(400).json({ success: false, error: "Missing sku" });

    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;

    // Set the correct Store header via your Apollo link (adjust locale->store mapping if needed)
    const locale = req.body?.locale || "en";
    const store = locale === "nl" ? "default" : "en";

    const client = makeApolloClient({ customerToken, store });

    // Ensure we have a cart id (customer-aware if token is present)
    let ensuredCartId = cart_id;
    if (!ensuredCartId) {
      const { data, errors } = await client.mutate({ mutation: CREATE_EMPTY_CART });
      if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));
      ensuredCartId = data.createEmptyCart;
    }

    const options = normalizeCustomOptions(customOptions);

    const { data, errors } = await client.mutate({
      mutation: ADD_VIRTUAL_PRODUCT_TO_CART,
      variables: {
        cart_id: ensuredCartId,
        sku: String(sku),
        quantity: parseFloat(quantity) || 1,
        customOptions: options,
      },
    });

    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));

    return res.json({
      success: true,
      cartId: ensuredCartId,
      cart: data.addVirtualProductsToCart.cart,
    });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
}


export async function truncateCart(req, res) {
   const {
      cartId
    } = req.body || {};

   let ensuredCartId = cartId;

  try {
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;
    const client = makeApolloClient({ customerToken });

    const { data, errors } = await client.mutate({
      mutation: TRUNCATE_CART,
       variables: { cart_id: ensuredCartId},
    });
    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));

    res.json({ success: true, cartId: data.truncateCart });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}



export async function AddNewBooking(req, res) {
  try {
    const {
      cart_id,
      sku,
      contract_startDate,
      contract_id,
      option_selected,       // optional
      locale = "en",
    } = req.body || {};

    if (!sku)        return res.status(400).json({ success: false, error: "Missing sku" });
    // contract_id is optional in your schema, but you were requiring it before. Keep optional or validate if you need it:
    // if (contract_id == null) return res.status(400).json({ success: false, error: "Missing contract_id" });

    const normalizedStart = contract_startDate ? toISODate(contract_startDate) : null;
    if (contract_startDate && !normalizedStart) {
      return res.status(400).json({ success: false, error: "Invalid contract_startDate (use YYYY-MM-DD)" });
    }

    const store = locale === "nl" ? "default" : "en"; // ensure these are your real store codes
    const customerToken = req.headers.authorization?.replace("Bearer ", "") || null;

    const client = makeApolloClient({ customerToken, store });

    // Ensure we have a cart id (optional; remove this block if you always pass one)
    let ensuredCartId = cart_id;
    if (!ensuredCartId) {
      const { data, errors } = await client.mutate({ mutation: CREATE_EMPTY_CART });
      if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));
      ensuredCartId = data?.createEmptyCart;
      if (!ensuredCartId) throw new Error("Failed to create cart");
    }

    const vars = {
      cart_id: ensuredCartId,
      sku: String(sku),
      contract_startDate: normalizedStart,        // may be null
      contract_id: contract_id != null ? Number(contract_id) : null, // Int
      option_selected: option_selected ?? null,
    };

    const { data, errors } = await client.mutate({
      mutation: NEWBOOKING,
      variables: vars,
    });

    if (errors?.length) throw new Error(errors.map(e => e.message).join(" | "));

    // ✅ Your resolver returns data.addNewBooking.cart
    const cart = data?.addNewBooking?.cart;
    if (!cart) {
      return res.status(502).json({
        success: false,
        error: "addNewBooking returned no cart",
        _debug: { keys: Object.keys(data || {}), raw: data },
      });
    }

    return res.json({
      success: true,
      cartId: ensuredCartId,
      cart,
    });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
}


export async function getCustomerCart(req, res) {
  try {
    // Require a customer token
    const authHdr = req.headers.authorization || "";
    const token = authHdr.startsWith("Bearer ") ? authHdr.slice(7) : null;
    if (!token) {
      return res.status(401).json({ success: false, error: "Missing Authorization Bearer token" });
    }

    // Optional store selection from request body/query; default as you prefer
    const locale = (req.body?.locale || req.query?.locale || "en");
    const store = locale === "nl" ? "default" : "en";

    const client = makeApolloClient({ customerToken: token, store });

    // Hard timeout (Node 18+ AbortController)
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), 15000);

    const { data, errors } = await client.query({
      query: LOGIN_USER_CART,
      context: { fetchOptions: { signal: ac.signal } },
      fetchPolicy: "no-cache",           // equivalent to your 'network-only' intent on server
    });

    clearTimeout(timer);

    if (errors?.length) {
      // Surface GraphQL errors similar to onError in the client
      return res.status(400).json({
        success: false,
        error: errors.map(e => e.message).join(" | "),
        details: errors,
      });
    }

    return res.json({ success: true, cart: data?.customerCart ?? null });
  } catch (e) {
    // Network / timeout / unexpected errors
    return res.status(500).json({ success: false, error: e.message });
  }
}

export async function setPaymentMethodController(req, res) {
  try {
    const { cartId, paymentMethodCode, locale = "en" } = req.body || {};

    if (!cartId) {
      return res.status(400).json({ success: false, error: "Missing cartId" });
    }
    if (!paymentMethodCode) {
      return res.status(400).json({ success: false, error: "Missing paymentMethodCode" });
    }

    const authHdr = req.headers.authorization || "";
    const customerToken = authHdr.startsWith("Bearer ") ? authHdr.slice(7) : null;
    if (!customerToken) {
      return res.status(401).json({ success: false, error: "Missing Authorization Bearer token" });
    }

    const store = locale === "nl" ? "default" : "en";
    const client = makeApolloClient({ customerToken, store });

    const { data, errors } = await client.mutate({
      mutation: SET_PAYMENT_METHOD,
      variables: {
        cartId: String(cartId),
        paymentMethod: {
          code: paymentMethodCode,
          // include extra fields if your payment method requires them, e.g. purchase_order_number
        },
      },
    });

    if (errors?.length) {
      return res.status(400).json({
        success: false,
        error: errors.map((e) => e.message).join(" | "),
      });
    }

    return res.json({ success: true, data: data.setPaymentMethodOnCart.cart });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
}