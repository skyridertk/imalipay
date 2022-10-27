import { Customer } from './Customer';

export interface RootObject {
    customer: Customer;
    deposit: string;
    date: string;
    transaction_status: string;
}
