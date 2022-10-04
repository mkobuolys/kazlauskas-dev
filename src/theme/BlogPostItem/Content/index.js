import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import Content from "@theme-original/BlogPostItem/Content";
import { SubscriptionForm } from "@site/src/components/SubscriptionForm";

export default function ContentWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <Content {...props} />
      {isBlogPostPage && (
        <>
          <hr />
          <p>Save trees. Stay SOLID. Thanks for reading.</p>
          <SubscriptionForm />
        </>
      )}
    </>
  );
}
