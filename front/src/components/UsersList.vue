<template>
  <div class="usersList">
      <h1>The user list :</h1>
      <ul>
          <li v-for="user in users" :key="user.id">{{ user.firstName + " " + user.lastName }}
            <span @click="deleteUser(user._id)">x</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: Array
  },
    methods : {
    deleteUser(userId) {
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.users = this.users.filter(user => user._id !== userId);
      });
    }
  }
}
</script>
<style>
  li {
    list-style: none;
  }
</style>