import { LightningElement } from 'lwc';
export default class App extends LightningElement {
  name = 'Electra X4';
  description = 'A sweet bike built for comfort.';
  category = 'Mountain';
  material = 'Steel';
  price = '$2,700';
  pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
  ready = false;
  connectedCallback() {
    console.log("log");
    setTimeout(() => {
      this.ready = true;
      console.log("depois dos 10 segundos");
    }, 3000);
  }
  get retornarNome() {
    return 'Fravinho';
  }
}