import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {CustomerPage} from "../pages/customers/customer.page";

@Component({
  templateUrl: 'app.html'
})
export class CustomerApp {

  @ViewChild
  (Nav) nav: Nav;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nav.setRoot(CustomerPage);
    });

  }


}
