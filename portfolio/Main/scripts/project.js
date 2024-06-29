let chevron_ai_chatbot = true
document.getElementById('chevron-ai-chatbot').addEventListener('click', function() {

    // console.log('chevron clicked')
    const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-ai-chatbot')     // Project's content container
    const view = document.getElementById('view-ai-chatbot')     // Project's image container
    const image = document.getElementById('image-ai-chatbot')   // Project's image

    projectDropDown(viewport,card,view,image)
})

let chevron_stock_prediction = true
document.getElementById('chevron-stock-prediction').addEventListener('click', function() {

    // console.log('chevron clicked')
    const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    const card = document.getElementById('card-stock-prediction')   // Project's content container
    const view = document.getElementById('view-stock-prediction')   // Project's image container
    const image = document.getElementById('image-stock-prediction') // Project's image

    projectDropDown(viewport,card,view,image)
})

function projectDropDown(viewport,card,view,image){
    // // console.log('chevron clicked')
    // const viewport = window.innerWidth || document.documentElement.clientWidth; // Screen size
    // const card = document.getElementById('card-stock-prediction')   // Project's content container
    // const view = document.getElementById('view-stock-prediction')   // Project's image container
    // const image = document.getElementById('image-stock-prediction') // Project's image

    if(chevron_stock_prediction){
        card.style.marginBottom = '0px';
        card.style.borderBottom = '0px';

        // Check screen size
        if (viewport > 768) {
            view.style.minHeight = '800px' // Desktop
        }else{
            view.style.minHeight = '400px' // Mobile
        }

        // view.style.display = 'flex';
        view.style.marginBottom = '25px';
        view.style.borderBottom = "1px solid rgb(90, 90, 90)";

        image.style.height = 'auto';
        image.style.border = '1px solid black';

        chevron_stock_prediction = false
    }else{
        card.style.marginBottom = '25px';
        card.style.borderBottom = '1px solid rgb(90, 90, 90)';

        // view.style.display = 'none';
        view.style.minHeight = '0px'
        view.style.marginBottom = '25px';
        view.style.borderBottom = "0px";

        image.style.height = '0px';
        image.style.border = '0px';

        chevron_stock_prediction = true
    }
}