/**
 * Data access layer for Help Pendaki
 * All data is hard-coded for now; this module will be replaced
 * when a backend is implemented.
 */

/**
 * @typedef {Object} Fact
 * @property {string} value - The factual value
 * @property {string} source - Source of the fact, or "UNVERIFIED"
 * @property {string} verified - "YYYY-MM-DD" or "UNVERIFIED"
 */

/**
 * @typedef {Object} Route
 * @property {string} id
 * @property {Fact} name
 * @property {Fact} trailheadCoords
 * @property {Fact} distanceKm
 * @property {Fact} permit
 * @property {string} [gpxUrl]
 */

/**
 * @typedef {Object} Mountain
 * @property {string} id
 * @property {string} name
 * @property {Fact} region
 * @property {Fact} heightM
 * @property {Fact} description
 * @property {Fact[]} tips
 * @property {Fact} defaultDays
 * @property {Fact} water
 * @property {string[]} checklist
 * @property {Route[]} routes
 */

/** @type {Mountain[]} */
const mountains = [
  {
    id: "semeru",
    name: "Semeru",
    region: { value: "East Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "3,676", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "The highest mountain in Java, featuring the iconic Mahameru peak. A challenging multi-day trek through Ranu Kumbolo and Kalimati.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Acclimatize properly due to high altitude", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Check volcanic activity status before climbing", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "3", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Available at Ranu Kumbolo and Kalimati", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Tent (4-season recommended)",
      "Sleeping bag (-5°C comfort rating)",
      "Warm layers (fleece/down jacket)",
      "Headlamp + spare batteries",
      "First aid kit",
      "Sun protection (hat, sunscreen, sunglasses)",
      "Rain gear",
      "Sturdy hiking boots",
      "Trekking poles",
      "Personal medications"
    ],
    routes: [
      {
        id: "semeru-ranu-kumbolo",
        name: { value: "Ranu Kumbolo - Kalimati - Summit", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required via online registration", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "rinjani",
    name: "Rinjani",
    region: { value: "Lombok", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "3,726", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "An active volcano with a stunning crater lake (Segara Anak) and hot springs. One of Indonesia's most popular trekking destinations.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Book guides/porters in advance", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Best season: April - December", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "2-3", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Limited, bring water purification tablets", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Tent",
      "Sleeping bag",
      "Warm clothing",
      "Headlamp",
      "Water purification tablets",
      "Sun protection",
      "Rain gear",
      "Hiking boots",
      "Trekking poles",
      "Personal medications"
    ],
    routes: [
      {
        id: "rinjani-senaru",
        name: { value: "Senaru Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, available at trailhead", source: "UNVERIFIED", verified: "UNVERIFIED" }
      },
      {
        id: "rinjani-semabalun",
        name: { value: "Sembalun Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, available at trailhead", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "gede-pangrango",
    name: "Gede-Pangrango",
    region: { value: "West Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "2,958", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "A twin mountain system near Jakarta, popular for weekend hikes. Features the Suryakencana edelweiss field and Blue Lake.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Popular trail, book permits early", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Can be done as a long day hike or overnight", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "1-2", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Available at several posts along the trail", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Tent (if overnight)",
      "Sleeping bag",
      "Warm layers",
      "Headlamp",
      "Rain gear",
      "Sun protection",
      "Hiking boots",
      "Trekking poles",
      "Personal medications",
      "Daypack (if day hike)"
    ],
    routes: [
      {
        id: "gede-cibodas",
        name: { value: "Cibodas Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required via online booking", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "merbabu",
    name: "Merbabu",
    region: { value: "Central Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "3,145", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "Known for its beautiful savanna and panoramic views of Merapi and surrounding volcanoes. Multiple trail options available.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Choose trail based on fitness level", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Night hike option available for sunrise at summit", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "1-2", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Limited, carry sufficient water", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Tent (if overnight)",
      "Sleeping bag",
      "Warm layers",
      "Headlamp",
      "Water (3L minimum)",
      "Sun protection",
      "Rain gear",
      "Hiking boots",
      "Trekking poles",
      "Personal medications"
    ],
    routes: [
      {
        id: "merbabu-selo",
        name: { value: "Selo Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, register at basecamp", source: "UNVERIFIED", verified: "UNVERIFIED" }
      },
      {
        id: "merbabu-wekas",
        name: { value: "Wekas Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, register at basecamp", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "arjuno-welirang",
    name: "Arjuno-Welirang",
    region: { value: "East Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "3,339", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "A challenging twin-peak hike through tropical forest and alpine terrain. Less crowded than Semeru and Rinjani.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Requires good fitness and navigation skills", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Multiple entry points available", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "2-3", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Available at some campsites", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Tent",
      "Sleeping bag",
      "Warm layers",
      "Headlamp",
      "Water (carry extra)",
      "Sun protection",
      "Rain gear",
      "Hiking boots",
      "Trekking poles",
      "Navigation tools (GPS/compass)"
    ],
    routes: [
      {
        id: "arjuno-tretes",
        name: { value: "Tretes Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, register at basecamp", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "bromo",
    name: "Bromo",
    region: { value: "East Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "2,329", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "An active volcano famous for its sea of sand and sunrise views. Accessible by jeep and short hike, suitable for beginners.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Very cold at sunrise, bring warm clothes", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Can be combined with Ijen crater trip", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "1", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Available at nearby villages", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Warm jacket",
      "Headlamp",
      "Mask (for volcanic dust)",
      "Sun protection",
      "Camera",
      "Cash for jeep/horse rental",
      "Hiking boots or sturdy shoes",
      "Personal medications"
    ],
    routes: [
      {
        id: "bromo-penanjakan",
        name: { value: "Penanjakan Sunrise Viewpoint", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, included in jeep tour", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  },
  {
    id: "penanggungan",
    name: "Penanggungan",
    region: { value: "East Java", source: "UNVERIFIED", verified: "UNVERIFIED" },
    heightM: { value: "1,653", source: "UNVERIFIED", verified: "UNVERIFIED" },
    description: {
      value: "A sacred mountain with ancient Hindu temples and meditation sites. A moderate day hike with cultural significance.",
      source: "UNVERIFIED",
      verified: "UNVERIFIED"
    },
    tips: [
      { value: "Respect sacred sites along the trail", source: "UNVERIFIED", verified: "UNVERIFIED" },
      { value: "Good for beginners and families", source: "UNVERIFIED", verified: "UNVERIFIED" }
    ],
    defaultDays: { value: "1", source: "UNVERIFIED", verified: "UNVERIFIED" },
    water: { value: "Available at basecamp", source: "UNVERIFIED", verified: "UNVERIFIED" },
    checklist: [
      "Daypack",
      "Water (2L)",
      "Snacks",
      "Sun protection",
      "Rain gear",
      "Hiking boots",
      "Trekking poles (optional)",
      "Personal medications",
      "Camera"
    ],
    routes: [
      {
        id: "penanggungan-trawas",
        name: { value: "Trawas Route", source: "UNVERIFIED", verified: "UNVERIFIED" },
        trailheadCoords: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        distanceKm: { value: "UNVERIFIED", source: "UNVERIFIED", verified: "UNVERIFIED" },
        permit: { value: "Required, register at basecamp", source: "UNVERIFIED", verified: "UNVERIFIED" }
      }
    ]
  }
];

/**
 * Get all mountains
 * @returns {Promise<Mountain[]>}
 */
export async function getMountains() {
  return [...mountains];
}

/**
 * Get a single mountain by ID
 * @param {string} id
 * @returns {Promise<Mountain|null>}
 */
export async function getMountain(id) {
  const mountain = mountains.find(m => m.id === id);
  return mountain ? { ...mountain } : null;
}
