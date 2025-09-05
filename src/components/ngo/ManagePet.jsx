import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

export default function ManagePets(){
    useEffect(()=>{
        fetchData()
    },[])
    const [data, setData]=useState()
    const email = sessionStorage.getItem("email");
    const fetchData=()=>{
        const q = query(collection(db, "pets"),where("ngoemail", "==", email));
        onSnapshot(q,(petsCol)=>{
            let petsData=petsCol.docs.map((el)=>{
                return{...el.data(),id: el.id};
                
            })
            setData(petsData)
        })
    }
         const deletepet = async(petid)=>{
                            Swal.fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                              if (result.isConfirmed) {
                                 deleteDoc(doc(db,"pets",petid))
                                 .then(()=>{
                                     Swal.fire({
                                       title: "Deleted!",
                                       text: "Your file has been deleted.",
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
                        <a href="/ngo">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Pets</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center pb-5 mb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                    <h2>Pets Gallery</h2>
                    </div>
                </div>

                <div className="row">
                    {data?.map((el, index) => (
                        <div className="col-md-4 mb-4" key={el.id}>
                        <div className="card shadow" style={{ width: "100%" }}>
                            <img
                            className="card-img-top"
                            src={el?.imageUrl || "https://via.placeholder.com/300x200"}
                            alt={el?.petname || "Pet"}
                            style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                            <h5 className="card-title">{el?.petname}</h5>
                            <p className="card-text text-muted">{el?.type}</p>
                            <Link className="btn btn-success" to={"/admin/UpdatePets/"+el?.id}>Edit</Link> {' '}
                                        <Link className="btn btn-danger" onClick={()=>{deletepet(el.id)}}>Delete</Link>

                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

                </div>
            </section>

            
        </>
    )
}