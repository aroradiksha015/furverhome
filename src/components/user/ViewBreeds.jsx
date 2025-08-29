import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../Firebase"

export default function ViewBreeds(){
    useEffect(()=>{
        fetchData()
    },[])
    const [data, setData]=useState()
    const fetchData=()=>{
        let q=query(collection(db,"breeds"))
        onSnapshot(q,(breedCol)=>{
            // console.log(breedCol.docs);
            let breedData=breedCol.docs.map((el)=>{
                return{...el.data(),id: el.id};
                
            })
            setData(breedData)
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
                        Breed <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Breed</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center pb-5 mb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                    <h2>Breed Gallery</h2>
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
                            <a href="work-single.html">{el?.breedName}</a>
                            </h2>
                        </div>
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