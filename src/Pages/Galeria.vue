<script setup lang="ts">
import Card from '@/Components/Card.vue';
import images from '@/assets/images'
import { ref } from 'vue';

interface Personagem {
    id: number
    nome: string
    image: string
    idade: number
    raca: 'Humano' | 'Monstro' | 'Híbrido'
    classe: 'Mago' | 'Feiticeiro' | 'Andarilho' | string
    habilidade: string[]
    reino: 'Samir' | 'Astas' | 'Fukushi' | 'Apoena'
    organizacao: 'Jinsei no Unmei' | 'Redemon' | '???'
    estado: 'vivo' | 'morto'
    descricao: string
}

const activeCard = ref<number | null>(null)

const personagens: Personagem[] = [
    {
        id: 1,
        nome: 'Maggye',
        image: images.maggye,
        classe: 'Mago',
        idade: 60,
        estado: 'morto',
        habilidade: ['Controlar os 8 elementos da natureza'],
        organizacao: 'Jinsei no Unmei',
        raca: 'Humano',
        reino: 'Samir',
        descricao: 'A maga dominadora com mais diversidade elementar (fogo, água, ar, terra, raio, ferro, areia, magia)',
    },
    {
        id: 2,
        nome: 'MAGICO',
        image: images.magico,
        classe: 'Mago',
        idade: 95,
        estado: 'vivo',
        habilidade: ['Fusão'],
        organizacao: 'Jinsei no Unmei',
        raca: 'Humano',
        reino: 'Astas',
        descricao: 'Maior Mago e Feiticeiro do mundo',
    },
    {
        id: 3,
        nome: 'Kama',
        image: images.kama,
        classe: 'Andarilho',
        idade: 20,
        estado: 'vivo',
        habilidade: ['Audição'],
        organizacao: '???',
        raca: 'Híbrido',
        reino: 'Apoena',
        descricao: 'Ataca com Espada e garras que são como foices que cortam o ar',
    },
    {
        id: 4,
        nome: 'Sammie',
        image: images.sammie,
        classe: 'Feiticeiro',
        idade: 19,
        estado: 'vivo',
        habilidade: ['Invocae copias monstruosas de si'],
        organizacao: 'Redemon',
        raca: 'Monstro',
        reino: 'Apoena',
        descricao: 'jovem Feiticeira e encantadora de monstros, atrai monstros e híbridos e os ataca com suas criaturas',
    }
]

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