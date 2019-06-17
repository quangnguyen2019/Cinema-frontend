<template>
    <div>
        <Home />
    </div>
</template>

<script>
import Home from '../components/Home.comp'

export default {
    name: 'home',
    components: {
        Home
    }
}
</script>

<style>
    html {
        overflow: scroll;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 3px; 
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(160, 160, 160);
    }

    body {
        font-family: sans-serif;
        background-color: rgb(239, 239, 239);
    }
    
</style>