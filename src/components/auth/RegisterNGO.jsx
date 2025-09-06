import { createUserWithEmailAndPassword } from "firebase/auth"
import { Timestamp, setDoc, doc } from "firebase/firestore"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth, db } from "../Firebase"

export default function RegisterNGO(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [contact, setContact]=useState("")
    const [licenseNO, setLicenseNO]=useState("")
    const [about, setAbout]=useState("")
    const [address, setAddress]=useState("")
 let nav = useNavigate()
    const handleForm = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(async(userCred)=>{
            console.log(userCred.user.uid)
            toast.success("Registered Successfully")
            await saveData(userCred.user.uid)
            nav("/ngo")
        })
        .catch((err)=>{
            toast.error(err.message);
        }
        )
    }
    const saveData = async(userId)=>{
        let data={
            name:name,
            email, 
            contact,
            password,
            licenseNO,
            about,
            address, 
            userType:2,
            status:true, 
            createdAt:Timestamp.now()
        }
        console.log(data);
        await setDoc(doc(db,"users",userId),data)
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
                            <Link to="/">
                                Home <i className="ion-ios-arrow-forward" />
                            </Link>
                            </span>{" "}
                            <span>
                            Register <i className="ion-ios-arrow-forward" />
                            </span>
                        </p>
                        <h1 className="mb-0 bread">Register</h1>
                        </div>
                    </div>
                    </div>
            </section>
            <div className="container my-5">
                <div className="row no-gutters">
                <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Register</h3>
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
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Full name"
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
                                Email Address
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
                                name="password"
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
                                required
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
                                required
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
                                required
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
                <div className="col-md-5 d-flex align-items-stretch">
                    <div
                    className="info-wrap w-100 p-5 img"
                    style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                    ></div>
                </div>
                </div>
            </div>
        </>
    )
}