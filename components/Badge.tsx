interface BadgeProps {
  title: string;
}

const Badge = ({ title }: BadgeProps) => {
  return (
    <div
      className={`ml-2 capitalize text-white rounded-xl text-xs py-[1px]  px-2 ${
        title.toLowerCase() === "new!" ? "bg-desaturatedDark " : "bg-black"
      }`}
    >
      {title}
    </div>
  );
};

export default Badge;
