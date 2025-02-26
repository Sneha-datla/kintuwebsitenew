import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
interface Terms {
 
  title: string;
  description: string;
  
}
const Terms=() =>{
    const [terms, setterms] = useState<Terms []>([]);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("http://localhost:1337/api/terms-conditions"); // Replace with your API URL
          const data = await response.json();
          setterms(data.data); // Adjust based on Strapi's response format
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchBlogs();
    }, []);
  return (
    <div><HeaderNav></HeaderNav>
      <section className="banner-section" style={{ backgroundImage: "url('/img/banner5_4.png')" }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>TERMS & CONDITIONS</b></h1>
            <p style={{ fontWeight: 400 }}>Terms & Conditions we apply always</p>
          </div>
          <div className="social-box">
            <Link href="https://www.facebook.com/kintudesigns2005" target="_blank">
              <Image src="/img/fb.png" className="img-fluid" alt="facebook" width={40} height={40} />
            </Link>
            <Link href="#">
              <Image src="/img/ins.png" className="img-fluid" alt="instagram" width={40} height={40} />
            </Link>
            <Link href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce" target="_blank">
              <Image src="/img/x.png" className="img-fluid" alt="x" width={40} height={40} />
            </Link>
            <Link href="#">
              <Image src="/img/yt.png" className="img-fluid" alt="youtube" width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg" target="_blank">
              <Image src="/img/linkdin.png" className="img-fluid" alt="linkedin" width={40} height={40} />
            </Link>
            <Link href="https://in.pinterest.com/kintu2005/" target="_blank">
              <Image src="/img/pnt.png" className="img-fluid" alt="pinterest" width={40} height={40} />
            </Link>
          </div>
        </div>
      </section>

        {/* Platform Section Start */}
        <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 style={{ fontSize: '2.5em', fontWeight: 600 }}>
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

      {/* Blog Detailed Section Start */}
      <section className="plat-form-section bg-main py-5">
        {/* Content 1 for Blogs starts here */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content" style={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>
                <h1 style={{ fontSize: '2.5em', fontWeight: 500, textAlign: 'left' }}>
                  <b>LEGAL AGREEMENT</b>
                </h1>
                <h6 style={{ fontWeight: 500 }}>
                  <p>
                    This user agreement is an agreement between you and KINTUDESIGNS.COM ("Kintu Designs Pvt.Ltd." or "Kintu Designs" or "Kintu" or "we" or "us" as the context requires) governing your use of Kintu's products, software, services with the characteristics and features as described on https://kintudesigns.com...
                  </p>
                </h6>
                {terms.map((term, index) => (
                <div key={index} className="sr-box mb-4 card p-4 rounded-3 text-left">
                  <h2 className="mb-3 bold">{term.title}</h2>
                  <p style={{ fontWeight: 400 }}>
                    <div dangerouslySetInnerHTML={{ __html: term.description }} />
                  </p>
                </div>
              ))}
            
                
              </div>
            </div>
          </div>
        </div>
        {/* Content 1 for Blogs ends here */}

        {/* Content 2 for Blogs starts here */}
       
        {/* Content 2 for Blogs ends here */}

   
     {/* Content 3for Blogs ends here */}
 
    
     {/* Content 3for Blogs ends here */}
   
     {/* Content 3for Blogs ends here */}
    
     {/* Content 3for Blogs ends here */}
   
     {/* Content 3for Blogs ends here */}
   
     {/* Content 9for Blogs ends here */}

   
      {/* Content 10for Blogs ends here */}
      </section>
    <SuccesfulClient></SuccesfulClient>
    <Footer></Footer>
    </div>
  );
};
export default Terms;
