import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

export const CustomPasswordInput = (props: { placeholder: string }) => {
  const { placeholder } = props;

  const [showPassword, setShowPassword] = useState(false);

  const eyeIcon =
    showPassword === true ? (
      <Eye
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-400"
      />
    ) : (
      <EyeOff
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-400"
      />
    );

  return (
    // <div className="flex items-center rounded-md border">
    //   <input
    //     className="rounded-md p-1 placeholder:text-xs focus:border-violet-400 focus:outline-violet-400"
    //     type={type}
    //     placeholder={placeholder}
    //   />
    // </div>
    <label className="input input-bordered flex items-center gap-2">
      <input
        type={showPassword === true ? "text" : "password"}
        className="grow"
        placeholder={placeholder}
      />
      {eyeIcon}
    </label>
  );
};
