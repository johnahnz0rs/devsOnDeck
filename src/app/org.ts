import { Job } from './job';

export class Org {
    _id: string;
    orgName: string;
    fname: string;
    lname: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    email: string;
    bio: string;
    jobs: Array<Job>;
    accountType: string;
}
