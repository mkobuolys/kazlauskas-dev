import clsx from "clsx";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

interface ContentCardProps {
  description: string;
  link: string;
  thumbnail: string;
  title: string;
}

const ContentCard = ({
  description,
  link,
  thumbnail,
  title,
}: ContentCardProps) => (
  <div className="col col--4 margin-bottom--md">
    <Link to={link} className={styles["content-card"]}>
      <div className="card card--full-height">
        <div className={clsx(styles["content-card__image"])}>
          <img src={thumbnail} alt={title} />
        </div>
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  </div>
);

interface ContentSectionProps {
  items: ContentCardProps[];
  seeAllLink: string;
  title: string;
}

export default function ContentSection({
  items,
  seeAllLink,
  title,
}: ContentSectionProps) {
  return (
    <div
      className={clsx(
        "container",
        "margin-vert--xl",
        styles["content-section"]
      )}
    >
      <div className="col">
        <div
          className={clsx(
            "row",
            "row--align-baseline",
            "margin-bottom--md",
            styles["content-section__header"]
          )}
        >
          <Heading as="h2">{title}</Heading>
          <Link
            to={seeAllLink}
            className="button button--primary button--outline"
          >
            See all
          </Link>
        </div>
      </div>
      <div className="row">
        {items.map((item, index) => (
          <ContentCard key={`content-card-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
