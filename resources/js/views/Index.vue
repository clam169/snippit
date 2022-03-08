<template>
    <div class='container'>
        <nav class='nav-container'>
            <img src='../../images/account.svg' alt='User account icon.' />
            <img src='../../images/menu.svg' alt="Menu icon." />
        </nav>
        <header class='header-container'>
            <newSnippit img='../images/snippit.svg' title='New Snippit' command='(f2)' alt='A computer icon.' />
            <newSnippit img='../images/note.svg' title='New Note' command='(f3)' alt='A note with a plus symbol.' />
        </header>
        <main class='main-container'>
            <card img='null' title='Midterm Structure' text='C#' />
            <card img='null' title='Midterm Structure' text='C#' />
            <card img='null' title='Midterm Structure' text='C#' />
        </main>
    </div>
</template>

<script>
    import newSnippit from '../../components/NewSnippit.vue';
    import card from '../../components/Card.vue';

    export default {
        name: 'index',
        components: {
            newSnippit,
            card 
        },
    }

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


