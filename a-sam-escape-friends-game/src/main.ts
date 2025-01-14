import { Player } from './domains/game/models/player'
import { GetAllPersonResultAsMethod } from './domains/game/services/get-all-person.infrastructure'
import { PersonsResult } from './domains/game/services/models/person'
import './style.css'



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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  
// const peopleBusiness = new GetAllPeopleBusiness(methodToApi);

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
    <div id="game-container">
      <div class="main-character">
      </div>
    </div>
  </div>
`

const player = new Player()
player.beginGame()

// const direction : Direction = Direction.East
// if(direction == Direction.East) {

// }