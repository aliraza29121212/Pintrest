import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className="header_parent bg-darl ">
        <div className="left_part d-flex">
          <div>
            <BsPinterest className="pin_logo" />
            <span className="bussiness_span">
              Business <FaChevronDown className="downkey" />
            </span>
          </div>
          <div>
            <span>
              Create <FaChevronDown className="downkey" />
            </span>
          </div>
          <div>
            <span>
              Analytics <FaChevronDown className="downkey" />
            </span>
          </div>
        </div>
        <div className="right_part d-flex">
          <div>
            <GrFormSearch className="right_icons_search" />
          </div>
          <div>
            <BsFillBellFill className="right_icons" />
          </div>
          <div>
            <AiFillMessage className="right_icons" />
          </div>
          <div>
            <HiSpeakerphone className="right_icons" />
          </div>
          <div>
            <img src="/images/headerLogo.png" alt="" className="header_logo" />
          </div>
          <div>
            <FaChevronDown className="downkey" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
