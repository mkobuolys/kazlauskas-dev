import clsx from "clsx";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

interface ProjectRowProps {
  index: number;
  link: string;
  subtitle: string;
  thumbnail: string;
  title: string;
}

const ProjectRow = ({
  index,
  link,
  subtitle,
  thumbnail,
  title,
}: ProjectRowProps) => {
  const reverseRow = index % 2 == 1;

  return (
    <div
      className={clsx(
        "row",
        "row--align-center",
        "project-row",
        "margin-bottom--xl",
        reverseRow ? styles["project-row--reverse"] : null
      )}
    >
      <div
        className={clsx(
          "col",
          "col--7",
          reverseRow ? "padding-right--none" : "padding-left--none"
        )}
      >
        <img
          className={styles["project-row__img"]}
          src={thumbnail}
          alt={title}
        />
      </div>
      <div
        className={clsx(
          "col",
          "col--5",
          reverseRow ? "padding-left--none" : "padding-right--none"
        )}
      >
        <Heading as="h3" className={styles["project-row__title"]}>
          {title}
        </Heading>
        <Heading as="h4" className={styles["project-row__subtitle"]}>
          {subtitle}
        </Heading>
        <Link to={link} className="button button--primary margin-top--lg">
          Learn more
        </Link>
      </div>
    </div>
  );
};

interface OpenSourceSectionProps {
  projects: ProjectRowProps[];
}

export default function OpenSourceSection({
  projects,
}: OpenSourceSectionProps) {
  return (
    <div className={clsx("margin-vert--xl")}>
      <div className="col">
        <div
          className={clsx(
            "row",
            "row--align-baseline",
            "margin-bottom--md",
            styles["open-source-section__header"]
          )}
        >
          <Heading as="h2">Open-source projects</Heading>
          <Link
            to="https://github.com/mkobuolys"
            className="button button--primary button--outline"
          >
            See all
          </Link>
        </div>
        {projects.map((project, index) => (
          <ProjectRow key={`project-row-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}