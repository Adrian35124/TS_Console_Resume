var firstName = "Rodrigo";
var middleName = "Adrian";
var lastName = "Arambula";
var fullName = firstName + " " + middleName + " " + lastName;
var fullNameCaps = fullName.toUpperCase();
// Should modify string to ALL CAPS.
displayPosition(fullNameCaps, "Full Stack Developer", "I am Hispanic");
function displayPosition(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription);
}
console.log("My Interests: ");
displayInterests("Video Games");
displayInterests("Sports & eSports");
displayInterests("Anime");
displayInterests("Spending time with my girlfirend");
displayInterests("Learning how to code!");
function displayInterests(myInterests) {
    console.log('*  ' + myInterests);
}
console.log("My Previous Experiences: ");
displayExperiences("Worked at My family's restaurant.");
displayExperiences("Started working at chipotle became a Service Manager there.");
displayExperiences("Worked retail at Advance Auto Parts.");
function displayExperiences(myPerviousExperiences) {
    console.log("*  " + myPerviousExperiences);
}
console.log("My Skills");
displayMySkills('Maining Ness in SSBU', true);
displayMySkills('Being able to code this project', true);
displayMySkills('Getting To Elite Smash in SSBU', false);
displayMySkills("Getting Plat in Ranked SR", false);
displayMySkills('Getting Plat in TFT', true);
function displayMySkills(mySkills, cool) {
    if (cool === true) {
        console.log('BAM: ' + mySkills);
    }
    else {
        console.log('' + mySkills);
    }
}
