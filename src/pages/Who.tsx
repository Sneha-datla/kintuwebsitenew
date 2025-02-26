import Footer from '@/component/Footer'
import HeaderNav from '@/component/Headernav'
import React from 'react'
import Image from 'next/image'

export default function Who() {
  return (
    <div>
      <HeaderNav></HeaderNav>

      <section className="banner-section" style={{ backgroundImage: "url('/img/banner5_2.png')" }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular">
              <b>WE ARE A START-UP BUILDER</b>
            </h1>
            <p style={{ fontWeight: 400 }}>
              We spread the culture of Digital Innovations, Entrepreneurship, and Start-ups
            </p>
          </div>
          <div className="social-box">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
              <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={40} height={40} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={40} height={40} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
              <Image src="/img/x.png" className="img-fluid" alt="x" width={40} height={40} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={40} height={40} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
              <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={40} height={40} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
              <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={40} height={40} />
            </a>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Platform Section Start */}
      <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                  We founded KINTU in 2005 with the strong belief that all businesses should be socially responsible.
                </h2>
                <p style={{ fontWeight: 500 }}>
                  Where innovation, entrepreneurship and startups grow together. We have since made it our mission to promote an innovative culture. By 2030, we plan to have an innovation ecosystem that unites more than 1,000 individuals, "circle by circle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}

      {/* Content Section Starts */}
      <div className="who-img-content overflow-hidden">
        <div className="row align-items-center m-0">
          <div className="col-md-6 order-2 order-sm-2 order-md-1 p-0">
            <div className="who-content p-5">
              <h2 className="mb-3 bold">The “KINTU” in Our Name Stands for “But and If”</h2>
              <p className="mb-3" style={{ fontWeight: 400 }}>
                Humans are at the core of everything we do: our locals, our customers, our teachers, the experts and businesses we cooperate with, and the founders of startups inspire us daily to create the future.
              </p>
              <p>
                Inspired by these values, we established KINTU For Career Foundation with the purpose of collaborating with companies in order to contribute to education, solidarity, sports, health, and culture, while simultaneously supporting students and developing a common digital culture.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1 order-sm-1 order-md-2 p-0">
            <div className="who-img-box">
              <Image src="/img/photo1.png" alt="img" className="img-fluid" width={500} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className="who-img-content overflow-hidden bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 order-1 order-sm-1 order-md-1 p-0">
            <div className="who-img-box">
              <Image src="/img/photo2.png" alt="img" className="img-fluid" width={500} height={400} />
            </div>
          </div>
          <div className="col-md-6 order-2 order-sm-2 order-md-2 p-0">
            <div className="who-content p-5">
              <h2 className="mb-3 bold">Our Mission Is to Spread the Culture of Digital Innovation</h2>
              <p className="mb-3">
                Making socially impactful startups, whether as individuals or as conglomerates, is our aim.
              </p>
              <p>
                Our goal is to establish a setting that fosters creativity and supports dreaming. A place where individuals recognize that time is of the essence and that much work needs to be done to improve the world for coming generations. A human-designed space meant for humans.
              </p>
            </div>
          </div>
        </div>
      </div>

 {/* Strategy Section Start */}
 <section className="plat-form-section py-5" style={{ backgroundColor: '#FFF' }}>
        <div className="container-fluid">
          <div className="tech-row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>OUR STRATEGY</h2>
                <p style={{ fontWeight: 500 }}>
                  Creating your unique Identity. We Are a Values-First Type of Organization
                  We are what we are because of this. We encourage people to embrace their uniqueness and sensitivity while giving them the freedom to be independent and flexible.
                </p>
                <br />
              </div>
              <div className="flat-form-content" >
                <div className="sr-box mb-4 card p-4 rounded-3 text-left bg-light">
                  <div className="row">
                    <div className="tech-column">
                      <div className="column2">
                        <h1 >
                          <Image src="/img/consulting.png" width={100} height={100} alt="Consulting First" />
                        </h1>
                      </div>
                      <div className="column3">
                        <h2 >
                          <b>CONSULTING FIRST</b>
                          <br />
                        </h2>
                        <div >
                          Driving Competitive Business Advantage
                        </div>
                      </div>
                    </div>

                    <div className="tech-column">
                      <div className="column2">
                        <h1>
                          <Image src="/img/innovation.png" width={100} height={100} alt="Focus and Innovation" />
                        </h1>
                      </div>
                      <div className="column3">
                        <h2 >
                          <b>FOCUSED INNOVATION</b>
                          <br />
                        </h2>
                        <div >
                          We are more Focused on Business Innovations
                        </div>
                      </div>
                    </div>

                    <div className="tech-column">
                      <div className="column2">
                        <h1>
                          <Image src="/img/digital.png" width={100} height={100} alt="Digital Platform" />
                        </h1>
                      </div>
                      <div className="column3">
                        <h2 >
                          <b>DIGITAL PLATFORMS</b>
                          <br />
                        </h2>
                        <div >
                          Leadership in a core set of winning packaged applications
                        </div>
                      </div>
                    </div>

                    <div className="tech-column">
                      <div className="column2">
                        <h1 >
                          <Image src="/img/automation.png" width={100} height={100} alt="Automation" />
                        </h1>
                      </div>
                      <div className="column3">
                        <h2>
                          <b>AUTOMATION</b>
                          <br />
                        </h2>
                        <div >
                          Balancing Automation with Talent Transformation
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
      {/* Strategy Section End */}

      {/* Glance Section Starts */}
      <section className="plat-form-section  py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center px-0 px-sm-0 px-md-5">
                <h2 className="mb-3"> Kintu Designs at a Glance </h2>
                <p className="mb-3">
                  Bringing the technology to Everyone. We are ranked first among Suratis and fifth among Gujarat for mentoring services in the Surat’ “Surat’s Leading Startup Hubs” list, which recognizes the best accelerators and entrepreneurship and innovation ecosystems in Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Glance Section Ends */}

      {/* Content Blocks Section Starts */}
      <section className="startup-record-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">15</h1>
                <h6 className="text-uppercase">Technical Meastros</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">+$2.50M</h1>
                <h6 className="text-uppercase">Million of Revenue</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">5</h1>
                <h6 className="text-uppercase">Active Clients</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">72%</h1>
                <h6 className="text-uppercase">Clients from USA</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">20%</h1>
                <h6 className="text-uppercase">Clients from Europe</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">8%</h1>
                <h6 className="text-uppercase">Clients from UAE & Middle East</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">+3</h1>
                <h6 className="text-uppercase">AI/ML Start-ups Developed</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">+10</h1>
                <h6 className="text-uppercase">Startups Developed</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                <h1 className="mb-2">+1000</h1>
                <h6 className="text-uppercase">Projects Completed till Now</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Blocks Section Ends */}
      <section className="clint-section py-5" style={{ backgroundColor: '#FFF' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flat-form-content text-center mb-4">
                            <h2 className="mb-1" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                                TALENTED TEAM MEMBERS
                            </h2>
                            <p style={{ fontWeight: 500 }}>
                                Our Talented Team wants to build an organization of leaders and is dedicated to cultivating a leadership culture throughout the whole business.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Team Member 1 */}
                    <div className="col-md-4">
                        <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                            <div className="row">
                                <div className="column left" style={{ width: '30%' }}>
                                    <h2>
                                        <a className="navbar-brand" href="index.html">
                                            <Image src="/img/rushikesh_ceo.png" alt="Rushikesh Patel" width={150} height={150} style={{ width: '100%' }} />
                                        </a>
                                    </h2>
                                </div>
                                <div className="column right" style={{ width: '70%' }}>
                                    <h2 className="mb-2">RUSHIKESH PATEL</h2>
                                    <h6 className="text-uppercase">CEO & FOUNDER</h6>
                                    <p style={{ fontSize: 'smaller' }}>Entrepreneur managing KINTU SOFTWARE GROUP IT & Software Group with experience of 21+ years.</p>
                                </div>
                                <div style={{ width: '70%', marginLeft: '30%' }}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                        <Image src="/img/fb.png" alt="facebook" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="#">
                                        <Image src="/img/ins.png" alt="instagram" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                        <Image src="/img/x.png" alt="x" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                        <Image src="/img/linkdin.png" alt="linkedin" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                        <Image src="/img/pnt.png" alt="pinterest" width={30} height={30} className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-md-4">
                        <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                            <div className="row">
                                <div className="column left" style={{ width: '30%' }}>
                                    <h2>
                                        <a className="navbar-brand" href="index.html">
                                            <Image src="/img/purvi.png" alt="Purvi Patel" width={150} height={150} style={{ width: '100%' }} />
                                        </a>
                                    </h2>
                                </div>
                                <div className="column right" style={{ width: '70%' }}>
                                    <h2 className="mb-2">PURVI PATEL</h2>
                                    <h6 className="text-uppercase">DIRECTOR</h6>
                                    <p style={{ fontSize: 'smaller' }}>Home maker managing accounts in KINTU SOFTWARE GROUP IT & Software Group with experience of 11+ years.</p>
                                </div>
                                <div style={{ width: '70%', marginLeft: '30%' }}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                        <Image src="/img/fb.png" alt="facebook" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="#">
                                        <Image src="/img/ins.png" alt="instagram" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                        <Image src="/img/x.png" alt="x" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="#">
                                        <Image src="/img/yt.png" alt="youtube" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                        <Image src="/img/linkdin.png" alt="linkedin" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                        <Image src="/img/pnt.png" alt="pinterest" width={30} height={30} className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col-md-4">
                        <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                            <div className="row">
                                <div className="column left" style={{ width: '30%' }}>
                                    <h2>
                                        <a className="navbar-brand" href="index.html">
                                            <Image src="/img/divya.png" alt="Divya Patel" width={150} height={150} style={{ width: '100%' }} />
                                        </a>
                                    </h2>
                                </div>
                                <div className="column right" style={{ width: '70%' }}>
                                    <h2 className="mb-2">DIVYA PATEL</h2>
                                    <h6 className="text-uppercase">CREATIVE DIRECTOR</h6>
                                    <p style={{ fontSize: 'smaller' }}>She has been UI/UX and Creative Projects since 5+ years for company presently in Canada providing creative services.</p>
                                </div>
                                <div style={{ width: '70%', marginLeft: '30%' }}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                        <Image src="/img/fb.png" alt="facebook" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="#">
                                        <Image src="/img/ins.png" alt="instagram" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                        <Image src="/img/x.png" alt="x" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                        <Image src="/img/linkdin.png" alt="linkedin" width={30} height={30} className="img-fluid" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                        <Image src="/img/pnt.png" alt="pinterest" width={30} height={30} className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                    <div className="row">
                        <div className="column left" style={{ width: '30%' }}>
                            <h2>
                                <a className="navbar-brand" href="index.html">
                                    <Image src="/img/dhruti.png" alt="Dhruti Patel" width={100} height={100} style={{ width: '100%' }} />
                                </a>
                            </h2>
                        </div>
                        <div className="column right" style={{ width: '70%' }}>
                            <h2 className="mb-2">DHRUTI PATEL</h2>
                            <h6 className="text-uppercase">DATA SCIENTIST</h6>
                            <p style={{ fontSize: 'smaller' }}>
                                She has been presently in Canada doing Data science Ventures since last 3 years various projects.
                            </p>
                        </div>
                        <div style={{ width: '70%', marginLeft: '30%' }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                <Image src="/img/x.png" className="img-fluid" alt="x" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                    <div className="row">
                        <div className="column left" style={{ width: '30%' }}>
                            <h2>
                                <a className="navbar-brand" href="index.html">
                                    <Image src="/img/vrushali.png" alt="Vrushali Patel" width={100} height={100} style={{ width: '100%' }} />
                                </a>
                            </h2>
                        </div>
                        <div className="column right" style={{ width: '70%' }}>
                            <h2 className="mb-2">VRUSHALI PATEL</h2>
                            <h6 className="text-uppercase">HR MANAGER</h6>
                            <p style={{ fontSize: 'smaller' }}>
                                Completed her Masters in Human Resource and working with Kintu Group since last 1 year
                            </p>
                        </div>
                        <div style={{ width: '70%', marginLeft: '30%' }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                <Image src="/img/x.png" className="img-fluid" alt="x" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                    <div className="row">
                        <div className="column left" style={{ width: '30%' }}>
                            <h2>
                                <a className="navbar-brand" href="index.html">
                                    <Image src="/img/usa_flag.png" alt="Advisory Board" width={100} height={100} style={{ width: '100%' }} />
                                </a>
                            </h2>
                        </div>
                        <div className="column right" style={{ width: '70%' }}>
                            <h2 className="mb-2">ADVISORY BOARD</h2>
                            <h6 className="text-uppercase">ADVISORY TEAM</h6>
                            <p style={{ fontSize: 'smaller' }}>
                                PETER CAIAZZI - VICE PRESIDENT (TAS GROUP)<br />
                                FRED BEAN - FOUNDER, REBEL TRAVEL CORPORATION
                            </p>
                        </div>
                        <div style={{ width: '70%', marginLeft: '30%' }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                                <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                                <Image src="/img/x.png" className="img-fluid" alt="x" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#">
                                <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                                <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={30} height={30} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                                <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      <Footer></Footer>
    </div>
  )
}
