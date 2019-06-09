<template>
  <div class="templateDiv">
    <input class="text" v-model="personId" placeholder="enter id for character" />
    <button class="button-success" @click="getPeople()">Get People</button>
    <button class="button-success" @click="getPerson()">Get Person</button>
    <button class="button-success" @click="clear()">Clear</button>
    
    <div class="peopleDiv" v-for="(character, index) in characters" :key="character.name + index">
      <span  class="characters">
        <span>Name : {{character.name}}</span><br>
        <span>Gender : {{character.gender}}</span><br>
        <span>Height : {{character.height}}</span>
      </span>
    </div>

    <div v-if="character.name != null" >
      <span class="characters">
        <span>Name : {{character.name}}</span><br>
        <span>Gender : {{character.gender}}</span><br>
        <span>Height : {{character.height}}</span><br>
        <span>Planet : {{character.planet}}</span>
      </span>

      
    </div>
  </div>
</template>
<script>
import apicall from '@/mixins/apicall'

export default {
  name: 'app',
  mixins: [apicall],
  data() {
    return {
      characters: null,
      character: this.resetCharacter(),
      personId: null
    }
  },
  methods: {
    getPeople() {
      this.clear()
      this.callStartWarsApi(response => {
        console.log(response)
        this.characters = response
      })
    },
    getPerson() {
      this.character = this.resetCharacter()
      this.characters = null
      if (!this.personId) {
        alert('Person ID cannot be null!!!')
      }
      let url = 'https://swapi.co/api/people/' + this.personId;
      
      this.apiGet(url, response => {
        this.character.name = response.name
        this.character.gender = response.gender
        this.character.height = response.height
        
        this.apiGet(response.homeworld, resp => {
          this.character.planet = resp.name 
        })
      })
    },
    clear() {
      this.characters = null
      this.personId = null
      this.character = this.resetCharacter()
    },
    resetCharacter() {
      return {
        name: null,
        gender: null,
        height: null,
        planet: null
      }
    }
  },
  mounted() {
    
  }
}
</script>