export interface Mountain {
  id: string;
  slug: string;
  name: string;
  elevation_mdpl: number | null;
  province: string | null;
  regency: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface BasecampRoute {
  id: string;
  mountain_id: string;
  slug: string;
  name: string;
  ticket_price_idr: number | null;
  ticket_note: string | null;
  basecamp_contact: string | null;
  difficulty: 'beginner' | 'intermediate' | 'expert' | null;
  status: 'open' | 'closed' | 'restricted';
  status_note: string | null;
  status_updated_at: string | null;
  info_source_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface MountainCoordinate {
  id: string;
  mountain_id: string;
  route_id: string | null;
  point_type: 'summit' | 'mountain_center' | 'basecamp';
  latitude: number;
  longitude: number;
  source_name: string | null;
  source_url: string | null;
}

export interface Equipment {
  id: string;
  name: string;
  category: 'personal' | 'group' | 'logistics';
  is_mandatory: boolean;
}

export interface RouteRequirement {
  id: string;
  route_id: string;
  item_name: string;
  note: string | null;
  source_url: string | null;
}

// Database interface for Supabase client
export interface Database {
  public: {
    Tables: {
      mountains: {
        Row: Mountain;
        Insert: Omit<Mountain, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Mountain, 'id' | 'created_at' | 'updated_at'>>;
      };
      basecamp_routes: {
        Row: BasecampRoute;
        Insert: Omit<BasecampRoute, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<BasecampRoute, 'id' | 'created_at' | 'updated_at'>>;
      };
      mountain_coordinates: {
        Row: MountainCoordinate;
        Insert: Omit<MountainCoordinate, 'id'>;
        Update: Partial<Omit<MountainCoordinate, 'id'>>;
      };
      equipments: {
        Row: Equipment;
        Insert: Omit<Equipment, 'id'>;
        Update: Partial<Omit<Equipment, 'id'>>;
      };
      route_requirements: {
        Row: RouteRequirement;
        Insert: Omit<RouteRequirement, 'id'>;
        Update: Partial<Omit<RouteRequirement, 'id'>>;
      };
    };
  };
}
