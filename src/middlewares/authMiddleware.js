import axios from "axios"
import endpoints from "../config/endPoint.js";// reuse same endpoint file
import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
const  verifyMagentoToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(StatusCodes.UNAUTHORIZED).json(
        customErrorResponse({
            message:"Unauthorized : token is missing",
            err:"Unauthorized : token is missing"
        })
    );
  }

  const token = authHeader.split(' ')[1];

  try {
    const response = await axios.get(endpoints.VERIFY_TOKEN(token), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = response?.data?.[0];
    if (result && result.error === false) {
      req.magentoUser = result; // attach user info to req
      return next();
    } else {
      return res.status(StatusCodes.FORBIDDEN).json(
        customErrorResponse({
            message:"Invalid Token",
            err:"Invalid Token"
        })
      );
    }
  } catch (err) {
    console.error(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
        customErrorResponse({
            message:err.message,
            err:err.message
        })
    );
  }
};

 export default verifyMagentoToken;
