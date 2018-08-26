import * as _ from './plugins/lodash/index'

class WeappApp implements WeApp.AppParam {
  onLaunch(info: WeApp.LaunchData) {
    Promise.resolve().then(() => {
      console.log('init')
      console.log(_.camelCase('I Love PTE'))
    })
  }

  onShow(info: WeApp.LaunchData) {

  }
}

let app = new WeappApp()
App(app)

// const appParam: WeApp.AppParam = {
//   onLaunch(info) {
//   }
// }

