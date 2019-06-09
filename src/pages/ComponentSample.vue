<template>
  <div class="templateDiv">
   <h2>User</h2>
   <my-input v-model="user.name" label="name" pHolder="type name..." @input="nameInput" @change="nameChanged"></my-input>
   <my-input v-model="user.surname" label="surname" pHolder="type surname..."></my-input>
   <my-input v-model="user.city" label="city" pHolder="type city..."></my-input>
   <my-input v-model="user.age" label="age" pHolder="type age..."></my-input>
    <br>
    <!-- <span style="float:left">the user: {{ user }}</span> -->
    <br>
   <button class="button-success" @click="createUser()">Create</button>
  </div>
</template>
<script>
import myInput from '@/components/myInput'
export default {
  components: {
    'my-input': myInput
  },
  data() {
    return {
      userName: '',
      user: {
        name: '',
        surname: '',
        city: '',
        fatherName: ''
      }
    }
  },
  methods: {
    clearUser() {
      
    },
    createUser() {
      alert(JSON.stringify(this.user))
      this.user = {
        name: '',
        surname: '',
        city: '',
        fatherName: ''
      }
    },
    nameInput() {
      console.log("This is custom input event : " + this.user.name)
    },
    nameChanged() {
      console.log("This is custom change event : " + this.user.name)
    }
  }
}
</script>