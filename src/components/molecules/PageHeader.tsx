interface PageHeaderProps {
  title: string;
  subTitle?: string;
}

export const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <div>
      <h2 className="font-medium text-2xl text-gray-900 md:text-3xl">
        {title}
      </h2>
      <p className="text-gray-500 font-normal text-xs md:text-base">
        {subTitle}{" "}
      </p>
    </div>
  );
};
