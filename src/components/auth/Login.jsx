import { Link } from "react-router-dom";
import { useState } from "react"
export default function Login(){
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
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
                Login<i className="ion-ios-arrow-forward" />
                </span>
            </p>
            <h1 className="mb-0 bread">Login</h1>
            </div>
        </div>
        </div>
           </section>
            <div className="row no-gutters my-5">
                <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Login</h3>
                    <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                    >
                        <div className="row">
                        <div className="col-md-6">
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
                                type="text"
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
                            <input
                                type="submit"
                                defaultValue="Send Message"
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
        </>
    )
}