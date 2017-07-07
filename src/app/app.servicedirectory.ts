import {CustomerService} from "../pages/customers/services/customer.service";

export class ServiceDirectory {
  static getServices(): any[] {
    return [
      CustomerService
    ];
  }
}
