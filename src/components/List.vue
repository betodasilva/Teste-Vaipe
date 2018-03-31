<template>
  <div class="list-container">
    <ul class="user-list">
      <li v-for="(user, index) in activeUsers" :key="index" class="user">
        <span class="user__first-name">{{ user.name.first }}</span>
        <span class="user__last-name">{{user.name.last}}</span>
        <table class="user-data closed">
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Avaliações</th>
          </tr>
          <tr>
            <td>{{user.id}}</td>
            <td>{{user.active}}</td>
            <td>
                <span v-for="(rating, ind) in user.rating" :key="ind">
                  {{ rating }}
                </span>
            </td>
          </tr>
        </table>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Users from '../../public/user.json';

export default {
  name: 'List',
  data(){
    return {
      users: Users
    }
  },
  computed: {
    activeUsers: function() {
      return this.users.filter(u => u.active == 1 );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
