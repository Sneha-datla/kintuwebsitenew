import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import Image from 'next/image';
import Link from 'next/link';
interface BlogContent {
 
  title: string;
  description: string;
  

}

const Creativebarriers: React.FC = () => {
  const [blogContent, setBlogContent] = useState<BlogContent []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogContent(); // Fetch blog content when the component mounts
  }, []);

  const fetchBlogContent = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/creative-barriers'); // Adjust the endpoint as needed
      const fetchedContent = await response.json(); // Access the first item in the data array
      setBlogContent(fetchedContent.data); // Update your state with the fetched content
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
      <HeaderNav />
      <section
        className="banner-section"
        style={{ backgroundImage: `url('/img/banner5_4.png')` }}
      >
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular">
              <b>LATEST NEWS</b>
            </h1>
            <p style={{ fontWeight: 400 }}>
              Live innovation with us as we do a lot of things!
            </p>
          </div>
          <div className="social-box">
            <Link href="https://www.facebook.com/kintudesigns2005" passHref target="_blank">
                <Image
                  src="/img/fb.png"
                  className="img-fluid"
                  alt="facebook"
                  width={50}
                  height={50}
                />
              
            </Link>
            <Link href="#" passHref  target="_blank">
                <Image
                  src="/img/ins.png"
                  className="img-fluid"
                  alt="instagram"
                  width={50}
                  height={50}
                />
              
            </Link>
            <Link href="https://twitter.com/x/migrate?..." passHref  target="_blank">
                <Image
                  src="/img/x.png"
                  className="img-fluid"
                  alt="x"
                  width={50}
                  height={50}
                />
              
            </Link>
            <Link href="#" passHref target="_blank">
                <Image
                  src="/img/yt.png"
                  className="img-fluid"
                  alt="youtube"
                  width={50}
                  height={50}
                />
              
            </Link>
            <Link href="https://www.linkedin.com/..." passHref  target="_blank">
                <Image
                  src="/img/linkdin.png"
                  className="img-fluid"
                  alt="linkedin"
                  width={50}
                  height={50}
                />
              
            </Link>
            <Link href="https://in.pinterest.com/kintu2005/" passHref  target="_blank">
                <Image
                  src="/img/pnt.png"
                  className="img-fluid"
                  alt="pinterest"
                  width={50}
                  height={50}
                />
              
            </Link>
          </div>
        
        </div>
      </section>
      <section className="plat-form-section bg-light py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="flat-form-content text-center">
              <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                Breaking Through Marketing and Creative Barriers
              </h2>
              <p style={{ fontWeight: 500 }}>
                In today’s fast-paced digital world, businesses face an increasingly competitive landscape.
                With customers bombarded by countless messages daily, breaking through the noise has become 
                a formidable challenge. Traditional marketing methods no longer suffice, and creative teams must 
                constantly innovate to capture attention, engage audiences, and foster lasting connections. 
                The fusion of marketing and creativity is more critical than ever, requiring fresh ideas, novel 
                approaches, and a willingness to embrace new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="plat-form-section bg-main py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="flat-form-content" style={{ width: "90%", margin: "0 auto" }}>
              <h1 className="mb-2" style={{ fontSize: "2.5em", fontWeight: 500, textAlign: "left" }}>
                <b>IN THIS ARTICLE,</b>
              </h1>
              <h6 style={{ fontWeight: 500 }}>
                We’ll explore the process behind AI-generated photorealistic images, their impact, and how they are reshaping creative boundaries.
              </h6>
              <br />
              {blogContent.map((article, index) => (
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

      <Footer />
    </div>
  );
};

export default Creativebarriers;
