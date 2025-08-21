import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";


export const getCountriesService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_COUNTRIES, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getCountriesService:", error);
    throw error;
  }
};  



export const getCountriesByIdService = async (headers,code) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_COUNTRYNAME_BY_CODE(code), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getCountriesByIdService:", error);
    throw error;
  }
};  


