export default function SectionTitle({ label, title }) {
  return (
    <div className="text-start mb-16">
      {/* Label */}
      <p className="text-md text-primary uppercase tracking-widest mb-3">
        {label}
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>

      <div className="w-15 h-0.5 ms-3 my-4 bg-primary"></div>
    </div>
  );
}
