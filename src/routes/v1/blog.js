import express from "express"
import { 
    getAllPosts,
    getAllTenantPosts,
    getCategory,
    getAuthor,
    getBlogDetail,
    blogSearch,
    getAuthorById,
    getBlogByCatId,
    getBlogTags,
    getBlogResult
 } from "../../controllers/blogController.js";



const blogRouter = express.Router();


blogRouter.get("/posts",getAllPosts);
blogRouter.get("/tenantposts",getAllTenantPosts);
blogRouter.get("/category",getCategory);
blogRouter.get("/authors/:urlKey",getAuthor);
blogRouter.get("/authors/:authorId",getAuthorById);
blogRouter.get("/posts/:urlKey",getBlogDetail);
blogRouter.get("/helpdesksearch/:urlKey",blogSearch);
blogRouter.get("/posts/:catId",getBlogByCatId);
blogRouter.get("/posts/:url",getBlogTags);
blogRouter.get("/posts/:querystring",getBlogResult);

 export default blogRouter;