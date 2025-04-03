import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {CartListRequest, RemoveCartRequest} from "../APIRequest/APIRequest.js";
import { toast } from "react-hot-toast";
import Loader from "./loader.jsx";

const CartList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState("");
    const [cartLoading, setCartLoading] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            setLoading(""); // Show loader
            let res = await CartListRequest();
            if (res) {
                setList(res);
            }
            setLoading("d-none");
        })();
    }, []);

    // ✅ Function to remove an item from cart
    const RemoveToCart = async (id) => {
        if (!sessionStorage.getItem("Token")) {
            navigate("/login");
            return;
        }

        setCartLoading(id);
        let res = await RemoveCartRequest(id);
        setCartLoading(null);

        if (res.success) {
            toast.success("Item removed from cart!");
            setList(list.filter(item => item.id !== id));
        } else {
            toast.error("Failed to remove item!");
        }
    };

    if (loading === "") {
        return <Loader />;
    }

    return (
        <div className="container">
            <div className="row">
                {list.length === 0 ? (
                    <h3 className="text-center">Your cart is empty.</h3>
                ) : (
                    list.map((item, index) => (
                        <div key={index} className="col-md-3 p-3">
                            <div className="card shadow-sm rounded-2 border-0">
                                <img
                                    src={item["product"]["image"]}
                                    alt="product image"
                                    className="card-img-top w-100"
                                />
                                <div className="card-body">
                                    <p className="p-1 m-0 fw-light">{item["product"]["title"]}</p>
                                    <p className="p-1 m-0 fw-bold">BDT {item["product"]["price"]}</p>
                                    <button
                                        onClick={async () => await RemoveToCart(item.id)}
                                        type="button"
                                        className="btn btn-danger fw-light mt-1 text-uppercase"
                                        disabled={cartLoading === item.id}
                                    >
                                        {cartLoading === item.id ? "Removing..." : "Remove"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CartList;
