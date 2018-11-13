<template>
    <ul>
        <li><router-link to="home">Home</router-link></li>
        <li><router-link to="foo">Foo</router-link></li>
        <li><router-link to="bar">Bar</router-link></li>
    </ul>
</template>
<script>
    export default {
        name: "navbar" //一定不要用nav
    }
</script>