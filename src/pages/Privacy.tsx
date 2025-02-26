import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import { useEffect, useState } from "react";
import Image from 'next/image';
interface Privacy {
 
  title: string;
  description: string;
  
}
const Privacy=()=> {
  const [privacy, setprivacy] = useState<Privacy []>([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/privacies"); // Replace with your API URL
        const data = await response.json();
        setprivacy(data.data); // Adjust based on Strapi's response format
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div><HeaderNav></HeaderNav>

      {/* Banner Section Start */}
      <section
        className="banner-section"
        style={{ backgroundImage: "url('/img/banner5_4.png')" }}
      >
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>PRIVACY POLICY</b></h1>
            <p style={{ fontWeight: 400 }}>Privacy is most important for us!</p>
          </div>
          <div className="social-box">
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
      </section>
      {/* Banner Section End */}

      {/* Platform Section Start */}
      <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                  Kintu Designs Pvt. Ltd. is the owner
                </h2>
                <p style={{ fontWeight: 500 }}>
                and operator of website https://kintudesigns.com/ and they may be used interchangeably in this document and referred hereon forth as "Kintu" or "Kintu Designs" or "Kintu Designs Pvt. Ltd." or "we" or "us". 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}

      {/* Blog Detailed1 Section Start */}
      <section className="plat-form-section bg-main py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content" style={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>
                <h1 className="mb-2" style={{ font: '2.5em sans-serif', fontWeight: 500, textAlign: 'left' }}>
                  <b>THIS PRIVACY POLICY,</b>
                </h1>
                <h6 style={{ fontWeight: 500 }}>
                describes how KINTUDESIGNS.COM, and its related companies collect, use and share personal information of consumer users of this website, https://kintudesigns.com/ or of its any application. Please read the terms of this policy carefully before using the Website/any of its Application or accessing any information, content or services through the Website/any of its Application. This Policy also applies to any of our other websites that post this Policy. This Policy does not apply to websites that post different statements. Your use of the Website/any of its Application or the services provided by the Website/any of its Application shall signify your acceptance of the terms of use and your agreement to be bound by the same.
                If you do not agree with the terms of this Policy, please do not use this Website/any of its Application or the avail the services provided by this Website/any of its Application.                </h6>
                <br />

                {privacy.map((privacies, index) => (
                <div key={index} className="sr-box mb-4 card p-4 rounded-3 text-left">
                  <h2 className="mb-3 bold">{privacies.title}</h2>
                  <p style={{ fontWeight: 400 }}>
                    <div dangerouslySetInnerHTML={{ __html: privacies.description }} />
                  </p>
                </div>
              ))}
                
              </div>
            </div>
          </div>
        </div>

      
      </section>
      {/* Blog Detailed1 Section End */}
    <SuccesfulClient></SuccesfulClient>
    <Footer></Footer>
    </div>
  );
};
export default Privacy;
