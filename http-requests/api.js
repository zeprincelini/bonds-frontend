const dev = process.env.NODE_ENV === "development";

const url = dev ? "http://localhost:5000/api" : "";

export const Sign_In = url + "/auth/login";
export const Sign_Up = url + "/auth/register";

export const FriendsPosts = url + "/post/friends/posts";

export const GetUser = url + "/user";
