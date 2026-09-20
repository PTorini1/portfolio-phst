# Spec 16 — Deployment

## Objetivo
Preparar deploy automático do portfolio.

## Repositório
GitHub.

## CI
Criar GitHub Actions para:
1. instalar dependências;
2. executar lint;
3. executar build;
4. falhar o workflow se houver erro.

## Deploy
Escolher uma hospedagem adequada para SPA/React estático.

A configuração deve suportar futuramente um domínio próprio.

## Variáveis
Não commitar segredos.

Como não existe backend nesta fase, evitar variáveis de ambiente desnecessárias.

## README
Documentar:
- instalação;
- desenvolvimento local;
- build;
- preview;
- criação de artigo;
- criação de tradução;
- deploy.

## Critérios de aceite
Um push para a branch principal deve conseguir executar o pipeline de validação automaticamente e o site deve ser publicável sem configuração manual do código.
