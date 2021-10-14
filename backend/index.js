const express = require('express')
const app = express()
app.use(express.json())

let palettes = [
    {
      "id": 1,
      "colors": [
        {
          "color": "#0A212B"
        },
        {
          "color": "#144155"
        },
        {
          "color": "#1D617F"
        },
        {
          "color": "#676767"
        },
        {
          "color": "#818181"
        }
      ]
    },
    {
      "id": 2,
      "colors": [
        {
          "color": "#C87687"
        },
        {
          "color": "#CB8079"
        },
        {
          "color": "#CD9B7C"
        },
        {
          "color": "#CFB67E"
        },
        {
          "color": "#D1D181"
        }
      ]
    },
    {
      "id": 3,
      "colors": [
        {
          "color": "#868598"
        },
        {
          "color": "#89889D"
        },
        {
          "color": "#A28C8B"
        },
        {
          "color": "#A78F8E"
        },
        {
          "color": "#91AC92"
        },
        {
          "color": "#94B195"
        },
        {
          "color": "#97B698"
        },
        {
          "color": "#9ABB9C"
        }
      ]
    },
    {
      "id": 4,
      "colors": [
        {
          "color": "#181025"
        },
        {
          "color": "#3D2862"
        },
        {
          "color": "#707070"
        }
      ]
    },
    {
      "id": "7ae66994-b3a3-4876-979b-914b82392481",
      "colors": [
        {
          "id": "f8743c26-6687-44b0-a9c5-076bcd33f88d",
          "color": "#3E422E"
        },
        {
          "id": "404891c9-9316-4040-9f51-00c76416ec23",
          "color": "#5B6142"
        },
        {
          "id": "4013a895-7b71-43aa-8f3e-3a880d27cda7",
          "color": "#788156"
        },
        {
          "id": "aed9d1e2-cc18-4272-92b8-3cf721d9e825",
          "color": "#949E6B"
        },
        {
          "id": "d96fea6b-87da-47a9-8925-dfb9792517d7",
          "color": "#ABB489"
        }
      ]
    },
    {
      "id": "8c0bcd01-f963-4810-a5cc-b8c8ef80494a",
      "colors": [
        {
          "id": "f8743c26-6687-44b0-a9c5-076bcd33f88d",
          "color": "#3E422E"
        },
        {
          "id": "404891c9-9316-4040-9f51-00c76416ec23",
          "color": "#5B6142"
        },
        {
          "id": "4013a895-7b71-43aa-8f3e-3a880d27cda7",
          "color": "#788156"
        },
        {
          "id": "aed9d1e2-cc18-4272-92b8-3cf721d9e825",
          "color": "#949E6B"
        },
        {
          "id": "d96fea6b-87da-47a9-8925-dfb9792517d7",
          "color": "#ABB489"
        }
      ]
    },
    {
      "id": "906921c6-cd72-4c49-9b23-0864f7a1f163",
      "colors": [
        {
          "id": "b0687672-9272-4b4f-97c4-2ae9037c3e48",
          "color": "#8B0631"
        },
        {
          "id": "5747ef1b-a0b7-4aac-854a-daf96774edb3",
          "color": "#BD0742"
        },
        {
          "id": "4d35bb69-5b42-45eb-bb39-c086e2778a58",
          "color": "#EF0753"
        },
        {
          "id": "519d0f14-aff1-400a-9a79-7804bd650dfe",
          "color": "#FA3072"
        },
        {
          "id": "48cca012-d2d8-4cbf-b3e8-e626f3a5487d",
          "color": "#FC6193"
        }
      ]
    },
    {
      "id": "dd23d199-b81b-42a2-989e-f069cfb9aa48",
      "colors": [
        {
          "id": "4db8935c-0596-4be7-9cd0-d5392998d1b4",
          "color": "#01140C"
        },
        {
          "id": "d3fa7cb3-64b6-449a-8cf6-82e2911c45a6",
          "color": "#054429"
        },
        {
          "id": "d682862a-af05-41d1-9732-0ea5cbce7fb3",
          "color": "#077446"
        },
        {
          "id": "d0ace572-5a86-42be-8da3-5dec47b694f5",
          "color": "#09A563"
        },
        {
          "id": "fb089f90-8408-4acc-941c-8b30391a1a0f",
          "color": "#0BD781"
        }
      ]
    },
    {
      "id": "0d0b7441-e9cf-425a-bda0-9dc620c17d09",
      "colors": [
        {
          "id": "55e722e7-5c84-4322-8352-c551429a2b8e",
          "color": "#A43A72"
        },
        {
          "id": "6b1bca61-b936-49e6-827e-9c807f639e40",
          "color": "#C24F8C"
        },
        {
          "id": "76dd9a5a-db8c-417e-a78f-a2af2e79946e",
          "color": "#D074A5"
        },
        {
          "id": "5c4bec9b-a31e-4d45-920e-bde10f75074a",
          "color": "#DE9ABD"
        },
        {
          "id": "e11f8dfd-2907-46ef-9a7b-5bc30463234c",
          "color": "#EBC0D6"
        },
        {
          "id": "de84b99c-25f1-476b-9bed-66bdfa030ca9",
          "color": "#E0A0C1"
        }
      ]
    },
  ]

  let users = [
      {   
        "id": 1,
        "email": "j@gmail.com",
        "password": "password" 
      },
      {
          "id":2,
          "email": "a@gmail.com",
          "password": "password2"
      }
    ]

//request to make sure web app is working
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
  
//request to get all the color palettes
app.get('/api/palettes', (request, response) => {
response.json(palettes)
})


//request a single palette
app.get('/api/palettes/:id', (request, response) => {
  const id = Number(request.params.id)
  const palette = palettes.find(palette => palette.id === id)

  if (palette) {
    response.json(palette)
  } else {
    response.status(404).end()
  }
  request.json(palette)
})

app.delete('api/palettes', (request, response) => {
  const id = Number(request.params.id)
  palette = palettes.filter(palette => palette.id !== id)

  response.status(204).end()
})
//request to get a user
app.get(`/api/user/:id`, (request, response) => {
    const id = request.params.id
    const user = users.find(user => {
        console.log('user.id', user.id)
        return user.id === id
    })
    response.json(user)
})

//request to get a specific users saved palettes
app.get('/api/user/favorites', (request, response) => {
  
})

const generateId = () => {
  const maxId = palettes.length > 0 
    ? Math.max(...palettes.map(n => n.id)) 
    : 0
    return maxId + 1
}

//post request 
app.post('/api/palettes', (request, response) => {
  const palette = request.body
  console.log(palette)

  const palette = {
    id: generateId(),
    colors: body.colors,
  }
  palettes = palettes.concat(palette)
  
  response.json(palette)
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)