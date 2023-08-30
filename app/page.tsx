"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Me from "public/petit.png";
import Logo from "public/logo.png";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setVisible(false)
    }, 30000);
  }, []);




  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-3 pb-6 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-6">
          {!visible ? (
            <>
              <Image
                alt="Picture of jan marshal"
                src={Me}
                className="h-72 w-72 rounded-full object-cover object-top cursor-pointer"
                onClick={() => setVisible(true)}

              />

              <h3 className="pt-3 pb-2 text-2xl font-bold leading-8 tracking-tight">
                Lj Mak
              </h3>
            </>
          ) : (
            <>
              <Image
                alt="Picture of jan marshal"
                src={Logo}
                className="h-36 w-72 rounded-lg object-cover object-center cursor-pointer"
                onClick={() => setVisible(true)}

              />
              <h3 className="pt-3 pb-2 my-6 font-bold flex flex-col gap-4">
                <span className="text-center text-purple-700 text-3xl">Joyeux anniversaire</span>
                <span className="text-red-700 w-auto text-center">Longue vie à toi</span>
              </h3>
              <ConfettiExplosion className="absolute m-auto"
                force={1}
                duration={30000}
                particleCount={250}
                width={1600}

              />
            </>
          )}
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Hey my name is El Hadji Mama Sarr and, I am from Ziguichor.
          </p>

          <div className="flex space-x-5 pt-4">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-8 h-8 text-teal-500 hover:text-teal-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <a href="/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"

              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-6 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Hello world, je suis El Hadj Mama Sarr.
          </p>
          <p>
            je suis diplômé en e-commerce réseau et télécommunication et je détiens un DUT2 en Gestion des Entreprises et Administrations.
            J'ai un permis B depuis 2014, en l'occurrence j'ai une très bonne expérience de conduite.
            J'ai eu l'honneur de travailler avec certaines d'ONG telles que SHELTER FOR LIFE, l'ONU et DÉCLIC en collaboration avec l'USAID.

          </p>
          <p>
            En outre, mes expériences professionnelles m'octroient un profil polyvalent car comme le stipule mon CV, j'ai effectué divers stages dans plusieurs domaines.
            Ainsi, mes compétences s'étendent du Call Center au Digital Analist en passant par la gestion de projet, la comptabilité, les Ressources Humaines et enfin les techniques de communications et de commercialisations. Avec ma formation tant théorique que pratique , je suis prêt à  relever de nouveaux défis, répondre aux attentes et octroyer une satisfaction complète à l'employeur.
          </p>
          <p>Je reste à votre disposition pour plus de détails.
            Merci d'avoir accordé, de votre précieux temps, à l'étude de mon dossier.</p>
        </div>
      </div>
    </div>
  );
}
