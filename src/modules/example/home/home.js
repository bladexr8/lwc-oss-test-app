import { LightningElement } from 'lwc';

export default class home extends LightningElement {
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

  // Component Test Page reference for page-link
  comptestReference = { type: 'namedPage',
                        attributes: {
                          pageName: 'comptest'
                        } 
                      }

  // Component Test Page 02 reference for page-link
  comptest02Reference = { type: 'namedPage',
    attributes: {
      pageName: 'comptest02'
    } 
  }

  // Component Test Page 03 reference for page-link
  comptest03Reference = { type: 'namedPage',
    attributes: {
      pageName: 'comptest03'
    } 
  }

  // Component Test Page 03 reference for page-link
  comptest04Reference = { type: 'namedPage',
    attributes: {
      pageName: 'comptest04'
    } 
  }

  // Component Test Page 03 reference for page-link
  comptest05Reference = { type: 'namedPage',
    attributes: {
      pageName: 'comptest05'
    } 
  }

}