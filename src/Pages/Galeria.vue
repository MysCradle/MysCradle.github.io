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
        <Card v-for="p in personagens" :key="p.id" :title="p.nome" :class="['cardG', { active: activeCard === p.id }]"
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
    padding: 1rem;
    flex-grow: 1;
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
    transition: max-height 0.5s ease-in-out, box-shadow 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.cardsGaleria p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: 5px 0;
}

.active {
    max-height: 2000px !important;
}

.cardsGaleria img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    flex-shrink: 0;
    /* Impede a imagem de diminuir para dar espaço ao texto */
}

.cardG:not(.active) {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}

@media (max-width: 480px) {
    .cardsGaleria {
        grid-template-columns: 1fr;
        /* Força uma coluna em celulares pequenos */
        width: 95%;
    }
}
</style>