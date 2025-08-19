import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const getAllPostsService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_POSTS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAllPostsService:", error);
    throw error;
  }
};  

export const getAllTenantPostsService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_ALL_BLOG_POSTS, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAllTenantPostsService:", error);
    throw error;
  }
};  

export const getCategoryService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_CATEGORIES, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getCategoryService:", error);
    throw error;
  }
};  


export const getAuthorService = async (headers,urlkey) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_AUTHOR(urlkey), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAuthorService:", error);
    throw error;
  }
};


export const getBlogDetailService = async (headers,urlkey) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_DETAIL(urlkey), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAuthorService:", error);
    throw error;
  }
};


export const blogSearchService = async (headers,urlkey) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.BLOG_SEARCH(urlkey), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new blogSearchService:", error);
    throw error;
  }
};

export const getAuthorByIdService = async (headers,authorId) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_BY_AUTHORID(authorId), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAuthorByIdService:", error);
    throw error;
  }
};


export const getBlogByCatIdService = async (headers,catId) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_BY_CATID(catId), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getBlogByCatIdService:", error);
    throw error;
  }
};

export const getBlogTagsService = async (headers,url) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_TAGS(url), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getBlogTagsService:", error);
    throw error;
  }
};


export const getBlogResultService = async (headers,querystring) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_BLOG_RESULT(querystring), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getBlogResultService:", error);
    throw error;
  }
};
