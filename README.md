# DevsOnDeck
Aka “Fake RemoteOK”(?)
Aka “Fake WebDev Job Site”(?)


johnahnz0rs' to-do list:

CURRENTLY WORKING ON:
[x]7/26/18 - why wont confirm password validation error go away?
[x] got icons for all languages, frameworks, and libraries
[x]7/25/18 - get the client side devsuli form to be able to console.log form data. Also: add hidden divs to finish filling out the languages/frameworks sections of Dev object.
[]Next: do the same for client side orgsuli form (sans languages/frameworks).






SERVER
[]Server mongo models
	[]Dev - fname, lname, street, city, state, zip, email, pw, bio, skills (Array<language, framework>), languages, frameworks, resume, type=dev
	[]Org - orgname, fname, lname, street, city, state, zip, email, bio, jobs (Array<Job>), type=org
	[]Job - orgId, name, descr, skills (Array<Skill>), type=job 

[]Server routes:
	[]Post CreateOne : create 1 dev, org, or job
	[]Get ReadAllDevs: return all devs
	[]Get ReadAllOrgs: return all orgs
	[]Get ReadAllJobs: return all jobs
	[]Get ReadOneById: return 1 dev, org, or job
	[]Put UpdateOneById: update 1 dev, org, or job
	[]Delete DeleteOneById: delete 1 dev, org, or job



CLIENT

[x]Get icons for:
	[x]Languages:
		[x]Html5
		[x]Css
		[x]JavaScript
		[x]Php
		[x]Java
		[x]Python
		[x]SQL
		[x]C#
		[x]
	[x]Frameworks/Libraries
		[x]Bootstrap
		[x]Materialize
		[x]JQuery
		[x]MongoDB 
		[x]Express
		[x]AngularJS
		[x]Node.js
		[x]VueJS
		[x]ReactJS
		[x]Ember
		[x]Backbone JS
		[x]MeteorJS
		[x]
		[x]Flask
		[x]Django
		[x]Pyramid
		[x]Bottle
		[x]CherryPy
		[x]
		[x]MySQL
		[x]XML
		[x]Postgres


[]Client Components:
	[x]Dev suli
	[]Dev edit
	[]Dev dashboard
	[]Dev show org
	[]Dev show job
	[x]
	[x]Org suli
	[]Org edit
	[]Org dashboard
	[]Org show dev
	[]Org show job



[x]Client classes:
	[x]Dev - fname, lname, street, city, state, zip, email, pw, cpw, bio, skills (Array<language, framework>), languages, frameworks, resume, 
	[x]Org - orgname, fname, lname, street, city, state, zip, email, bio, jobs (Array<Job>)
	[x]Job - orgId, name, descr, skills (Array<Skill>)



[]Client routes:
	[]Get “/“ : splash page, choose dev or org
	[x]
	[]Get /dev/suli
	[]Get /dev/dashboard
	[]Get /dev/:id/
	[]Get /dev/:id/edit
	[]Get /dev/:jobid
	[]Get /dev/:orgid
	[x]
	[]Get /org/suli
	[]Get /org/dashboard
	[]Get /org/:id/
	[]Get /org/:id/edit
	[]Get /org/:jobid
	[]Get /org/:devid


[]Client templates
	[x]Index.html (splash page)
		[x]Header
			[x]Link to splash/index 
			[x]Link to logout
		[]CSS it up
	[x]
	[x]Dev suli.html
		[]Header 
			[]Link to splash 
			[]Link logout
		[x]Form signup
		[x]Form login
		[]CSS it up
	[x]
	[]Dev dashboard.html
		[]Header
			[]Link to dashboard
			[]Link logout
		[]Show bio -leftcol
		[]Btn edit bio -toggles display/hide of form edit bio
		[]Form edit bio
		[]Details -rightcol
		[]Btn see all jobs (default) -toggles display of jobs/devs
		[x]
		[]Button see all orgs -toggles display of jobs/dev
	[x]
	[]Dev job.html -comp dev show job
		[]Read job attrib 
		[]Link to view 1 org
		[]Form to msg 1 org
	[x]
	[]Dev org.html -comp dev show org
		[]Read org attrib
		[]Links to view 1 job
	[x]
	[x]Org suli.html
		[]Header
		[x]Form - signup
		[x]Form - login
		[]CSS it up
	[x]
	[]Org edit.html
	[x]
	[]Org dashboard.html
		[]Header
			[]Link home/dashboard
			[]Link logout
		[]Show bio
	[x]
	[]Org job.html
		[]Header
			[]Link home/dashboard
			[]Link logout
		[]Read 1 job
		[]Read all devs
	[x]
	[]Org dev.html 
		[]Header
			[]Link home/dashboard 
			[]Link logout 
		[]Read 1 dev
		[]Form to msg 1 dev




[]Client functions
	[]Login dev 
	[]Login org
	[x]
	[]CreateNewDev
	[]NewDevP2
	[]NewDevP3
	[]CreateNewOrg
	[]CreateNewJob
	[x]
	[]Dev Match Job
	[]calculates match be 1 job and 1 dev
	[]Dev Read All Jobs 
	[]Receives all jobs, 
	[]For each job: dev match job()
	[]Sorts all jobs by match
	[]Returns all jobs sorted by match for template 
	[]Dev Read One Job
	[]Receives 1 job
	[]Dev match job()
	[]Returns 1 job for template
	[]Dev Read All Jobs By One Org
	[]Receives all jobs by org
	[]For each job: Dev match job()
	[]Sort all jobs by match
	[]Return all jobs sorted by match
	[]Dev Read All Orgs
	[]Receives all orgs
	[]Returns All orgs for template
	[]Dev Read One Org
	[]Receives one org
	[]For each job: dev match job()
	[]Sort all jobs by match
	[]Return all jobs sorted by match
	[x]
	[]Org Job Match Dev - calculates match be 1 job and 1 dev
	[]Org Read Devs
	[]Org Read Dev
	[]Org Read Jobs
	[]Org Read Job










This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
