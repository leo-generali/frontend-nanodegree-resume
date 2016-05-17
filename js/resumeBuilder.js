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
		"location": "Lancaster, PA",
		"degree": "B.A.",
		"major": ["Business, Organization, and Society"],
		"dates": "2011 - 2015",
		"url": "http://fandm.edu"        
	}],

	"onlineCourse": [
	{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"date": "2016",
		"url": "http://udacity.com"
	}]
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
		"location": "New York City",
		"dates": "Summer 2015",
		"description": "Lorem ipsum"
	},
	{
		"employer": "Sandbox Strategies",
		"title": "Summer PR Associate",
		"location": "New York City",
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

function displayBio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedWelcome);
	$("#header").append(formattedPic);

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
}

displayBio();

function displaySkills(){
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

displaySkills()

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

displayWork();

function displayProjects(){
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

displayProjects();

function displayEducation(){
	for (edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedSchool = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);

		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
	for (onlineEdu in education.onlineCourse){
		$("#education").append(HTMLonlineClasses);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[onlineEdu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[onlineEdu].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[onlineEdu].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[onlineEdu].URL);
		var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;

		$(".education-entry:last").append(formattedOnlineCourse);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	};
}

displayEducation();


$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});


$("#main").append(internationalizeButton);

function inName(name){
	var nameArr = name.split(' ');
	var lastNameUp = nameArr[1].toUpperCase();
	return nameArr[0] + " " + lastNameUp;
}