import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Productlist = () => {
    const [product, setProduct] = useState([]);
    const navigator = useNavigate()

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/addlist');
        result = await result.json();
        setProduct(result)
    }
    console.log("product", product)

    const Logout = () => {
        localStorage.clear();
        navigator("/")

    }

    const addactivity = () => {
        navigator("/addlist")
    }

    return (
        <>
            <div className="cointenter">
                <div className="navbars">
                    <div className="user"><p>user name</p></div>
                </div>
                <div className="maincontainer">
                    <div className="asidebar">
                        <div className="paragraph">
                            <p>To Do List</p>
                            <p>History</p>
                        </div>
                        <button className="logout" onClick={Logout}>Logout</button>
                    </div>
                    <div className="mainsection">
                        <div className="headers">
                            <div ><button className="right" onClick={addactivity}>Add new activity</button></div>
                        </div>
                        <div className="maincotiner">


                            <div className="itemss">
                                <ul className="ullists">
                                    <li >Activity</li>
                                    <li >Status</li>
                                    <li >Time</li>
                                    <li >Action</li>
                                </ul>

                                {
                                    product.map((item, index) =>

                                        <ul className="font">
                                            <li className="font2">{item.activity}</li>
                                            <li className="font2" >{item.status}</li>
                                            <li className="font2" >{item.time}</li>
                                            <li className="font2">{item.action}</li>
                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productlist;