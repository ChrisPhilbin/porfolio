import React from "react";

const ShowBlogPost = ({ post }) => {
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
      <p className="block italic text-sm font-bio text-gray-400 tracking-wide mt-2">
        Posted on: {new Date(post.date).toDateString()}
      </p>
      <div className="h-8"></div>
      <div className="absolute right-8 bottom-2">
        <a href={post.link} target="new">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default ShowBlogPost;
