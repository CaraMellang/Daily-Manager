import React, { useState } from "react";
import { Route } from "react-router";
import Home from "./Homt";
import SignForm from "./SignForm";

const Main = () => {
  const [isSign, setIsSign] = useState(true);

  const onSignHandler = () => {
    setIsSign(false);
  };
  return (
    <div>
      {isSign ? (
        <Route
          path={`/`}
          render={() => <SignForm onSignHandler={onSignHandler} />}
          exact
        />
      ) : (
        <Route path={`/`} component={Home} exact />
      )}
    </div>
  );
};

export default Main;
