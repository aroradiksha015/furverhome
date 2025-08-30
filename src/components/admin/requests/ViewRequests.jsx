import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../Firebase";

export default function ViewRequests(){
    const [data, setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>{ 
        let q=query(collection(db,"adoptionRequests")
    )
        onSnapshot(q, (requestsCol)=>{
            let requestsData=requestsCol.docs.map((el)=>{
            
               return {...el.data(), id:el.id}
            })
            console.log(requestsCol);
            setData(requestsData)
        })
    }
       

 
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
                        <a href="/admin">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Request <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Adoption Request</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
                <h1>View Adoption Request</h1>
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Bank Statment</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.username}</td>
                                
                                <td>{el?.email}</td>
                                <td>{el?.bankstatment}</td>
                                <td>{el?.address}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}