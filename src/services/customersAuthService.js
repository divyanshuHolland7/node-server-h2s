import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const signInService = async (data) => {
  try {
    const { username, password } = data;
    if (!username || !password) {
      throw new ClientError({
        message: "Email and password are required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.post(
      endpoints.GET_TOKEN,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in signInService:", error);
    throw error;
  }
};

export const verifyTokenService = async (token) => {
  try {
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const verifyTokenUrl = endpoints.VERIFY_TOKEN(token);
    const response = await axios.get(verifyTokenUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in verifyTokenService:", error);
    throw error;
  }
};

export const refreshTokenService = async (currentToken) => {
  const refreshTokenUrl = endpoints.REFRESH_TOKEN;
  try {
    if (!currentToken) {
      throw new ClientError({
        message: "Refresh token is required",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const response = await axios.get(refreshTokenUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + currentToken,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in refreshTokenService:", error);
    throw error;
  }
};

export const forgotPasswordCustomerService = async (body, headers) => {
  try {
    const response = await axios.post(
      endpoints.FORGOT_PASSWORD,
      { body },
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in signInService:", error);
    throw error;
  }
};

export const createPasswordCustomerService = async (body, headers) => {
  try {
    const response = await axios.post(
      endpoints.CREATE_PASSWORD,
      { body },
      { headers}
    );
    return response.data;
  } catch (error) {
    console.error("Error in signInService:", error);
    throw error;
  }
};

export const verifyPasswordTokenCustomerService = async (customerId,resetPasswordLinkToken,headers) => {
  try {
    const response = await axios.get(
      endpoints.VERIFY_PASSWORD_TOKEN(customerId,resetPasswordLinkToken),
      { headers}
    );
    return response.data;
  } catch (error) {
    console.error("Error in verifyPassword Token Customer:", error);
    throw error;
  }
};


export const resetPasswordCustomerService = async (body,headers) => {
  try {
    const response = await axios.put(
      endpoints.RESET_PASSWORD,{body},
      { headers}
    );
    return response.data;
  } catch (error) {
    console.error("Error in verifyPassword Token Customer:", error);
    throw error;
  }
};

