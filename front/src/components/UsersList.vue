<template>
  <div class="usersList">
      <h1>The user list :</h1>
      <ul>
          <li v-for="user in users" :key="user.id">{{ user.firstName + " " + user.lastName }}
            <span class="deleteCross" @click="deleteUser(user._id)">x</span>
          </li>
      </ul>
  </div>
</template>

<script>
import userService from "../services/users.service.js";

export default {
  name: "UsersList",
  data: function() {
    return {
      users: Array
    };
  },
  methods: {
    deleteUser(userId) {
      userService.deleteUser(userId).then(response => {
        this.users = this.users.filter(user => user._id !== userId);
      });
    }
  },
  mounted() {
    userService
      .getAllUsers()
      .then(response => response.json())
      .then(response => (this.users = response));
  }
};
</script>
<style>
li {
  list-style: none;
}
.deleteCross {
  cursor: pointer;
}
</style>