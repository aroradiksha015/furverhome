import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export default function PetDetails() {
  const [pet, setPet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petDoc = await getDoc(doc(db, "pets", id));
        if (petDoc.exists()) {
          setPet({ id: petDoc.id, ...petDoc.data() });
          console.log("Pet data:", petDoc.data());
        } else {
          console.log("No such pet!");
        }
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
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
              <h1 className="mb-0 bread">Pets Details</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-7" style={{ boxShadow: "0px 0px 10px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h2 className="text-center mb-4">Pet Details</h2>

              {pet ? (
                <>
                  <div className="text-center mb-4">
                    <img
                      src={pet?.imageUrl}
                      alt={pet?.petname}
                      className="img-fluid rounded"
                      style={{ maxHeight: "250px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">Pet Name:</label>
                    <p className="form-control-plaintext">
                      {pet?.petname || "N/A"}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">Type:</label>
                    <p className="form-control-plaintext">
                      {pet?.type || "N/A"}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">Age:</label>
                    <p className="form-control-plaintext">
                      {pet?.age || "N/A"}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">Description:</label>
                    <p className="form-control-plaintext">
                      {pet?.description || "N/A"}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">NGO Name:</label>
                    <p className="form-control-plaintext">
                      {pet?.ngoname || "N/A"}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">NGO Email:</label>
                    <p className="form-control-plaintext">
                      {pet?.ngoemail || "N/A"}
                    </p>
                  </div>

                  <div className="text-center">
                    {/* <button className="btn btn-success px-4">Adopt</button> */}
                    {sessionStorage.getItem("isLogin") == "true" ? (
                      <Link
                        className="btn btn-success"
                        to={"/addRequest/" + pet?.id}
                      >
                        ADOPT
                      </Link>
                    ) : (
                      <Link
                        className="btn btn-success"
                        to={"/login"}
                      >
                      LOGIN TO ADOPT
                      
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-center text-muted">Loading pet details...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
