<template>
  <div class="list-container">
    <ul class="user-list">
       <li class="user add-new" v-on:click="openUserData($event)">
        <span class="title">Adicionar novo usuário</span>
        <Form />
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
import Users from '../../public/user.json'
import Form from './Form.vue'

export default {
  name: 'List',
  data(){
    return {
      users: Users,
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
  },
  components: {
    Form
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
