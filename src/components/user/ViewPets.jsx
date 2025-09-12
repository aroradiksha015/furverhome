import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

export default function ViewPets() {
  const [pets, setPets] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch all pets
    const unsubPets = onSnapshot(collection(db, "pets"), (petsCol) => {
      const petsData = petsCol.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPets(petsData);
    });

    // Fetch all adoption requests
    const unsubRequests = onSnapshot(
      collection(db, "adoptionRequests"),
      (reqCol) => {
        const reqData = reqCol.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRequests(reqData);
      }
    );

    return () => {
      unsubPets();
      unsubRequests();
    };
  }, []);

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
                  <a href="/">Home <i className="ion-ios-arrow-forward" /></a>
                </span>{" "}
                <span>Pets <i className="ion-ios-arrow-forward" /></span>
              </p>
              <h1 className="mb-0 bread">Pets</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2>Pets Gallery</h2>
            </div>
          </div>

          <div className="row">
            {pets.map((el) => {
              const petRequests = requests.filter((req) => req.petId === el.id);
              const isAdopted =
                petRequests.length > 0 &&
                petRequests.every((req) => req.status === true);

              return (
                <div className="col-md-4 mb-4" key={el.id}>
                  <div className="card shadow" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={el?.imageUrl || "https://via.placeholder.com/300x200"}
                      alt={el?.petname || "Pet"}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{el?.petname}</h5>
                      <p className="card-text text-muted">{el?.type}</p>
                      
                      {isAdopted && (
                        <span
                          className="badge bg-danger mb-2"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Adopted
                        </span>
                      )}
                      
                      <br />
                            <Link
                                    className={`btn ${isAdopted ? "btn-danger disabled" : "btn-success"}`}
                                    to={isAdopted ? "#" : `/petDetails/${el.id}`} // red button has no link
                                    onClick={(e) => {
                                      if (isAdopted) e.preventDefault(); // prevent navigation if adopted
                                    }}
                                  >
                                    View Pet Details
                                  </Link>
                        
                        

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
