import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let isLogin = sessionStorage.getItem("isLogin");
  console.log(isLogin);
  let nav = useNavigate();
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        setTimeout(() => {
          nav("/login");
        }, 3000);
        Swal.fire({
          title: "Logout!",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 phone pl-md-2">
                <a href="#" className="mr-2">
                  <span className="fa fa-phone mr-1" /> +91 9876543210
                </a>
                <a href="#">
                  <span className="fa fa-paper-plane mr-1" />{" "}
                  aroradiksha01@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="flaticon-pawprint-1 mr-2" />
            FurEverHome
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ViewBreeds" className="nav-link">
                  Breeds
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ViewPets" className="nav-link">
                  Pets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ViewNGO" className="nav-link">
                  NGO
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Adoption
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/viewPets" className="dropdown-item">
                    Add Adoption Request
                  </Link>
                  <Link to="/trackRequest" className="dropdown-item">
                    Track Request
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
                {!isLogin && (
                    <li className="nav-item dropdown">
                      <a
                        className="dropdown-toggle nav-link"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Register
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to="/register" className="dropdown-item">
                          Register as a User
                        </Link>
                        <Link to="/registerNGO" className="dropdown-item">
                          Register as an NGO
                        </Link>
                      </div>
                    </li>
                  )}

              {
                //condition?true:false
                isLogin ? (
                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link">
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
