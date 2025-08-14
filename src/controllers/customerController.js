import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import { 
  chatReplyCustomerService,
  updateTaskCustomerService,
  createTaskCustomerService,
  getChatCustomerService,
  getAllTasksCustomerService,
  getAllArticlesCustomerService,
  getCategoriesCustomerService,
  getAvailableParkingCustomerService,
  getAvailableStoragesCustomerService,
  verifyShortStayCustomerService,
  cancelBookingCustomerService,
  verifySurveyCustomerService,
  TFARegisterCustomerService,
  twoFAUnregisterCustomerService,
  twoFAVerifyCustomerService,
  TFAGoogleImageCustomerService,
  hasActiveCustomerService,
  TFASecretCustomerService,
  saveRatingCustomerService,
  taskByIdCustomerService,
  CustomerDetailsByIdService,
  CustomerProfilePicService,
  saveCustomerProfilepicService,
  getAllNotificationCustomerService,
  getOrdersCustomerService,
  downloadInvoiceCustomerervice,
  getPreviousTenantTaskService
 } from "../services/customerService.js";



export async function CustomerDetailsById(req, res) {
  try {
    const { authorization } = req.headers;
    const {id} = req.params;
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
          message: "task id is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await CustomerDetailsByIdService(id, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function downloadInvoiceCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {orderId} = req.params;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!orderId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task id is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await downloadInvoiceCustomerervice(orderId, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in downloadInvoiceCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
export async function saveCustomerProfilepic(req, res) {
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
          message: "task manager data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await saveCustomerProfilepicService(postData, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

 export async function chatReplyCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {task_id} = req.params;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!task_id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task id is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await chatReplyCustomerService(task_id, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function taskByIdCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {task_id} = req.params;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!task_id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task id is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await taskByIdCustomerService(task_id, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function updateTaskCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const taskmanager = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!taskmanager) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task manager data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await updateTaskCustomerService(taskmanager, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function createTaskCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const taskmanager = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!taskmanager) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task manager data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await createTaskCustomerService(taskmanager, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in createTaskCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function getChatCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {task_id} = req.params;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!task_id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "task manager data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await getChatCustomerService(task_id, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function getAllTasksCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const { sortType, fieldName } = req.query;
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

    const response = await getAllTasksCustomerService(sortType,fieldName, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getAllTasksCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
export async function getPreviousTenantTask(req, res) {
  try {
    const { authorization } = req.headers;
    const { sortType, fieldName } = req.query;
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

    const response = await getPreviousTenantTaskService(sortType,fieldName, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getPreviousTenantTask controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function getAllArticlesCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const { catId, locale } = req.query;
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

    const response = await getAllArticlesCustomerService(catId,locale, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function getCategoriesCustomer(req, res) {
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

    const response = await getCategoriesCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getAvailableParkingCustomer(req, res) {
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

    const response = await getAvailableParkingCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getAvailableStoragesCustomer(req, res) {
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

    const response = await getAvailableStoragesCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function verifyShortStayCustomer(req, res) {
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

    const response = await verifyShortStayCustomerService(token,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function cancelBookingCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {sku} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "token is required ",
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

    const response = await cancelBookingCustomerService(sku,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function verifySurveyCustomer(req, res) {
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

    const response = await verifySurveyCustomerService(token,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in verifySurveyCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function TFARegisterCustomer(req, res) {
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
          message: "postData is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await TFARegisterCustomerService(postData,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in verifySurveyCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function twoFAUnregisterCustomer(req, res) {
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

    const response = await twoFAUnregisterCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in twoFAUnregisterCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function twoFAVerifyCustomer(req, res) {
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
          message: "postData is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await twoFAVerifyCustomerService(postData,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in verifySurveyCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function TFAGoogleImageCustomer(req, res) {
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
          message: "postData is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await TFAGoogleImageCustomerService(postData,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in verifySurveyCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function hasActiveCustomer(req, res) {
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

    const response = await hasActiveCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }

}

export async function TFASecretCustomer(req, res) {
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

    const response = await TFASecretCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getChatCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }

}


export async function saveRatingCustomer(req, res) {
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
          message: "postData is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await saveRatingCustomerService(postData,headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in verifySurveyCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function CustomerProfilePic(req, res) {
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

    const response = await CustomerProfilePicService( headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in CustomerProfilePic controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getAllNotificationCustomer(req, res) {
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

    const response = await getAllNotificationCustomerService( headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getAllNotificationCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function getOrdersCustomer(req, res) {
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

    const response = await getOrdersCustomerService( headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getOrdersCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}