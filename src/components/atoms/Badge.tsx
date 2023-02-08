interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="bg-green-100 px-5 py-1 w-max  text-success-700 rounded-2xl font-normal text-xs">
      {" "}
      {text}{" "}
    </div>
  );
};
