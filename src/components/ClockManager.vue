<template>
  <div>
      <v-card class="container">
          Start: {{ startDateTime }}
          <v-btn v-if="!clockIn" @click="clock">
              start clock
          </v-btn>
          <v-btn v-else @click="refresh">
              stop clock
          </v-btn>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'ClockManager',
  props: {
  },
  data() {
      return {
          startDateTime: null,
          endDateTime: null,
          clockIn: false,
      }
  },
  methods: {
      getTimeNow() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        
        return dateTime;
      },
      refresh() {
            this.clockIn = false;
            this.endDateTime = this.getTimeNow();
            console.log("GOT THIS WORKING TIME: start :", this.startDateTime, ", end :", this.endDateTime)
      },
      clock() {
        this.clockIn = true;
        
        this.startDateTime = this.getTimeNow();
      }
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
