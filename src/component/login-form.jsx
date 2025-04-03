import React, {useState} from 'react';
import Loader from './loader.jsx'
import {LoginRequest} from "../APIRequest/APIRequest.js";
import  {useNavigate} from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

const LoginForm = () => {
   const [loading, setLoading] = useState("d-none");
   let navigate = useNavigate();



    const SubmitForm = async (event)=>{
      event.preventDefault()
        let formData = new FormData(event.target);
        let email = formData.get('email');
        sessionStorage.setItem('email', email);
        console.log('email:', email)
        setLoading("");
        let data = await LoginRequest(email)
        toast.success(data);
        setLoading("d-none");
        navigate("/verify")


    }

    return (
        <div>

            <div className={loading}>
                <Loader />
            </div>
             <div className="container d-flex justify-content-center align-items-center">
                 <div className="row">
                     <div className="col-12">
                         <div className="card shadow-sm  mt-5">
                             <div className="card-body  ">
                                 <h2>Enter Your Email Address   </h2>

                                 <form onSubmit={SubmitForm} method="POST">
                                     <input type="email" className="form-control mt-4 w-100" placeholder="Enter Your Email"  name="email"/>
                                     <input type="submit" value="Login" className="form-control mt-3 mb-3 w-100 bg-success text-bg-light" />
                                 </form>
                             </div>
                         </div>

                     </div>
                 </div>

             </div>

            <Toaster/>


        </div>
    );
};

export default LoginForm;