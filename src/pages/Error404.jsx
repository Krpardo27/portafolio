import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();

  return (
    <div>
      {isRouteErrorResponse(error)
        ? "La página no existe"
        : `Ha ocurrido un error ${error.message}`}
    </div>
  );
};

export default Error404;
