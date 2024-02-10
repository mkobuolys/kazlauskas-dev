import clsx from "clsx";
import { ReactNode } from "react";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

interface ContactButtonProps {
  children: ReactNode;
  to: string;
}

const ContactButton = ({ children, to }: ContactButtonProps) => {
  return (
    <Link
      to={to}
      className={clsx(
        "button",
        "button--secondary",
        styles["contact-content__button"]
      )}
    >
      {children}
    </Link>
  );
};

const EmailButton = () => (
  <ContactButton to="mailto:mangirdas@kazlauskas.dev">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.294 75.294"
      height="24"
      width="24"
    >
      <g>
        <path
          d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
  c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
  H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
  c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
  c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
  c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
  c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
        />
      </g>
    </svg>
  </ContactButton>
);

const LinkedInButton = () => (
  <ContactButton to="https://www.linkedin.com/in/mangirdas-kazlauskas">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </ContactButton>
);

const XButton = () => (
  <ContactButton to="https://x.com/mkobuolys">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 462.799"
      height="24"
      width="24"
    >
      <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
    </svg>
  </ContactButton>
);

export default function ContactSection() {
  return (
    <div className={clsx("margin-top--lg", styles["contact-section"])}>
      <div
        className={clsx(
          "container",
          "padding-vert--xl",
          "text--center",
          styles["contact-content"]
        )}
      >
        <Heading as="h2" className={styles["contact-content__header"]}>
          Don't be shy, say hi!
        </Heading>
        <div
          className={clsx("margin-top--lg", styles["contact-content__links"])}
        >
          <EmailButton />
          <LinkedInButton />
          <XButton />
        </div>
      </div>
    </div>
  );
}
