// components/Footer.jsx
import React from 'react';
import Image from 'next/image'; // Import Image for Next.js image optimization
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top py-5">
        <div className="container-fluid">
          <div className="row">
            {/* Contact Us Section */}
            <div className="col-md-3">
              <div className="footer-box mb-4">
                <h4 className="mb-3 text-white medium" style={{ font: '1.5em sans-serif', fontWeight: 600 }}>
                  CONTACT US
                </h4>
                <div className="contact-box mb-2">
                  <h5 className="light text-white">Address</h5>
                  <p className="text-white">
                    India: B/406, Aagam Shopping World, Vesu, Surat, Gujarat. Pincode - 395007
                    <br />
                    Canada: 20 Brownridge Court, Brampton L6W 4L5 ON, Canada
                  </p>
                </div>
                <div className="contact-box mb-2">
                  <h5 className="light text-white">Email</h5>
                  <p className="text-white">support@kintudesigns.com</p>
                </div>
                <div className="contact-box mb-2">
                  <h5 className="light text-white">Mobile</h5>
                  <p className="text-white">
                    (CANADA) +1 6472248540
                    <br />
                    (INDIA) +91 9727785703
                  </p>
                </div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="col-md-3">
              <div className="footer-box mb-4">
                <h4 className="mb-3 text-white medium" style={{ font: '1.5em sans-serif', fontWeight: 600 }}>
                  LATEST NEWS
                </h4>
                <ul className="f-news-ul">
                  <li>
                    <a className="nav-link" style={{ color: '#FFF' }} href="how_to_do_a_web_design_audit.html">
                      How To Do a Web Design Audit in 5 Steps (Checklist Included)
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" style={{ color: '#FFF' }} href="developing_ai_generated_photorealistic_images.html">
                      Beyond the Brief: Developing AI-Generated Photorealistic Images
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" style={{ color: '#FFF' }} href="ai_in_brand_creative.html">
                      AI in Brand Creative: Questions In-House Teams Are Asking
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" style={{ color: '#FFF' }} href="strategies_overcoming_ai_talent_shortage.html">
                      Strategies for Overcoming the AI Talent Shortage
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-md-3">
              <div className="footer-box mb-4">
                <h4 className="mb-3 text-white medium" style={{ font: '1.5em sans-serif', fontWeight: 600 }}>
                  LINKS
                </h4>
                <ul className="f-link-ul">
                  <li style={{ marginTop: '10px' }}>
                    <a style={{ color: '#FFF' }} href="who_we.html">WHO</a> |
                    <a style={{ color: '#FFF' }} href="what.html">WHAT</a> |
                    <a style={{ color: '#FFF' }} href="work.html">WORK</a> |
                    <a style={{ color: '#FFF' }} href="blogs.html">BLOGS</a> |
                    <a style={{ color: '#FFF' }} href="job.html">CAREERS</a> |
                    <a style={{ color: '#FFF' }} href="contact.html">CONTACT</a>
                  </li>
                </ul>
              </div>
              <div className="footer-box mb-4">
                <h4 className="mb-3 text-white medium" style={{ font: '1.5em sans-serif', fontWeight: 600 }}>
                  QUOTES
                </h4>
                <b className="text-white">
                  "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
                </b>
                <br />
                <p className="text-white">Tim Berners-Lee - Inventor of the World Wide Web</p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-md-3">
              <div className="footer-box mb-4">
                <h4 className="mb-3 text-white medium" style={{ font: '1.5em sans-serif', fontWeight: 600 }}>
                  OUR NEWSLETTER
                </h4>
                <div className="newsletter-box">
                  <small className="text-white">Subscribe To Our Newsletter</small>
                  <form>
                    <div className="mb-3">
                      <input className="form-control" type="text" placeholder="YOUR NAME" />
                    </div>
                    <div className="mb-3">
                      <input className="form-control" type="text" placeholder="EMAIL ADDRESS" />
                    </div>
                    <div className="mb-3">
                      <button className="btn sub-btn btn-outline-light border-white px-5 py-3">
                        SUBSCRIBE US
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <p className="font-13">
                © 2024 All Rights Reserved. Kintu Designs Pvt Ltd - Healthcare | Websites | Mobile Apps | E-Commerce | Marketing
              </p>
              <p className="font-13">
                <Link href="/Privacy">Privacy Policy</Link> |
                <Link href="/Terms">Terms & Conditions</Link>
              </p>
            </div>
            <div className="col-md-4">
              <div className="footer-social-box text-center mt-2 text-sm-center text-md-end">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                  <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={24} height={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={24} height={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                  <Image src="/img/x.png" className="img-fluid" alt="x" width={24} height={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={24} height={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                  <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={24} height={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                  <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
