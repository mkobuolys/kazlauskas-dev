import clsx from "clsx";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

interface AlternatingLayoutItem {
  label: string;
  link: string;
  subtitle: string;
  thumbnail: string;
  title: string;
}

type AlternatingLayoutRowProps = AlternatingLayoutItem & {
  index: number;
};

interface AlternatingLayoutProps {
  items: AlternatingLayoutItem[];
  link: string;
  title: string;
}

const AlternatingLayoutRow = ({
  index,
  label,
  link,
  subtitle,
  thumbnail,
  title,
}: AlternatingLayoutRowProps) => {
  const reverseRow = index % 2 == 1;

  return (
    <div
      className={clsx(
        "row",
        "row--align-center",
        styles["alternating-layout-row"],
        reverseRow ? styles["alternating-layout-row--reverse"] : null
      )}
    >
      <div
        className={clsx(
          "col",
          "col--7",
          reverseRow
            ? styles["alternating-layout-row__thumb--reverse"]
            : styles["alternating-layout-row__thumb"]
        )}
      >
        <img
          className={styles["alternating-layout-row__img"]}
          src={thumbnail}
          alt={title}
        />
      </div>
      <div
        className={clsx(
          "col",
          "col--5",
          reverseRow
            ? styles["alternating-layout-row__content--reverse"]
            : styles["alternating-layout-row__content"]
        )}
      >
        <Heading as="h3" className={styles["alternating-layout-row__title"]}>
          {title}
        </Heading>
        <Heading as="h4" className={styles["alternating-layout-row__subtitle"]}>
          {subtitle}
        </Heading>
        <Link
          to={link}
          className="button button--primary margin-top--md"
          target="_blank"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default function AlternatingLayout({
  items,
  link,
  title,
}: AlternatingLayoutProps) {
  return (
    <div className="container margin-vert--xl">
      <div className="col">
        <div
          className={clsx(
            "row",
            "row--align-baseline",
            "margin-bottom--md",
            styles["alternating-layout__header"]
          )}
        >
          <Heading as="h2">{title}</Heading>
          <Link to={link} className="button button--primary button--outline">
            See all
          </Link>
        </div>
        {items.map((item, index) => (
          <AlternatingLayoutRow
            key={`alternating-layout-row-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
