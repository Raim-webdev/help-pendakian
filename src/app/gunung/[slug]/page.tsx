import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Mountain, BasecampRoute } from '@/types/database';

interface MountainDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MountainDetailPage({ params }: MountainDetailPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: mountain, error: mountainError } = await supabase
    .from('mountains')
    .select('*')
    .eq('slug', slug)
    .single();

  if (mountainError || !mountain) {
    notFound();
  }

  const typedMountain = mountain as Mountain;

  const { data: routes, error: routesError } = await supabase
    .from('basecamp_routes')
    .select('*')
    .eq('mountain_id', typedMountain.id)
    .order('name');

  if (routesError) {
    console.error('Error fetching routes:', routesError);
  }

  const typedRoutes = routes as BasecampRoute[] | null;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          {typedMountain.name}
        </h1>

        {typedMountain.elevation_mdpl && (
          <p className="text-lg text-stone mb-4">
            {typedMountain.elevation_mdpl.toLocaleString('id-ID')} mdpl
          </p>
        )}

        {(typedMountain.province || typedMountain.regency) && (
          <p className="text-stone mb-6">
            {[typedMountain.regency, typedMountain.province].filter(Boolean).join(', ')}
          </p>
        )}

        {typedMountain.description && (
          <p className="text-charcoal mb-8">{typedMountain.description}</p>
        )}

        <h2 className="text-2xl font-semibold text-charcoal mb-4">
          Jalur Pendakian
        </h2>

        {typedRoutes && typedRoutes.length > 0 ? (
          <div className="space-y-4">
            {typedRoutes.map((route) => (
              <div
                key={route.id}
                className="p-4 bg-white rounded-xl border border-stone-200"
              >
                <h3 className="font-semibold text-charcoal">{route.name}</h3>
                {route.difficulty && (
                  <p className="text-sm text-stone mt-1">
                    Tingkat kesulitan: {route.difficulty}
                  </p>
                )}
                {route.status && (
                  <p className="text-sm mt-1">
                    Status:{" "}
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        route.status === 'open'
                          ? 'bg-green-100 text-green-800'
                          : route.status === 'closed'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {route.status === 'open'
                        ? 'Buka'
                        : route.status === 'closed'
                        ? 'Tutup'
                        : 'Terbatas'}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-parchment rounded-xl text-center">
            <p className="text-stone">Belum ada data jalur.</p>
          </div>
        )}
      </div>
    </main>
  );
}
