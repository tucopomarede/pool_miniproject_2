<template>
  <v-card class="container">
      <div v-if="!isUser || editUser">
          <v-text-field v-model="username" label="Username">
          </v-text-field>
          <v-text-field v-model="email" label="Email">
          </v-text-field>
          <v-btn v-if="!editUser" color="blue" @click="createUser">
              Create user
          </v-btn>
          <v-btn v-else-if="editUser" color="blue" @click="saveUpdateUser">
              Save user
          </v-btn>
      </div>
      <div v-else-if="isUser">
        <v-text-field readonly v-model="username" label="Username">
        </v-text-field>
        <v-text-field readonly v-model="email" label="Email">
        </v-text-field>
         <v-btn
            class="mx-2"
            fab
            dark
            color="cyan"
            @click="updateUser"
            >
            <v-icon dark>
                mdi-pencil
            </v-icon>
        </v-btn>
        <v-btn
            class="mx-2"
            fab
            dark
            color="cyan"
            @click="deleteUser"
            >
            <v-icon dark>
                mdi-delete
            </v-icon>
        </v-btn>
      </div>
  </v-card>
</template>

<script>

export default {
  name: 'User',
  props: {
  },
  data() {
      return {
          isUser: true,
          editUser: false,
          username: '',
          email: ''
      }
  },
  methods: {
      createUser(){
          this.isUser = true;
          this.editUser = false;
          console.log("user store infos :", this.$store.getters.getterAllUserInfos)
          this.$store.dispatch('setUser', {
              user: {
                email: this.email,
                username: this.username
              }
          })
          this.$emit('saveUser', this.lastName)
      },
      saveUpdateUser() {
          this.editUser = false;
          this.$store.dispatch('updateUser', {
              user: {
                email: this.email,
                username: this.username
              }
          })
      },
      updateUser() {
          this.editUser = true;
      },
      getUser() {

      },
      deleteUser() {
          this.username = ''
          this.email = ''
          this.isUser = false
          this.$store.dispatch('deleteUser')
      }
  },
  async created() {
      await this.$store.dispatch('getUserById', 4)
      const user = this.$store.getters.getterAllUserInfos;
      console.log("USER", user)

      this.username = user.username;
      this.email = user.email;
    //   if (this.defaultUser)
    // console.log('default user @ created')
  }
}
</script>

<style scoped>
.container {
    height: 50%;
    width: 30%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
