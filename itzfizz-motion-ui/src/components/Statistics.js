export default function Statistics() {
  const stats = [
    { label: "Performance", value: "99%" },
    { label: "Engagement", value: "85%" },
    { label: "Satisfaction", value: "100%" },
  ];

  return (
    <div className="statistics-container flex flex-wrap justify-center gap-8 mt-12 z-10 relative">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item flex flex-col items-center opacity-0">
          <span className="text-3xl md:text-5xl font-sans font-extrabold text-[#FF4C29]">
            {stat.value}
          </span>
          <span className="text-sm md:text-base font-sans text-gray-400 mt-2 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
