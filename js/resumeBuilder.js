var bio = {
	"name": "Leo Generali",
	"role": "Business Anaylst",
	"contacts": {
		"mobile": "914-522-1287",
		"email": "leogen17@gmail.com",
		"github": "leo-generali",
		"twitter": "@itsleeohgee",
		"location": "Washington, DC"
	}, 
	"welcomeMessage": "What's popping slime?",
	"skills": ["HTML", "CSS", "JavaScript", "Project Management", "jQuery", "Bootstrap",],
	"biopic": "images/color_prof.jpg"
}

var education = {
	"schools": [
	{
		"name": "Franklin and Marshall College",
		"city": "Lancaster, PA",
		"degree": "BA",
		"major": "Business, Organizations, and Society",
		"dates": "2015"
	},
	{
		"name": "Franklin and Marshall College",
		"city": "West Chester, PA",
		"degree": "BA",
		"major": "Business, Organizations, and Society",
		"dates": "2015"
	}
	]
}

var work = {
	"jobs": [
	{
		"employer": "Truven Health Analytics",
		"title": "Business Analytics",
		"location": "Washington, DC",
		"dates": "August 2015 - Current",
		"description": "Lorem ipsum"
	},
	{
		"employer": "ConciergeStat (Formally BoardRounds)",
		"title": "Marketing Intern",
		"location": "New York, New York",
		"dates": "Summer 2015",
		"description": "Lorem ipsum"
	},
	{
		"employer": "Sandbox Strategies",
		"title": "Summer PR Associate",
		"location": "New York, New York",
		"dates": "Summer 2014",
		"description": "Lorem ipsum"
	}
	]
}

var project = {
	"projects": [
	{
		"title": "First Project",
		"dates": "2016",
		"description": "This project did this."
	},
	{
		"title": "Second Project",
		"dates": "2016",
		"description": "This project did that."
	}
	]
}

//Replaces the generic %data% in the helper file with the name and role listed in the JSON up above

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedWelcome);
$("#header").append(formattedPic);


//Does the same as above but for mobile, email, github, twitter, and location

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

//Adds Skills at a Glance section + Skills

$("#header").append(HTMLskillsStart);

for(skill in bio.skills){
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);

}

//Adds Job section

displayWork();

function displayWork() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

//Logs where the mouse clicks on the page

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

//Adds button and functionality to make name international. Leo Generali => Leo GENERALI

$("#main").append(internationalizeButton);

function inName(name){
	var nameArr = name.split(' ');
	var lastNameUp = nameArr[1].toUpperCase();
	return nameArr[0] + " " + lastNameUp;
}

//Uses encapsulation to display projects

projects.display = function(){
	for(proj in project.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display();

$("#mapDiv").append(googleMap);