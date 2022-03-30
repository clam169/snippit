<template>
    <div class="container">
        <nav class="nav-container">
            <img src="../../images/account.svg" alt="User account icon." />
            <img src="../../images/menu.svg" alt="Menu icon." />
        </nav>
        <header class="header-container" @drop.prevent @dragover.prevent>
            <newSnippit
                @imgFile="handleImg"
                @modalChange="modalChange"
                img="../images/snippit.svg"
                title="New Snippit"
                command="Drag image to create a new snippit"
                alt="A computer icon."
                height=window.innerHeight
                :isModal="isModal"
                id="snippit"
            />
            <newSnippit
                @imgFile="handleImg"
                @modalChange="modalChange"
                img="../images/note.svg"
                title="New Note"
                command="(f3)"
                alt="A note with a plus symbol."
                height=window.innerHeight
                :isModal="isModal"
                id="note"
            />
        </header>
        <main class="main-container">
            <card img="../images/red-sand.jpg" title="Red Desert" alt="Red Desert Landscape" text="Where I want to travel..." />
            <card img="null" title="Midterm Structure" text="Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text." />
            <card img="null" title="Midterm Structure" text="C#" />
        </main>
        <div v-if="isModal === 'snippit'">
            <modal mode="snippit" @modalChange="modalChange" :img="imgFile" />
        </div>
        <div v-if="isModal === 'note'">
            <modal mode="note" @modalChange="modalChange" :img="imgFile" />
        </div>
    </div>
</template>

<script>
import newSnippit from "../../components/NewSnippit.vue";
import card from "../../components/Card.vue";
import modal from "../../components/Modal.vue";

export default {
    name: "index",
    data: () => ({
        isModal: false,
        imgFile: null,
    }),
    components: {
        newSnippit,
        card,
        modal,
    },
    methods: {
        modalChange(value) {
            this.isModal = value;
        },
        handleImg(img) {
            this.imgFile = img;
        },
    },
};

// <router-link :to="{ name: 'Register' }">Register</router-link>
</script>

<style>
.container {
    width: 80%;
}

.nav-container {
    text-align: right;
}

.nav-container img {
    width: 1.5em;
    margin: 1em;
}

.header-container {
    display: flex;
    justify-content: center;
    margin-top: 2em;
}

.main-container {
    display: flex;
    justify-content: center;
}
</style>
