import React from 'react'

function About() {
  return (
    <div>

  <div className="back-to-top"></div>

  <header>
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-sm">
            <div className="site-info">
              <a href="/"><span className="mai-call text-primary"></span> +00 123 4455 6666</a>
              <span className="divider">|</span>
              <a href="/"><span className="mai-mail text-primary"></span> mail@example.com</a>
            </div>
          </div>
          <div className="col-sm-4 text-right text-sm">
            <div className="social-mini-button">
              <a href="/"><span className="mai-logo-facebook-f"></span></a>
              <a href="/"><span className="mai-logo-twitter"></span></a>
              <a href="/"><span className="mai-logo-dribbble"></span></a>
              <a href="/"><span className="mai-logo-instagram"></span></a>
            </div>
          </div>
        </div> 
      </div> 
    </div> 

    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/"><span className="text-primary">One</span>-Health</a>

        <form action="#">
          <div className="input-group input-navbar">
            <div className="input-group-prepend">
              <span className="input-group-text" id="icon-addon1"><span className="mai-search"></span></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1"/>
          </div>
        </form>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/index">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/doctors">Doctors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ml-lg-3" href="/">Login / Register</a>
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  </header>

  <div className="page-banner overlay-dark bg-image">
  {/* <div className="page-banner overlay-dark bg-image" style="background-image: url(../assets/img/bg_image_1.jpg);"> */}
    <div className="banner-section">
      <div className="container text-center wow fadeInUp">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">About</li>
          </ol>
        </nav>
        <h1 className="font-weight-normal">About Us</h1>
      </div>
    </div>
  </div> 

  <div className="page-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-secondary text-white">
              <span className="mai-chatbubbles-outline"></span>
            </div>
            <p><span>Chat</span> with a doctors</p>
          </div>
        </div>
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-primary text-white">
              <span className="mai-shield-checkmark"></span>
            </div>
            <p><span>One</span>-Health Protection</p>
          </div>
        </div>
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-accent text-white">
              <span className="mai-basket"></span>
            </div>
            <p><span>One</span>-Health Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 wow fadeInUp">
          <h1 className="text-center mb-3">Welcome to Your Health Center</h1>
          <div className="text-lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur.</p>
            <p>Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
          </div>
        </div>
        <div className="col-lg-10 mt-5">
          <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_1.jpg" alt=""/>
                  <div className="meta">
                    <a href="/"><span className="mai-call"></span></a>
                    <a href="/"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Stein Albert</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_2.jpg" alt=""/>
                  <div className="meta">
                    <a href="/"><span className="mai-call"></span></a>
                    <a href="/"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_3.jpg" alt=""/>
                  <div className="meta">
                    <a href="/"><span className="mai-call"></span></a>
                    <a href="/"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <div className="page-section banner-home bg-image" style="background-image: url(../assets/img/banner-pattern.svg);"> */}
  <div className="page-section banner-home bg-image">
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src="../assets/img/mobile_app.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
          <a href="/"><img src="../assets/img/google_play.svg" alt=""/></a>
          <a href="/" className="ml-2"><img src="../assets/img/app_store.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </div>

  <footer className="page-footer">
    <div className="container">
      <div className="row px-md-3">
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Career</a></li>
            <li><a href="/">Editorial Team</a></li>
            <li><a href="/">Protection</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>More</h5>
          <ul className="footer-menu">
            <li><a href="/">Terms & Condition</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Advertise</a></li>
            <li><a href="/">Join as Doctors</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Our partner</h5>
          <ul className="footer-menu">
            <li><a href="/">One-Fitness</a></li>
            <li><a href="/">One-Drugs</a></li>
            <li><a href="/">One-Live</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Contact</h5>
          <p className="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
          <a href="/" className="footer-link">701-573-7582</a>
          <a href="/" className="footer-link">healthcare@temporary.net</a>

          <h5 className="mt-3">Social Media</h5>
          <div className="footer-sosmed mt-3">
            <a href="/" target="_blank"><span className="mai-logo-facebook-f"></span></a>
            <a href="/" target="_blank"><span className="mai-logo-twitter"></span></a>
            <a href="/" target="_blank"><span className="mai-logo-google-plus-g"></span></a>
            <a href="/" target="_blank"><span className="mai-logo-instagram"></span></a>
            <a href="/" target="_blank"><span className="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <hr/>

      <p id="copyright">Copyright &copy; 2020 <a href="https://macodeid.com/">MACode ID</a>. All right reserved</p>
    </div>
  </footer>



    </div>
  )
}

export default About