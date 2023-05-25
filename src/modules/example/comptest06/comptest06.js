import { LightningElement } from 'lwc';
//import LightningAlert from 'lightning/alert'
//import LightningModal from 'lightning/modal'

export default class comptest06 extends LightningElement {
    // Home Page reference for page-link
    homeReference = { type: 'home' }

    // SLDS Dialog Support
    isTemplateOne = true;

    connectedCallback() {
        console.log(`***[connected] isTemplateOne = ${this.isTemplateOne}...`)
    }

    async handleAlertClick() {
        console.log('***Handling Alert Click...')
        this.isTemplateOne = false
        console.log(`isTemplateOne = ${this.isTemplateOne}...`)
    }

    closeModal(event) {
        this.isTemplateOne = true
        console.log('***Close/Cancel Button Pressed... Closing Modal Dialog...')
        //console.log(event)
    }

    saveCloseModal(event) {
        this.isTemplateOne = true
        console.log('***Save Button Pressed... Closing Modal Dialog...')

    }


    // accordion support
    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
}