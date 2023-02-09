import { forwardRef } from "react";

interface ICheckBox {
  label?: string;
}
export const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(
  (props, ref) => {
    const { label, ...rest } = props;
    return (
      <div>
        <label htmlFor="checkbox-3" className="sr-only">
          {label}{" "}
        </label>
        <input
          className="accent-primary-600 rounded-lg border border-solid border-gray-300 w-5 h-5"
          ref={ref}
          type="checkbox"
          aria-describedby={label}
          {...rest}
        />
      </div>
    );
  },
);

CheckBox.displayName = "CheckBox";
