import { FunctionComponent } from "react";
import AccountSideBar from "./AccountSideBar";
import styles from "./SideBar.module.css";

export type SideBarType = {
  className?: string;
};

const SideBar: FunctionComponent<SideBarType> = ({ className = "" }) => {
  return (
    <div className={[styles.divCss1x0bzsd, className].join(" ")}>
      <div className={styles.divCss9wpw97Wrapper}>
        <AccountSideBar />
      </div>
      <div className={styles.divCss1k7524oParent}>
        <div className={styles.divCss1k7524o} />
        <div className={styles.historyIconsWrapper}>
          <div className={styles.historyIcons}>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className={styles.generate}>Generate</div>
            </div>
            <div className={styles.iconGroup}>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
              <div className={styles.history}>History</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
