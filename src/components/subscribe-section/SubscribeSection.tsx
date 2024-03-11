import clsx from "clsx";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export default function SubscribeSection() {
  return (
    <div className={clsx("margin-vert--lg", styles["subscribe-section"])}>
      <div
        className={clsx(
          "container",
          "text--center",
          styles["subscribe-content"]
        )}
      >
        <Heading as="h2" className={styles["subscribe-content__header"]}>
          Content worth your time, delivered directly to you. For FREE!
        </Heading>
        <Link
          to="https://pages.kazlauskas.dev/subscribe"
          className="button button--secondary button--lg margin-top--md"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}
