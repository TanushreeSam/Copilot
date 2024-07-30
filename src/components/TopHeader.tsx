import { FunctionComponent } from "react";
import styles from "./TopHeader.module.css";

export type TopHeaderType = {
  className?: string;
};

const TopHeader: FunctionComponent<TopHeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.divCss4aslk7, className].join(" ")}>
      <div className={styles.divCssKushu4}>
        <div className={styles.spanCssXl71ch}>
          <div className={styles.divCssUytgmz} />
          <div className={styles.divCss1m1repx}>
            <b className={styles.ap}>AP</b>
          </div>
        </div>
        <div className={styles.divCss1ivdpie}>
          <div className={styles.itemChakraBreadcrumbList}>
            <div className={styles.welcomeSamay}>Welcome, Samay!</div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeBackSamayWrapper}>
        <h3 className={styles.welcomeBackSamay}>Welcome Back, Samay!</h3>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.poweredByWrapper}>
          <a className={styles.poweredBy}>Powered By</a>
        </div>
        <img
          className={styles.microsoft365CopilotIcon1}
          loading="lazy"
          alt=""
          src="/microsoft-365-copilot-icon-1.svg"
        />
        <div className={styles.copilotWrapper}>
          <a className={styles.copilot}>Copilot</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
