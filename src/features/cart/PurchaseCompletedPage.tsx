export function PurchaseCompletedPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-6 flex flex-col items-center justify-center rounded w-2/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#22C55E" />
          <path
            d="M20 34L28 42L44 26"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-3xl font-semibold mt-4">¡Compra completada!</h1>
      </div>
    </div>
  )
}