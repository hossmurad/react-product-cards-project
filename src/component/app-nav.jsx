import React from 'react';
import logo from '../assets/icon/logo.png';
import {useNavigate} from "react-router-dom";

const AppNav = () => {
    const navigate = useNavigate();
    const LogOut = ()=>{
        sessionStorage.clear();
        navigate("/");
    }



    return (
        <div className="sticky-top">
            <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid px-5 ">
                    <a className="navbar-brand" href="/">
                       <img className="nav-img" src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#/">Home</a>
                            <a className="nav-link" href="#/product">Product List</a>
                            {sessionStorage.getItem('Token') && <a className="nav-link" href="#/cart">Card List</a>}

                        </div>
                    </div>
                    {!sessionStorage.getItem('Token') && <a className="btn btn-dark mx-2" href="#/login">Login</a>}
                    {sessionStorage.getItem('Token') && <a className="btn btn-dark" onClick={LogOut}>Logout</a>}

                </div>
            </nav>
        </div>
    );
};

export default AppNav;