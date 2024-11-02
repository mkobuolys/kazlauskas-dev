import type { Props } from "@theme/TOC";
import TOCItems from "@theme/TOCItems";
import clsx from "clsx";

import styles from "./styles.module.css";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }: Props): JSX.Element {
  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      <div
        className={clsx(
          "margin-top--md padding--md",
          styles.subscribeContainer
        )}
      >
        <a href="https://pages.kazlauskas.dev/subscribe">
          Don't miss my next article - subscribe!
        </a>
      </div>
    </div>
  );
}
