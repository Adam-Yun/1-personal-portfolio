let chevron_ai_chatbot = true
document.getElementById('chevron-ai-chatbot').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-ai-chatbot')     // Project's content container
    const view = document.getElementById('view-ai-chatbot')     // Project's image container
    const image = document.getElementById('image-ai-chatbot')   // Project's image
    const extra_description =  document.getElementById('extra-description-ai-chatbot')   // Project's extra description

    chevron_ai_chatbot = projectDropDown(card,view,image,extra_description,chevron_ai_chatbot)
})

let chevron_stock_prediction = true
document.getElementById('chevron-stock-prediction').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-stock-prediction')   // Project's content container
    const view = document.getElementById('view-stock-prediction')   // Project's image container
    const image = document.getElementById('image-stock-prediction') // Project's image
    const extra_description =  document.getElementById('extra-description-stock-prediction')   // Project's extra description

    chevron_stock_prediction = projectDropDown(card,view,image,extra_description,chevron_stock_prediction)
})

let chevron_coin_detection = true
document.getElementById('chevron-coin-detection').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-coin-detection')   // Project's content container
    const view = document.getElementById('view-coin-detection')   // Project's image container
    const image = document.getElementById('image-coin-detection') // Project's image
    const extra_description =  document.getElementById('extra-description-coin-detection')   // Project's extra description

    chevron_coin_detection = projectDropDown(card,view,image,extra_description,chevron_coin_detection)
})

let chevron_singapore_pathfinder = true
document.getElementById('chevron-singapore-pathfinder').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-singapore-pathfinder')   // Project's content container
    const view = document.getElementById('view-singapore-pathfinder')   // Project's image container
    const image = document.getElementById('image-singapore-pathfinder') // Project's image
    const extra_description =  document.getElementById('extra-description-singapore-pathfinder')   // Project's extra description

    chevron_singapore_pathfinder = projectDropDown(card,view,image,extra_description,chevron_singapore_pathfinder)
})

let chevron_mini_projects = true
document.getElementById('chevron-mini-projects').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-mini-projects')   // Project's content container
    const view = document.getElementById('view-mini-projects')   // Project's image container
    const image = document.getElementById('image-mini-projects') // Project's image
    const extra_description =  document.getElementById('extra-description-mini-projects')   // Project's extra description

    chevron_mini_projects = projectDropDown(card,view,image,extra_description,chevron_mini_projects)
})

let chevron_university_project = true
document.getElementById('chevron-university-project').addEventListener('click', function() {

    // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-university-project')   // Project's content container
    const view = document.getElementById('view-university-project')   // Project's image container
    const image = document.getElementById('image-university-project') // Project's image
    const extra_description =  document.getElementById('extra-description-university-project')   // Project's extra description

    chevron_university_project = projectDropDown(card,view,image,extra_description,chevron_university_project)
})

function projectDropDown(card,view,image,extra_description,chevron){

    if(chevron){
        card.style.marginBottom = '0px'
        card.style.borderBottom = '0px'

        // view.style.display = 'flex';
        view.style.minHeight = 'min-content'
        view.style.marginBottom = '25px'
        view.style.borderBottom = "1px solid rgb(90, 90, 90)"

        image.style.maxHeight = '10000px'
        image.style.border = '1px solid black'

        extra_description.style.height = 'auto'
        extra_description.style.opacity = '1'
        extra_description.style.margin = '10px'

        return chevron = false
    }else{
        card.style.marginBottom = '25px'
        card.style.borderBottom = '1px solid rgb(90, 90, 90)'

        // view.style.display = 'none';
        view.style.minHeight = '0px'
        view.style.marginBottom = '25px'
        view.style.borderBottom = "0px"

        image.style.maxHeight = '0px'
        image.style.border = '0px'

        extra_description.style.height = '0px'
        extra_description.style.opacity = '0'
        extra_description.style.margin = '0px'

        return chevron = true
    }

}


document.getElementById('private-github').addEventListener('click', function(){

    // console.log('Private Github')
    const popup = document.getElementById('popup');

    popup.style.display = 'flex'
    popup.style.opacity = '1';
    // setTimeout(function() {
    //     // popup.style.display = 'none';
    //     popup.style.opacity = '0';
    //   }, 2000); // 5000 milliseconds = 3 seconds
    // popup.style.display = 'none';

    setTimeout(function() {
        // Change opacity to 0 to fade out
        popup.style.opacity = '0';
      
        // After 2 seconds (2000 milliseconds), hide the element
        setTimeout(function() {
          popup.style.display = 'none';
        }, 2000);
      
      }, 2000); // Initial timeout of 5 seconds (5000 milliseconds)

})