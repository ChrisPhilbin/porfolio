import React from "react";
import "./App.css";
import MainIntro from "./components/MainIntro";
import SideProjects from "./components/SideProjects";
import TopNav from "./navigation/TopNav";
import rootReducer from "./store/reducers/Index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RecentBlogPosts from "./components/RecentBlogPosts";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

function App() {
  return (
    <>
      <Provider store={store}>
        <TopNav />

        <MainIntro />

        <SideProjects />

        <RecentBlogPosts />
      </Provider>
    </>
  );
}

export default App;
