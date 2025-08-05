import { Link } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../Firebase"
import { toast } from "react-toastify"
import { doc, setDoc, Timestamp } from "firebase/firestore"
export default function Register(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [contact, setContact]=useState("")
    const handleForm = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCred)=>{
            console.log(userCred.user.uid)
            toast.success("Registered Successfully")
            saveData(userCred.user.uid)
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
            userType:3,
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
    