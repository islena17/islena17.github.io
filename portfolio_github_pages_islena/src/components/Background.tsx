export function Background() {
  return (
    <>
      <div className="mouse-glow" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="css-particles" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ '--i': index } as React.CSSProperties} />
        ))}
      </div>
    </>
  );
}
