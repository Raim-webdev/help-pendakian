import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
      <header className="bg-forest text-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            Help, Pendaki
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:text-sunrise transition-colors">
              Beranda
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-charcoal text-white mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-semibold">Help, Pendaki</p>
              <p className="text-sm text-stone">
                Aplikasi PWA untuk pendaki gunung Indonesia
              </p>
            </div>
            <p className="text-sm text-stone">
              © 2026 Help, Pendaki
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
