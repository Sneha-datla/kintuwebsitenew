import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SuccesfulClient from '@/component/SuccesfulClient';
interface Stratagiesovercoming {
 
  title: string;
  description: string;
  

}
const Stratagiesovercoming=()=> {
   const [strategies, setstrategies] = useState<Stratagiesovercoming []>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);
    
      useEffect(() => {
        fetchBlogContent(); // Fetch blog content when the component mounts
      }, []);
    
      const fetchBlogContent = async () => {
        try {
          const response = await fetch('http://localhost:1337/api/stratagies-overcomings'); // Adjust the endpoint as needed
          const fetchedContent = await response.json(); // Access the first item in the data array
          setstrategies(fetchedContent.data); // Update your state with the fetched content
        } catch (error) {
          console.error('Error fetching blog content:', error);
          setError('Failed to fetch blog content.');
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };
    
      if (loading) {
        return <div>Loading...</div>; // Add a loading state
      }
    
      if (error) {
        return <div>Error: {error}</div>; // Display error if there's one
      }
  return (
    <div>
        <HeaderNav></HeaderNav>
        <section className="banner-section" style={{ backgroundImage: "url('/img/banner5_4.png')" }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>LATEST NEWS</b></h1>
            <p style={{ fontWeight: 400 }}>Live innovation with us as we do a lot of things!</p>
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

            {/* Plat Form Section Start */}
            <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                  Strategies for Overcoming the AI Talent Shortage
                  <br />
                </h2>
                <p style={{ fontWeight: 500 }}>
                  Artificial intelligence (AI) is rapidly transforming industries, driving innovation, and reshaping the future of work. As businesses increasingly adopt AI to enhance operations, improve decision-making, and offer new services, the demand for skilled AI professionals has surged. However, with this boom comes a significant challenge—there simply aren’t enough qualified AI experts to meet the growing demand. The AI talent shortage is a critical issue for many companies looking to stay competitive and innovative in the fast-evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plat Form Section End */}
      <section className="plat-form-section bg-main py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="flat-form-content" style={{ width: "90%", margin: "0 auto" }}>
              <h1 className="mb-2" style={{ fontSize: "2.5em", fontWeight: 500, textAlign: "left" }}>
                <b>IN THIS ARTICLE,</b>
              </h1>
              <h6 style={{ fontWeight: 500 }}>
              We’ll address some of the key questions about AI talent gap is a concern, there are effective strategies businesses can adopt to navigate this shortage and build strong AI teams. Here are some key approaches to overcoming the AI talent shortage:
              </h6>
              <br />
              {strategies.map((article, index) => (
                <div key={index} className="sr-box mb-4 card p-4 rounded-3 text-left">
                  <h2 className="mb-3 bold">{article.title}</h2>
                  <p style={{ fontWeight: 400 }}>
                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SuccesfulClient />
    </section>
      {/* Blog Detailed1 Section Start */}
      
      {/* Blog Detailed1 Section End */}

        <Footer></Footer>
    </div>
  );
};
export default Stratagiesovercoming;
