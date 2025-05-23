export default function DumbbellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M8 7h8" />
      <path d="M8 17h8" />
      <path d="M4 7v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" />
      <path d="M4 17v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
    </svg>
  )
}
