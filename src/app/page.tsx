import StickyStack from '@/components/StickyStack';
import MarqueeComponent from '../components/MarqueeComponent';
import EventPage from "@/components/sections/Events/eventpage";

export default function Home() {

  return (
    <main>
      <StickyStack />
      <MarqueeComponent />
      
      <EventPage />
   
    </main>
  );
}

