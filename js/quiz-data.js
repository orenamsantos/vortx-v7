// VORTX — Quiz Data v7 (copy reescrita: simples, direta, sem firula)

const BRAND = {
  name: "VORTX",
  tagline: "Resgate da Masculinidade",
  year: new Date().getFullYear(),
};

// ============================================================
// GATE
// ============================================================
const GATE_DATA = {
  headline: "Todo ano depois dos 40, o homem perde 23 % da sua força na hora H.",
  subheadline: "Cansaço que não passa, dificuldade em dar conta do recado e falta de disposição — em 3 minutos você entende o que pode estar acontecendo e se ainda dá tempo de melhorar",
  cta: "QUERO SABER O QUE ESTÁ ACONTECENDO COMIGO",
  socialProof: "14.281 homens já reverteram. Resultado médio: 18 dias.",
  privacySeal: "Sigilo total • Anônimo • Não compartilhado",
  badge: "Baseado em 14.281 diagnósticos reais",
};

// ============================================================
// FASES
// ============================================================
const PHASES = [
  { id: 1, label: "DANOS",     steps: [1, 2, 3, 4] },
  { id: 2, label: "SINTOMAS",  steps: [5, 6, 7, 8, 9, 10, 11] },
  { id: 3, label: "HÁBITOS",   steps: [12, 13, 14, 15, 16, 17] },
  { id: 4, label: "VEREDICTO", steps: [18, 19] },
  { id: 5, label: "RESGATE",   steps: [20, 21, 22] },
];

// ============================================================
// STEPS
// ============================================================
const STEPS = [

  // ══════════════════════════════════════════════
  // FASE 1: DANOS
  // ══════════════════════════════════════════════

  {
    id: 1,
    phase: 1,
    type: "text-input",
    question: "Primeiro, qual é o seu nome?",
    microcopy: "Cada resposta daqui pra frente vai ser analisada especificamente para você.",
    field: { name: "userName", placeholder: "Seu primeiro nome...", maxLength: 30 },
    weight: 0,
  },

  {
    id: 2,
    phase: 1,
    type: "single-select",
    question: "Quantos anos você tem hoje, {name}?",
    microcopy: "Sua idade define o ritmo da queda. Preciso saber disso primeiro.",
    options: [
      { value: "40-44", label: "40 — 44 anos",  icon: "⚠️" },
      { value: "45-49", label: "45 — 49 anos",  icon: "⚠️" },
      { value: "50-54", label: "50 — 54 anos",  icon: "🚨" },
      { value: "55-59", label: "55 — 59 anos",  icon: "🚨" },
      { value: "60-65", label: "60 — 65 anos",  icon: "🛑" },
    ],
    triggers: {
      "40-44": "⚠ Aos 40 a queda já começou. Parece pouco agora — mas em 5 anos você vai sentir como se tivesse envelhecido 20. Ainda dá tempo de virar o jogo.",
      "45-49": "⚠ Entre 45 e 49 é onde a maioria dos homens percebe que algo mudou. O problema é que a maioria espera demais pra agir.",
      "50-54": "🛑 Aos 50 você já perdeu metade da sua força hormonal. A barriga, a ereção fraca, o cansaço — não é frescura. É isso mesmo. E tem como reverter.",
      "55-59": "🛑 Essa faixa é crítica. Cada mês que passa, uma porta fecha. Mas você ainda está aqui. E isso muda tudo.",
      "60-65": "🛑 Situação grave. Seu corpo precisa de intervenção agora. O protocolo foi feito exatamente para esse estágio — e funciona mesmo aqui.",
    },
    weight: 0,
  },

  {
    id: 3,
    phase: 1,
    type: "single-select",
    question: "O que está te incomodando mais hoje?",
    microcopy: "Pode ser honesto. Ninguém está vendo.",
    options: [
      { value: "libido",  label: "Falhar na cama — ereção fraca ou sem vontade",   icon: "🔥" },
      { value: "corpo",   label: "Corpo mole, barriga crescendo, músculo sumindo",  icon: "⚖️" },
      { value: "energia", label: "Cansaço o tempo todo — sem energia pra nada",    icon: "⚡" },
      { value: "mental",  label: "Perdi o gás — sem vontade de lutar, de vencer",  icon: "🧠" },
    ],
    weight: 0,
  },

  {
    id: 4,
    phase: 1,
    type: "single-select",
    question: "Há quanto tempo você sente que não é mais o mesmo?",
    microcopy: null,
    options: [
      { value: "6m",  label: "Menos de 6 meses",            icon: "🕐", score: 3 },
      { value: "1a",  label: "Cerca de 1 ano",              icon: "🕐", score: 2 },
      { value: "3a",  label: "Já faz alguns anos",          icon: "🕐", score: 1 },
      { value: "3a+", label: "Faz tanto tempo que desisti", icon: "🕐", score: 0 },
    ],
    triggers: {
      "3a":  "⚠ Anos fingindo que é estresse. Enquanto isso, o estrago foi se acumulando. Boa notícia: ainda tem reversão.",
      "3a+": "🛑 Quanto mais tempo sem agir, mais difícil fica. Mas você ainda está aqui — e isso é o que importa agora.",
    },
    weight: 5,
  },

  // ══════════════════════════════════════════════
  // FASE 2: SINTOMAS
  // ══════════════════════════════════════════════

  {
    id: 5,
    phase: 2,
    type: "single-select",
    question: "Quando foi a última vez que você acordou duro de manhã, sem precisar de nada?",
    microcopy: "Isso é o sinal mais claro de como está sua circulação e seus hormônios. Homem saudável acorda assim todo dia.",
    options: [
      { value: "sempre", label: "Sempre — acordo assim todo dia",                   icon: "✅", score: 3 },
      { value: "raro",   label: "Raro — só quando durmo muito ou com sorte",        icon: "⚠️", score: 1 },
      { value: "nunca",  label: "Faz anos que não acontece",                        icon: "🛑", score: 0 },
    ],
    triggers: {
      "nunca": "🛑 Quando isso para, é sinal que o seu sangue não está chegando com força suficiente. O dano é silencioso — mas tem solução.",
      "raro":  "⚠ Acontece só raramente significa que sua circulação já está comprometida. Ainda dá pra recuperar isso.",
    },
    weight: 20,
    category: "libido",
  },

  {
    id: 6,
    phase: 2,
    type: "single-select",
    question: "E na cama hoje — como está de verdade?",
    microcopy: "Sem desculpa de 'foi só dessa vez'. O que realmente acontece.",
    options: [
      { value: "toro",  label: "Firme até o fim, sempre",                              icon: "💪", score: 3 },
      { value: "falho", label: "Perco a firmeza no meio ou preciso de remédio",        icon: "🚨", score: 0 },
      { value: "fujo",  label: "Invento desculpa pra não ter que tentar",              icon: "🏃", score: 0 },
    ],
    triggers: {
      "fujo":  "🛑 Fugir da própria mulher por medo de falhar é o fundo do poço. E quanto mais você foge, pior fica. Mas tem saída.",
      "falho": "🚨 Seu coração não está dando conta. O problema não é só lá embaixo — é circulação, é pressão, é sangue. E isso tem jeito.",
    },
    weight: 15,
    category: "libido",
  },

  {
    id: 7,
    phase: 2,
    type: "multi-select",
    question: "Olha pra você agora. O que você já vê?",
    microcopy: "Essa gordura produz hormônio feminino dentro de você. Isso vai direto pra sua disposição, sua ereção, seu pique.",
    minSelections: 1,
    options: [
      { value: "barriga", label: "Barriga grande — dura ou mole",      icon: "🤰" },
      { value: "peito",   label: "Peito flácido, inchado",             icon: "🍎" },
      { value: "braco",   label: "Braços finos, sem músculo",          icon: "📏" },
      { value: "rosto",   label: "Rosto inchado, sem estrutura",       icon: "🌝" },
      { value: "nenhuma", label: "Nenhuma dessas — estou bem",         icon: "✅" },
    ],
    triggers: {
      _any_except_nenhuma: "🛑 Essa gordura está fabricando hormônio feminino dentro de você agora mesmo. É isso que está derrubando seu pique, sua firmeza, seu ânimo.",
    },
    weight: 10,
    category: "corpo",
    scoreLogic: "count-negative",
  },

  {
    id: 8,
    phase: 2,
    type: "single-select",
    question: "Você já usou o remedinho azul pra conseguir funcionar?",
    microcopy: "Ele força o seu corpo a funcionar de forma artificial — e quanto mais você usa, mais você precisa.",
    options: [
      { value: "nao",     label: "Nunca precisei",                                   icon: "🚫", score: 3 },
      { value: "asvezes", label: "Já usei algumas vezes ou guardo por precaução",    icon: "💊", score: 1 },
      { value: "viciado", label: "Sem ele eu nem tento mais",                        icon: "🚨", score: 0 },
    ],
    triggers: {
      "viciado": "🛑 Seu corpo aprendeu a depender disso. Sem o remedinho, não funciona mais sozinho. Mas dá pra sair dessa — sem remédio, sem muleta.",
      "asvezes": "⚠ Usar de vez em quando parece inofensivo. Não é. Cada vez que você usa, seu corpo aprende a não funcionar sem ajuda.",
    },
    weight: 10,
    category: "fisica",
  },

  {
    id: 9,
    phase: 2,
    type: "single-select",
    question: "Como você está quando acorda de manhã?",
    microcopy: "Isso fala direto sobre seus hormônios. Não é sobre dormir mais ou menos.",
    options: [
      { value: "rei",   label: "Disposto — quero o dia, tenho foco",      icon: "🦁", score: 3 },
      { value: "zumbi", label: "Pesado, com dor, sem vontade de nada",    icon: "🧟", score: 0 },
      { value: "odio",  label: "Com raiva de ter que levantar de novo",   icon: "💢", score: 0 },
    ],
    triggers: {
      "zumbi": "🛑 Acordar com dor e sem energia não é envelhecimento. É seu corpo se destruindo à noite em vez de se recuperar. Tem como parar isso.",
      "odio":  "🛑 Raiva de existir toda manhã não é frescura. É sinal de que seus hormônios entraram em colapso. E tem saída.",
    },
    weight: 5,
    category: "energia",
  },

  {
    id: 10,
    phase: 2,
    type: "single-select",
    question: "Como você dorme hoje?",
    microcopy: "Enquanto você dorme é quando seu corpo produz os hormônios que recuperam músculo, disposição e desejo. Sem sono bom — tudo para.",
    options: [
      { value: "profundo",    label: "Bem — durmo fundo e acordo descansado",           icon: "✅", score: 3 },
      { value: "superficial", label: "Durmo mas acordo cansado mesmo assim",            icon: "⚠️", score: 1 },
      { value: "pessimo",     label: "Mal — insônia, acordo várias vezes, suor noturno",icon: "🛑", score: 0 },
    ],
    triggers: {
      "pessimo":     "🛑 Suor à noite e acordar várias vezes são sinais claros de que seus hormônios estão no chão. Cada noite assim é mais um dia de estrago.",
      "superficial": "⚠ Dormir mas não descansar é igual a não dormir. Seu corpo não está se recuperando. É como ligar o carregador mas a tomada estar folgada.",
    },
    weight: 10,
    category: "sono",
  },

  {
    id: 11,
    phase: 2,
    type: "single-select",
    question: "Depois de um esforço — quanto tempo você leva pra se recuperar?",
    microcopy: "Homem com hormônio em dia se recupera rápido. Quanto mais demora, mais o seu corpo está falhando.",
    options: [
      { value: "rapido",  label: "Rápido — disposição volta em 24 horas",    icon: "✅", score: 3 },
      { value: "lento",   label: "Lento — levo dias pra me sentir normal",   icon: "⚠️", score: 1 },
      { value: "nenhuma", label: "Não recupero — vivo no cansaço acumulado", icon: "🛑", score: 0 },
    ],
    triggers: {
      "nenhuma": "🛑 Não se recuperar nunca é o sinal mais sério. Seu corpo está se destruindo 24 horas por dia sem conseguir se consertar.",
      "lento":   "⚠ Recuperação lenta significa que seus hormônios não estão fazendo o trabalho deles enquanto você dorme.",
    },
    weight: 5,
    category: "recuperacao",
  },

  // ══════════════════════════════════════════════
  // FASE 3: HÁBITOS
  // ══════════════════════════════════════════════

  {
    id: 12,
    phase: 3,
    type: "biometric-input",
    question: "Preciso de dois números seus",
    microcopy: "Cada quilo de gordura a mais fabrica mais hormônio feminino e entope mais suas veias. Coloca os números pra calcular o estrago:",
    fields: [
      { name: "height", label: "Altura",     unit: "cm", placeholder: "175", min: 140, max: 220 },
      { name: "weight", label: "Peso Atual", unit: "kg", placeholder: "90",  min: 45,  max: 200 },
    ],
    weight: 0,
  },

  {
    id: 13,
    phase: 3,
    type: "single-select",
    question: "Você usa comida ou bebida pra aliviar o estresse?",
    microcopy: "Cerveja, fritura e açúcar são os três maiores destruidores de hormônio masculino que existem.",
    options: [
      { value: "sim",    label: "Sim — como e bebo mais quando estou mal", icon: "🍔", score: 0 },
      { value: "nao",    label: "Não — como bem, mas a barriga cresce do mesmo jeito", icon: "🥩", score: 1 },
      { value: "atleta", label: "Não — dieta limpa, sem álcool e treino regular",      icon: "✅", score: 3 },
    ],
    triggers: {
      "sim": "🛑 Comida e bebida pra aliviar o estresse destrói diretamente as células que produzem sua testosterona. Cada dose a mais é um dia a menos de pique.",
      "nao": "⚠ Comer bem e ainda engordar é pior ainda — significa que seu metabolismo entrou em colapso. O problema é interno.",
    },
    weight: 5,
  },

  {
    id: 14,
    phase: 3,
    type: "single-select",
    question: "Seu trabalho ou sua vida em casa estão te consumindo?",
    microcopy: "Estresse constante destrói testosterona. É literal — o hormônio do estresse come o hormônio masculino.",
    options: [
      { value: "paz",    label: "Não — estou bem, sem pressão pesada",                    icon: "🧘", score: 3 },
      { value: "pesado", label: "Sim — dívida, briga em casa ou pressão no trabalho todo dia", icon: "🤯", score: 0 },
      { value: "morto",  label: "Esgotado total — não consigo mais",                      icon: "💀", score: 0 },
    ],
    triggers: {
      "pesado": "🛑 Estresse todo dia destrói testosterona em tempo real. Cada dia assim fecha mais uma porta.",
      "morto":  "🛑 Esgotamento total é o colapso de tudo de uma vez — hormônio, foco, vontade. Não melhora sozinho.",
    },
    weight: 5,
  },

  {
    id: 15,
    phase: 3,
    type: "single-select",
    question: "Você se exercita?",
    microcopy: "Treino pesado aumenta testosterona. Ficar parado faz o seu corpo transformar testosterona em hormônio feminino.",
    options: [
      { value: "regular",  label: "Sim — 3x ou mais por semana, treino pesado", icon: "💪", score: 3 },
      { value: "eventual", label: "De vez em quando — sem regularidade",        icon: "⚠️", score: 1 },
      { value: "zero",     label: "Não treino — não tenho disposição",          icon: "🛑", score: 0 },
    ],
    triggers: {
      "zero": "🛑 Sem treino, seu corpo entende que músculo é desnecessário. Começa a destruir fibra e guardar gordura. Isso acelera tudo.",
    },
    weight: 5,
    category: "fisica",
  },

  {
    id: 16,
    phase: 3,
    type: "single-select",
    question: "Você já tentou resolver isso de alguma forma?",
    microcopy: "Não tem resposta errada. Preciso saber o que já foi tentado pra calcular o caminho certo.",
    options: [
      { value: "nunca",    label: "Nunca tentei — fui deixando passar",                    icon: "🤐", score: 0 },
      { value: "medico",   label: "Fui no médico — saí com receita e o problema ficou",   icon: "👨‍⚕️", score: 0 },
      { value: "remedio",  label: "Tentei suplemento ou remédio — não funcionou direito", icon: "💊", score: 0 },
      { value: "funciona", label: "Tenho acompanhamento e estou tratando a causa de verdade", icon: "🏆", score: 3 },
    ],
    triggers: {
      "nunca":   "⚠ Deixar passar não resolve. O problema cresce em silêncio enquanto você espera.",
      "medico":  "🛑 Médico de plano te dá receita e te manda embora. Não trata a causa. É por isso que nada mudou.",
      "remedio": "🛑 Suplemento sem protocolo certo é chute no escuro. Não é que não funciona — é que você usou o errado do jeito errado.",
    },
    weight: 0,
  },

  {
    id: 17,
    phase: 3,
    type: "single-select",
    question: "Como está sua cabeça hoje?",
    microcopy: "Falta de foco e de vontade não é preguiça. É hormônio baixo.",
    options: [
      { value: "afiado",   label: "Afiado — foco, clareza, vontade de conquistar",      icon: "🎯", score: 3 },
      { value: "nebuloso", label: "Embaçado — esqueço coisas, perco o raciocínio",      icon: "🌫️", score: 0 },
      { value: "apagado",  label: "Apagado — sem ambição, sem tesão, sem fogo nenhum",  icon: "🕯️", score: 0 },
    ],
    triggers: {
      "apagado":  "🛑 Estar apagado assim não é fraqueza. É seu hormônio no chão. Tem solução — e o seu veredicto vai mostrar isso.",
      "nebuloso": "⚠ Esse embaçamento é sinal de inflamação e hormônio baixo ao mesmo tempo. Quanto mais você espera, mais difícil fica.",
    },
    weight: 5,
    category: "mental",
  },

  // ══════════════════════════════════════════════
  // FASE 4: VEREDICTO
  // ══════════════════════════════════════════════

  {
    id: 18,
    phase: 4,
    type: "single-select",
    question: "Pergunta direta: como está o tamanho e a firmeza do seu pênis hoje comparado a antes?",
    microcopy: "Gordura e hormônio feminino destroem a circulação lá dentro. Sem sangue chegando, o tecido murcha. Pode perder até 30% em 10 anos.",
    options: [
      { value: "intacto",  label: "Normal — tamanho e firmeza como sempre",           icon: "✅" },
      { value: "medio",    label: "Perdeu firmeza — menos rígido, menor",             icon: "⚠️" },
      { value: "fino",     label: "Bem diferente — mole, fino, menor",                icon: "🚨" },
      { value: "terrivel", label: "Muito diferente — parece que encolheu de vez",     icon: "🛑" },
    ],
    triggers: {
      _all: "Isso tem reversão. O protocolo foi feito pra desentupir essa circulação e recuperar o que foi perdido — de dentro pra fora.",
    },
    weight: 30,
    category: "libido",
  },

  {
    id: 19,
    phase: 4,
    type: "single-select",
    question: "Se eu te mostrar um método claro pra reverter isso em 30 dias — você consegue seguir?",
    microcopy: "Sem mentira. O método funciona — mas só pra quem faz.",
    options: [
      { value: "sim_total",  label: "Sim — se for claro, eu faço sem questionar",            icon: "🔥", score: 3 },
      { value: "sim_talvez", label: "Sim — mas preciso ver resultado rápido",                icon: "⚡", score: 2 },
      { value: "prova",      label: "Preciso ver prova primeiro — já tentei muita coisa",    icon: "🔍", score: 1 },
    ],
    triggers: {
      "sim_total":  "✓ Esse é o perfil que tem os resultados mais rápidos. Seu veredicto está pronto.",
      "sim_talvez": "✓ Os dados mostram resultado visível em menos de 2 semanas. Seu veredicto está pronto.",
      "prova":      "✓ O protocolo foi feito exatamente pra quem já tentou e não funcionou. Resultado em 14.281 homens é a prova. Seu veredicto está pronto.",
    },
    weight: 0,
  },

  // ══════════════════════════════════════════════
  // FASE 5: RESGATE
  // ══════════════════════════════════════════════

  {
    id: 20,
    phase: 5,
    type: "whatsapp-input",
    question: "Qual é o seu WhatsApp?",
    microcopy: "Vou mandar seu laudo completo direto pra lá.",
    field: { name: "userWhatsapp", placeholder: "(11) 99999-9999" },
    optIn: { text: "Sim — quero receber dicas de performance masculina pelo WhatsApp." },
    privacySeal: "🔒 Número não é compartilhado. Sem spam.",
    weight: 0,
  },

  {
    id: 21,
    phase: 5,
    type: "single-select",
    question: "Onde isso está te prejudicando mais?",
    microcopy: "Essa resposta define o protocolo certo pra você.",
    options: [
      { value: "parceira", label: "Com minha mulher ou parceira — a relação está sofrendo",  icon: "💑" },
      { value: "eu_mesmo", label: "Comigo mesmo — não me reconheço mais no espelho",         icon: "🪞" },
      { value: "trabalho", label: "No trabalho — perdi o foco e o gás pra competir",        icon: "🏆" },
      { value: "tudo",     label: "Em tudo — estou perdendo em todas as frentes",            icon: "🌀" },
    ],
    weight: 0,
  },

  {
    id: 22,
    phase: 5,
    type: "single-select",
    question: "Seu resultado está pronto.",
    microcopy: "O sistema analisou tudo que você respondeu. O que vem a seguir é a sua situação real. Prepare-se.",
    options: [
      { value: "pronto",  label: "Estou pronto — pode mostrar, não importa o que for.", icon: "🔓", variant: "gold" },
      { value: "nervoso", label: "Tô nervoso — mas preciso saber.",                     icon: "😰", variant: "red"  },
    ],
    triggers: {
      "pronto":  "✓ Quem enfrenta a verdade já deu o primeiro passo. Gerando seu resultado agora.",
      "nervoso": "✓ Esse nervosismo é sinal que você ainda se importa. E quem se importa ainda pode mudar. Gerando agora.",
    },
    weight: 0,
  },

];

// ============================================================
// LOADING
// ============================================================
const LOADING_DATA = {
  headline: "{name}, você teve coragem de responder. Agora estamos analisando tudo.",
  messages: [
    "Cruzando sua idade e seus sintomas com o banco de dados...",
    "Calculando quanto hormônio masculino você ainda tem...",
    "Verificando se sua janela de reversão ainda está aberta...",
    "Identificando onde a queda começou no seu caso específico...",
    "Analisando o que você já tentou e por que não funcionou...",
    "Boa notícia: o protocolo certo existe para o seu grau de dano...",
    "Gerando o resultado de {name}. Quase pronto...",
  ],
  duration: 9500,
};

// ============================================================
// BRIDGE
// ============================================================
const BRIDGE_DATA = {
  cta: "VER O PROTOCOLO",
};

// ============================================================
// RESULTADO
// ============================================================
const RESULT_DATA = {
  headlineTemplate: "{name}, seu resultado:",
  scoreZones: [
    {
      min: 0, max: 35,
      label: "SITUAÇÃO CRÍTICA",
      color: "#660000",
      description: "Seu corpo está contra você. A testosterona caiu, o hormônio feminino tomou conta, sua ereção sumiu e seu coração está sofrendo o mesmo estrago. Isso não vai melhorar sozinho. Mas você está aqui — e esse é exatamente o perfil que o protocolo foi feito pra salvar.",
    },
    {
      min: 36, max: 60,
      label: "QUEDA ACELERADA",
      color: "#A83200",
      description: "Você ainda funciona — mas está caindo rápido. O cansaço e a barriga não mentem. Se nada mudar nos próximos meses, vira permanente. A janela ainda está aberta. O protocolo foi feito exatamente pra quem ainda está nela.",
    },
    {
      min: 61, max: 80,
      label: "RISCO REAL",
      color: "#B59200",
      description: "Ainda dá pra segurar — mas depende de quando você age. Sua biologia ainda aceita ser recuperada. Cada mês que passa fecha mais uma porta. O mapa está aqui — e o protocolo vai travar essa queda antes que vire colapso.",
    },
    {
      min: 81, max: 100,
      label: "ESTÁ BEM — MAS ATENÇÃO",
      color: "#165c36",
      description: "Seus hormônios ainda estão firmes. O protocolo pra você é manter o que tem e blindar contra o que vem nos próximos anos. Os outros vão cair. Você não precisa.",
    },
  ],
  criticalAreas: {
    energia:     { label: "Energia e Disposição",  icon: "⚡" },
    mental:      { label: "Foco e Vontade",        icon: "🧠" },
    fisica:      { label: "Músculo e Força",       icon: "💪" },
    sono:        { label: "Qualidade do Sono",     icon: "🌙" },
    corpo:       { label: "Gordura e Hormônios",   icon: "⚖️" },
    libido:      { label: "Desejo e Ereção",       icon: "🔥" },
    recuperacao: { label: "Recuperação Física",    icon: "♻️" },
  },
  cta: "QUERO REVERTER ISSO AGORA",
};

// ============================================================
// PROTOCOLO
// ============================================================
const PROTOCOL_DATA = {
  headline: "O Protocolo Para Você Voltar a Ser o Homem Que Era",
  subheadline: "Sem remédio, sem médico de plano, sem coisa cara. O método que funciona onde tudo mais falhou.",
  features: [
    {
      icon: "🍆",
      title: "Tamanho e Firmeza de Volta em 90 Dias",
      desc: "O problema não é genética — é circulação. O protocolo reabre os vasos, manda sangue de volta pra lá e recupera o que foi perdido. Homens relatam diferença visível em menos de 60 dias.",
    },
    {
      icon: "🔩",
      title: "Duro de Manhã, Firme na Hora H — Sem Remedinho",
      desc: "Sem azulzinho, sem muleta, sem dependência. Os compostos certos restauram sua circulação natural — e você volta a acordar duro todo dia, firme na hora certa, sem precisar de nada.",
    },
    {
      icon: "🔥",
      title: "Tesão e Vontade Como Você Tinha Antes",
      desc: "Para de transformar testosterona em hormônio feminino. O resultado: vontade que você não sentia há anos, fogo de novo, e disposição pra comer sua mulher todo dia como fazia no começo.",
    },
    {
      icon: "⚡",
      title: "Energia Pra Dominar o Dia — Acorda Pronto",
      desc: "Sono fundo de verdade. Hormônio produzido à noite como tem que ser. Você acorda disposto, com foco, sem aquela moleza de velho — pronto pra mandar ver.",
    },
  ],
  seal: "Acesso restrito — baseado no seu diagnóstico",
  cta: "VER O PREÇO DO PROTOCOLO",
};

// ============================================================
// DEPOIMENTOS
// ============================================================
const TESTIMONIALS = [
  {
    initials: "Cesar M.", age: 52, occupation: "Dono de Construtora",
    photo: "https://i.pravatar.cc/80?img=70",
    text: "Minha mulher já tava de saco cheio. Gastei fortuna com médico de plano que não resolveu nada. O negócio vascular mudou o jogo em 15 dias. Voltei a transar com a mulher de novo. Simples assim.",
    result: "Voltou a funcionar em 15 dias", highlight: "+ Circulação Restaurada",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Beto Q.", age: 44, occupation: "Investidor",
    photo: "https://i.pravatar.cc/80?img=69",
    text: "A barriga não sumia e o pique tava no chão. Esse protocolo salvou meu casamento. Perdi 10kg e acordo duro todo dia. Minha mulher tá satisfeita de novo.",
    result: "10kg a menos, pique de volta", highlight: "+ Hormônio No Nível Certo",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Sérgio O.", age: 60, occupation: "Ex-Militar",
    photo: "https://i.pravatar.cc/80?img=66",
    text: "Tava dependendo do remedinho. Esse método limpou meu corpo por dentro. Voltei a ter tesão de verdade aos 60, sem química. Hoje funciono sem precisar de nada.",
    result: "Sem remedinho aos 60 anos", highlight: "+ Circulação Natural Restaurada",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Marcos T.", age: 48, occupation: "Caminhoneiro",
    photo: "https://i.pravatar.cc/80?img=65",
    text: "Passava a semana na estrada e chegava em casa sem ânimo nenhum. Hoje tenho disposição pra estar com minha mulher a noite inteira. Graças ao VORTX.",
    result: "Disposição restaurada", highlight: "+ Energia de Verdade",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Ricardo F.", age: 55, occupation: "Advogado",
    photo: "https://i.pravatar.cc/80?img=64",
    text: "O estresse do trabalho me deixou sem vontade de nada. Médico só passava remédio. Com esse método a firmeza voltou forte. Minha mulher parou de reclamar de vez.",
    result: "Firmeza e vontade de volta", highlight: "+ Estresse Controlado",
    painTags: ["trabalho", "parceira", "tudo"],
  },
  {
    initials: "Paulo S.", age: 41, occupation: "Empresário",
    photo: "https://i.pravatar.cc/80?img=63",
    text: "Tava crescendo peito e perdendo cabelo. Hormônio feminino tomando conta. Segui o plano. Barriga secou, peito sumiu. Hoje estou como quando tinha 25.",
    result: "Hormônios no nível certo", highlight: "+ Testosterona Livre Alta",
    painTags: ["eu_mesmo", "tudo"],
  },
  {
    initials: "André L.", age: 49, occupation: "Engenheiro",
    photo: "https://i.pravatar.cc/80?img=55",
    text: "Dez anos fingindo que tava tudo bem. Ereção fraca, barriga grande e sem vontade. 30 dias de protocolo e voltei a ser homem de verdade. Minha mulher não acreditou.",
    result: "30 dias para mudar tudo", highlight: "+ Circulação Restaurada",
    painTags: ["eu_mesmo", "parceira", "tudo"],
  },
  {
    initials: "Fábio R.", age: 53, occupation: "Médico",
    photo: "https://i.pravatar.cc/80?img=52",
    text: "Sou médico e não conseguia resolver meu próprio problema. O sistema convencional não trata a causa. Esse protocolo fez o que anos de consulta não fizeram.",
    result: "Funcionou onde a medicina falhou", highlight: "+ Hormônios Equilibrados",
    painTags: ["eu_mesmo", "parceira", "tudo"],
  },
  {
    initials: "Jonas P.", age: 46, occupation: "Professor",
    photo: "https://i.pravatar.cc/80?img=18",
    text: "Chegava em casa e só queria dormir. Minha mulher achava que era com ela. Depois do VORTX sobra energia pra estar com ela toda noite e ainda acordar disposto.",
    result: "Energia de volta todo dia", highlight: "+ Hormônio Produzido à Noite",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Gilberto A.", age: 58, occupation: "Fazendeiro",
    photo: "https://i.pravatar.cc/80?img=17",
    text: "Trabalhava pesado e tava mole que nem frango. Minha mulher tava dormindo no quarto separado. Três semanas e ela voltou pra cama e não quer sair mais.",
    result: "Ela voltou pro quarto em 3 semanas", highlight: "+ Força e Desejo Recuperados",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Renato C.", age: 43, occupation: "Policial",
    photo: "https://i.pravatar.cc/80?img=11",
    text: "Trabalho de risco, estresse extremo. Minha performance na cama tinha ido pro lixo. O VORTX me devolveu o foco e o tesão. Hoje funciono como antes.",
    result: "Foco e tesão restaurados", highlight: "+ Estresse Neutralizado",
    painTags: ["trabalho", "eu_mesmo", "tudo"],
  },
  {
    initials: "Hélio M.", age: 61, occupation: "Aposentado",
    photo: "https://i.pravatar.cc/80?img=3",
    text: "60 anos e achei que era o fim. 5 anos sem funcionar direito. Minha mulher já tinha desistido. Três semanas de protocolo e voltei com força. Ela chorou de alegria.",
    result: "Voltou a funcionar aos 60", highlight: "+ Circulação Interna Reaberta",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
];

function getFilteredTestimonials(painArea) {
  const filtered = TESTIMONIALS.filter(t => t.painTags && t.painTags.includes(painArea));
  const pool = filtered.length >= 3 ? filtered : TESTIMONIALS;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
}

// ============================================================
// PRICING
// ============================================================
const PRICING_DATA = {
  urgencyText: "Esse preço some em:",
  timerMinutes: 8,
  checkoutCtaMap: {
    parceira: "COMEÇAR AGORA",
    eu_mesmo: "COMEÇAR AGORA",
    trabalho: "COMEÇAR AGORA",
    tudo:     "COMEÇAR AGORA",
    _default: "COMEÇAR AGORA",
  },
  plans: [
    {
      id: "vitalicio",
      name: "ACESSO COMPLETO — UMA VEZ SÓ",
      price: 67,
      originalPrice: 797,
      period: "paga uma vez — acesso para sempre",
      description: "O protocolo completo, sem restrição",
      badge: "🔓 MELHOR OPÇÃO",
      ctaLabel: "COMEÇAR COMPLETO AGORA",
      ctaTag: "PLANO PRINCIPAL",
      features: [
        "Tamanho e firmeza de volta em 90 dias",
        "Duro de manhã, firme na hora H — sem remedinho",
        "Tesão e vontade como você tinha antes",
        "Barriga que fabrica hormônio feminino: eliminada",
        "Foco e energia de predador — sem embaçamento",
        "Acesso pra sempre — todas as atualizações incluídas",
      ],
    },
    {
      id: "mensal",
      name: "ACESSO PARCIAL — POR MÊS",
      price: 37,
      originalPrice: 97,
      period: "por mês — só o básico",
      description: "Acesso limitado",
      badge: null,
      ctaLabel: "COMEÇAR PEQUENO",
      ctaTag: "PLANO BÁSICO",
      features: [
        "Só o básico — sem o protocolo de circulação",
        "Sem o módulo de firmeza e tamanho",
        "Sem o protocolo hormonal completo",
        "Sem suporte",
      ],
    },
  ],
  guarantee: {
    title: "30 DIAS DE GARANTIA — SE NÃO FUNCIONAR, DEVOLVO TUDO",
    text: "Segue o protocolo por 30 dias. Se sua energia, sua firmeza e seu pique não melhorarem de forma clara — devolvo 100% do seu dinheiro. Sem enrolação, sem pergunta, sem burocracia. Você não arrisca nada.",
    icon: "🛡️",
  },
  paymentMethods: ["Pix • Cartão de Crédito • Boleto • Pagamento 100% Seguro"],
};

// ============================================================
// THANK YOU
// ============================================================
const THANKYOU_DATA = {
  headline: "Bem-vindo ao outro lado, {name}.",
  subheadline: "O protocolo está liberado. Agora é com você.",
  steps: [
    {
      number: "01",
      title: "Acesso chega em até 5 minutos",
      desc: "O link vai pro seu email assim que o pagamento confirmar.",
    },
    {
      number: "02",
      title: "Comece pelo protocolo de circulação",
      desc: "É a primeira lista do guia. Leia hoje, compre amanhã cedo, comece amanhã à noite.",
    },
    {
      number: "03",
      title: "Siga sem modificar",
      desc: "Algumas coisas vão parecer estranhas. Faz assim mesmo. É onde está o resultado.",
    },
    {
      number: "04",
      title: "Não precisa contar pra ninguém",
      desc: "As pessoas ao seu redor vão notar. Deixa o resultado falar por você.",
    },
  ],
  cta: "ACESSAR O PROTOCOLO AGORA",
};
