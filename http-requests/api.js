const dev = process.env.NODE_ENV === "development";

const url = dev
  ? "http://localhost:5000/api/v1"
  : "https://bonds-backend-project.herokuapp.com/api/v1";

export const Sign_In = url + "/auth/login";
export const Sign_Up = url + "/auth/register";

export const FriendsPosts = url + "/post/friends/posts";
export const PostBase = url + "/post";

export const GetUser = url + "/user";

export const GetFriends = url + "/user/friends";

export const GetConversation = url + "/conversation";

export const GetChat = url + "/chat";

export const PostComment = url + "/comment";
export const GetComments = url + "/comment";

export const Forgotpassword = url + "/auth/forgot/password";
export const Resetpassword = url + "/auth/reset/password";
