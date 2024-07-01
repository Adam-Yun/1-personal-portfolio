let chevron_professional = true
document.getElementById('chevron-professional').addEventListener('click', function() {
    console.log("chevron_professional")
    const professionalbody = document.getElementById('professional-body')
    const professionalhead = document.getElementById('professional-head')

    // Content to reduce content for dropdown interaction
    const professionalExperience = document.getElementById('professional-experience')
    const professionalTitle = document.getElementById('professional-title')
    const locationAndDate = document.getElementById('location-date-container')
    const professionalLocation = document.getElementById('professional-location')
    const professionalDate = document.getElementById('professional-date')
    

    elements = [professionalExperience,professionalTitle,locationAndDate,professionalLocation,professionalDate]

    chevron_professional = resumeDropDown(chevron_professional,professionalbody,professionalhead,elements)
})

let chevron_education = true
document.getElementById('chevron-education').addEventListener('click', function() {
    console.log("chevron_education")
    const educationbody = document.getElementById('education-body')
    const educationhead = document.getElementById('education-head')

    // chevron_education = resumeDropDown(chevron_education,educationbody,educationhead)
})

let chevron_skills = true
document.getElementById('chevron-skills').addEventListener('click', function() {
    console.log("chevron_skills")
    const skillsbody = document.getElementById('skills-body')
    const skillshead = document.getElementById('skills-head')

    // chevron_skills = resumeDropDown(chevron_skills,skillsbody,skillshead)
})

function resumeDropDown(chevron, body, head, elements){

    if(chevron){
        /* 
            height: 0px;
            padding:0px;
            opacity: 0;
        */
        
        body.style.height = "min-content"
        body.style.padding = "10px"
        body.style.opacity = "1"

        for (let element of elements){
            element.style.height = 'auto'
            console.log(element.style.height)
        }
        
        return chevron = false
    }else{
        body.style.height = "0px"
        body.style.padding = "0px"
        body.style.opacity = "0"

        for (let element of elements){
            element.style.height = '0px'
            console.log(element.style.height)
        }
        return chevron = true
    }
}