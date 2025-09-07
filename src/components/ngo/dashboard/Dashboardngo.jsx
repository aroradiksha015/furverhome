import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export default function DashboardNGO(){
   const [pets,setPets] = useState([])
  const[request,setRequests] = useState([])
  const[payments,setPayments] = useState([])

    const email = sessionStorage.getItem("email");
    useEffect(()=>{
              fetchData()
          },[])
      const fetchData=()=>{
                   let q=query(collection(db,"pets"),where("ngoemail", "==", email));
                    onSnapshot(q,(petsCol)=>{
                        let petsData=petsCol.docs.map((el)=>{
                        return{...el.data(),id: el.id};   
                        })
                        setPets(petsData)
                    })
                              const q2 = query(
                        collection(db, "adoptionRequests"),
                        where("ngoemail", "==", email),
                        where("status", "==", "false")
                      );
                    
                    onSnapshot(q2,(requestCol)=>{
                        let requestsData=requestCol.docs.map((el)=>{
                        return{...el.data(),id: el.id};   
                        })
                        setRequests(requestsData)
                        console.log("data", requestsData);
                    })
                    const q3 = query(
                      collection(db, "payments"),
                      where("ngoemail", "==", email)
                    );
                    onSnapshot(q3,(paymentsCol)=>{
                        let paymentsData=paymentsCol.docs.map((el)=>{
                        return{...el.data(),id: el.id};   
                        })
                        setPayments(paymentsData)
                        console.log("data", paymentsData);
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
                  <a href="/ngo">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  NGO<i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">NGO</h1>
            </div>
          </div>
        </div>
      </section>

      <h1 className="mt-4 mb-4 text-center font-weight-bold ">Welcome NGO!</h1>

      <div className="container my-5">
       <div className="row g-4">


        <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
        <Link to = "/ngo/managePets">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Pets Hosted</h5>
          <h2 className="display-4 text-success"> {pets.length>0?pets.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>


     <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
        <Link to = "/ngo/viewRequests">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Adoption Requests</h5>
          <h2 className="display-4 text-success"> {request.length>0?request.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>

    <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
        <Link to = "/ngo/viewDonations">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Donations</h5>
          <h2 className="display-4 text-success"> {payments.length>0?payments.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>



       </div>
       </div>


        </>
    )
}