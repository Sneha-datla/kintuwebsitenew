import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import Image from 'next/image';
import React, { useState,useEffect, FormEvent , ChangeEvent} from 'react';
import axios from 'axios';

// Define the shape of your page data
interface PageData {
  bannertitle: string;
  bannerdescription: string;
  description:string;
 
  Sectiondescription: string;
  Sectiontitle: string; // Assuming this property exists based on the usage
}

interface FormData {
  firstName: string;
  lastName: string;
  Email: string;
  Address: string;
  City: string;
  State: string;
  Postal: string;
  PhoneNumber: string;
  
  CoverLetter: string;
}


const Webdevelopment = () => {
  const [pageData, setPageData] = useState<PageData[]>([]); // Use an array to hold multiple page data
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [file, setFile] = useState<File | null>(null); // State to hold the file
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    Email: '',
    Address: '',
    City: '',
    State: '',
    Postal: '',
    PhoneNumber: '',
   CoverLetter: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/python-developers`);
        setPageData(res.data.data); // Assuming res.data.data is an array of objects
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error loading page data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>; // Display error message if there is an error
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null); // Get the first file if available
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.Email)) {
    setErrorMessage('Please enter a valid email address.');
    return;
  }

  // Phone number validation (e.g., 10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(formData.PhoneNumber)) {
    setErrorMessage('Please enter a valid 10-digit phone number.');
    return;
  }

  // File validation (PDF and DOCX)
  if (file) {
    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedFileTypes.includes(file.type)) {
      setErrorMessage('Only PDF and DOCX files are allowed.');
      return;
    }
  }
   

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof FormData]); // Append form fields
    }

    if (file) {
      data.append('files', file); // Append file, the key should match Strapi's expected field
    }

    try {
      // Step 1: Upload the file if it's present
      let fileId: string | null = null;

      if (file) {
        const fileUploadResponse = await axios.post('http://localhost:1337/api/upload', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        fileId = fileUploadResponse.data[0].id; // Retrieve the file ID
      }

      // Step 2: Send form data with fileId
      const Aplication = {
        ...formData,
        Resume: fileId, // Attach the file ID if the file was uploaded
      };
console.log(Aplication);
      const contactResponse = await axios.post('http://localhost:1337/api/apllications?populate=*', {
        data:Aplication,
       // Include the captcha value

      });

      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      console.log('Contact submission success:', contactResponse.data);
    } catch (error) {
      console.error('Error during submission:', error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
      setSuccessMessage('');
    }
  };
 
  return (
    <div>
      <HeaderNav />
      
      {pageData.map((item, index) => (
        <div key={index}>
          {/* Banner Section Start */}
          <section className="banner-section" style={{ backgroundImage: "url('/img/banner5_4.png')" }}>
            <div className="container-fluid">
              <div className="banner-content">
                <h1 className="regular"><b>{item.bannertitle}</b></h1>
                <p style={{ fontWeight: 400 }}>{item.bannerdescription}</p>
              </div>
              <div className="social-box">
                <a target="_blank" href="https://www.facebook.com/kintudesigns2005" rel="noopener noreferrer">
                  <Image src="/img/fb.png" alt="Facebook" width={24} height={24} />
                </a>
                <a target="_blank" href="#" rel="noopener noreferrer">
                  <Image src="/img/ins.png" alt="Instagram" width={24} height={24} />
                </a>
                <a target="_blank" href="https://twitter.com/x/migrate?tok=7b22..." rel="noopener noreferrer">
                  <Image src="/img/x.png" alt="X" width={24} height={24} />
                </a>
                <a target="_blank" href="#" rel="noopener noreferrer">
                  <Image src="/img/yt.png" alt="YouTube" width={24} height={24} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/checkpoint/..." rel="noopener noreferrer">
                  <Image src="/img/linkdin.png" alt="LinkedIn" width={24} height={24} />
                </a>
                <a target="_blank" href="https://in.pinterest.com/kintu2005/" rel="noopener noreferrer">
                  <Image src="/img/pnt.png" alt="Pinterest" width={24} height={24} />
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
                      {item.Sectiontitle}
                      <br />
                      Web Developer | Cloud Computing | Software Development | Data Science | Database Administrator
                    </h2>
                    <p style={{ fontWeight: 500 }}>
                      {item.Sectiondescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Platform Section End */}

          {/* Detailed Job Section Starts */}
           {/* Detailed Job Section Starts */}
      <section className="job-list-section">
        <div className="job-list-box card border-top-0">
          <div className="card-body p-4 p-sm-4 p-md-5 rounded-0">
            <h1 className="text-dark mb-2">Python Developer</h1>
          </div>
        </div>
        <div className="card">
          <div className="job-request-div p-4 p-sm-4 p-md-5">
            <div className="req-list-div d-flex gap-2 gap-sm-2 gap-md-4 flex-wrap justify-content-between">
              <span><b>Unit:</b> Kintu</span>
              <span><b>Location:</b> Surat, Gujarat, India</span>
              <span><b>Type:</b> Full Time</span>
              <span><b>Min. Experience:</b> Entry Level</span>
            </div>
          </div>
        </div>
        <div className="card">
        <div 
  className="job-detail-div p-4 p-sm-4 p-md-5"
  dangerouslySetInnerHTML={{
    __html: `
      <p>
        ${item.description ? item.description : ""}
      </p>
    `,
  }}
></div>
        </div>
      </section>
      {/* Detailed Job Section Ends */}
          {/* Detailed Job Section Ends */}

          <section className="job-form-section py-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={handleSubmit}>
                    <h1 className="mb-3">Apply for this position</h1>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First name *"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last name *"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Email Address *"
                            value={formData.Email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <h5 className="mb-3">Location</h5>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="Address"
                            className="form-control"
                            placeholder="Address"
                            value={formData.Address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="City"
                            className="form-control"
                            placeholder="City *"
                            value={formData.City}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="State"
                            className="form-control"
                            placeholder="State *"
                            value={formData.State}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="Postal"
                            className="form-control"
                            placeholder="Postal *"
                            value={formData.Postal}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="PhoneNumber"
                            className="form-control"
                            placeholder="Phone Number *"
                            value={formData.PhoneNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <h5 className="mb-3">Resume</h5>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input
                            type="file"
                            name="Resume"
                            className="form-control h-auto"
                            onChange={handleFileChange}                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            name="CoverLetter"
                            placeholder="Cover Letter"
                            rows={4}
                            value={formData.CoverLetter}
                            onChange={handleInputChange}
                          ></textarea>
                          <p className="small mt-1 text-muted">
                            In 150 characters or fewer, tell us what makes you unique. Try to be creative and say something that will catch our eye!
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-btn-div">
                          <button type="submit" className="btn btn-primary btn-lg">Submit Application</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Form Job Section Ends */}
        </div>
      ))}
<SuccesfulClient></SuccesfulClient>
      <Footer />
    </div>
  );
};

export default Webdevelopment;
