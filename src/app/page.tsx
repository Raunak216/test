import Component1 from "@/components/sections/Component1";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import StickyStack from '@/components/StickyStack';
import MarqueeComponent from '../components/MarqueeComponent';
import Stuff from '@/components/Stuff';
import EventPage from "@/components/sections/Events/eventpage";

export default function Home() {

  return (
    <main>

      <Navbar/>
      <div className="w-full h-screen absolute top-32">
      <Stuff ></Stuff>
      </div>

      <EventPage />
      
      {/* <StickyStack /> */}
      <MarqueeComponent />
      <Footer/>

    </main>
  );
}

