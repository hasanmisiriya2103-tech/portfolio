// Projects
let projects = ["Portfolio Website", "Calculator App", "Todo List"];
function displayProjects() {
    const list = document.getElementById("projectList");
    list.innerHTML = "";
    projects.forEach((proj) => {
        const li = document.createElement("li");
        li.textContent = proj;
        list.appendChild(li);
    });
}
function addProject() {
    const newProj = prompt("Enter new project name:");
    if(newProj) {
        projects.push(newProj);
        displayProjects();
    }
}
displayProjects();

// Skills
let skills = ["HTML", "CSS", "JavaScript"];
function displaySkills() {
    const list = document.getElementById("skillList");
    list.innerHTML = "";
    skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        list.appendChild(li);
    });
}
function addSkill() {
    const newSkill = prompt("Enter a new skill:");
    if(newSkill) {
        skills.push(newSkill);
        displaySkills();
    }
}
displaySkills();

// Contact form
function submitForm(e) {
    e.preventDefault(); // Prevent refresh
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
