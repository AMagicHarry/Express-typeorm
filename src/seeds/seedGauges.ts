import { In } from "typeorm";
import { AppDataSource } from "../config/ormconfig";
import { Category } from "../entities/category.entity";
import { Gauge } from "../entities/gauge.entity";

export const seedGauges = async () => {
  const gaugeRepository = AppDataSource.getRepository(Gauge);
  const categoryRepository = AppDataSource.getRepository(Category);

  const gauges = [
    {
      name: 'Air travel 700-2500 km',
      description: 'Medium-haul flights average (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 172,
      energy: 2.8,
      money: 0.35,
      categories: [
        {
          name: 'Air traffic business travel'
        }
      ]
    },
    {
      name: 'Air travel more than 2500 km',
      description: 'Flights long haul average (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 157,
      energy: 1.9,
      money: 0.3,
      categories: [
        {
          name: 'Air traffic business travel'
        }
      ]
    },
    {
      name: 'Flights up to 700 km',
      description: 'Flights short haul average (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 234,
      energy: 3.8,
      money: 0.4,
      categories: [
        {
          name: 'Air traffic business travel'
        }
      ]
    },

    {
      name: 'Surface buildings',
      description: 'Total area (m²)',
      unit: 'm²',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Buildings'
        }
      ]
    },

    {
      name: 'Distance cars: unknown fuel type',
      description: 'Fuel unknown (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 193,
      energy: 2.9,
      money: 0.248,
      categories: [
        {
          name: 'Commuting'
        }
      ]
    },

    {
      name: 'Company cars',
      description: 'Vehicles (number)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'Diesel consumption',
      description: 'Diesel (liter)',
      unit: 'liter',
      scope1: 2468,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 787,
      energy: 36,
      money: 1.79,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'Distance travelled company cars',
      description: 'Distance (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'Electricity usage green',
      description: 'Green NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 0,
      scope3: 0,
      energy: 16,
      money: 0.214,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'Electricity usage grey',
      description: 'Grey NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 448,
      scope3: 88,
      energy: 3.6,
      money: 0.214,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'Gasoline consumption',
      description: 'Petrol (liter)',
      unit: 'liter',
      scope1: 2176,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 645,
      energy: 31.4,
      money: 1.91,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'LPG consumption',
      description: 'LPG (liter)',
      unit: 'liter',
      scope1: 1635,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },

    {
      name: 'Consumption of self-generated non-fuel renewable energy',
      description: 'Self-generated and -consumed electricity (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 1,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Electricity'
        }
      ]
    },
    {
      name: 'Electricity usage green',
      description: 'Green NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 0,
      scope3: 0,
      energy: 16,
      money: 0.214,
      categories: [
        {
          name: 'Electricity'
        }
      ]
    },
    {
      name: 'Electricity usage grey',
      description: 'Grey NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 448,
      scope3: 88,
      energy: 3.6,
      money: 0.214,
      categories: [
        {
          name: 'Electricity'
        }
      ]
    },

    {
      name: 'Diesel consumption',
      description: 'Diesel (liter)',
      unit: 'liter',
      scope1: 2468,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 787,
      energy: 3.6,
      money: 1.79,
      categories: [
        {
          name: 'Equipment'
        }
      ]
    },
    {
      name: 'Electricity usage green',
      description: 'Green NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 0,
      scope3: 0,
      energy: 16,
      money: 0.214,
      categories: [
        {
          name: 'Equipment'
        }
      ]
    },
    {
      name: 'Electricity usage grey',
      description: 'Grey NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 448,
      scope3: 88,
      energy: 3.6,
      money: 0.214,
      categories: [
        {
          name: 'Equipment'
        }
      ]
    },
    {
      name: 'Equipment hours',
      description: '',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Equipment'
        }
      ]
    },
    {
      name: 'Gasoline consumption',
      description: 'Petrol (liter)',
      unit: 'liter',
      scope1: 2176,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 645,
      energy: 31.4,
      money: 1.91,
      categories: [
        {
          name: 'Equipment'
        }
      ]
    },

    {
      name: 'gross margin',
      description: 'Gross margin (million EUR)',
      unit: 'million EUR',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Finances'
        }
      ]
    },
    {
      name: 'Production value',
      description: 'Production (EUR)',
      unit: 'EUR',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Finances'
        }
      ]
    },
    {
      name: 'Revenue',
      description: 'Revenue (EUR)',
      unit: 'EUR',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Finances'
        }
      ]
    },
    {
      name: 'Revenue',
      description: 'Revenue (million EUR)',
      unit: 'million EUR',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Finances'
        }
      ]
    },

    {
      name: 'Diesel consumption',
      description: 'Diesel (liter)',
      unit: 'liter',
      scope1: 2468,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 787,
      energy: 36,
      money: 1.79,
      categories: [
        {
          name: 'Fuels'
        }
      ]
    },
    {
      name: 'Gasoline consumption',
      description: 'Petrol (liter)',
      unit: 'liter',
      scope1: 2176,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 645,
      energy: 31.4,
      money: 1.91,
      categories: [
        {
          name: 'Fuels'
        }
      ]
    },

    {
      name: 'Employees FTE',
      description: 'Employees headcount or FTE (number)',
      unit: 'number',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'HR'
        }
      ]
    },
    {
      name: 'Employees FTE',
      description: 'Full time employees (number)',
      unit: 'number',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'HR'
        }
      ]
    },
    {
      name: 'Working time',
      description: 'Working time (hours)',
      unit: 'hours',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'HR'
        }
      ]
    },

    {
      name: 'Natural gas',
      description: 'Natural gas (gaseous) (m³)',
      unit: 'm³',
      scope1: 1779,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 355,
      energy: 31.65,
      money: 2.03,
      categories: [
        {
          name: 'Heating'
        }
      ]
    },

    {
      name: 'Number of cars',
      description: 'Vehicles (number)',
      unit: 'number',
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'Diesel consumption',
      description: 'Diesel (liter)',
      unit: 'liter',
      scope1: 2468,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 787,
      energy: 36,
      money: 1.79,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'Distance travelled passenger transport',
      description: 'Distance (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'Electricity usage green',
      description: 'Green NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 0,
      scope3: 0,
      energy: 16,
      money: 0.214,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'Electricity usage grey',
      description: 'Grey NL (kWh)',
      unit: 'kWh',
      scope1: 0,
      scope2_location: 328,
      scope2_market: 448,
      scope3: 88,
      energy: 3.6,
      money: 0.214,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'Gasoline consumption',
      description: 'Petrol (liter)',
      unit: 'liter',
      scope1: 2176,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 787,
      energy: 36,
      money: 1.79,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },
    {
      name: 'LPG consumption',
      description: 'LPG (liter)',
      unit: 'liter',
      scope1: 1635,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 0,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Lease cars'
        }
      ]
    },

    {
      name: 'Distance cars diesel',
      description: 'Medium (1050-1450 kg) (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 180,
      energy: 2.2,
      money: 0,
      categories: [
        {
          name: 'Private vehicles business travel'
        }
      ]
    },
    {
      name: 'Distance cars electric grey (NL)',
      description: 'EV kilometers gray Netherlands (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 109,
      energy: 0,
      money: 0,
      categories: [
        {
          name: 'Private vehicles business travel'
        }
      ]
    },
    {
      name: 'Distance cars gasoline',
      description: 'Medium (950 - 1350 kg) (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 204,
      energy: 3.1,
      money: 0,
      categories: [
        {
          name: 'Private vehicles business travel'
        }
      ]
    },
    {
      name: 'Private cars declared kilometers',
      description: 'Fuel unknown (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 193,
      energy: 2.9,
      money: 0.248,
      categories: [
        {
          name: 'Private vehicles business travel'
        }
      ]
    },

    {
      name: 'Distance travelled freight diesel',
      description: 'Freight (km)',
      unit: 'km',
      scope1: 0,
      scope2_location: 0,
      scope2_market: 0,
      scope3: 180,
      energy: 2.2,
      money: 0,
      categories: [
        {
          name: 'Transport'
        }
      ]
    },

  ]

  for (const item of gauges) {
    const categories = await categoryRepository.find({ where: { name: In([item.categories.map((category) => category.name)]) } });

    const existingItem = await gaugeRepository.findOne({
      where: {
        name: item.name,
        categories: {
          id: In(categories.map((category) => category.id))
        }
      }
    });

    if (existingItem) {
      await gaugeRepository.save({
        ...existingItem,
        scope1: item.scope1,
        scope2_location: item.scope2_location,
        scope2_market: item.scope2_market,
        scope3: item.scope3,
        energy: item.energy,
        money: item.money,
      });
    } else {
      const gauge = gaugeRepository.create({ 
        name: item.name,
        description: item.description,
        started_on: new Date(2025, 0, 1),
        scope1: item.scope1,
        scope2_location: item.scope2_location,
        scope2_market: item.scope2_market,
        scope3: item.scope3,
        categories: categories,
        entities: [],
        unit: item.unit,
        time_interval: 'quarters',
        import_only: true,
      });
      await gaugeRepository.save(gauge);
    }
  }
};
