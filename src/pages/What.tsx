import Footer from '@/component/Footer'
import HeaderNav from '@/component/Headernav'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import axios from 'axios';
interface Technology {
  id: number;
  name: string;
  image: {
    url: string;
  }[];
}

interface Category {
  id: number;
  tittle: string; // Corrected 'tittle' to 'title'
  description: string;
  technolgies: Technology[]; // Changed to array based on the new data structure
}
interface Service {
  id: number;
  title: string;
  description: string;
  image: { url: string };
}


export default function () {
  const [categories, setCategories] = useState<Category[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {

    const fetchSections = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/services?populate=*'); // Your Strapi API URL
        if (!response.ok) throw new Error('Failed to fetch sections data');
    
        const data = await response.json();
    
        // Transform API data into the expected structure
        const transformedSections = data.data.map((item: any) => ({
          id: item.id,
          title: item.title || '',
          description: item.description || '',
          image: {
            url: Array.isArray(item.image) && item.image[0]
              ? item.image[0]?.formats?.medium?.url || item.image[0]?.url || ''
              : '', // Fallback to an empty string if image is not available
          },
        }));
    
        setServices(transformedSections);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sections data:', error);
        setError('Failed to load sections');
        setLoading(false);
      }
    };
    
    fetchSections();
    
 
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/tech-expertises?populate[technolgies][populate]=image');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <div>
        <HeaderNav></HeaderNav>
         {/* Banner Section Start */}
      <section className="banner-section" style={{ backgroundImage: "url('img/banner5_3.png')" }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>WHAT WE DO</b></h1>
            <p style={{ fontWeight: 400 }}>"Circle by Circle," We Are Establishing an Ecosystem of Innovation</p>
          </div>
          <div className="social-box">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
              <img src="img/fb.png" className="img-fluid" alt="facebook" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <img src="img/ins.png" className="img-fluid" alt="instagram" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
              <img src="img/x.png" className="img-fluid" alt="x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <img src="img/yt.png" className="img-fluid" alt="youtube" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
              <img src="img/linkdin.png" className="img-fluid" alt="linkedin" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
              <img src="img/pnt.png" className="img-fluid" alt="pinterest" />
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
              <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                Our Approach
                <br />
                We understand the process to build a technology
              </h2>
              <p style={{ fontWeight: 500 }}>
                We would like to give some information about our work process and methodology
                <br />
                because we recognize that beginning to develop a website or app can be a daunting task.
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content" style={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>
                <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                  <h1 className="mb-2" style={{ font: '2.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                    <b>OFFERINGS</b>
                  </h1>
                  <h6 style={{ fontWeight: 500, textAlign: 'center' }}>Developing Ideas Into Innovative AI/ML/Generative AI Solutions</h6>
                  <br />
                  <div className="row">
                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/world.png" alt="Travel & Logistics" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>TRAVEL,</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& LOGISTICS</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/manufacture.png" alt="Retail & Manufacturing" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>RETAIL</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& MANUFACTURING</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/restaurant.png" alt="Food & Restaurant" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>FOOD</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& RESTAURANTS</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/heart-rate.png" alt="Hi-tech & Media" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>HI-TECH</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& MEDIA</div>
                    </div>
                  </div>
                  <br />

                  <div className="sr-box mb-4 card p-4 rounded-3 text-center" style={{ backgroundColor: '#f8f9fa' }}>
                    <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                      <Image src="/img/jigsaw.png" alt="Quality & Testing" width={50} height={50} />
                      &nbsp;<b>Solution Architecture - Kintu Architecture Team</b>
                    </h2>
                  </div>

                  <div className="row">
                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/dashboard.png" alt="Data & Analytics" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>DATA,</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& ANALYTICS</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/adversting.png" alt="Digital & Social Media" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>DIGITAL</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& SOCIAL MEDIA</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/erp.png" alt="ERP & EAI Solutions" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>ERP</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& EAI SOLUTIONS</div>
                    </div>

                    <div className="tech-column">
                      <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
                        <Image src="/img/manual-testing.png" alt="Quality & Testing" width={100} height={100} />
                      </h1>
                      <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                        <b>QUALITY</b>
                        <br />
                      </h2>
                      <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>& TESTING</div>
                    </div>
                  </div>
                  <br />

                  <div className="sr-box mb-4 card p-4 rounded-3 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
          <Image src="/img/project.png" width={50} height={50} alt="Quality & Testing" />
          &nbsp;<b>Project & Product Management</b>
        </h2>
      </div>

      {/* Row of services */}
      <div className="row">
        {/* Mobile Application Development */}
        <div className="tech-column">
          <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
            <Image src="/img/test.png" width={100} height={100} alt="Mobile Application Development" />
          </h1>
          <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
            <b>MOBILE</b>
            <br />
          </h2>
          <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>
            APPLICATION DEVELOPMENT
          </div>
        </div>

        {/* Agile Application Development */}
        <div className="tech-column">
          <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
            <Image src="/img/agile.png" width={100} height={100} alt="Agile Application Development" />
          </h1>
          <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
            <b>AGILE</b>
            <br />
          </h2>
          <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>
            APPLICATION DEVELOPMENT
          </div>
        </div>

        {/* Managed Application Development */}
        <div className="tech-column">
          <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
            <Image src="/img/api.png" width={100} height={100} alt="Managed Application Development" />
          </h1>
          <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
            <b>MANAGED</b>
            <br />
          </h2>
          <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>
            MAINTENANCE SERVICES
          </div>
        </div>

        {/* Application Maintenance Service */}
        <div className="tech-column">
          <h1 style={{ font: '4.5em sans-serif', fontWeight: 500, textAlign: 'center' }}>
            <Image src="/img/application.png" width={100} height={100} alt="Application Maintenance Service" />
          </h1>
          <h2 style={{ font: '2em sans-serif', fontWeight: 400, textAlign: 'center' }}>
            <b>APPLICATION</b>
            <br />
          </h2>
          <div style={{ font: '1.5em sans-serif', fontWeight: 300, textAlign: 'center' }}>
            MAINTENANCE SERVICES
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

      {/* Platform Section End */}


       {/* Platform Section */}
       <section className="plat-form-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                  Our Services
                  <br />
                  AI/ML/Generative AI & Design Services for Ambitious Brands
                </h2>
                <p style={{ fontWeight: 500 }}>
                  We offer Real-time services all around the 24/7 developing Mobile Applications, Web Applications, Cloud Computing, AI/ML/Generative Apps, Blockchain Apps, Internet of Things (IoT) Apps, Big Data and Analytics Solutions, UX/UI Designs, Internet & Social Media Marketing, & DEVOPS Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {services.map((section, index) => (
          <div key={section.id} className={`who-img-content overflow-hidden ${index % 2 === 0 ? 'bg-light' : ''}`}>
            <div className="row align-items-center m-0">
              {/* Alternate image-content order */}
              <div className={`col-md-6 p-0 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div className="who-content p-5">
                  <h2 className="mb-3 bold">{section.title}</h2>
                  <p className="mb-3" dangerouslySetInnerHTML={{ __html: section.description }} />
                  </div>
              </div>
              <div className={`col-md-6 p-0 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="who-img-box">
                  {section.image && (
                    <Image
                      src={`http://localhost:1337${section.image.url}`}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    

     
     
     
     
     

      <section className="plat-form-section bg-light py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="flat-form-content text-center">
              <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                Technology Expertise
              </h2>
              <p style={{ fontWeight: 500 }}>
                We understand the process to build AI/ML technology
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          {categories.map((category) => (
            <div key={category.id} className="sr-box mb-4 card p-4 rounded-3 text-left">
              <h1 className="mb-2" style={{ font: '2.5em sans-serif', fontWeight: 500, textAlign: 'left' }}>
                <b>{category.tittle}</b>
              </h1>
              <h6 style={{ fontWeight: 500, textAlign: 'left' }}>
                {category.description}
              </h6>
              <br />
              <div className="tech-row">
                {category.technolgies.map((tech) => (
                  <div key={tech.id} className="tech-column">
                    <h1>
                      <Image src={`http://localhost:1337${tech.image[0].url}`} width={100} height={100} alt={tech.name} />
                    </h1>
                    <h2 style={{ font: '1.5em sans-serif', fontWeight: 400, textAlign: 'center' }}>
                      <b>{tech.name}</b>
                    </h2>
                  </div>
                ))}
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </section>

    
        <Footer></Footer>
    </div>
  )
}
