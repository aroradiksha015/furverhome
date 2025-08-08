import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";

export default function ManageBreeds(){
    const [data, setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>{
        // getDoc, getDocs, onSnapshot (realtime)
        let q=query(collection(db,"breeds")
        // , where("type","==","Cat")
    )
        onSnapshot(q, (breedCol)=>{
            let breedData=breedCol.docs.map((el)=>{
            
               return {...el.data(), id:el.id}
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
                        <a href="/admin">
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
            <div className="container my-5">
                <h1>Manage Breed</h1>
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sno</th>
                            <th>Image</th>
                            <th>Breed name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <img src={el?.imageUrl} style={{height:"50px", width:"50px"}}/>
                                </td>
                                <td>{el?.breedName}</td>
                                <td>{el?.type}</td>
                                <td>{el?.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <select>
                    <option>Choose Breed</option>
                    {data?.map((el,index)=>(
                        <option value={el.id}>{el.breedName}</option>
                    ))}
                </select>
            </div>
        </>
    )
}