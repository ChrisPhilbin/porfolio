import * as actions from "../actions/PostActions";

export const initialPostsState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialPostsState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
