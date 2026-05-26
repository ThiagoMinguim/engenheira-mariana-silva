const baseSig = '\n\nAbs.,\nMariana Silva\nEngenheira Civil — CREA Ativo\nEngenharia Diagnóstica\nmarisilva.eng.br'

export const TEMPLATES = {
  imobiliaria: [
    {
      id: 'imo_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Olá, ${nameOrFallback(name, 'pessoal da equipe')}! Tudo bem? 👋\n\nMe chamo Mariana Silva, sou engenheira civil em Uberaba especializada em *engenharia diagnóstica* — vistorias, inspeções e laudos técnicos.\n\nTrabalho com imobiliárias dando suporte em:\n• Vistoria de entrega/devolução de chaves (locação)\n• Laudo de imóvel novo (recebimento de obra)\n• Vistoria cautelar para evitar disputas\n• Laudo técnico para questões com clientes\n\nGostaria de me apresentar como parceira técnica de vocês. Posso te enviar meu portfólio ou marcar um café rápido pra te mostrar o trabalho?${baseSig}`,
    },
    {
      id: 'imo_follow_up',
      label: 'Follow-up educado',
      text: ({ name }) =>
        `Oi, ${nameOrFallback(name, 'pessoal')}! Tudo bem? 😊\n\nPassando pra retomar o contato — sei que a rotina de imobiliária é corrida. Sigo à disposição pra qualquer demanda de vistoria ou laudo técnico que vocês precisarem.\n\nSe quiser, posso te mandar um exemplo de laudo pra você ver como é o entregável. É só me dizer.${baseSig}`,
    },
  ],
  advogado: [
    {
      id: 'adv_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Dr(a). ${nameOrFallback(name, '')}, bom dia! 👋\n\nMe chamo Mariana Silva, sou engenheira civil em Uberaba e atuo com *engenharia diagnóstica* — perícias técnicas, laudos e assistência técnica em ações judiciais.\n\nGostaria de me colocar à disposição do seu escritório como assistente técnica em casos que envolvam:\n• Vícios construtivos\n• Disputas locatícias (entrega e devolução)\n• Ações de vizinhança\n• Indenizações por danos a imóveis\n• Ações contra construtoras/incorporadoras\n\nPosso te enviar meu currículo técnico e exemplos de laudos. Qual o melhor canal pra isso?${baseSig}`,
    },
    {
      id: 'adv_follow_up',
      label: 'Follow-up educado',
      text: ({ name }) =>
        `Dr(a). ${nameOrFallback(name, '')}, tudo bem? 🙂\n\nPassando pra reforçar minha disponibilidade como assistente técnica em qualquer ação que envolva engenharia/construção civil. Trabalho com prazo, escrita técnica clara e contraprova de laudo periciante.\n\nQuando surgir um caso, me chama — respondo rápido.${baseSig}`,
    },
  ],
  construtora: [
    {
      id: 'cons_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Olá, ${nameOrFallback(name, 'time')}! Tudo bem? 👋\n\nSou Mariana Silva, engenheira civil em Uberaba especializada em *engenharia diagnóstica*. Trabalho com construtoras e incorporadoras em:\n\n• Vistoria cautelar de vizinhança (antes de iniciar obra)\n• Vistoria de acompanhamento técnico\n• Vistoria de entrega de obra (proteção contra reclamações pós-entrega)\n• Laudo técnico de garantia\n\nÉ um serviço que protege a construtora de surpresas e dá documento técnico pra qualquer disputa futura. Posso te enviar meu portfólio e orçar uma vistoria modelo?${baseSig}`,
    },
  ],
  condominio: [
    {
      id: 'condo_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Olá, ${nameOrFallback(name, 'síndico(a)')}! Tudo bem? 👋\n\nMe chamo Mariana Silva, sou engenheira civil em Uberaba especializada em *engenharia diagnóstica*. \n\nPela legislação, todo prédio precisa de *Inspeção Predial periódica* e *Plano de Manutenção* — ambos os serviços eu faço por preço justo e com laudo completo, válido pra qualquer fiscalização ou seguro.\n\nTambém atendo demandas pontuais: laudo de fachada, perícia em infiltrações, vícios construtivos da entrega.\n\nQuer que eu envie um orçamento sem compromisso?${baseSig}`,
    },
  ],
  seguradora: [
    {
      id: 'seg_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Olá, ${nameOrFallback(name, '')}! Tudo bem? 👋\n\nSou Mariana Silva, engenheira civil em Uberaba — trabalho com *engenharia diagnóstica* (vistorias, laudos e perícias).\n\nMe coloco à disposição como engenheira parceira para:\n• Vistoria/laudo em sinistros de imóvel\n• Avaliação técnica para apólices\n• Perícia em causas de seguro patrimonial\n\nAtendo Uberaba e região com agilidade. Posso te enviar meu currículo técnico?${baseSig}`,
    },
  ],
  arquiteto: [
    {
      id: 'arq_apresentacao',
      label: 'Apresentação inicial',
      text: ({ name }) =>
        `Oi, ${nameOrFallback(name, '')}! Tudo bem? 👋\n\nMe chamo Mariana Silva, sou engenheira civil em Uberaba especializada em *engenharia diagnóstica*. Procuro parcerias com arquitetos e designers pra dar suporte técnico em projetos de reforma:\n\n• Vistoria prévia (antes de demolir)\n• Laudo de viabilidade técnica\n• Acompanhamento técnico durante a obra\n• Vistoria pós-obra\n\nÉ uma forma da gente proteger o seu cliente e o seu projeto. Topa um papo rápido pra trocar contato?${baseSig}`,
    },
  ],
  outro: [
    {
      id: 'outro_livre',
      label: 'Mensagem livre',
      text: ({ name }) =>
        `Olá, ${nameOrFallback(name, '')}! Tudo bem? 👋\n\nMe chamo Mariana Silva, sou engenheira civil em Uberaba especializada em engenharia diagnóstica — vistorias, inspeções prediais e laudos técnicos.\n\nGostaria de me apresentar e entender se posso te ajudar com alguma demanda técnica.${baseSig}`,
    },
  ],
}

function nameOrFallback(name, fallback) {
  if (!name) return fallback
  const trimmed = String(name).trim()
  if (!trimmed) return fallback
  return trimmed
}

export function buildWhatsAppUrl(phone, text) {
  const digits = (phone || '').replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}
