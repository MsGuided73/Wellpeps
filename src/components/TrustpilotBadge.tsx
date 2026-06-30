export function TrustpilotBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] hidden md:block transition-all duration-500 ease-out translate-y-8 opacity-0 pointer-events-none">
      <span className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.08)] whitespace-nowrap">
        <span
          className="inline-flex items-center gap-[1px] text-[10px]"
          aria-label="5 out of 5 stars"
        >
          <span className="text-[#00B67A]">★</span>
          <span className="text-[#00B67A]">★</span>
          <span className="text-[#00B67A]">★</span>
          <span className="text-[#00B67A]">★</span>
          <span className="text-[#00B67A]">★</span>
        </span>
        <span className="text-xs font-bold text-gray-800">Excellent</span>
        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
          on Trustpilot
        </span>
      </span>
    </div>
  );
}
