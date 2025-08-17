import { addDoc, collection, doc, getDoc, onSnapshot, query, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../Firebase"
import { useNavigate, useParams } from "react-router-dom"
export default function UpdatePet(){
    const [petname, setPetName]=useState("")
    const [description, setDescription]=useState("")
    const [age, setAge]=useState("")
    const [type, setType]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [data, setData]=useState([])
    const [previousimage, setpreviousimage]=useState("")

    let nav = useNavigate()

    let {id} = useParams()
    console.log("params is",id)

    const fetchData=async()=>{
        let petDoc =await getDoc(doc(db,"pets",id))
        let petData = petDoc.data()
        console.log("petData",petData);
        setPetName(petData.petname)
        setDescription(petData.description)
        setType(petData.type)
        setpreviousimage(petData.imageUrl)
        setAge(petData.age)
    }
            const fetchBreeds = () => {
            const q = query(collection(db, "breeds"));
            onSnapshot(q, (snapshot) => {
                let breeds = snapshot.docs.map((el) => ({
                ...el.data(),
                id: el.id
                }))
                setData(breeds)
            })
            }
                useEffect(() => {
                fetchData()      // fetch current pet info
                fetchBreeds()    // fetch breeds list
                }, [])

     const saveData=async (imageUrl)=>{
        try{
            let data={
                petname,
                description,
                age,
                type,
                ngoId:sessionStorage.getItem("userID"),
                ngoname:sessionStorage.getItem("name"),
                ngoemail:sessionStorage.getItem("email"),
                imageUrl,
                status:true,
                createdAt:Timestamp.now()
            }
            await updateDoc(doc(db,"pets",id),data)
            toast.success("Pet updated successfully!!")
             setpreviousimage(imageUrl)
            setTimeout(()=>{
                nav("/admin/manageBreeds")
            },2000)
        }
        catch(err){
            toast.error(err.message)
        }
    }
    const handleForm=async (e)=>{
        e.preventDefault()
        if(!!imageName){
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
        else{
            saveData(previousimage);
        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
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
                        <a href="/ngo">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Update Pets</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 10px gray"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Update Pets</h3>
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
                            <label className="label" htmlFor="petname">
                                Pet Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="petname"
                                id="petname"
                                placeholder="Pet Name"
                                value={petname}
                                onChange={(e)=>{
                                    setPetName(e.target.value)
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
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="breed">
                                Choose Breed
                            </label>
                            <select className="form-control"
                                value={type}
                               onChange={(e)=>{
                                setType(e.target.value)
                               }}
                               >
                            <option>Choose Breed</option>
                            {data?.map((el,index)=>(
                                <option key={el.id} value={el.breedName}>{el.breedName}</option>
                            ))}
                        </select>
                            {/* <select
                                className="form-control"
                               value={type}
                               onChange={(e)=>{
                                setType(e.target.value)
                               }}
                            >
                                <option selected disabled value={""}>Choose one</option>
                                <option>Dog</option>
                                <option>Cat</option>
                            </select> */}
                            </div>
                        </div>
                         <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="age">
                                Age
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                id="age"
                                placeholder="Age"
                                min={1}
                                value={age}
                                onChange={(e)=>{
                                    setAge(e.target.value)
                                }}
                            />
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

