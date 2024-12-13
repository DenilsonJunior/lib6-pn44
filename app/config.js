var config = {
    salvarDados: true,
    debug: false,
    waterMark: false,
    language: 'pt-br',
    video: 'default',
    lms: {
        name: 'default'
    },
    acessibility: {
        tools: true,
        outlines: false,
        vlibras: false,
        customLibras: false
    },
    behaviors: {
        adaptive: false,
        width: 1920,
        height: 1080,
        fontSize: 30
    },
    modalVoltar: {
        active: false,
        msg: 'Você quer continuar de onde parou ou reiniciar o curso?',
        yes: 'CONTINUAR',
        no: 'REINICIAR',
        color: '#0a698d'
    },
    pages: [{
        uid: 'onepage',
        src: 'onepage/index.html'
    }]
};
try {
    module.exports = config;
} catch (e) {}