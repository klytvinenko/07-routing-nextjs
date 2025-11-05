
import NotesClient from "../../Notes.client";

interface FilterPageProps {
  params: Promise<{ slug: string[] }>;

}

const FilterPage = async ({ params }: FilterPageProps) => {
  const { slug } = await params;
  const tag = slug?.[0]; //|| "all"

  // const responce = await fetchNotes("", 1, tag === "all" ? undefined : tag);

  return (
    <div>
      <NotesClient key={tag ?? "all"} tag={tag} />
    </div>
  );
};

export default FilterPage;
