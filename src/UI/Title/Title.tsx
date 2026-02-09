interface TitpleProps {
  title: string;
}
export const Title = ({ title }: TitpleProps) => {
  return <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>;
};
