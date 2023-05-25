import { LightningElement } from 'lwc';

export default class comptest03 extends LightningElement {
    // Home Page reference for page-link
    homeReference = { type: 'home' }

    // Input Search Support
    search_queryTerm;

    search_handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.search_queryTerm = evt.target.value;
        }
    }

    // Address Picklist Support
    address = {
        street: '121 Spear St.',
        city: 'San Francisco',
        province: 'CA',
        postalCode: '94105',
        country: 'US',
    };

    _country = 'US';

    countryProvinceMap = {
        US: [
            { label: 'California', value: 'CA' },
            { label: 'Texas', value: 'TX' },
            { label: 'Washington', value: 'WA' },
        ],
        CN: [
            { label: 'GuangDong', value: 'GD' },
            { label: 'GuangXi', value: 'GX' },
            { label: 'Sichuan', value: 'SC' },
        ],
        VA: [],
    };

    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'China', value: 'CN' },
        { label: 'Vatican', value: 'VA' },
    ];

    get getProvinceOptions() {
        return this.countryProvinceMap[this._country];
    }
    get getCountryOptions() {
        return this.countryOptions;
    }

    country_handleChange(event) {
        this._country = event.detail.country;
    }

    // Name Input Support
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
}