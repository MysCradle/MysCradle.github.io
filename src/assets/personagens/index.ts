export interface Personagem {
    id: number
    nome: string
    image?: string
    idade: number
    raca: 'Humano' | 'Monstro' | 'Híbrido'
    classe: 'Mago' | 'Feiticeiro' | 'Andarilho'
    habilidade: string[]
    reino: 'Samir' | 'Astas' | 'Fukushi' | 'Apoena'
    organizacao: 'Jinsei no Unmei' | 'Redemon' | '???'
    estado: 'vivo' | 'morto'
    descricao: string
}

const files = import.meta.glob<{ default: Personagem }>('./*/index.ts', { eager: true })

export default Object.fromEntries(
    Object.entries(files).map(([key, value]) => [
        key.replace('./', '').replace('/index.ts', ''),
        value.default
    ])
) as Record<string, Personagem>