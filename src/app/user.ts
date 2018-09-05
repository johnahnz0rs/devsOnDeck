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

    // dev props;
    devBio: string;
    devSkills: Array<string>;
    // resume: any;
    // avatar: any;

    // org props;
    orgName: string;
    orgJobs: Array<Job>;
}
