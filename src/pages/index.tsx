import Layout from "@theme/Layout";

import ContentSection from "../components/content-section/ContentSection";
import HeroBanner from "../components/hero-banner/HeroBanner";
import OpenSourceSection from "../components/open-source-section/OpenSourceSection";

import rotaryPasscodeThumbnail from "../../blog/2023-06-05-rotary-passcode-static-design/img/header.png";
import tipsForSpeakersThumbnail from "../../blog/2023-08-08-10-tips-for-speaking-at-tech-conferences/img/header.jpeg";
import appLifecycleListenerThumbnail from "../../blog/2023-08-17-flutter-app-lifecycle-listener-overview/img/header.png";

import remoteConfigVideoThumbnail from "./img/video-thumbnails/flutter-firebase-thumb.png";
import rotaryAnimationsVideoThumbnail from "./img/video-thumbnails/rotary-animations-thumb.jpeg";
import rotaryStaticVideoThumbnail from "./img/video-thumbnails/rotary-static-thumb.png";

import flutterDesignChallengesProjectThumbnail from "./img/project-thumbnails/design-challenges-thumb.gif";
import flutterDesignPatternsProjectThumbnail from "./img/project-thumbnails/design-patterns-thumb.png";
import flutterDeckProjectThumbnail from "./img/project-thumbnails/flutter-deck-thumb.png";

const articles = [
  {
    title: "A new way of listening to the app lifecycle events in Flutter",
    description:
      "Overview of the new AppLifecycleListener class introduced in Flutter 3.13.",
    thumbnail: appLifecycleListenerThumbnail,
    link: "blog/flutter-app-lifecycle-listener-overview/",
  },
  {
    title: "10 things you will learn after speaking at tech conferences",
    description:
      "10 things I wish I knew before getting on the tech stage for the first time.",
    thumbnail: tipsForSpeakersThumbnail,
    link: "blog/10-tips-for-speaking-at-tech-conferences/",
  },
  {
    title: "Flutter UI challenge: rotary passcode (static design)",
    description:
      "Retro rotary passcode input UI challenge made with Flutter. In the first part, the static design of the UI is implemented.",
    thumbnail: rotaryPasscodeThumbnail,
    link: "blog/flutter-ui-challenge-rotary-passcode-static-design/",
  },
];

const videos = [
  {
    title: "Rotary passcode | Flutter UI challenge | Part 2: Animations",
    description:
      "Retro rotary passcode input UI challenge made with Flutter. The main focus of this part is motion design - animations.",
    thumbnail: rotaryAnimationsVideoThumbnail,
    link: "https://youtu.be/gdVNFHgNvpw",
  },
  {
    title: "Rotary passcode | Flutter UI challenge | Part 1: Static design",
    description:
      "Retro rotary passcode input UI challenge made with Flutter. In the first part, the static design of the UI is implemented.",
    thumbnail: rotaryStaticVideoThumbnail,
    link: "https://youtu.be/Xb30L9wkEGU",
  },
  {
    title: "Control your Flutter app on the fly with Firebase Remote Config",
    description:
      "In this video, I cover multiple real-world use cases where Firebase Remote Config could help you while building Flutter apps.",
    thumbnail: remoteConfigVideoThumbnail,
    link: "https://youtu.be/1qHSvGoqqiE",
  },
];

const projects = [
  {
    title: "flutter_deck",
    subtitle:
      "A lightweight, customizable, and easy-to-use framework to create presentations in Flutter.",
    thumbnail: flutterDeckProjectThumbnail,
    link: "https://pub.dev/packages/flutter_deck",
  },
  {
    title: "Flutter Design Patterns",
    subtitle:
      "An open-source OOP design patterns application built with Dart and Flutter.",
    thumbnail: flutterDesignPatternsProjectThumbnail,
    link: "https://flutterdesignpatterns.com/",
  },
  {
    title: "Flutter Design Challenges",
    subtitle: "A collection of design challenges implemented in Flutter.",
    thumbnail: flutterDesignChallengesProjectThumbnail,
    link: "https://github.com/mkobuolys/flutter-design-challenges",
  },
];

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <HeroBanner />
        <ContentSection
          items={articles}
          seeAllLink="blog"
          title="Latest blog posts"
        />
        <ContentSection
          items={videos}
          seeAllLink="https://youtube.com/@mkobuolys"
          title="Latest videos"
        />
        <OpenSourceSection projects={projects} />
      </main>
    </Layout>
  );
}
