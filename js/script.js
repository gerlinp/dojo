function createPlayers(num) {
  players = []
  for (var i = 1; i <= num; i++) {
    var player = {}
    player['id'] = i
    player['score'] = 0
    players.push(player)
  }
  return players
}
