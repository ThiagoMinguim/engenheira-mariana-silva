# Handoff — Campanha Google Ads da Eng. Mariana Silva

Documento para outra instância de IA com acesso ao navegador assumir a operação
desta campanha. Leia inteiro antes de qualquer ação na conta.

---

## Contexto

- **Cliente:** Eng. Mariana Silva — engenharia diagnóstica (laudos, vistorias,
  inspeção predial) em Uberaba/MG. Pessoa física, só CPF.
- **Site:** https://www.engmarianasilva.com.br/ (página única)
- **Objetivo:** gerar conversas no WhatsApp `+55 34 8426-2358`
- **Conta Google Ads:** `398-172-4009` (chazy249@gmail.com)
- **Campanha ativa:** `Mari-claude` (nome provisório, pode ser renomeada)
- **Orçamento:** R$ 200/mês = **R$ 6,60/dia**
- **Perfil da Empresa no Google:** já verificado

**Ela NÃO faz:** cálculo estrutural, projeto estrutural, avaliação de imóvel
(NBR 14653), laudo elétrico/NR-10, laudo ambiental, AVCB.

---

## Configuração atual (não alterar sem motivo forte)

| Item | Valor |
|---|---|
| Tipo | Rede de Pesquisa **apenas** |
| Rede de Display | **Desmarcada** |
| Parceiros de pesquisa | **Desmarcados** |
| Locais | Uberaba, MG + raio de 100 km |
| Opções de local | **"Presença"** (não "presença ou interesse") |
| Programação | Seg–sex 07:00–18:00 · Sáb 08:00–12:00 · Dom desligado |
| Orçamento diário | R$ 6,60 |
| Estratégia de lances | **Maximizar cliques**, limite de CPC **R$ 12,00** |
| IA Max | **Desligado** (incl. personalização de texto e expansão de URL) |
| Palavras-chave | 20, todas em frase (`"..."`) ou exata (`[...]`) |
| Negativas | 71, nível campanha, correspondência ampla |
| Anúncio | 1 RSA · 15 títulos · 4 descrições · 4 sitelinks · 6 frases de destaque |

**Conversão:** `Contato (Evento do Google Analytics whatsapp_click)`, importada do
GA4, marcada como principal. Mede clique em botão de WhatsApp no site. **Não
instalar tag nativa do Ads** — duplicaria a medição.

---

## Histórico e resultados

### Fase 1 — 31/07 a 17/08 (campanha travada)

| Métrica | Valor |
|---|---|
| Impressões | 18 (1/dia) |
| Cliques | 3 |
| Custo | R$ 14,94 |
| Conversões | 0 |

**Causa:** limite de CPC estava em R$ 6,00, abaixo do CPC de mercado. Status da
campanha: `Configuração de lance limitada`. A campanha não entrava nos leilões e
gastava R$ 0,83/dia de um orçamento de R$ 6,60.

### Correções aplicadas em 17/08

1. Limite de CPC: R$ 6,00 → **R$ 12,00**
2. +10 palavras-chave genéricas, **sem o nome da cidade**

### Fase 2 — 18/08 a 26/08 (funcionando)

| Métrica | Valor |
|---|---|
| Impressões | 166 (18,4/dia) |
| Cliques | 13 |
| CTR | 7,83% |
| CPC médio | R$ 7,00 |
| Custo | R$ 90,97 |
| Conversões | 3 (1 inaproveitável — era cálculo estrutural) |
| **Custo por conversa aproveitável** | **R$ 45,48** |

Status mudou para `Qualificada (aprendizado)`. Histórico da conta antes de tudo
isso: CPC R$ 9,88, custo por conversão R$ 64,25.

### 26/08 — 13 negativas adicionadas

`vaga · quanto cobrar · quem pode fazer · dicas · nr 10 · nr 35 · eletricista ·
avaliador · mercadologica · calculista · calculo estrutural · projeto estrutural ·
dimensionamento`

---

## ⛔ REGRAS INVIOLÁVEIS

O Google recomenda ativamente várias dessas coisas dentro da interface, com
botões azuis de "Aplicar" e promessas de "+X% conversões". **Todas devem ser
recusadas.** Com R$ 6,60/dia não há orçamento para o algoritmo aprender.

1. **Nunca usar correspondência ampla** em palavra-chave. Só frase e exata.
2. **Nunca ativar IA Max**, personalização de texto ou expansão de URL final.
3. **Nunca mudar para "Maximizar conversões"** ou qualquer lance automático por
   conversão. O volume (3 conversões) é insuficiente — precisaria de 15–30/mês.
4. **Nunca ativar Rede de Display nem parceiros de pesquisa.**
5. **Nunca mudar locais para "presença ou interesse".**
6. **Nunca clicar em "Aplicar" nas Recomendações** nem em "Adicionar todas as
   ideias" na tela de palavras-chave.
7. **Nunca negativar `estrutural` sozinho** — mataria a palavra-chave
   `"laudo estrutural"`, que é serviço legítimo (patologia estrutural: trinca,
   recalque). As negativas de cálculo são expressões de duas palavras.
8. **Negativa não pega plural nem variação.** Palavras-chave negativas bloqueiam
   apenas a forma exata digitada — diferente das positivas, que consideram
   variantes aproximadas. `modelo` não bloqueia `modelos` (isso custou R$ 11,88).
   Ao adicionar qualquer negativa, adicionar também o plural. **Mas não encher a
   lista preventivamente:** cada negativa sem evidência é risco de bloquear
   negócio real — ver o caso `seguro`/`sinistro` abaixo.

9. **Nunca colocar "uberaba" dentro da palavra-chave.** Três palavras-chave foram
   desativadas pelo Google com "Baixo volume de pesquisas" por isso. A
   segmentação geográfica já filtra a região; repetir na palavra-chave zera o
   volume. Quem digita "engenheiro civil uberaba" é alcançado pela palavra
   genérica `"engenheiro civil"` — o contrário não funciona.

---

---

## ⚠️ ERRO CONHECIDO NA LISTA DE NEGATIVAS — corrigir

`sinistro` e `seguro` estão negativados desde julho/2026, colocados por engano no
bloco de "vistoria veicular". **A Mariana atende seguradoras.**

O material de prospecção dela (`src/lib/prospectar/templates.js`, segmento
`seguradora`) oferece explicitamente:

- Vistoria/laudo em sinistros de imóvel
- Avaliação técnica para apólices
- Perícia em causas de seguro patrimonial

Ou seja, a campanha bloqueia buscas de um serviço que ela prospecta ativamente
(`laudo para seguradora`, `perícia de sinistro em imóvel`, etc.).

**Correção pendente de autorização do dono da conta:**

1. Remover `sinistro` e `seguro` das negativas
2. Adicionar negativas específicas do contexto automotivo/pessoal no lugar:
   `seguro de carro · seguro auto · seguro de vida · seguro viagem ·
   cotacao de seguro · corretor de seguros · seguro residencial preco`
3. Avaliar adicionar as palavras-chave `"laudo para seguradora"`,
   `"pericia de sinistro"`, `"laudo de sinistro"`

Os termos `veicular`, `veiculo`, `carro`, `moto`, `detran` continuam na lista e
já filtram boa parte do contexto de carro.

## O que PODE ser feito

- Ler **Insights e relatórios → Termos de pesquisa** e negativar termos
  claramente irrelevantes (emprego, curso, DIY, serviços que ela não presta)
- Verificar métricas e reportar
- Conferir se o anúncio segue "Aprovado" e a campanha "Ativada"

## O que NÃO fazer sem falar com o dono da conta

- Alterar orçamento
- Alterar limite de CPC
- Pausar ou remover palavras-chave
- Criar campanha nova

---

## Estado em 26/08 e pendências

- Gasto de agosto: ~R$ 106 de R$ 200. A campanha pode travar por atingir o teto
  antes do fim do mês; setembro reinicia.
- Ritmo atual: R$ 10,11/dia contra orçamento de R$ 6,60/dia (o Google compensa
  dentro do mês, sem estourar o total).
- **Pendente:** confirmar com a Mariana se os 3 contatos de 18–26/08 realmente
  chegaram no WhatsApp. Se ela viu menos que 3, há gente clicando no botão e
  desistindo — aí o ajuste é na mensagem pré-preenchida do site, não no Ads.
- **Decisão de setembro:** se o custo por conversa aproveitável seguir abaixo de
  R$ 50, avaliar subir o orçamento de R$ 200 para R$ 400.

## Limitação conhecida

87% do gasto (R$ 79,31 de R$ 90,97) foi para termos de pesquisa que o Google não
revela, alegando privacidade. Não é erro de configuração — é limitação da
plataforma. A defesa é manter correspondência de frase e a lista de negativas.

---

## Documentação completa

- [`campanha.md`](./campanha.md) — plano, palavras-chave, textos do anúncio, histórico de resultados
- [`passo-a-passo.md`](./passo-a-passo.md) — guia de execução e estado da configuração
- [`negativas.txt`](./negativas.txt) — as 71 negativas
