import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SearchUsers } from "../../http-requests/api";
import HomeLayout from "../../layouts/home/home";

const Search = ({ token }) => {
  const { searchValue } = useSelector((state) => state.searchReducer);
  return <div>Search</div>;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
}

export default Search;

Search.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
