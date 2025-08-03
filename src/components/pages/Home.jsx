export default function Home(){
    return(
        <>
          <div
            className="hero-wrap js-fullheight"
            style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay" />
            <div className="container">
              <div
                className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
                style={{height:"712px"}}
                data-scrollax-parent="true"
              >
                <div className="col-md-11 ftco-animate text-center">
                  <h1 className="mb-4">Helping paws find their FurEverHome</h1>
                  <p>
                    <a href="#" className="btn btn-primary mr-md-4 py-3 px-4">
                      Learn more <span className="ion-ios-arrow-forward" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-section bg-light ftco-no-pt ftco-intro">
            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                  <div className="d-block services active text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-blind" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">What is FurEverHome?</h3>
                      <p>
                          FurEverHome is more than a shelter-it's a promise. We rescue,heal and rehome abandoned pets,giving them the love and stability they've always deserved. 
                      </p>
                      <a
                        href="#"
                        className="btn-custom d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-chevron-right" />
                        <i className="sr-only">Read more</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                  <div className="d-block services text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-dog-eating" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">Why choose Adoption?</h3>
                      <p>
                      When you adopt,you're giving a second chance to a life in need. You're not just saving a pet - you're gaining a loyal companion and opening space for another rescue.
                      </p>
                      <a
                        href="#"
                        className="btn-custom d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-chevron-right" />
                        <i className="sr-only">Read more</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                  <div className="d-block services text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-grooming" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">How Do we Prepare Them?</h3>
                      <p>
                      Every pet is grommed,cared for, and emotionally supported.At FurEverHome, we make sure that thet feel safe, clean and confident before meeting their new family.
                      </p>
                      <a
                        href="#"
                        className="btn-custom d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-chevron-right" />
                        <i className="sr-only">Read more</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container">
              <div className="row d-flex no-gutters">
                <div className="col-md-5 d-flex">
                  <div
                    className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                    style={{ backgroundImage: "url(/assets/images/about-1.jpg)" }}
                  ></div>
                </div>
                <div className="col-md-7 pl-md-5 py-md-5">
                  <div className="heading-section pt-md-5">
                    <h2 className="mb-4">Why Choose Us?</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 services-2 w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-stethoscope" />
                      </div>
                      <div className="text pl-3">
                        <h4>Compasionate Matches</h4>
                        <p>
                        We don't just help you adopt-we help you find your prefect match.Every pet is unique and we make sure you find the one meant for you.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 services-2 w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-customer-service" />
                      </div>
                      <div className="text pl-3">
                        <h4>Lifelong Supports</h4>
                        <p>
                          Adoption is just the begining.Our team is always here to guide you with tips, resources and a caring community.  
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 services-2 w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-emergency-call" />
                      </div>
                      <div className="text pl-3">
                        <h4>Always Here in Emergencies</h4>
                        <p>
                          Unexpected situations happen. That's why we're ready to help connect with you with emergency care and support when you need it most.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 services-2 w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-veterinarian" />
                      </div>
                      <div className="text pl-3">
                        <h4>Trusted Health Care Guidance</h4>
                        <p>
                          We ensure every pet is healthy and ready to join your home. From vet checkups to wellness advice, we've got you back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-counter" id="section-counter">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={50}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Customer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={8500}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Professionals</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={20}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Products</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={50}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Pets Hosted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section bg-light ftco-faqs">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-md-last">
                  <div
                    className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                    style={{ backgroundImage: "url(/assets/images/about.jpg)" }}
                  >
                    <a
                      href="https://vimeo.com/45830194"
                      className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-play" />
                    </a>
                  </div>
                  <div className="d-flex mt-3">
                    <div
                      className="img img-2 mr-md-2"
                      style={{ backgroundImage: "url(/assets/images/about-2.jpg)" }}
                    />
                    <div
                      className="img img-2 ml-md-2"
                      style={{ backgroundImage: "url(/assets/images/about-3.jpg)" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="heading-section mb-5 mt-5 mt-lg-0">
                    <h2 className="mb-3">Frequently Asks Questions</h2>
                    <p>Got questions? We've got answers to help you feel confident about adopting through furEverHome.</p>
                  </div>
                  <div
                    id="accordion"
                    className="myaccordion w-100"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header p-0" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            href="#collapseOne"
                            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <p className="mb-0">How Do I Adopt a Pet from furEverHome?</p>
                            <i className="fa" aria-hidden="true" />
                          </button>
                        </h2>
                      </div>
                      <div
                        className="collapse show"
                        id="collapseOne"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="card-body py-3 px-0">
                          <ol>
                            <li>Browse our available pets on the website</li>
                            <li>Fill the adoption application form.</li>
                            <li>
                              Our team will review your application and contact you.
                            </li>
                            <li>Meet your choosen pet through a virtual or in-person visit.</li>
                            <li>Complete the adoption and welcome your new best friend home!</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="headingTwo" role="tab">
                        <h2 className="mb-0">
                          <button
                            href="#collapseTwo"
                            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <p className="mb-0"> How Do I Prepare My Home for a New Pet?</p>
                            <i className="fa" aria-hidden="true" />
                          </button>
                        </h2>
                      </div>
                      <div
                        className="collapse"
                        id="collapseTwo"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="card-body py-3 px-0">
                          <ol>
                            <li>Pet-proof your space by removing harmful items.</li>
                            <li>Set up a cozy sleeping area with bedding.</li>
                            <li>
                            Keep food and water bowls ready.
                            </li>
                            <li>Buy essentials like a leash, toys, and grooming tools.</li>
                            <li>Make time to bond and help your pet settle in comfortably.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="headingThree" role="tab">
                        <h2 className="mb-0">
                          <button
                            href="#collapseThree"
                            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <p className="mb-0">
                            What Are the Costs Involved in Adopting a Pet?
                            </p>
                            <i className="fa" aria-hidden="true" />
                          </button>
                        </h2>
                      </div>
                      <div
                        className="collapse"
                        id="collapseThree"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="card-body py-3 px-0">
                          <ol>
                            <li>A one-time adoption fee (covers vaccinations, microchipping & vet checkups).</li>
                            <li>Basic supplies like food, bedding, toys, and grooming items.</li>
                            <li>
                            Ongoing costs for food, healthcare, and occasional emergencies.
                            </li>
                            <li>
                              Optional costs for training or pet insurance.
                            </li>
                            <li>Remember—adopting is more affordable than buying from a breeder!</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="headingFour" role="tab">
                        <h2 className="mb-0">
                          <button
                            href="#collapseFour"
                            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <p className="mb-0">
                            Can I Choose the Pet I Want?
                            </p>
                            <i className="fa" aria-hidden="true" />
                          </button>
                        </h2>
                      </div>
                      <div
                        className="collapse"
                        id="collapseFour"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="card-body py-3 px-0">
                          <ol>
                            <li>Yes—your preferences are always considered</li>
                            <li>We guide you through pets that fit your lifestyle, home, and experience.</li>
                            <li>
                            You’ll have a chance to meet and bond with the pet first.
                            </li>
                            <li>
                              If the match doesn’t feel right, we’ll help you find a better fit.
                            </li>
                            <li>Our goal: the right pet in the right home—foreve</li>
                          </ol>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="ftco-section testimony-section"
            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <h2>Happy Clients &amp; Feedbacks</h2>
                </div>
              </div>
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{ backgroundImage: "url(/assets/images/person_3.jpg)" }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <h2>Affordable Packages</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 ftco-animate">
                  <div className="block-7">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(/assets/images/pricing-1.jpg)" }}
                    />
                    <div className="text-center p-4">
                      <span className="excerpt d-block">Personal</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">49</span> <sub>/mos</sub>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />5 Dog Walk
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Vet Visit
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Pet Spa
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Free Supports
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary d-block px-2 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div className="block-7">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(/assets/images/pricing-2.jpg)" }}
                    />
                    <div className="text-center p-4">
                      <span className="excerpt d-block">Business</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">79</span> <sub>/mos</sub>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />5 Dog Walk
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Vet Visit
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Pet Spa
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Free Supports
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary d-block px-2 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div className="block-7">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(/assets/images/pricing-3.jpg)" }}
                    />
                    <div className="text-center p-4">
                      <span className="excerpt d-block">Ultimate</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">109</span> <sub>/mos</sub>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />5 Dog Walk
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Vet Visit
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />3 Pet Spa
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Free Supports
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary d-block px-2 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
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
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-1.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-1.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Cat</span>
                        <h2>
                          <a href="work-single.html">Persian Cat</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-2.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-2.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Dog</span>
                        <h2>
                          <a href="work-single.html">Pomeranian</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-3.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-3.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Cat</span>
                        <h2>
                          <a href="work-single.html">Sphynx Cat</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-4.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-4.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Cat</span>
                        <h2>
                          <a href="work-single.html">British Shorthair</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-5.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-5.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Dog</span>
                        <h2>
                          <a href="work-single.html">Beagle</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ftco-animate">
                  <div
                    className="work mb-4 img d-flex align-items-end"
                    style={{ backgroundImage: "url(/assets/images/gallery-6.jpg)" }}
                  >
                    <a
                      href="/assets/images/gallery-6.jpg"
                      className="icon image-popup d-flex justify-content-center align-items-center"
                    >
                      <span className="fa fa-expand" />
                    </a>
                    <div className="desc w-100 px-4">
                      <div className="text w-100 mb-3">
                        <span>Dog</span>
                        <h2>
                          <a href="work-single.html">Pug</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <h2>Latest news from our blog</h2>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_1.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_3.jpg")' }}
                    ></a>
                    <div className="text p-4">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">April 07, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
            style={{ backgroundImage: "url(/assets/images/bg_3.jpg)" }}
          >
            <div className="overlay" />
            <div className="container">
              <div className="row d-md-flex justify-content-end">
                <div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
                  <h2 className="mb-4">Free Consultation</h2>
                  <form action="#" className="appointment">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="fa fa-chevron-down" />
                              </div>
                              <select name="" id="" className="form-control">
                                <option value="">Select services</option>
                                <option value="">Cat Sitting</option>
                                <option value="">Dog Walk</option>
                                <option value="">Pet Spa</option>
                                <option value="">Pet Grooming</option>
                                <option value="">Pet Daycare</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Vehicle number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-calendar" />
                            </div>
                            <input
                              type="text"
                              className="form-control appointment_date"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-clock-o" />
                            </div>
                            <input
                              type="text"
                              className="form-control appointment_time"
                              placeholder="Time"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={7}
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Send message"
                            className="btn btn-primary py-3 px-4"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
       </>
    )
}