import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
export default function AddNGO(){
       const [name, setName]=useState("")
        const [email, setEmail]=useState("")
        const [password, setPassword]=useState("") 
        const [contact, setContact]=useState("")
        const [licenseNO, setLicenseNO]=useState("")
        const [about, setAbout]=useState("")
        const [address, setAddress]=useState("")
        const saveData=async()=>{
                try{
                    let data={
                        name,
                        email,
                        password,
                        contact,
                        licenseNO,
                        about,
                        address,
                        userType:2,
                        status:true,
                        createdAt:Timestamp.now()
                    }
                    console.log(data);
                    await addDoc(collection(db,"users"),data)
                    toast.success("NGO added successfully!!")
                    setName("")
                    setEmail("")
                    setPassword("")
                    setContact("")
                    setLicenseNO("")
                    setAbout("")
                    setAddress("")
                }
                catch(err){
                    toast.error(err.message)
                }
            }
        const handleForm=async(e)=>{
        e.preventDefault() 
        try{
        saveData();
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
                        NGO<i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">ADD NGO</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 10px gray"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Add NGO</h3>
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
                               value={email}
                               onChange={(e)=>{
                                setEmail(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="password">
                               Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="passwprd"
                                id="password"
                                placeholder="Password"
                               value={password}
                               onChange={(e)=>{
                                setPassword(e.target.value)
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
                            <label className="label" htmlFor="licenseNo">
                               License Number
                            </label>
                            <input
                                type="licenseNo"
                                className="form-control"
                                name="licenseNo"
                                id="licenseNo"
                                placeholder="License Number"
                               value={licenseNO}
                               onChange={(e)=>{
                                setLicenseNO(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                               About
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="text"
                                id="text"
                                placeholder="About"
                               value={about}
                               onChange={(e)=>{
                                setAbout(e.target.value)
                               }}
                            />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="address">
                               Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                id="address"
                                placeholder="Address"
                               value={address}
                               onChange={(e)=>{
                                setAddress(e.target.value)
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