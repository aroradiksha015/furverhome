import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default function ManageNGO(){
           const [data, setData]=useState([])
            useEffect(()=>{
                fetchData()
            },[])
            const fetchData=()=>{
                let q=query(collection(db,"users"),where("userType","==",2));
                onSnapshot(q, (ngoCol)=>{
                    let ngoData=ngoCol.docs.map((el)=>{
                       return {...el.data(), id:el.id}
                    })
                    setData(ngoData)
                })
            }
            console.log(data);
            const changeStatus = async(userId,status)=>{
                   Swal.fire({
                  title: "Are you sure?",
                  text: "Change the status",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Change"
                }).then((result) => {
                  if (result.isConfirmed) {
                 updateDoc(doc(db,"users",userId),{status:!status})
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
                                NGO <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">NGO</h1>
                            </div>
                        </div>
                        </div>
                    </section>
                    <div className="container my-5">
                        <h1>Manage NGO</h1>
                       <div className="container my-5 tabble-responsive">
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
                                    <th>Action</th>
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
                                        <td>
                                    <Link
                                className={`btn ${el?.status ? "btn-success" : "btn-danger"}`}
                                onClick={() => changeStatus(el?.id, el?.status)}
                            >
                                {el?.status ? "Status: true" : "Status: false"}
                            </Link>
                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>

                </>
            )
        }