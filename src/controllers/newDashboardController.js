import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";

import {
  fetchActiveContractsService,
  getContractByIdService,
  settlementById,
  settlementByContractId,
  fetchContractsService,
  getMeterReadingService,
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
