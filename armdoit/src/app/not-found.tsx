export default function NotFound() {
  return (
    <>
      <div className="flex flex-col h-svh justify-center items-center align-middle">
        <p className="text-[5vw] pb-5">Error 404 - Page Not Found</p>
        <a
          className="text-[2vw] rounded-xl bg-white/20 pt-3 pb-3 pr-3 pl-3 transition-all duration-100 ease-linear hover:rounded-3xl hover:pr-4 hover:pl-4"
          href="/"
        >
          Back to Homepage
        </a>
      </div>
    </>
  );
}
