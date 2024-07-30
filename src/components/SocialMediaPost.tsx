import { FunctionComponent } from "react";
import styles from "./SocialMediaPost.module.css";

export type SocialMediaPostType = {
  className?: string;
};

const SocialMediaPost: FunctionComponent<SocialMediaPostType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divCssEco0c7, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <b className={styles.socialMediaPosts}>Social Media Posts</b>
      </div>
      <div className={styles.aiGeneratedSocialMediaContainer}>
        <p className={styles.aiGeneratedSocialMedia}>
          AI-generated social media content includes engaging captions,
        </p>
        <p className={styles.postsAndUpdates}>
          posts, and updates tailored for platforms like LinkedIn, Instagram,
        </p>
        <p className={styles.andTwitter}>and Twitter.</p>
      </div>
    </div>
  );
};

export default SocialMediaPost;
