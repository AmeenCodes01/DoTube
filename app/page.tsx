import Image from "next/image";
import VidLink from "./components/VidLink";

export default function Home() {
  return (
    <div className="font-sans w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <VidLink/>
    </div>
  );
}
