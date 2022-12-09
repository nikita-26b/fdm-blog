import React from "react";
import { FaPhone, FaWhatsapp, FaUser, FaDolly } from "react-icons/fa";

function Header() {
  return (
    <div>
      <header
        className="site-header grid-container"
        id="masthead"
        aria-label="Site"
      >
        <div className="inside-header grid-container">
          <div className="site-logo">
            <a href="#" rel="home">
              <img
                className="header-image is-logo-image"
                alt="FDM Blogs"
                src="https://www.fordailymedicine.com/wp-content/uploads/2022/04/FDM-logo2.png"
                width="80"
                height="35"
              />
            </a>
          </div>
          <form
            role="search"
            method="get"
            action="//www.fordailymedicine.com/search/"
            className="wp-block-search__button-outside wp-block-search__icon-button aligncenter wp-block-search"
          >
            <label
              htmlFor="wp-block-search__input-1"
              className="wp-block-search__label screen-reader-text"
            >
              Search
            </label>
            <div
              className="wp-block-search__inside-wrapper "
              style={{ width: "100%" }}
            >
              <input
                type="search"
                id="wp-block-search__input-1"
                className="wp-block-search__input wp-block-search__input"
                name="q"
                // value=""
                placeholder="Search"
                required=""
                autoComplete="off"
              />
              <button
                type="submit"
                className="wp-block-search__button has-icon wp-element-button"
                aria-label="Search"
              >
                <svg
                  className="search-icon"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                </svg>
              </button>
            </div>
          </form>
          <div className="header-widget">
            <aside id="block-32" className="widget inner-padding widget_block">
              <div className="header_contact_btn">
                <div>
                  <ul className="p-0">
                    <li>
                      <FaWhatsapp />
                      <a
                        href="https://api.whatsapp.com/send?phone=389 71 668 872&amp;text=Hi%20Sexpills%20Team,"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: "12px",
                        }}
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=https://api.whatsapp.com/send?phone%3D126745275904%26text%3DHi%2520sexpills%2520Team,&amp;source=gmail&amp;ust=1615459434719000&amp;usg=AFQjCNGa0e4gM26ikAmgDRmoMTXDGdlkLg"
                      >
                        +389 71 668 872
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="mailto:support@sexpills.us"
                        className="text-white"
                      >
                        Support@sexpills.us
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="tel:+1(844) 443-3220"
                        className="text-white"
                        style={{ fontSize: "12px" }}
                      >
                        <FaPhone />
                        +1(844) 443-3220
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn" style={{ alignSelf: "center" }}>
                  <a
                    href="https://www.fordailymedicine.com/account/"
                    className="btn-shop"
                  >
                    <FaUser />
                    Account
                  </a>
                  <a
                    href="https://www.fordailymedicine.com/cart/"
                    className="btn-cart"
                  >
                    <FaDolly />
                    Cart
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
