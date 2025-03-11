import React, { type ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/CodeBlock/Line";

import styles from "./styles.module.css";

const isUrl = (str: string): boolean => {
  try {
    return Boolean(new URL(str));
  } catch {
    return false;
  }
};

const extractUrlFromString = (str: string): string | null => {
  // Match URLs that start with http:// or https://
  const urlRegex = /(https?:\/\/[^\s'"]+)/g;
  const match = str.match(urlRegex);
  return match ? match[0] : null;
};

export default function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps,
}: Props): ReactNode {
  if (line.length === 1 && line[0]!.content === "\n") {
    line[0]!.content = "";
  }

  const lineProps = getLineProps({
    line,
    className: clsx(classNames, showLineNumbers && styles.codeLine),
  });

  const lineTokens = line.map((token, key) => {
    const url = extractUrlFromString(token.content);
    if (url && isUrl(url)) {
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          {...getTokenProps({ token })}
        />
      );
    }
    return <span key={key} {...getTokenProps({ token })} />;
  });

  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className={styles.codeLineNumber} />
          <span className={styles.codeLineContent}>{lineTokens}</span>
        </>
      ) : (
        lineTokens
      )}
      <br />
    </span>
  );
}
