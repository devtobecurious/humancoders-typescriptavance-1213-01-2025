import { Player } from './domains/game/models/player'
import { Pass, Vip } from './domains/game/models/vip'
import './style.css'

const player = new Player()
player.beginGame()

// const yannick: Vip<Pass> = {
//   accessVip: () => {},
//   pass: {code: '21212'},
//   isReadyToVip: true
// }

// function accessToVipPart(person: Vip<Pass>) {
//   console.info('you can go to this part !', person.pass)
//   if(person.isReadyToVip) {
//     person.accessVip()
//   }
// }
// accessToVipPart(yannick)

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