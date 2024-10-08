import Image from "next/image";
import selfPortrait from "./_images/selfPortrait.jpg";

export default function Home() {
  return (
    <>
      <div
        id="welcome"
        className="flex justify-items-center justify-around items-center grid-cols-2 m-24 h-fit"
      >
        <div className="flex flex-col h-fit m-5">
          <p className="text-[150px] self-center font-bold">Arm Sarasit</p>
          <hr className="h-1 mx-auto border-0 rounded-full bg-gray-700 w-[100%]" />
          <p className="whitespace-nowrap text-[50px] self-center mt-12">
            Welcome to My Personal Website and Portfolio
          </p>
        </div>
        <Image
          src={selfPortrait}
          alt="Picture of the Author"
          objectFit="cover"
          sizes="100%"
          style={{
            width: "auto",
            height: "650px",
          }}
          className="rounded-portrait self-center h-fit w-fit hover:scale-105 duration-150 ease-linear"
        />
      </div>
      <div id="background">
        <div className="flex flex-col m-10">
          <p className="text-[50px] self-start font-bold">Background</p>
        </div>
      </div>
      <div id="about-me">
        <div className="flex flex-col m-10">
          <div id="projects">
            <p className="text-[30px] self-start font-bold">
              Personal Projects
            </p>
          </div>
          <div id="experiences">
            <p className="text-[30px] self-start font-bold">Experiences</p>
          </div>
          <div id="youtube">
            <p className="text-[30px] self-start font-bold">YouTube</p>
          </div>
        </div>
      </div>
      <div id="armdoit-intro">
        <div className="flex flex-col m-10">
          <p className="text-[50px] self-start font-bold">
            Where Did Arm Do It Come From?
          </p>
        </div>
      </div>
    </>
  );
}
