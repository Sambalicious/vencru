interface RadioProps {
  label?: string;
  checked: boolean;
  onChange: () => void;
}

export const Radio = ({ label, checked, onChange }: RadioProps) => {
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        onChange={onChange}
        className="accent-primary-600"
        type="radio"
      />
      <label htmlFor={label}>
        <span className="font-normal text-sm text-gray-700 ml-2 ">
          {label}{" "}
        </span>
      </label>
    </div>
  );
};
