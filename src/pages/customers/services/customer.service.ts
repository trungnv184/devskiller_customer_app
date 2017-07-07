import {Injectable} from "@angular/core";
import {Customer} from "../datatypes/customer";
import {Gender} from "../datatypes/gender";
import {Address} from "../datatypes/address";

@Injectable()
export class CustomerService {

  private customerData: Customer[];

  constructor() {
    this.initMockData();
  }

  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(this.customerData);
  }

  private initMockData(): void {
    this.customerData = [];

    let customer = new Customer();
    customer.firstName = 'Hanna';
    customer.lastName = 'Blumenthal';
    customer.gender = Gender.FEMALE;
    let address = new Address();
    address.street = 'Bundesgasse 35';
    address.zip = '3011';
    address.place = 'Bern';
    address.country = 'Switzerland';
    customer.address = address;
    this.customerData.push(customer);

    customer = new Customer();
    customer.firstName = 'Ty';
    customer.lastName = 'Senn';
    customer.gender = Gender.MALE;
    address = new Address();
    address.street = 'Rosenweg 12';
    address.zip = '3001';
    address.place = 'Bern';
    address.country = 'Switzerland';
    customer.address = address;
    this.customerData.push(customer);

    customer = new Customer();
    customer.firstName = 'Peer';
    customer.lastName = 'Gynt';
    customer.gender = Gender.OTHER;
    address = new Address();
    address.street = 'Gerbergasse 14';
    address.zip = '3005';
    address.place = 'Bern';
    address.country = 'Switzerland';
    customer.address = address;
    this.customerData.push(customer);

    customer = new Customer();
    customer.firstName = 'Khoa';
    customer.lastName = 'Nguyen';
    customer.gender = Gender.MALE;
    address = new Address();
    address.street = '157 Vo Tho Sau';
    address.place = 'HCM City';
    address.country = 'Vietnam';
    customer.address = address;
    this.customerData.push(customer);
  }

}
