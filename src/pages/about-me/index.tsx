import React from 'react';
import clsx from 'clsx';
import ThemedImage from "@theme/ThemedImage";
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

export default function AboutMe() {
  return (
    <Layout>
      <main className="margin--lg">
        <div className="container">
          <div className="row">
            <div className={clsx("col col--4", styles.profilePictureWrapper)}>
              <ThemedImage
                alt="Profile picture"
                width={400}
                sources={{
                  light: require("./img/profile_picture_light.png").default,
                  dark: require("./img/profile_picture_dark.png").default,
                }}
              />
            </div>
            <div className="col col--8">
              <CodeBlock
                language="dart"
                title="about_me.dart">
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
    'Mentoring',
    'Googling',
    'Memes',
  ];
  final social = {
    'Twitter': 'https://twitter.com/mkobuolys',
    'LinkedIn': 'https://www.linkedin.com/in/mangirdas-kazlauskas',
    'GitHub': 'https://github.com/mkobuolys',
    'YouTube': 'https://www.youtube.com/mkobuolys',
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