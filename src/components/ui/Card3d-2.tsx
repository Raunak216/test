'use client';

import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

export function ThreeDCardDemo2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#D9D9D9] overlay relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[1150px] h-auto rounded-3xl p-3 border">
        <div className="border-2 border-[#202020] rounded-2xl p-2">
          <CardItem translateZ={20}>
            <div className="flex flex-col items-center gap-8 space-x-0.5 md:flex-row md:items-start justify-between">
              {/* Image on the left */}
              <div className="border-[#202020] md:border-r-2 pr-2 mr-auto">
                <div className="border-[#202020] border-8 p-0.5">
                  <CardItem
                    rotateX={10}
                    rotateY={15}
                    rotateZ={-2}
                    translateZ="100"
                    className="flex-shrink-0"
                  >
                    <Image
                      src="/IMG20230603001727 2.png"
                      height="1024"
                      width="1024"
                      className="h-auto w-[300px] sm:w-[350px] md:w-[400px] object-cover shadow-lg"
                      alt="thumbnail"
                    />
                  </CardItem>
                </div>
              </div>
              {/* Text and button aligned to the right */}
              <div className="flex-1 text-left">
                <CardItem
                  translateZ="20"
                  className="text-3xl font-bold text-neutral-600 dark:text-white text-left"
                >
                  Clueminati
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="20"
                  className="text-black leading-relaxed text-base max-w-sm mt-8 mukta-malar-regular text-left"
                >
                  <p>
                  Some copy detailing why it would be great to join this 
                  event for freshers. Some more content about the importance 
                  of joining this event. Some more content detailing why this
                   event would be great. Then some hook detailing how cool this
                    event is.
                  </p>
                </CardItem>
                <div className="relative inline-block group mt-10 md:mx-0 mx-[132px]">
                  <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="relative  Altera-6 bg-[#202020] text-white border-black border-2 font-bold py-2 px-8 cursor-pointer md:text-xl text-sm hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2"
                    
                  >
                    Join Now
                  </CardItem>
                </div>
              </div>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
