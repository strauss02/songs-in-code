class I {
  inLove = false
  sentFromAbove = false
  innocent = false

  static doIt(heart) {
    heart.play()
    game.lost()
  }
}

if (I.doIt(yourHeart)) console.log('Oops!')
