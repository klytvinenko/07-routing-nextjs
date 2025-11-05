'use client'
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import { useEffect } from "react";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";


interface NotePreviewProps {
  id: string;
}
const NotePreview = ({ id }: NotePreviewProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") router.back();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div className={css.backdrop} onClick={() => router.back()}>
      <div className={css.modal}>
        <NoteDetailsClient id={id}/>
      </div>
    </div>
  );
};
export default NotePreview;
