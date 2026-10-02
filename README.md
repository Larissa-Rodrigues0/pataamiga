# PataAmiga — Centro de bem-estar animal

Site institucional estático do centro de bem-estar animal **PataAmiga**.

## Estrutura

```
pataamiga/
├── index.html          # Página inicial
├── sobre.html          # Sobre (missão, visão, valores)
├── servicos.html       # Serviços
├── galeria.html        # Galeria com filtros
├── contato.html        # Localização + formulário
├── css/
│   └── style.css       # Estilos globais
├── js/
│   ├── main.js         # Tema, menu mobile, FAQ, formulário
│   └── gallery.js      # Galeria e lightbox
└── README.md
```

## Como usar

1. Abra `index.html` no navegador, **ou**
2. Suba a pasta inteira no GitHub e ative **GitHub Pages** (Settings → Pages → Deploy from branch → `/` root).

## Recursos

- Tema claro / escuro (com persistência)
- Menu mobile responsivo
- Galeria com fotos reais e filtros
- Formulário de contato
- Botão flutuante do WhatsApp
- Acessibilidade básica (ARIA, foco, reduced motion)

## Personalização

- Cores: variáveis CSS em `css/style.css` (`:root`)
- Textos e contatos: edite diretamente nos arquivos HTML
- Fotos da galeria: array `GALLERY` em `js/gallery.js`
