export function VeloLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M16 4L8 20H12L16 28L24 12H20L16 4Z" fill="currentColor" />
      </svg>
      <span className="text-2xl font-bold tracking-tight">Velo</span>
    </div>
  )
}
