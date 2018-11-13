<template>
  <div id="app">
    <img src="./public/vue.png" alt="vue">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
    name: "app",
    components: { navbar }
};
</script>

<style>
@import "~@/style/style.css";
/* @import "./style/style.css"; */
</style>
