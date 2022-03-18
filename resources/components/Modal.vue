<template>
    <div class="overlay"></div>
    <div class="modalContainer">
        <div class="modal">
            <h1 class="header">New Snippit</h1>
            <img
                class="thumbnail"
                v-bind:src="this.imgSrc"
                alt="image preview"
            />
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
    mounted() {
        if (this.img) {
            this.imgSrc = URL.createObjectURL(this.img);
        }
    },
    methods: {},
};
</script>

<style>
.overlay {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 60%;
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
    height: 70%;
    width: 40%;
    overflow: scroll;
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
</style>
