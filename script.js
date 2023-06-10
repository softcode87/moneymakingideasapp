const ideascreen = document.querySelector('.ideatext');

const moneyIdeas = [
    "Start an online business",
    "Invest in stocks",
    "Create and sell digital products",
    "Offer freelance services",
    "Rent out your property on Airbnb",
    "Start a blog and monetize it",
    "Become a social media influencer",
    "Provide consulting services",
    "Develop a mobile app",
    "Sell handmade crafts online"
  ];

function generateIdea(){

// remove the current idea
    ideascreen.textContent = '';

// Generate a random index from moneyIdeas array
const randomIndex = Math.floor(Math.random() * moneyIdeas.length);
  
// Get the random money idea using randomIndex
const randomIdea = moneyIdeas[randomIndex];

// Create a new paragraph
const ideaParagraph = document.createElement('p');

// Set the text content of the paragraph to the random money idea
ideaParagraph.textContent = randomIdea;



// Append the paragraph to  ideascreen element
ideascreen.appendChild(ideaParagraph);


}

// Add click event listener to the button
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generateIdea);


