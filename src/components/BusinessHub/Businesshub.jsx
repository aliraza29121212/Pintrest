import React from "react";
import "./businesshub.css";

const Businesshub = () => {
  return (
    <>
      <div className="business_hub">
        <div className="container">
          <div className="business_header d-flex">
            <div className="d-flex justify-cente pe-3">
              <h2>Business Hub</h2>
            </div>
            <div className="business_header_part2">
              <div className="Bussiness_profile_sec d-flex">
                <div className="">
                  <img
                    src="/images/headerLogo.png"
                    alt=""
                    className="business_hub_logo"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Businesshub;
