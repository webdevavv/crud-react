import React from "react";
import { Loader } from "semantic-ui-react";

function Spinner() {
  return (
    <>
      <Loader active inline="centered" size="huge" />
    </>
  );
}

export default Spinner;
