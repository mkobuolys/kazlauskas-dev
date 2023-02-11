import React from "react";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import ProfilePictureLight from "./img/profile_picture_light.png";
import ProfilePictureDark from "./img/profile_picture_dark.png";

export default function AboutMe() {
  return (
    <Layout title="About me">
      <main className="margin--lg">
        <div className="container">
          <div className="row">
            <div className={clsx("col col--4", styles.profilePictureWrapper)}>
              <ThemedImage
                alt="Profile picture"
                width={400}
                sources={{
                  light: ProfilePictureLight,
                  dark: ProfilePictureDark,
                }}
              />
            </div>
            <div className="col col--8">
              <CodeBlock language="dart" title="about_me.dart">
                {`/// Labas 👋, nice to meet you!
class AboutMe {
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
    'Twitter': 'https://twitter.com/mkobuolys',
    'LinkedIn': 'https://linkedin.com/in/mangirdas-kazlauskas',
    'GitHub': 'https://github.com/mkobuolys',
    'YouTube': 'https://youtube.com/@mkobuolys',
    'Sessionize': 'https://sessionize.com/mangirdas-kazlauskas/',
  };
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
