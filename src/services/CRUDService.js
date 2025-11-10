
import db from '../models/index';
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });
            resolve('Create new user successfully');
        } catch (e) {
            reject(e);
        }
    });
};
let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users)

        }catch(e){
            reject(e)
        }
    })
}
let getUserInfoById = (req, res) =>{
    let userId = req.query.id;
    console.log(userId)
    if(userId){
        let userData = CRUDService.getUserInfoById(userId);
        
    }
    else{
        return res.send('Users not found!');
    }

}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
}