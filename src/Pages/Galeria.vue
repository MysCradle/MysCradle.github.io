<script setup lang="ts">
import Card from '@/Components/Card.vue';
import characters, { type Personagem } from '@/assets/personagens'
import { ref } from 'vue';

const activeCard = ref<number | null>(null)

const personagens = characters

function toggleCard(id: number) {
    activeCard.value = activeCard.value === id ? null : id
}
</script>

<template>
    <div class="titleGaleria">
        <span>Galeria</span>
    </div>

    <div class="cardsGaleria">
        <Card v-for="p in personagens" :key="p.id" :title="p.nome" :class="['card', { active: activeCard === p.id }]"
            @click="toggleCard(p.id)">
            <img :src="p.image" :alt="'desenho de ' + p.nome">
            <p><strong>Idade: </strong>{{ p.idade }}</p>
            <p><strong>Raça: </strong>{{ p.raca }}</p>
            <p><strong>Classe: </strong>{{ p.classe }}</p>
            <p><strong>Habilidade: </strong>{{ p.habilidade.join(', ') }}</p>
            <p><strong>Reino: </strong>{{ p.reino }}</p>
            <p><strong>Organização: </strong>{{ p.organizacao }}</p>
            <p><strong>Estado: </strong>{{ p.estado }}</p>
            <p><strong>Descrição: </strong>{{ p.descricao }}</p>
        </Card>
    </div>
</template>

<style>
.titleGaleria {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-family: var(--font-heading);
    color: var(--color-primary);
}

.bodyCard {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.cardsGaleria {
    max-width: 1500px;
    width: 90%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.cardsGaleria>* {
    width: 100%;
    text-align: start;
    max-height: 430px;
    overflow: hidden;
    transition: all .5s;
    cursor: pointer;
}

.active {
    max-height: 100vh;
}

.cardsGaleria img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
</style>