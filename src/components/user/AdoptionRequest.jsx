import axios from "axios"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { toast } from "react-toastify"
import { db } from "../Firebase"
import { useParams } from "react-router-dom"

export default function AdoptionRequest(){
    const [salary, setSalary]=useState("")
    const [bankstatment, setBankStatment]=useState("")
    const [address, setAddress]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [reason, setReason]=useState("")

     var {id,ngoemail,petname} = useParams()
    console.log("params is",id);

     const handleForm=async (e)=>{
        e.preventDefault()
        let formData=new FormData()
        formData.append("file", image)
        formData.append("upload_preset","BreedsImages")
        try{
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dgnkp6a25/image/upload`, 
                formData
            );  
            saveData(response.data.secure_url);
        }
        catch(err){
            toast.error(err.message)
        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }
     const saveData = async (imageUrl) => {
    try {
      let data = {
        salary,
        bankstatment,
        address,
        reason,
        petId:id,
        imageUrl,
        petname:petname,
        ngoemail:ngoemail,
        userId: sessionStorage.getItem("userID"),
        userName: sessionStorage.getItem("name"),
        userEmail: sessionStorage.getItem("email"),
        status: "false",
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "adoptionRequests"), data);
      toast.success("Adoption request submitted successfully!!");
      setSalary("");
      setBankStatment("");
      setAddress("");
      setReason("");
      setImage({});
      setImageName("");
    } catch (err) {
      toast.error(err.message);
    }
  };


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
                    <h1 className="mb-0 bread">Add Adoption</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 10px gray"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Add Adoption Request</h3>
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
                            <label className="label" htmlFor="salary">
                                Salary
                            </label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                name="salary"
                                id="salary"
                                placeholder="Enter your Salary"
                                value={salary}
                                onChange={(e)=>{
                                    setSalary(e.target.value)
                                }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                               Bank Statment
                            </label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                name="text"
                                id="bankstatment"
                                placeholder="Bank statment"
                               value={bankstatment}
                               onChange={(e)=>{
                                setBankStatment(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                         <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                               Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                name="address"
                                id="address"
                                placeholder="address"
                               value={address}
                               onChange={(e)=>{
                                setAddress(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                              Reason to Adopt
                            </label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                name="reason"
                                id="reason"
                                placeholder="Reason to Adopt"
                               value={reason}
                               onChange={(e)=>{
                                setReason(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                                Address Proof
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                required
                                name="text"
                                id="text"
                                placeholder="description"
                               value={imageName}
                               onChange={changeImage}
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