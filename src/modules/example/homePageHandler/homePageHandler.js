export default class HomePageHandler {
  callback

  constructor(callback) {
    this.callback = callback
  }

  dispose() {
    // noop
  }

  update() {
    console.log('***Executing homePageHandler.update()')
    this.callback({
      viewset: {
        //default: () => import('example/home')
        testoutlet: () => import('example/home')
      }
    })
  }
}