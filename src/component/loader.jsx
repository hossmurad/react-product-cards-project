import React from 'react';
import loader from '../assets/icon/spiner.svg'

const Loader = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row">
                <div className="col-12">
                    <div className="card ">
                        <div className="card-body  ">
                            <img src={loader} alt="loader.." />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Loader;