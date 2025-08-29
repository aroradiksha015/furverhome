import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

export default function ViewNG0(){
           const [data, setData]=useState([])
            useEffect(()=>{
                fetchData()
            },[])
            const fetchData=()=>{
                let q=query(collection(db,"users"),where("usertype","==",2));
                onSnapshot(q, (ngoCol)=>{
                    let ngoData=ngoCol.docs.map((el)=>{
                       return {...el.data(), id:el.id}
                    })
                    setData(ngoData)
                })
            }
            console.log(data);
            return(
                <>
                 <section
                            className="hero-wrap hero-wrap-2"
                            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                            data-stellar-background-ratio="0.5"
                        >
                        <div className="overlay" />
                        <div className="container">
                        <div className="row no-gutters slider-text align-items-end">
                            <div className="col-md-9 ftco-animate pb-5">
                            <p className="breadcrumbs mb-2">
                                <span className="mr-2">
                                <a href="/">
                                    Home <i className="ion-ios-arrow-forward" />
                                </a>
                                </span>{" "}
                                <span>
                                NGO <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">NGOs</h1>
                            </div>
                        </div>
                        </div>
                    </section>
                    <div className="container my-5">
                        <h1>NGO</h1>
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>About</th>
                                    <th>License Number</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((el,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{el?.name}</td>
                                        <td>{el?.email}</td>
                                        <td>{el?.about}</td>
                                        <td>{el?.licenseNO}</td>
                                        <td>{el?.contact}</td>
                                        <td>{el?.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      
                    
                    </div>
                </>
            )
        }