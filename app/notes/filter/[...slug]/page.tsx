interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;
  const currentTag = slug?.[0] || "all";

  return (
    <>
      <h2>Notes filtered by: {currentTag}</h2>
      <p>Here you can show notes filtered by {currentTag}.</p>
    </>
  );
}