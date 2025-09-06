import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

export default function TrackRequest(){
     useEffect(()=>{
            fetchData()
        },[])
    
    const [pets,setPets]=useState([])
    const email = sessionStorage.getItem("email"); 
        const fetchData=()=>{
            const q = query(collection(db, "adoptionRequests"),where("userEmail", "==", email));
            onSnapshot(q,(petsCol)=>{
                let petsData=petsCol.docs.map((el)=>{
                    return{...el.data(),id: el.id};
                })
                setPets(petsData)
                console.log(petsData)
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
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Pets <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Track your Request</h1>
            </div>
          </div>
        </div>
      </section>

     <div className="container my-5">
       <div className="row g-4">
      {pets.length === 0 ? (
        <p className="text-center text-muted">No requests found.</p>
      ) : (
        pets.map((el, index) => (
          <div className="col-md-4 my-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title text-primary text-center"> Pet Name:
                  {el?.petname || "//Pet"}
                </h5>
                <p className="card-text">
                  <strong>Requested By: </strong> {el.userEmail}
                </p>
                <p className="card-text">
                  <strong>Status: </strong>{el.status == true ?"Approved":"Not Accepted yet"}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    </div>

  
        </>
    )
}