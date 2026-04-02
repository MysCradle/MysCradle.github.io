<script setup lang="ts">
const params = withDefaults(defineProps<{
    title?: string | null
    subtitles?: string | null
    text?: string | null
}>(), {
})
</script>
<template>
    <div class="card">
        <div v-if="params.title" class="titleCard">
            <span>{{ params.title }}</span>
        </div>
        <div class="bodyCard">
            <slot />
        </div>
        <div v-if="params.subtitles" class="sub-titleCard">
            <span>{{ params.subtitles }}</span>
        </div>
        <div class="text" v-if="params.text">{{ params.text }}</div>
    </div>
</template>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    padding: 35px;
    text-align: center;
    background-color: var(--color-text-contrast);
    transition: all .3s;
}

.card:hover {
    transform: translateY(-3px);
}

.titleCard, .sub-titleCard {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--color-secondary);
}
</style>