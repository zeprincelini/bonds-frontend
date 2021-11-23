import React from "react";
import HomeLayout from "../layouts/home/home";

const Inbox = () => {
  return <div>inbox page</div>;
};

export default Inbox;

Inbox.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
