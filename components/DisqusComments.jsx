import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ url, identifier, title }) => {
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  };

  return (
    <div className="mt-8">
      <DiscussionEmbed key={identifier} shortname="vivekkj" config={disqusConfig } />
    </div>
  );
};

export default DisqusComments;
