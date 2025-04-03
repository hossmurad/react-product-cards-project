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
    let URL = `https://cart-api.teamrabbil.com/api/create-cart/${id}`;
    let headers = {'headers': {'token':sessionStorage.getItem('Token') }};

    let res = await axios.get(URL, headers);
    return res.data['msg'];

}

export const RemoveCartRequest = async()=>{
    let URL = `https://cart-api.teamrabbil.com/api/remove-cart/${id}`;
    let headers = {'headers': {'token':sessionStorage.getItem('Token') }};

    let res = await axios.get(URL, headers);
    return res.data['msg'];

}





export const CartListRequest = async (id) => {

    let URL = "https://cart-api.teamrabbil.com/api/cart-list";
    let headers = {'headers': {'token':sessionStorage.getItem('Token') }};
    let res = await axios.get(URL, headers);
    return res.data['data'];

};
