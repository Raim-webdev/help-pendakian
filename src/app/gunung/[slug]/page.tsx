import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Mountain, BasecampRoute } from '@/types/database';

// Demo data untuk testing UI
const demoMountains: Record<string, Mountain> = {
  lawu: {
    id: '1',
    slug: 'lawu',
    name: 'Lawu',
    elevation_mdpl: 3265,
    province: 'Jawa Tengah',
    regency: 'Karanganyar',
    description: 'Gunung Lawu merupakan gunung berapi kerucut yang sudah tidak aktif. Terletak di perbatasan Jawa Tengah dan Jawa Timur.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  arjuno: {
    id: '2',
    slug: 'arjuno',
    name: 'Arjuno',
    elevation_mdpl: 3339,
    province: 'Jawa Timur',
    regency: 'Malang',
    description: 'Gunung Arjuno adalah gunung berapi kerucut yang terletak di Jawa Timur.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  butak: {
    id: '3',
    slug: 'butak',
    name: 'Butak',
    elevation_mdpl: 2868,
    province: 'Jawa Timur',
    regency: 'Batu',
    description: 'Gunung Butak merupakan gunung berapi yang terletak di Jawa Timur.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  rinjani: {
    id: '4',
    slug: 'rinjani',
    name: 'Rinjani',
    elevation_mdpl: 3726,
    province: 'Nusa Tenggara Barat',
    regency: 'Lombok',
    description: 'Gunung Rinjani adalah gunung berapi aktif kedua tertinggi di Indonesia.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  penanggungan: {
    id: '5',
    slug: 'penanggungan',
    name: 'Penanggungan',
    elevation_mdpl: 1653,
    province: 'Jawa Timur',
    regency: 'Mojokerto',
    description: 'Gunung Penanggungan merupakan gunung berapi kerucut yang sudah tidak aktif.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  kawi: {
    id: '6',
    slug: 'kawi',
    name: 'Kawi',
    elevation_mdpl: 2551,
    province: 'Jawa Timur',
    regency: 'Malang',
    description: 'Gunung Kawi merupakan gunung berapi yang terletak di Jawa Timur.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  kelud: {
    id: '7',
    slug: 'kelud',
    name: 'Kelud',
    elevation_mdpl: 1731,
    province: 'Jawa Timur',
    regency: 'Kediri',
    description: 'Gunung Kelud adalah gunung berapi aktif yang terletak di Jawa Timur.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
};

const demoRoutes: Record<string, BasecampRoute[]> = {
  lawu: [
    {
      id: '1',
      mountain_id: '1',
      slug: 'via-cemoro-sewu',
      name: 'Via Cemoro Sewu',
      ticket_price_idr: 15000,
      ticket_note: null,
      basecamp_contact: null,
      difficulty: 'intermediate',
      status: 'open',
      status_note: null,
      status_updated_at: null,
      info_source_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '2',
      mountain_id: '1',
      slug: 'via-cemoro-kandang',
      name: 'Via Cemoro Kandang',
      ticket_price_idr: 15000,
      ticket_note: null,
      basecamp_contact: null,
      difficulty: 'intermediate',
      status: 'open',
      status_note: null,
      status_updated_at: null,
      info_source_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  rinjani: [
    {
      id: '3',
      mountain_id: '4',
      slug: 'via-senaru',
      name: 'Via Senaru',
      ticket_price_idr: 50000,
      ticket_note: 'WNI hari kerja',
      basecamp_contact: null,
      difficulty: 'expert',
      status: 'open',
      status_note: null,
      status_updated_at: null,
      info_source_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '4',
      mountain_id: '4',
      slug: 'via-semabalun',
      name: 'Via Semabalun',
      ticket_price_idr: 50000,
      ticket_note: 'WNI hari kerja',
      basecamp_contact: null,
      difficulty: 'expert',
      status: 'open',
      status_note: null,
      status_updated_at: null,
      info_source_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
};

interface MountainDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MountainDetailPage({ params }: MountainDetailPageProps) {
  const { slug } = await params;
  
  // Gunakan demo data untuk testing UI
  const mountain = demoMountains[slug];
  
  if (!mountain) {
    notFound();
  }

  const routes = demoRoutes[slug] || [];

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <Link href="/" className="text-sage hover:text-forest transition-colors">
            ← Beranda
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal mb-2">
            {mountain.name}
          </h1>

          {mountain.elevation_mdpl && (
            <p className="text-lg text-stone mb-2">
              {mountain.elevation_mdpl.toLocaleString('id-ID')} mdpl
            </p>
          )}

          {(mountain.province || mountain.regency) && (
            <p className="text-stone mb-4">
              {[mountain.regency, mountain.province].filter(Boolean).join(', ')}
            </p>
          )}

          {mountain.description && (
            <p className="text-charcoal">{mountain.description}</p>
          )}
        </div>

        {/* Routes Section */}
        <h2 className="text-2xl font-semibold text-charcoal mb-4">
          Jalur Pendakian
        </h2>

        {routes.length > 0 ? (
          <div className="space-y-4">
            {routes.map((route) => (
              <div
                key={route.id}
                className="p-4 bg-white rounded-xl border border-stone-200"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-charcoal">{route.name}</h3>
                    {route.difficulty && (
                      <p className="text-sm text-stone mt-1">
                        Tingkat kesulitan:{' '}
                        <span className="capitalize">{route.difficulty}</span>
                      </p>
                    )}
                    {route.ticket_price_idr && (
                      <p className="text-sm text-stone mt-1">
                        Tiket: Rp {route.ticket_price_idr.toLocaleString('id-ID')}
                        {route.ticket_note && ` (${route.ticket_note})`}
                      </p>
                    )}
                  </div>
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      route.status === 'open'
                        ? 'bg-trail/10 text-trail'
                        : route.status === 'closed'
                        ? 'bg-alert/10 text-alert'
                        : 'bg-sunrise/10 text-sunrise'
                    }`}
                  >
                    {route.status === 'open'
                      ? 'Buka'
                      : route.status === 'closed'
                      ? 'Tutup'
                      : 'Terbatas'}
                  </span>
                </div>
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
