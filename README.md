# Simeon — Landing page responsiva

Projeto front-end inspirado na captura de tela enviada.

## Como executar
1. Extraia o arquivo ZIP.
2. Abra a pasta `simeon-website`.
3. Abra `index.html` no navegador. Para desenvolvimento, recomendamos a extensão **Live Server** do VS Code.

## Tecnologias
- HTML5 semântico
- CSS responsivo com abordagem mobile-first nos breakpoints
- JavaScript puro para menu mobile
- GSAP 3 + ScrollTrigger para animações de entrada e rolagem
- Google Fonts: DM Sans e DM Mono

## Estrutura
- `index.html` — estrutura e conteúdo da página
- `styles.css` — paleta, componentes e responsividade
- `script.js` — menu mobile e animações
- `assets/` — recortes de imagens extraídos da referência enviada

## Personalização
- Cores principais estão em `:root` no início de `styles.css`.
- Textos, links e preços podem ser alterados diretamente no `index.html`.
- As animações respeitam `prefers-reduced-motion`.
- GSAP e fontes são carregados por CDN; conexão com a internet é necessária para esses recursos.

## Observação
A imagem de referência tem resolução reduzida. Para manter a fidelidade visual, os previews visuais foram recortados da própria referência; em produção, substitua-os por imagens originais em alta resolução e confirme os dados comerciais, preços e integrações antes de publicar.
