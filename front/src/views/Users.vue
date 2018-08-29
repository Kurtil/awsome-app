<template>
  <div class="home">
    <UsersList :users="users"/>
    <AddUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersList from '@/components/UsersList.vue'
import AddUser from '@/components/AddUser.vue'

export default {
  name: 'home',
  components: {
    UsersList,
    AddUser
  },
  data: function () {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => this.users = response);
  }
}
</script>