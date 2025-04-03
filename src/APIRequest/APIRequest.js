import  axios from "axios";

export const LoginRequest = async(UserEmail)=>{

    let URL = " https://cart-api.teamrabbil.com/api/user-login"
    let res = await axios.post(URL,{
        UserEmail: UserEmail
    });
    return res.data['data'];

}

export const VerifyLoginRequest = async(OTP)=>{
    let URL = "https://cart-api.teamrabbil.com/api/verify-login"
    let res = await axios.post(URL,{
        UserEmail : sessionStorage.getItem('email'),
        OTP: OTP
    });
    return res.data['data'];

}

export const ProductListRequest = async()=>{
   let URL = "https://cart-api.teamrabbil.com/api/product-list"
    let res = await axios.get(URL);
    return  res.data['data'];

}

export const CreateCartRequest = async()=>{


}

export const RemoveCartRequest = async()=>{


}

export const CartListRequest = async()=>{


}