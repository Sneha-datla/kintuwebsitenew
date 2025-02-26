import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import SuccesfulClient from '@/component/SuccesfulClient';

interface BlogAttributes {
  id:number;
  tittle: string;
  content: Array<{
    type: string;
    children: Array<{
      text: string;
      type: string;
    }>;
  }>;
  image: {
    url: string;
    name:string;
  };
  slug: string;
}

// Define the type for the blog item

const Blog = () => {

  const [blogs, setBlogs] = useState<BlogAttributes[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*'); // Adjust the URL based on your API route
        const fetchedBlogs:BlogAttributes[] = response.data.data.map((item: any) => ({
         
          tittle: item.tittle, // Adjust based on your API response structure
          content: item.content,
          image: {
            url: item.image[0]?.url,
            name: item.image?.name,
          },
          slug: item.slug,
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  
  


  return (
    <>
    <HeaderNav></HeaderNav>
      {/* Banner Section Start */}
      <section
        className="banner-section"
        style={{
          backgroundImage: "url('img/banner5_4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
                  CREATIVE PERFORMANCE<br />
                  Education | Startups | Innovations | E-commerce | Generative AI
                </h2>
                <p style={{ fontWeight: 500 }}>
                  The KINTU DESIGNS blog provides your team with excellent design ideas, useful advice,<br />
                  and insider knowledge to help them produce great design at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}

      {/* Blogs Section Start */}
      <div className="container"><br />
        <div className="row">
          {blogs.map(blog => (
            <div className="col-md-6">
              <div className="cc-img">
                <img src={`http://localhost:1337${blog.image.url}`} alt={blog.image.name}   className="img-fluid"  /> {/* Adjust based on your image field */}
              </div>
              <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                <h1 className="mb-2">{blog.tittle}</h1>
                <h6 style={{ fontWeight: 500 }} 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

<p>
                  <Link href={`/${blog.slug}`} className="btn btn-outline-primary px-3">Read More</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Blogs Section End */}

     <SuccesfulClient></SuccesfulClient>
      <Footer></Footer>
    </>
  );
};

export default Blog;
