import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


export default function ViewAdoptionRequets(){
    const email = sessionStorage.getItem("email");
    const [data, setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>{ 
         const q = query(collection(db, "adoptionRequests"),where("ngoemail" ,"==" ,email));
        onSnapshot(q, (requestsCol)=>{
            let requestsData=requestsCol.docs.map((el)=>{
               return {...el.data(), id:el.id}
            })
            console.log(requestsData);
            setData(requestsData)
        })
    }
      const RequestApproved = async(userId,status)=>{
                       Swal.fire({
                      title: "Are you sure?",
                      text: "Approve Request",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Change"
                    }).then((result) => {
                      if (result.isConfirmed) {
                     updateDoc(doc(db,"adoptionRequests",userId),{status:!status})
                         .then(()=>{
                             Swal.fire({
                               title: "changed",
                               text: "The Status has been changed.",
                               icon: "success"
                             });
                         })
                         .catch((err)=>{
                            toast.error(err.message)
                         })
                      }
                    });
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
                            <th>Address Proof</th>
                            <th>Approve Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.userName}</td>
                                <td>{el?.userEmail}</td>
                                <td>{el?.bankstatment}</td>
                                <td>{el?.address}</td>
                                <td>
                                    <img
                                        className="card-img-top"
                                        src={el?.imageUrl || "https://via.placeholder.com/300x200"}
                                        alt="user"
                                        width="100"
                                        height="70"
                                    />
                                    </td>
                                <td>
                                     <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => RequestApproved(el?.id, el?.status)}
                                            >
                                                {el?.status === true ? "Request Approved" : "Approve Request"}
                                            </button>
                                            </td>
                                    </td> 
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}