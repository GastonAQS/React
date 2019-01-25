import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds);

  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
// eslint-disable-next-line
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
