import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Client {
  id: number;
  name: string;
  image: { url: string };
}

const SuccesfulClient = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/clients?populate=*");
        const data = await response.json();
        const transformedClients: Client[] = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          image: {
            url: Array.isArray(item.image) && item.image[0]
              ? item.image[0]?.formats?.medium?.url || item.image[0]?.url || ''
              : '', // Fallback to an empty string if image is not available
          },
        }));

        setClients(transformedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="client-section py-5 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="flat-form-content text-center mb-4">
              <h2 className="mb-1" style={{ fontSize: "2.5em", fontWeight: 600 }}>
                500+ SUCCESSFUL CLIENTS
              </h2>
              <p style={{ fontWeight: 500 }}>
                United States, United Kingdom, UAE, Italy, Netherlands, Canada and more...
              </p>
              <br />
            </div>
          </div>
        </div>

        <Swiper slidesPerView={6} navigation={false} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="client-box text-center">
                <Image
                  src={`http://localhost:1337${client.image.url}`}
                  alt={client.name}
                  width={200}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccesfulClient;
