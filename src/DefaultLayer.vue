<script setup lang="ts">
import Navbar from './Components/Navbar.vue';

</script>

<template>
    <div class="bodyDefault tema tema--escuro">
        <Navbar />
        <div class="main">
            <router-view />
        </div>
    </div>

</template>

<style>
.bodyDefault {
    min-height: 100vh;
    background-image: linear-gradient(to bottom, #00000000, var(--color-primary));
}
</style>