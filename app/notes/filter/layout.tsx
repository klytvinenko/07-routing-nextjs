type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        padding: "20px",
      }}
    >
      <aside
        style={{
          width: "250px",
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {sidebar}
      </aside>

      <main style={{ flex: 1 }}>{children}</main>
    </section>

  );
}
