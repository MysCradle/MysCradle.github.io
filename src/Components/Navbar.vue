<script setup lang="ts">
import iconLogo from '/iconMC.png'
</script>
<template>
    <div class="navbar">
        <div class="col-1">
            <RouterLink to="/">
                <img :src="iconLogo" class="iconLogo" alt="imagem da logo da mysteries cradle">
            </RouterLink>
            <RouterLink to="/galeria">
                Galeria
            </RouterLink>
            <RouterLink to="/jinseidle">
                Jinseidle
            </RouterLink>
        </div>
        <div class="col-2">
        </div>
        <div class="col-3">
            <!-- Cadastrar/Entrar -->
        </div>
    </div>
</template>
<style>
.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 1.7rem;
}

.col-1 {
    display: flex;
    align-items: center;
    gap: 20px;
}

.col-1 >* {
    transition: all .2s;
}
.col-1 >*:hover {
    transform: translateY(-2px);
}

.col-2 {
    display: flex;
    font-size: 1.5rem ;
}


.iconLogo {
    margin: auto;
    display: flex;
    width: 70px;
}


.center >* {
    flex: 1;
}

</style>