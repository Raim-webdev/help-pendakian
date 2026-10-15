import Link from 'next/link';
import { Mountain } from '@/types/database';

interface MountainCardProps {
  mountain: Mountain;
}

export function MountainCard({ mountain }: MountainCardProps) {
  return (
    <Link
      href={`/gunung/${mountain.slug}`}
      className="block p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <h2 className="text-xl font-semibold text-charcoal mb-2">
        {mountain.name}
      </h2>
      {mountain.elevation_mdpl && (
        <p className="text-sm text-stone">
          {mountain.elevation_mdpl.toLocaleString('id-ID')} mdpl
        </p>
      )}
      {(mountain.province || mountain.regency) && (
        <p className="text-sm text-stone mt-1">
          {[mountain.regency, mountain.province].filter(Boolean).join(', ')}
        </p>
      )}
    </Link>
  );
}
