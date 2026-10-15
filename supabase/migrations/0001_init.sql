-- ENUM types
CREATE TYPE route_difficulty AS ENUM ('beginner', 'intermediate', 'expert');
CREATE TYPE route_status AS ENUM ('open', 'closed', 'restricted');
CREATE TYPE equipment_category AS ENUM ('personal', 'group', 'logistics');
CREATE TYPE coordinate_type AS ENUM ('summit', 'mountain_center', 'basecamp');

-- Gunung
CREATE TABLE mountains (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           VARCHAR(100) NOT NULL UNIQUE,
  name           VARCHAR(255) NOT NULL,
  elevation_mdpl INT,
  province       VARCHAR(100),
  regency        VARCHAR(255),
  description    TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Jalur pendakian / basecamp
CREATE TABLE basecamp_routes (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mountain_id       UUID NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  slug              VARCHAR(100) NOT NULL,
  name              VARCHAR(255) NOT NULL,
  ticket_price_idr  INT,
  ticket_note       TEXT,
  basecamp_contact  VARCHAR(30),
  difficulty        route_difficulty,
  status            route_status NOT NULL DEFAULT 'open',
  status_note       TEXT,
  status_updated_at TIMESTAMPTZ,
  info_source_url   TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (mountain_id, slug)
);

-- Koordinat
CREATE TABLE mountain_coordinates (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mountain_id UUID NOT NULL REFERENCES mountains(id) ON DELETE CASCADE,
  route_id    UUID REFERENCES basecamp_routes(id) ON DELETE CASCADE,
  point_type  coordinate_type NOT NULL,
  latitude    NUMERIC(9,6) NOT NULL CHECK (latitude BETWEEN -90 AND 90),
  longitude   NUMERIC(9,6) NOT NULL CHECK (longitude BETWEEN -180 AND 180),
  source_name VARCHAR(255),
  source_url  TEXT
);

-- Master checklist perlengkapan
CREATE TABLE equipments (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         VARCHAR(100) NOT NULL,
  category     equipment_category NOT NULL,
  is_mandatory BOOLEAN NOT NULL DEFAULT false
);

-- Aturan logistik wajib per jalur
CREATE TABLE route_requirements (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id   UUID NOT NULL REFERENCES basecamp_routes(id) ON DELETE CASCADE,
  item_name  VARCHAR(150) NOT NULL,
  note       TEXT,
  source_url TEXT
);

-- Keamanan: semua orang boleh baca, tidak ada yang boleh tulis lewat klien
ALTER TABLE mountains            ENABLE ROW LEVEL SECURITY;
ALTER TABLE basecamp_routes      ENABLE ROW LEVEL SECURITY;
ALTER TABLE mountain_coordinates ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipments           ENABLE ROW LEVEL SECURITY;
ALTER TABLE route_requirements   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read" ON mountains            FOR SELECT USING (true);
CREATE POLICY "public read" ON basecamp_routes      FOR SELECT USING (true);
CREATE POLICY "public read" ON mountain_coordinates FOR SELECT USING (true);
CREATE POLICY "public read" ON equipments           FOR SELECT USING (true);
CREATE POLICY "public read" ON route_requirements   FOR SELECT USING (true);
