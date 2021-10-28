<template>
 <div>
    <router-link to="/">Home </router-link>
    <router-link :to="{name: 'workingTimes', params: {id: 'test'}}">Working Times </router-link>
    <user class="user-component"/>
    <working-times class="workingtimes-component"/>
    <clock-manager class="clockmanager-component"/>
    <!-- <chart-manager /> -->
 </div>
</template>

<script>
import User from './components/User.vue';
import WorkingTimes from './components/WorkingTimes.vue'
import ClockManager from './components/ClockManager.vue'
// import ChartManager from './components/ChartManager.vue'

export default {
  components: { User, WorkingTimes, ClockManager },
  name: 'App',

  data: () => ({

  }),
  methods: {
  }
};
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
a {
  text-decoration: none;
  margin: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.workingtimes-component {
  margin: 50px;
  margin-left: 50px;
  float: left;
}

.user-component {
  margin-top: 50px;
  margin-left: 50px;
  float: left;
}

.clockmanager-component {
  margin-top: 50px;
  margin-left: 50px;
  float: left;
}

</style>