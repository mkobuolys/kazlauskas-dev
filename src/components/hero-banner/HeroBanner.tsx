import clsx from "clsx";

import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";

import profilePicture from "@site/static/img/mk_avatar.png";
import styles from "./styles.module.css";

export default function HeroBanner() {
  return (
    <div className="row row--align-center margin-vert--lg">
      <div className="col col--6">
        <div>
          <img
            className={clsx("margin-bottom--md", styles["hero-banner__img"])}
            src={profilePicture}
            alt="Mangirdas Kazlauskas"
          />
          <Heading as="h1" className={styles["hero-banner__title"]}>
            Labas! I'm <span>Mangirdas</span> 👋
          </Heading>
          <Heading as="h2" className={styles["hero-banner__subtitle"]}>
            Welcome to my blog. It ain't much, but it's honest work.
          </Heading>
          <div className="margin-vert--lg">
            <Link to="blog" className="button button--primary button--lg">
              Read blog
            </Link>
          </div>
        </div>
      </div>
      <div className="col col--6">
        <CodeBlock language="dart" title="about_me.dart">
          {`class AboutMe {
  final fullName = 'Mangirdas Kazlauskas';
  final title = 'Mobile Tech Lead @ Billo';
  final location = 'Kaunas, Lithuania 🇱🇹';
  final badges = [
    'Google Developer Expert for Flutter & Dart',
    'Organiser @ Flutter Vilnius',
  ];
  final skills = [
    'Product Development',
    'Content Creation',
    'Public Speaking',
    'Mentoring',
    'Googling',
    'Memes',
  ];
  final social = {
    'X': 'https://x.com/mkobuolys',
    'LinkedIn': 'https://linkedin.com/in/mangirdas-kazlauskas',
    'GitHub': 'https://github.com/mkobuolys',
    'YouTube': 'https://youtube.com/@mkobuolys',
    'Sessionize': 'https://sessionize.com/mangirdas-kazlauskas/',
  };
}`}
        </CodeBlock>
      </div>
    </div>
  );
}
