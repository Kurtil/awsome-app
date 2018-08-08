<template>
  <div class="usersList">
      <h1>The user list :</h1>
      <ul>
          <li v-for="user in users" :key="user.id">{{ user.firstname + " " + user.lastname }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: Array
  }
}
</script>