<template>
<div class='main-container'>
    <newSnippit img='../images/snippit.svg' title='New Snippit' command='(f2)' alt='A computer icon.' />
    <newSnippit img='../images/note.svg' title='New Note' command='(f3)' alt='A note with a plus symbol.' />
</div>
</template>

<script>
import newSnippit from '../../components/NewSnippit.vue';

export default {
    name: 'index',
    components: {
        newSnippit   
    },
}

// <router-link :to="{ name: 'Register' }">Register</router-link>

</script>


<style>

.main-container {
    display: flex;
    justify-content: center;
    margin-top: 5em;
}

</style>


