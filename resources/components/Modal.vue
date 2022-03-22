<template>
    <div class="overlay"></div>
    <div class="modalContainer">
        <div class="modal">
            <div v-if="mode === 'snippit'">
                <h1 class="header">New Snippit</h1>
            </div>
            <div v-else>
                <h1 class="header">New Note</h1>
            </div>
            <div v-if="mode === 'snippit'">
                <img
                    class="thumbnail"
                    v-bind:src="this.imgSrc"
                    alt="image preview"
                />
            </div>
            <form :action="'/new/' + mode" method="post" id="snippit-form">
                <input type="file" name="fileUp" id="fileUp" ref="imgInput" />
                <input
                    class="text-input"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                />
                <textarea
                    form="snippit-form"
                    class="text-input"
                    name="content"
                    id="content"
                    cols="30"
                    rows="5"
                    placeholder="Notes"
                ></textarea>
                <input
                    class="text-input"
                    type="text"
                    name="tags"
                    id="title"
                    placeholder="Separate tags by commas eg. math, physics"
                />
                <div>
                    <button type="button" @click="close" class="close">
                        Close
                    </button>
                    <input class="submit" type="submit" value="New Snippit" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal",
    props: ["mode", "img"],
    data: () => ({
        imgSrc: "",
    }),
    emits: ["modalChange"],
    mounted() {
        if (this.img) {
            this.imgSrc = URL.createObjectURL(this.img[0]);
            this.$refs.imgInput.files = this.img;
        }
    },
    methods: {
        close() {
            this.$emit("modalChange", false);
        },
    },
};
</script>

<style>
.overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 60%;
}
.close {
    padding: 8px;
    cursor: pointer;
    background-color: rgb(141, 87, 87);
    border: none;
    border-radius: 5px;
    margin: 12px 0 0 0;
    width: 96px;
}
.modalContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    background-color: #313131;
    z-index: 50;
    padding: 2rem 2rem;
    border-radius: 5%;
    width: 40%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {
    margin-bottom: 24px;
}
.thumbnail {
    max-width: 250px;
    max-height: 250px;
}
form {
    margin: 36px 0 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
#fileUp {
    display: none;
}
.text-input {
    font-size: 14px;
    resize: none;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #222222;
    width: 80%;
    margin: 8px auto;
    padding: 10px;
}
.submit {
    padding: 8px;
    cursor: pointer;
    background-color: rgb(96, 145, 130);
    border: none;
    border-radius: 5px;
    margin: 12px 0 0 36px;
    width: 96px;
}
</style>
