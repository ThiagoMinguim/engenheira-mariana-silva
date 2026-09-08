# Passo a passo — colocar a campanha no ar

Guia de execução para quem nunca montou uma campanha manualmente.
O **conteúdo** da campanha (palavras-chave, anúncios, negativas) está em
[`campanha.md`](./campanha.md). Aqui é só a ordem das telas e onde se trava.

**Situação de partida:** conta do Google Ads já existe, Perfil da Empresa no
Google já verificado, já houve campanha rodando no passado.

> A interface do Google Ads muda de nome e de lugar com frequência. Os caminhos
> abaixo descrevem **o que procurar**, não coordenadas exatas de tela. Se um menu
> não estiver onde diz, use a busca da própria conta (ícone de lupa no topo).

---

## Sessão 1 — Diagnóstico da conta (20 min)

Não crie nada ainda. Primeiro descubra o que já existe.

### 1.1 — Descobrir em que MODO a conta está (decisivo)

Essa é a verificação mais importante do guia. O Google tem dois modos e o
padrão para contas novas é o **Modo Inteligente**, no qual **não é possível**:
escolher tipo de correspondência, adicionar palavras-chave negativas, desmarcar
a Rede de Display, ou definir programação de horário.

Como identificar:

| Sinal | Modo Inteligente | Modo Especialista |
|---|---|---|
| Menu lateral esquerdo | Curto, 4–6 itens | Longo: Campanhas, Públicos, Palavras-chave, Ferramentas… |
| Existe aba "Palavras-chave" com colunas de correspondência? | Não | Sim |
| Ao criar campanha, pergunta o tipo (Pesquisa/Display/PMax)? | Não | Sim |
| Em Configurações aparece "Alternar para o Modo Especialista"? | Sim | Não (já está) |

**Se estiver em Modo Inteligente:** procure em **Configurações (engrenagem) →
"Alternar para o Modo Especialista"**. Também costuma aparecer como um link
pequeno no rodapé da tela de criação de campanha.

> A mudança é **de mão única** — depois de ir para Especialista não dá para
> voltar. É exatamente o que queremos, mas saiba que é definitivo.

**Sem o Modo Especialista, pare aqui.** Nada do plano funciona no outro modo.

### 1.2 — Ler o histórico da campanha antiga

Isso é informação que dinheiro já comprou. Vale mais que qualquer estimativa
minha. Ajuste o período para **"Todo o período"** e anote:

- Em **Campanhas**: quanto foi gasto no total, o **CPC médio** e o CTR
- Em **Palavras-chave → Termos de pesquisa**: o que as pessoas realmente
  digitaram (aqui aparece se o dinheiro foi para vistoria veicular, curso, etc.)
- Em **Metas → Conversões**: já existe alguma ação de conversão configurada?

O **CPC médio real** substitui minha estimativa de R$ 2–5 e permite recalcular
quantos cliques R$ 100 compram de verdade.

### 1.3 — Limpar o terreno

- **Pausar** (não excluir) qualquer campanha antiga ainda ativa — o histórico
  serve de referência
- Se já existir ação de conversão, verifique se está contando **"Uma"** e não
  "Todas". "Todas" infla o número: a mesma pessoa clicando 3 vezes viraria 3 leads
- Em **Recomendações**, procure "aplicação automática" e **desligue tudo**. Com
  R$ 6,60/dia, uma recomendação aplicada sozinha (tipo "ampliar correspondência")
  consome o mês em dias

---

## Sessão 2 — Conversão (2 min)

**Boa notícia: já está pronta.** A conta tem a ação
`Contato (Evento do Google Analytics whatsapp_click)`, origem **Site (GA4)**,
marcada como Principal e já com conversões registradas. Não há nada para
instalar no código.

### Único ajuste

**Metas → Conversões → Resumo → Ver todas as ações de conversão** → clicar em
`Contato (Evento do Google Analytics whatsapp_click)` → **Editar configurações**
→ **Contagem** → mudar de "Todas" para **"Uma"** → Salvar.

Motivo: com "Todas", a mesma pessoa clicando no botão do hero e depois no
flutuante conta como 2 conversões. Para lead, o correto é "Uma".

### Não mexer nas outras 6 ações

As que têm cadeado (`Smart campaign …`) são resquícios de Campanha Inteligente e
não podem ser excluídas — mas também nunca vão disparar, porque esse tipo de
campanha não será usado. `Clicks to call` e `Local actions - Directions` vêm do
Perfil da Empresa. Todas estão zeradas. Ignore.

---

## Sessão 3 — Criar a campanha, PAUSADA (40 min)

Crie tudo com a campanha pausada e só ative no fim, depois da revisão.

### 3.1 — Iniciar

**Campanhas → + Nova campanha → "Criar campanha sem orientação de objetivo"**

Escolher essa opção evita que o Google force recursos automáticos. Depois:
tipo **Rede de Pesquisa** → objetivo **Leads** (ou nenhum).

### 3.2 — Onde os iniciantes perdem dinheiro

Estas quatro caixas vêm marcadas ou configuradas erradas **por padrão**:

1. **Rede de Display** → DESMARCAR
2. **Parceiros de pesquisa** → DESMARCAR
3. **Opções de local** → mudar de "Presença ou interesse" para
   **"Presença: pessoas que estão ou frequentam o local"**.
   O padrão traz gente de São Paulo pesquisando sobre Uberaba
4. **Estratégia de lances** → o Google sugere "Maximizar conversões". Com só 2
   conversões de histórico isso não funciona. Escolha **Maximizar cliques** e
   abra "definir um limite máximo de CPC" → **R$ 6,00**
   (o CPC histórico da conta é R$ 9,88; um limite de R$ 3,00 zeraria as impressões)

O resto das configurações (orçamento, raio, horários) está na tabela da
seção 2 do [`campanha.md`](./campanha.md).

### 3.3 — Preencher o conteúdo

Na ordem, copiando de [`campanha.md`](./campanha.md):

1. **Um** grupo de anúncios, nome `Laudos e Vistorias`
2. As 10 palavras-chave de prioridade 1 — com aspas e colchetes, exatamente
   como estão escritas. As aspas **são** o que define a correspondência
3. O anúncio: 15 títulos e 4 descrições, fixando o título 1 na posição 1
4. Os recursos: sitelinks, frases de destaque, snippets, chamada
5. **Vincular o Perfil da Empresa** (Recursos → Local) — como já está
   verificado, isso sai de graça e ajuda bastante em busca local

### 3.4 — Negativas

Use o arquivo [`negativas.txt`](./negativas.txt): cada termo está numa linha,
pronto para colar de uma vez.

**Ferramentas → Gerenciador de exclusões → Listas de palavras-chave negativas**
→ criar lista `Exclusões gerais` → colar tudo → aplicar à campanha.

Fazer como *lista* e não direto na campanha permite reaproveitar depois.

---

## Sessão 4 — Revisar e ativar (15 min)

Checklist antes de tirar do pause. Confira um por um:

- [ ] Conta está em **Modo Especialista**
- [ ] Rede de Display **desmarcada**
- [ ] Parceiros de pesquisa **desmarcados**
- [ ] Orçamento diário = **R$ 6,60**
- [ ] Limite de CPC = **R$ 12,00**
- [ ] Local = Uberaba + 100 km, opção **"Presença"**
- [ ] Programação = seg–sex 07–18h, sáb 08–12h, domingo desligado
- [ ] Nenhuma palavra-chave em correspondência **ampla** (sem aspas/colchetes)
- [ ] Lista de negativas **aplicada à campanha** (não só criada)
- [ ] Conversão marcada como **principal**
- [ ] Tag testada no Tag Assistant
- [ ] Aplicação automática de recomendações **desligada**
- [ ] URL final abrindo o site certo

Ativar de manhã numa segunda-feira — assim o primeiro dia roda inteiro dentro
do horário de atendimento e você acompanha ao vivo.

---

## Estado atual (31/07/2026) — campanha no ar

Campanha **`Mari-claude`** criada e ativada. Tudo verificado item por item:

| Item | Valor confirmado |
|---|---|
| Tipo | Pesquisa (Display e parceiros desmarcados) |
| Locais | 100 km ao redor de Uberaba, MG · opção **Presença** |
| Programação | Seg–sex 07:00–18:00 · Sáb 08:00–12:00 |
| Orçamento | R$ 6,60/dia |
| Lances | Maximizar cliques · limite de CPC **R$ 12,00** (corrigido em 17/08) |
| Palavras-chave | 10, todas em frase/exata |
| Negativas | 58, nível campanha, correspondência ampla |
| Anúncio | 15 títulos · 4 descrições · 4 sitelinks · 6 frases de destaque |
| IA Max | Desligado (incl. personalização de texto e expansão de URL) |
| Conversão | `Contato (GA4 whatsapp_click)` — já medindo |

**Armadilha encontrada no caminho:** a tela final de "Revisar" exibiu
`Locais: Todos os países/territórios` mesmo com a segmentação correta salva. Era
bug de exibição — o painel da campanha publicada mostrou
`100,0 km aproximadamente Uberaba, MG`. Se acontecer de novo, confie no painel
da campanha, não na tela de revisão.

**Pendências opcionais:** renomear a campanha para algo descritivo; adicionar
extensão de imagem; ajustar a contagem do evento para "uma vez por sessão" no
GA4.

## Primeira semana

**Todo dia, 5 minutos:** abrir **Palavras-chave → Termos de pesquisa**,
marcar tudo que não for intenção de contratar e clicar em "Adicionar como
palavra-chave negativa".

É a única tarefa que realmente importa no começo. Espere negativar 5 a 15 termos
nos primeiros dias — depois cai para 1 ou 2 por semana.

**Não mexa em lances nem pause palavras-chave nos primeiros 14 dias.** Com 1
clique por dia, qualquer conclusão tirada antes disso é ruído, não sinal.

---

## Diagnóstico de 17/08/2026 — campanha limitada por lance

**Sintoma:** em 7 dias, apenas **9 impressões, 1 clique, R$ 6,00 gastos** — 13% do
orçamento disponível. Status da campanha: `Configuração de lance limitada` /
`QUALIFICADA (LIMITADA)`.

**Causa:** o limite de CPC de R$ 6,00 estava abaixo do preço real de leilão. O
Google apontou direto no Diagnóstico da campanha: *"A estratégia de lances está
limitada pelo limite de lance máximo"*. O anúncio estava aprovado e com qualidade
"Bom" — não era problema de criativo nem de aprovação.

**Origem do erro:** o limite foi ancorado na estimativa de R$ 6,06 que o Google
exibiu na tela de orçamento, em vez do CPC histórico real da conta (R$ 9,88).
Estimativas dessa tela variam demais (R$ 1,78 / R$ 6,06 para a mesma campanha) —
**usar sempre o histórico da conta como referência.**

**Correções aplicadas:**

1. Limite de CPC: R$ 6,00 → **R$ 12,00**
2. Palavras-chave adicionadas (frase), para ampliar volume:
   `"engenheiro civil uberaba"` · `"laudo tecnico"` · `"laudo estrutural"` ·
   `"vistoria de imovel"` · `"inspecao predial"` · `"vistoria predial"` ·
   `"laudo de vistoria"` · `"pericia de engenharia"`

**Recomendações do Google recusadas** (aparecem insistentemente, não aplicar):
parceiros de pesquisa, extensões de imagem dinâmicas, "adicionar sitelinks"
(já existem — não apareciam por causa da posição baixa causada pelo lance).
A "pontuação de otimização" sobe ao aceitar essas sugestões; ela mede aderência
às recomendações do Google, não resultado.
