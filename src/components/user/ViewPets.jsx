import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../Firebase"
import { Link, useNavigate } from "react-router-dom"

export default function ViewPets(){
    let nav = useNavigate()
    useEffect(()=>{
        fetchData()
    },[])
    const [data, setData]=useState()
    const fetchData=()=>{
        let q=query(collection(db,"pets"))
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
                {/* <div className="row">
                    {data?.map((el,index)=>(
                    <div className="col-md-4 ftco-animate">
                    <div
                        className="work mb-4 img d-flex align-items-end"
                        style={{ backgroundImage: `url(${el?.imageUrl})` }}
                    >
                        
                        <div className="desc w-100 px-4">
                        <div className="text w-100 mb-3">
                            <span>{el?.type}</span>
                            <h2>
                            <a href="work-single.html">{el?.petname}</a>
                            </h2>
                        </div>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-center">
                  <Link className="btn btn-success" to={"/petDetails/"+el.id}>View Pet Details</Link>
                  </div>
                    </div>
                    ))}
                   
                </div> */}

                {/* <div className="card" style={{ width: "18rem" }}>
     <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>


</div> */}


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
          <Link className="btn btn-success" to={`/petDetails/${el.id}`}>
            View Pet Details
          </Link>
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