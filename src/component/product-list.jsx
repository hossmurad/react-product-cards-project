import React, { useEffect, useState } from "react";
import Loader from "./loader.jsx";
import { ProductListRequest } from "../APIRequest/APIRequest.js";

const ProductList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            let res = await ProductListRequest();
            setList(res);
        })();
    }, []);

    if (list.length === 0) {
        return <Loader />;
    } else {
        return (
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    {list.map((item, index) => (
                        <div key={index} className="col-md-3 p-3">
                            <div className="card shadow-sm rounded-2 border-0">
                                <img src={item.image} alt={item.title} className="card-img-top w-100" />
                                <div className="card-body">
                                    <p className="p-1 m-0 fw-light">{item.title}</p>
                                    <p className="p-1 m-0 fw-bold">BDT {item.price}</p>  {/* ✅ Fixed incorrect `}` */}
                                    <button type="button" className="btn btn-success fw-light mt-1 text-uppercase">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default ProductList;
