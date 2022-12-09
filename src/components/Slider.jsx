import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Tadalafil-vs-Vardenafil.jpg" alt="pic1" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Vardenafil vs Tadalafil: Choose Your Right ED Pill
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Vardenafil vs Tadalafil, which one to choose? Still confused?
                  Whether it happens every once in a while or is perhaps…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Cialis-vs-Viagra.jpg" alt="pic2" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Cialis Vs Viagra: Who wins?
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Although there is no one compared to Viagra when it comes to
                  popularity, there are other highly successful treatments
                  available…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Careprost-vs-Latisse.jpg" alt="pic3" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Generic Levitra- Uses, Side Effects, and How to buy Vardenafil
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Men across the globe are struggling with erectile dysfunction.
                  But this sexual disorder has a solution- ED pills.&nbsp;
                  Various research…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img
              src="images/A-sick-man-suffering-from-side-effects-of-ED-pills-2.jpg"
              alt="pic4"
            />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Careprost vs. Latisse: Same or Different?
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Careprost and Latisse – this is a widespread debate among all
                  eyelash enthusiasts.&nbsp; The longing for naturally long
                  lashes or…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img
              src="images/A-couple-romancing-after-taking-Levitra-pills.jpg"
              alt="pic5"
            />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  How Long Does Levitra Last? Efficacy and Acting Time of ED
                  Pill
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Levitra is a highly effective way to treat erectile
                  dysfunction. If you plan to try it yourself, you may have…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Man-taking-blue-pill-.jpg" alt="pic6" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Levitra vs. Viagra- Which is the Ultimate ED Pill?
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  While talking of the cure of ED, it is common to go for Viagra
                  as the first choice.&nbsp; However, there…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Orange-pills.jpg" alt="pic7" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  What is Levitra Used For And Can Women Use it Too?
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Among all that Levitra is used for, erectile dysfunction
                  stands out as the most popular treatment.&nbsp; However, the
                  answer to…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/A-happy-couple-cuddling-in-bed.jpg" alt="pic8" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Levitra Pills- Acting Time, Efficacy, and How to Reach Climax
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Out of all the factors, the acting time of ED pills like
                  Levitra matters the most. Because let’s accept it,…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Untitled-design-11.jpg" alt="pic9" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  What Is Vilitra? One-Step Solution to ED
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  Erectile Dysfunction (ED) is prevalent among men because of
                  the stressful and unhealthy lifestyle most of us follow.&nbsp;
                  However, it…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide picture">
            <img src="images/Expired-medicines-and-Levitra.jpg" alt="pic10" />
          </div>
          <div className="slide content">
            <div className=" wp-medium-7  wpcolumns">
              <h2 className="wppsac-post-title">
                <a href="#" tabindex="-1">
                  Can You Take Expired Levitra? Read This For Detailed Analysis
                </a>
              </h2>

              <div className="wppsac-post-content">
                <div className="wppsac-sub-content">
                  What is the shelf life of ED pills and can you take expired
                  Levitra? Given the dollars you spend to…
                </div>

                <a className="wppsac-readmorebtn" href="#" tabindex="-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
