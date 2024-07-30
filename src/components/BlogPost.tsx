import { FunctionComponent } from "react";
import styles from "./BlogPost.module.css";

export type BlogPostType = {
  className?: string;
};

const BlogPost: FunctionComponent<BlogPostType> = ({ className = "" }) => {
  return (
    <div className={[styles.divCssEco0c7, className].join(" ")}>
      <div className={styles.divCssEco0c7Inner}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-13414@2x.png"
          />
        </div>
      </div>
      <b className={styles.blogPosts}>Blog Posts</b>
      <div className={styles.aiToolsAreContainer}>
        <p className={styles.aiToolsAre}>
          AI tools are used to create blog posts on various topics, offering SEO
        </p>
        <p className={styles.optimizationKeywordIntegrat}>
          optimization, keyword integration, and plagiarism checks.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
