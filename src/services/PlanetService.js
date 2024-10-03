const axios = require('axios')


class PlanetService {

  async findById(id) {

		try {

			const response = await axios.get(`https://swapi.py4e.com/api/planets/${id}`)
      const planet = response.data
      return this.parsePlanet(planet)

		} catch (error) {
      return error.response.status
		} 
    
	}

	async list() {


		try {
      
      const response = await axios.get(`https://swapi.py4e.com/api/planets`)
      const planets = response.data.results
      return planets.map(planet => this.parsePlanet(planet));
    } catch (error) {
      return error.response.status
    } 
  }

	parsePlanet(planet) {
		return {
			clima: planet.climate,
			creado: planet.created,
			diametro: planet.diameter,
			editado: planet.edited,
			peliculas: planet.films,
			gravedad: planet.gravity,
			nombre: planet.name,
			periodo_orbital: planet.orbital_period,
			poblacion: planet.population,
			residentes: planet.residents,
			periodo_de_rotacion: planet.rotation_period,
			agua_superficial: planet.surface_water,
			terreno: planet.terrain,
			url: planet.url
		}
	}
}

module.exports = { planetService: new PlanetService(),  PlanetService }
