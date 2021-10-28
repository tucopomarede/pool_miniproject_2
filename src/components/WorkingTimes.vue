<template>
    <div>
        <v-card class="container">
            <h1>Your working times</h1>
            <div v-for="wt in allWorkTimes" :key="wt" class="workingTime">
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
h1 {
    margin: 20px;
}
.workingTime {
    margin: 20px;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
}
</style>