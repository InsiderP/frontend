import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const Errmsg = ({ err, name = "nameOftag" }) => {
  return (
    <div className="w-full mt-[2px]">
      <ErrorMessage
        errors={err}
        name={name}
        render={({ message }) => (
          <p className="text-red-400 text-[12px]">{message}</p>
        )}
      />
    </div>
  );
};

export default Errmsg;
