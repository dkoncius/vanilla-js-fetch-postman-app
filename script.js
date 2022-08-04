"use strict"

const EXP_URL = "https://zany-skitter-caper.glitch.me/experiences"
const description = document.getElementById("description")


// Load experience info
async function fetchExpUrl(){
    const response = await fetch(EXP_URL)
    const data = await response.json()

    loadExpData(data)
}

function loadExpData(data){
     // Atspausdins pagal current
    var filterCurrent = data.filter(item => typeof item.finishYear === "string").sort((a, b) => b.startYear - a.startYear)
    filterExpData(filterCurrent)

    // Atspausdins year
    var filterYear = data.filter(a => typeof a.finishYear === "number").sort((a, b) => a.finishYear - b.finishYear)
    filterExpData(filterYear)

    console.log(data)
}

function filterExpData(data){
     data.map(x => {
        var newDescription = document.createElement("div")
        newDescription.classList.add("description")
        newDescription.innerHTML =
        `
        <div class="company">
                        <h3>${x.startYear} - ${x.finishYear}</h3>
                        <p>${x.companyName}</p>
                    </div>
                    <div class="position">
                        <h3>${x.position}</h3>
                        <p>${x.description}</p>
                    </div>
        </div>
        `

        description.append(newDescription)
    })
}

fetchExpUrl()

// Load skills info
const SKILLS_URL = "https://zany-skitter-caper.glitch.me/skills"
const skills = document.getElementById("skills")



async function fetchSkillsUrl(){
    const response = await fetch(SKILLS_URL)
    const data = await response.json()

    loadSkillsData(data)
}

function loadSkillsData(data){
    data.map(x => {
         var newSkill = document.createElement("div")
        newSkill.innerHTML =
        `
        <div class="skill">
            <h3 class="skill-name">${x.title}</h3>
            <p>${x.level}%</p>
        </div>
        <div class="stats-container">
            <div class="stats"  style="width: ${x.level}%"></div>
        </div>

        `
        skills.append(newSkill)
    })
   
    console.log(data)
}

fetchSkillsUrl()
