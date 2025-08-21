import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {
  addTenantRequestService,
  requestRemoveSecondTenantService,
  dutchCourseService,
  ticketAttachmentService,
  hollyFitGroundService,
  faqSearchService,
  getManualTableService,
  getMailingPrefrenceService,
  availableBookDateService,
  downloadPrivacyService,
  deleteAccountService,
  notificaitonPopupService,
  updateNotificationService,
  getComplaintService,
  saveComplaintFormService,
  getFeedbackDataService,
  postFeedbackService,
  validateBingoFormService,
  validateSnowFormService,
  inventoryDownloadService,
  emailVerificationOtpService,
  verifyEmailOtpService,
  gallaryImageService,
  setPermissionEnterService
} from "../services/tenantRequestService.js";

export const addTenantRequest = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const postData = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await addTenantRequestService(headers, postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const requestRemoveSecondTenant = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const postData = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await requestRemoveSecondTenantService(headers, postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const dutchCourse = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { contract_id } = req.params;
    const postData = req.body;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!contract_id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "contract_id is required ",
        })
      );
    }

    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await dutchCourseService(headers, contract_id, postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const ticketAttachment = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { externalId } = req.params;
   

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!externalId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "externalId is required ",
        })
      );
    }

    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await ticketAttachmentService(
      headers,
      externalId,
    );
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const hollyFitGround = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const postData = req.body;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

  

    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await hollyFitGroundService(headers, postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const faqSearch = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {text,query} = req.query
    const postData = req.body;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

  

    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await faqSearchService(headers, postData,text,locale);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const getManualTable = async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

  

   

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getManualTableService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const getMailingPrefrence = async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getMailingPrefrenceService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const savePrefrence = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {catId,isActive} = req.params

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!catId||!isActive) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }


  

   

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await savePrefrenceService(headers, catId,isActive);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const availableBookDate = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {sku} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!sku) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "sku is required ",
        })
      );
    }


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await availableBookDateService(sku,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const downloadPrivacy = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await downloadPrivacyService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const deleteAccount = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await deleteAccountService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const notificaitonPopup = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await notificaitonPopupService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const updateNotification = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {id} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await updateNotificationService(id,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const getComplaint = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {token} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!token) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getComplaintService(token,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}



export const saveComplaintForm = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const postData = req.body
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Data is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await saveComplaintFormService(postData,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export const getFeedbackData = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {rate,uid} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!rate||!uid) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "rate and uid is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getFeedbackDataService(rate,uid,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const postFeedback = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {uid} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!!uid) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: " uid is required ",
        })
      );
    }
    


    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await postFeedbackService(uid,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}



export const validateBingoForm = async (req, res) => {
  try {
    const { authorization } = req.headers;
   
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await validateBingoFormService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const validateSnowForm = async (req, res) => {
  try {
    const { authorization } = req.headers;
   
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await validateSnowFormService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const inventoryDownload = async (req, res) => {
  try {
    const { authorization } = req.headers;
   const {sku} =req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!sku) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "sku is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await inventoryDownloadService(sku,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const emailVerificationOtp = async (req, res) => {
  try {
    const { authorization } = req.headers;
   const postData =req.body
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await emailVerificationOtpService(postData,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const verifyEmailOtp = async (req, res) => {
  try {
    const { authorization } = req.headers;
   const postData =req.body
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await verifyEmailOtpService(postData,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const gallaryImage = async (req, res) => {
  try {
    const { authorization } = req.headers;
   const {sku} =req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!sku) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "sku is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await gallaryImageService(sku,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export const setPermissionEnter = async (req, res) => {
  try {
    const { authorization } = req.headers;
   const postData =req.body
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await setPermissionEnterService(postData,headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}