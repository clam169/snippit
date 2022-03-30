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
                <template v-if="searchResults.length > 0">
                    <template v-for="note in searchResults" :key="note.id">
                        <card
                            :img="note.img"
                            :title="note.title"
                            :text="note.text"
                            :alt="note.alt"
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
import axios from "axios";

export default {
    name: "index",
    data: () => ({
        isModal: false,
        imgFile: null,
        searchQuery: null,
        allNotes: [],
        searchResults: [],
    }),
    components: {
        newSnippit,
        card,
        modal,
    },
    mounted() {
        this.getAllNotes();
    },
    watch: {
        searchQuery(after) {
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
        getAllNotes() {
            axios
                .get("/snippit")
                .then((response) => {
                    console.log(response);
                    this.searchResults = response.data.data;
                    this.allNotes = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        search(query) {
            //test to see if "search results" will refresh
            if (query === "") {
                this.searchResults = this.allNotes;
            } else {
                // make search request with axios when database is ready
                // axios.post('/search', { params {searchQuery: query}}
                //     .then(response => this.searchResults = response.data)
                //     .catch(error=>{}));

                this.searchResults = [
                    {
                        title: "anything other than empty string",
                        text: "in the search",
                    },
                    {
                        img: "../images/red-sand.jpg",
                        title: "title",
                        text: "Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text. Testing when to trim the text",
                    },
                    { text: "testing no title" },
                    { title: "testing 4th card" },
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
