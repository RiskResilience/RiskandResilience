<template>
  <div id="app">
    <Header />
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Foot from "./components/Foot.vue";

export default {
  name: 'App',
  components: {
    Header,
    Foot
  }
}
</script>