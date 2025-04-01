import React from 'react';

const LoginForm = () => {
    return (
        <div>
             <div className="container d-flex justify-content-center align-items-center">
                 <div className="row">
                     <div className="col-12">
                         <div className="card shadow-sm  mt-5">
                             <div className="card-body  ">
                                 <h2>Enter Your Email Address   </h2>

                                 <form>
                                     <input type="email" className="form-control mt-4 w-100" placeholder="Enter Your Email" />
                                     <input type="submit" value="Login" className="form-control mt-3 mb-3 w-100 bg-success text-bg-light" />
                                 </form>
                             </div>
                         </div>

                     </div>
                 </div>

             </div>
        </div>
    );
};

export default LoginForm;