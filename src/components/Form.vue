<template>
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
</template>

<script>
export default {
    data(){
        return{
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
        addUser() {
            const newID = this.users[this.users.length -1].id + 1;
            this.newUser.id = newID;
            this.$parent.users.push(this.newUser);
        }
    },
    computed: {
        users: function() {
            return this.$parent.users;
        }
    }
}
</script>

