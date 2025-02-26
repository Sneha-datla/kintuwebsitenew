import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

// Define a type for the job listing
interface JobListing {
  id: number;

    tittle: string;
    location: string;
    slug: string;
  };


const Careers: React.FC = () => {
  const [jobListings, setJobListings] = useState<JobListing[]>([]); // State to hold job listings
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
  const [error, setError] = useState<string | null>(null); // State to manage error state

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/carrers`); // Replace with your Strapi API endpoint
        setJobListings(response.data.data); // Update state with fetched job listings
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred'); // Set error if the request fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobListings(); // Call the function to fetch job listings
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  if (error) {
    return <div>Error fetching job listings: {error}</div>; // Show error if fetching fails
  }

  return (
    <div>
      <HeaderNav />
      {/* Banner Section Start */}
      <section className="banner-section" style={{ backgroundImage: "url('img/banner5_4.png')" }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>WE BUILD CAREERS</b></h1>
            <p style={{ fontWeight: 400 }}>Together we’ll imagine the future.</p>
          </div>
          <div className="social-box">
            <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kintudesigns2005">
              <Image src="/img/fb.png" alt="facebook" width={32} height={32} className="img-fluid" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="#">
              <Image src="/img/ins.png" alt="instagram" width={32} height={32} className="img-fluid" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/x/migrate?tok=7b2265223a222f6b696e747532303035222c2274223a313731393531393130327d7b7867237bd2f74baabf67811550c3ce">
              <Image src="/img/x.png" alt="x" width={32} height={32} className="img-fluid" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="#">
              <Image src="/img/yt.png" alt="youtube" width={32} height={32} className="img-fluid" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/checkpoint/challengesV2/AQE7xJqUIVptrgAAAZBbU042npym8KoKEpohEyGbKsZlglicDFuiS1ADuRChIMSfDL7jrLsfgBnJEONS5BQKpqXvMSzaj54Fbg">
              <Image src="/img/linkdin.png" alt="linkedin" width={32} height={32} className="img-fluid" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/kintu2005/">
              <Image src="/img/pnt.png" alt="pinterest" width={32} height={32} className="img-fluid" />
            </Link>
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
                <h2 className="mb-3" style={{ fontSize: '2.5em', fontWeight: 600 }}>
                  JOIN OUR CREATIVE TALENTS<br />
                  Web Developer | Cloud computing | Software development | Data science | Database Administrator
                </h2>
                <p style={{ fontWeight: 500 }}>
                  Find Tech Career Here — If you can dream it, you can have it here.
                  Explore job opportunities and life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plat Form Section End */}

      {/* Job Listing Section Start */}
      <section className="job-list-section">
        {jobListings.map((job) => (
          <div key={job.id} className="job-list-box card border-top-0">
            <div className="card-body p-4 p-sm-4 p-md-5 rounded-0">
              <h1 className="text-dark mb-2">{job.tittle}</h1>
              <p className="text-muted mb-3">{job.location}</p>
              <Link href={`/${job.slug}`} className="btn btn-outline-primary px-3">View Detail</Link>
            </div>
          </div>
        ))}
      </section>
      {/* Job Listing Section Ends */}

      <SuccesfulClient />
      <Footer />
    </div>
  );
};

export default Careers;
