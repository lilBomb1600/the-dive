const COLORS = ["#7aa4ff", "#ff8cc4", "#c3f28a", "#f4b876"];
const STAR_CLIP = "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

function seeded(seed: number) {
  const x = Math.sin(seed * 9973.1) * 43758.5453;
  return x - Math.floor(x);
}

const sparkles = Array.from({ length: 22 }, (_, i) => {
  const left = seeded(i * 3.1 + 1) * 100;
  const top = seeded(i * 5.7 + 2) * 100;
  const size = 6 + seeded(i * 2.3 + 3) * 10;
  const duration = 2.4 + seeded(i * 1.7 + 4) * 2.6;
  const delay = seeded(i * 4.4 + 5) * 5;
  const color = COLORS[i % COLORS.length];
  return { left, top, size, duration, delay, color };
});

const confetti = Array.from({ length: 16 }, (_, i) => {
  const left = seeded(i * 6.3 + 11) * 100;
  const size = 6 + seeded(i * 3.9 + 12) * 5;
  const tall = size * (1.4 + seeded(i * 2.1 + 13));
  const duration = 9 + seeded(i * 5.5 + 14) * 8;
  const delay = seeded(i * 7.7 + 15) * 12;
  const rotate = seeded(i * 8.8 + 16) * 360;
  const color = COLORS[(i + 2) % COLORS.length];
  return { left, size, tall, duration, delay, rotate, color };
});

export function AmbientFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[52] overflow-hidden" aria-hidden>
      {sparkles.map((s, i) => (
        <div
          key={`s-${i}`}
          className="absolute animate-sparkle"
          style={
            {
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              clipPath: STAR_CLIP,
              filter: `drop-shadow(0 0 6px ${s.color})`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              opacity: 0,
              "--sparkle-opacity": 0.85,
            } as React.CSSProperties
          }
        />
      ))}
      {confetti.map((c, i) => (
        <div
          key={`c-${i}`}
          className="absolute animate-confetti-fall"
          style={{
            left: `${c.left}%`,
            top: 0,
            width: c.size,
            height: c.tall,
            backgroundColor: c.color,
            borderRadius: 1,
            transform: `rotate(${c.rotate}deg)`,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
