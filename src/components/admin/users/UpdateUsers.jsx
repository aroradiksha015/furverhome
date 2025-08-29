import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../Firebase"
import { useParams } from "react-router-dom"

export function UpdateUsers(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("")
  const[contact,setContact]=useState("")
  var{id}=useParams()
  console.log("Param is:",id);

  const fetchData=async()=>{
    try{
      let userDoc=await getDoc(doc(db,"users",id))
      let userData=userDoc.data()
      setName(userData.name)
      setEmail(userData.email)
      setContact(userData.contact)
    }
    catch(err){
      toast.error(err.message)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleForm=async (e)=>{
    e.preventDefault()
    try{
      const userRef=doc(db,"users",id)
      await updateDoc(userRef,{
        name,
        email,
        contact
      })
      toast.success("User updated successfully")
    }
    catch(err){
      toast.error(err.message)
    }
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
                                NGO <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Breed</h1>
                            </div>
                        </div>
                        </div>
                    </section>

           <div className="container my-5">
                <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 10px gray"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Update Users</h3>
                    <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                        onSubmit={handleForm}
                        
                    >
                        <div className="row">
                        
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="email">
                               Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                disabled
                               value={email}
                               onChange={(e)=>{
                                setEmail(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="contact">
                                Contact
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                name="contact"
                                id="contact"
                                placeholder="Contact"
                                minLength={10}
                                maxLength={10}
                                value={contact}
                                onChange={(e)=>{
                                    setContact(e.target.value)
                                    }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <input
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-primary"
                            />
                            <div className="submitting" />
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                    
                </div>
                
                </div>
            </div>
        


    </>
  )
}