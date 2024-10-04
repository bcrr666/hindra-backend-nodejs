# Prueba tecnica

Mediante el uso de serverless podremos realizar el consumo de servicios y hacer uso de recursos  solo en el momento que sea necesario.

## Requerimientos
- Node v20.10.0 o superior
- MSQL 5.7.x o superior

El proyecto esta construido con Serverless en su version 0.5.26 (https://www.serverless.com/framework/docs) que nos ofrece las caracteristicas que necesitamos para trabajar con serverless de una manera practica y sencilla.

#### Instalar dependencias
`npm install`

#### Ejecutar pruebas
`npm run test`

#### Emular servidor local
`serverless offline`

#### Realizar despliegue
`serverless deploy`


## Documentacion - Peliculas

### Busqueda de peliculas
La busqueda consta de 1 campo necesario:

* id

#### Endpoint
`Type: GET`
`/dev/films/{id}`


#### Respuesta
`200 Success`
```js
{
    "message": "Informacion de la peliculas",
    "data": {
        "codigo": 2,
        "titulo": "punku",
        "codigo_episodio": 55,
        "sinopsis": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
        "director": "Son Goku",
        "productor": "Krilin",
        "fecha_lanzamiento": "1977-05-25",
        "personajes": [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/6/"
        ],
        "planetas": [
            "https://swapi.py4e.com/api/planets/1/",
            "https://swapi.py4e.com/api/planets/3/"
        ],
        "naves_estelares": [
            "https://swapi.py4e.com/api/starships/2/",
            "https://swapi.py4e.com/api/starships/5/"
        ],
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/7/",
            "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "especies": [
            "https://swapi.py4e.com/api/species/4/",
            "https://swapi.py4e.com/api/species/5/"
        ],
        "creado_en": "2024-04-30T20:32:59.000Z",
        "editado_en": "2024-04-30T20:32:59.000Z",
        "enlace": "https://swapi.py4e.com/api/films/1/",
        "createdAt": "2024-04-30T20:32:59.000Z",
        "updatedAt": "2024-04-30T20:32:59.000Z"
    }
}
```

`404 Not Found`
```js
{
    "message": "Pelicula no encontrada",
    "data": {}
}
```

### Listar Peliculas

#### Endpoint
`Type: GET`
`/dev/films`


#### Respuesta
`200 Success`
```js
{
    "message": "Lista de peliculas.",
    "data": [
        {
            "codigo": 2,
            "titulo": "punku",
            "codigo_episodio": 55,
            "sinopsis": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
            "director": "Son Goku",
            "productor": "Krilin",
            "fecha_lanzamiento": "1977-05-25",
            "personajes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/6/"
            ],
            "planetas": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/5/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/4/",
                "https://swapi.py4e.com/api/vehicles/6/",
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/3/",
                "https://swapi.py4e.com/api/species/5/"
            ],
            "creado_en": "2024-04-30T20:32:59.000Z",
            "editado_en": "2024-04-30T20:32:59.000Z",
            "enlace": "https://swapi.py4e.com/api/films/1/",
            "createdAt": "2024-04-30T20:32:59.000Z",
            "updatedAt": "2024-04-30T20:32:59.000Z"
        },
        {
            "codigo": 3,
            "titulo": "Dragon Ball",
            "codigo_episodio": 55,
            "sinopsis": "Disfruta con Goku sus sorprendentes aventuras junt oa sus amigos.",
            "director": "Son Goku",
            "productor": "Krilin",
            "fecha_lanzamiento": "1990-05-25",
            "personajes": [
                "https://swapi.py4e.com/api/people/1/"
            ],
            "planetas": [
                "https://swapi.py4e.com/api/planets/1/",
                "https://swapi.py4e.com/api/planets/3/"
            ],
            "naves_estelares": [
                "https://swapi.py4e.com/api/starships/2/",
                "https://swapi.py4e.com/api/starships/5/"
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/8/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/5/"
            ],
            "creado_en": "2024-04-30T20:33:34.000Z",
            "editado_en": "2024-04-30T20:33:34.000Z",
            "enlace": "https://swapi.py4e.com/api/films/1/",
            "createdAt": "2024-04-30T20:33:34.000Z",
            "updatedAt": "2024-04-30T20:33:34.000Z"
        }
    ]
}
```

### Registrar pelicula

#### Endpoint
`Type: POST`
`/message/search-messages`
#### Body
```js
{
    "title": "punku",
    "episode_id": 55,
    "opening_crawl": "Punku es un inca que pasa por mill aventuras junto asus amigos con mucha valentia.",
    "director": "Son Goku",
    "producer": "Krilin",
    "release_date": "1977-05-25",
    "characters": [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/2/",
        "https://swapi.py4e.com/api/people/3/",
        "https://swapi.py4e.com/api/people/4/",
        "https://swapi.py4e.com/api/people/5/",
        "https://swapi.py4e.com/api/people/6/"
    ],
    "planets": [
        "https://swapi.py4e.com/api/planets/1/",
        "https://swapi.py4e.com/api/planets/2/",
        "https://swapi.py4e.com/api/planets/3/"
    ],
    "starships": [
        "https://swapi.py4e.com/api/starships/2/",
        "https://swapi.py4e.com/api/starships/3/",
        "https://swapi.py4e.com/api/starships/5/"
    ],
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/4/",
        "https://swapi.py4e.com/api/vehicles/6/",
        "https://swapi.py4e.com/api/vehicles/7/",
        "https://swapi.py4e.com/api/vehicles/8/"
    ],
    "species": [
        "https://swapi.py4e.com/api/species/3/",
        "https://swapi.py4e.com/api/species/4/",
        "https://swapi.py4e.com/api/species/5/"
    ],
    "url": "https://swapi.py4e.com/api/films/1/"
}
```

#### Respuesta
`200 Success`
```js
{
    "message": "La oferta. punku fue registrada.",
    "data": {}
}
```

## Documentacion - Planetas

### Busqueda de Planetas
La busqueda consta de 1 campo necesario:

* id

#### Endpoint
`Type: GET`
`/dev/species/{id}`


#### Respuesta
`200 Success`
```js
{
    "message": "Listado de planetas",
    "data": [
        {
            "clima": "arid",
            "creado": "2014-12-09T13:50:49.641000Z",
            "diametro": "10465",
            "editado": "2014-12-20T20:58:18.411000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Tatooine",
            "periodo_orbital": "304",
            "poblacion": "200000",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "periodo_de_rotacion": "23",
            "agua_superficial": "1",
            "terreno": "desert",
            "url": "https://swapi.py4e.com/api/planets/1/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:35:48.479000Z",
            "diametro": "12500",
            "editado": "2014-12-20T20:58:18.420000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Alderaan",
            "periodo_orbital": "364",
            "poblacion": "2000000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/68/",
                "https://swapi.py4e.com/api/people/81/"
            ],
            "periodo_de_rotacion": "24",
            "agua_superficial": "40",
            "terreno": "grasslands, mountains",
            "url": "https://swapi.py4e.com/api/planets/2/"
        },
        {
            "clima": "temperate, tropical",
            "creado": "2014-12-10T11:37:19.144000Z",
            "diametro": "10200",
            "editado": "2014-12-20T20:58:18.421000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/"
            ],
            "gravedad": "1 standard",
            "nombre": "Yavin IV",
            "periodo_orbital": "4818",
            "poblacion": "1000",
            "residentes": [],
            "periodo_de_rotacion": "24",
            "agua_superficial": "8",
            "terreno": "jungle, rainforests",
            "url": "https://swapi.py4e.com/api/planets/3/"
        },
        {
            "clima": "frozen",
            "creado": "2014-12-10T11:39:13.934000Z",
            "diametro": "7200",
            "editado": "2014-12-20T20:58:18.423000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/2/"
            ],
            "gravedad": "1.1 standard",
            "nombre": "Hoth",
            "periodo_orbital": "549",
            "poblacion": "unknown",
            "residentes": [],
            "periodo_de_rotacion": "23",
            "agua_superficial": "100",
            "terreno": "tundra, ice caves, mountain ranges",
            "url": "https://swapi.py4e.com/api/planets/4/"
        },
        {
            "clima": "murky",
            "creado": "2014-12-10T11:42:22.590000Z",
            "diametro": "8900",
            "editado": "2014-12-20T20:58:18.425000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "N/A",
            "nombre": "Dagobah",
            "periodo_orbital": "341",
            "poblacion": "unknown",
            "residentes": [],
            "periodo_de_rotacion": "23",
            "agua_superficial": "8",
            "terreno": "swamp, jungles",
            "url": "https://swapi.py4e.com/api/planets/5/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:43:55.240000Z",
            "diametro": "118000",
            "editado": "2014-12-20T20:58:18.427000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/2/"
            ],
            "gravedad": "1.5 (surface), 1 standard (Cloud City)",
            "nombre": "Bespin",
            "periodo_orbital": "5110",
            "poblacion": "6000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/26/"
            ],
            "periodo_de_rotacion": "12",
            "agua_superficial": "0",
            "terreno": "gas giant",
            "url": "https://swapi.py4e.com/api/planets/6/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:50:29.349000Z",
            "diametro": "4900",
            "editado": "2014-12-20T20:58:18.429000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/3/"
            ],
            "gravedad": "0.85 standard",
            "nombre": "Endor",
            "periodo_orbital": "402",
            "poblacion": "30000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/30/"
            ],
            "periodo_de_rotacion": "18",
            "agua_superficial": "8",
            "terreno": "forests, mountains, lakes",
            "url": "https://swapi.py4e.com/api/planets/7/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:52:31.066000Z",
            "diametro": "12120",
            "editado": "2014-12-20T20:58:18.430000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Naboo",
            "periodo_orbital": "312",
            "poblacion": "4500000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/3/",
                "https://swapi.py4e.com/api/people/21/",
                "https://swapi.py4e.com/api/people/35/",
                "https://swapi.py4e.com/api/people/36/",
                "https://swapi.py4e.com/api/people/37/",
                "https://swapi.py4e.com/api/people/38/",
                "https://swapi.py4e.com/api/people/39/",
                "https://swapi.py4e.com/api/people/42/",
                "https://swapi.py4e.com/api/people/60/",
                "https://swapi.py4e.com/api/people/61/",
                "https://swapi.py4e.com/api/people/66/"
            ],
            "periodo_de_rotacion": "26",
            "agua_superficial": "12",
            "terreno": "grassy hills, swamps, forests, mountains",
            "url": "https://swapi.py4e.com/api/planets/8/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:54:13.921000Z",
            "diametro": "12240",
            "editado": "2014-12-20T20:58:18.432000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Coruscant",
            "periodo_orbital": "368",
            "poblacion": "1000000000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/34/",
                "https://swapi.py4e.com/api/people/55/",
                "https://swapi.py4e.com/api/people/74/"
            ],
            "periodo_de_rotacion": "24",
            "agua_superficial": "unknown",
            "terreno": "cityscape, mountains",
            "url": "https://swapi.py4e.com/api/planets/9/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T12:45:06.577000Z",
            "diametro": "19720",
            "editado": "2014-12-20T20:58:18.434000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/5/"
            ],
            "gravedad": "1 standard",
            "nombre": "Kamino",
            "periodo_orbital": "463",
            "poblacion": "1000000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/22/",
                "https://swapi.py4e.com/api/people/72/",
                "https://swapi.py4e.com/api/people/73/"
            ],
            "periodo_de_rotacion": "27",
            "agua_superficial": "100",
            "terreno": "ocean",
            "url": "https://swapi.py4e.com/api/planets/10/"
        }
    ]
}
```

### Listar Peliculas

#### Endpoint
`Type: GET`
`/dev/films`


#### Respuesta
`200 Success`
```js
{
    "message": "Listado de planetas",
    "data": [
        {
            "clima": "arid",
            "creado": "2014-12-09T13:50:49.641000Z",
            "diametro": "10465",
            "editado": "2014-12-20T20:58:18.411000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Tatooine",
            "periodo_orbital": "304",
            "poblacion": "200000",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "periodo_de_rotacion": "23",
            "agua_superficial": "1",
            "terreno": "desert",
            "url": "https://swapi.py4e.com/api/planets/1/"
        },
        {
            "clima": "temperate",
            "creado": "2014-12-10T11:35:48.479000Z",
            "diametro": "12500",
            "editado": "2014-12-20T20:58:18.420000Z",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "gravedad": "1 standard",
            "nombre": "Alderaan",
            "periodo_orbital": "364",
            "poblacion": "2000000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/68/",
                "https://swapi.py4e.com/api/people/81/"
            ],
            "periodo_de_rotacion": "24",
            "agua_superficial": "40",
            "terreno": "grasslands, mountains",
            "url": "https://swapi.py4e.com/api/planets/2/"
        }
    ]
}
```

`404 Not Found`
```js
{
    "message": "Especie no encontrada",
    "data": {}
}
```