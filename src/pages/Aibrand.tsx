import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SuccesfulClient from '@/component/SuccesfulClient';
interface AIbrand {
 
  title: string;
  description: string;
  

}
const Aibrand=() =>{
   const [aibrand, setaibrand] = useState<AIbrand []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetchBlogContent(); // Fetch blog content when the component mounts
    }, []);
  
    const fetchBlogContent = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/ai-brands'); // Adjust the endpoint as needed
        const fetchedContent = await response.json(); // Access the first item in the data array
        setaibrand(fetchedContent.data); // Update your state with the fetched content
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
      <section
      className="banner-section"
      style={{ backgroundImage: `url('/img/banner5_4.png')` }}
    >
      <div className="container-fluid">
        <div className="banner-content">
          <h1 className="regular">
            <b>LATEST NEWS</b>
          </h1>
          <p style={{ fontWeight: 400 }}>Live innovation with us as we do a lot of things!</p>
        </div>
        <div className="social-box">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
            <Image src="/img/fb.png" width={24} height={24} alt="facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <Image src="/img/ins.png" width={24} height={24} alt="instagram" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce"
          >
            <Image src="/img/x.png" width={24} height={24} alt="x" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <Image src="/img/yt.png" width={24} height={24} alt="youtube" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg"
          >
            <Image src="/img/linkdin.png" width={24} height={24} alt="linkedin" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
            <Image src="/img/pnt.png" width={24} height={24} alt="pinterest" />
          </a>
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
                  AI in Brand Creative: Questions In-House Teams Are Asking
                  <br />
                </h2>
                <p style={{ fontWeight: 500 }}>
                  Artificial intelligence (AI) is making waves across industries, and the creative field is no exception. As AI-powered tools become increasingly sophisticated, many in-house brand teams are exploring how these innovations can be integrated into their creative processes. From generating visual content to analyzing consumer preferences, AI offers a wide range of possibilities that promise to enhance creativity and streamline workflows. However, with these advancements come important questions about the practical application, limitations, and ethical considerations of using AI in brand creative.
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
              we’ll address some of the key questions in-house teams are asking about AI in brand creative and how it can shape the future of their work.
              </h6>
              <br />
              {aibrand.map((article, index) => (
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
export default Aibrand;
