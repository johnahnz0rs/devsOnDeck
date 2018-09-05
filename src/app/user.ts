import { Job } from './job';

export class User {
    _id: string;
    // common props:
    accountType: string;
    fname: string;
    lname: string;
    email: string;
    pw: string;
    cpw: string;
    //
    address: string;
    city: string;
    state: string;
    zip: string;
    bio: string;
    // dev props;
    devSkills: Array<string>;
    // org props;
    orgName: string;
}
