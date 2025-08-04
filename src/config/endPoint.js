const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const endpoints = {
  M503:`${API_BASE_URL}/rest/V1/maintenance`,
  CURRENT_CUSTOMER: `${API_BASE_URL}/rest/en/V1/customers/me`,
  REGISTER_CUSTOMER: `${API_BASE_URL}/rest/en/V1/customers`,
  LANGUAGE_SWITCH_CUSTOMER: (id) =>
    `${API_BASE_URL}/rest/V1/customers/${id}`,
  REFRESH_TOKEN: `${API_BASE_URL}/rest/V1/integration/customer/token/refresh`,
  LOGOUT: `${API_BASE_URL}/rest/V1/integration/customer/logout`,
  VERIFY_TOKEN: (token_id) =>
    `${API_BASE_URL}/rest/en/V1/integration/customer/token/verify?token=${token_id}`,
  GET_TOKEN: `${API_BASE_URL}/rest/en/V1/integration/customer/token`,
  FORGOT_PASSWORD: `${API_BASE_URL}/rest/V1/customers/password`,
  CREATE_PASSWORD: `${API_BASE_URL}/rest/V1/customers/resetPassword`,
  VERIFY_PASSWORD_TOKEN: (customerId, resetPasswordLinkToken) =>
    `${API_BASE_URL}/rest/en/V1/customers/${customerId}/password/resetLinkToken/${resetPasswordLinkToken}`,
  GET_CUSTOMERDETAILS_BY_ID: (id) =>
    `${API_BASE_URL}/rest/en/V1/customer/${id}`,
  GET_CUSTOMER_PIC: `${API_BASE_URL}/rest/V1/customer/getcustomerprofilepic`,
  SAVE_CUSTOMER_PIC: `${API_BASE_URL}/rest/V1/customer/savecustomerprofilepic`,
  GET_ALL_NOTIFICATIONS: `${API_BASE_URL}/rest/V1/customer/notifications/me`,
  GET_BLOG_POSTS: `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=featured_show_on_home&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[pageSize]=2&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
  GET_ALL_BLOG_POSTS: `${API_BASE_URL}/rest/V1/blog/tenantposts`,
  GET_BLOG_CATEGORIES: `${API_BASE_URL}/rest/V1/blog/category?searchCriteria[filter_groups][0][filters][0][field]=parent_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
  GET_BLOG_AUTHOR: (urlkey) =>
    `${API_BASE_URL}/rest/V1/blog/authors?searchCriteria[filter_groups][0][filters][0][field]=is_active&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][field]=url_key&searchCriteria[filter_groups][0][filters][0][value]=${urlkey}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
  GET_BLOG_BY_AUTHORID: (authorId) =>
    `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=author_id&searchCriteria[filter_groups][0][filters][0][value]=${authorId}&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&searchCriteria[pageSize]=9`,
  GET_BLOG_BY_CATID: (catid) =>
    `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=category_ids&searchCriteria[filter_groups][0][filters][0][value]=${catid}&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&searchCriteria[pageSize]=9`,
  GET_BLOG_DETAIL: (urlkey) =>
    `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=url_key&searchCriteria[filter_groups][0][filters][0][value]=${urlkey}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
  BLOG_DETAIL: (urlkey) => `${API_BASE_URL}/rest/V1/blog/posts/${urlkey}`,
  BLOG_SEARCH: (urlkey) =>
    `${API_BASE_URL}/rest/V1/blog/helpdesksearch/${urlkey}`,
  GET_BLOG_TAGS: (url) =>
    `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=tag_ids&searchCriteria[filter_groups][0][filters][0][value]=${url}&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&searchCriteria[pageSize]=9`,
  GET_BLOG_RESULT: (querystring) =>
    `${API_BASE_URL}/rest/V1/blog/posts?searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][value]=${querystring}&searchCriteria[filter_groups][0][filters][0][condition_type]=like`,
  GET_PROFILE_BIO: `${API_BASE_URL}/rest/V1/supportsbio?searchCriteria[filter_groups][0][filters][0][field]=buildings`,
  CREATE_APPOINTMENT: (type, contractid) =>
    `${API_BASE_URL}/rest/V1/contract/appointments/${type}/${contractid}`,
  CHECKIN_APPOINTMENT: `${API_BASE_URL}/rest/V1/contract/appointments/checkin`,
  CHECKOUT_APPOINTMENT: `${API_BASE_URL}/rest/V1/contract/appointments/checkout`,
  PRECHECKOUT_APPOINTMENT: `${API_BASE_URL}/rest/V1/contract/appointments/precheckout`,
  GET_CONTRACT_BY_ID: (contractid) =>
    `${API_BASE_URL}/rest/V1/newdashboard/contract/${contractid}`,
  TERMINATE_CONTRACT: (contractid) =>
    `${API_BASE_URL}/rest/en/V1/contract/terminate/${contractid}`,
  CREATE_APPOINTMENTT: (contractagreement_id, value) =>
    `${API_BASE_URL}/rest/V1/newdashboard/meterreading-details/${contractagreement_id}/${value}`,
  ALL_CONTRACTS: `${API_BASE_URL}/rest/V1/newdashboard/contract/me?fields=items[id,sku,product_name,building_name,status,start_date,customer_id,refund_date]`,
  ACTIVE_CONTRACTS: `${API_BASE_URL}/rest/V1/newdashboard/activecontract/me`,
  GET_COUNTRIES: `${API_BASE_URL}/rest/V1/directory/countries`,
  GET_COUNTRYNAME_BY_CODE: (code) =>
    `${API_BASE_URL}/rest/V1/directory/countries/${code}`,
  SERVICE_COST_SETTLEMENT_BY_ID: (settlementid) =>
    `${API_BASE_URL}/rest/V1/newdashboard/servicecost/${settlementid}`,
  SERVICE_COSTS_CONTRACT_ID: (contractId) =>
    `${API_BASE_URL}/rest/V1/newdashboard/contract/servicecosts/${contractId}`,
  All_SETTLEMENTS: `${API_BASE_URL}/rest/V1/newdashboard/contract/servicecost/me?fields=items[settlement_id,product_name,contract_id,days_num,year,visible,settle_status,total]`,
  DOWNLOAD_SETTLEMENT_FILE: (settlementid) =>
    `${API_BASE_URL}/rest/V1/servicecost/reportpdf/${settlementid}`,
  GET_CUSTOMERS_ORDERS: `${API_BASE_URL}/rest/V1/customer/orders?fields=items[increment_id,entity_id,created_at,items[name,product_option],grand_total,status]`,
  DOWNLOAD_INVOICE: (orderId) =>
    `${API_BASE_URL}/rest/V1/customer/invoicepdf/${orderId}`,
  DOWNLOAD_CHECKOUT_OVERVIEW_FILE: (contractid, type) =>
    `${API_BASE_URL}/rest/V1/contract/getfile/${contractid}/${type}`,
  GET_BUILDINGS: `${API_BASE_URL}/rest/V1/newdashboard/contract/me?fields=items[id,building_name,product_name,sku,status]`,
  GET_ADMIN_USER: (userId) => `${API_BASE_URL}/rest/V1/users/${userId}`,
  LOTTRY_SUB: `${API_BASE_URL}/rest/V1/lottery/subscription`,
  LOTTRY_UNSUB: `${API_BASE_URL}/rest/V1/lottery/unsubscribe`,
  METER_READING: ($contract_id, value) =>
    `${API_BASE_URL}/rest/V1/newdashboard/meterreading-details/${$contract_id}/${value}`,
  SAVE_TENANT: (contract_id ) =>`${API_BASE_URL}/rest/V1/newdashboard/tenant/${contract_id}`,
  SAVE_INTERCOM: `${API_BASE_URL}/rest/V1/newdashboard/tenant/updateintercomphone`,
  SAVE_GUARANTOR: (contract_id ) =>
    `${API_BASE_URL}/rest/V1/newdashboard/guarantor/${contract_id}`,
  SAVE_PHONE: (contract_id) =>
    `${API_BASE_URL}/rest/V1/newdashboard/tenant/savephone/${contract_id}`,
  TASK_BY_ID: (task_id) =>
    `${API_BASE_URL}/rest/V1/customer/taskmanager/${task_id}`,
  CHAT_REPLY: ($task_id) =>
    `${API_BASE_URL}/rest/V1/customer/taskmanager/message/${$task_id}`,
  UPLOAD_PROOF_AND_IBAN: `${API_BASE_URL}/rest/V1/contract/deregistrationproof/upload`,
  UPDATE_IBAN: `${API_BASE_URL}/rest/V1/contract/updateiban`,
  UPDATE_TASK: `${API_BASE_URL}/rest/V1/customer/taskmanager/update`,
  CREATE_TASK: `${API_BASE_URL}/rest/V1/customer/taskmanager/new`,
  UPLOAD_ANNUAL_PROOF: `${API_BASE_URL}/rest/V1/contract/annuaproof/upload`,
  REQUEST_ADD_SECOND_TENANT: `${API_BASE_URL}/rest/V1/tenant/addsecondtenantrequest`,
  REQUEST_REMOVE_SECOND_TENANT: `${API_BASE_URL}/rest/V1/tenant/removesecondtenantrequest`,
  GET_CHAT: (task_id) =>
    `${API_BASE_URL}/rest/V1/customer/taskmanager/chat/${task_id}`,
  GET_ALL_TASKS: (sorttype, fieldName) =>
    `${API_BASE_URL}/rest/V1/customer/taskmanager/me?pagesize=999&currentPage=1&sortOrders_field=${fieldName}&direction=${sorttype.toUpperCase()}&fields=total_count,items[task_id,subject,priority,status_id,created_at,ref_building,ref_product_name,task_status,execution_start,updated_at,ca_user,ref_contract_id]`,
  UPDATE_INSURANCE: (arrange) =>
    `${API_BASE_URL}/rest/V1/insurances/update/${arrange}`,
  INSURANCE: (contract_id) =>
    `${API_BASE_URL}/rest/V1/insurance/apply/${contract_id}`,
  DUTCHCOURSE: (contract_id) =>
    `${API_BASE_URL}/rest/V1/applydutchcourse/${contract_id}`,
  PARKING_REQUEST: `${API_BASE_URL}/rest/V1/contract/parkingrequest`,
  GET_ALL_SKUS: `${API_BASE_URL}/rest/V1/newdashboard/webshopproducts/me`,
  HOLLYFITGROUND: `${API_BASE_URL}/rest/V1/request/hollyfitgroud`,
  TICKET_ATTACHMENT: (externalId) =>
    `${API_BASE_URL}/rest/V1/ticket/attachment/${externalId}`,
  EDIT_BILLING: `${API_BASE_URL}/rest/V1/customers/me`,
  GET_FAQ_ARTICLES: (catId, locale ) =>
    `${API_BASE_URL}/rest/V1/customer/faq/articles?searchCriteria[filter_groups][0][filters][0][field]=ac_category_id&searchCriteria[filter_groups][0][filters][0][value]=${catId}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][1][field]=store_ids&searchCriteria[filter_groups][1][filters][1][value]=${locale=="nl"?"1":"2"}&searchCriteria[filter_groups][1][filters][1][condition_type]=finset`,
  GET_FAQ_CATEGORIES: `${API_BASE_URL}/rest/V1/customer/faq/categories`,
  GET_FAQ_ARTICLE_LIST: `${API_BASE_URL}/rest/V1/faq/`,
  FAQ_SEARCH: (text,locale) =>
    `${API_BASE_URL}/rest/V1/faq/articlessearch?fulltext=${text}&storeid=${locale=="nl"?"1":"2"}`,
  GET_AVAILBLE_PARKINGS: `${API_BASE_URL}/rest/V1/customer/parkingspots/me`,
  GET_AVAILBLE_STORAGES: `${API_BASE_URL}/rest/V1/customer/storagespots/me`,
  GET_MANUAL_TABLE: `${API_BASE_URL}/rest/V1/manuals`,
  GET_MAILING_PREFERENCE: `${API_BASE_URL}/rest/V1/preference`,
  SAVE_PREFERENCE: (catId, isActive) =>
    `${API_BASE_URL}/rest/V1/save-preference/${catId}/${isActive}`,
  RESET_PASSWORD: `${API_BASE_URL}/rest/V1/customers/me/password`,
  AVAILBLE_BOOKDATE: (sku) =>
    `${API_BASE_URL}/rest/V1/availablestartdate/${sku}`,
  DOWNLOAD_PERSONAL_DATA: `${API_BASE_URL}/rest/V1/myprivacy/download/me`,
  DELETE_ACCOUNT: `${API_BASE_URL}/rest/V1/myprivacy/deleteaccount`,
  CHECKOUT_OVERVIEW: (contractId) =>
    `${API_BASE_URL}/rest/V1/newdashboard/checkoutoverview/${contractId}`,
  NOTIFICATION_POPUP: `${API_BASE_URL}/rest/V1/customer-notifications/me`,
  UPDATE_NOTIFICATION: (id) =>
    `${API_BASE_URL}/rest/V1/customer-notifications/update/${id}`,
  GET_COMPLAINT: (token) =>
    `${API_BASE_URL}/rest/V1/complaint-form-details/${token}`,
  SAVE_COMPLAINT: `${API_BASE_URL}/rest/V1/complaint-form-save`,
  GET_FEEDBACK_DATA: (rate, uid) =>
    `${API_BASE_URL}/rest/V1/satisfaction/rate/${rate}/uid/${uid}`,
  POST_FEEDBACK_DATA: (uid) =>
    `${API_BASE_URL}/rest/V1/satisfaction/uid/${uid}`,
  VERFY_SHORTSTAY: (token) =>
    `${API_BASE_URL}/rest/V1/customer/shortstay/verify/${token}`,
  VERIFY_SURVEY: (token) =>
    `${API_BASE_URL}/rest/V1/customer/survey/verify/${token}`,
  CANCEL_RESERVATION: (sku) =>
    `${API_BASE_URL}/rest/V1/customer/bookingcancel/${sku}`,
  UPDATE_CUSTOMER_DOB: `${API_BASE_URL}/rest/en/V1/customers/me`,
  VALIDATE_BINGO_FORM: `${API_BASE_URL}/rest/V1/bingoform/me`,
  VALIDATE_SNOWBALL_FORM: `${API_BASE_URL}/rest/V1/snowform/me`,
  INVENTORY_DOWNLOAD: (sku) => `${API_BASE_URL}/rest/V1/inventoryitemdoc/${sku}`,
  GOOGLE_CAPTCHA_VERIFY: `https://www.google.com/recaptcha/api/siteverify`,
  EMAIL_VERIFICATION_OTP: `${API_BASE_URL}/rest/V1/email/verify`,
  VERIFY_EMAIL_OTP: `${API_BASE_URL}/rest/V1/email/verify/confirm`,
  TFA_REGISTER: `${API_BASE_URL}/rest/V1/customer/register/twofa`,
  TFA_UNREGISTER: `${API_BASE_URL}/rest/V1/customer/twofa/unregister`,
  TFA_VERIFY: `${API_BASE_URL}/rest/V1/customer/verify/twofa`,
  TFA_SECRET: `${API_BASE_URL}/rest/V1/customer/twofa/secret`,
  TFA_GOOGLE_IMAGE: `${API_BASE_URL}/rest/V1/customer/twofa/googleurl`,
  TFA_HAS_ACTIVE:`${API_BASE_URL}/rest/V1/customer/twofa/status`,
  SUPPLIER_TASK_VIEW: (token) => `${API_BASE_URL}/rest/V1/supplier/task/view/${token}`,
  SUPPLIER_TASK_UPDATE: (token) => `${API_BASE_URL}/rest/V1/supplier/task/update/${token}`,
  SUPPLIER_TASK_CHAT: (token) => `${API_BASE_URL}/rest/V1/supplier/task/chat/${token}`,
  SUPPLIER_TASK_SEND_MSG: (token) => `${API_BASE_URL}/rest/V1/supplier/task/message/${token}`,
  GALLARY_IMAGES: (sku) => `${API_BASE_URL}/rest/V1/image-manager/${sku}`,
  SAVE_RATING: `${API_BASE_URL}/rest/en/V1/customer/survey/save`,
  DEADLINE_UPDATE: (token) => `${API_BASE_URL}/rest/V1/supplier/task/update-deadline/${token}`,
  UPDATE_CONTACT_INFO: (contract_id, type)=> `${API_BASE_URL}/rest/V1/newdashboard/tenant/updatephonebytype/${contract_id}/${type}`,
  UTENSILS_PREFERENCE: (contract_id, preference)=> `${API_BASE_URL}/rest/V1/newdashboard/savecontractbasicutensils/${contract_id}/${preference}`,
  SET_PERMISSION_ENTER:`${API_BASE_URL}/rest/V1/set-permission-enter`,
  GET_PREVIOUS_ACTIVETASK: (sorttype, fieldName) =>
    `${API_BASE_URL}/rest/V1/customer/previoustenanttasks/me?pagesize=999&currentPage=1&sortOrders_field=${fieldName}&direction=${sorttype.toUpperCase()}&fields=total_count,items[task_id,subject,priority,status_id,created_at,ref_building,ref_product_name,task_status,execution_start,updated_at,ca_user,ref_contract_id]`,
   GET_PREVIOUS_CHAT: (task_id) =>
    `${API_BASE_URL}/rest/default/V1/previoustenant/taskmanager/chat/${task_id}`,
};

export default endpoints;
