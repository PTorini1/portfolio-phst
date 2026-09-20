# Spec 15 — Responsividade, Acessibilidade e Performance

## Responsividade
Testar pelo menos:
- celular;
- tablet;
- notebook;
- desktop.

Garantir:
- sem overflow horizontal;
- código com scroll horizontal controlado;
- imagens responsivas;
- navegação mobile funcional.

## Acessibilidade
- HTML semântico;
- headings hierárquicos;
- navegação por teclado;
- foco visível;
- labels adequados;
- alt em imagens;
- contraste adequado;
- `aria-*` somente quando necessário.

## Performance
- evitar dependências desnecessárias;
- otimizar imagens;
- lazy loading quando apropriado;
- evitar JS para interações simples que CSS resolve;
- manter bundle enxuto.

## Critérios de aceite
O site deve ser utilizável sem mouse e não apresentar problemas básicos de layout em telas pequenas.
