import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentPosts } from "../store/actions/PostActions";

const RecentBlogPosts = () => {
  const dispatch = useDispatch();

  let { posts, loading, hasErrors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchRecentPosts());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4 bg-gradient-to-r from-indigo-900 to-indigo-800">
      <div className="md:col-span-3">
        <p className="font-bio text-4xl font-bold text-white text-center">
          My Recent Blog Posts
        </p>
      </div>
      {posts.length ? (
        <>
          {posts.map((post) => (
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
          ))}
        </>
      ) : (
        <div className="md:col-span-3 flex items-center justify-center space-x-2 animate-pulse ml-auto mr-auto">
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default RecentBlogPosts;
