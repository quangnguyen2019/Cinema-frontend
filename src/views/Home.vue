<template>
    <div>
        <Home />
        <SignIn />
    </div>
</template>

<script>
import Home from '../components/Home.comp'
import SignIn from '../views/SignIn'

export default {
    name: 'home',
    components: {
        Home,
        SignIn
    }
}
</script>

<style>
    body {
        font-family: sans-serif;
        background-color: rgb(239, 239, 239);
    }
</style>