import { LightningElement } from 'lwc';
export default class BikeCard extends LightningElement {
  name = 'BIKE NOVA ';
  description = 'A sweet bike built for comfort.';
  category = 'Mountain';
  material = 'Steel';
  price = '$4,700';
  pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}