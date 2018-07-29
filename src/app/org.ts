import { Job } from './job';

export class Org {
    _id: string;
    orgName: string;
    bio: string;
    fname: string;
    lname: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    email: string;
    pw: string;
    cpw: string;
    jobs: Array<Job>;
    accountType: string;
}
