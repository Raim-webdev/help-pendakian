import Dexie, { Table } from 'dexie';

export interface OfflineMountain {
  id: string;
  slug: string;
  name: string;
  elevation_mdpl: number | null;
  province: string | null;
  regency: string | null;
  description: string | null;
  savedAt: Date;
}

export interface OfflineRoute {
  id: string;
  mountainId: string;
  slug: string;
  name: string;
  ticket_price_idr: number | null;
  ticket_note: string | null;
  basecamp_contact: string | null;
  difficulty: string | null;
  status: string;
  status_note: string | null;
  savedAt: Date;
}

export interface GpxTrack {
  id: string;
  routeId: string;
  fileName: string;
  uploadedAt: Date;
  trackPoints: Array<{
    lat: number;
    lon: number;
    ele?: number;
  }>;
  waypoints: Array<{
    lat: number;
    lon: number;
    name?: string;
    type?: string;
  }>;
}

export interface LogisticsInputs {
  id: string;
  people: number;
  days: number;
  savedAt: Date;
}

export interface ChecklistState {
  id: string;
  routeId: string;
  itemId: string;
  checked: boolean;
  updatedAt: Date;
}

export interface WeatherCache {
  id: string;
  mountainId: string;
  data: string;
  cachedAt: Date;
}

export class HelpPendakiDB extends Dexie {
  mountains!: Table<OfflineMountain>;
  routes!: Table<OfflineRoute>;
  gpxTracks!: Table<GpxTrack>;
  logisticsInputs!: Table<LogisticsInputs>;
  checklistState!: Table<ChecklistState>;
  weatherCache!: Table<WeatherCache>;

  constructor() {
    super('HelpPendakiDB');
    this.version(1).stores({
      mountains: 'id, slug, name',
      routes: 'id, mountainId, slug',
      gpxTracks: 'id, routeId',
      logisticsInputs: 'id',
      checklistState: 'id, [routeId+itemId]',
      weatherCache: 'id, mountainId',
    });
  }
}

export const db = new HelpPendakiDB();
