<template>
    <article class='note-card'>
        <div class='content'>
            <h2> {{ title }} </h2>
            <p> {{ text }} </p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'card',
    props: [
        'img',
        'title',
        'text',
    ]
}
</script>

<style>

.note-card {
    width: 20.5em;
    height: 20.5em;
    margin: 1em;
    border-style: solid;
    border-radius: 15px;
}

.note-card h2 {
    margin-top: 1em;
}

.content {
    width: 80%;
}

</style>