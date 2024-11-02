import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import type { WrapperProps } from "@docusaurus/types";
import { SubscriptionForm } from "@site/src/components/SubscriptionForm";
import Content from "@theme-original/BlogPostItem/Content";
import type ContentType from "@theme/BlogPostItem/Content";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
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
