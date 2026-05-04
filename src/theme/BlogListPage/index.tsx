import clsx from "clsx";
import { JSX } from "react";

import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogLayout from "@theme/BlogLayout";
import type { Props } from "@theme/BlogListPage";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";
import BlogListPaginator from "@theme/BlogListPaginator";
import BlogPostItems from "@theme/BlogPostItems";
import Heading from "@theme/Heading";
import SearchMetadata from "@theme/SearchMetadata";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink, page } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const isFirstPage = !page || page === 1;
  const baseTitle = isBlogOnlyMode ? siteTitle : blogTitle;
  const title = isFirstPage ? baseTitle : `${baseTitle} — page ${page}`;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  const { blogDescription, blogTitle, page } = metadata;
  const isFirstPage = !page || page === 1;
  const heading = isFirstPage ? blogTitle : `${blogTitle} — page ${page}`;
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--lg">
        <Heading as="h1">{heading}</Heading>
        <Heading as="h2">{blogDescription}</Heading>
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
