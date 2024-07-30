import { FunctionComponent } from "react";
import styles from "./EmailCampaigns.module.css";

export type EmailCampaignsType = {
  className?: string;
};

const EmailCampaigns: FunctionComponent<EmailCampaignsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divCssEco0c7, className].join(" ")}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className={styles.blogPosts}>
        <b className={styles.emailCampaigns}>Email Campaigns</b>
        <div className={styles.aiGeneratedEmailsIncludingContainer}>
          <p className={styles.aiGeneratedEmailsIncluding}>
            AI-generated emails, including promotional and transactional emails,
          </p>
          <p className={styles.personalizedForBetter}>
            personalized for better engagement and conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailCampaigns;
