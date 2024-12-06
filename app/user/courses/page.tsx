"use client";
import React from "react";

import Link from "next/link";

const courses = () => {
    return (
        <>
        
            <head>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <title>Courses</title>
            </head>
            
            <main>

                 <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">                                                                                          
                                                <li className="active" ><a href="index.php">Home</a></li>
                                                <li> <Link href="user/courses">Courses</Link></li>
                                                <li><a href="#">About</a></li>
                                                
                                                <li><a href="#">Contact</a></li>
                                               
                                               
                                                <li className="button-header" ><a href="#" className="btn btn3">Log Out</a></li>
                                                <li ><a href="#"><img src="../icon1.png"/></a></li>
                                            </ul>
											
                                        </nav>
                                    </div>
                                </div>
                            </div> 
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <section className="slider-area">
                   
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 col-md-12">
                                        <div className="hero__caption">
                                            <h1 data-animation="fadeInLeft" data-delay="0.2s">Courses</h1>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                                    <li className="breadcrumb-item"><a href="/courses">Our Courses</a></li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="services-area">
                    <div className="container">
                        <h1>Available Courses :</h1>
                        <div className="row justify-content-sm-center">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <i className="fa fa-cogs fa-2x"></i>
                                    </div>
                                    <div className="featured-box">
                                        <Link href="/HTML">
                                            <h3>HTML</h3>
                                        </Link>
                                        <p>This FREE Tutorial will teach you how to design a webpage using HTML. Complete a series of hands-on practice and examination while writing real HTML code.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <i className="fa fa-leaf fa-2x"></i>
                                    </div>
                                    <div className="featured-box">
                                        <Link href="/CSS">
                                            <h3>CSS</h3>
                                        </Link>
                                        <p>Our CSS Tutorial will teach you how to control the style & layout of websites. Complete a series of practice and examination while filling out actual CSS code.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="courses-area section-padding40 fix">
  <div className="container">
    <div id="courses">
      {/* Section Title */}
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8">
          <div className="section-tittle text-center mb-55">
            <h2>Our Featured Courses</h2>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="row">
        {/* Single Course */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="../assets/img/gallery/featured1.png" alt="Course Image" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application Design</a>
              </h3>
              <p>
                The automated process handles all your website tasks.
                Discover tools and techniques to engage effectively with
                vulnerable children and young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                  <p>
                    <span>(4.5)</span> based on 120 reviews
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>

        {/* Repeat for additional courses */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="../assets/img/gallery/featured2.png" alt="Course Image" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application Design</a>
              </h3>
              <p>
                The automated process handles all your website tasks.
                Discover tools and techniques to engage effectively with
                vulnerable children and young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                  <p>
                    <span>(4.5)</span> based on 120 reviews
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="../assets/img/gallery/featured3.png" alt="Course Image" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application Design</a>
              </h3>
              <p>
                The automated process handles all your website tasks.
                Discover tools and techniques to engage effectively with
                vulnerable children and young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                  <p>
                    <span>(4.5)</span> based on 120 reviews
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </main>
            <footer>
            <div className="footer-wrappper footer-bg">
                {/* Footer Start */}
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        {/* Logo */}
                                        <div className="footer-logo mb-25">
                                            <a href="#">
                                                <img src="../assets/img/logo/logo2_footer.png" alt="Logo" />
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>
                                                    The automated process starts as soon as your clothes go into the
                                                    machine.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Social Icons */}
                                        <div className="footer-social">
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://bit.ly/sai4ull">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Links */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Our solutions</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Design & creatives</a>
                                            </li>
                                            <li>
                                                <a href="#">Telecommunication</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">Programing</a>
                                            </li>
                                            <li>
                                                <a href="#">Architecture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Design & creatives</a>
                                            </li>
                                            <li>
                                                <a href="#">Telecommunication</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">Programing</a>
                                            </li>
                                            <li>
                                                <a href="#">Architecture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Company</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Design & creatives</a>
                                            </li>
                                            <li>
                                                <a href="#">Telecommunication</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">Programing</a>
                                            </li>
                                            <li>
                                                <a href="#">Architecture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom Area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">
                                        <p>
                                            Copyright &copy;{' '}
                                            <script>
                                                {`document.write(new Date().getFullYear());`}
                                            </script>{' '}
                                            All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </div>
            <div id="back-top">
                <a title="Go to Top" href="#">
                    <i className="fas fa-level-up-alt"></i>
                </a>
            </div>
        </footer>
        </>
    );
};

export default courses;