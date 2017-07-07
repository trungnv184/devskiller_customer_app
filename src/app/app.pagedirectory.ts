import {CustomerPage} from "../pages/customers/customer.page";
import {CustomerDetailPage} from "../pages/customerdetail/customerdetail.page";
export class PageDirectory {
  static getPages(): any[] {
    return [
      CustomerPage,
      CustomerDetailPage
    ]
  }
}
