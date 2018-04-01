<template>
  <div class="list-container">
    <ul class="user-list">
       <li class="user add-new" v-on:click="openUserData($event)">
        <span class="title">Adicionar novo usuário</span>
        <form @submit.prevent="addUser" class="user-data row gutters">
          <input type="text" name="first-name" placeholder="Primeiro nome" class="col col-6" v-model="newUser.name.first">
          <input type="text" name="last-name" placeholder="Sobrenome" class="col col-6" v-model="newUser.name.last">
          <fieldset class="col col-12">
            <h5>Avaliações</h5>
            <div class="row gutters">
              <div class="col col-4">
                <label for="rating-1">Primeira Nota</label>
                <input type="number" name="rating-1" max="10" v-model="newUser.rating[0]">
              </div>
              <div class="col col-4">
                <label for="rating-2">Segunda Nota</label>
                <input type="number" name="rating-2" max="10" v-model="newUser.rating[1]">
              </div>
              <div class="col col-4">
                <label for="rating-3">Terceira Nota</label>
                <input type="number" name="rating-3" max="10" v-model="newUser.rating[2]">
              </div>
            </div>
          </fieldset>
          <div class="col col-12">
            <button type="submit" class="button big">Adicionar</button>
          </div>
        
        </form>
      </li>
      <li v-for="(user, index) in users" :key="index" class="user" v-on:click="openUserData($event)">
        <div class="user-info">
          <span class="user__first-name">{{ user.name.first }}</span>
          <span class="user__last-name">{{user.name.last}}</span>
          <span class="user__id small label">id: {{user.id}}</span>  
        </div>
        
        <table class="user-data closed">
          <tr>
            <th>Status do Usuário</th>
            <th>Notas das Avaliações</th>
          </tr>
          <tr>
            <td v-if="user.active === 1">
              <span class="label success">Ativo</span>
            </td>
            <td v-else>
              <span class="label error">Inativo</span>
            </td>
            <td>
                <span v-for="(rating, ind) in user.rating" :key="ind" class="user__rating label">
                  #{{ind +1}}
                  <span class="label badge focus">
                    {{ rating }}
                  </span>
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
      users: Users,
      newUser: {
        id: Number,
        name: {
          first: '',
          last: ''
        },
        rating: []
      }
    }
  },
  methods: {
    openUserData: function(e){
      const ele = e.target.tagName == 'LI' ? e.target : e.target.parentNode;
      if (ele.tagName == 'LI' ) {
        const tableData = ele.querySelector('.user-data');
        ele.classList.toggle('open-data');
        tableData.classList.toggle('open');
      }
      
    },
    addUser() {
      const newID = this.users[this.users.length -1].id + 1;
      this.newUser.id = newID;
      this.users.push(this.newUser);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
