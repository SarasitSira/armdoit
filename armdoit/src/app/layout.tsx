import "./globals.css";
import Image from "next/image";
import asIcon from "./icon.ico";
import emailIcon from "../public/icons/email.png";
import githubIcon from "../public/icons/github.png";
import linkedinIcon from "../public/icons/linkedin.png";
import youtubeIcon from "../public/icons/youtube.png";

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
      <body className="font-quark bg-zinc-600 dark:text-gray-200 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-start align-middle bg-gray-400/20 m-3 rounded-md w-auto min-h-[7.5vh]">
          <a href="/">
            <Image
              src={asIcon}
              alt="AS Icon"
              objectFit="cover"
              sizes="100%"
              style={{
                width: "auto",
                height: "75px",
              }}
              className="m-5 hover:scale-110 transition-all duration-300 ease-linear"
            />
          </a>
          <hr className="h-11 mr-5 bg-gray-100 border-0 rounded dark:bg-gray-700 w-1"></hr>
          <a
            href="/projects"
            className="mx-4 text-[20px] hover:font-bold hover:scale-110 hover:bg-white/20 hover:rounded-md hover:pr-2 hover:pl-2 transition-all duration-200 ease-linear"
          >
            Projects
          </a>
          <hr className="h-11 mx-5 bg-gray-100 border-0 rounded dark:bg-gray-700 w-1"></hr>
          <a
            href="https://armdoit.my.canva.site/experiences"
            className="mx-4 text-[20px] hover:font-bold hover:scale-110 hover:bg-white/20 hover:rounded-md hover:pr-2 hover:pl-2 transition-all duration-200 ease-linear"
          >
            Experiences
          </a>
          <hr className="h-11 mx-5 bg-gray-100 border-0 rounded dark:bg-gray-700 w-1"></hr>
          <a
            href="/awards"
            className="mx-4 text-[20px] hover:font-bold hover:scale-110 hover:bg-white/20 hover:rounded-md hover:pr-2 hover:pl-2 transition-all duration-200 ease-linear"
          >
            Awards
          </a>
          <hr className="h-11 mx-5 bg-gray-100 border-0 rounded dark:bg-gray-700 w-1"></hr>
          <a
            href="/blogs"
            className="mx-4 text-[20px] hover:font-bold hover:scale-110 hover:bg-white/20 hover:rounded-md hover:pr-2 hover:pl-2 transition-all duration-200 ease-linear"
          >
            Blogs
          </a>
        </header>
        {/* Content */}
        {children}
        {/* Footer */}
        <footer className="flex flex-col justify-center items-center align-middle bg-gray-400/20 m-3 rounded-md w-auto min-h-[20vh]">
          <div className="flex space-x-10 items-center justify-center m-2">
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
              Website Self-Developed from the Ground Up
            </p>
            <p className="text-xs">© 2024 Sarasit Sirawattanakul</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
