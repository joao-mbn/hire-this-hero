import { cn } from "@/lib/utils";

interface SemiCircularProgressProps {
  progress: number; // 0-100 percentage
  color?: string; // Tailwind stroke color class
  backgroundColor?: string; // Tailwind stroke color class for background
  size?: {
    width: number;
    height: number;
    radius: number;
  };
  strokeWidth?: number;
  rotation?: number; // degrees
}

export function SemiCircularProgress({
  progress,
  color = "stroke-old-gold-600",
  backgroundColor = "stroke-old-gold-300",
  size = { width: 280, height: 140, radius: 120 },
  strokeWidth = 12,
  rotation = 0,
}: SemiCircularProgressProps) {
  // Calculate the stroke-dasharray for the progress
  const circumference = Math.PI * size.radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
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
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${strokeDasharray} ${strokeDasharray}`}
        strokeDashoffset={strokeDashoffset}
        className={cn("transition-all duration-300", color)}
      />
    </svg>
  );
}
