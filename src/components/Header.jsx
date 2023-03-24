import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

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

  return (
    <>
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
            <div className="header_list_search">
              <GrFormSearch className="right_icons_search" />
            </div>
          </div>
          <div>
            <div className="header_list">
              <BsFillBellFill className="right_icons" />
            </div>
          </div>
          <div>
            <div className="header_list">
              <AiFillMessage className="right_icons" />
            </div>
          </div>
          <div>
            <div className="header_list">
              <HiSpeakerphone className="right_icons" />
            </div>
          </div>
          <div>
            <img src="/images/headerLogo.png" alt="" className="header_logo" />
          </div>
          <div>
            <div className="header_list_last">
              <span>
                <FaChevronDown className="downkey" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
