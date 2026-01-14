import Category from "@/Components/Home/Category";
import Community from "@/Components/Home/Community";
import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Home/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Category></Category>
      <HowItWorks></HowItWorks>
      <Community></Community>
    </>
  );
}
