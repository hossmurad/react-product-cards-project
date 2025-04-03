import React, { useEffect, useState } from "react";
import Loader from "./loader.jsx";
import {CartListRequest, CreateCartRequest, ProductListRequest} from "../APIRequest/APIRequest.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProductList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState("");
    const [cartLoading, setCartLoading] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setLoading("");
            let res = await ProductListRequest();
            setList(res);
            setLoading("d-none");
        })();
    }, []);

    const AddToCart = async (id) => {
        if (!sessionStorage.getItem("Token")) {
            navigate("/login");
            return;
        }

        setCartLoading(id);
        let res = await CreateCartRequest(id);
        setCartLoading(null);
        toast.success(res);
    };

    if (loading === "") {
        return <Loader />;
    }

    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="row">
                {list.map((item, index) => (
                    <div key={index} className="col-md-3 p-3">
                        <div className="card shadow-sm rounded-2 border-0">
                            <img src={item.image} alt={item.title} className="card-img-top w-100" />
                            <div className="card-body">
                                <p className="p-1 m-0 fw-light">{item.title}</p>
                                <p className="p-1 m-0 fw-bold">BDT {item.price}</p>
                                <button
                                    onClick={async () =>await AddToCart(item.id)}
                                    type="button"
                                    className="btn btn-success fw-light mt-1 text-uppercase"
                                    disabled={cartLoading === item.id}
                                >
                                    {cartLoading === item.id ? "Adding..." : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
