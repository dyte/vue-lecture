import axios from 'axios'

export default {
  methods: {
    callStartWarsApi(cb) {
      const request = {
        method: 'GET',
        url: 'https://swapi.co/api/people'
      }
      axios(request)
        .then(response => cb(response.data.results))
        .catch(err => console.log('ERR:' + err))
    },

    apiGet(url, callBack) {
      const request = {
        method: 'GET',
        url: url
      }

      axios(request)
        .then(response => {
          console.log(response.data); 
          callBack(response.data);
        })
        .catch(err => console.log('ERR:' + err))
    }
  }
}