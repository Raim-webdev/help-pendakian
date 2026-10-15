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
    description: null,
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
    description: null,
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
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Help, Pendaki
        </h1>
        <p className="text-stone mb-8">
          Direktori gunung dan jalur pendakian di Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demoMountains.map((mountain) => (
            <MountainCard key={mountain.id} mountain={mountain} />
          ))}
        </div>
      </div>
    </main>
  );
}
