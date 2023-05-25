import { LightningElement, wire } from 'lwc';
import { NavigationContext, generateUrl, navigate } from 'lwr/navigation'

export default class leftNav extends LightningElement {

    @wire(NavigationContext)
    navContext

    // Home Page reference for page-link
    homeReference = { type: 'home' }

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

    // Component Test Page 03 reference for page-link
    comptest06Reference = { type: 'namedPage',
        attributes: {
            pageName: 'comptest06'
        } 
    }

    handleMenuSelect(event) {
        const selectedName = event.detail.name;
        console.log(`Selected: ${selectedName}...`)
        switch (selectedName) {
            case 'home':
                navigate(this.navContext, this.homeReference)
                break
            case 'comptest01':
                navigate(this.navContext, this.comptestReference)
                break
            case 'comptest02':
                navigate(this.navContext, this.comptest02Reference)
                break
            case 'comptest03':
                navigate(this.navContext, this.comptest03Reference)
                break
            case 'comptest04':
                navigate(this.navContext, this.comptest04Reference)
                break
            case 'comptest05':
                navigate(this.navContext, this.comptest05Reference)
                break
            case 'comptest06':
                navigate(this.navContext, this.comptest06Reference)
                break
            default:
                return
        }
    }
}