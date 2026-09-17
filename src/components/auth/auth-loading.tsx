import { LoaderIcon } from "lucide-react";
import React from "react";

const AuthLoading = ({ label = "Verifying Account" }) => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex gap-3">
        <LoaderIcon className="size-6 animate-spin" />
        {label}
      </div>
    </div>
  );
};

export default AuthLoading;
