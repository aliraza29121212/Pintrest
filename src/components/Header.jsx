import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  function businessFunc() {
    var business_dropDown = document.getElementById("business_dropDown");
    var header_list = document.querySelector(".header_list");
    var pin_logo = document.querySelector(".pin_logo");
    var span_text_click = document.querySelector(".bussiness_span");
    business_dropDown.classList.toggle("business_dropDown_show");
    header_list.classList.toggle("clicklogo_Bg");
    span_text_click.classList.toggle("span_text_click");
    pin_logo.classList.toggle("pin_logo_click");
  }
  function createFunc() {
    var create_drop_menu = document.getElementById("create_drop_menu");
    var header_list2 = document.querySelector(".header_list2");
    var create_span = document.querySelector(".create_span");
    create_drop_menu.classList.toggle("create_drop_menu_show");
    header_list2.classList.toggle("clicklogo_Bg2");
    create_span.classList.toggle("create_span_click");
  }
  function analyticFunc() {
    var analytics_drop_menu = document.getElementById("analytics_drop_menu");
    var header_list3 = document.querySelector(".header_list3");
    var analytics_span = document.querySelector(".analytics_span");
    analytics_drop_menu.classList.toggle("analytics_drop_menu_show");
    header_list3.classList.toggle("clicklogo_Bg3");
    analytics_span.classList.toggle("analytics_span_click");
  }
  const business_profile = () => {
    var account_dropDownMenu = document.querySelector(".account_dropDownMenu");
    account_dropDownMenu.classList.toggle("account_dropDownMenu_show");
  };
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
      <div
        className="Header_main_parent"
        style={{
          boxShadow: hasScrolled
            ? "rgba(0, 0, 0, 0.1) 0px 8px 8px -8px"
            : "none",
        }}
      >
        <div className="header_parent bg-darl ">
          <div className="left_part d-flex">
            <div>
              <div className="header_list" onClick={businessFunc}>
                <BsPinterest className="pin_logo" />
                <span className="bussiness_span span_text">
                  Business <FaChevronDown className="downkey" />
                </span>
              </div>
              <div className="drop_menu" id="business_dropDown">
                <div>
                  <h6>Business hub</h6>
                </div>
                <div>
                  <h6>Business hub</h6>
                </div>
              </div>
            </div>
            <div className="middleList">
              <div className="header_list header_list2" onClick={createFunc}>
                <span className="create_span">
                  Create <FaChevronDown className="downkey" />
                </span>
              </div>
              <div className="create_drop_menu" id="create_drop_menu">
                <div>
                  <h6>Create Idea pin </h6>
                </div>
                <div>
                  <h6>Create Pin</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="header_list header_list3" onClick={analyticFunc}>
                <span className="analytics_span">
                  Analytics <FaChevronDown className="downkey" />
                </span>
              </div>
              <div className="analytics_drop_menu" id="analytics_drop_menu">
                <div>
                  <h6>Overview </h6>
                </div>
                <div>
                  <h6>Audience Insights</h6>
                </div>
                <div>
                  <h6> Trends</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="right_part d-flex">
            <div>
              <div className="header_list_search ">
                <GrFormSearch className="right_icons_search" />
              </div>
            </div>
            <div className="bell">
              <div className="header_list ">
                <BsFillBellFill className="right_icons" />
              </div>
              <div className="left_header_hover_div">
                <div className="notification_div">
                  <p>Notifications</p>
                </div>
              </div>
            </div>
            <div className="message">
              <div className="header_list">
                <AiFillMessage className="right_icons" />
              </div>
              <div className="left_header_hover_div">
                <div className="message_div">
                  <p>Message</p>
                </div>
              </div>
            </div>
            <div>
              <div className="header_list">
                <HiSpeakerphone className="right_icons" />
              </div>
            </div>
            <div className="profile">
              <img
                src="/images/headerLogo.png"
                alt=""
                className="header_logo"
              />
              <div className="left_header_hover_div">
                <div className="profile_div">
                  <p>Your profile</p>
                </div>
              </div>
            </div>
            <div className="account">
              <div className="header_list_last">
                <span>
                  <FaChevronDown
                    className="downkey"
                    id="business_profile"
                    onClick={business_profile}
                  />
                </span>
              </div>
              <div className="left_header_hover_div ">
                <div className="acoount_div_parent">
                  <div className="account_div">
                    <p>Account and more option</p>
                  </div>
                </div>
              </div>
              <div className="account_dropDownMenu">
                <p className="currently_text">Currently in</p>
                <div className="Bussiness_profile_sec d-flex">
                  <div className="">
                    <img
                      src="/images/headerLogo.png"
                      alt=""
                      className="business_logo"
                    />
                  </div>
                  <div className="ps-3">
                    <h6>Interiors Head | Crustal....</h6>
                    <div className="d-flex Profile_header">
                      <div>
                        <p>Business</p>
                        <p>interiorshead@gmail.com</p>
                      </div>
                      {/* <TiTick /> */}
                      <svg
                        class="gUZ R19 U9O kVc"
                        height="12"
                        width="12"
                        viewBox="0 0 24 24"
                        aria-label="Selected item"
                        role="img"
                      >
                        <path d="M9.17 21.75.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="business_tabs pt-4">
                  <p className="currently_text mb-2">Your accounts</p>
                  <h6>Add account</h6>
                  <p className="currently_text mt-3">More options</p>
                  <h6>Settings</h6>
                  <h6>Business Access</h6>
                  <h6>Tune your home feed</h6>
                  <h6>Your privacy rights</h6>
                  <h6 className="navigate_tabs">
                    <span>Request a feature</span>
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </h6>
                  <h6 className="navigate_tabs">
                    <span>RGet help</span>
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </h6>
                  <h6 className="navigate_tabs">
                    <span>See terms of service</span>
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </h6>
                  <h6 className="navigate_tabs">
                    <span>See privacy policy</span>
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </h6>
                  <h6>Log out</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
