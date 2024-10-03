const responseService = require('./src/provider/response-service-provider');
const { planetService } = require('./src/services/PlanetService')

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