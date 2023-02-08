interface SectionHeaderProps {
  title: string;
  subTitle?: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <div>
      <h4 className="text-gray-900 font-normal text-lg">{title}</h4>
      <p className="text-gray-500 font-normal text-sm">{subTitle} </p>
    </div>
  );
};
