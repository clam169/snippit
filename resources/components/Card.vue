<template>
    <article class='note-card'>
        <div v-if="img == 'null'" class='content'>
                <h2> {{ title }} </h2>
                <p class='note-text'> {{ text }} </p>
                <p id='tag'>Test</p>
        </div>
        <div v-else>
            <img v-bind:src="img" v-bind:alt="alt" />
            <div class='img-content'>
                <h2> {{ title }} </h2>
                <p class='img-text'> {{ text }} </p>
                <p id='tag'>Test</p>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'card',
        props: [
            'img',
            'title',
            'alt',
            'text',
        ]
    }
</script>

<style>
    .note-card img {
        min-width: 100%;
        height: 10em;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    .img-content {
        padding: 0 1em 1em 1em;
    }

    .note-card {
        width: 20.5em;
        height: 20.5em;
        margin: 1em;
        border-color: white;
        border-style: solid;
        border-radius: 15px;
        word-wrap: break-word;
        overflow-x: scroll;
    }

    .img-text {
        height: 30%;
    }

    .note-text {
        height: 50%;
    }

    .note-card h2 {
        margin-top: 1em;
    }

    .content {
        width: 80%;
    }

    .text {
        height: 80%;
    }

    #tag {
        color: black;
        display: inline-block;
        background-color: orangered;
        padding: 0.2rem;
        border-radius: 3px;
    }
    

</style>