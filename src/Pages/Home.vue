<script setup lang="ts">
import Card from '@/Components/Card.vue';
import jinseidleImage from '@/assets/jinseidle-icon.png'
import galeriaImage from '@/assets/galeria.png'


</script>

<template>
    <div class="sectionHome">
        <span class="titleHome">Mysteries Cradle</span>
        <span class="sub-titleHome">Descubra os Misterios do Mundo de Dorits</span>
    </div>

    <div class="cardsHome">
        <Card subtitles="Jinseidle"
            text="Teste seu conhecimento sobre os personagens de Jinsei no Unmei">
            <RouterLink to="/jinseidle">
                <img class="cardImage" width="300px" :src="jinseidleImage" alt="">
            </RouterLink>
        </Card>
        <Card subtitles="Galeria"
            text="Teste seu conhecimento sobre os personagens de Jinsei no Unmei">
            <RouterLink to="/galeria">
                <img class="cardImage" width="300px" :src="galeriaImage" alt="">
            </RouterLink>
        </Card>
    </div>
</template>

<style>
.sectionHome {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    font-family: var(--font-heading);
}

.cardImage {
    padding: 10px;
    border: 1px solid var(--color-secondary);
    border-radius: 10px;
}

.cardsHome {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    gap: 60px;
    cursor: pointer;
}

.cardsHome>* {
    width: 400px;
}

.titleHome {
    font-size: 4rem;
    color: var(--color-secondary);
    max-width: 450px;
}

.sub-titleHome {
    font-size: 1.8rem;
    color: var(--color-secondary);
    max-width: 350px;
}
</style>