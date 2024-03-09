import React from 'react';

export default function PostMainText({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="md:max-w-6/10">
      <article
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {children}
    </div>
  );
}
