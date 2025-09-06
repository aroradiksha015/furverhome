import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import Modal from "react-responsive-modal";

export default function ViewNG0(){
  const [open, setOpen] = useState(false);
  const[donate,setDonate] = useState("")

  const onOpenModal = (email,name,id) =>{
    console.log("is open is called");

setOpen(true);
  } 
 const  donatenow= (email,name,id)=>{

   const options = {
              key: "", // Replace with your Razorpay key
              amount:{donate} ,// Amount in paise (₹500 = 50000)
              currency: "INR",
              name: "Kinder",
              description: "Test Transaction",
              handler: async function (response) {
                  
                  console.log("This is response", response);
  
                  const data = {
                      id,
                      name,
                      status: true,
                      PaymentId: response.razorpay_payment_id
  
                  }
                  addDoc(collection(db, "payments"), data).then(() => {
                      toast.success("Ordered successfully")
                  }).catch(() => {
                      toast.error("Ordered UNsuccessfully")
  
                  })
  
              },
              prefill: {
                  name: "Arshpreet Singh",
                  email: "arsh@example.com",
                  contact: "9999999999",
              },
              notes: {
                  address: "Test Address",
              },
              theme: {
                  color: "#3399cc",
              },
          };
  
          const rzp = new window.Razorpay(options);
          rzp.open();
  
          return options
  
  
      }


 }
  const onCloseModal = () => setOpen(false);
           const [data, setData]=useState([])
            useEffect(()=>{
                fetchData()
            },[])
            const fetchData=()=>{
                let q=query(collection(db,"users"),where("usertype","==",2));
                onSnapshot(q, (ngoCol)=>{
                    let ngoData=ngoCol.docs.map((el)=>{
                       return {...el.data(), id:el.id}
                    })
                    setData(ngoData)
                })
            }
            console.log(data);
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
                                NGO <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">NGOs</h1>
                            </div>
                        </div>
                        </div>
                    </section>

                    <div className="container my-5">
  <h1 className="mb-4 text-center">NGOs</h1>
  <div className="row">
    {data?.map((el, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h5 className="card-title text-primary text-center">{el?.name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {el?.email}
            </p>
            <p className="card-text">
              <strong>About:</strong> {el?.about || "N/A"}
            </p>
            <p className="card-text">
              <strong>License No:</strong> {el?.licenseNO || "N/A"}
            </p>
            <p className="card-text">
              <strong>Contact:</strong> {el?.contact || "N/A"}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {el?.address || "N/A"}
            </p>
            {/* <p className="btn btn-success"> DONATE NGO
            </p> */}
              <button onClick={()=>{onOpenModal(el?.email,el?.name,el?.id)}} type="button">DONATE NOW</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <label name = "amt" id="amt">Enter the Amount</label>
        <input name="amt" id="amt" type="number" required>
        </input>  value={donate} onChange={(e)=>{
                                    setDonate(e.target.value)}}
        
        <button onClick={()=>{donatenow(el?.email,el?.name,el?.id)}}>Donate</button>
      </Modal>
    
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

                </>
            )
       