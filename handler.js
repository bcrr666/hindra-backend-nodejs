const responseService = require('./src/provider/response-service-provider');
const { planetService } = require('./src/services/PlanetService')
const { filmService } = require('./src/services/FilmService')

exports.listPlanets = async (event) => {
  const response = await planetService.list()

  if (response == 404) {
    return responseService.json(`Ocurrio un error al obtener el listado de planetas`, {}, 404)
  }

  return responseService.json('Listado de planetas', response)
}

exports.findPlanetById = async (event) => {
  const planetId = event.pathParameters.id
  const response = await planetService.findById(planetId)

  if (response == 404) {
    return responseService.json(`El planeta ${planetId} es inexistente`, {}, 404)
  }

  return responseService.json('Informacion del planeta', response)
}

module.exports.finndFilmById = async (event) => {
  const film = await filmService.findById(event.pathParameters.id)

  if (film == null) {
    return responseService.json('Pelicula no encontrada', {}, 404)
  }

  return responseService.json('Informacion de la peliculas', film)
};

module.exports.registerFilm = async (event) => {
  
  const body = JSON.parse(event.body)

  try {

    await filmService.register(data)

  } catch (error) {

    return responseService.json(`Error al registrar la pelicula.`)

  }
  
  return responseService.json(`La pelicula. ${body.title} fue registrada.`)
};

module.exports.listFilms = async (event) => {

  const films = await filmService.list()
  return responseService.json(`Lista de peliculas.`, films)

};
