import React from "react";

function InputField({ icon, type, placeholder }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-3.5 text-gray-400">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          bg-black/40
          border
          border-white/20
          rounded-xl
          py-3
          pl-12
          pr-4
          text-white
          outline-none
          focus:border-cyan-400
          transition
        "
      />
    </div>
  );
}

export default InputField;