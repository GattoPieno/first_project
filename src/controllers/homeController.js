import db from '../models/index';
import CRUDService from "../services/CRUDService";
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')

 }
let getCRUD = (req,res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req,res) => {
    let message =  await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server')
}
let displaygetCRUD = async (req,res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------------')
    console.log(data)
    console.log('--------------------')
    return res.render('displayCRUD.ejs',{
        dataTable: data
    })

}
let getEditCRUD = ( req,res) => {
    let userId = req.query.id;
    if(userId) {
        let userData = CRUDService.getUserInfoById(userId);
    }
    else{
        return res.send('Users not found');
    }
    
    
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
    
}