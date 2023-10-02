import { FunctionComponent } from "react";
import styles from "../Styles/Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.applicationTemplate}>
      <div className={styles.applicationTemplateChild11} />
      <div className={styles.vectorParent}>
        <div className={styles.groupChild2} />
      </div>

      <div className={styles.programDetails}>Program Details</div>
      <div className={styles.applicationForm}>Application Form</div>
      <div className={styles.workflow}>Workflow</div>
      <div className={styles.preview}>Preview</div>
    </div>
  );
};

export default Container;
