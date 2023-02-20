import React from "react";
import logo from '../../content/images/IMG_0111.jpg';
import {
  AboutSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import '../../static/indexPage.css';

export default function IndexPage() {
  return (
    <>
      <Seo title="Lamia Arts Gallery" />
      <Page useSplashScreenAnimation>
        <div  style={{ width: '100%'}}>
            <div className="hero-flex" >
              <div>
              <HeroSection sectionId="hero" />
              </div>
            <div className="hero-image-flex">
              <img src={logo} alt="empty"/>
            </div>
             
            </div>
        </div>
        <div style={{ marginTop: '100px'}}>
        <ProjectsSection sectionId="collections" heading="Collections" />
        </div>
        <AboutSection sectionId="about" heading="About" />
        <div className="hero-flex" style={{ marginTop: '-100px'}}>
        <iframe className="iframe-style" title="myFrame" allowfullscreen="" loading="lazy" frameborder="0"  referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9911.493213833608!2d-0.405787!3d51.60721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766b6644674bf9%3A0xd5b6044c4a03ec06!2s24%20Hillside%20Gdns%2C%20Northwood%20HA6%201RL%2C%20UK!5e0!3m2!1sen!2sus!4v1676927380196!5m2!1sen!2sus" />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9911.493213833608!2d-0.405787!3d51.60721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766b6644674bf9%3A0xd5b6044c4a03ec06!2s24%20Hillside%20Gdns%2C%20Northwood%20HA6%201RL%2C%20UK!5e0!3m2!1sen!2sus!4v1676927380196!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </Page>
    </>
  );
}
