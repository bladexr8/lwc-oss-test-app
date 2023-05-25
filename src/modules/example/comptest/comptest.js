import { LightningElement } from 'lwc';
import generateData from './generateData';

// datatable row actions
const actions = [
  { label: 'Show details', name: 'show_details' },
  { label: 'Delete', name: 'delete' },
];

// datatable columns
const columns = [
  { label: 'Label', fieldName: 'name' },
  { label: 'Website', fieldName: 'website', type: 'url' },
  { label: 'Phone', fieldName: 'phone', type: 'phone' },
  { label: 'Balance', fieldName: 'amount', type: 'currency' },
  { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
  {
    type: 'action',
    typeAttributes: { rowActions: actions },
  },
];

export default class comptest extends LightningElement {
    // Home Page reference for page-link
    homeReference = { type: 'home' }

    // text box value
    txtVal = 'Test Value'

    // button handler
    handleNeutralClick = function(cmp, event, helper) {
      console.log(`Neutral Button Clicked... txtVal = ${this.txtVal}`);
    }

    // text input change handler
    txtChange = function(event) {
      this.txtVal = event.target.value;
    }

    // datatable contents
    data = [];
    // datatable columns
    columns = columns;

    // seed datatable
    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        this.data = data;
    }

    // handle datatable row actions
    handleRowAction(event) {
      const actionName = event.detail.action.name;
      const row = event.detail.row;
      switch (actionName) {
          case 'delete':
              console.log(`Deleting ${row}`);
              console.log(row);
              break;
          case 'show_details':
            console.log(`Showing ${row}`);
            console.log(row);
              break;
          default:
      }
    }

    // checkbox group support
    cbgroup_value = ['option1'];

    get cbgroup_options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get cbgroup_selectedValues() {
        return this.cbgroup_value.join(',');
    }

    cbgroup_handleChange(e) {
        this.cbgroup_value = e.detail.value;
    }

    // combo box support
    cmbox_value = 'inProgress';

    get cmbox_options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    cmbox_handleChange(event) {
      this.cmbox_value = event.detail.value;
  }

  // dual list box support
  dlist_selected = [];

  get dlist_options() {
    return [
        { label: 'English', value: 'en' },
        { label: 'German', value: 'de' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'Italian', value: 'it' },
        { label: 'Japanese', value: 'ja' },
    ];
  }

  dlist_handleChange(e) {
    this.dlist_selected = e.detail.value;
  }

  get dlist_selected() {
    return this.dlist_selected.length ? this._selected : 'none';
  }


}