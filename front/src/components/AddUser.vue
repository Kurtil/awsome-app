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
import userService from "../services/users.service.js";

export default {
  name: "AddUser",
  data() {
    return {
      user: Object
    };
  },
  methods: {
    async addUser() {
      try {
      const res = await userService.addUser(this.user);
      const body = await res.json();
      this.$store.commit('addUsers', [Object.assign({}, this.user, {"_id": body.id})]);
      } catch(err) {
        // TODO handle err properly
      }
    }
  }
};
</script>