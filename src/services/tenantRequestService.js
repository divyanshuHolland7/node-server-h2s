import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

let source = null;

export const addTenantRequestService = async (headers,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.REQUEST_ADD_SECOND_TENANT,postData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new addTenantRequestService:", error);
    throw error;
  }
};

export const requestRemoveSecondTenantService = async (headers,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.REQUEST_ADD_SECOND_TENANT,postData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new requestRemoveSecondTenant:", error);
    throw error;
  }
};


export const dutchCourseService = async (headers,contract_id,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.DUTCHCOURSE(contract_id), postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new dutchCourseService:", error);
    throw error;
  }
};


export const ticketAttachmentService = async (headers,externalId) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.TICKET_ATTACHMENT(externalId),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new ticketAttachmentService:", error);
    throw error;
  }
};

export const hollyFitGroundService = async (headers,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.HOLLYFITGROUND, postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new hollyFitGroundService:", error);
    throw error;
  }
};



export const faqSearchService = async (headers, text = "", locale = "") => {
  try {
    // Cancel previous request if still pending
    if (source) {
      source.cancel("Request canceled by the server (new request came in)");
    }

    source = axios.CancelToken.source();

    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(
      endpoints.FAQ_SEARCH(text, locale),
      {
        cancelToken: source.token,
        headers: {
          Authorization: headers?.authorization || "",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return { canceled: true, message: "Request canceled" };
    } else {
      throw error;
    }
  }
};


export const getManualTableService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_MANUAL_TABLE,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getManualTableService:", error);
    throw error;
  }
};


export const getMailingPrefrenceService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_MAILING_PREFERENCE,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getMailingPrefrenceService:", error);
    throw error;
  }
};



export const availableBookDateService = async (sku,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.AVAILBLE_BOOKDATE(sku),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new availableBookDateService:", error);
    throw error;
  }
};



export const downloadPrivacyService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.DOWNLOAD_PERSONAL_DATA,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new downloadPrivacyService:", error);
    throw error;
  }
};

export const deleteAccountService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.delete(endpoints.DELETE_ACCOUNT,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new deleteAccountService:", error);
    throw error;
  }
};


export const notificaitonPopupService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.NOTIFICATION_POPUP,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new notificaitonPopupService:", error);
    throw error;
  }
};

export const updateNotificationService = async (id,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.UPDATE_NOTIFICATION(id),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new updateNotificationService:", error);
    throw error;
  }
};


export const getComplaintService = async (token,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_COMPLAINT(token),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getComplaintService:", error);
    throw error;
  }
};

export const saveComplaintFormService = async (postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.SAVE_COMPLAINT,postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new saveComplaintFormService:", error);
    throw error;
  }
};


export const getFeedbackDataService = async (rate,uid,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.GET_FEEDBACK_DATA(rate,uid),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getFeedbackDataService:", error);
    throw error;
  }
};


export const postFeedbackService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.POST_FEEDBACK_DATA(uid),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new postFeedbackService:", error);
    throw error;
  }
};



export const validateBingoFormService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.VALIDATE_BINGO_FORM,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new validateBingoFormService:", error);
    throw error;
  }
};


export const validateSnowFormService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.VALIDATE_SNOWBALL_FORM,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new validateSnowFormService:", error);
    throw error;
  }
};


export const inventoryDownloadService = async (sku,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.INVENTORY_DOWNLOAD(sku),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new inventoryDownloadService:", error);
    throw error;
  }
};


export const emailVerificationOtpService = async (postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.EMAIL_VERIFICATION_OTP,postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new emailVerificationOtpService:", error);
    throw error;
  }
};


export const verifyEmailOtpService = async (postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.VERIFY_EMAIL_OTP,postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new verifyEmailOtpService:", error);
    throw error;
  }
};


export const gallaryImageService = async (sku,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GALLARY_IMAGES(sku),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new gallaryImageService:", error);
    throw error;
  }
};


export const setPermissionEnterService = async (postData,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GALLARY_IMAGES(postData),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new setPermissionEnterService:", error);
    throw error;
  }
};


export const getPreviousChatService = async (task_id,headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_PREVIOUS_CHAT(task_id),{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getPreviousChatService:", error);
    throw error;
  }
};