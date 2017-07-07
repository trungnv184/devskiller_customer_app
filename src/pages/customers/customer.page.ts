import {Component} from "@angular/core";
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CustomerDetailPage } from '../customerdetail/customerdetail.page';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'customer-page',
  templateUrl: 'customer.html'
})
export class CustomerPage {

  customers : any[];

  constructor(private nav: NavController,
  			  private navParams: NavParams,
  			  private loadingController: LoadingController, 
  			  private customerService : CustomerService ){
       this.initializeData();
 }  	

  /**
   * Function :itemTapped
   * Description : used to navigate to another page
   **/        
  itemTapped($event, customer){
    this.nav.push(CustomerDetailPage, customer); 
  }

  /**
   * Function:initializeData
   * Description: initalized data before loading on view
   **/
  private initializeData (){
    let loader = this.loadingController.create({
      content: 'Loading customers...'      
    });

    loader.present().then(() => {
      this.customerService.getCustomers().then(data => {
        this.customers = data;
        loader.dismiss();        
      });      
    });
  }
}


