type Props = {
  index: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <header className="section-header">
      <p className="eyebrow">{index}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
