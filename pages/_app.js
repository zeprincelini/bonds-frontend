import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store/store";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
