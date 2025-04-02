import clsx from "clsx";

import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

import codeGenerationThumbnail from "../img/presentation-thumbnails/code-generation.png";
import designPatternsThumbnail from "../img/presentation-thumbnails/flutter-design-patterns.png";
import frcOnTheFlyThumbnail from "../img/presentation-thumbnails/frc-on-the-fly.png";
import f3FrcThumbnail from "../img/presentation-thumbnails/f3-frc.png";
import introductionToFlutterThumbnail from "../img/presentation-thumbnails/introduction-to-flutter.png";
import lddThumbnail from "../img/presentation-thumbnails/ldd.png";
import otaAppUpdatesThumbnail from "../img/presentation-thumbnails/ota-app-updates.png";

const presentations = [
  {
    title: "From fear to air: embracing over-the-air app updates",
    subtitle:
      "Repeat after me: app updates are stressful. Dealing with app store reviews and worrying about disrupting users can make anyone hesitant to release new features. But what if there was a better way? Over-the-air (OTA) updates let you deliver changes directly to your users, super fast and without any fuss. In this talk, we’ll explore various OTA update techniques, from simple tools to advanced methods like code push for instant fixes, feature flags for controlled rollouts and A/B testing, server-driven UI for dynamic content, and even generative AI for personalized experiences.",
    thumbnail: otaAppUpdatesThumbnail,
    link: "/ota-app-updates",
  },
  {
    title: "Cat-like Development: Flutter for Efficiency",
    subtitle:
      'Many developers chase the dream of being a "unicorn" - an individual who seamlessly wields the power to design, build, and deliver remarkable products. But what if you are more like a cat? A person, who wants to invest the least amount of effort for the maximum outcome. In this talk, we will explore how Flutter empowers developers to do exactly that.',
    thumbnail: lddThumbnail,
    link: "/ldd",
  },
  {
    title: "Make smarter decisions faster with Firebase Remote Config",
    subtitle:
      "Firebase Remote Config is a powerful tool that allows you to change the behaviour and appearance of your app without requiring users to download an app update. This means that you can experiment with new features and changes, and see how they impact your users' behaviour in real-time. In this talk, we will learn how to use Firebase Remote Config to make smarter decisions faster.",
    thumbnail: f3FrcThumbnail,
    link: "/f3-firebase-remote-config",
  },
  {
    title: "Design Patterns toolbox: (not so) obvious patterns for Flutter",
    subtitle:
      "Overview of some OOP Design Patterns and their pure implementation in Dart as well as seeing them in action by investigating the example app.",
    thumbnail: designPatternsThumbnail,
    link: "/design-patterns-talk",
  },
  {
    title: "Control your Flutter app on the fly with Firebase Remote Config",
    subtitle:
      "Real-time updates, A/B testing, app personalisation - what if I told you that you could enable these powerful features in your Flutter application with minimal development effort and without any costs? Firebase Remote Config is a free service that enables changing the behaviour of an app remotely without publishing an app update. In this talk, we will explore multiple real-world use cases where Firebase Remote Config could help you while building Flutter apps.",
    thumbnail: frcOnTheFlyThumbnail,
    link: "/firebase-remote-config-talk",
  },
  {
    title: "Make the code work for you: Flutter Code Generation",
    subtitle:
      "Every programmer's dream is constantly building new features and seeing how the project grows. However, there is nothing worse than writing a lot of boilerplate code just before even start implementing those features. In this talk, you will learn about Flutter code generation tools and various tips on how to avoid implementing boilerplate code and focus on your next-gen project.",
    thumbnail: codeGenerationThumbnail,
    link: "https://github.com/mkobuolys/flutter-code-generation",
  },
  {
    title: "Let Me Introduce You to Flutter",
    subtitle:
      "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase. Over 700,000 Flutter apps are published to Google Play and Apple App stores to date, including products created by world-leading companies such as Google, Amazon, Alibaba, eBay, and BMW. According to the JetBrains 2021 State of Developer Ecosystem survey, Flutter is the most popular cross-platform framework in the world. Native performance, a single codebase for different platforms, sound null-safe development, and an increasing number of tools and integrations - that's only a fraction of what Flutter offers to every developer. I think it is time for me to introduce you to Flutter!",
    thumbnail: introductionToFlutterThumbnail,
    link: "/introduction-to-flutter",
  },
];

interface PresentationRowProps {
  link;
  subtitle;
  thumbnail;
  title;
}

const PresentationRow = ({
  link,
  subtitle,
  thumbnail,
  title,
}: PresentationRowProps) => {
  return (
    <div className={clsx("row", styles["presentation-row"])}>
      <div className={clsx("col", "col--4", styles["presentation-row__thumb"])}>
        <img
          className={styles["presentation-row__img"]}
          src={thumbnail}
          alt={title}
        />
      </div>
      <div
        className={clsx("col", "col--8", styles["presentation-row__content"])}
      >
        <Heading as="h3" className={styles["presentation-row__title"]}>
          {title}
        </Heading>
        <Heading as="h4" className={styles["presentation-row__subtitle"]}>
          {subtitle}
        </Heading>
        <Link
          to={link}
          className="button button--primary margin-top--md"
          target="_blank"
        >
          View slides
        </Link>
      </div>
    </div>
  );
};

export default function Presentations() {
  const description =
    "Explore my latest presentations and conference talks. Learn about Flutter, Firebase, AI, and more!";

  return (
    <Layout description={description}>
      <main>
        <div className="container margin-vert--lg">
          <h1 className={styles["presentation-page__title"]}>
            My presentations
          </h1>
          {presentations.map((presentation, index) => (
            <PresentationRow
              key={`presentation-row-${index}`}
              {...presentation}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
