import { Job } from './job';

export class Org {
    _id: string;
    orgname: string;
    fname: string;
    lname: string;
    street: string;
    city: string;
    state: string;
    zip: number;
    email: string;
    bio: string;
    jobs: Array<Job>;
}
