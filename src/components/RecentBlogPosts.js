import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentPosts } from "../store/actions/PostActions";

const RecentBlogPosts = () => {
  const dispatch = useDispatch();

  let { posts, loading, hasErrors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchRecentPosts());
  }, []);

  console.log(posts, loading, hasErrors, "current posts");

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 py-4 bg-black">
      {posts.length ? (
        <>
          {posts.map((post) => (
            <div
              key={post.id}
              class="relative bg-white rounded-xl w-4/5 ml-auto mr-auto my-4 p-4"
            >
              <p class="text-lg font-bio font-bold text-gray-700 text-center mb-2">
                {post.title.rendered}
              </p>
              <p
                class="font-bio text-gray-700 tracking-wide"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></p>
              <p class="block text-sm font-bio text-gray-400 tracking-wide italic mt-2">
                Posted on: {new Date(post.date).toDateString()}
              </p>
              <div class="h-8"></div>
              <p class="block absolute bottom-4 right-8 font-bio font-semibold">
                <a href={post.link} target="new">
                  Read more...
                </a>
              </p>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecentBlogPosts;
