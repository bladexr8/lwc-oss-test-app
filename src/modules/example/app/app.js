import { LightningElement } from 'lwc';
import { createRouter } from 'lwr/router'

const routes = [
  {
    id: 'home',
    uri: '/',
    handler: () => import('example/homePageHandler'),
    page: {
      type: 'home'
    }
  },
  {
    id: 'namedPage',
    uri: '/:pageName',
    handler: () => import('example/namedPageHandler'),
    page: {
      type: 'namedPage',
      attributes: {
        pageName: ':pageName'
      }
    }
  }
]

export default class app extends LightningElement {
  
  // create the LWC Router
  router = createRouter({ routes })

  // Home Page reference for page-link
  homeReference = { type: 'home' }

  // Contact Page reference for page-link
  contactReference = { type: 'namedPage',
                        attributes: {
                          pageName: 'contact'
                        } 
                      }


  // Product Page reference for page-link
  productReference = { type: 'namedPage',
                        attributes: {
                          pageName: 'products'
                        } 
                      }

  // Product Page reference for page-link
  recipeReference = { type: 'namedPage',
                        attributes: {
                          pageName: 'recipes'
                        } 
                      }

  // handle view errors
  onViewError(viewErrorEvent) {
    // handle view error
    const error = viewErrorEvent.detail.error
    const stack = viewErrorEvent.detail.stack
    console.error(`Error rendering view component: "${error.message}" from:\n${stack}`)
  }


}
