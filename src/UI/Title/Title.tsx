interface TitpleProps {
  title: string;
}
export const Title = ({ title }: TitpleProps) => {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h2>
  );
};
