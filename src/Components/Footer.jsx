import React from "react";
import footerImg from "../assets/d-footer.svg";
import twitter from "../assets/twitter.png";

import medium from "../assets/medium.svg";
import discord from "../assets/discord.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="top__left">
          <img className="left__img" src={footerImg} />
        </div>
        <div className="top__middle">
          <div className="middile__title">Learn</div>
          <a
            className="middle__links"
            target="_blank"
            href="https://docs.standarddao.finance/"
          >
            Documentation
          </a>
          <a
            className="middle__links"
            target="_blank"
            href="https://standarddao.medium.com/"
          >
            Medium
          </a>
          <a
            className="middle__links"
            target="_blank"
            href="https://docs.standarddao.finance/whitepaper/standard-digital-assets-whitepaper"
          >
            WHite Paper
          </a>
          <a
            className="middle__links"
            target="_blank"
            href="https://docs.standarddao.finance/faqs"
          >
            FAQ's
          </a>
        </div>
        <div className="top__right">
          <div className="right__title">Join the community</div>
          <div className="right__links">
            <a
              className="links"
              target="_blank"
              href="https://twitter.com/standarddao"
            >
              <img className="links__img" src={twitter} />
            </a>
            <a
              className="links"
              target="_blank"
              href="https://standarddao.medium.com/"
            >
              <img className="links__img" src={medium} />
            </a>
            <a
              className="links"
              target="_blank"
              href="https://discord.com/channels/911409990122754138/911409990122754144"
            >
              <img className="links__img" src={discord} />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__bottom">©2021 StandardDAO. All rights reserved</p>
    </div>
  );
};

export default Footer;
