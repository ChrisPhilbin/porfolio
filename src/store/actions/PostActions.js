export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const fetchRecentPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const response = await fetch(
        `https://chrisphilbin.net/wp-json/wp/v2/posts?per_page=3`
      );
      if (response.ok) {
        const posts = await response.json();
        dispatch(getPostsSuccess(posts));
      }
    } catch (error) {
      dispatch(getPostsFailure(error));
    }
  };
};
