import { FunctionComponent } from "react";
import SideBar from "./SideBar";
import FooterCopyRight from "./FooterCopyRight";
import EmailCampaigns from "./EmailCampaigns";
import BlogPost from "./BlogPost";
import SocialMediaPost from "./SocialMediaPost";
import TopHeader from "./TopHeader";
import styles from "./Generate.module.css";

export type GenerateType = {
  className?: string;
};

const Generate: FunctionComponent<GenerateType> = ({ className = "" }) => {
  return (
    <div className={[styles.generate, className].join(" ")}>
      <section className={styles.bodyChakraUiLight}>
        <div className={styles.divCss158bx23}>
          <div className={styles.div}>
            <SideBar />
          </div>
        </div>
        <FooterCopyRight />
        <EmailCampaigns />
        <BlogPost />
        <div className={styles.divCssEco0c7}>
          <div className={styles.articlesParent}>
            <b className={styles.articles}>Articles</b>
            <div className={styles.socialMedia}>
              <div className={styles.longFormArticlesOftenContainer}>
                <p className={styles.longFormArticlesOften}>
                  Long-form articles, often SEO-focused, are crafted by AI to
                  provide
                </p>
                <p className={styles.inDepthCoverageOn}>
                  {" "}
                  in-depth coverage on topics, research, and data analysis.
                </p>
              </div>
              <img
                className={styles.whiteELogoWhite1}
                loading="lazy"
                alt=""
                src="/whitee-logo-white-1.svg"
              />
            </div>
          </div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <SocialMediaPost />
        <h1 className={styles.whatDoYou}>What do you want to create?</h1>
        <div className={styles.enhanceYourDigitalContainer}>
          <p className={styles.enhanceYourDigital}>
            Enhance your digital presence with Copilot generated content,
            including captivating articles,
          </p>
          <p className={styles.engagingBlogPosts}>
            {" "}
            engaging blog posts, personalized email campaigns, and
            attention-grabbing social media posts.
          </p>
        </div>
        <img
          className={styles.bodyChakraUiLightChild}
          loading="lazy"
          alt=""
          src="/group-13416.svg"
        />
        <img
          className={styles.hexOutline1Icon}
          alt=""
          src="/hexoutline-1@2x.png"
        />
        <header className={styles.frameParent}>
          <div className={styles.logo1Wrapper}>
            <img
              className={styles.logo1Icon}
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
          </div>
          <TopHeader />
        </header>
        <img
          className={styles.hexOutline1Icon1}
          alt=""
          src="/hexoutline-1-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Generate;
