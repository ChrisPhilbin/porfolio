import React from "react";

const ShowBlogPost = ({ post }: PostProps) => {
  return (
    <div
      key={post.id}
      className="relative bg-slate-100 rounded-xl w-4/5 ml-auto mr-auto my-4 p-4"
    >
      <p className="text-lg font-bio font-bold text-gray-700 text-center mb-2">
        {post.title.rendered}
      </p>
      <p
        className="font-bio text-gray-700 tracking-wide"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      ></p>
      <p className="block text-sm font-bio text-gray-400 tracking-wide italic mt-2">
        Posted on: {new Date(post.date).toDateString()}
      </p>
      <div className="h-8"></div>
      <p className="block absolute bottom-4 right-8 font-bio font-semibold">
        <a href={post.link} target="new">
          Read more...
        </a>
      </p>
    </div>
  );
};

type PostProps = {
  post: {
    id: number;
    date: Date;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    link: string;
  };
};

export default ShowBlogPost;
