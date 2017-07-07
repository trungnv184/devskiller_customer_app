import {Component} from "@angular/core";
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'customer-detail-page',
  templateUrl: 'customerdetail.html'  
})
export class CustomerDetailPage {
  customer : any;
  
  constructor( private navParams: NavParams) {
      this.customer = this.navParams.data;      
  }
}