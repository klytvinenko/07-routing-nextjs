import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

interface FilterPageProps {
  params: Promise<{ slug: string[] }>;
}

const FilterPage = async ({ params }: FilterPageProps) => {
  const { slug } = await params;
  const tag = slug?.[0]; //|| "all"

  const responce = await fetchNotes("", 1, tag === "all" ? undefined : tag);
  console.log(responce);
  
  
  return <NoteList notes={responce.notes}/>;

};

export default FilterPage;
