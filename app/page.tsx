import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Weather />
    </main>
  );
}
