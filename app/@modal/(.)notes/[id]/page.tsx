import NotePreview from "@/components/NotePreview/NotePreview";

interface ModalProps {
  //params: Promise<{ id: string }>;
  params: { id: string };
}

const Modal = async ({ params }: ModalProps) => {
  const { id } = params;
  //const details = await fetchNoteById(id);
  return <NotePreview id={id} />;
};

export default Modal;
