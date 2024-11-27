import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Card from "@/components/card";
import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">

      <Header />
      <Hero />

      <div className="flex flex-col md:flex-row bg-[#F7F7F7] w-full h-[239.34px] md:h-[228px] md:justify-between md:items-center py-12 md:py-0">

        <div className="font-bold text-lg md:text-2xl w-[327px] h-[54px] md:w-[340px] md:h-[68px]">Trusted by 2000+ companies worldwide.</div>

        <section className="flex gap-3 items-center">
          <Image src={"icons/Logo-1.svg"} alt="Logo" width={123.8} height={38.52} />
          <Image src={"icons/Logo-2.svg"} alt="Logo" width={123.8} height={38.52} />
          <Image src={"icons/Logo-3.svg"} alt="Logo" width={123.8} height={38.52} />
          <Image src={"icons/Logo-4.svg"} alt="Logo" width={123.8} height={38.52} className="hidden md:block"/>
          <Image src={"icons/Logo-5.svg"} alt="Logo" width={123.8} height={38.52} className="hidden md:block"/>
          <Image src={"icons/Logo-6.svg"} alt="Logo" width={123.8} height={38.52} className="hidden md:block"/>
        </section>

      </div>

      <Card />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />


      

    </div>
  );
}
