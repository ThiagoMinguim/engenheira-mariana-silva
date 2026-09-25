# Handoff — Campanha Google Ads da Eng. Mariana Silva

Documento para outra instância de IA com acesso ao navegador assumir a operação
desta campanha. Leia inteiro antes de qualquer ação na conta.

---

## Contexto

- **Cliente:** Eng. Mariana Silva — engenharia diagnóstica (laudos, vistorias,
  inspeção predial) em Uberaba/MG. Pessoa física, só CPF.
- **Site:** https://www.engmarianasilva.com.br/ (página única)
- **Objetivo:** gerar conversas no WhatsApp `(34) 98426-2358`
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
| Negativas | 88, nível campanha, correspondência ampla |
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

## Estado em 08/09/2026

### Números acumulados

| Janela | Impressões | Cliques | Custo | Conversões |
|---|---|---|---|---|
| 31/07–17/08 (travada) | 18 | 3 | R$ 14,94 | 0 |
| 18/08–26/08 | 167 | 13 | R$ 90,97 | 3 |
| 27/08–07/09 (aprox.) | ~238 | ~9 | ~R$ 84 | 0 |
| **Últimos 30 dias** | **414** | **23** | **R$ 182,26** | **3** |

Gasto por mês: julho R$ 128,49 · agosto R$ 145,03 · setembro R$ 51,64 (até 08/09).
Faturamento em dia, cartão normal, anúncio aprovado, campanha veiculando.

### O diagnóstico honesto

A Mariana confirmou que **nenhuma das 3 conversas chegou no WhatsApp dela**.

Investigado e descartado:

- O número no site (`553484262358`, sem o nono dígito) **funciona** — o WhatsApp
  normaliza o formato antigo brasileiro. O link abre a conta dela corretamente.
- Faturamento, aprovação do anúncio e veiculação estão todos normais.

O que sobrou, e que é o ponto central:

```
23 cliques no anúncio  →  chegaram no site
 3 cliques no WhatsApp →  13% demonstraram intenção
```

**13% de clique no CTA é uma taxa boa.** O funil não está quebrado — o volume é
que é baixo demais. R$ 182/mês com CPC de R$ 7,92 compra 23 visitantes, e 23
visitantes rendem 3 intenções. É aritmética de orçamento, não defeito técnico.

Com n=3 conversões, nenhuma conclusão sobre "por que não viraram mensagem" tem
significância estatística. Duas causas plausíveis e não distinguíveis com essa
amostra: atrito no desktop (40% dos cliques vêm de computador, onde o WhatsApp
Web exige escanear QR code) e simples acaso.

### Mudanças no site (commitadas e no ar em 08/09)

| Commit | O quê |
|---|---|
| `34476b1` | `window.gtag` passou a ser definido no parse do HTML. Antes só existia após o `load`, e cliques nos primeiros segundos eram perdidos — justamente o evento que alimenta a conversão |
| `ce4d5f0` | Card de telefone visível com link `tel:` e botão de copiar; e-mail trocado de link do Gmail para `mailto:` |
| `cbb60f0` | Documentação da campanha |

Motivo do `ce4d5f0`: no desktop o WhatsApp exige QR code, e o site não oferecia
nenhuma outra forma de contato (o número não aparecia em lugar nenhum e o e-mail
forçava login no Gmail).

### A decisão que está em aberto

| Caminho | Consequência |
|---|---|
| Manter R$ 200/mês | ~3 intenções/mês. Ads como canal secundário |
| Subir para R$ 400–500 | ~50 cliques/mês, ~6 intenções, dados suficientes para otimizar |
| Pausar o Ads | Investir no Perfil da Empresa, que é gratuito |

**Recomendação registrada:** com esse orçamento, o Perfil da Empresa verificado
provavelmente rende mais contato que os R$ 200 do Ads. Pedir avaliação a cada
cliente atendido compõe todo mês, sem CPC. O Ads faz sentido como acelerador
quando houver orçamento para volume.

### Próxima investigação sugerida (grátis)

No GA4, comparar **tráfego pago vs orgânico**: se quem chega pelo orgânico
converte e quem vem do anúncio não, o problema é qualidade de tráfego; se
ninguém converte, o site precisa de trabalho. Responde mais que qualquer ajuste
no Ads com a amostra atual.

### Pendências

- **A Mariana confirmou que quer receber pedidos de laudo/perícia de sinistro**
  (ver seção do erro nas negativas acima). A correção de `seguro`/`sinistro`
  está autorizada e ainda não foi aplicada.
- Renomear a campanha de `Mari-claude` para algo descritivo (opcional).
- Verificar no WhatsApp dela a caixa de "Solicitações de mensagem" e conversas
  arquivadas — conta Business às vezes filtra mensagem de número desconhecido.

## Documentação completa

- [`campanha.md`](./campanha.md) — plano, palavras-chave, textos do anúncio, histórico de resultados
- [`passo-a-passo.md`](./passo-a-passo.md) — guia de execução e estado da configuração
- [`negativas.txt`](./negativas.txt) — as 71 negativas
