import Link from 'next/link';
import { MountainCard } from '@/components/mountain/MountainCard';
import { Mountain } from '@/types/database';

// Data statis sementara untuk demo UI
const demoMountains: Mountain[] = [
  {
    id: '1',
    slug: 'lawu',
    name: 'Lawu',
    elevation_mdpl: 3265,
    province: 'Jawa Tengah',
    regency: 'Karanganyar',
    description: 'Gunung Lawu merupakan gunung berapi kerucut yang sudah tidak aktif.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    slug: 'arjuno',
    name: 'Arjuno',
    elevation_mdpl: 3339,
    province: 'Jawa Timur',
    regency: 'Malang',
    description: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    slug: 'butak',
    name: 'Butak',
    elevation_mdpl: 2868,
    province: 'Jawa Timur',
    regency: 'Batu',
    description: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
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
  {
    id: '5',
    slug: 'penanggungan',
    name: 'Penanggungan',
    elevation_mdpl: 1653,
    province: 'Jawa Timur',
    regency: 'Mojokerto',
    description: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    slug: 'kawi',
    name: 'Kawi',
    elevation_mdpl: 2551,
    province: 'Jawa Timur',
    regency: 'Malang',
    description: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    slug: 'kelud',
    name: 'Kelud',
    elevation_mdpl: 1731,
    province: 'Jawa Timur',
    regency: 'Kediri',
    description: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal mb-3">
            Help, Pendaki
          </h1>
          <p className="text-lg text-stone">
            Direktori gunung dan jalur pendakian di Indonesia
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <p className="text-2xl font-bold text-forest">{demoMountains.length}</p>
            <p className="text-sm text-stone">Gunung</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <p className="text-2xl font-bold text-forest">0</p>
            <p className="text-sm text-stone">Jalur</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <p className="text-2xl font-bold text-trail">0</p>
            <p className="text-sm text-stone">Buka</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <p className="text-2xl font-bold text-alert">0</p>
            <p className="text-sm text-stone">Tutup</p>
          </div>
        </div>

        {/* Mountains Grid */}
        <h2 className="text-2xl font-semibold text-charcoal mb-4">
          Daftar Gunung
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demoMountains.map((mountain) => (
            <MountainCard key={mountain.id} mountain={mountain} />
          ))}
        </div>
      </div>
    </main>
  );
}
