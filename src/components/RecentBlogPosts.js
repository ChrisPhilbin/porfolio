import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentPosts } from "../store/actions/PostActions";
import { Loading } from "../utils/Loading";
import ShowBlogPost from "./blog/ShowBlogPost.tsx";

const RecentBlogPosts = () => {
  const dispatch = useDispatch();

  const { posts, loading, hasErrors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchRecentPosts());
  }, [dispatch]);

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
            <ShowBlogPost post={post} key={post.id} />
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RecentBlogPosts;
