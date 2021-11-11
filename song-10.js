class Boy {
  langauges

  constructor(langaugesArray) {
    this.langauges = langaugesArray
  }

  talk(talkTo, likeWhat) {
    if (likeWhat === 'that') talkTo.goMad()
  }

  set langauges(value) {
    this.langauges.push(value)
  }

  speakSpanish() {
    console.log('¿Cómo se llama? ')
  }
}

class Girl {
  dance(danceTo, likeWhat) {
    if (danceTo.instanceOf(Boy) && likeWhat === 'that') {
      danceTo.langauges('spanish')
      danceTo.speakSpanish()
    }
  }

  goMad() {
    console.log('¡Mira en Barranquilla se baila así,')
  }
}

const wyclef = new Boy(['english'])
const bonita = new Girl()

wyclef.talk(bonita, that)

bonita.dance(wyclef, that)
