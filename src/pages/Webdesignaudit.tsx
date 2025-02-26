import Footer from '@/component/Footer'
import HeaderNav from '@/component/Headernav'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import SuccesfulClient from '@/component/SuccesfulClient'
interface Blog {
  contenttitle: string;
  id: number;
  title: string;
  description: string;
  content: string;
  content1:string;
}
export default function Webdesignaudit() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/webdesignaudits"); // Replace with your API URL
        const data = await response.json();
        setBlogs(data.data); // Adjust based on Strapi's response format
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <HeaderNav></HeaderNav>
       {/* Banner Section Start */}
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
      {/* Banner Section End */}

      {/* Platform Section Start */}
      <section className="plat-form-section bg-light py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-form-content text-center">
                <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                  How To Do a Web Design Audit in 5 Steps (Checklist Included)
                </h2>
                <p style={{ fontWeight: 500 }}>
                  Conducting a web design audit is essential to maintaining a high-performing and user-friendly website.
                  By regularly evaluating the effectiveness of your website’s design, you can identify areas that need
                  improvement, enhance the user experience, and optimize it for conversions and SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}
      <section className="plat-form-section bg-main py-5">
        <div className="container-fluid">
          
            <div  className="row">
              <div className="col-md-12">
                <div className="flat-form-content" style={{ width: "90%", margin: "0 auto" }}>
                <h1 className="mb-2" style={{ font: '2.5em sans-serif', fontWeight: 500, textAlign: 'left' }}>
                  <b>IN THIS ARTICLE,</b>
                </h1>
                <h6 style={{ fontWeight: 500 }}>
                  We'll walk you through how to conduct a web design audit in 5 comprehensive steps, along with a
                  checklist you can use to guide your evaluation process.
                </h6>
                <br />
                {blogs.map((blog) => (
                <div className="sr-box mb-4 card p-4 rounded-3 text-left">
                  <h2 className="mb-3 bold">{blog.title}</h2>
                  <p className="mb-3">{blog.description}</p>
                  <h2 className="mb-3 bold">{blog.contenttitle}</h2>
                  <div className="row">
                    <div className="col">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />

                    </div>
                    <div className="col">
                    <div dangerouslySetInnerHTML={{ __html: blog.content1 }} />

                    </div>
                  </div>  
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
