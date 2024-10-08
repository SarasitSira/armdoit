export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center align-middle min-h-[67.5vh]">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-[5vw] animate-pulse">
            --- Error 404, Page Not Found ---
          </p>
          <a
            className="inline-flex text-[2vw] rounded-xl bg-white/20 p-3 transition-all duration-100 ease-linear min-h-fit min-w-fit hover:rounded-3xl hover:p-4"
            href="/"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </>
  );
}
