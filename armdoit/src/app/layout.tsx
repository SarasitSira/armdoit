import "./globals.css";
import Image from "next/image";
import asIcon from "./icon.ico";
import emailIcon from "../public/icons/email.png";
import githubIcon from "../public/icons/github.png";
import linkedinIcon from "../public/icons/linkedin.png";
import youtubeIcon from "../public/icons/youtube.png";

import Link from "next/link";

export const metadata = {
  title: "Arm Do It",
  description: "Website for Arm Do It by Arm Sarasit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">

      <body className="font-quark bg-light w-screen min-h-screen">

        {/* Header */}
        <header className="flex flex-row justify-between items-center w-[calc(100%-this.style.margin)] h-fit m-[2.5%] md:m-[0.5%] px-5 py-2 rounded-md bg-base">
          
          <Link href="/">
            <svg 
              viewBox="0 0 500 500"
              className="w-[50px] h-[50px]"
            >
              <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                <path d="M1540 4041 c0 -5 7 -14 16 -21 33 -28 33 -46 4 -303 -16 -141 -34 -284 -40 -319 -5 -35 -19 -148 -30 -253 -12 -104 -25 -215 -30 -245 -5 -30 -21 -156 -35 -280 -14 -124 -32 -272 -40 -330 -8 -58 -24 -186 -35 -285 -11 -99 -29 -243 -40 -320 -10 -77 -22 -171 -25 -210 -4 -38 -9 -78 -11 -87 -5 -17 8 -18 170 -18 l175 0 5 43 c3 23 13 96 21 162 l15 120 -43 36 c-23 21 -39 40 -35 44 3 4 130 3 281 -1 l274 -7 13 -106 c7 -58 18 -146 24 -196 l11 -90 176 -3 176 -2 -13 102 c-8 57 -27 218 -44 358 -16 140 -34 287 -40 325 -6 39 -24 185 -41 325 -17 140 -41 345 -54 455 -14 110 -27 223 -30 250 -3 28 -10 75 -15 105 -5 30 -21 156 -35 280 -14 124 -33 281 -43 350 l-18 125 -332 3 c-189 1 -332 -2 -332 -7z m390 -581 c11 -91 33 -280 50 -420 16 -140 34 -282 40 -315 17 -103 61 -527 56 -541 -8 -20 -344 -21 -352 -1 -2 7 0 44 6 82 6 39 22 167 35 285 13 118 31 260 39 315 9 55 22 165 31 245 21 191 68 536 72 524 2 -5 12 -84 23 -174z"/>
                <path d="M2786 4034 c-57 -21 -102 -58 -133 -112 l-28 -47 -3 -376 -3 -375 106 -130 c58 -71 140 -171 183 -223 42 -52 135 -167 206 -255 72 -89 163 -201 203 -249 l73 -89 0 -204 0 -204 -210 0 -210 0 0 210 0 210 -175 0 -175 0 0 -287 c0 -159 3 -305 6 -326 4 -20 21 -61 38 -89 25 -42 43 -59 94 -85 l64 -33 356 0 c324 0 361 2 397 19 60 27 101 66 129 123 l26 52 0 371 0 371 -97 121 c-141 174 -418 515 -486 597 -32 39 -70 87 -85 106 -14 19 -41 52 -59 73 l-33 37 0 163 0 163 -45 37 c-25 21 -45 42 -45 48 0 6 95 8 253 7 l252 -3 3 -202 2 -203 171 0 170 0 -3 319 -3 318 -34 51 c-34 50 -68 76 -126 99 -47 18 -728 16 -779 -3z"/>
                <path d="M1270 1000 l0 -60 1230 0 1230 0 0 60 0 60 -1230 0 -1230 0 0 -60z"/>
              </g>
            </svg>
          </Link>

          <div className="group md:hidden">

            <svg 
              viewBox="0 0 32 32"
              className="h-[35px] w-[35px]"
            >

              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
            
            </svg>
              
            <div id="menuList" className="md:hidden"><div className="flex flex-col justify-center items-center">
            
              <Link href="/projects" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
                Projects
              </Link>

              <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr>

              <Link href="/experiences" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
                Experiences
              </Link>

              <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr>

              <Link href="/awards" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
                Awards
              </Link>

              <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr>

              <Link href="/blogs" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
                Blogs
              </Link>

            </div></div>

          </div>

          <div className="hidden md:block"><div className="flex flex-row justify-center items-center">
            
            <Link href="/projects" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
              Projects
            </Link>

            <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr>

            <Link href="https://armdoit.my.canva.site/experiences" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
              Experiences
            </Link>

            <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr>

            <Link href="/awards" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
              Awards
            </Link>

            {/* <hr className="h-[17.5px] mx-5 bg-dark border-0 rounded w-1"></hr> */}

            {/* <Link href="/blogs" className="mx-4 md:text-[20px] hover:font-black transition-all duration-200 ease-linear">
              Blogs
            </Link> */}

          </div></div>

        </header>

        {/* Content */}
        {children}

        {/* Footer */}
        <footer className="flex flex-col justify-center items-center bg-gray-400/20 m-3 rounded-md w-auto min-h-[20vh]">

          <div className="flex flex-row gap-10 items-center justify-center m-2">
            {/* Email Icon */}
            <a
              className="hover:bg-white/20 hover:fill-current rounded-lg transition-all duration-300 ease-linear"
              href="mailto:sarasit.sira@gmail.com"
              target="_blank"
            >
              <Image
                src={emailIcon}
                alt="Email Me"
                objectFit="cover"
                sizes="100%"
                style={{
                  width: "auto",
                  height: "25px",
                }}
                className="m-1"
              />
            </a>
            {/* Github Icon */}
            <a
              className="hover:bg-white/20 hover:fill-current rounded-full transition-all duration-300 ease-linear"
              href="https://github.com/SarasitSira"
              target="_blank"
            >
              <Image
                src={githubIcon}
                alt="GitHub Link"
                objectFit="cover"
                sizes="100%"
                style={{
                  width: "auto",
                  height: "30px",
                }}
                className="m-1"
              />
            </a>
            {/* LinkedIn Icon */}
            <a
              className="hover:bg-white/20 hover:fill-current rounded-full transition-all duration-300 ease-linear"
              href="https://www.linkedin.com/in/sarasitsira/"
              target="_blank"
            >
              <Image
                src={linkedinIcon}
                alt="YouTube Link"
                objectFit="cover"
                sizes="100%"
                style={{
                  width: "auto",
                  height: "30px",
                }}
                className="m-1"
              />
            </a>
            {/* YouTube Icon */}
            <a
              className="hover:bg-white/20 hover:fill-current rounded-full transition-all duration-300 ease-linear"
              href="https://www.youtube.com/@ArmDoIt"
              target="_blank"
            >
              <Image
                src={youtubeIcon}
                alt="YouTube Link"
                objectFit="cover"
                sizes="100%"
                style={{
                  width: "auto",
                  height: "30px",
                }}
                className="m-1"
              />
            </a>
          </div>
          <hr className="h-1 mx-auto border-0 rounded bg-gray-700 m-2 w-[300px]"></hr>
          {/* Arm Do It Icon */}
          <div className="flex flex-col items-center justify-center m-2">
            <Image
              src={asIcon}
              alt="AS Icon"
              objectFit="cover"
              sizes="100%"
              style={{
                width: "auto",
                height: "25px",
              }}
              className="m-1"
            />
            <p className="text-xs m-1">
              Website Self-Developed from the Ground Up Using NextJS Framework
            </p>
            <p className="text-xs">&#169; 2024 Sarasit Sirawattanakul</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
