<template>
    <div
        @click="onClick"
        @drop="dropFile"
        @dragleave="onLeave"
        @dragenter="onHover"
        class="main-card"
    >
        <img class="noPointer" v-bind:src="img" v-bind:alt="alt" />
        <h2 class="noPointer">{{ title }}</h2>
        <p class="noPointer">{{ command }}</p>
    </div>
</template>

<script>
export default {
    name: "newSnippit",
    data: () => ({
        imgFile: "",
    }),
    props: ["img", "title", "command", "alt", "isModal", "id"],
    emits: ["modalChange", "imgFile"],
    methods: {
        dropFile(e) {
            e.preventDefault();
            if (this.id === "snippit") {
                this.imgFile = e.dataTransfer.files;
                e.currentTarget.classList.remove("onFileHover");
                this.$emit("modalChange", this.id);
                this.$emit("imgFile", this.imgFile);
            }
        },
        onHover(e) {
            e.preventDefault();
            if (this.id === "snippit") {
                e.currentTarget.classList.add("onFileHover");
            }
        },
        onLeave(e) {
            e.preventDefault();
            e.currentTarget.classList.remove("onFileHover");
        },
        onClick(e) {
            if (this.id === "note") this.$emit("modalChange", "note");
        },
    },
};
</script>

<style>
.main-card {
    /* Position & Layout */
    cursor: pointer;
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
#imgInput {
    display: none;
}
.onFileHover {
    background-color: #464646;
}
.noPointer {
    pointer-events: none;
}
</style>
