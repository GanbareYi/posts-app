import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

/*
  TODO: Update the below so that the components show on the appropriate route.
  
  Hint: you can use the `useRouteMatch()` hook from "react-router-dom" to get the current URL path

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const PostList = ({ posts }) => {
  const match = useRouteMatch();

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route exact path={`${match.path}/:postId`}>
            <Post posts={posts} />
          </Route>
          <Route path={match.path}>
            <NoPostSelectedMessage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PostList;
