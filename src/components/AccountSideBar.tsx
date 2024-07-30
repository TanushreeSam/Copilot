import { FunctionComponent } from "react";
import styles from "./AccountSideBar.module.css";

export type AccountSideBarType = {
  className?: string;
};

const AccountSideBar: FunctionComponent<AccountSideBarType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divCss9wpw97, className].join(" ")}>
      <div className={styles.divCss1c69p5nParent}>
        <img
          className={styles.divCss1c69p5nIcon}
          loading="lazy"
          alt=""
          src="/div-css1c69p5n.svg"
        />
        <div className={styles.samayPatelWrapper}>
          <div className={styles.samayPatel}>Samay Patel</div>
        </div>
      </div>
      <div className={styles.menuButton}>
        <img
          className={styles.buttonMenuButton6Icon}
          loading="lazy"
          alt=""
          src="/button-menubutton6.svg"
        />
        <img
          className={styles.buttonChakraButtonIcon}
          loading="lazy"
          alt=""
          src="/button-chakrabutton.svg"
        />
      </div>
    </div>
  );
};

export default AccountSideBar;
