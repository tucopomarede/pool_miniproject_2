<template>
  <v-card class="container">
      <div v-if="!isUser || editUser">
          <v-text-field v-model="firstName" label="Firstname">
          </v-text-field>
          <v-text-field v-model="lastName" label="Last name">
          </v-text-field>
          <v-text-field v-model="email" label="Email">
          </v-text-field>
          <v-btn v-if="!editUser" color="blue" @click="createUser">
              Create user
          </v-btn>
          <v-btn v-else-if="editUser" color="blue" @click="createUser">
              Save user
          </v-btn>
      </div>
      <div v-else-if="isUser">
        <v-text-field readonly v-model="firstName" label="Firstname">
        </v-text-field>
        <v-text-field readonly v-model="lastName" label="Last name">
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
                del
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
          isUser: false,
          editUser: false,
          firstName: '',
          lastName: '',
          email: ''
      }
  },
  methods: {
      createUser(){
          this.isUser = true;
          this.editUser = false;
          console.log("user store infos :", this.$store.getters.getterAllUserInfos)
          this.$emit('saveUser', this.lastName)
      },
      updateUser() {
          this.editUser = true;
      },
      getUser() {

      },
      deleteUser() {
          this.firstName = ''
          this.lastName = ''
          this.email = ''
      }
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
