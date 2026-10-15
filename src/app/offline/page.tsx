export default function OfflinePage() {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-charcoal mb-4">
          Anda Offline
        </h1>
        <p className="text-stone mb-6">
          Sepertinya koneksi internet Anda terputus. Beberapa fitur mungkin tidak tersedia.
        </p>
        <p className="text-sm text-stone">
          Data yang telah Anda simpan untuk offline masih dapat diakses.
        </p>
      </div>
    </main>
  );
}
