<template>
    <article class='main-card'>
        <img v-bind:src='img' v-bind:alt='alt' />
        <h2> {{ title }} </h2>
        <p> {{ command }} </p>
    </article>
</template>

<script>
    export default {
        name: 'newSnippit',
        props: [
            'img',
            'title',
            'command',
            'alt'
        ]
    }
</script>

<style>
    .main-card {
        /* Position & Layout */
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;

        /* Box Model */
        margin: 2em;
        border-radius: 15px;
        width: 28em;
        padding: 1.5em;

        /* Background */
        background-color: #313131;
    }

    .main-card img {
        margin: 1em;
        height: 5.5em;
    }
</style>