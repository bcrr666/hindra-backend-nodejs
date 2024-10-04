const { describe, test, expect } = require('@jest/globals');
const { planetService } = require('../../services/PlanetService.js');

describe('Find planet by id', () => {

  test('should get planet by valid id', async () => {

    const planetId = 1;
    const planet = await planetService.findById(planetId);
    expect(planet).not.toBeNull();

  });

  test('should not get planet by invalid id', async () => {

    const invalidId = 'hola';
    const planet = await planetService.findById(invalidId);

    expect(planet).toBe(404);
    
  });
});
