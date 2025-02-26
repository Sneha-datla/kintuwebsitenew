import Footer from '@/component/Footer'
import HeaderNav from '@/component/Headernav'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import SuccesfulClient from '@/component/SuccesfulClient'
interface Photo {
  contenttitle: string;
  id: number;
  title: string;
  description: string;
 
}
export default function Photorealisticimages() {
  const [articles, setArticles] = useState<Photo []>([]);

  useEffect(() => {
    const fetcharticles = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/photorealisticimages"); // Replace with your API URL
        const data = await response.json();
        setArticles(data.data); // Adjust based on Strapi's response format
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetcharticles();
  }, []);
  return (
    <div>
      <HeaderNav></HeaderNav>
        {/* Banner Section Start */}
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
      {/* Banner Section End */}

      {/* Platform Section Start */}
      <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                  Beyond the Brief: Developing AI-Generated Photorealistic Images
                </h2>
                <p style={{ fontWeight: 500 }}>
                In recent years, artificial intelligence (AI) has rapidly transformed from a niche technology to an integral tool across various industries. One of the most fascinating advancements has been in the realm of AI-generated images, specifically in producing photorealistic visuals. This capability not only revolutionizes how we create, manipulate, and interact with imagery, but also opens up new opportunities for industries such as marketing, gaming, and design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}
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
              {articles.map((article, index) => (
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
      {/* Blog Detailed Section Start */}
      
    
      {/* Blog Detailed Section End */}
      <Footer></Footer>
    </div>
  )
}
