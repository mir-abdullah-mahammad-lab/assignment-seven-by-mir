import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";


export default function Home() {
  return (
   <div className='container mx-auto min-h-120 bg-gray-200'>
    <HomeSectionOne></HomeSectionOne>
    <HomeSectionTwo></HomeSectionTwo>
   </div>
  );
}
