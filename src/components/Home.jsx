import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Home = () => {
  // header shadow

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="home_content">
        <div
          className="feed_text pt-3"
          style={{
            boxShadow: hasScrolled
              ? "rgba(0, 0, 0, 0.1) 0px 8px 8px -8px"
              : "none",
          }}
        >
          <h6>For you</h6>
        </div>
        <div className="grid-container">
          <div className="image_div">
            <div className="hover_shade">
              <img src="/images/home_img.jpg" alt="" />
            </div>
            <div className="image_overlay">
              <div className="image_overlay_child_parent">
                <div className="overla_top">
                  <div className="d-flex">
                    <span>
                      <p>Home Decor </p>
                    </span>
                    <span>
                      <FaChevronDown className="downkey" />
                    </span>
                  </div>
                  <div>
                    <button>Save</button>
                  </div>
                </div>
                <div className="overlay_bottom">
                  <div className="d-flex"></div>
                  <div className="d-flex">
                    <div className="bottom_icon_overlay">
                      <FiUpload />
                    </div>
                    <div className="bottom_icon_overlay">
                      <BsThreeDots />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image_div">
            <div className="hover_shade">
              <img src="/images/2.jpg" alt="" />
            </div>
            <div className="image_overlay">
              <div className="image_overlay_child_parent">
                <div className="overla_top">
                  <div className="d-flex pt-2">
                    <span>
                      <p>Home Decor </p>
                    </span>
                    <span>
                      <FaChevronDown className="downkey" />
                    </span>
                  </div>
                  <div>
                    <button>Save</button>
                  </div>
                </div>
                <div className="overlay_bottom">
                  <div className="d-flex"></div>
                  <div className="d-flex">
                    <div className="bottom_icon_overlay">
                      <FiUpload />
                    </div>
                    <div className="bottom_icon_overlay">
                      <BsThreeDots />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="image_div">
            <img src="/images/8.jpg" alt="" />
          </div>
          <div className="image_div">
            <img src="/images/7.jpg" alt="" />
          </div>
          <div className="image_div">
            <img src="/images/4.jpg" alt="" />
          </div>
          <div className="image_div">
            <img src="/images/5.jpg" alt="" />
          </div>
          <div className="image_div">
            <img src="/images/6.jpg" alt="" />
          </div>
          <div className="image_div">
            <img src="/images/10.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
