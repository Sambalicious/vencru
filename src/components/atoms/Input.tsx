import { forwardRef, InputHTMLAttributes } from "react";
import { useTextField } from "react-aria";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { name, label, type } = props;

  const { ...rest } = props;

  let { labelProps, inputProps } = useTextField(
    { name, label, type },
    ref as any,
  );

  return (
    <div>
      <label
        {...labelProps}
        className="text-gray-200"
        id={label}
        htmlFor={name}
      >
        {label}{" "}
      </label>
      <input
        id={name}
        className="placeholder-main-100 text-main-100 bg-gray-200 mt-3  py-3 w-full pl-10 border-none outline-none "
        type={type}
        {...inputProps}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

Input.displayName = "Input";
