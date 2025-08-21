import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {lotterySubscriptionService,lotteryUnSubscribeService} from "../services/lotteryService.js";


export const lotterySubscription = async (req, res) => {
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
    const response = await lotterySubscriptionService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const lotteryUnSubscribe = async (req, res) => {
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
    const response = await lotteryUnSubscribeService(headers,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in lotterySubscription controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};