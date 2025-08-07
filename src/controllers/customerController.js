
import { StatusCodes } from "http-status-codes";
import {
    customErrorResponse,
    internalErrorResponse,
    successResponse
  } from '../utils/common/responseObjects.js';
import { verifyTokenService ,signInService,refreshTokenService} from '../services/customerService.js';


  export const signIn = async (req, res) => {
    try {
      
       const response = await signInService(req.body);
      
      return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'User logged in successfully'));
    } catch (error) {
      console.log('User controller error', error);
  
      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
  
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  }

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
    const currentToken =req.body.token || req.headers.authorization?.split(' ')[1];
    if (!currentToken) {
      return res.status(StatusCodes.UNAUTHORIZED).json(
        customErrorResponse({
          message: "Refresh token is required",
          err: "Refresh token is required"
        })
      );
    }
    
    const response = await refreshTokenService(currentToken);
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, 'Token refreshed successfully'));
  } catch (error) {
    console.error('Error in refreshToken:', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
}