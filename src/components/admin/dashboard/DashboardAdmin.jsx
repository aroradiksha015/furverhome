import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
    useEffect(()=>{
          fetchData()
      },[])
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [ngo, setNgo] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const[requests, setRequests] = useState([]);
  const [queries, setQueries] = useState([]);
  const fetchData=()=>{
               let q=query(collection(db,"pets"))
                onSnapshot(q,(petsCol)=>{
                    let petsData=petsCol.docs.map((el)=>{
                    return{...el.data(),id: el.id};   
                    })
                    setPets(petsData)
                })
               let ngoq=query(collection(db,"users"),where("userType","==",2));
               onSnapshot(ngoq,(ngoCol)=>{
                    let ngoData=ngoCol.docs.map((el)=>{
                        return{...el.data(),id: el.id}; 
                    })
                      setNgo(ngoData)
                  })
                let usersq=query(collection(db,"users"),where("userType","==",3));
               onSnapshot(usersq,(usersCol)=>{
                    let userData=usersCol.docs.map((el)=>{
                        return{...el.data(),id: el.id}; 
                    })
                      setUsers(userData)
                  })
                let breedsq=query(collection(db,"breeds"));
               onSnapshot(breedsq,(breedsCol)=>{
                    let breedsData=breedsCol.docs.map((el)=>{
                        return{...el.data(),id: el.id}; 
                    })
                      setBreeds(breedsData)
                  })
                  let queriesq=query(collection(db,"contact"));
               onSnapshot(queriesq,(queriesCol)=>{
                    let queriesData=queriesCol.docs.map((el)=>{
                        return{...el.data(),id: el.id}; 
                    })
                      setQueries(queriesData)
                  })

                    let requestsq=query(collection(db,"adoptionRequests"),where("status", "==", "false"));
               onSnapshot(requestsq,(requestsCol)=>{
                    let requestsData=requestsCol.docs.map((el)=>{
                        return{...el.data(),id: el.id}; 
                    })
                      setRequests(requestsData)
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
                  Admin<i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Admin</h1>
            </div>
          </div>
        </div>
      </section>

      <h1 className="mt-4 mb-4 text-center font-weight-bold ">Welcome Admin!</h1>
      
      <div className="container my-5">
       <div className="row g-4">

        
      <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
        <Link to = "/admin/users">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Total Users</h5>
          <h2 className="display-4 text-success"> {users.length>0?users.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>


    
    <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
           <Link to = "/admin/manageNGO">
        <div className="card-body">
         
          <h5 className="card-title fs-4 fw-bold">Total NGOs</h5>
          <h2 className="display-4 text-warning">{ngo.length>0?ngo.length:"0"}</h2>
         
        </div>
        </Link>
      </div>
    </div>



    <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
         <Link to = "/admin/managePet">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Total Pets</h5>
          <h2 className="display-4 text-success"> {pets.length>0?pets.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>

   

    <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
         <Link to = "/admin/manageBreeds">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Total Breeds</h5>
          <h2 className="display-4 text-danger">{breeds.length>0?breeds.length:"0"}</h2>
        </div>
        </Link>
      </div>
    </div>

     <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
         <Link to = "/admin/viewQueries">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Queries</h5>
          <h2 className="display-4 text-info">{queries.length>0?queries.length:0}</h2>
        </div>
        </Link>
      </div>
    </div>

     <div className="col-md-4 my-2">
      <div className="card text-center shadow-lg p-4" style={{ minHeight: "180px" }}>
         <Link to = "/admin/viewRequests">
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">Adoption Requests</h5>
          <h2 className="display-4 text-info">{requests.length>0?requests.length:0}</h2>
        </div>
        </Link>
      </div>
    </div>
  </div>
</div>

      
    </>
  );
}
