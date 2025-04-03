import React, {useState} from 'react';
import {VerifyLoginRequest} from "../APIRequest/APIRequest.js";
import {  toast } from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import Loader from "./loader.jsx";




const VerifyLoginForm = () => {

    const [loading, setLoading] = useState("d-none");
    let navigate = useNavigate();

    let SubmitForm = async(event)=>{
        event.preventDefault()
        let formData = new FormData(event.target);
        let OTP = formData.get('OTP')
        setLoading("");
        let data = await VerifyLoginRequest(OTP)
        sessionStorage.setItem("Token", data)
        setLoading("d-none");
        toast.success("Login successful!");
        event.target.reset();
        navigate("/")

    }

    return (
        <div>

                  <div className={loading}> <Loader/>  </div>


            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm  mt-5">
                            <div className="card-body  ">
                                <h2>Enter verification code </h2>

                                <form onSubmit={SubmitForm} method="POST">
                                    <input type="text"name="OTP" className="form-control mt-4 w-100" placeholder="Verification code" />
                                    <input type="submit" value="verify" className="form-control mt-3 mb-3 w-100 bg-success text-bg-light" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default VerifyLoginForm;