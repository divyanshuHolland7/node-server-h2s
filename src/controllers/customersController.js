import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {
  currentCustomerService,
  registerCustomerService,
  languageSwitchCustomerService,
  updateDOBCustomerService,
  editBillingCustomerService
} from "../services/customersService.js";

export async function currentCustomer(req, res) {
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

    const response = await currentCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function languageSwitchCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;
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

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "ID is required",
        })
      );
    }
    const response = await languageSwitchCustomerService(id, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in languageSwitchCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function registerCustomer(req, res) {
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

    const response = await registerCustomerService(body, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function updateDOBCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {customer} = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!customer) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "customer data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await updateDOBCustomerService(customer, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in updateDOBCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function editBillingCustomer(req, res) {
  try {
    const { authorization } = req.headers;
    const {customer} = req.body;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!customer) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "customer data is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };

    const response = await editBillingCustomerService(customer, headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in editBillingCustomer controller:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}