import { gql } from "@apollo/client";

export const ADD_CUSTOM_PRICE_PRODUCT_TO_CART = gql`
  mutation AddCustomPriceProductToCart(
    $cart_id: String!
    $cart_items: [CustomCartItemInput]!
  ) {
    addCustomPriceProductToCart(cart_id: $cart_id, cart_items: $cart_items) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;
export const PAY_ARREAR = gql`
  mutation PayArrear(
    $cart_id: String!
    $contractId: Int!
    $spec: String!
    $year: Int!
  ) {
    addArrearToCart(
      cart_id: $cart_id
      contractId: $contractId
      spec: $spec
      year: $year
    ) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;
export const PAY_FIRSTRENT = gql`
  mutation PayFirstRent($cart_id: String!, $contractId: Int!) {
    addFirstRentToCart(cart_id: $cart_id, contractId: $contractId) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const PAY_MANUAL_ORDER = gql`
  mutation PayManualOrder(
    $cart_id: String!
    $contractId: Int!
    $sku: String!
    $mid: Int!
  ) {
    AddWebshopProductToCart(
      cart_id: $cart_id
      contractId: $contractId
      sku: $sku
      mid: $mid
    ) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const CHANGE_CONTRACT_FEE = gql`
  mutation PayChangeContractFee($cart_id: String!, $contractId: Int!) {
    addChangeContractToCart(cart_id: $cart_id, contractId: $contractId) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const PAY_DEPOSIT = gql`
  mutation PayDeposit($cart_id: String!, $contractId: Int!) {
    addDepositToCart(cart_id: $cart_id, contractId: $contractId) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const PAY_DOWNPAYMENT = gql`
  mutation PayDownpayment(
    $cart_id: String!
    $sku: String!
    $startDate: String!
  ) {
    payDownpayment(
      cart_id: $cart_id
      product_sku: $sku
      contract_start_date: $startDate
    ) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const PayRegFee = gql`
  mutation PayRegFee($cart_id: String!) {
    PayRegFee(cart_id: $cart_id) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const CUSTOM_CART_ITEM_INPUT = gql`
  input CustomCartItemInput {
    sku: String!
    qty: Float!
    custom_price: Float
    customizable_options: [CustomOptionInput]
  }

  input CustomOptionInput {
    id: Int!
    value: String!
  }
`;
// GET_CART_QUERY
export const ADD_VIRTUAL_PRODUCT_TO_CART = gql`
  mutation AddVirtualProductToCart(
    $cart_id: String!
    $sku: String!
    $quantity: Float!
    $customOptions: [CustomizableOptionInput!]
  ) {
    addVirtualProductsToCart(
      input: {
        cart_id: $cart_id
        cart_items: {
          data: { sku: $sku, quantity: $quantity }
          customizable_options: $customOptions
        }
      }
    ) {
      cart {
        items {
          id
          quantity
          product {
            sku
            name
            price {
              regularPrice {
                amount {
                  currency
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GUEST_USER_CART = gql`
  query GetCart($cart_id: String!) {
    cart(cart_id: $cart_id) {
      id
      items {
        id
        quantity
        product {
          sku
          name
        }
      }
    }
  }
`;

// GET_CUSTOMER_QUERY
export const GET_CUSTOMER_QUERY = gql`
  query GetCustomerQuery {
    customer {
      firstname
      lastname
      email
    }
  }
`;

export const GET_AVAILABLE_PAYMENT_METHODS = gql`
  query GetAvailablePaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        code
        title
      }
    }
  }
`;

export const GET_CUSTOMER_ADDRESSES = gql`
  query GetCustomerAddresses {
    customer {
      email
      firstname
      lastname
      addresses {
        firstname
        lastname
        street
        city
        region {
          region_code
          region
          region_id
        }
        postcode
        country_code
        telephone
        id
      }
    }
  }
`;
export const CHECKOUTAGREEMENT = gql`
  query GetCheckoutAgreements {
    checkoutAgreements {
      name
      content
      checkbox_text
      mode
    }
  }
`;

export const LOGIN_USER_CART = gql`
  query GetLoginUserCart {
    customerCart {
      id
      items {
        uid
        quantity
        prices {
          price {
            value
            currency
          }
          price_including_tax {
            value
            currency
          }
          row_total {
            value
            currency
          }
          row_total_including_tax {
            value
            currency
          }
          discounts {
            amount {
              value
              currency
            }
            label
          }
          total_item_discount {
            value
            currency
          }
        }
        product {
          sku
          name
          thumbnail {
            url
          }
        }
        selected_options {
          label
          value
        }
        ... on SimpleCartItem {
          customizable_options {
            id
            label
            values {
              customizable_option_value_uid
              label
              value
            }
          }
        }
        ... on VirtualCartItem {
          customizable_options {
            id
            label
            values {
              customizable_option_value_uid
              label
              value
            }
          }
        }
      }
      prices {
        grand_total {
          value
          currency
        }
        subtotal_including_tax {
          value
          currency
        }
        subtotal_excluding_tax {
          value
          currency
        }
        subtotal_with_discount_excluding_tax {
          value
          currency
        }
        applied_taxes {
          amount {
            value
            currency
          }
          label
        }
        discounts {
          amount {
            value
            currency
          }
          label
        }
      }
      total_quantity
      is_virtual
      selected_payment_method {
        code
        title
      }
      available_payment_methods {
        code
        title
      }
      billing_address {
        firstname
        lastname
        street
        city
        region {
          code
          label
          region_id
        }
        country {
          code
          label
        }
        postcode
        telephone
      }
    }
  }
`;
export const CREATE_EMPTY_CART = gql`
  mutation CreateEmptyCart {
    createEmptyCart
  }
`;

// PLACE_ORDER_MUTATION
export const PLACE_ORDER_MUTATION = gql`
  mutation PlaceOrderMutation($input: PlaceOrderInput!) {
    placeOrder(input: $input) {
      order {
        order_number
      }
      payment_redirect_url
    }
  }
`;

export const SET_BILLING_ADDRESS = gql`
  mutation SetBillingAddressOnCart($input: SetBillingAddressOnCartInput!) {
    setBillingAddressOnCart(input: $input) {
      cart {
        id
      }
    }
  }
`;

export const SET_PAYMENT_METHOD_ON_CART = gql`
  mutation SetPaymentMethodOnCart(
    $cartId: String!
    $paymentMethod: PaymentMethodInput!
  ) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: $paymentMethod }
    ) {
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
  }
`;

export const IDEAL_PAY = gql`
  mutation IdealCheckOut($order_id: String!, $plateform: String) {
    idealCheckOut(order_id: $order_id, plateform: $plateform) {
      redirect
    }
  }
`;

export const PLACE_ORDER = gql`
  mutation PlaceOrder($cartId: String!, $storeId: Int) {
    placeOrder(input: { cart_id: $cartId, store_id: $storeId }) {
      orderV2 {
        order_number
      }
      errors {
        message
        code
      }
    }
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        uid
        quantity
        prices {
          price {
            value
            currency
          }
          price_including_tax {
            value
            currency
          }
          row_total {
            value
            currency
          }
          row_total_including_tax {
            value
            currency
          }
          discounts {
            amount {
              value
              currency
            }
            label
          }
          total_item_discount {
            value
            currency
          }
        }
        product {
          sku
          name
          thumbnail {
            url
          }
        }
        selected_options {
          label
          value
        }
        ... on SimpleCartItem {
          customizable_options {
            id
            label
            values {
              customizable_option_value_uid
              label
              value
            }
          }
        }
        ... on VirtualCartItem {
          customizable_options {
            id
            label
            values {
              customizable_option_value_uid
              label
              value
            }
          }
        }
      }
      prices {
        grand_total {
          value
          currency
        }
        subtotal_including_tax {
          value
          currency
        }
        subtotal_excluding_tax {
          value
          currency
        }
        subtotal_with_discount_excluding_tax {
          value
          currency
        }
        applied_taxes {
          amount {
            value
            currency
          }
          label
        }
        discounts {
          amount {
            value
            currency
          }
          label
        }
      }
    }
  }
`;

export const COUNTRY_NAME_QUERY = gql`
  query GetCountries {
    countries {
      id
      full_name_english
    }
  }
`;

export const GET_PRODUCTS_QUERY = gql`
  query GetProductsWithOptions($category_id: String!) {
    products(
      filter: { category_id: { eq: $category_id } }
      sort: { name: DESC }
    ) {
      items {
        name
        sku
        url_key
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        ... on VirtualProduct {
          options {
            title
            required
            option_id
            uid
            ... on CustomizableFieldOption {
              product_sku
              field_values: value {
                sku
                max_characters
                uid
              }
            }
            ... on CustomizableDropDownOption {
              dropdown_values: value {
                option_type_id
                sku
                title
                uid
              }
            }
          }
        }
        image {
          url
          label
        }
        small_image {
          url
          label
        }
      }
      total_count
      page_info {
        page_size
      }
    }
  }
`;

export const TRUNCATE_CART = gql`
  mutation TruncateCart($cart_id: String!) {
    truncateCart(cart_id: $cart_id) {
      status
    }
  }
`;

export const REPLY_TICKET = gql`
  mutation MstHelpdeskAddMessage(
    $ticketId: Int!
    $input: MstHelpdeskMessageInput!
  ) {
    mstHelpdeskAddMessage(ticketId: $ticketId, input: $input) {
      triggeredBy
      ownerName
      text
      createdAt
      ticket_id
      attachments {
        url
        name
      }
    }
  }
`;
export const TICKET_DEPARTMENT = gql`
  query mstHelpdeskDepartments {
    mstHelpdeskDepartments {
      department_id
      name
    }
  }
`;
export const TICEKT_CREATE = gql`
  mutation MstHelpdeskCreateTicket(
    $subject: String!
    $description: String!
    $department_id: Int
    $plain: Int
    $channel: MstHelpdeskTicketChannel!
    $attachments: [MstHelpdeskAttachmentInput]
  ) {
    mstHelpdeskCreateTicket(
      input: {
        subject: $subject
        message: $description
        channel: $channel
        plain: $plain
        department_id: $department_id
        attachments: $attachments
      }
    ) {
      subject
    }
  }
`;

export const TICKET_CLOSE = gql`
  mutation MstHelpdeskCloseTicket($ticket_id: Int!) {
    mstHelpdeskCloseTicket(ticketId: $ticket_id) {
      ticket_id
      close
    }
  }
`;

export const TICKET_OPEN = gql`
  mutation MstHelpdeskOpenTicket($ticket_id: Int!) {
    mstHelpdeskOpenTicket(ticketId: $ticket_id) {
      ticket_id
      open
    }
  }
`;

export const SHOWTICKETS = gql`
  query GetMstHelpdeskTickets($currentPage: Int, $pageSize: Int) {
    customer {
      mstHelpdeskTickets(
        filter: {}
        currentPage: $currentPage
        pageSize: $pageSize
      ) {
        items {
          code
          ticket_id
          external_id
          subject
          status {
            name
          }
          department {
            name
          }
          priority {
            name
          }
          last_activity
          messages {
            items {
              triggeredBy
              ownerName
              text
              createdAt
              attachments {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const SHOWTICKETSBYID = gql`
  query GetMstHelpdeskTickets(
    $currentPage: Int
    $pageSize: Int
    $externalId: String
  ) {
    customer {
      mstHelpdeskTickets(
        filter: { external_id: $externalId }
        currentPage: $currentPage
        pageSize: $pageSize
      ) {
        items {
          code
          ticket_id
          subject
          status {
            name
          }
          department {
            name
          }
          priority {
            name
          }
          last_activity
          messages {
            items {
              triggeredBy
              ownerName
              text
              createdAt
              attachments {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const WEBSHOP_PRODUCTS_QUERY = gql`
  query GetProducts($filteredData: [String!]!) {
    products(filter: { sku: { in: $filteredData } }, sort: { name: ASC }) {
      items {
        name
        sku
        url_key
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
          label
        }
        small_image {
          url
          label
        }
        media_gallery {
          url
          label
        }
      }
      total_count
      page_info {
        page_size
      }
    }
  }
`;

export const PRODUCT_DETAILS = gql`
  query GetProductsDetail($url_key: String!) {
    products(filter: { url_key: { eq: $url_key } }) {
      items {
        name
        available_startdate
        sku
        description {
          html
        }
        url_key
        stock_status
        allin_excl_text
        basic_rent
        deposit
        available_to_book
        minimum_stay
        maximum_day_selection
        special_price
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
          label
        }
        small_image {
          url
          label
        }
        media_gallery {
          url
          label
        }
        ... on VirtualProduct {
          options {
            title
            required
            option_id
            uid
            ... on CustomizableFieldOption {
              product_sku
              field_values: value {
                sku
                max_characters
                uid
                price
              }
            }
            ... on CustomizableDropDownOption {
              dropdown_values: value {
                option_type_id
                sku
                title
                uid
                price
              }
            }
          }
        }
        ... on SimpleProduct {
          options {
            title
            required
            option_id
            uid
            ... on CustomizableFieldOption {
              product_sku
              field_values: value {
                sku
                max_characters
                uid
                price
              }
            }
            ... on CustomizableDropDownOption {
              dropdown_values: value {
                option_type_id
                sku
                title
                uid
                price
              }
            }
          }
        }
      }
      aggregations {
        attribute_code
        label
        count
        options {
          count
          label
          value
        }
      }
      total_count
      page_info {
        page_size
      }
    }
  }
`;

export const CONTRACT_PRODUCT_DETAIL = gql`
  query GetProductDetail($filters: ProductAttributeFilterInput) {
    products(filter: $filters) {
      items {
        name
        sku
        building_name
        basic_rent
        lumpsum_service_charge
        caretaker_costs
        service_costs_website
        income_requirements
        min_income
        inventory
        tenant_profile
        cleaning_common_areas
        energy_common_areas
        url_key
        deposit
      }
    }
  }
`;

export const NEWBOOKING = gql`
  mutation AddNewBooking(
    $cart_id: String!
    $sku: String!
    $contract_startDate: String
    $contract_id: Int
    $option_selected: String
  ) {
    addNewBooking(
      cart_id: $cart_id
      sku: $sku
      contract_startDate: $contract_startDate
      contract_id: $contract_id
      option_selected: $option_selected
    ) {
      cart {
        items {
          id
          quantity
          product {
            name
            sku
          }
          prices {
            price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export const AMASTY_FORM = gql`
  query GetAMastyForm($form_id: Int!) {
    customform(formId: $form_id) {
      form_id
      title
      code
      success_url
      status
      created_at
      form_json
      form_title
      is_form_available
      isSurvey
    }
  }
`;

export const AMASTY_FORM_SUBMIT = gql`
  mutation SubmitAmastyForm($input: AmFormSubmitInput!) {
    amCustomFormSubmit(input: $input) {
      status
    }
  }
`;
