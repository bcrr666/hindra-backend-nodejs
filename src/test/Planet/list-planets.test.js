const { describe, test, expect } = require('@jest/globals');
const { planetService } = require('../../services/PlanetService.js');

describe('List planets', () => {

  test('should get list of planets', async () => {

    const result = await planetService.list();

    expect(result).toBeDefined();

  });
});
