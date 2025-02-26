import Footer from '@/component/Footer'
import HeaderNav from '@/component/Headernav'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import SuccesfulClient from '@/component/SuccesfulClient'
interface Work {
  id: number;
  documentId: string;
  value: string;
  description: string;
  
}
interface RecentWork {
  id: number;
  documentId: string;
  title: string;
  description: string;
}
interface Startup {
  id: number;
  documentId: string;
  title: string;
  description: string;
  recentworks: RecentWork[];

  works: Work[];
}
interface ApiResponse {
  data: Startup[];
 
}
export default function Work() {
  const [startup, setStartup] = useState<Startup | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:1337/api/startuphubs?populate=*'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network error');
        }
        // Type the response with our ApiResponse interface
        const data: ApiResponse = await response.json();
        // Assuming the first element in the data array is what you want
        setStartup(data.data[0]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  if (!startup) return <div>Loading...</div>;
  const recentWork = startup.recentworks?.[0];

  return (
    <div>
<HeaderNav></HeaderNav>
 {/* Banner Section Start */}
 <section className="banner-section" style={{ backgroundImage: "url('/img/banner5_4.png')" }}>
                <div className="container-fluid">
                    <div className="banner-content">
                        <h1 className="regular"><b>OUR WORK</b></h1>
                        <p style={{ fontWeight: 400 }}>Generative AI Technology Innovation and Solutions</p>
                    </div>
                    <div className="social-box">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
                            <Image src="/img/fb.png" className="img-fluid" width={24} height={24} alt="facebook" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            <Image src="/img/ins.png" className="img-fluid" width={24} height={24} alt="instagram" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
                            <Image src="/img/x.png" className="img-fluid" width={24} height={24} alt="x" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            <Image src="/img/yt.png" className="img-fluid" width={24} height={24} alt="youtube" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
                            <Image src="/img/linkdin.png" className="img-fluid" width={24} height={24} alt="linkedin" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
                            <Image src="/img/pnt.png" className="img-fluid" width={24} height={24} alt="pinterest" />
                        </a>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}

            {/* Plat Form Section Start */}
            <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                RECENT WORK<br></br>  { recentWork.title } 
                </h2>
                <p style={{ fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: recentWork ? recentWork.description : `
                  With experience developing complete end-to-end software solutions, we have the perfect blend of aesthetic and technical skills to deliver sophisticated and polished software projects, including apps.
                  With a detailed understanding of front-end and back-end development for the major mobile app platforms, we’re best placed to advise and deliver on your new app or business idea. We’ve worked with companies such as Tesco, Rotary, Autoline Insurance and CoverBox. And in a number of industries including gaming, automotive, leisure, insurance and luxury brands.
                ` }} />
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Plat Form Section End */}

            {/* Startup Hub Start */}
            <section className="plat-form-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center px-0 px-sm-0 px-md-5">
                <h2 className="mb-3">{startup.title}</h2>
                <p className="mb-3" dangerouslySetInnerHTML={{ __html: startup.description }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record Section */}
      <section className="startup-record-section bg-light py-5">
        <div className="container">
          <div className="row">
            {startup.works.map((work) => (
              <div key={work.id} className="col-md-4">
                <div className="sr-box mb-4 card p-4 rounded-3 text-center">
                  <h1 className="mb-2">{work.value}</h1>
                  <h6 className="text-uppercase">{work.description}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Blocks Section Ends */}

      {/* AI Startups Developed Section Start */}
      <section className="portfolio-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 text-center">AI/ML STARTUPS DEVELOPED</h2>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_simplyloose.png" className="img-fluid" alt="Simply Loose" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_scuber.png" className="img-fluid" alt="Scuber" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_IIO.png" className="img-fluid" alt="IIO" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_voiceme.png" className="img-fluid" alt="Voiceme" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_paybills.png" className="img-fluid" alt="Pay Bills" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_yallacare.png" className="img-fluid" alt="Yalla Care" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_malmaat.png" className="img-fluid" alt="Malmaat" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_butler.png" className="img-fluid" alt="Butler" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_gozipply.png" className="img-fluid" alt="Gozipply" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_amayraa.png" className="img-fluid" alt="Amayraa" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_banquetcrm.png" className="img-fluid" alt="Banquet CRM" width={200} height={200} />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <div className="portfolio-img-box bg-light mb-3">
                <Image src="/img/startup1_organiccanada.png" className="img-fluid" alt="Organic Canada" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI/ML Startups Developed Section Ends */}
    <SuccesfulClient></SuccesfulClient>
<Footer></Footer>
    </div>
  )
}
