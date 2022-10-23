export interface IMensagem {
    titulo?: string, 
    mensagem?: string,
    topico?: number[],
    imagem?: {
        uri?: string
        base64?: string | any
    }
    file?: string
}

export interface IMensagemResponse{
    status:string,
    message: string,
    data: {
        id: number
        titulo: string
        mensagem: string
        imagem: string
        created_at: Date
        topicos: {
            id: number
            topico: string
        }[]
        user: {
            id: number
            name: string
        }
    }[]
}

export interface IMensagemState {
    id: number
    titulo: string
    mensagem: string 
    created_at: Date
    topicos: {
        id: number
        topico: string
    }[]
    user: {
        id: number
        name: string
    }
}