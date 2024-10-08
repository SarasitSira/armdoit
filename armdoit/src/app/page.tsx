import Image from "next/image";
import testImage from "./_images/icon.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-svh justify-center items-center align-middle">
        <Image
          src={testImage}
          alt="Email Me"
          objectFit="cover"
          sizes="100%"
          style={{
            width: "auto",
            height: "7.5vh",
          }}
          className="pr-2 pl-2 pb-2 pt-2"
        />
        <p className="text-[5vw] pb-5">New Look Coming Soon!</p>
      </div>
    </>
  );
}
