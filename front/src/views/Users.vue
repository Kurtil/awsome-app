<template>
  <div class="home">
    <UsersList/>
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
  }
}
</script>