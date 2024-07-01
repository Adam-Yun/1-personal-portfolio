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