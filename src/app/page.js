import HomeSectionFriends from "./HomeSectionFriends/HomeSectionFriends";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";


export default function Home() {
  return (
   <div className='container mx-auto min-h-120 bg-gray-200'>
    <HomeSectionOne></HomeSectionOne>
    <div className="">
      <HomeSectionTwo ></HomeSectionTwo>
    <HomeSectionFriends></HomeSectionFriends>
    </div>
   </div>
  );
}
