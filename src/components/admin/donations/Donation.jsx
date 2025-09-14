import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { collection, onSnapshot, query } from "firebase/firestore"

export default function Donation() {
    useEffect(()=>{
            fetchData()
        },[])
        const [payments, setPayments]=useState([])
        const fetchData=()=>{
            let q=query(collection(db,"payments"))
            onSnapshot(q,(paymentsCol)=>{
                let paymentsData=paymentsCol.docs.map((el)=>{
                    return{...el.data(),id: el.id};  
                })
                console.log(paymentsData);
                setPayments(paymentsData)
            })
        }
  return (
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
                        Donation <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">View Donations</h1>
                    </div>
                </div>
                </div>
            </section>

                <div className="container my-5">
                <h2 className="mb-4 text-center">User Donation</h2>
                <div className="container my-5 table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>Name of the NGO</th>
                        <th>Amount</th>
                        <th>Payment Id</th>
                    </tr>
                    </thead>
                    <tbody>
                                    {payments?.length > 0 ? (
                                payments.map((el, index) => (
                                    <tr key={el.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{el?.username || "No Subject"}</td>
                                    <td>{el?.ngoname}</td>
                                    <td>{'\u20B9'}{el?.amt}</td>
                                    <td>{el?.PaymentId || "N/A"}</td>
                                    </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No Payments Found</td>
                                </tr>
                                )}

                    </tbody>
                </table>
                </div>
                </div> 
      
    </>
  );
}
