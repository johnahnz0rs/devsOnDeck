# DevsOnDeck
Aka “Fake RemoteOK”(?)
Aka “Fake WebDev Job Site”(?)

DevsOnDeck is a fake job board where developers can look for jobs, and organizations can post jobs and look for developers.
Languages/Frameworks/Libraries: MEAN, MongoDB, Express.js, Angular, Node.js, HTML, CSS, Bootstrap





johnahnz0rs' to-do list:

CURRENTLY WORKING ON:
[]8/2/18 - 
[] create brypt backend
[] update current controller.createOneDev to have it encrypt the user's pw before creating a new dev document.
[x] updated dev registration form so that it bcrypts the passwords
[] update the login form so that it compares bcrypt passwords.
[]
[]
[]7/30/18 - 
[] what do i want to do today? I want to:
[]  make a way to edit a user once they are logged in, so that i can:
[]   update nwailes and jahn passwords to bcrypt
[]
[] **user edit backend**
[] create user edit backend
[] hook up dev user edit end-to-end
[] debug dev user edit
[] update nwailes and jahn passwords to bcrypted passwords
[]
[] ** user login w bcrypt backend **
[] create permanent login with bcrypt
[]
[] ** misc **
[] create error msg on dev-suli that alerts user if email is already registered
[]
[x] create temp-login-without-bcrypt (on home screen)
[x] bug: jahn account had no pw; i used mongo shell to add one;
[x] fix login - the issue was with the mongo command i was calling 
[x] create dev dashboard
[x] create dev user edit page on frontend (on dev dashboard)
[x]
[x]
[x]7/29/18 - 
>[] why is login function not working? the backend is unable to find the route. why not?
>[] create error msg on dev-suli that alerts user if email is already registered
[x] get end-to-end new dev user registration working
>[] create password bcrypt on backend
>[] create dev user edit page on frontend
>[] hook up dev user edit end-to-end
>[] debug dev user edit
>[] create temp-login-without-bcrypt
>[] create permanent login with bcrypt
>[] edit nwailes and jahn passwords
[x]
[x]
[x]7/28/18 - create end-to-end dev signup process (create mongo document and return dev object)
[x] create outline of server/controllers/controller.js
[x] flesh out/write the mongo commands for a few functions in controller
[x] create outline of server/routes/routes.js
[x] create outline services: F/E api calls 
[x] why is my create new dev not working even though i can create new dev in mongo shell?
[x]
[x]
[x]7/27/18 -
[x] quick push through pages 2 and 3 of the dev signup form
[x] fix the progress bar -- i just removed the progress bar
[x] fix the register header
[x] make my selected languages display horizontally, not in a column.
[x] finish the org signup form
[x] start the back end server.js and mongoose/mongo
[x]
[x]
[x]7/26/18 -
[x] why wont confirm password validation error go away?
[x] got icons for all languages, frameworks, and libraries
[x]
[x]7/25/18 - get the client side devsuli form to be able to console.log form data. Also: add hidden divs to finish filling out the languages/frameworks sections of Dev object.
[x]Next: do the same for client side orgsuli form (sans languages/frameworks).






SERVER
[x]Server mongo models
	[x]Dev - fname, lname, street, city, state, zip, email, pw, bio, skills (Array<language, framework>), languages, frameworks, resume, type=dev
	[x]Org - orgname, fname, lname, street, city, state, zip, email, bio, jobs (Array<Job>), type=org
	[x]Job - orgId, name, descr, skills (Array<Skill>), type=job 

[x]Server routes (outlined):
	[x]Post CreateOne : create 1 dev, org, or job
	[x]Get ReadAllDevs: return all devs
	[x]Get ReadAllOrgs: return all orgs
	[x]Get ReadAllJobs: return all jobs
	[x]Get ReadOneById: return 1 dev, org, or job
	[x]Put UpdateOneById: update 1 dev, org, or job
	[x]Delete DeleteOneById: delete 1 dev, org, or job
	
[] Server controllers (built):
	[]CreateOne : create 1 dev, org, or job
	[]ReadAllDevs: return all devs
	[]ReadAllOrgs: return all orgs
	[]ReadAllJobs: return all jobs
	[]ReadOneById: return 1 dev, org, or job
	[]UpdateOneById: update 1 dev, org, or job
	[]DeleteOneById: delete 1 dev, org, or job


CLIENT

[x]Get icons for:
	[x]Languages:
		[x]HTML5
		[x]CSS3
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
	[x]Get “/“ : splash page, choose dev or org
	[x]
	[x]Post /signup/dev
	[x]post /signup/org
	[x]
	[x]
	[]Get /dev/dashboard
	[]Get /dev/:id/
	[]Get /dev/:id/edit
	[]Get /dev/:jobid
	[]Get /dev/:orgid
	[x]
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
		[x]CSS it up
	[x]
	[x]
	[x]Dev suli.html
		[x]Header 
			[x]Link to splash 
			[x]Link logout
		[x]Form signup
		[x]Form login
		[x]CSS it up
	[x]
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
	[]Dev view job.html -comp dev show job
		[]Read job attrib 
		[]Link to view 1 org
		[]Form to msg 1 org
		[]get dev-job match rate
	[x]
	[x]
	[]Dev org.html -comp dev show org
		[]Read org attrib
		[]Links to view 1 job
		[]get dev-job match rate
	[x]
	[x]
	[x]Org suli.html
		[x]Header
		[x]Form - signup
		[x]Form - login
		[x]CSS it up
	[x]
	[x]
	[]Org edit.html
	[x]
	[x]
	[]Org dashboard.html
		[]Header
			[]Link home/dashboard
			[]Link logout
		[]Show bio
	[x]
	[x]
	[]Org view one job job.html
		[]Header
			[]Link home/dashboard
			[]Link logout
		[] read the job
		    [] show attributes
		[]Read all devs
		    []get dev-match rate
		    []link to each dev
	[x]
	[x]
	[]Org view one dev.html 
		[]Header
			[]Link home/dashboard 
			[]Link logout 
		[]Read 1 dev
		    [] show bio 
		    [] show skills
		[]Form to msg 1 dev (via email?)




[]Client functions
	[]Login dev 
	[]Login org
	[x]
	[x]
	[x]CreateNewDev
	[x]NewDevP2
	[x]NewDevP3
	[x]CreateNewOrg
	[]CreateNewJob
	[x]
	[x]
	[]Dev Match Job
	    []calculates match between 1 job and 1 dev
	[x]
	[x]
	[] Dev Match All Jobs
	    []Dev Read All Jobs 
	        []Receives all jobs, 
	    []For each job: dev match job()
        []Sorts all jobs by match
	    []Returns all jobs sorted by match for template 
	[x]
	[x]
	[]Dev Read One Job
	    []Receives 1 job
	    []Dev match job()
	    []Returns 1 job for template
	[x]
	[x]
	[]Dev Read All Jobs By One Org
	    []Receives all jobs by org
	    []For each job: 
	        [] get Dev match job()
	        []Sort all jobs by match
	    []Return all jobs sorted by match
	[x]
	[x]
	[]Dev Read All Orgs
	    []Receives all orgs
	    []Returns All orgs for template
	[x]
	[x]
	[]Dev Read One Org
	    []Receives one org
	    []receives all jobs by that org
	    []For each job: 
	        [] dev match job()
	        []Sort all jobs by match
	    []Return all jobs sorted by match
	[x]
	[x]
	[]Org Read All Devs
	[x]
	[x]
	[]Org Read One Dev
	    [] receive dev attributes
	    [] return dev object
	[x]
	[x]
	[]Org Read All Jobs
	    [] read all the jobs by the org
	    [] return them to template for display
	[x]
	[x]
	[]Org Read One Job
	    [] read one job by id
	    [] return the job object










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
