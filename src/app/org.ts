import { Job } from './job';

export class Org {
    _id: string;
    orgName: string;
    fname: string;
    lname: string;
    email: string;
    pw: string;
    cpw: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    jobs: Array<Job>;
    accountType: string;
}
