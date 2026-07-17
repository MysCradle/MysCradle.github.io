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
        <Card subtitles="Jinseidle" text="Teste seu conhecimento sobre os personagens de Jinsei no Unmei">
            <RouterLink to="/jinseidle">
                <img class="cardImage" width="300px" :src="jinseidleImage" alt="card para o jogo jinseidle">
            </RouterLink>
        </Card>
        <Card subtitles="Galeria" text="Conheça os personagens já descobertos e veja o que sabemos sobre eles">
            <RouterLink to="/galeria">
                <img class="cardImage" width="300px" :src="galeriaImage" alt="card para a galeria de personagens">
            </RouterLink>
        </Card>
    </div>
</template>

<style>
.sectionHome {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px auto;
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
    font-size: clamp(2.5rem, 10vw, 4rem);
    color: var(--color-secondary);
    line-height: 1.1;
}

.sub-titleHome {
    font-size: clamp(1.2rem, 5vw, 1.8rem);
    color: var(--color-secondary);
    margin-top: 10px;
}

.cardsHome {
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 90%;
}

.cardsHome > * {
    width: 100%;
    max-width: 400px;
}

.cardImage {
    padding: 10px;
    border: 1px solid var(--color-secondary);
    border-radius: 10px;
    width: 100%;
    height: auto;
    max-width: 300px; 
    display: block;
    margin: 0 auto;
}

@media (max-width: 950px) {
    .cardsHome {
        margin: 40px auto;
        gap: 40px;
    }
    
    .titleHome, .sub-titleHome {
        max-width: 100%;
    }
}
</style>