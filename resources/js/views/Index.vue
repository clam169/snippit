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
                height="window.innerHeight"
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
                height="window.innerHeight"
                :isModal="isModal"
                id="note"
            />
        </header>
        <main class="main-container">
            <div class="search-container">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by tag"
                />
            </div>
            <!--search stuff 
            <div class="searchStuff"> 
            -->
            <div class="cards-container">
                <template v-if="results.length > 0">
                    <template v-for="result in results" :key="result.id">
                        <card
                            :img="result.img"
                            :title="result.title"
                            :text="result.text"
                            :alt="result.alt"
                        />
                    </template>
                </template>
            </div>
            <!--
            </div>
             end of search stuff -->

            <!--

            <card
                img="../images/red-sand.jpg"
                title="Red Desert"
                alt="Red Desert Landscape"
                text="Where I want to travel..."
            />
            <card
                img="null"
                title="Midterm Structure"
                text="Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text."
            />
            <card img="null" title="Midterm Structure" text="C#" />

            -->
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
        searchQuery: null,
        results: [],
    }),
    components: {
        newSnippit,
        card,
        modal,
    },
    watch: {
        searchQuery(after, before) {
            this.search(after);
        },
    },
    methods: {
        modalChange(value) {
            this.isModal = value;
        },
        handleImg(img) {
            this.imgFile = img;
        },
        search(after) {
            // make search request with axios when database is ready
            // axios.post('/search', { params {searchQuery: this.searchQuery}}
            //     .then(response => this.results = response.data)
            //     .catch(error=>{}));

            //test to see if "search results" will refresh
            if (after === "") {
                this.results = [
                    {
                        img: "../images/red-sand.jpg",
                        title: "mimicking all",
                        text: null,
                    },
                    { title: "5" },
                ];
            } else {
                this.results = [
                    { title: "anything", text: "testing" },
                    { title: "5" },
                    { text: "testing no title" },
                    { text: "testing 4" },
                ];
            }
        },
    },
};

// <router-link :to="{ name: 'Register' }">Register</router-link>
</script>

<style>
input {
    color: black;
    width: 500px;
}
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
    flex-wrap: wrap;
}
.cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
