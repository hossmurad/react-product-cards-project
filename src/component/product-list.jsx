import React from 'react';


const ProductList = () => {

    let data =[
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        },
        {
            "title": "Iphone 16 pro max 20GB ",
            "Description": "20Gb Ram 500 GB Rom 100MX camera",
            "price": "10000",
            "img":"/iphone.png"
        }

    ]



    return (
        <div className="container ">
            <div className="row">
                {
                    data.map((item,index) => {
                        return (
                            <div className="col-md-3 p-3">
                                <div className="card shadow-sm rounded-2 border-0 ">
                                      <img src={item.img} alt="" className="card-img-top w-100"/>
                                     <div className="card-body ">
                                         <p className="p-1 m-0 fw-light">{item['title']}</p>
                                         <p className="p-1 m-0 fw-bold">BDT {item['price']}</p>
                                     </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default ProductList;