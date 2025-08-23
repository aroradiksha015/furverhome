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
    <main className="main">
          {/* Page Title */}
          <div className="page-title" data-aos="fade" style={{background:"url('/assets/img/hero-carousel/hero-carousel-1.jpg')",height:"450px"}}>
            <div className="heading">
              <div className="container" style={{boxShadow:"0px 0px 10px gray"}}>
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-2">
                    <h1 className="text-dark pt-5 mt-4" >Update Users</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 border border-black-700 p-2 m-5 mx-auto">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
                onSubmit={handleForm}
              >
                <div className="row gy-4">
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      placeholder="Name"
                      required=""
                      value={name}
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      name="Email"
                      placeholder="Email"
                      required=""
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-6 mt-5 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      name="Contact"
                      placeholder="Contact"
                      minLength={10}
                      maxLength={10}
                      required=""
                      value={contact}
                      onChange={(e)=>{
                        setContact(e.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-12 mx-2">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button className="btn btn-dark" type="submit">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </main>   
    </>
  )
}