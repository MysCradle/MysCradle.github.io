<script setup>
import { onMounted, ref } from 'vue'
import characters from '@/assets/personagens'
import none from '@/assets/personagens/none.png'


class Personagem {
    constructor(nome, idade, raca, especialidade, reino, organizacao, vivo) {
        this.nome = nome
        this.idade = idade
        this.raca = raca
        this.especialidade = especialidade
        this.reino = reino
        this.organizacao = organizacao
        this.vivo = vivo
    }
}

const personagens = new Set()
personagens.add(new Personagem('Astas', 240, 'Humano', 'Mago', 'Astas', 'Realeza', true))
personagens.add(new Personagem('Apoena', 300, 'Humano', 'Investigador', 'Apoena', 'Realeza', true))
personagens.add(new Personagem('Fukushi', 234, 'Humano', 'Feiticeiro', 'Fukushi', 'Realeza', true))
personagens.add(new Personagem('Samir', 200, 'Humano', 'Lutador', 'Samir', 'Realeza', true))

personagens.add(new Personagem('Boíren', 36, 'Híbrido', 'Ferreiro', 'Astas', '???', true))
personagens.add(new Personagem('Boris', 50, 'Humano', 'Feiticeiro', 'Astas', '???', true))
personagens.add(new Personagem('Kama', 20, 'Híbrido', 'Andarilho', 'Apoena', '???', true))
personagens.add(new Personagem('Taira', 15, 'Humano', 'Mago', 'Samir', '???', true))
personagens.add(new Personagem('Zack', 15, 'Humano', 'Espadashin', 'Samir', '???', true))

personagens.add(new Personagem('Billat', 18, 'Humano', 'Investigador', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Jasper', 22, 'Humano', 'Mercenario', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Sifor', 120, 'Humano', 'Investigador', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Sudoki', 22, 'Humano', 'Arqueiro', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Hooda', 24, 'Híbrido', 'Investigador', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Kalleb', 24, 'Híbrido', 'Investigador', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('André', 30, 'Monstro', 'Mago', 'Apoena', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Dr Klaus', 34, 'Monstro', 'Ferreiro', 'Apoena', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Ivan', 20, 'Monstro', 'Lutador', 'Astras', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Matheus', 30, 'Humano', 'Atirador', 'Fukushi', 'Jinsei no Unmei', true))
personagens.add(new Personagem('MAGICO', 95, 'Humano', 'Mago', 'Astas', 'Jinsei no Unmei', true))
personagens.add(new Personagem('LD3', 83, 'Humano', 'Lutador', 'Samir', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Dansha', 42, 'Monstro', 'Lutador', 'Apoena', 'Jinsei no Unmei', true))
personagens.add(new Personagem('Dionni', 20, 'Humano', 'Mago', 'Fukushi', 'Jinsei no Unmei', false))
personagens.add(new Personagem('Freire', 25, 'Humano', 'Caçador', 'Astas', 'Jinsei no Unmei', false))
personagens.add(new Personagem('Maggye', 60, 'Humano', 'Mago', 'Samir', 'Jinsei no Unmei', false))
personagens.add(new Personagem('Mia', 15, 'Lobo', 'Caçador', 'Astas', 'Jinsei no Unmei', null))

personagens.add(new Personagem('Dinathy', 40, 'Híbrido', 'Investigador', 'Astas', 'Redemons', true))
personagens.add(new Personagem('Killer', 25, 'Híbrido', 'Investigador', 'Astas', 'Redemons', true))
personagens.add(new Personagem('Wir', 60, 'Humano', 'Mago', 'Apoena', 'Redemons', true))
personagens.add(new Personagem('Sammie', 19, 'Monstro', 'Feiticeiro', 'Apoena', 'Redemons', true))
personagens.add(new Personagem('Kanji', 19, 'Meio-Demônio', 'Feiticeiro', 'Fukushi', 'Redemons', true))

personagens.add(new Personagem('BloodHill', 60, '???', 'Atirador', '???', '???', true))
personagens.add(new Personagem('Jhon', 54, '???', 'Lutador', '???', '???', true))

const defaultImage = ref('https://myscradle.studio/images/jinseidle-icon.png')
const assets = import.meta.glob('@/assets/*', { eager: true, import: 'default' })

function resolverImagem(caminho) {
    if (!caminho) return defaultImage.value

    if (typeof caminho !== 'string') return defaultImage.value

    if (caminho.startsWith('http://') || caminho.startsWith('https://') || caminho.startsWith('/')) {
        return caminho
    }

    const caminhoNormalizado = caminho.replace(/^@\//, '/src/')
    if (assets[caminhoNormalizado]) {
        return assets[caminhoNormalizado]
    }

    const nomeArquivo = caminho.split('/').pop()
    const entradaPorNome = Object.entries(assets).find(([key]) => key.endsWith(`/${nomeArquivo}`))
    if (entradaPorNome) {
        return entradaPorNome[1]
    }

    return defaultImage.value
}


let submit
let tbody
let test
let fim
let inputTeste
let listaSugestoes
let images
let jogos

const dataInicio = new Date('2026-01-10T00:00:00')
const hoje = new Date()
hoje.setHours(0, 0, 0, 0)

let currentGame = new Date(hoje)
let personagemSorteadoAtivo = null

onMounted(() => {
    submit = document.getElementById('submit')
    tbody = document.getElementById('tbody')
    test = document.getElementById('teste')
    fim = document.getElementById('fim')
    inputTeste = document.getElementById('teste')
    listaSugestoes = document.getElementById('sugestoes')
    images = document.getElementById('images')
    jogos = document.getElementById('jogos')

    if (images) {
        images.innerHTML = `<img src="${none || defaultImage.value}" alt="Imagem do Personagem">`
    }

    inicializarEventos()
    inicializar()
    agendarMeiaNoite()
})

function inicializar() {
    montarListaDias()
    personagemSorteadoAtivo = sortearPersonagem()
    carregarHistorico()
    exibirContagemVitorias()
}

function inicializarEventos() {
    inputTeste.addEventListener('input', () => {
        const valorDigitado = inputTeste.value.toLowerCase()

        listaSugestoes.innerHTML = ''

        if (valorDigitado.length > 0) {
            const filtrados = [...personagens].filter((p) =>
                p.nome.toLowerCase().includes(valorDigitado)
            )

            filtrados.forEach((p) => {
                const li = document.createElement('li')
                li.textContent = p.nome

                li.addEventListener('click', () => {
                    inputTeste.value = p.nome
                    listaSugestoes.style.display = 'none'
                })

                listaSugestoes.appendChild(li)
            })

            listaSugestoes.style.display = filtrados.length > 0 ? 'block' : 'none'
        } else {
            listaSugestoes.style.display = 'none'
        }
    })

    document.addEventListener('click', (e) => {
        if (e.target !== inputTeste) {
            listaSugestoes.style.display = 'none'
        }
    })

    jogos.addEventListener('change', (e) => {
        const aux = e.target.value
        currentGame = new Date(aux + 'T00:00:00')
        atualizarJogo()
    })

    submit.addEventListener('click', () => {
        const personagemTestado = personagemExiste(test.value)
        if (!personagemTestado) return

        const dataChave = `historico_${currentGame.toISOString().split('T')[0]}`
        const historicoRaw = localStorage.getItem(dataChave)
        const historico = historicoRaw ? JSON.parse(historicoRaw) : []

        if (!historico.some((p) => p.nome === personagemTestado.nome)) {
            historico.push(personagemTestado)
            localStorage.setItem(dataChave, JSON.stringify(historico))
            gerarPersonagem(personagemTestado)
        }

        if (personagemSorteadoAtivo && personagemTestado.nome === personagemSorteadoAtivo.nome) {
            fim.textContent = 'Parabéns!'
            registrarVitoria()
            exibirContagemVitorias()
        }

        test.value = ''
    })
}

function montarListaDias() {
    const listaDias = []

    jogos.innerHTML = ''

    for (let d = new Date(dataInicio); d <= hoje; d.setDate(d.getDate() + 1)) {
        listaDias.push(new Date(d).toISOString().split('T')[0])

        const opt = document.createElement('option')
        const [day, month, year] = [
            d.getDate(),
            String(d.getMonth() + 1).padStart(2, '0'),
            d.getFullYear()
        ]

        opt.textContent = `${day}/${month}/${year}`
        opt.value = new Date(d).toISOString().split('T')[0]

        if (d.toDateString() === hoje.toDateString()) {
            opt.selected = true
        }

        jogos.prepend(opt)
    }
}

function atualizarJogo() {
    personagemSorteadoAtivo = sortearPersonagem()
    tbody.innerHTML = ''
    fim.textContent = ''
    images.innerHTML = `<img src="${none || defaultImage.value}" alt="Imagem do Personagem">`
    carregarHistorico()
}

function agendarMeiaNoite() {
    const agora = new Date()
    const amanha = new Date(agora)

    amanha.setDate(amanha.getDate() + 1)
    amanha.setHours(0, 0, 0, 0)

    const tempoAteMeiaNoite = amanha - agora

    setTimeout(() => {
        sortearPersonagem()
        setInterval(sortearPersonagem, 24 * 60 * 60 * 1000)
    }, tempoAteMeiaNoite)
}

function sortearPersonagem() {
    if (personagens.size === 0) {
        return null
    }

    const selecionado = obterPersonagemDoDia()
    return selecionado
}

function obterPersonagemDoDia() {
    const itens = Array.from(personagens)
    const hojeLocal = currentGame
    const seedBase =
        hojeLocal.getFullYear() * 10000 +
        (hojeLocal.getMonth() + 1) * 100 +
        hojeLocal.getDate()

    const pseudoRandom = Math.abs(Math.sin(seedBase) * 10000)
    const indiceDessaData = Math.floor(pseudoRandom % itens.length)

    return itens[indiceDessaData]
}

function gerarPersonagem(personagem) {
    const tr = document.createElement('tr')

    for (const atr in personagem) {
        if (Object.hasOwn(personagem, atr)) {
            const td = document.createElement('td')

            let valor = personagem[atr]

            if (atr === 'vivo') {
                if (valor === true) valor = 'Sim'
                else if (valor === false) valor = 'Não'
                else if (valor === null) valor = '???'
            }

            if (atr === 'idade') {
                if (valor < personagemSorteadoAtivo[atr]) valor = `${valor} <`
                else if (valor > personagemSorteadoAtivo[atr]) valor = `${valor} >`
            }

            td.textContent = valor

            if (personagem[atr] !== personagemSorteadoAtivo[atr]) {
                td.className = 'errado'
            } else {
                td.className = 'certo'
            }

            tr.appendChild(td)
        }
    }

    images.innerHTML = `<img src="${buscarImagem(personagem.nome)}" alt="${personagem.nome}">`
    tbody.prepend(tr)
}

function carregarHistorico() {
    tbody.innerHTML = ''
    images.innerHTML = `<img src="${none || defaultImage.value}" alt="Imagem do Personagem">`
    fim.textContent = ''

    const dataChave = `historico_${currentGame.toISOString().split('T')[0]}`
    const salvo = localStorage.getItem(dataChave)

    if (salvo) {
        const historico = JSON.parse(salvo)

        historico.forEach((p) => {
            gerarPersonagem(p)

            if (p.nome === personagemSorteadoAtivo.nome) {
                fim.textContent = 'Parabéns!'
            }
        })
    }
}

function registrarVitoria() {
    const hojeTexto = new Date().toDateString()
    const ultimaVitoria = localStorage.getItem('ultimaVitoriaData')

    if (ultimaVitoria !== hojeTexto) {
        let vitoriasAcumuladas = parseInt(localStorage.getItem('vitoriasTotais')) || 0
        vitoriasAcumuladas++

        localStorage.setItem('vitoriasTotais', vitoriasAcumuladas)
        localStorage.setItem('ultimaVitoriaData', hojeTexto)

        exibirContagemVitorias()
    }
}

function exibirContagemVitorias() {
    const total = localStorage.getItem('vitoriasTotais') || 0
    const elementoContador = document.getElementById('contador-vitorias')

    if (elementoContador) {
        elementoContador.textContent = `Jogos ganhos: ${total}`
    }
}

function personagemExiste(teste) {
    return [...personagens].find((p) => p.nome === teste) || null
}

function buscarImagem(nome) {
    const nomeReal = nome.toLowerCase()
    return characters[nomeReal].image || characters.nomeReal || defaultImage.value
}
</script>

<template>
    <div class="jinseidle-page">
        <div class="titleJin">
            Jinseidle
        </div>

        <div class="bodyJin">
            <div class="chooser">
                <input id="teste" type="text" placeholder="Digite um nome..." autocomplete="off" />
                <button id="submit">></button>
            </div>

            <ul id="sugestoes" style="display: none;"></ul>

            <div id="images" class="personImage">
                <img src="https://myscradle.studio/images/jinseidle-icon.png" alt="Imagem do Personagem">
            </div>

            <div id="fim"></div>
            <div id="contador-vitorias"></div>

            <select id="jogos"></select>

            <div class="tableResult">
                <table class="ma">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Raça</th>
                            <th>Especialidade</th>
                            <th>Reino</th>
                            <th>Organização</th>
                            <th>Vivo</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
.titleJin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-family: var(--font-heading);
    color: var(--color-secondary);
}

.bodyJin {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chooser {
    width: 100%;
    max-width: 620px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
}

.chooser input {
    flex: 1;
    height: 52px;
    padding: 0 1rem;
    border: none;
    outline: none;
    border-radius: 12px;
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 1rem;
    transition: 0.2s ease;
}

.chooser input::placeholder {
    color: #94a3b8;
}

.chooser input:focus {
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.45);
}

.chooser button {
    width: 52px;
    height: 52px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(to left, var(--color-primary), #00000000);
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 5px 20px #0000002c;
}

.personImage {
    width: 100%;
    max-width: 420px;
    min-height: 260px;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
    color: #cbd5e1;
    font-size: 1.1rem;
    text-align: center;
    padding: 1rem;
    margin-bottom: 20px;
}

.tableResult {
    width: 100%;
    overflow-x: auto;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
}

.ma {
    width: 100%;
    border-collapse: collapse;
    min-width: 900px;
    font-size: 1rem;
    overflow: hidden;
}

.ma thead {
    background: rgba(59, 130, 246, 0.18);
}

.ma th {
    padding: 1rem;
    text-align: center;
    font-weight: 700;
    color: #e2e8f0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.ma td {
    padding: 0.95rem 1rem;
    text-align: center;
    color: #cbd5e1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.ma tbody tr {
    transition: background 0.15s ease;
}

.ma tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
}

.ma tbody tr:last-child td {
    border-bottom: none;
}

#sugestoes {
    list-style: none;
    padding: 0.4rem;
    width: 100%;
    max-width: 620px;
    background: var(--color-background);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    max-height: 220px;
    overflow-y: auto;
    z-index: 10;
}

#sugestoes li {
    padding: 0.8rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    color: #e2e8f0;
    transition: 0.15s ease;
}

#sugestoes li:hover {
    background: rgba(255, 255, 255, 0.08);
}

.personImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
}

#fim {
    font-size: 1.5rem;
    font-weight: bold;
    color: #22c55e;
}

#contador-vitorias {
    font-size: 1rem;
    opacity: 0.8;
}

#jogos {
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: none;
    background: var(--color-background);
    color: var(--color-text);
    margin-bottom: 20px;
}

.certo {
    background: rgba(14, 135, 14, 0.727);
    color: var(--color-preto) !important;
    font-weight: 600;
    text-align: center;
}

.errado {
    background: rgba(154, 12, 12, 0.702);
    color: var(--color-text);
    font-weight: 600;
    text-align: center;
}

@media (max-width: 768px) {
    .jinseidle-page {
        padding: 1.25rem 0.75rem 2rem;
    }

    .chooser {
        padding: 0.6rem;
        gap: 0.6rem;
    }

    .chooser input,
    .chooser button {
        height: 46px;
    }

    .personImage {
        min-height: 220px;
    }

    .tableResult {
        border-radius: 16px;
    }
}
</style>