import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

export function ManageUsers(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    let q=query(collection(db,"users"))
    onSnapshot(q,(usersCol)=>{
      let usersData=usersCol.docs.map((el)=>{
        return{...el.data(),id:el.id}
      })
      setData(usersData)
    })
  }
  
  const changeStatus=async(userId,status)=>{
        Swal.fire({
        title: "Are you sure?",
        text: "Change the Status of user",
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
                 title: "Status Changed",
                 text: "The status has been changed.",
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
                                Users<i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Users</h1>
                            </div>
                        </div>
                        </div>
                    </section>

  
    <div>
      <h1 className="text-dark pt-5 mt-4 row d-flex justify-content-center text-center" >Manage Users</h1>
    </div>
    <div className="container my-5">
                <div className="container my-5 tabble-responsive">

         <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.NO.</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data
          .filter((el) => el?.userType === 3)
          .map((el, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.contact}</td>
              <td>
                {/* <Link className="btn btn-success" onClick={()=>{changeStatus(el?.id,el?.status)}}>{el.status?"Change Status":"Status:false"}</Link> */}

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