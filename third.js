const data = JSON.parse(localStorage.getItem("resumeData"));

let resumeConatiner = document.getElementById("resume");
if(data){
    let nameSection = document.createElement("div");
    nameSection.classList.add("nameSection");
    resumeConatiner.appendChild(nameSection);
    console.log(resumeConatiner);
    console.log(resumeConatiner);
    let left = document.createElement("div");
    left.classList.add("left");
    let right = document.createElement("div");
    right.classList.add("right");
    nameSection.appendChild(left);
    nameSection.appendChild(right);
    let name = document.createElement("h1");
    name.textContent = data.name;
    let job = document.createElement("h3");
    job.textContent = data.title;
    let linkedin = document.createElement("p");
    linkedin.innerHTML = `<strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a>`;
    left.appendChild(name);
    left.appendChild(job);
    left.appendChild(linkedin);
    let phone = document.createElement("p");
    phone.innerHTML = `<strong>Phone:</strong> ${data.phone}`;
    let email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> ${data.email}`;
    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${data.location}`;
    right.appendChild(phone);
    right.appendChild(email);
    right.appendChild(location);
}
if(data){
    let summary1 = document.createElement("div");
    summary1.classList.add("summary");
    resumeConatiner.appendChild(summary1);
    let heading = document.createElement("h3");
    heading.textContent = "Summary:"
    summary1.appendChild(heading);
    let para = document.createElement("p");
    para.innerHTML = `${data.summary}`;
    summary1.appendChild(para);
}
if(data){
    let experienceSection = document.createElement("div");
    experienceSection.classList.add("experience");
    resumeConatiner.appendChild(experienceSection);
    let heading = document.createElement("h3");
    heading.textContent = "Experience:";
    experienceSection.appendChild(heading);
    data.experience.forEach((exp) => {
        let expBlock = document.createElement("div");
        expBlock.classList.add("experience-item");
        experienceSection.appendChild(expBlock);

        let jobTitleComapny = document.createElement("p");
        jobTitleComapny.innerHTML = `<strong>${exp.jobTitle}</strong> at ${exp.companyName}`;
        expBlock.appendChild(jobTitleComapny);

        let duration = document.createElement("p");
        duration.textContent = exp.duration;
        expBlock.appendChild(duration);

        let description = document.createElement("p");
        description.textContent = exp.description;
        expBlock.appendChild(description);
    });
}
