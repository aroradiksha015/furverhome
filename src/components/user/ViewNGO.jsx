
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ViewNGO() {
  const [open, setOpen] = useState(false);
  const [donate, setDonate] = useState("");
  const [selectedNgo, setSelectedNgo] = useState(null); // ✅ Track which NGO was clicked
  const [data, setData] = useState([]);

  let nav = useNavigate();
  const username = sessionStorage.getItem("name");

  const onOpenModal = (ngo) => {
    setSelectedNgo(ngo);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
    setDonate("");
    setSelectedNgo(null);
  };

  const donatenow = (email, name, id) => {
    const options = {
      key: "rzp_test_REGDFtTH2ozd7r",
      amount: donate * 100,
      currency: "INR",
      name: "FurEverHome",
      description: "Test Transaction",
      handler: async function (response) {
        console.log("This is response", response);
        const data = {
          id,
          ngoname: name,
          status: true,
          PaymentId: response.razorpay_payment_id,
          amt: donate,
          username,
          ngoemail:email
        };
        addDoc(collection(db, "payments"), data)
          .then(() => {
            toast.success("Thank you for your donation!");
            setDonate(""); 
            setOpen(false); // ✅ close after success
          })
          .catch(() => {
            toast.error("Donation Unsuccessful");
            setOpen(false); // ✅ also close on error
          });
      },
      prefill: {
        name: "Diksha Arora",
        email: "aroradiksha01@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#33cc61ff",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    return options;
  };

  useEffect(() => {
    const fetchData = () => {
      let q = query(collection(db, "users"), where("userType", "==", 2));
      onSnapshot(q, (ngoCol) => {
        let ngoData = ngoCol.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });
        setData(ngoData);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Header */}
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

      {/* NGO Cards */}
      <div className="container my-5">
        <h1 className="mb-4 text-center">NGOs</h1>
        <div className="row">
          {data?.map((el, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary text-center">{el?.name}</h5>
                  <p><strong>Email:</strong> {el?.email}</p>
                  <p><strong>About:</strong> {el?.about || "N/A"}</p>
                  <p><strong>License No:</strong> {el?.licenseNO || "N/A"}</p>
                  <p><strong>Contact:</strong> {el?.contact || "N/A"}</p>
                  <p><strong>Address:</strong> {el?.address || "N/A"}</p>

                  <button
                    className="btn btn-success"
                    onClick={() => {
                      if (sessionStorage.getItem("isLogin") === "true") {
                        onOpenModal(el);
                      } else {
                        toast.error("Please Login to donate");
                        nav("/login");
                      }
                    }}
                  >
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Single Modal */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h4 className="mb-3 text-center">Please Enter the Amount</h4>
          <div className="mb-3">
            <label htmlFor="donationAmount" className="form-label fw-bold">
              Enter the Amount
            </label>
            <input
              id="donationAmount"
              name="donationAmount"
              type="number"
              required
              className="form-control"
              value={donate}
              onChange={(e) => setDonate(e.target.value)}
              placeholder="Enter amount in ₹"
            />
          </div>
          <button
            className="btn btn-success w-100"
            onClick={() => {
              if (!donate || donate <= 0) {
                toast.error("Please enter a valid donation amount");
                return;
              }
              donatenow(selectedNgo?.email, selectedNgo?.name, selectedNgo?.id);
            }}
          >
            DONATE
          </button>
        </div>
      </Modal>
    </>
  );
}
