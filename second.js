let a = document.querySelector("#btn");
a.addEventListener("click",function(){
    window.location.href = "final.html"
})

let bottom = document.querySelector("#bottom");
let icon = document.querySelector("#icon");
let button = document.querySelector("button");

let Experience = document.querySelector(".Experience");
let icon2 = document.querySelector("#icon2");
let expB = document.querySelector(".expB");
let btn2 = document.querySelector("#btn2");
icon2.addEventListener("click",function(){
    let expT = document.createElement("div");
    expT.classList.add("expT");
    console.log(expT);
    let br13 = document.createElement("br");
    expT.appendChild(br13);
    let br14 = document.createElement("br");
    expT.appendChild(br14);
    let form = document.createElement("form");
    expT.appendChild(form);
    let experienceBlock = document.createElement("div");
    experienceBlock.classList.add("experience-block")
    form.appendChild(experienceBlock);

    let label = document.createElement("label");
    label.setAttribute("for","job-title");
    label.textContent = "Job Title";
    experienceBlock.appendChild(label);
    let br1 = document.createElement("br");
    experienceBlock.appendChild(br1);
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","job-title");
    input.setAttribute("placeholder","e.g. Software Engineer");
    experienceBlock.appendChild(input); 
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    experienceBlock.appendChild(br2);
    experienceBlock.appendChild(br3)

    let label1 = document.createElement("label");
    label1.setAttribute("for","company-name");
    label1.textContent = "Company Name:";
    experienceBlock.appendChild(label1);
    let br4 = document.createElement("br");
    experienceBlock.appendChild(br4);
    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","company-name");
    input1.setAttribute("placeholder","e.g. Google");
    experienceBlock.appendChild(input1); 
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");
    experienceBlock.appendChild(br5);
    experienceBlock.appendChild(br6)

    let label2 = document.createElement("label");
    label2.setAttribute("for","duration");
    label2.textContent = "Duration:";
    experienceBlock.appendChild(label2);
    let br7 = document.createElement("br");
    experienceBlock.appendChild(br7);
    let input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","duration");
    input2.setAttribute("placeholder","e.g. Jan 2022 - Present");
    experienceBlock.appendChild(input2); 
    let br8 = document.createElement("br");
    let br9 = document.createElement("br");
    experienceBlock.appendChild(br8);
    experienceBlock.appendChild(br9)

    let label3 = document.createElement("label");
    label3.setAttribute("for","job-desc");
    label3.textContent = "Description:";
    experienceBlock.appendChild(label3);
    let br10 = document.createElement("br");
    experienceBlock.appendChild(br10);
    let textarea = document.createElement("textarea");
    textarea.setAttribute("id","job-desc");
    textarea.setAttribute("rows","4");
    textarea.setAttribute("placeholder","Describe your responsibilities and achievements...");
    experienceBlock.appendChild(textarea);
    let br11 = document.createElement("br");
    experienceBlock.appendChild(br11);
    let br12 = document.createElement("br");
    experienceBlock.appendChild(br12);
    Experience.insertBefore(expT,expB);

    btn2.addEventListener("click",function(){
        Experience.removeChild(expT);
    });
})

let Education = document.querySelector(".Education");
let icon3 = document.querySelector("#icon3");
let eduT = document.querySelector(".eduT");
let eduB = document.querySelector("#eduB");
let btn3 = document.querySelector("#btn3");

icon3.addEventListener("click",function(){
    let eduT = document.createElement("div");
    eduT.classList.add("eduT");
    console.log(eduT);

    let br15 = document.createElement("br");
    eduT.appendChild(br15);
    let br16 = document.createElement("br");
    eduT.appendChild(br16);


    let form1 = document.createElement("form");
    eduT.appendChild(form1);

    let label = document.createElement("label");
    label.textContent = "School or University:";
    form1.appendChild(label);
    let br1 = document.createElement("br");
    form1.appendChild(br1);
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","school");
    input.setAttribute("placeholder","e.g. enter name of organisation...");
    form1.appendChild(input); 
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    form1.appendChild(br2);
    form1.appendChild(br3);

    let label1 = document.createElement("label");
    label1.textContent = "Degree:";
    form1.appendChild(label1);
    let br4 = document.createElement("br");
    form1.appendChild(br4);
    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("class","field");
    input1.setAttribute("placeholder","e.g. Degree and Field of Study");
    form1.appendChild(input1); 
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");
    form1.appendChild(br5);
    form1.appendChild(br6)

    let label2 = document.createElement("label");
    label2.textContent = "Duration:";
    form1.appendChild(label2);
    let br7 = document.createElement("br");
    form1.appendChild(br7);
    let input2 = document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("class","duration1");
    input2.setAttribute("placeholder","e.g. Jan 2022 - Present");
    form1.appendChild(input2); 
    let br8 = document.createElement("br");
    let br9 = document.createElement("br");
    form1.appendChild(br8);
    form1.appendChild(br8);
    Education.insertBefore(eduT,eduB);

    btn3.addEventListener("click",function(){
        Education.removeChild(eduT);
    })
})

let Achievement = document.querySelector(".Achievement");
let achB = document.querySelector("#achB");
let icon4 = document.querySelector("#icon4");
let btn4 = document.querySelector("#btn4");

icon4.addEventListener("click",function(){
    let achT = document.createElement("div");
    achT.classList.add("achT");
    console.log(achT);
    let br1 = document.createElement("br");
    achT.appendChild(br1);
    let br2 = document.createElement("br");
    achT.appendChild(br2);
    let form2 = document.createElement("form");
    achT.appendChild(form2);

    let label = document.createElement("label");
    label.textContent = "Your Achievements:";
    form2.appendChild(label);
    let br3 = document.createElement("br");
    form2.appendChild(br3);
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","achievements");
    input.setAttribute("placeholder","Your Achievement...");
    form2.appendChild(input); 
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    form2.appendChild(br4);
    form2.appendChild(br5);

    let label1 = document.createElement("label");
    label1.textContent = "Describe:";
    form2.appendChild(label1);
    let br6 = document.createElement("br");
    form2.appendChild(br6);
    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","describe");
    input1.setAttribute("placeholder","Describe what you did and the impact it had");
    form2.appendChild(input1); 
    let br7 = document.createElement("br");
    let br8 = document.createElement("br");
    form2.appendChild(br7);
    form2.appendChild(br8);

    Achievement.insertBefore(achT,achB);
    btn4.addEventListener("click",function(){
        Achievement.removeChild(achT)
    })
})

let skills = document.querySelector(".skills");
let skT = document.querySelector(".skT");
let skB = document.querySelector(".skB");
let icon5 = document.querySelector("#icon5");
let btn5 = document.querySelector("#btn5");

icon5.addEventListener("click",function(){
    let skT = document.createElement("div");
    skT.classList.add("skT");
    console.log(skT);
    let br1 = document.createElement("br");
    skT.appendChild(br1);
    let br2 = document.createElement("br");
    skT.appendChild(br2);

    let form3 = document.createElement("form");
    skT.appendChild(form3);

    let textarea = document.createElement("textarea");
    textarea.setAttribute("id","skills");
    textarea.setAttribute("placeholder","Your Skills...");

    form3.appendChild(textarea);
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    form3.appendChild(br3);
    form3.appendChild(br4);

    skills.insertBefore(skT,skB);
    btn5.addEventListener("click",function(){
        skills.removeChild(skT)
    })
})

let certification = document.querySelector(".certification");
let cerT = document.querySelector(".cerT");
let cerB = document.querySelector(".cerB");
let icon6 = document.querySelector("#icon6");
let btn6 = document.querySelector("#btn6");

icon6.addEventListener("click",function(){
    let cerT = document.createElement("div");
    cerT.classList.add("cerT");
    console.log(cerT);
    let br1 = document.createElement("br");
    cerT.appendChild(br1);
    let br2 = document.createElement("br");
    cerT.appendChild(br2);

    let form4 = document.createElement("form");
    cerT.appendChild(form4);

    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","certification")
    input.setAttribute("placeholder","Write title of your certification");

    form4.appendChild(input);
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    form4.appendChild(br3);
    form4.appendChild(br4);
    certification.insertBefore(cerT,cerB);
    btn6.addEventListener("click",function(){
        certification.removeChild(cerT)
    })
})

let projects = document.querySelector(".projects");
let proT = document.querySelector(".proT");
let proB = document.querySelector(".proB");
let icon7 = document.querySelector("#icon7");
let btn7 = document.querySelector("#btn7");

icon7.addEventListener("click",function(){
    let proT = document.createElement("div");
    proT.classList.add("proT");
    console.log(proT);
    let br1 = document.createElement("br");
    proT.appendChild(br1);
    let br2 = document.createElement("br");
    proT.appendChild(br2);
    let form5 = document.createElement("form");
    proT.appendChild(form5);

    let label = document.createElement("label");
    label.textContent = "Project Name:";
    form5.appendChild(label);
    let br3 = document.createElement("br");
    form5.appendChild(br3);
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","project");
    input.setAttribute("placeholder","Project Name");
    form5.appendChild(input); 
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    form5.appendChild(br4);
    form5.appendChild(br5);

    let label1 = document.createElement("label");
    label1.textContent = "Describe:";
    form5.appendChild(label1);
    let br6 = document.createElement("br");
    form5.appendChild(br6);
    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","describe2");
    input1.setAttribute("placeholder","Short summary of your work");
    form5.appendChild(input1); 
    let br7 = document.createElement("br");
    let br8 = document.createElement("br");
    form5.appendChild(br7);
    form5.appendChild(br8);

    projects.insertBefore(proT,proB);
    btn7.addEventListener("click",function(){
        projects.removeChild(proT)
    })
})

let extra = document.querySelector(".extra");
let exT = document.querySelector(".exT");
let exB = document.querySelector(".exB");
let icon8 = document.querySelector("#icon8");
let btn8 = document.querySelector("#btn8");

icon8.addEventListener("click",function(){
    let exT = document.createElement("div");
    exT.classList.add("exT");
    console.log(exT);
    let br1 = document.createElement("br");
    exT.appendChild(br1);
    let br2 = document.createElement("br");
    exT.appendChild(br2);
    let form5 = document.createElement("form");
    exT.appendChild(form5);

    let label = document.createElement("label");
    label.textContent = "Title:";
    form5.appendChild(label);
    let br3 = document.createElement("br");
    form5.appendChild(br3);
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","title");
    input.setAttribute("placeholder","Enter title....");
    form5.appendChild(input); 
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    form5.appendChild(br4);
    form5.appendChild(br5);

    let label1 = document.createElement("label");
    label1.textContent = "Describe:";
    form5.appendChild(label1);
    let br6 = document.createElement("br");
    form5.appendChild(br6);
    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","describe3");
    input1.setAttribute("placeholder","Describe here....");
    form5.appendChild(input1); 
    let br7 = document.createElement("br");
    let br8 = document.createElement("br");
    form5.appendChild(br7);
    form5.appendChild(br8);

    extra.insertBefore(exT,exB);
    btn8.addEventListener("click",function(){
        extra.removeChild(exT)
    })
})

document.querySelector("#btn").addEventListener("click",function(e){
    e.preventDefault();

    const data = {
        title: document.getElementById("jobTitle").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("nmber").value,
        email: document.getElementById("email").value,
        location: document.getElementById("Location").value,
        linkedin: document.getElementById("Linkedin").value,
        summary: document.getElementById("message").value,
    };
    data.experience = [];
    const experienceBlocks = document.querySelector(".experience-block").forEach((block) => {
        const jobTitle = block.querySelector("#job-title")?.value.trim();
        const companyName = block.querySelector("#company-name")?.value.trim();
        const duration = block.querySelector("#duration")?.value.trim();
        const description = block.querySelector("#job-desc")?.value.trim();
                console.log(`Block ${index}:`, { jobTitle, companyName, duration, description }); // DEBUG: Log values for each block

        if(jobTitle || companyName || duration || description){
            data.experience.push({jobTitle,companyName,duration,description});
        }
    });
});
