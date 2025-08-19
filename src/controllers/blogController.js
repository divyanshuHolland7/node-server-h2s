import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import { 
  getAllPostsService,
  getAllTenantPostsService,
  getCategoryService,
  getAuthorService,
  getBlogDetailService,
  blogSearchService,
  getAuthorByIdService,
  getBlogByCatIdService,
  getBlogTagsService,
  getBlogResultService
} from "../services/blogService.js";


export const getAllPosts = async (req, res) => {
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
    const response = await getAllPostsService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getAllTenantPosts = async (req, res) => {
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
    const response = await getAllTenantPostsService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getCategory = async (req, res) => {
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
    const response = await getCategoryService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getAuthor = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {urlkey} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!urlkey) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "urlKey is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getAuthorService(headers,urlkey);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};



export const getBlogDetail = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {urlkey} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!urlkey) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "urlKey is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getBlogDetailService(headers,urlkey);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const blogSearch = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {urlkey} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!urlkey) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "urlKey is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await blogSearchService(headers,urlkey);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {authorId} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!authorId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "authorId is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getAuthorByIdService(headers,authorId);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getBlogByCatId = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {catId} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!catId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "catId is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getBlogByCatIdService(headers,catId);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getBlogTags = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {url} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!url) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "url is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getBlogTagsService(headers,url);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const getBlogResult = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {querystring} = req.params
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
     if (!querystring) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "querystring is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getBlogResultService(headers,querystring);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getBlogDetail controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};