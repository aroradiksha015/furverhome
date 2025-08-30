import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

export default function ViewNG0(){
           const [data, setData]=useState([])
            useEffect(()=>{
                fetchData()
            },[])
            const fetchData=()=>{
                let q=query(collection(db,"users"),where("usertype","==",2));
                onSnapshot(q, (ngoCol)=>{
                    let ngoData=ngoCol.docs.map((el)=>{
                       return {...el.data(), id:el.id}
                    })
                    setData(ngoData)
                })
            }
            console.log(data);
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
                                NGO <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">NGOs</h1>
                            </div>
                        </div>
                        </div>
                    </section>

                    <div className="container my-5">
  <h1 className="mb-4 text-center">NGOs</h1>
  <div className="row">
    {data?.map((el, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h5 className="card-title text-primary text-center">{el?.name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {el?.email}
            </p>
            <p className="card-text">
              <strong>About:</strong> {el?.about || "N/A"}
            </p>
            <p className="card-text">
              <strong>License No:</strong> {el?.licenseNO || "N/A"}
            </p>
            <p className="card-text">
              <strong>Contact:</strong> {el?.contact || "N/A"}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {el?.address || "N/A"}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

                </>
            )
        }