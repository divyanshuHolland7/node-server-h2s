import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {
  fetchActiveContractsService,
  getContractByIdService,
  settlementById,
  settlementByContractId,
  fetchContractsService,
  getMeterReadingService,
  getAllSettlementService,
  getBuildingsService,
  savetenantService,
  saveIntercomService,
  saveGuarantorService,
  savePhoneService,
  getAllSkuService,
  checkoutOverviewService,
  updateContactInfoService,
  utensilPrefrenceService
} from "../services/newDashboardService.js";

export const fetchActiveContracts = async (req, res) => {
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
    const response = await fetchActiveContractsService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const fetchContracts = async (req, res) => {
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
    const response = await fetchContractsService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};



export const getContractById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required",
        })
      );
    }

    const { contractid } = req.params;
    if (!contractid) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await getContractByIdService(contractid, headers);

    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in getContractById:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};



export const getSettlementById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required",
        })
      );
    }

    const { settlementid } = req.params;
    if (!settlementid) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Settlement ID is required",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    // Call the service
    const token = authorization;
    const response = await settlementById(settlementid, headers);

    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in getSettlementById:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};



export const getSettlementByContractId = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required",
        })
      );
    }

    const { contractId } = req.params;
    if (!contractId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    // Call the service

    const response = await settlementByContractId(contractId, headers);

    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in getSettlementById:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};


export const getMeterReading = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required",
        })
      );
    }

    const { contractId, value } = req.params;
    if (!contractId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }
    if (!value) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "value is required",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    // Call the service

    const response = await getMeterReadingService(contractId, value, headers);

    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in Meter Reading:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};


export const getAllSettlement = async (req, res) => {
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
    const response = await getAllSettlementService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getBuildings = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {fields} =  req.query
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
    const response = await getBuildingsService(headers,query);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const savetenant = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id} =  req.params
    const postData = req.body
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
          message: "contract-id is required ",
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
    const response = await savetenantService(headers,contract_id,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};



export const saveIntercom = async (req, res) => {
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
          message: "data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await saveIntercomService(headers,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in saveIntercom controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const saveGuarantor = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id} =  req.params
    const postData = req.body
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
          message: "contract-id is required ",
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
    const response = await saveGuarantorService(headers,contract_id,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const savePhone = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id} =  req.params
    const postData = req.body
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
          message: "contract-id is required ",
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
    const response = await savePhoneService(headers,contract_id,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in savePhone controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getAllSku = async (req, res) => {
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
    const response = await getAllSkuService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const checkoutOverview = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id} = req.params
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
          message: "Token is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await checkoutOverviewService(headers,contract_id);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const updateContactInfo = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id,type} = req.params
    const postData = req.body
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
          message: "Token is required ",
        })
      );
    }
      if (!type) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "type is required ",
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
    const response = await updateContactInfoService(headers,contract_id,type,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const utensilPrefrence = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id,preference} = req.params
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
          message: "Token is required ",
        })
      );
    }
      if (!preference) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "preference is required ",
        })
      );
    }
     
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await utensilPrefrenceService(headers,contract_id,type);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
