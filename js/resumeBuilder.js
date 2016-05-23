var bio = {
	"name": "Leo Generali",
	"role": "Business Anaylst",
	"contacts": {
		"mobile": "914-522-1287",
		"email": "me@leogenerali.com",
		"github": "leo-generali",
		"twitter": "@itsleeohgee",
		"location": "Washington, DC"
	}, 
	"welcomeMessage": "What's popping slime?",
	"skills": ["HTML", "CSS", "JavaScript", "Project Management", "jQuery", "Bootstrap"],
	"biopic": "images/color_prof.jpg"
};

var education = {
	"schools": [
	{
		"name": "Franklin and Marshall College",
		"location": "Lancaster, PA",
		"degree": "B.A.",
		"majors": ["Business, Organization, and Society"],
		"dates": "2011 - 2015",
		"url": "http://fandm.edu"        
	}],

	"onlineCourses": [
	{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"date": "2016",
		"url": "http://udacity.com"
	}]
};

var work = {
	"jobs": [
	{
		"employer": "Truven Health Analytics",
		"title": "Business Analytics",
		"location": "Washington, DC",
		"dates": "August 2015 - Current",
		"description": "I assist with program management on Truven Health’s Innovation Accelerator (IAP) project, a joint program between Center for Medicaid and CHIP Services (CMCS) and the Center for Medicare & Medicaid Innovation (CMMI)."
	},
	{
		"employer": "ConciergeStat (Formally BoardRounds)",
		"title": "Marketing Intern",
		"location": "New York City",
		"dates": "Summer 2015",
		"description": "BoardRounds (now ConciergeStat) is a company that offers healthcare providers a service to reduce ED readmission. This software can also be used to conduct analysis of patients based on a variety of metrics. In this role I was responsible for the following: working with CEO to develope a 3 month summer sales plan, identifying and contacting sales lead to create opportunities for partnerships with hospitals and healthcare systems, and analyzing customer use patterns for engineering team to make updates to software."
	},
	{
		"employer": "Sandbox Strategies",
		"title": "Summer PR Associate",
		"location": "New York City",
		"dates": "Summer 2014",
		"description": "I assisted in the execution of PR plans for world-class videogame companies like Telltale Games, Activision, SteelSeries, Lima Sky, and Crytek, revised and created fact sheets for review copies of titles, updated and tracked game press kits, and created press releases drafts for upcoming video games"
	}
	]
};

var project = {
	"projects": [
	{
		"title": "First Project",
		"dates": "2016",
		"description": "The first project I feel comfortable sharing with the world is this website. It was created using a mix of HTML, CSS, and Javascript (jQuery).",
		"images" : ["http://placehold.it/150x150", "http://placehold.it/150x150"]
	},
	{
		"title": "Second Project",
		"dates": "2016",
		"description": "When I come up with an amazing second project I will be adding it here.",
		"images" : ["http://placehold.it/150x150", "http://placehold.it/150x150"]
	}
	]
};


bio.display = function(){
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

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedMobile);

	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};

education.display = function(){
	for (edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedSchool = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);

		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	for (onlineEdu in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineEdu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineEdu].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineEdu].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineEdu].url);
		var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;

		$(".education-entry:last").append(formattedOnlineCourse);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

work.display = function(){
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
};


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
}; 

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});