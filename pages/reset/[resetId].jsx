import React from "react";
import AuthLayout from "../../layouts/auth/auth";

const ResetPassword = ({ user }) => {
  return <div>{user.username}</div>;
};

// export const getServerSideProps = async (context) => {
//   const userId = context.params.resetId;

//   if (token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   const res = await axios.get(`${GetUser}/${userId}`);
//   const data = res.data.data;

//   return {
//     props: { user: data },
//   };
// };

export default ResetPassword;

ResetPassword.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
