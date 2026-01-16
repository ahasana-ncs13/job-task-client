import Category from "@/Components/Home/Category";
import Community from "@/Components/Home/Community";
import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Home/HowItWorks";
import LatestBooks from "@/Components/Home/LatestBooks";
import LatestReviews from "@/Components/Home/LatestReviews";
import Stats from "@/Components/Home/Stats";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Category></Category>
      <LatestBooks></LatestBooks>
      <Stats></Stats>
      <HowItWorks></HowItWorks>
      <Community></Community>
      <LatestReviews></LatestReviews>
    </>
  );
}
