import { FunctionComponent } from "react";
import styles from "./FooterCopyRight.module.css";

export type FooterCopyRightType = {
  className?: string;
};

const FooterCopyRight: FunctionComponent<FooterCopyRightType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.allRightsReserved, className].join(" ")}>
      © 2024 All Rights Reserved
    </div>
  );
};

export default FooterCopyRight;
