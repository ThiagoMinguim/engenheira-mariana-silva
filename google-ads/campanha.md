# Campanha Google Ads — Eng. Mariana Silva

Engenharia diagnóstica em Uberaba/MG. Orçamento: **R$ 200/mês**.
Objetivo: gerar conversas no WhatsApp (`+55 34 8426-2358`).

---

## 1. Expectativa realista antes de começar

R$ 200/mês = **R$ 6,60/dia**.

**Dados reais da conta (julho/2026, campanha anterior):**

| Métrica | Valor real |
|---|---|
| Custo | R$ 128,49 |
| Cliques | 13 |
| **CPC médio** | **R$ 9,88** |
| CTR | 4,85% |
| Conversões | 2 |
| Taxa de conversão | 15,38% |
| Custo por conversão | R$ 64,25 |

O CPC de ~R$ 10 é o número que manda aqui — bem acima do que se estimaria para o
nicho. Já a taxa de conversão de 15% é excelente: **quando o clique é certo, ele
vira contato.** O problema a resolver não é a página, é o preço do clique.

| Métrica | Projeção mensal com R$ 200 |
|---|---|
| Cliques (se CPC seguir ~R$ 10) | ~20 |
| Cliques (se CPC cair para ~R$ 6) | ~33 |
| **Conversas geradas** | **3 a 5** |

Com base no custo por conversão histórico (R$ 64,25), R$ 200/mês deve comprar
cerca de 3 conversas. O orçamento foi definido em R$ 200 em vez de R$ 100
justamente para gerar volume mínimo de dados: com R$ 100 seria 1 clique a cada
2 dias, e nenhuma decisão de otimização teria base estatística.

O CPC tende a cair com correspondência exata/frase, negativas e CTR alto (o
Índice de Qualidade reduz o custo do clique), mas não espere que chegue a R$ 3.

Duas consequências que definem toda a estratégia abaixo:

1. **Não há orçamento para aprender errando.** Correspondência ampla, Display,
   parceiros de pesquisa e Performance Max queimariam o mês inteiro em 3 dias.
   Tudo aqui é frase/exata, só Pesquisa.
2. **Não dá para dividir o orçamento.** Começar com **1 campanha e 1 grupo de
   anúncios**. Dividir por serviço só quando o orçamento passar de ~R$ 600/mês.

> **O Perfil da Empresa no Google já está verificado — use isso.** Com esse
> orçamento, o perfil gratuito tende a trazer mais contatos que a campanha paga.
> Vale manter fotos de serviços atualizadas e pedir avaliação a cada cliente
> atendido: cada avaliação nova rende busca local de graça, todo mês, sem CPC.
> O Ads entra como complemento, não como canal principal.

> **Antes de confiar na estimativa acima:** a conta já rodou campanha no passado.
> O CPC médio real do histórico vale mais que qualquer estimativa minha — veja
> como puxar esse dado na Sessão 1 do [`passo-a-passo.md`](./passo-a-passo.md).

---

## 2. Configuração da campanha

**Nome:** `Pesquisa — Uberaba — Engenharia Diagnóstica`

| Configuração | Valor | Por quê |
|---|---|---|
| Objetivo | Criar **sem orientação de objetivo** | Evita que o Google force recursos automáticos |
| Tipo | **Rede de Pesquisa** | — |
| Rede de Display | **DESMARCAR** | Vem marcado por padrão e consome o orçamento com cliques sem intenção |
| Parceiros de pesquisa | **DESMARCAR** | Tráfego de baixa qualidade |
| Orçamento diário | **R$ 6,60** | O Google pode gastar até 2x num dia, mas nunca passa de 30,4x no mês — teto real de R$ 200 |
| Estratégia de lances | **Maximizar cliques** com limite de CPC de **R$ 12,00** | Sem histórico suficiente, lance por conversão não funciona. R$ 6,00 foi tentado primeiro e travou a campanha (ver aprendizado de 17/08) — o teto precisa ficar **acima** do CPC histórico de R$ 9,88, não abaixo |
| Locais | **Uberaba, MG + raio de 100 km** | Cobre Uberlândia, Araxá, Frutal, Conceição das Alagoas |
| Opções de local | **"Presença: pessoas que estão ou frequentam"** | O padrão é "presença ou interesse" e traz gente de fora da região |
| Idioma | Português | — |
| Rotação de anúncios | Otimizar | — |

### Programação de anúncios (crítico)

Com R$ 6,60/dia não dá para pagar um clique às 2h da manhã que ninguém responde.
Limitar ao horário em que a Mariana atende (o mesmo que já está no site):

- **Segunda a sexta:** 07:00 – 18:00
- **Sábado:** 08:00 – 12:00
- **Domingo:** desligado

### URL final dos anúncios

```
https://www.engmarianasilva.com.br/
```

**Opções de URL da campanha: deixar em branco.** Não configurar modelo de
rastreamento com UTMs.

A conta do Ads já está vinculada ao GA4 (é de lá que vem a conversão importada),
e o Google aplica *auto-tagging* via `gclid` automaticamente — o tráfego pago já
aparece separado no GA4 sem configuração nenhuma. Um modelo de rastreamento
manual seria redundante e é uma das causas mais comuns de anúncio reprovado,
porque um erro de digitação quebra a URL final.

---

## 3. Palavras-chave

**Só correspondência de frase (`"..."`) e exata (`[...]`). Nunca ampla.**

### Iniciar com estas (prioridade 1)

Termos de quem já decidiu contratar:

```
[laudo tecnico engenheiro civil]
"laudo tecnico predial"
"laudo tecnico de engenharia"
[vistoria cautelar de vizinhanca]
"vistoria cautelar vizinhanca"
"inspecao predial uberaba"
"engenheiro civil laudo uberaba"
"laudo de infiltracao"
"laudo tecnico rachadura"
"perito engenheiro civil"
```

### Adicionar só se sobrar orçamento (prioridade 2)

```
"vistoria de recebimento de obra"
"vistoria de entrega de obra"
"laudo tecnico de fachada"
"plano de manutencao predial"
"vistoria locativa"
"laudo tecnico para reforma"
"assistente tecnico judicial engenharia"
"laudo de vistoria de imovel"
```

> Não usar "vistoria" ou "laudo" soltos em nenhuma correspondência — puxam
> vistoria veicular e laudo médico, que sozinhos consumiriam o mês.

---

## 4. Palavras-chave negativas

Adicionar **antes de ativar a campanha**, não depois. Criar como lista
compartilhada em *Ferramentas → Gerenciador de exclusões*.

**Vistoria veicular** (o maior desperdício desse nicho — "vistoria cautelar"
também é termo de carro):
```
veicular, veiculo, carro, moto, detran, transferencia, sinistro, seguro,
despachante, cautelar veicular
```

**Cursos e carreira:**
```
curso, cursos, faculdade, graduacao, pos, mba, concurso, edital, apostila,
salario, quanto ganha, quanto custa para ser, vagas, emprego, estagio,
contrata, curriculo, como ser, como se tornar
```

**Grátis / faça você mesmo:**
```
gratis, gratuito, modelo, template, exemplo, pdf, download, baixar, word,
docx, planilha, como fazer, passo a passo, tutorial, o que e
```

**Software:**
```
software, aplicativo, app, sistema, programa, planilha
```

**Fora do escopo de serviços do site:**
```
arquiteto, ambiental, avcb, bombeiro, laudo medico, laudo pericial medico,
avaliacao de imovel, itbi, laudo de avaliacao, ensaio de solo
```

> `avaliacao de imovel` / `laudo de avaliacao` (NBR 14653) está negativado porque
> não consta nos serviços do site. Se a Mariana fizer avaliação imobiliária,
> remova essas três e adicione como palavra-chave — é um termo com bom volume.

---

## 5. Anúncio responsivo de pesquisa (RSA)

Um único anúncio no grupo. Todos os textos abaixo já estão dentro do limite de
caracteres do Google (30 para títulos, 90 para descrições).

### Títulos (15)

| # | Título | Fixar |
|---|---|---|
| 1 | Laudo Técnico em Uberaba | Posição 1 |
| 2 | Engenheira Civil com CREA | — |
| 3 | Vistoria Cautelar Vizinhança | — |
| 4 | Inspeção Predial em Uberaba | — |
| 5 | Laudo Técnico de Engenharia | — |
| 6 | Uberaba e Região | — |
| 7 | Orçamento pelo WhatsApp | — |
| 8 | Trinca, Umidade, Infiltração | — |
| 9 | Diagnóstico de Patologias | — |
| 10 | Perícia em Ação Judicial | — |
| 11 | Fale com a Engenheira Hoje | — |
| 12 | Laudo Conforme Normas ABNT | — |
| 13 | Vistoria de Entrega de Obra | — |
| 14 | Resposta Rápida no WhatsApp | — |
| 15 | Eng. Mariana Silva | — |

Fixar o título 1 na posição 1 garante que o termo principal sempre apareça.
O resto o Google combina sozinho.

### Descrições (4)

1. `Vistorias, inspeções e laudos técnicos para imóveis, obras e reformas. Fale no WhatsApp.`
2. `Engenheira civil especializada em engenharia diagnóstica. Atende Uberaba e região.`
3. `Trincas, umidade e infiltração? Descubra a causa antes que vire um reparo caro.`
4. `Laudo técnico fundamentado e conforme as normas. Peça seu orçamento sem compromisso.`

### Caminho de exibição

São dois campos separados de até 15 caracteres cada. O domínio
(`engmarianasilva.com.br`) o Google preenche sozinho — você só digita:

| Campo 1 | Campo 2 |
|---|---|
| `laudos` | `uberaba` |

Resultado exibido: `engmarianasilva.com.br/laudos/uberaba`
(é só texto do anúncio, não precisa existir como página real)

---

## 6. Recursos (extensões)

Todos são gratuitos e aumentam o CTR — com esse orçamento, cada ponto de CTR
importa porque reduz o CPC.

### Sitelinks

| Texto | Descrição 1 | Descrição 2 | URL |
|---|---|---|---|
| Serviços Especializados | Vistorias, laudos e perícia. | Veja o que é feito em cada serviço. | `/#services` |
| Problemas que Diagnostico | Trincas, umidade e infiltração. | Veja se o seu caso está na lista. | `/#problemas` |
| Sobre a Engenheira | Engenheira civil com CREA ativo. | Especializada em diagnóstico. | `/#about` |
| Falar no WhatsApp | Envie uma foto do problema. | Resposta em horário comercial. | `/#contact` |

### Frases de destaque

`CREA Ativo` · `Conforme Normas ABNT` · `Uberaba e Região` ·
`Orçamento sem Compromisso` · `Atendimento Direto` · `Laudo Detalhado`

### Snippets estruturados

Cabeçalho **Serviços**:
`Vistorias` · `Inspeção Predial` · `Laudos Técnicos` · `Perícia Judicial` ·
`Plano de Manutenção` · `Assistência Técnica`

### Chamada

`(34) 8426-2358` — ativar somente no mesmo horário da programação de anúncios.

### Local

Vincular o Perfil da Empresa no Google à conta do Ads.

---

## 7. Conversão — já está funcionando

**Nada a fazer no código.** A conta já tem a conversão certa configurada:

> `Contato (Evento do Google Analytics whatsapp_click)`
> Origem: **Site (Google Analytics GA4)** · Principal · Incluída nas metas da conta

O site dispara o evento `whatsapp_click` a cada clique em botão de WhatsApp
(hero, serviços, patologias, contato, botão flutuante), o GA4 captura e o Ads
importa como conversão. Já registrou 2 conversões em julho/2026.

**Único ajuste necessário:** mudar a **Contagem** de "Todas" para **"Uma"**.
Com "Todas", a mesma pessoa clicando em 3 botões vira 3 conversões — infla o
número e engana a otimização. Para lead, o correto é "Uma".

### As outras ações de conversão da conta (ignorar)

| Ação | Por que ignorar |
|---|---|
| `Calls from Smart Campaign Ads` 🔒 | Resquício de Campanha Inteligente, não editável |
| `Smart campaign map clicks to call` 🔒 | idem |
| `Smart campaign ad clicks to call` 🔒 | idem |
| `Smart campaign map directions` 🔒 | idem |
| `Clicks to call` | Vem do Perfil da Empresa, não do site |
| `Local actions - Directions` | Vem do Perfil da Empresa, não do site |

As com cadeado não podem ser excluídas, mas não disparam — só existiriam numa
Campanha Inteligente, que não será usada.

### Sobre a tag nativa do Ads (opcional, não fazer agora)

O código tem `window.GOOGLE_ADS_ID` (`index.html`) e `GOOGLE_ADS_CONVERSION`
(`src/lib/gtag.js`) preparados para a tag nativa do Google Ads, que é mais
precisa e sem atraso. **Deixe vazios.** A conversão via GA4 já funciona e tem
histórico; trocar agora zeraria o aprendizado sem ganho relevante nesse volume.
Vale considerar só se o orçamento crescer muito.

---

## 8. Rotina de otimização

### Semana 1 — todo dia (5 min)

Abrir **Palavras-chave → Termos de pesquisa** e negativar tudo que não for
intenção de contratar. É aqui que o orçamento é salvo ou perdido. Nos primeiros
dias, esperar negativar 5 a 15 termos.

### Semanas 2 a 4 — 2x por semana

- Continuar limpando termos de pesquisa (tende a cair para 1–2 por semana)
- Verificar se o CPC médio está abaixo de R$ 3,00; se estiver estourando,
  pausar as palavras-chave mais caras que não converteram
- Conferir a coluna **Parcela de impressões perdida (orçamento)** — se estiver
  acima de 80%, é sinal de que o orçamento é o limitante, não a campanha

### Após 30 dias — decisão

| Resultado | Ação |
|---|---|
| 3+ conversas, alguma virou serviço | Funcionou. Aumentar para R$ 300–500/mês e só então separar em grupos por serviço |
| 1–2 conversas, nenhuma fechou | Manter, cortar para as 4 palavras-chave que geraram clique e reavaliar em 30 dias |
| 0 conversas em 30+ cliques | O problema não é a campanha, é a conversão do site. Pausar o Ads e revisar a página antes de gastar mais |
| Menos de 15 cliques no mês | CPC alto demais para o orçamento. Ads não é o canal viável agora — focar no Perfil da Empresa |

### Não fazer

- Aceitar as "recomendações" automáticas do Google (quase todas ampliam
  correspondência ou ligam Display — com R$ 3/dia isso destrói a campanha)
- Ativar aplicação automática de recomendações
- Ligar Performance Max ou Display
- Mexer nos lances antes de 14 dias

---

## Aprendizado de 17/08/2026 — não colocar a cidade na palavra-chave

Três palavras-chave foram desativadas pelo Google com status
**"Não qualificada — Baixo volume de pesquisas"**:

- `"inspeção predial uberaba"`
- `"engenheiro civil laudo uberaba"`
- `"laudo técnico rachadura"`

**As duas primeiras têm "uberaba" no texto.** Quem pesquisa de dentro da cidade
não digita o nome dela — o Google já sabe a localização. E como a campanha já
segmenta por raio de 100 km de Uberaba, incluir a cidade na palavra-chave filtra
a mesma coisa duas vezes e o volume vai a zero.

**Regra:** deixar a geografia para a segmentação de local, nunca para a
palavra-chave. Palavras-chave curtas e genéricas em correspondência de frase, com
a lista de negativas fazendo a proteção.

Distribuição real das 18 impressões dos primeiros 18 dias:

| Palavra-chave | Impressões |
|---|---|
| `"laudo técnico predial"` | 11 (3 cliques, CTR 27,27%) |
| `"laudo técnico de engenharia"` | 5 |
| `"laudo de infiltração"` | 1 |
| `"perito engenheiro civil"` | 1 |
| as outras 6 | 0 |

Palavras em **correspondência exata** (`[...]`) tiveram zero impressões — nesse
volume de busca, exata é restritiva demais. Preferir frase.

---

## Resultado da correção — 26/08/2026

Em 17/08 duas mudanças foram feitas: limite de CPC de R$ 6,00 → **R$ 12,00** e
+10 palavras-chave genéricas (sem o nome da cidade).

| Métrica | 31/07–17/08 (18 dias) | 18/08–26/08 (9 dias) |
|---|---|---|
| Impressões | 18 (1/dia) | **166 (18,4/dia)** |
| Cliques | 3 | **13** |
| CTR | 16,67% | 7,83% |
| CPC médio | R$ 4,98 | R$ 7,00 |
| Custo | R$ 14,94 | R$ 90,97 |
| **Conversões** | **0** | **3** |
| Taxa de conversão | 0% | **23,08%** |
| **Custo por conversa** | — | **R$ 30,32** |

**Diagnóstico confirmado:** o gargalo era o limite de lance, não a qualidade do
anúncio nem do site. O status saiu de `Configuração de lance limitada` para
`Qualificada (aprendizado)` logo após a alteração.

**Custo por conversa de R$ 30,32** — menos da metade do histórico da conta
(R$ 64,25). Taxa de conversão de 23% contra 15,38% do histórico.

**Regra aprendida:** com orçamento baixo, o instinto de apertar o limite de CPC
para "economizar" faz o oposto — trava a campanha fora dos leilões e o dinheiro
não é gasto nem gera resultado. O teto de lance precisa ficar **acima** do CPC de
mercado; quem controla o gasto é o orçamento diário, não o limite de CPC.

**Ponto de atenção:** ritmo de R$ 10,11/dia contra orçamento de R$ 6,60/dia. O
Google compensa dentro do mês (teto de 30,4x o diário), mas a campanha deve
travar por volta de 05/09 se o ritmo continuar.

### Negativas adicionadas em 26/08/2026

Após análise dos 33 termos de pesquisa do período 18–26/08:

```
vaga · quanto cobrar · quem pode fazer · dicas · nr 10 · nr 35 ·
eletricista · avaliador · mercadologica · calculista ·
calculo estrutural · projeto estrutural · dimensionamento
```

**A Mariana não faz cálculo estrutural.** O termo `engenheiro calculista
estrutural` gerou uma conversão (R$ 6,14) que era lead inaproveitável — daí as
negativas de projeto/cálculo.

> **Nunca negativar `estrutural` sozinho.** Isso mataria a palavra-chave
> `"laudo estrutural"`, que é serviço legítimo (patologia estrutural: trinca,
> recalque). As negativas são expressões de duas palavras — só bloqueiam quando
> "calculo"/"projeto" aparecem junto de "estrutural".

**Custo real por conversa aproveitável no período:** R$ 90,97 ÷ 2 = **R$ 45,48**
(descontando o lead de cálculo estrutural). Ainda abaixo do histórico de R$ 64,25.

**Observação sobre os termos de pesquisa:** todos os termos irrelevantes
(`vaga para engenheiro civil`, `laudo de nr 10`, `dicas de vistoria...`) tiveram
**0 cliques e R$ 0,00**. O anúncio se autofiltra — as negativas servem para
melhorar o Índice de Qualidade, não para cortar desperdício. O desperdício real,
se existe, está nos 87% do gasto em termos que o Google não revela.

---

## Aprendizado de 08/09/2026 — negativas não pegam plural

O termo `modelos de laudo técnico` gastou R$ 11,88 sem converter, mesmo com
`modelo` já na lista de negativas.

**Palavras-chave negativas bloqueiam apenas a forma exata digitada.** Diferente
das palavras-chave positivas, elas **não** consideram variantes aproximadas —
nem plural, nem erro de digitação, nem sinônimo. `modelo` não bloqueia `modelos`.

Por isso foram adicionados 17 plurais e variações (lista passou de 71 para 88):

```
modelos · templates · exemplos · apostilas · editais · dica · tutoriais ·
planilhas · curriculos · aplicativos · calculistas · eletricistas ·
avaliadores · arquitetos · veiculos · carros · motos
```

**Regra:** ao adicionar qualquer negativa nova, adicionar também o plural.

### Estado em 08/09/2026 — atenção

| Janela | Impressões | Cliques | Custo | Conversões |
|---|---|---|---|---|
| 18–26/08 | 167 | 13 | R$ 90,97 | **3** |
| 27/08–07/09 (aprox.) | ~238 | ~9 | ~R$ 84 | **0** |
| Últimos 30 dias | 414 | 23 | R$ 182,26 | 3 |

Custo por conversão dos últimos 30 dias: **R$ 60,75** (era R$ 30,32 na janela
boa). CTR caiu de 7,79% para ~3,6% e o CPC subiu de R$ 7,00 para ~R$ 9,88 na
janela recente.

Faturamento em dia (setembro: R$ 51,64 em 8 dias), anúncio aprovado, campanha
veiculando normalmente — a queda não é técnica.

**Pendência bloqueante:** confirmar com a Mariana se as 3 conversas de agosto
chegaram de fato no WhatsApp. A conversão mede *clique no botão*, não mensagem
enviada. Sem essa confirmação não dá para saber se o problema é qualidade de
tráfego ou o funil entre o clique e a mensagem — e a decisão de subir o
orçamento para R$ 400 fica suspensa até lá.
