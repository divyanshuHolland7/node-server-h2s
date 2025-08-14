import { StatusCodes } from "http-status-codes";
import {
  customErrorResponse,
  internalErrorResponse,
  successResponse,
} from "../utils/common/responseObjects.js";
import {
  verifyTokenService,
  signInService,
  refreshTokenService,
  forgotPasswordCustomerService,
  createPasswordCustomerService,
  verifyPasswordTokenCustomerService,
  resetPasswordCustomerService
} from "../services/customersAuthService.js";

export const signIn = async (req, res) => {
  try {
    const response = await signInService(req.body);

    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, "User logged in successfully"));
  } catch (error) {
    console.log("User controller error", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

export async function verifyToken(req, res) {
  try {
    const response = await verifyTokenService(req.body.token);

    return res.status(200).json(
      successResponse({
        message: "Token verified successfully",
        data: response,
      })
    );
  } catch (error) {
    console.error("Error in verifyToken:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
}

export const refreshToken = async (req, res) => {
  try {
    const currentToken =
      req.body.token || req.headers.authorization?.split(" ")[1];
    if (!currentToken) {
      return res.status(StatusCodes.UNAUTHORIZED).json(
        customErrorResponse({
          message: "Refresh token is required",
          err: "Refresh token is required",
        })
      );
    }

    const response = await refreshTokenService(currentToken);
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, "Token refreshed successfully"));
  } catch (error) {
    console.error("Error in refreshToken:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

export async function forgotPasswordCustomer(req, res) {
  try {
    const body = req.body;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await forgotPasswordCustomerService(body, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function createPasswordCustomer(req, res) {
  try {
    const body = req.body;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await createPasswordCustomerService(body, headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function verifyPasswordTokenCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const { customerId, resetPasswordLinkToken } = req.params;
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

    if (!customerId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "customer_ID is required",
        })
      );
    }
    if (!resetPasswordLinkToken) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "reset Password Link Token is required",
        })
      );
    }
    const response = await verifyPasswordTokenCustomerService(
      customerId,
      resetPasswordLinkToken,
      headers
    );
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}


export async function resetPasswordCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const body = req.body;
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

  
    const response = await resetPasswordCustomerService(
      body,
      headers
    );
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}