var bio = {
    "name": "Antonio Garcia",
    "role": "Web Developer",
    "contacts": {
        "mobile": "688-987-833",
        "email": "antoniogagos@gmail.com",
        "github": "balusus",
        "twitter": "@antoniogagos96",
        "locacion": "Huelva, España"
    },
    "welcomeMessage": "Hola a todos soy Front-End Developer Ninja tron!",
    "skills": [
        "Learner", "JavaScript", "CSS", "Udacity"
    ],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [
      {
        "name": "Nova Southeastern University",
        "locacion": "Fort Lauderdale, FL",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": "2013",
        "url": "https://www.udacity.com/"
    },
    {
        "name": "Eckerd College",
        "locacion": "Saint Petersburg, FL",
        "degree": "BA",
        "majors": ["CS"],
        "dates": "2003",
        "url": "http://www.marca.com/"
    }
  ],
    "onlineCourses": [
      {
        "title": "Front End Developer Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "locacion": "Brooklyn, NY",
        "dates": "January 3000 - Future",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    }, {
        "employer": "Panucci's Pizza",
        "title": "Delivery Boy",
        "locacion": "Manhattan, NY",
        "dates": "1998 - December 31, 1999",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }, {
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }]
};

bio.display = function() {

    var headerName = HTMLheaderName.replace("%data%", bio.name);
    var headerRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(headerName, headerRole);

    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioPic, welcomeMsg);

    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var locacion = HTMLlocation.replace("%data%", bio.contacts.locacion);
    $("#topContacts").append(mobile, email, twitter, github, locacion);
    $("#footerContacts").append(mobile, email, twitter, github, locacion);

    $("#header").append(HTMLskillsStart);

    $.each(bio.skills, function(index) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills").append(formattedSkill);

    });
};



work.display = function() {

    $.each(work.jobs, function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].locacion);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkLocation, formattedDescription);

    });
};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    $.each(education.schools, function(school) {

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedNameURL = formattedName.replace("#", education.schools[school].url)

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].locacion);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedNameURL + formattedDegree, formattedDates, formattedLocation, formattedMajor);

    });

    $(".education-entry").append(HTMLonlineClasses);

    $.each(education.onlineCourses, function(online) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        var formattedUrl = formattedOnlineUrl.replace("#", education.onlineCourses[online].url)
        var formattedTitleUrl = formattedOnlineTitle.replace("#", education.onlineCourses[online].url)

        $(".education-entry").append(formattedTitleUrl + formattedOnlineSchool, formattedOnlineDates, formattedUrl);
    });
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    $.each(projects.projects, function(project) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        $.each(projects.projects[project].images, function(image) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImages);
        });
    });
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
