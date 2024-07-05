
dropDown('chevron-ai-chatbot','card-ai-chatbot','view-ai-chatbot','image-ai-chatbot','extra-description-ai-chatbot');

dropDown('chevron-stock-prediction','card-stock-prediction','view-stock-prediction','image-stock-prediction','extra-description-stock-prediction');

dropDown('chevron-coin-detection','card-coin-detection','view-coin-detection','image-coin-detection','extra-description-coin-detection');

dropDown('chevron-singapore-pathfinder','card-singapore-pathfinder','view-singapore-pathfinder','image-singapore-pathfinder','extra-description-singapore-pathfinder');

dropDown('chevron-university-project','card-university-project','view-university-project','image-university-project','extra-description-university-project');

dropDown('chevron-mini-projects','card-mini-projects','view-mini-projects','image-mini-projects','extra-description-mini-projects');

popup_not_available('private-ai-chatbot','popup-ai-chatbot');

popup_not_available('private-university-project','popup-university-project');

popup_not_available('private-mini-projects','popup-mini-projects');

// Event listerner for when the chevron button is clicked
function dropDown(chevron_name,card_name,view_name,image_name,extra_description_name){
    let click = true
    document.getElementById(chevron_name).addEventListener('click', function() {
        // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
        const card = document.getElementById(card_name)   // Project's content container
        const view = document.getElementById(view_name)   // Project's image container
        const image = document.getElementById(image_name) // Project's image
        const extra_description =  document.getElementById(extra_description_name)   // Project's extra description

        click = projectDropDown(click,card,view,image,extra_description)
    })
}

// Function that handles the drop down views of the project's descriptions and images
function projectDropDown(click,card,view,image,extra_description){
    if(click){
        card.style.marginBottom = '0px'
        card.style.borderBottom = '0px'

        view.style.minHeight = 'min-content'
        view.style.marginBottom = '25px'
        view.style.borderBottom = "1px solid rgb(90, 90, 90)"

        image.style.maxHeight = '10000px'
        image.style.border = '1px solid black'

        extra_description.style.height = 'auto'
        extra_description.style.opacity = '1'
        extra_description.style.margin = '10px'

        return click = false
    }else{
        card.style.marginBottom = '25px'
        card.style.borderBottom = '1px solid rgb(90, 90, 90)'

        view.style.minHeight = '0px'
        view.style.marginBottom = '25px'
        view.style.borderBottom = "0px"

        image.style.maxHeight = '0px'
        image.style.border = '0px'

        extra_description.style.height = '0px'
        extra_description.style.opacity = '0'
        extra_description.style.margin = '0px'

        return click = true
    }
}

// Handles popup notifications when github or website link is not available
function popup_not_available(private_link_name, popup_id){
    document.getElementById(private_link_name).addEventListener('click', function(){
        const popup = document.getElementById(popup_id);

        popup.style.display = 'flex'
        popup.style.opacity = '1';
    
        setTimeout(function() {
            // Change opacity to 0 to fade out
            popup.style.opacity = '0';
          
            // After 2 seconds (2000 milliseconds), hide the element
            setTimeout(function() {
                popup.style.display = 'none';
            }, 1000);
          
          }, 2000); // Initial timeout of 5 seconds (5000 milliseconds)
    })
}