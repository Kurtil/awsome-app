<template>
  <div class="addUser">
      <h1>Add user :</h1>
      <form v-on:submit="addUser">
          <label for="userFirstName">Firstname :</label>
          <input id="userFirstName" v-model="user.firstName" placeholder="firstname" required>
          <label for="userFirstName">Lastname :</label>
          <input id="userLastName" v-model="user.lastName" placeholder="lastname" required>
          <button type="submit">Add user</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data: function(){
      return {
          user: Object
      }
  },
  methods : {
    addUser() {
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(this.user)
      }).then((response) => this.users = response.body);
    }
  }

}
</script>