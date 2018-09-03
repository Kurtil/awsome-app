<template>
  <div class="usersList">
      <h1>The user list :</h1>
      <ul>
          <li v-for="user in users" :key="user.id">{{ user.firstName + " " + user.lastName }}
            <span class="deleteCross" @click="deleteUser(user._id)" title="delete user">x</span>
          </li>
      </ul>
  </div>
</template>

<script>
import userService from "../services/users.service.js";

export default {
  name: "UsersList",
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch('deleteUser', userId);
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>
<style>
li {
  list-style: none;
}
.deleteCross {
  cursor: pointer;
  font-weight: bold;
}
</style>