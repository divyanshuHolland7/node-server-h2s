import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const currentCustomerService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(endpoints.CURRENT_CUSTOMER, { headers });

    return response.data;
  } catch (error) {
    console.error("Error in current customer service:", error);
    throw error;
  }
};

export const registerCustomerService = async (body, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.REGISTER_CUSTOMER,
      { body },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in current customer service:", error);
    throw error;
  }
};

export const languageSwitchCustomerService = async (id, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(endpoints.LANGUAGE_SWITCH_CUSTOMER(id), {
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Error in current customer service:", error);
    throw error;
  }
};

export const updateDOBCustomerService = async (customer, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.put(
      endpoints.UPDATE_CUSTOMER_DOB,
      { customer },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in current customer service:", error);
    throw error;
  }
};


export const editBillingCustomerService = async (customer, headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.put(
      endpoints.EDIT_BILLING,
      { customer },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error in editBilling Customer Service:", error);
    throw error;
  }
};


