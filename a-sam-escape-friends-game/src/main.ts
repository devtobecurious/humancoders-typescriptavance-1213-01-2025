import { Player } from './domains/game/models/player'
import { Pass, Vip } from './domains/game/models/vip'
import GetAllPeopleBusiness from './domains/game/services/get-all-people.business'
import { GetAllPersonInfrastructure, GetAllPersonResultAsMethod } from './domains/game/services/get-all-person.infrastructure'
import { PersonsResult } from './domains/game/services/models/person'
import './style.css'

const player = new Player()
player.beginGame()

 // const peopleBusiness = new GetAllPeopleBusiness(new GetAllPersonInfrastructure())
// const peopleBusiness = new GetAllPeopleBusiness({
//   getAll: () => {
//      return new Promise<PersonsResult>(resolve => {
//                 setTimeout(() => {
//                     const result: PersonsResult = {
//                         results: [
//                             {name: 'Sam', type: 'Hobbit'},
//                             {name: 'Blorg', type: 'Orc'},
//                         ]
//                     }
//                     resolve(result)
//                 }, 1500);
//             })
//   }
// })

const methodToApi: GetAllPersonResultAsMethod = () => {
       return new Promise<PersonsResult>(resolve => {
                  setTimeout(() => {
                      const result: PersonsResult = {
                          results: [
                              {name: 'Sam', type: 'Hobbit'},
                              {name: 'Blorg', type: 'Orc'},
                          ]
                      }
                      resolve(result)
                  }, 1500);
              })
    }
  
const peopleBusiness = new GetAllPeopleBusiness(methodToApi);

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