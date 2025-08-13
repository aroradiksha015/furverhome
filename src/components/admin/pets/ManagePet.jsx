import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


export default function ManagePet(){
    useEffect(()=>{
        fetchData()
    },[])
    const [data, setData]=useState()
    const fetchData=()=>{
        let q=query(collection(db,"pets"))
        onSnapshot(q,(petsCol)=>{
            let petsData=petsCol.docs.map((el)=>{
                return{...el.data(),id: el.id};  
            })
            console.log(petsData);
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
                        <a href="/">
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
                    {data?.map((el,index)=>(
                    <div className="col-md-4 ftco-animate">
                    <div
                        className="work mb-4 img d-flex align-items-end"
                        style={{ backgroundImage: `url(${el?.imageUrl})` }}
                    >
                        <a
                        href="/assets/images/gallery-1.jpg"
                        className="icon image-popup d-flex justify-content-center align-items-center"
                        >
                        <span className="fa fa-expand" />
                        </a>
                        <div className="desc w-100 px-4">
                        <div className="text w-100 mb-3">
                            <span>{el?.type}</span>
                            <h2>
                            <a href="work-single.html">{el?.petname}</a>
                            </h2>
                        </div>
                        </div>
                         
                    </div>
                    <Link className="btn btn-danger" onClick={()=>{deletepet(el.id)}}>Delete</Link>
                    </div>
                    ))}
                   
                </div>
                </div>
            </section>
        </>
    )
}