import React from "react";
import "./businesshub.css";
import { BiLinkExternal } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

const Businesshub = () => {
  function topPins() {
    var tpopins_drop_menu = document.getElementById("tpopins_drop_menu");
    var header_list_toppons = document.querySelector(".header_list_toppons");
    var topPin_span = document.querySelector(".topPin_span");
    tpopins_drop_menu.classList.toggle("analytics_drop_menu_show");
    header_list_toppons.classList.toggle("clicklogo_Bg3");
    topPin_span.classList.toggle("analytics_span_click");
  }
  return (
    <>
      <div className="business_hub">
        <div className="container">
          <div className="business_header d-flex">
            <div className="d-flex justify-cente pe-3">
              <h2>Business Hub</h2>
            </div>
            <div className="business_header_part2 d-flex">
              <div className="Bussiness_hub_sec d-flex">
                <div className="">
                  <img
                    src="/images/headerLogo.png"
                    alt=""
                    className="business_hub_logo mt-1"
                  />
                </div>
                <div className="ps-2">
                  <h6>Interiors Head | Crystal Chandeliers</h6>
                  <div className="d-flex businesshub_header">
                    <div>
                      <p>interiorshead.com</p>
                      <p>@interiorshead</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="businesshub_sec_p2 d-flex">
                <div className="view">
                  <p>Monthaly veiws</p>
                  <h6>4.54k</h6>
                </div>
                <div className="followers ps-4">
                  <p>Followers</p>
                  <h6>10.7k</h6>
                </div>
              </div>
              <div className="businesshub_sec_p3">
                <p>View public profile</p>
              </div>
            </div>
          </div>
          <div className="performance">
            <div className="proformance_List1">
              <div>
                <h5>Performance</h5>
                <p>Showing data from the last 30 days</p>
              </div>
              <div>
                <div className="perfomance_svg_parent">
                  <svg
                    class="gUZ R19 U9O kVc"
                    height="18"
                    width="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label=""
                    role="img"
                  >
                    <path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="business_alalytics mt-4">
              <div className="row">
                <div className="col-4  alalytics_card">
                  <div className="analytics_overview">
                    <div className="d-flex analytics_overviews1">
                      <div className="d-flex">
                        <h6>Analytics overview</h6>
                        <div className="analytic_tooltip_parent">
                          <div className="analytic_tooltip">
                            <p>i</p>
                          </div>
                        </div>
                      </div>
                      <div className="analytics_link_parent">
                        <BiLinkExternal className="analytics_link" />
                      </div>
                    </div>
                    <div className="analytics_cards">
                      <div className="impressions A_cards">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                      <div className="impressions A_cards mt-3">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                      <div className="impressions A_cards mt-3">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4  alalytics_card">
                  <div className="analytics_overview">
                    <div className="d-flex analytics_overviews1">
                      <div>
                        <div
                          className="header_list header_list_toppons"
                          onClick={topPins}
                        >
                          <span className="topPin_span">
                            Top Pins <FaChevronDown className="downkey" />
                          </span>
                        </div>
                        <div
                          className="analytics_drop_menu"
                          id="tpopins_drop_menu"
                        >
                          <div className="toppins_dropdown_1">
                            <h6>Top Pins </h6>
                            <span>
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
                            </span>
                          </div>
                          <div>
                            <h6>Recent Pins</h6>
                          </div>
                        </div>
                      </div>
                      <div className="analytics_link_parent">
                        <BiLinkExternal className="analytics_link" />
                      </div>
                    </div>
                    <div className="analytics_cards">
                      <div className="impressions A_cards">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                      <div className="impressions A_cards mt-3">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                      <div className="impressions A_cards mt-3">
                        <p>Impressions</p>
                        <h5>4.92K</h5>
                        <h6>(+0%)</h6>
                      </div>
                    </div>
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
