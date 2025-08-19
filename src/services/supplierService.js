import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const viewTaskSupplierService = async (headers,token) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.SUPPLIER_TASK_VIEW(token), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new viewTaskSupplierService:", error);
    throw error;
  }
};


export const taskUpdateSupplierService = async (headers,token) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.put(endpoints.SUPPLIER_TASK_UPDATE(token), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new taskUpdateSupplierService:", error);
    throw error;
  }
};


export const chatTaskSupplierService = async (headers,token) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.get(endpoints.SUPPLIER_TASK_CHAT(token), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new chatTaskSupplier Service:", error);
    throw error;
  }
};


export const sendMsgSupplierService = async (headers,token,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.put(endpoints.SUPPLIER_TASK_SEND_MSG(token),postData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new sendMsgSupplier Service:", error);
    throw error;
  }
};


export const deadlineUpdateSupplierService = async (headers,token,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    if (!token) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
    const response = await axios.put(endpoints.DEADLINE_UPDATE(token),postData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new deadlineUpdateSupplier Service :", error);
    throw error;
  }
};