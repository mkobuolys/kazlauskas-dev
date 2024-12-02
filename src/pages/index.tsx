import Layout from "@theme/Layout";

import ContactSection from "../components/contact-section/ContactSection";
import ContentSection from "../components/content-section/ContentSection";
import HeroBanner from "../components/hero-banner/HeroBanner";
import OpenSourceSection from "../components/open-source-section/OpenSourceSection";
import SubscribeSection from "../components/subscribe-section/SubscribeSection";

import publishingNewFlutterPacakgeThumbnail from "../../blog/2024-11-11-publishing-new-flutter-package/img/header.png";
import generativeAiAppUsingGeminiThumbnail from "../../blog/2024-03-12-flutter-generative-ai-app-using-gemini/img/header.png";
import rotaryPasscodeThumbnail from "../../blog/2024-02-15-rotary-passcode-animations/img/header.png";

import aiScavengerHuntThumbnail from "./img/video-thumbnails/ai-scavenger-hunt-thumb.png";
import rotaryAnimationsVideoThumbnail from "./img/video-thumbnails/rotary-animations-thumb.jpeg";
import rotaryStaticVideoThumbnail from "./img/video-thumbnails/rotary-static-thumb.png";

import flutterDesignChallengesProjectThumbnail from "./img/project-thumbnails/design-challenges-thumb.gif";
import flutterDesignPatternsProjectThumbnail from "./img/project-thumbnails/design-patterns-thumb.png";
import flutterDeckProjectThumbnail from "./img/project-thumbnails/flutter-deck-thumb.png";

const articles = [
  {
    title:
      "Creating and publishing a new Flutter package to pub.dev in 2 hours",
    description:
      "A step-by-step guide on how to create and publish a new Flutter package to pub.dev, fast and easy.",
    thumbnail: publishingNewFlutterPacakgeThumbnail,
    link: "blog/publishing-new-flutter-package/",
  },
  {
    title: "How to create a generative AI app using Gemini and Flutter",
    description:
      "Overview of the google_generative_ai package and how to use it to create a generative AI app using Gemini and Flutter.",
    thumbnail: generativeAiAppUsingGeminiThumbnail,
    link: "blog/flutter-generative-ai-app-using-gemini/",
  },
  {
    title: "Flutter UI challenge: rotary passcode (animations)",
    description:
      "Retro rotary passcode input UI challenge made with Flutter. The main focus of this part is motion design - animations.",
    thumbnail: rotaryPasscodeThumbnail,
    link: "blog/flutter-ui-challenge-rotary-passcode-animations/",
  },
];

const videos = [
  {
    title: "I built my first generative AI app using Gemini and Flutter",
    description:
      "In this video, we will dive into the journey of building my first AI-powered photo scavenger hunt game using the new AI Dart SDK, Gemini and Flutter.",
    thumbnail: aiScavengerHuntThumbnail,
    link: "https://youtu.be/uMhfvicLRFw",
  },
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
  const description =
    "Mangirdas Kazlauskas is the first Google Developer Expert for Flutter & Dart technlogies in Lithuania, who crafts high-performance cross-platform apps & frameworks using a product-centric approach. He actively shares his expertise through articles, YouTube videos, and engaging conference talks, empowering businesses and the Flutter community to excel in the digital world. Explore his work and see how he can help you achieve your goals!";

  return (
    <Layout description={description}>
      <main>
        <HeroBanner />
        <SubscribeSection />
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
        <ContactSection />
      </main>
    </Layout>
  );
}
