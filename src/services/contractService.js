import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export  const createAppointmentService = async (type,contractId,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.CREATE_APPOINTMENT(type,contractId),{headers})
   return response.data
}
catch(error){
    console.error("error in createAppointment Service",error);
    throw error;
}
}

export  const checkinAppointmentService = async (appoinment,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.CHECKIN_APPOINTMENT,{appoinment},{headers})
   return response.data
}
catch(error){
    console.error("error in checkinAppointment Service",error);
    throw error;
}
}

export  const checkoutAppointmentService = async (appoinment,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.CHECKOUT_APPOINTMENT,{appoinment},{headers})
   return response.data
}
catch(error){
    console.error("error in checkoutAppointment Service",error);
    throw error;
}
}

export  const PreCheckoutAppointmentService = async (appoinment,precheckout,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.PRECHECKOUT_APPOINTMENT,{appoinment,precheckout},{headers})
   return response.data
}
catch(error){
    console.error("error in PreCheckoutAppointment Service",error);
    throw error;
}
}


export  const terminateContractService = async (contractId,body,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    if(!body){
        throw new ClientError({
            message:"data is missing",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.TERMINATE_CONTRACT(contractId),{body},{headers})
   return response.data
}
catch(error){
    console.error("error in terminateContract Service",error);
    throw error;
}
}


export  const downloadChekoutOverviewFileService = async (type,contractId,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios({
      method: 'GET',
      url: endpoints.DOWNLOAD_CHECKOUT_OVERVIEW_FILE(contractid, type),
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
        'Authorization': headers.authorization,
      },
    });
   return response.data
}
catch(error){
    console.error("error in downloadChekoutOverviewFile Service",error);
    throw error;
}
}

export  const uploadProofIBANService = async (postData,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.UPLOAD_PROOF_AND_IBAN,postData,{headers})
   return response.data
}
catch(error){
    console.error("error in uploadProofIBANService",error);
    throw error;
}
}

export  const updateIBANService = async (postData,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.UPDATE_IBAN,postData,{headers})
   return response.data
}
catch(error){
    console.error("error in updateIBANService",error);
    throw error;
}
}

export  const uploadAnnualProofService = async (postData,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.UPLOAD_ANNUAL_PROOF,postData,{headers})
   return response.data
}
catch(error){
    console.error("error in uploadAnnualProofService",error);
    throw error;
}
}


export  const parkingRequestService = async (postData,headers)=>{
try {
    if(!headers){
        throw new ClientError({
            message:"Token is required",
            statusCode:StatusCodes.NOT_FOUND
        })
    }
    const response = await axios.put(endpoints.PARKING_REQUEST,postData,{headers})
   return response.data
}
catch(error){
    console.error("error in parkingRequestService",error);
    throw error;
}
}