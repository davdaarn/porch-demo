<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="p-36"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
 components: {
   Navbar
 }
}
</script>


<style lang="scss">

</style>
