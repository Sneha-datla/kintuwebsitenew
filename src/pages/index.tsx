import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HeaderNav from '@/component/Headernav';
import Footer from '@/component/Footer';



const Homemain = () => {
  return (
    <>

<HeaderNav></HeaderNav>
      {/* Banner Section Start */}
      <section className="banner-section">
        <video autoPlay muted loop id="myVideo">
          <source src="/img/video_sh_6.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular">
              <b>DELIVERING DIGITAL SUCCESS</b>
            </h1>
            <p style={{ fontWeight: '400' }}>
              Healthcare | AI & ML | Websites | Mobile Apps | E-Commerce | Digital Marketing
            </p>
          </div>
          <div className="social-box">
            {[
              { src: '/img/fb.png', alt: 'facebook', href: 'https://www.facebook.com/kintudesigns2005' },
              { src: '/img/ins.png', alt: 'instagram', href: '#' },
              { src: '/img/x.png', alt: 'x', href: 'https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce' },
              { src: '/img/yt.png', alt: 'youtube', href: '#' },
              { src: '/img/linkdin.png', alt: 'linkedin', href: 'https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg' },
              { src: '/img/pnt.png', alt: 'pinterest', href: 'https://in.pinterest.com/kintu2005/' },
            ].map(({ src, alt, href }) => (
              <a key={alt} target="_blank" href={href} rel="noreferrer">
                <Image src={src} width={30} height={30} alt={alt} className="img-fluid" />
              </a>
            ))}
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
                  We are the one-of-a-kind leading platform<br />
                  where innovation, entrepreneurship and<br />
                  startups grow together
                </h2>
                <p style={{ fontWeight: 500 }}>
                  <br />
                  We support the creation of new business startups and the transformation and training of young people and companies in a digital perspective.<br />
                  Born in 2005, we were the first in Surat to adopt a model that combines investment, business consulting, and digitally enhanced educational programs in one place and today<br />
                  we are the biggest innovation hub in Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}

    
        <section className="plat-form-section bg-light py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flat-form-content text-center">
                            <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                                CASE STUDIES
                            </h2>
                            <p style={{ fontWeight: 500 }}>
                                Hear from our customers about the design challenges they’ve faced. From better branding to battling burnout, find out how we helped them implement solutions, fast.
                            </p>
                            <br />
                        </div>
                        <div className="flat-form-content" style={{ width: '90%', margin: '0 auto' }}>
                            <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                                <h1 className="mb-2" style={{ font: '2.5em sans-serif', fontWeight: 500, textAlign: 'left' }}>
                                    <b>CERTILOGO.COM</b>
                                </h1>
                                <h6 style={{ fontWeight: 500 }}>
                                    We bring Profitability to your trust
                                </h6>
                                <br />
                                <h2 className="mb-3 bold">CERTILOGO PROTECTS CONSUMERS FROM COUNTERFEITS</h2>
                                <div className="row align-items-center m-0">
                                    <div className="col-md-3 order-2 order-sm-2 order-md-1 p-0">
                                        <div className="who-content p-5">
                                            <div className="cc-img">
                                                <Image 
                                                    src="/img/client_certilogo.png" 
                                                    alt="Certilogo" 
                                                    className="img-fluid" 
                                                    layout="responsive" 
                                                    width={500} 
                                                    height={300} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9 order-1 order-sm-1 order-md-2 p-0">
                                        <div className="who-content p-5">
                                            <p className="mb-3" style={{ fontWeight: 400 }}>
                                                Certilogo empowers consumers to make informed buying decisions. As it was a startup and we won the client from our happy customers through word-of-mouth marketing. We started working on the startup from scratch and developed a good business relationship. We started the analysis of the requirements, suggested a proposal, and visited them in Italy twice. In the end, we completed the project and handed over all work and code within almost 18 months.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center text-center">
                                <div className="col-md-4">
                                <h1 style={{ font: '4.5em sans-serif', fontWeight: 200 }}><b>5x</b></h1>
                                        <h2 style={{ font: '2em sans-serif', fontWeight: 200 }}><b>DEVELOPMENT</b><br /></h2>
                                        <div style={{ font: '1.5em sans-serif', fontWeight: 200 }}>COST IN ITALY</div>
                                    </div>
                                    <div className="col-md-4">
                                    <h1 style={{ font: '4.5em sans-serif', fontWeight: 500 }}><b>1x</b></h1>
                                        <h2 style={{ font: '2em sans-serif', fontWeight: 400 }}><b>OUTSOURCING</b><br /></h2>
                                        <div style={{ font: '1.5em sans-serif', fontWeight: 300 }}>COST IN INDIA</div>
                                    </div>
                                    <div className="col-md-4">
                                    <h1 style={{ font: '4.5em sans-serif', fontWeight: 500 }}><b>4x</b></h1>
                                        <h2 style={{ font: '2em sans-serif', fontWeight: 400 }}><b>PROFITABILITY</b><br /></h2>
                                        <div style={{ font: '1.5em sans-serif', fontWeight: 300 }}>FOR BRAND</div>
                                    </div>
                                </div>
                                <br />
                                <div className="flat-form-content text-center">
                                    <Link href="/case_studies.html" className="btn btn-outline-primary px-3">MORE CASE STUDIES
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="client-section py-5" style={{ backgroundColor: '#FFF' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flat-form-content text-center mb-4">
                            <h2 className="mb-1" style={{ font: '2.5em sans-serif', fontWeight: 600, }}>
                                500+ SUCCESSFUL CLIENTS
                            </h2>
                            <p style={{ fontWeight: 500 }}>
                                United States, United Kingdom, UAE, Italy, Netherlands, Canada and more...
                            </p>
                            <br />
                        </div>
                    </div>
                </div>

                < div className="client-carousel owl-carousel owl-theme" style={{ flex: '1' }}>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_alfapizza.png"
                                alt="Alfa Pizza"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_maxpho.png"
                                alt="Max Pho"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_alpinestarts.png"
                                alt="Alpinestars"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_rebeltravel.png"
                                alt="Rebel Travel"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_certilogo.png"
                                alt="Certilogo"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_hotelport.png"
                                alt="Hotel Port"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_foolfarm.png"
                                alt="Fool Farm"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_smartpulse.png"
                                alt="Smart Pulse"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_simplyweight.png"
                                alt="Simply Weight"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_parking.png"
                                alt="Parking"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-box">
                            <Image
                                src="/img/client_ecosource_canada.png"
                                alt="Ecosource Canada"
                                className="img-fluid"
                                width={300} // adjust as needed
                                height={100} // adjust as needed
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

  <Footer></Footer>
    
    </>
  );
};

export default Homemain;
