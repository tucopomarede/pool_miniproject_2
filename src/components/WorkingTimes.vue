<template>
    <div>
        <v-card class="container">
            <h2>WORKING TIMES</h2>
            <div v-for="wt in allWorkTimes" :key="wt">
                <WorkingTime :dataOfWt="wt"/>
            </div>
        </v-card>
    </div>
</template>

<script>

import WorkingTime from './WorkingTime.vue'

export default {
    components: {WorkingTime},
  name: 'WorkingTimes',
  props: {
  },
  data() {
      return {
          userName: '',
          userId: '',
          workingTimes: '',
          allWorkTimes: [
              {
                  name: 'wt1',
                  start: '19:22',
                  end: '00:12'
              },
              {
                  name: 'wt2',
                  start: '09:22',
                  end: '18:12'
              },
              {
                  name: 'wt3',
                  start: '13:22',
                  end: '18:12'
              }
          ]
      }
  },
  methods: {
      getWorkingTimes() {

      },
  }
}
</script>

<style scoped>

.container {
    height: 50%;
    width: 100%;
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
