import { addDoc, collection, doc, getDoc, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

export default function UpdateBreed(){
    const [breedName, setBreedName]=useState("")
    const [description, setDescription]=useState("")
    const [breed, setBreed]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [type, setType]=useState("")

    
    const [previousimage, setpreviousimage]=useState("")
    var {id} = useParams()
    console.log("params is",id);
    const fetchdata=async()=>{
        let breedDoc =await getDoc(doc(db,"breeds",id))
        let breedData = breedDoc.data()
        console.log("breed data",breedData);
        setBreedName(breedData.breedName)
        setDescription(breedData.description)
        setType(breedData.type)
        setpreviousimage(breedData.imageUrl)
        
    }
    useEffect(()=>{
        fetchdata()
    },[])
    
    const handleForm=async (e)=>{
        e.preventDefault()
        let formData=new FormData()
        formData.append("file", image)
        formData.append("upload_preset","breedImages")
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
    const saveData=async (imageUrl)=>{
      
        try{
            let data={
                breedName,
                description,
                type,
                imageUrl,
                status:true,
                createdAt:Timestamp.now()
            }
            await addDoc(collection(db,"breeds"),data)
            toast.success("Breed added successfully!!")
            setBreedName("")
            setDescription("")
            setType("")
            setImage({})
            setImageName("")
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
                        <a href="index.html">
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
                <div className="d-flex justify-content-end">
                </div>
                <div className="row justify-content-center no-gutters">
                    
                <div className="col-md-7" style={{boxShadow:"0px 0px 10px gray"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Update Breed</h3>
                    <img src={previousimage} height={"100px"} width={"100px"} alt="" />
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
                            <label className="label" htmlFor="breedName">
                                Breed Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="breedName"
                                id="breedName"
                                placeholder="Breed Name"
                                value={breedName}
                                onChange={(e)=>{
                                    setBreedName(e.target.value)
                                }}
                            />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="text"
                                id="text"
                                placeholder="description"
                               value={description}
                               onChange={(e)=>{
                                setDescription(e.target.value)
                               }}
                            />
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="breed">
                                Add Breed
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="breed"
                                id="breed"
                                placeholder="Breed"
                               value={breed}
                               onChange={(e)=>{
                                setBreed(e.target.value)
                               }}
                            />
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                                Type
                            </label>
                            <select
                                className="form-control"
                               value={type}
                               onChange={(e)=>{
                                setType(e.target.value)
                               }}
                            >
                                <option selected disabled value={""}>Choose one</option>
                                <option>Dog</option>
                                <option>Cat</option>
                            </select>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="text">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
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

