'use client';
import { useRef } from 'react';
import Image from 'next/image';

import image0547 from "../../public/img/IMG_0547.jpeg";
import image0552 from "../../public/img/IMG_0552.jpeg";
import image0691 from "../../public/img/IMG_0691.jpeg";
import image0713 from "../../public/img/IMG_0713.jpeg";
import image0930 from "../../public/img/IMG_0930.jpeg";
import image0935 from "../../public/img/IMG_0935.jpeg";
import image0941 from "../../public/img/IMG_0941.jpeg";
import image0942 from "../../public/img/IMG_0942.jpeg";
import image0953 from "../../public/img/IMG_0953.jpeg";
import image0961 from "../../public/img/IMG_0961.jpeg";
import image0962 from "../../public/img/IMG_0962.jpeg";
import image0982 from "../../public/img/IMG_0982.jpeg";
import image1063 from "../../public/img/IMG_1063.jpeg";

import cond1 from "../../public/img/1.fachada-rc63-is-vila-buarque.jpg";
import cond2 from "../../public/img/2.portaria-rc63-is-vila-buarque.jpg";
import cond4 from "../../public/img/4.delivery2-rc63-is-vila-buarque.jpg";
import cond5 from "../../public/img/5.bicicletario-rc63-is-vila-buarque.jpg";
import cond6 from "../../public/img/6.lavanderia-rc63-is-vila-buarque.jpg";
import cond7 from "../../public/img/7.lounge-rc63-is-vila-buarque.jpg";
import cond8 from "../../public/img/8.coworking-rc63-is-vila-buarque.jpg";
import cond9 from "../../public/img/9.churrasqueira-rc63-is-vila-buarque.jpg";
import cond10 from "../../public/img/10.fitness-rc63-is-vila-buarque.jpg";
import cond11 from "../../public/img/11.yoga-rc63-is-vila-buarque.jpg";
import cond12 from "../../public/img/12.piscina-rc63-is-vila-buarque.jpg";
import cond14 from "../../public/img/14.petplace-rc63-is-vila-buarque.jpg";

const ImageComponent = ({ src, alt }:any) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <dialog ref={dialogRef} className="imgModal">
        <button onClick={(e) => {
          e.preventDefault();
          dialogRef.current?.close("animalNotChosen")
        }}>Fechar</button>
        <Image src={src} alt={alt} />
      </dialog>
    <div
      onClick={() => {
        dialogRef.current?.showModal();
      }}
    >

      <Image width="200" height="200" src={src} alt={alt} />
      {/* <div className="image__desc">
        <h3 className="image__title">Image</h3>
      </div> */}
    </div>
    </>
  );
};

const ImageGallery = () => {
  return (
    <section id="Imagens" className="w-full flex flex-wrap">

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Vista Geral" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Sala de Estar" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Cama" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Vista Cozinha" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Cama - Vista TV" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Enxoval" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Utensílios" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Cozinha" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Pia da Cozinha" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Banheiro" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Baheiro 2" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Bicicletário" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Lavanderia OMO" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Hall" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Coworking" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Área Gourmet com Churrasqueira" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Academia" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Sala de Yoga" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Piscina" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Área Pet" />
          <Image width="200" height="200" className="h-auto max-w-full" src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/441022722_969153004996434_4631133333338626530_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8u-ycLUW308Q7kNvgGKRzAU&_nc_gid=6b17a777814b46459270cb6d4dce9e06&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTQzMjAxMjc2OTk3NDMzOA%3D%3D.3-ccb7-5&oh=00_AYDTK5i-i2taz1vrqQ_qtnA4K5Guty4MQOUKJqABoth92w&oe=6709C7BD&_nc_sid=7a9f4b" alt="Delivery" />
        </div>
      </div>

    </section>
  );
};

export default ImageGallery;