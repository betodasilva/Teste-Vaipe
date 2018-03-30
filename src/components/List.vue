<template>
  <div class="list-container">
    <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Status</th>
        <th>Avaliações</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{user.id}}</td>
        <td>{{user.name.first}}</td>        
        <td>{{user.name.last}}</td>
        <td>{{user.active}}</td>
        <td>
            <span v-for="(rating, ind) in user.rating" :key="ind">
              <span v-if="rating != null">{{ rating }}</span>
            </span>
        </td>
      </tr>
    </table>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
