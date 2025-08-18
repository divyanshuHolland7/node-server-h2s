import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const fetchActiveContractsService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.ACTIVE_CONTRACTS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new dashboard service:", error);
    throw error;
  }
};

export const fetchContractsService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.ALL_CONTRACTS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new dashboard service:", error);
    throw error;
  }
};

export const getContractByIdService = async (id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }

    if (!id) {
      throw new ClientError({
        message: "Contract ID is required",
        StatusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const url = `${endpoints.GET_CONTRACT_BY_ID(id)}`;
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in getContractByIdService:", error);
    throw error;
  }
};

export const settlementById = async (settlementid, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }

    if (!settlementid) {
      throw new ClientError({
        message: "Settlement ID is required",
        StatusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const url = endpoints.SERVICE_COST_SETTLEMENT_BY_ID(settlementid);
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in settlementById service:", error);
    throw error;
  }
};

export const settlementByContractId = async (contractId, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }

    if (!contractId) {
      throw new ClientError({
        message: "contractId is required",
        StatusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const url = endpoints.SERVICE_COSTS_CONTRACT_ID(contractId);
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in contractId service:", error);
    throw error;
  }
};

export const getMeterReadingService = async (contractId, value, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }

    if (!contractId) {
      throw new ClientError({
        message: "contractId is required",
        StatusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const url = endpoints.METER_READING(contractId, value);
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in contractId service:", error);
    throw error;
  }
};

export const getAllSettlementService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.All_SETTLEMENTS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in getAllSettlement Service:", error);
    throw error;
  }
};

export const getBuildingsService = async (headers, query) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.GET_BUILDINGS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in getAllSettlement Service:", error);
    throw error;
  }
};

export const savetenantService = async (headers, contract_id, postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.post(
      endpoints.SAVE_TENANT(contract_id),
      postData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in savetenantService :", error);
    throw error;
  }
};

export const saveIntercomService = async (headers, postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.post(endpoints.SAVE_INTERCOM, postData, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error in saveIntercomService :", error);
    throw error;
  }
};

export const saveGuarantorService = async (headers, contract_id, postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.post(
      endpoints.SAVE_GUARANTOR(contract_id),
      postData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in savetenantService :", error);
    throw error;
  }
};

export const savePhoneService = async (headers, contract_id, postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.post(
      endpoints.SAVE_PHONE(contract_id),
      postData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in savePhone Service :", error);
    throw error;
  }
};

export const getAllSkuService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.GET_ALL_SKUS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in getAllSku Service :", error);
    throw error;
  }
};

export const checkoutOverviewService = async (headers, contract_id) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.CHECKOUT_OVERVIEW(contract_id), {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error in checkoutOverview Service :", error);
    throw error;
  }
};

export const updateContactInfoService = async (
  headers,
  contract_id,
  type,
  postData
) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(
      endpoints.UPDATE_CONTACT_INFO(contract_id, type),
      postData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in updateContactInfoService :", error);
    throw error;
  }
};

export const utensilPrefrenceService = async (
  headers,
  contract_id,
  preference
) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(
      endpoints.UTENSILS_PREFERENCE(contract_id, preference),
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in utensilPrefrenceService  :", error);
    throw error;
  }
};
