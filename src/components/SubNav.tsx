export function SubNav() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-gray-100 py-2.5 px-6 md:px-10"
    >
      <ol className="max-w-5xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <li className="flex items-center gap-1.5">
          <a
            className="hover:text-[#0B7A8C] active:opacity-70 transition-colors cursor-pointer whitespace-nowrap"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="flex items-center gap-1.5">
          <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
            <i className="ri-arrow-right-s-line text-gray-300 text-sm transition-transform duration-200"></i>
          </span>
          <span
            className="text-gray-900 font-semibold tracking-tight whitespace-nowrap"
            aria-current="page"
          >
            How It Works
          </span>
        </li>
      </ol>
    </nav>
  );
}
