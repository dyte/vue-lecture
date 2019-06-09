<template>
<div class="templateDiv">
  <h3>Axios Sample</h3>
  
  <div v-for="(person, index) in people" :key="index">
    <span>{{index + 1}}: {{person.name}}</span>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      people: []
    }
  },
  methods: {
    getPeople() {
      const request = {
        method: 'GET',
        url: 'https://swapi.co/api/people'
      }
      axios(request)
        .then(
          response => {
            console.log(response.data.results)
            this.people = response.data.results
          }
        )
        .catch(
          err => console.log('ERR:' + err)
        )
    }
  },
  mounted() {
    this.getPeople()
  }

}
</script>
