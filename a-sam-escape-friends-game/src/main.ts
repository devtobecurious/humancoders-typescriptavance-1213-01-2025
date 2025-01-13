import { Player } from './domains/game/models/player'
import { Pass, Vip } from './domains/game/models/vip'
import './style.css'

const player = new Player()
player.beginGame()

function accessToVipPart(person: Vip<Pass>) {
  console.info('you can go to this part !', person.pass)
  if(person.pass.code !== '') {
    person.accessVip()
  }
}
accessToVipPart(player)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="game-container">
      <div class="main-character">
      </div>
    </div>
  </div>
`

// const direction : Direction = Direction.East
// if(direction == Direction.East) {

// }