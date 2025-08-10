// // InputField.tsx
// import React from "react";

// interface InputFieldProps {
//   type?: string;
//   placeholder?: string;
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function RestaurantInputField({
//   type = "text",
//   placeholder,
//   value,
//   onChange,
// }: InputFieldProps) {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="bg-[#F5F5F5] text-[#9E9E9E] rounded-md p-2 w-full"
//     />
//   );
// }

// RestaurantInputField.tsx
import React from "react";

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // 👈 new
  id?: string; // 👈 for accessibility (error <p> links to input)
}

export default function RestaurantInputField({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  id,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-[#F5F5F5] text-[#9E9E9E] rounded-md p-2 w-full border ${
          error ? "border-red-500" : "border-transparent"
        }`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1 mb-2">
          {error}
        </p>
      )}
    </div>
  );
}
