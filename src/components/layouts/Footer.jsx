import { Link } from "react-router-dom";
export default function footer(){
    return(
        <>
          <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">FurEverHome</h2>
          <p>
           Becasuse every paw deserves a place call home!!
          </p>
          <ul className="ftco-footer-social p-0">
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <span className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Pet Adoption </h2>
          <div className="block-21 mb-4 d-flex">
            
            <div className="text">
              <h3 className="heading">
                <p>When you adopt one pet, you don't just change their life- you also create space in our shelter to resuce another animal in beed. One adoption saves two lives!"</p>
              </h3>
              
            </div>
          </div>
        </div>
        {/* <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="py-2 d-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/viewPets" className="py-2 d-block">
                Pets
              </Link>
            </li>
            <li>
              <a href="/viewBreeds" className="py-2 d-block">
               Breeds
              </a>
            </li>
            <li>
              <a href="/ViewNGO" className="py-2 d-block">
                NGO
              </a>
            </li>
            {/* <li>
              <Link to="/blog" className="py-2 d-block">
                Blog
              </Link>
            </li> 
            <li>
              <Link to="/contact" className="py-2 d-block">
                Contact
              </Link>
            </li>
          </ul>
        </div> */}


        
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon fa fa-map" />
                <span className="text">
                  Green Enclave,Urban Estate Phase,Jalandhar,Punjab-144022
                </span>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-phone" />
                  <span className="text">+91 9876543210</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">arora.diksha01@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="copyright">
            
            
            Copyright © All rights reserved | This is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            {/* <a href="https://colorlib.com" target="_blank"> */}
             furEverHome
            {/* </a> */}
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

     
    );
} 
       
  
