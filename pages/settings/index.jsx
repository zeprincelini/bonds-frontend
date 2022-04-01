import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { GetUser } from "../../http-requests/api";

import HomeLayout from "../../layouts/home/home";
import styles from "../../styles/settings.module.css";

const Settings = ({ token, id }) => {
  const [loading, setLoading] = useState(false);
  const updateUser = async () => {
    setLoading(true);
    try {
      await axios.put(
        `${GetUser}/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      toast.success("Profile updated successfully");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className={styles.settingsContainer}>
        <div className={styles.settingsWrapper}>
          <h4 className={styles.settings_header}>Edit Profile</h4>
          <form onSubmit={updateUser} className={styles.settingForm}>
            <div className={styles.input_groups}>
              <label htmlFor="username" className={styles.label}>
                username
              </label>
              <input
                type="text"
                id="username"
                className={styles.settingsInput}
              />
            </div>
            <hr style={{ width: "100%", opacity: 0.5 }} />
            <div className={styles.input_groups}>
              <label htmlFor="country" className={styles.label}>
                country
              </label>
              <input
                type="text"
                id="country"
                className={styles.settingsInput}
              />
            </div>
            <hr style={{ width: "100%", opacity: 0.5 }} />
            <div className={styles.input_groups}>
              <label htmlFor="password" className={styles.label}>
                password
              </label>
              <input
                type="password"
                id="password"
                className={styles.settingsInput}
              />
            </div>
            <hr style={{ width: "100%", opacity: 0.5 }} />
            <button type="submit" className={styles.button}>
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;

export const getServerSideProps = async (context) => {
  const token = context.req.cookies["token"];
  const id = context.req.cookies["id"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { token, id },
  };
};

Settings.getLayout = function pageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
