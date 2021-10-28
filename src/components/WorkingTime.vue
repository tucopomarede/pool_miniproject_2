<template>
  <div>
      <v-card class="wt">
      <h2>{{ dataOfWt.name }}</h2>
      Start: {{ dataOfWt.start }}
      End: {{ dataOfWt.end }}
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'WorkingTime',
  props: ['dataOfWt'],
  data() {
      return {
          userId: '',
          workingTimes: ''
      }
  },
  methods: {
      createWorkingTime() {

      },
      updateWorkingTime() {

      },
      deleteWorkingTime() {

      }
  }
}
</script>

<style scoped>

.wt {
    margin-top: 20px;
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
