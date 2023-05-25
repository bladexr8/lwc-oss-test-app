import { LightningElement, track } from 'lwc';

export default class comptest04 extends LightningElement {
    // Home Page reference for page-link
    homeReference = { type: 'home' }

    // pill support
    pill_infoText;

    pill_handleRemove() {
        this.pill_infoText = 'Remove button was clicked';
    }

    // progress bar support
    progress = 0;
    isProgressing = false;

    get computedLabel() {
        return this.isProgressing ? 'Stop' : 'Start';
    }

    toggleProgress() {
        if (this.isProgressing) {
            // stop
            this.isProgressing = false;
            clearInterval(this._interval);
        } else {
            // start
            this.isProgressing = true;
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this._interval = setInterval(() => {
                this.progress = this.progress === 100 ? 0 : this.progress + 1;
            }, 200);
        }
    }

    disconnectedCallback() {
        // it's needed for the case the component gets disconnected
        // and the progress is being increased
        // this code doesn't show in the example
        clearInterval(this._interval);
    }


    // progress indicator support
    pi_data_steps = [
        { label: 'Contacted', value: 'step-1' },
        { label: 'Open', value: 'step-2' },
        { label: 'Unqualified', value: 'step-3' },
        { label: 'Nurturing', value: 'step-4' },
        { label: 'Closed', value: 'step-5' },
    ];

    showStep4 = true;

    toggleStep4() {
        this.showStep4 = !this.showStep4;
    }


    // progress ring support
    @track sliderValue = 50;
    @track direction = 'fill';

    sliderChange(event) {
        this.sliderValue = event.target.value;
    }

    directionChange(event) {
        if (event.detail.checked) {
            this.direction = 'fill';
        } else {
            this.direction = 'drain';
        }
    }


    // Radio Group Support
    radio_group_value = '';

    get radio_group_options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }


    // Spinner Support
    spinner_loaded = true;

    spinner_handleClick() {
        this.spinner_loaded = !this.spinner_loaded;
    }




}