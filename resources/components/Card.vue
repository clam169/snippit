<template>
    <article class='note-card'>
        <div v-if="img == 'null'" class='content'>
                <h2> {{ title }} </h2>
                <p class='note-text'> {{ text }} </p>
                <div>
                    <p  v-for="tag in tags" class='tag'>{{tag.name}}</p>
                </div>
        </div>
        <div v-else class="content">
            <img class="img" :src="getImg(img)" />
            <div class='img-content'>
                <h2> {{ title }} </h2>
                <p class='img-text'> {{ text }} </p>
                <div>
                    <p  v-for="tag in tags" class='tag'>{{tag.name}}</p>
                </div>
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
            'tags'
        ],
        methods: {
            getImg() { // return default if image is null
                var photo = (this.img == null) ? "" : `storage/${this.img}`
                return photo
            },
        },
    }
</script>

<style>
    .note-card img {
        min-width: auto;
        margin: 0 auto;
        height: 10rem;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    .img-content {
        padding: 1em 1em;
        text-align: left;
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
        width: 100%;
       display: flex;
        flex-direction: column;
    }

    .text {
        height: 80%;
    }

    .tag {
        color: black;
        display: inline-block;
        background-color: slateblue;
        padding: 0.2rem;
        border-radius: 3px;
        margin: 1.4rem 8px 0 0;
    }


</style>
