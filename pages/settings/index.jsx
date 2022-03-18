import React from "react";
import toast, { Toaster } from "react-hot-toast";
import HomeLayout from "../../layouts/home/home";
import styles from "../../styles/settings.module.css";

const Settings = () => {
  const updateUser = () => {};
  return (
    <>
      <Toaster />
      <div className="setting-container">
        <h4 className={styles.settings_header}>Edit Profile</h4>
        <form onSubmit={updateUser} className={styles.settingForm}>
          <div className={styles.input_groups}>
            <label htmlFor="username" className={styles.label}>
              username
            </label>
            <input type="text" id="username" className={styles.settingsInput} />
          </div>
          <div className={styles.input_groups}>
            <label htmlFor="country" className={styles.label}>
              country
            </label>
            <input type="text" id="country" className={styles.settingsInput} />
          </div>
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
          <button type="submit" className={styles.button}>
            update
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;

Settings.getLayout = function pageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
