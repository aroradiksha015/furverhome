import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { collection, onSnapshot, query } from "firebase/firestore"

export default function ViewQueries() {
    useEffect(()=>{
            fetchData()
        },[])
        const [queries, setQueries]=useState([])
        const fetchData=()=>{
            let q=query(collection(db,"contact"))
            onSnapshot(q,(queriesCol)=>{
                let queriesData=queriesCol.docs.map((el)=>{
                    return{...el.data(),id: el.id};  
                })
                console.log(queriesData);
                setQueries(queriesData)
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
                        Queries <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">View Queries</h1>
                    </div>
                </div>
                </div>
            </section>

                <div className="container my-5">
                <h2 className="mb-4 text-center">User Queries</h2>
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>Subject</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {queries?.length > 0 ? (
                        queries.map((q, index) => (
                        <tr key={q.id || index}>
                            <td>{index + 1}</td>
                            <td>{q?.subject || "No Subject"}</td>
                            <td>{q?.name}</td>
                            <td>{q?.email}</td>
                            <td>{q?.message}</td>
                            <td>
                            <button className="btn btn-success btn-sm">Respond</button>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="7" className="text-center">
                            No queries found.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
      
    </>
  );
}
