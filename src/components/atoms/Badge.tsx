interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return <div className="bg-text-green-100 p-4"> {text} </div>;
};
