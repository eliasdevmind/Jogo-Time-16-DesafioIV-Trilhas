import React from 'react';

function Input({ label, type, placeholder, name, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-xl">{label}</label>
      <input
        className="
          px-2 py-1
          border-4 rounded-md
          invalid:border-red-500
          focus:border-black border-gray-100 text-black"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) && value && (
        <span className="text-red-500">Por favor, insira um email válido.</span>
      )}
    </div>
  );
}

export default Input;
