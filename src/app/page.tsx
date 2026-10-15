import { createClient } from '@/lib/supabase/server';
import { MountainCard } from '@/components/mountain/MountainCard';
import { Mountain } from '@/types/database';

export default async function HomePage() {
  const supabase = await createClient();
  const { data: mountainsData, error } = await supabase
    .from('mountains')
    .select('*')
    .order('name');

  const mountains = mountainsData as Mountain[] | null;

  if (error) {
    console.error('Error fetching mountains:', error);
    return (
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-charcoal mb-4">
            Help, Pendaki
          </h1>
          <p className="text-stone">
            Terjadi kesalahan saat memuat data gunung. Silakan coba lagi nanti.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Help, Pendaki
        </h1>
        <p className="text-stone mb-8">
          Direktori gunung dan jalur pendakian di Indonesia
        </p>

        {mountains && mountains.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mountains.map((mountain) => (
              <MountainCard key={mountain.id} mountain={mountain} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-stone">Belum ada data gunung.</p>
          </div>
        )}
      </div>
    </main>
  );
}
