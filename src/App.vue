<template>
 <div>
    <router-link to="/">Home </router-link>
    <router-link :to="{name: 'workingTimes', params: {id: 'test'}}">Working Times </router-link>
    <user class="user-component"/>
    <working-times class="workingtimes-component"/>
    <clock-manager class="clockmanager-component"/>
 </div>
</template>

<script>
import User from './components/User.vue';
import WorkingTimes from './components/WorkingTimes.vue'
import ClockManager from './components/ClockManager.vue'

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

.workingtimes-component {
  margin-top: 50px;
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