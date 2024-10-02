import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>New Look Coming Soon</h1>
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
    </main>
  );
}
