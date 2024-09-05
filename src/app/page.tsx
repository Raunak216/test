import Component1 from "@/components/sections/Component1";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import StickyStack from '@/components/StickyStack';
import MarqueeComponent from '../components/MarqueeComponent';
import Stuff from '@/components/Stuff';

export default function Home() {

  return (
    <main>

      <Navbar/>
      <div className="w-full h-screen absolute top-32">
      <Stuff ></Stuff>
      </div>
      
      <StickyStack />
      <MarqueeComponent />
      <Footer/>

    </main>
  );
}

