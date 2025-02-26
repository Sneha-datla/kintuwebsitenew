// components/HeaderNav.jsx

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const HeaderNav = () => {
    return (
        <>
            <Head>
                <title>Kintu Designs Pvt. Ltd - IT Company in Surat</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="IT Company in Surat - Kintu Designs Pvt Ltd - Healthcare | Websites | Mobile Apps | E-Commerce | Marketing" />
                <meta name="keywords" content="Healthcare, Websites, Mobile Apps, E-Commerce, Marketing, Mobile, UI/UX, Web, App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

                {/* Bootstrap Css */}
                <link href="/styles/bootstrap.min.css" rel="stylesheet" />

                {/* Gallery Css */}
                <link href="/styles/baguetteBox.min.css" rel="stylesheet" />

                {/* Fontawesome Css */}
                <link href="/styles/fontawesome.css" rel="stylesheet" />

                {/* Owl Carousel */}
                <link rel="stylesheet" href="/styles/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/styles/owl.carousel.min.css" />

                {/* Animation Css */}
                <link href="/styles/animate.min.css" rel="stylesheet" />

                {/* Custom Css */}
                <link href="/styles/style.css" rel="stylesheet" />
                <style>
                    {`
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    #myVideo {
                        position: relative;
                        width: 100%;
                        height: auto;
                        min-width: 100%;
                        min-height: 100%;
                        top: 65%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1;
                    }
                    .column {
                        float: left;
                        width: 33.33%;
                        padding: 10px;
                    }
                    .row:after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                    @media screen and (max-width: 600px) {
                        .column {
                            width: 100%;
                        }
                    }
                    `}
                </style>
            </Head>

            {/* Header Start */}
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand">
                            <Image 
                                src="/img/logo.png" 
                                alt="Logo" 
                                className="img-fluid" 
                                width={100} // adjust width as needed
                                height={50} // adjust height as needed
                            />
                        </Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item" >
                                    <Link href="/Who" className="nav-link">WHO</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link href="/What" className="nav-link">WHAT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Work" className="nav-link">WORK</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Blogs" className="nav-link">BLOGS</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link href="/Careers" className="nav-link">CAREERS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/Contact" className="nav-link">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Header End */}
        </>
    );
};

export default HeaderNav;
