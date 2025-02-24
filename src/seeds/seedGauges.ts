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
      scope: 172,
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
      scope: 157,
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
      scope: 234,
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
      scope: 0,
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
      scope: 193,
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
      scope: 0,
      categories: [
        {
          name: 'Company cars'
        }
      ]
    },
    {
      name: 'scope: 0,',
      description: 'Diesel (liter)',
      unit: 'liter',
      scope: 2468,
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
      scope: 0,
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
      scope: 328,
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
      scope: 328,
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
      scope: 2176,
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
      scope: 1635,
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
      scope: 0,
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
      scope: 328,
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
      scope: 328,
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
      scope: 2458,
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
      scope: 328,
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
      scope: 328,
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
      scope: 0,
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
      scope: 2176,
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
      scope: 0,
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
      scope: 0,
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
      scope: 0,
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
      scope: 0,
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
      scope: 2468,
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
      scope: 2176,
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
      scope: 0,
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
      scope: 0,
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
      scope: 0,
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
      scope: 1779,
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
      scope: 2176,
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
      scope: 1635,
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
      scope: 328,
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
      scope: 328,
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
      scope: 2176,
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
      scope: 1635,
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
      scope: 180,
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
      scope: 109,
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
      scope: 204,
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
      scope: 193,
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
      scope: 180,
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
        scope: item.scope,
      });
    } else {
      const gauge = gaugeRepository.create({ 
        name: item.name,
        description: item.description,
        started_on: new Date(2025, 0, 1),
        scope: item.scope,
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
