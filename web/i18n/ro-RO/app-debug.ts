const translation = {
  pageTitle: {
    line1: 'PROMPT',
    line2: 'Inginerie',
  },
  orchestrate: 'Orchestrează',
  promptMode: {
    simple: 'Comută la Modul Expert pentru a edita întregul PROMPT',
    advanced: 'Mod Expert',
    switchBack: 'Comută înapoi',
    advancedWarning: {
      title: 'Ați commutat la Modul Expert și, odată ce modificați PROMPT-ul, NU puteți reveni la modul de bază.',
      description: 'În Modul Expert, puteți edita întregul PROMPT.',
      learnMore: 'Aflați mai multe',
      ok: 'OK',
    },
    operation: {
      addMessage: 'Adaugă mesaj',
    },
    contextMissing: 'Componentă de context lipsește, eficacitatea promptului poate să nu fie bună.',
  },
  operation: {
    applyConfig: 'Publică',
    resetConfig: 'Resetează',
    debugConfig: 'Depanează',
    addFeature: 'Adaugă funcție',
    automatic: 'Automat',
    stopResponding: 'Oprește răspunsul',
    agree: 'Îmi place',
    disagree: 'Nu îmi place',
    cancelAgree: 'Anulează Îmi place',
    cancelDisagree: 'Anulează Nu îmi place',
    userAction: 'Utilizator ',
  },
  notSetAPIKey: {
    title: 'Cheia furnizorului LLM nu a fost setată',
    trailFinished: 'Perioada de încercare a expirat',
    description: 'Cheia furnizorului LLM nu a fost setată și trebuie să fie setată înainte de depanare.',
    settingBtn: 'Du-te la setări',
  },
  trailUseGPT4Info: {
    title: 'Nu se acceptă acum gpt-4',
    description: 'Pentru a utiliza gpt-4, vă rugăm să setați cheia API.',
  },
  feature: {
    groupChat: {
      title: 'Îmbunătățire chat',
      description: 'Adăugați setări pre-conversație pentru aplicații, pentru a îmbunătăți experiența utilizatorilor.',
    },
    groupExperience: {
      title: 'Îmbunătățire experiență',
    },
    conversationOpener: {
      title: 'Reîncărcări conversație',
      description: 'Într-o aplicație de chat, prima propoziție pe care IA o vorbește în mod activ utilizatorului este de obicei utilizată ca salut.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Urmărire',
      description: 'Setarea sugestiilor pentru întrebările următoare poate oferi utilizatorilor o conversație mai bună.',
      resDes: '3 sugestii pentru următoarea întrebare a utilizatorului.',
      tryToAsk: 'Încercați să întrebați',
    },
    moreLikeThis: {
      title: 'Mai multe ca aceasta',
      description: 'Generați mai multe texte o dată, apoi editați și continuați să generați',
      generateNumTip: 'Numărul de generări fiecăruia',
      tip: 'Utilizarea acestei funcții va genera un consum suplimentar de jetoane',
    },
    speechToText: {
      title: 'Voce la text',
      description: 'După activare, puteți utiliza intrarea vocală.',
      resDes: 'Intrarea vocală este activată',
    },
    textToSpeech: {
      title: 'Text la voce',
      description: 'După activare, textul poate fi convertit în vorbire.',
      resDes: 'Textul la audio este activat',
    },
    citation: {
      title: 'Citări și atribuiri',
      description: 'După activare, se vor afișa documentul sursă și secțiunea atribuită a conținutului generat.',
      resDes: 'Citări și atribuiri sunt activate',
    },
    annotation: {
      title: 'Răspuns anotat',
      description: 'Puteți adăuga manual răspunsuri de înaltă calitate în cache pentru a le prioritiza la potrivirea cu întrebările similare ale utilizatorilor.',
      resDes: 'Răspuns anotat este activat',
      scoreThreshold: {
        title: 'Prag de scor',
        description: 'Folosit pentru a seta pragul de similitudine pentru răspunsul anotat.',
        easyMatch: 'Potrivire simplă',
        accurateMatch: 'Potrivire precisă',
      },
      matchVariable: {
        title: 'Variabilă de potrivire',
        choosePlaceholder: 'Alegeți variabila de potrivire',
      },
      cacheManagement: 'Adnotări',
      cached: 'Adnotat',
      remove: 'Elimină',
      removeConfirm: 'Ștergeți această adnotare?',
      add: 'Adaugă adnotare',
      edit: 'Editează adnotare',
    },
    dataSet: {
      title: 'Context',
      noData: 'Puteți importa Cunoștințe ca context',
      words: 'Cuvinte',
      textBlocks: 'Blocuri de text',
      selectTitle: 'Selectați Cunoștințe de referință',
      selected: 'Cunoștințe selectate',
      noDataSet: 'Nu s-au găsit Cunoștințe',
      toCreate: 'Du-te la creare',
      notSupportSelectMulti: 'În prezent se acceptă doar o singură Cunoștință',
      queryVariable: {
        title: 'Variabilă de interogare',
        tip: 'Această variabilă va fi utilizată ca intrare de interogare pentru recuperarea contextului, obținând informații de context legate de intrarea acestei variabile.',
        choosePlaceholder: 'Alegeți variabila de interogare',
        noVar: 'Nicio variabilă',
        noVarTip: 'vă rugăm să creați o variabilă în secțiunea Variabile',
        unableToQueryDataSet: 'Imposibil de interogat Cunoștințele',
        unableToQueryDataSetTip: 'Nu s-a reușit interogarea cu succes a Cunoștințelor, vă rugăm să alegeți o variabilă de interogare a contextului în secțiunea context.',
        ok: 'OK',
        contextVarNotEmpty: 'variabila de interogare a contextului nu poate fi goală',
        deleteContextVarTitle: 'Ștergeți variabila "{{varName}}"?',
        deleteContextVarTip: 'Această variabilă a fost setată ca variabilă de interogare a contextului și eliminarea ei va afecta utilizarea normală a Cunoștințelor. Dacă totuși trebuie să o ștergeți, vă rugăm să o reselectați în secțiunea context.',
      },
    },
    tools: {
      title: 'Instrumente',
      tips: 'Instrumentele oferă o metodă de apel API standard, luând intrarea utilizatorului sau variabilele ca parametri de solicitare pentru interogarea datelor externe ca context.',
      toolsInUse: '{{count}} instrumente în uz',
      modal: {
        title: 'Instrument',
        toolType: {
          title: 'Tip instrument',
          placeholder: 'Vă rugăm să selectați tipul de instrument',
        },
        name: {
          title: 'Nume',
          placeholder: 'Vă rugăm să introduceți numele',
        },
        variableName: {
          title: 'Nume variabilă',
          placeholder: 'Vă rugăm să introduceți numele variabilei',
        },
      },
    },
    conversationHistory: {
      title: 'Istoric conversație',
      description: 'Setați numele prefixe pentru rolurile de conversație',
      tip: 'Istoricul conversației nu este activat, adăugați <histories> în promptul de mai sus.',
      learnMore: 'Aflați mai multe',
      editModal: {
        title: 'Editați numele rolurilor de conversație',
        userPrefix: 'Prefix utilizator',
        assistantPrefix: 'Prefix asistent',
      },
    },
    toolbox: {
      title: 'TRUSĂ DE UNELTE',
    },
    moderation: {
      title: 'Moderarea conținutului',
      description: 'Asigurați securitatea ieșirii modelului folosind API-ul de moderare sau menținând o listă de cuvinte sensibile.',
      allEnabled: 'Conținut INTRARE/IEȘIRE activat',
      inputEnabled: 'Conținut INTRARE activat',
      outputEnabled: 'Conținut IEȘIRE activat',
      modal: {
        title: 'Setări de moderare a conținutului',
        provider: {
          title: 'Furnizor',
          openai: 'Moderare OpenAI',
          openaiTip: {
            prefix: 'Moderarea OpenAI necesită o cheie API OpenAI configurată în',
            suffix: '.',
          },
          keywords: 'Cuvinte cheie',
        },
        keywords: {
          tip: 'Câte unul pe rând, separate prin linii noi. Maxim 100 de caractere pe linie.',
          placeholder: 'Câte unul pe rând, separate prin linii noi',
          line: 'Linie',
        },
        content: {
          input: 'Moderează conținut INTRARE',
          output: 'Moderează conținut IEȘIRE',
          preset: 'Răspunsuri prestabilite',
          placeholder: 'Conținut răspunsuri prestabilite aici',
          condition: 'Moderează conținut INTRARE și IEȘIRE activat cel puțin unul',
          fromApi: 'Răspunsurile prestabilite sunt returnate de API',
          errorMessage: 'Răspunsurile prestabilite nu pot fi goale',
          supportMarkdown: 'Markdown suportat',
        },
        openaiNotConfig: {
          before: 'Moderarea OpenAI necesită o cheie API OpenAI configurată în',
          after: '',
        },
      },
    },
  },
  automatic: {
    title: 'Orchestrarea automată a aplicațiilor',
    description: 'Descrieți scenariul dvs., Dify vă va orchestra o aplicație pentru dvs.',
    intendedAudience: 'Care este publicul țintă?',
    intendedAudiencePlaceHolder: 'de ex. Student',
    solveProblem: 'Ce probleme speră ei că IA le poate rezolva?',
    solveProblemPlaceHolder: 'de ex. Extrage informații și rezumă informații din rapoarte și articole lungi',
    generate: 'Generează',
    audiencesRequired: 'Publicul țintă este necesar',
    problemRequired: 'Problema este necesară',
    resTitle: 'Am orchestrat următoarea aplicație pentru dvs.',
    apply: 'Aplicați această orchestrare',
    noData: 'Descrieți cazul de utilizare din stânga, previzualizarea orchestrării se va afișa aici.',
    loading: 'Orchestrarea aplicației pentru dvs...',
    overwriteTitle: 'Suprascrieți configurația existentă?',
    overwriteMessage: 'Aplicarea acestei orchestrări va suprascrie configurația existentă.',
  },
  resetConfig: {
    title: 'Confirmați resetarea?',
    message:
      'Resetarea renunță la modificări, restabilind ultima configurație publicată.',
  },
  errorMessage: {
    nameOfKeyRequired: 'numele cheii: {{key}} este obligatoriu',
    valueOfVarRequired: 'valoarea {{key}} nu poate fi goală',
    queryRequired: 'Textul solicitării este obligatoriu.',
    waitForResponse:
      'Vă rugăm să așteptați finalizarea răspunsului la mesajul anterior.',
    waitForBatchResponse:
      'Vă rugăm să așteptați finalizarea sarcinii în lot.',
    notSelectModel: 'Vă rugăm să alegeți un model',
    waitForImgUpload: 'Vă rugăm să așteptați încărcarea imaginii',
  },
  chatSubTitle: 'Instrucțiuni',
  completionSubTitle: 'Prefix prompt',
  promptTip:
    'Prompturile ghidează răspunsurile AI cu instrucțiuni și constrângeri. Inserați variabile ca {{input}}. Acest prompt nu va fi vizibil utilizatorilor.',
  formattingChangedTitle: 'Formatarea s-a schimbat',
  formattingChangedText:
    'Modificarea formatării va reseta zona de depanare, ești sigur?',
  variableTitle: 'Variabile',
  variableTip:
    'Utilizatorii completează variabile într-un formular, înlocuind automat variabilele din prompt.',
  notSetVar: 'Variabilele permit utilizatorilor să introducă cuvinte de prompt sau remarci de deschidere atunci când completează formulare. Puteți încerca să introduceți "{{input}}" în cuvintele de prompt.',
  autoAddVar: 'Variabilele nedefinite la care se face referire în pre-prompt, doriți să le adăugați în formularul de intrare al utilizatorului?',
  variableTable: {
    key: 'Cheie variabilă',
    name: 'Nume câmp de intrare utilizator',
    optional: 'Opțional',
    type: 'Tip intrare',
    action: 'Acțiuni',
    typeString: 'Șir',
    typeSelect: 'Selectează',
  },
  varKeyError: {
    canNoBeEmpty: 'Cheia variabilei nu poate fi goală',
    tooLong: 'Cheia variabilei: {{key}} este prea lungă. Nu poate fi mai lungă de 30 de caractere',
    notValid: 'Cheia variabilei: {{key}} este nevalidă. Poate conține doar litere, cifre și sublinieri',
    notStartWithNumber: 'Cheia variabilei: {{key}} nu poate începe cu un număr',
    keyAlreadyExists: 'Cheia variabilei: :{{key}} deja există',
  },
  otherError: {
    promptNoBeEmpty: 'Promptul nu poate fi gol',
    historyNoBeEmpty: 'Istoricul conversației trebuie setat în prompt',
    queryNoBeEmpty: 'Interogația trebuie setată în prompt',
  },
  variableConig: {
    'addModalTitle': 'Adăugați câmp de intrare',
    'editModalTitle': 'Editați câmpul de intrare',
    'description': 'Setare pentru variabila {{varName}}',
    'fieldType': 'Tip de câmp',
    'string': 'Text scurt',
    'text-input': 'Text scurt',
    'paragraph': 'Paragraf',
    'select': 'Selectați',
    'number': 'Număr',
    'notSet': 'Nesetat, încercați să tastați {{input}} în promptul de prefix',
    'stringTitle': 'Opțiuni casetă text formular',
    'maxLength': 'Lungime maximă',
    'options': 'Opțiuni',
    'addOption': 'Adăugați opțiune',
    'apiBasedVar': 'Variabilă bazată pe API',
    'varName': 'Nume variabilă',
    'labelName': 'Nume etichetă',
    'inputPlaceholder': 'Vă rugăm să introduceți',
    'required': 'Obligatoriu',
    'errorMsg': {
      varNameRequired: 'Numele variabilei este obligatoriu',
      labelNameRequired: 'Numele etichetei este obligatoriu',
      varNameCanBeRepeat: 'Numele variabilei nu poate fi repetat',
      atLeastOneOption: 'Este necesară cel puțin o opțiune',
      optionRepeat: 'Există opțiuni repetate',
    },
  },
  vision: {
    name: 'Viziune',
    description: 'Activarea Viziunii va permite modelului să primească imagini și să răspundă la întrebări despre ele.',
    settings: 'Setări',
    visionSettings: {
      title: 'Setări Viziune',
      resolution: 'Rezoluție',
      resolutionTooltip: `rezoluția joasă va permite modelului să primească o versiune de 512 x 512 pixeli a imaginii și să o reprezinte cu un buget de 65 de tokenuri. Acest lucru permite API-ului să returneze răspunsuri mai rapide și să consume mai puține tokenuri de intrare pentru cazurile de utilizare care nu necesită detalii ridicate.
      \n
      rezoluția ridicată va permite în primul rând modelului să vadă imaginea la rezoluție scăzută și apoi va crea decupaje detaliate ale imaginilor de intrare ca pătrate de 512 pixeli, în funcție de dimensiunea imaginii de intrare. Fiecare decupaj detaliat utilizează un buget de token dublu, pentru un total de 129 de tokenuri.`,
      high: 'Ridicat',
      low: 'Scăzut',
      uploadMethod: 'Metodă de încărcare',
      both: 'Ambele',
      localUpload: 'Încărcare locală',
      url: 'URL',
      uploadLimit: 'Limită de încărcare',
    },
  },
  voice: {
    name: 'Voce',
    defaultDisplay: 'Voce implicită',
    description: 'Setări de voce text-to-speech',
    settings: 'Setări',
    voiceSettings: {
      title: 'Setări Voce',
      language: 'Limbă',
      resolutionTooltip: 'Suport pentru limba de voce text-to-speech.',
      voice: 'Voce',
      autoPlay: 'Redare automata',
      autoPlayEnabled: 'Deschis',
      autoPlayDisabled: 'închidere',
    },
  },
  openingStatement: {
    title: 'Deschizător de conversație',
    add: 'Adăugare',
    writeOpener: 'Scrieți deschizătorul',
    placeholder: 'Scrieți aici mesajul de deschidere, puteți utiliza variabile, încercați să tastați {{variable}}.',
    openingQuestion: 'Întrebări de deschidere',
    noDataPlaceHolder:
      'Începerea conversației cu utilizatorul poate ajuta AI să stabilească o conexiune mai strânsă cu ei în aplicațiile conversaționale.',
    varTip: 'Puteți utiliza variabile, încercați să tastați {{variable}}',
    tooShort: 'Este necesară o promptare inițială de cel puțin 20 de cuvinte pentru a genera o remarcă de deschidere a conversației.',
    notIncludeKey: 'Promptarea inițială nu include variabila: {{key}}. Vă rugăm să o adăugați la promptarea inițială.',
  },
  modelConfig: {
    model: 'Model',
    setTone: 'Setați tonul răspunsurilor',
    title: 'Model și Parametri',
    modeType: {
      chat: 'Chat',
      completion: 'Completare',
    },
  },
  inputs: {
    title: 'Depanare și previzualizare',
    noPrompt: 'Încercați să scrieți o promptare în câmpul de intrare pre-promptare',
    userInputField: 'Câmp de intrare utilizator',
    noVar: 'Completați valoarea variabilei, care va fi înlocuită automat în promptarea cuvintelor de fiecare dată când este pornită o nouă sesiune.',
    chatVarTip:
      'Completați valoarea variabilei, care va fi înlocuită automat în promptarea cuvintelor de fiecare dată când este pornită o nouă sesiune',
    completionVarTip:
      'Completați valoarea variabilei, care va fi înlocuită automat în promptarea cuvintelor de fiecare dată când este trimisă o întrebare.',
    previewTitle: 'Previzualizare promptare',
    queryTitle: 'Conținut interogare',
    queryPlaceholder: 'Vă rugăm să introduceți textul solicitării.',
    run: 'RULARE',
  },
  result: 'Text de ieșire',
  datasetConfig: {
    settingTitle: 'Setări de recuperare',
    knowledgeTip: 'Faceți clic pe butonul "+" pentru a adăuga cunoștințe',
    retrieveOneWay: {
      title: 'Recuperare N-la-1',
      description: 'Pe baza intenției utilizatorului și a descrierilor Cunoștințelor, Agentul selectează în mod autonom cea mai bună Cunoștință pentru interogare. Cel mai bun pentru aplicații cu Cunoștințe distincte și limitate.',
    },
    retrieveMultiWay: {
      title: 'Recuperare multi-cale',
      description: 'Pe baza intenției utilizatorului, interogați toate Cunoștințele, recuperați textul relevant din mai multe surse și selectați cele mai bune rezultate care se potrivesc interogării utilizatorului după reclasificare. Este necesară configurarea API-ului Rerank Model.',
    },
    rerankModelRequired: 'Este necesar modelul Rerank',
    params: 'Parametri',
    top_k: 'Top K',
    top_kTip: 'Utilizat pentru a filtra bucățile cele mai similare cu întrebările utilizatorilor. Sistemul va ajusta, de asemenea, în mod dinamic valoarea Top K, în funcție de max_tokens al modelului selectat.',
    score_threshold: 'Prag scor',
    score_thresholdTip: 'Utilizat pentru a seta pragul de similitudine pentru filtrarea bucăților.',
    retrieveChangeTip: 'Modificarea modului de indexare și a modului de recuperare poate afecta aplicațiile asociate cu aceste Cunoștințe.',
  },
  debugAsSingleModel: 'Depanare ca Model Unic',
  debugAsMultipleModel: 'Depanare ca Modele Multiple',
  duplicateModel: 'Duplicare',
  publishAs: 'Publicare ca',
  assistantType: {
    name: 'Tip Asistent',
    chatAssistant: {
      name: 'Asistent de bază',
      description: 'Construiți un asistent bazat pe chat utilizând un Model de Limbaj Mare',
    },
    agentAssistant: {
      name: 'Asistent Agent',
      description: 'Construiți un Agent inteligent care poate alege în mod autonom instrumente pentru a îndeplini sarcinile',
    },
  },
  agent: {
    agentMode: 'Mod Agent',
    agentModeDes: 'Setați tipul de mod de inferență pentru agent',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Apel de Funcție',
    },
    setting: {
      name: 'Setări Agent',
      description: 'Setările Asistentului Agent permit setarea modului agent și a funcțiilor avansate, cum ar fi prompturile încorporate, disponibile numai în tipul Agent.',
      maximumIterations: {
        name: 'Iterații maxime',
        description: 'Limitați numărul de iterații pe care le poate executa un asistent agent',
      },
    },
    buildInPrompt: 'Prompt încorporat',
    firstPrompt: 'Primul Prompt',
    nextIteration: 'Iterația următoare',
    promptPlaceholder: 'Scrieți promptul aici',
    tools: {
      name: 'Instrumente',
      description: 'Utilizarea instrumentelor poate extinde capacitățile LLM, cum ar fi căutarea pe internet sau efectuarea de calcule științifice',
      enabled: 'Activat',
    },
  },
}

export default translation