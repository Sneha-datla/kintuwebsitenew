import Footer from '@/component/Footer';
import HeaderNav from '@/component/Headernav';
import SuccesfulClient from '@/component/SuccesfulClient';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact: React.FC = () => {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postal: string;
    phoneNumber: string;
    coverLetter: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postal: '',
    phoneNumber: '',
    coverLetter: '',
  });

  const [file, setFile] = useState<File | null>(null); // State to hold the file
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null); // State for captcha value
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null); // Get the first file if available
  };
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    setErrorMessage('Please enter a valid email address.');
    return;
  }

  // Phone number validation (e.g., 10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(formData.phoneNumber)) {
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
    if (!captchaValue) {
      setStatus('Please complete the reCAPTCHA');
      setLoading(false);
      return;
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
      const contactData = {
        ...formData,
        file: fileId, // Attach the file ID if the file was uploaded
      };
console.log('hi',contactData);
      const contactResponse = await axios.post('http://localhost:1337/api/contacts?populate=*', {
        data:contactData,
        captcha: captchaValue, // Include the captcha value

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
      {/* Banner Section Start */}
      <section className="banner-section" style={{ backgroundImage: `url('/img/banner5_4.png')` }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1 className="regular"><b>DELIVERING DIGITAL SUCCESS</b></h1>
            <p style={{ fontWeight: 400 }}>
              Healthcare | AI & ML | Websites | Mobile Apps | E-Commerce | Digital Marketing
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
                <h2 className="mb-3" style={{ font: '2.5em sans-serif', fontWeight: 600 }}>
                  Contact Us<br />@ Vesu, Surat
                </h2>
                <p style={{ fontWeight: 500 }}>
                  B/406, Aagam Shopping World, Vesu, Surat, Gujarat. Pincode - 395007<br />
                  WhatsApp: +91 9727785703, Email: support@kintudesigns.com<br />
                  Working Times: 10 AM - 6:30 PM
                </p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.406429470826!2d72.77181007471728!3d21.136217984080194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0526e0fa944fb%3A0x147329f502017ad0!2sSimplyLoose!5e0!3m2!1sen!2sca!4v1726420366363!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Section End */}

      {/* Job Form Section Start */}
      <section className="job-form-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmit}>
                <h1 className="mb-3">Contact us 24x7.</h1>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name *"
                        value={formData.firstName}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <h5 className="mb-3">Location</h5>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City *"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="State *"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="postal"
                        className="form-control"
                        placeholder="Postal *"
                        value={formData.postal}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number *"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <h5 className="mb-3">Attachments</h5>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control h-auto"
                        onChange={handleFileChange} // Handle file change
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows={4}
                        name="coverLetter"
                        className="form-control"
                        placeholder="Cover Letter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <ReCAPTCHA
            sitekey={"6LfDpssqAAAAAHRGf-mL8ePZ4PnJRAQamU8HwOb_"}
            onChange={handleCaptchaChange} // Missing this in your code

          />
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                {successMessage && <p className="text-success">{successMessage}</p>} {/* Display success message */}

                {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Display error message */}
                {status && <p>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Job Form Section End */}
      <SuccesfulClient></SuccesfulClient>
      <Footer />
    </div>
  );
};

export default Contact;
