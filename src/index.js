import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./modules/sagas/saga";
import { all, call } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([call(mySaga())]);
// }

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
// const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CookiesProvider>
      {/* <PersistGate loading={null} 
      persistor={persistor}
      > */}
        <App />
      {/* </PersistGate> */}
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
