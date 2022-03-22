<template>
    <router-view :key="$route.fullPath"></router-view>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    * {
        margin: 0 auto;
        padding: 0;

        /* Typography */
        font-family: 'Open Sans', sans-serif;
    }

    h1,
    h2,
    h3,
    p {
        color: #ffffff;
    }

    body {
        background-color: #232323;
    }

    color {
        color: #ffffff;
    }
</style>