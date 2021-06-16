import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3001/api`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  

  export default {
     getSocios() {
      return apiClient.get('/socios')
    }, 
    postSocios(socio) {
      return apiClient.post('/socios', socio)
    },
    deleteSocio(dni) {

      return apiClient.delete('/socios', dni)

    },

    putSocio(socio) {
        console.log(socio)
        return ('/socios/' + socio.dni , socio)
    }
  }


