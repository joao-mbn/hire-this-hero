interface GradientStop {
  offset: string;
  color: string;
  opacity?: number;
}

interface SemiCircularProgressProps {
  progress: number;
  backgroundColor?: string;
  gradient: {
    stops: GradientStop[];
    direction?: { x1: string; y1: string; x2: string; y2: string };
  };
  size?: {
    width: number;
    height: number;
    radius: number;
  };
  strokeWidth?: number;
  rotation?: number;
  className?: string;
}

export function SemiCircularProgress({
  progress,
  backgroundColor = "stroke-old-gold-300",
  gradient,
  size = { width: 280, height: 140, radius: 120 },
  strokeWidth = 12,
  rotation = 0,
  className,
}: SemiCircularProgressProps) {
  // Calculate the stroke-dasharray for the progress
  const circumference = Math.PI * size.radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Generate unique ID for the gradient
  const gradientId = `progress-gradient-${Math.random().toString(36)}`;

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={className}
    >
      <linearGradient
        id={gradientId}
        x1={gradient.direction?.x1 || "0%"}
        y1={gradient.direction?.y1 || "0%"}
        x2={gradient.direction?.x2 || "100%"}
        y2={gradient.direction?.y2 || "0%"}
      >
        {gradient.stops.map((stop, index) => (
          <stop
            key={index}
            offset={stop.offset}
            stopColor={stop.color}
            stopOpacity={stop.opacity || 1}
          />
        ))}
      </linearGradient>
      {/* Background semi-circle */}
      <path
        d={`M 20,${size.height} A ${size.radius} ${size.radius} 0 0 1 ${size.width - 20},${size.height}`}
        fill="none"
        strokeWidth={strokeWidth}
        strokeOpacity="0.3"
        strokeLinecap="round"
        className={backgroundColor}
      />
      {/* Progress semi-circle */}
      <path
        d={`M 20,${size.height} A ${size.radius} ${size.radius} 0 0 1 ${size.width - 20},${size.height}`}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${strokeDasharray} ${strokeDasharray}`}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
}
