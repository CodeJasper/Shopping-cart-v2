import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Product } from "@features";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


export type SliderProps = {
  mediaUrls: Product["mediaUrls"]
}

export function Slider(props: SliderProps) {
  const { mediaUrls } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <div className="h-[350px]">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full"
        >
          {mediaUrls.map((url) => (
            <SwiperSlide key={url}>
              <img src={url} className="mx-auto object-contain h-full"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {mediaUrls.map((url, index) => (
            <SwiperSlide key={index} className="
                opacity-60 transition-all duration-300 rounded border-2 border-transparent
                [&&.swiper-slide-thumb-active]:opacity-100 
                [&&.swiper-slide-thumb-active]:border-blue-500 hover:cursor-pointer">
              <img src={url} alt="Imagen de producto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}