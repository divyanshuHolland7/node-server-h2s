import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";



export const CustomerDetailsByIdService = async (id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_CUSTOMERDETAILS_BY_ID(id),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in chat ReplyCustomerService:", error);
    throw error;
  }
}

export const saveCustomerProfilepicService = async (postData, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.SAVE_CUSTOMER_PIC,
      postData,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in updateTaskCustomerService:", error);
    throw error;
  }
}


export const chatReplyCustomerService = async (task_id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.put(
      endpoints.CHAT_REPLY(task_id),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in chat ReplyCustomerService:", error);
    throw error;
  }
}

export const taskByIdCustomerService = async (task_id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.TASK_BY_ID(task_id),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in chat ReplyCustomerService:", error);
    throw error;
  }
}

export const updateTaskCustomerService = async (taskmanager, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.UPDATE_TASK,
      taskmanager,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in updateTaskCustomerService:", error);
    throw error;
  }
}


export const createTaskCustomerService = async (taskmanager, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.CREATE_TASK,
      taskmanager,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in updateTaskCustomerService:", error);
    throw error;
  }
}


export const getChatCustomerService = async (task_id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_CHAT(task_id),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getChatCustomerService:", error);
    throw error;
  }
}


export const getAllTasksCustomerService = async (sortType,fieldName, headers) => {
  console.log(sortType,fieldName,"sortType,fieldName-------")
  try {
    const sorting= sortType? sortType.toUpperCase(): ""
    const field= fieldName? fieldName : ""
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }
      
    const response = await axios.get(
      endpoints.GET_ALL_TASKS(sorting,field),
      { headers }
    );

    return response.data;
  } catch (error) {
    // console.error("Error in getAllTasksCustomerService:", error);
    throw error;
  }
}


export const getPreviousTenantTaskService = async (sorttype,fieldName, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_PREVIOUS_ACTIVETASK(sorttype,fieldName),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getPreviousTenantTaskService:", error);
    throw error;
  }

}


export const getAllArticlesCustomerService = async (catId,locale, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_FAQ_ARTICLES(catId,locale),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getAllTasksCustomerService:", error);
    throw error;
  }
}

export const getCategoriesCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_FAQ_CATEGORIES,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getAllTasksCustomerService:", error);
    throw error;
  }
}


export const getAvailableParkingCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_AVAILBLE_PARKINGS,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getAllTasksCustomerService:", error);
    throw error;
  }
}


export const getAvailableStoragesCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_AVAILBLE_STORAGES,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getAvailableStoragesCustomerService:", error);
    throw error;
  }
}

export const verifyShortStayCustomerService = async ( token,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.VERFY_SHORTSTAY(token),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify ShortStay Service:", error);
    throw error;
  }
}

export const cancelBookingCustomerService = async ( sku,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.CANCEL_RESERVATION(sku),
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify cancel Booking Customer Service:", error);
    throw error;
  }
}

export const verifySurveyCustomerService = async ( token,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.VERIFY_SURVEY(token),
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify Survey Customer Service:", error);
    throw error;
  }
}

export const TFARegisterCustomerService = async ( postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.TFA_REGISTER,
      postData,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify Survey Customer Service:", error);
    throw error;
  }
}


export const twoFAUnregisterCustomerService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.TFA_UNREGISTER,
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify Survey Customer Service:", error);
    throw error;
  }
}


export const twoFAVerifyCustomerService = async ( postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.TFA_REGISTER,
      postData,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify twoFAVerify Customer Service:", error);
    throw error;
  }
}

export const TFAGoogleImageCustomerService = async ( postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.TFA_GOOGLE_IMAGE,
      postData,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in TFAGoogleImage Customer Service:", error);
    throw error;
  }
}

export const hasActiveCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.TFA_HAS_ACTIVE,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in hasActiveCustomerService:", error);
    throw error;
  }
}


export const TFASecretCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.TFA_SECRET,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in TFASecretCustomerService:", error);
    throw error;
  }
}

export const saveRatingCustomerService = async ( postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.SAVE_RATING,
      postData,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in verify Survey Customer Service:", error);
    throw error;
  }
}

export const CustomerProfilePicService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_CUSTOMER_PIC,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in CustomerProfilePicService:", error);
    throw error;
  }
}

export const getAllNotificationCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_ALL_NOTIFICATIONS,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getAllTasksCustomerService:", error);
    throw error;
  }
}

export const getOrdersCustomerService = async ( headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.GET_CUSTOMERS_ORDERS,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in getOrdersCustomerService:", error);
    throw error;
  }
}

export const downloadInvoiceCustomerervice = async (id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.DOWNLOAD_INVOICE(id),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in chat ReplyCustomerService:", error);
    throw error;
  }
}