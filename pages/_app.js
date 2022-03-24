import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store/store";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {loaded ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster />
            {Component.getLayout ? (
              Component.getLayout(<Component {...pageProps} />)
            ) : (
              <Component {...pageProps} />
            )}
          </PersistGate>
        </Provider>
      ) : (
        <div className="pre-loader">
          <div className="pre-loader-container">
            <div className="ball one"></div>
            <div className="ball two"></div>
            <div className="ball three"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
