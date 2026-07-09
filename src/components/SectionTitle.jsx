export default function SectionTitle({ label, title, id }) {
  const showNumberedLabel = Boolean(id);

  return (
    <div className="text-start mb-16">
      {showNumberedLabel && (
        <p className="text-md text-primary uppercase tracking-widest mb-3">
          {`${id} - ${label}`}
        </p>
      )}

      {!showNumberedLabel && label && (
        <p className="text-md text-primary uppercase tracking-widest mb-3">
          {label}
        </p>
      )}

      {title && (
        <h3 className="text-3xl md:text-5xl font-bold text-text">{title}</h3>
      )}

      <div className="w-15 h-0.5 ms-3 my-4 bg-primary"></div>
    </div>
  );
}
