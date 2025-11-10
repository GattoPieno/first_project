import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD );
    router.get('/get-crud', homeController.displaygetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);

    router.get('/newtab',(req,res) =>{
        return res.send("Kietdev was here")
            });
    return app.use("/",router);
}

module.exports = initWebRoutes