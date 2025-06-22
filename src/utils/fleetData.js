const fleetData = [
  {
    id: 1,
    name: 'AD Navigator',
    type: 'Tugboat',
    image: '/images/fleet/tugboat-1.svg',
    specifications: {
      engine: 'Twin Caterpillar 3516C',
      dimensions: '32m x 12m',
      bollardPull: '75 tons',
      yearBuilt: 2018,
      capacity: 'Crew: 8',
      status: 'active'
    }
  },
  {
    id: 2,
    name: 'AD Voyager',
    type: 'Offshore Supply Vessel',
    image: '/images/fleet/osv-1.svg',
    specifications: {
      engine: 'Twin MTU 16V4000',
      dimensions: '65m x 16m',
      bollardPull: 'N/A',
      yearBuilt: 2019,
      capacity: 'Deck Cargo: 800m², Crew: 14',
      status: 'active'
    }
  },
  {
    id: 3,
    name: 'AD Horizon',
    type: 'Tugboat',
    image: '/images/fleet/tugboat-2.svg',
    specifications: {
      engine: 'Twin Caterpillar 3512E',
      dimensions: '28m x 10m',
      bollardPull: '65 tons',
      yearBuilt: 2017,
      capacity: 'Crew: 6',
      status: 'active'
    }
  },
  {
    id: 4,
    name: 'AD Mariner',
    type: 'Crew Boat',
    image: '/images/fleet/crew-boat-1.svg',
    specifications: {
      engine: 'Triple MTU 12V2000',
      dimensions: '40m x 8m',
      bollardPull: 'N/A',
      yearBuilt: 2020,
      capacity: 'Passengers: 60, Crew: 5',
      status: 'active'
    }
  },
  {
    id: 5,
    name: 'AD Pioneer',
    type: 'Anchor Handling Tug',
    image: '/images/fleet/aht-1.svg',
    specifications: {
      engine: 'Twin Wärtsilä 8L32',
      dimensions: '45m x 14m',
      bollardPull: '120 tons',
      yearBuilt: 2016,
      capacity: 'Deck Cargo: 400m², Crew: 12',
      status: 'active'
    }
  },
  {
    id: 6,
    name: 'AD Endeavor',
    type: 'Platform Supply Vessel',
    image: '/images/fleet/psv-1.svg',
    specifications: {
      engine: 'Twin Bergen C25:33L',
      dimensions: '85m x 18m',
      bollardPull: 'N/A',
      yearBuilt: 2018,
      capacity: 'Deck Cargo: 1000m², Liquid Mud: 800m³, Crew: 16',
      status: 'active'
    }
  }
];

export default fleetData;