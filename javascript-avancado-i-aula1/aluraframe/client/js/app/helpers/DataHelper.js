class DataHelper {

    constructor() {
        throw new Error("DataHelper não pode ser instanciado!");
    }

    static dataParaTexto(data) {
        return `${data.getData()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto) {
        return new Date(
            ...texto
            .split('-')
            .map((item, indice) => item - indice %2 )
        )
    }
}