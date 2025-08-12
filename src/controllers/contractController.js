import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";

import {
  checkinAppointmentService,
  createAppointmentService,
  checkoutAppointmentService,
  terminateContractService,
  downloadChekoutOverviewFileService,
  uploadProofIBANService,
  uploadAnnualProofService,
  parkingRequestService
} from "../services/contractService.js";

export const createAppointments = async (req, res) => {
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
    const { contractId, type } = req.params;
    if (!contractId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }
    if (!type) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "type is required",
        })
      );
    }
    const response = await createAppointmentService(type, contractId, headers);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create appointment controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const appointmentCheckin = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { appoinment } = req.body;
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

    if (Object.keys(appoinment).length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Appointment time and Contract ID is required",
        })
      );
    }

    const response = await checkinAppointmentService(appoinment, headers);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in checkin appointment controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const appointmentCheckout = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { appoinment } = req.body;
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

    if (Object.keys(appoinment).length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Appointment time and Contract ID is required",
        })
      );
    }

    const response = await checkoutAppointmentService(appoinment, headers);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in checkout appointment controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const appointmentPreCheckout = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { appoinment } = req.body;
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

    if (Object.keys(appoinment).length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Appointment time and Contract ID is required",
        })
      );
    }

    const response = await checkoutAppointmentService(appoinment, headers);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in checkout appointment controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const terminateContract = async (req, res) => {
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
    const { contractId } = req.params;
    if (!contractId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }

    const response = await terminateContractService(
      contractId,
      req.body,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create appointment controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const downloadChekoutOverviewFile = async (req, res) => {
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
    const { contractId, type } = req.params;
    if (!contractId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Contract ID is required",
        })
      );
    }
    if (!type) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "type is required",
        })
      );
    }
    const response = await downloadChekoutOverviewFileService(
      type,
      contractId,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error indownloadChekoutOverviewFile controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};


export const uploadProofIBAN = async (req, res) => {
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
    const { postData } = req.body;
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required",
        })
      );
    }

    const response = await uploadProofIBANService(
     postData,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create UploadProofAndIban controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const updateIBAN = async (req, res) => {
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
    const  postData  = req.body;
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required",
        })
      );
    }

    const response = await updateIBANService(
     postData,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create UploadProofAndIban controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const uploadAnnualProof = async (req, res) => {
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
    const  {postData}  = req.body;
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "postData is required",
        })
      );
    }

    const response = await uploadAnnualProofService(
     postData,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create UploadProofAndIban controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};

export const parkingRequest = async (req, res) => {
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
    const  postData  = req.body;
    if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is insufficent",
        })
      );
    }

    const response = await parkingRequestService(
     postData,
      headers
    );
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error("Error in create parkingRequest controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(error);
    }

    // Axios-specific error handling
    if (error.response) {
      return res.status(error.response.status || 500).json({
        message: error.response.data?.message || "Internal server error",
        status: error.response.status,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Internal server error",
    });
  }
};