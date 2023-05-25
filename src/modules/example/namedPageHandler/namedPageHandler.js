export default class NamedPageHandler {
  callback

  constructor(callback) {
    this.callback = callback
  }

  dispose() {
    // noop
  }

  update({ attributes }) {

    console.log(`***Executing namedPageHandler.update()... ${attributes.pageName}`)

    let viewGetter

    // Get the "pageName" from the incoming page reference
    switch(attributes.pageName) {
      case 'products':
        viewGetter = () => import('example/products')
        break
        case 'recipes':
          viewGetter = () => import('example/recipes')
          break
        case 'contact':
          viewGetter = () => import('example/contact')
          break
        case 'comptest':
          viewGetter = () => import('example/comptest')
          break
        case 'comptest02':
          viewGetter = () => import('example/comptest02')
          break
        case 'comptest03':
          viewGetter = () => import('example/comptest03')
          break
        case 'comptest04':
          viewGetter = () => import('example/comptest04')
          break
        case 'comptest05':
          viewGetter = () => import('example/comptest05')
          break
        case 'comptest06':
          viewGetter = () => import('example/comptest06')
          break
        default:
          return
    }
    this.callback({
      viewset: {
        //default: viewGetter,
        testoutlet: viewGetter
      }
    })
  }

}