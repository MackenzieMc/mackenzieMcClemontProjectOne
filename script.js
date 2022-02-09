    //Blog Page
    //Feature: Add and append name and comments made in form to the comment container.
if (document.body.className === 'blogBody') {
    const formElement = document.querySelector('#blogForm');

    formElement.addEventListener('submit', function(e) {
        //prevent page refresh from form
        e.preventDefault();

        //log input and text area text content
        const inputElement = document.querySelector('#name');
        const inputName = inputElement.value;

        const textAreaElement = document.querySelector('#message');
        const inputTextArea = textAreaElement.value; 
        
        const blogContainer = document.querySelector('.commentFlex');

        const commentContainer = document.createElement('div');
        commentContainer.setAttribute('class', 'commentContainer');

        const textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'textContainer');

        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'imgContainer');

        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', './sanctuary-helpers-final-images/comment-image2.jpg'); 


        blogContainer.appendChild(imageContainer);
        blogContainer.appendChild(textContainer);

        //Create a date variable
        const currentDate = new Date();

        //Create a month of the year array to log the current month. 
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let nameOfMonth = month[currentDate.getMonth()];

        //Create an array and variable that logs the day of the week. 
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let nameOfDay = days[currentDate.getDay()];

        

        
        
        //Create an H4 and nest the Date variable and Name input within
        const headerElement = document.createElement('h4');
        headerElement.textContent = `${nameOfDay} ${nameOfMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()} by ${inputName}`; 

        const textElement = document.createElement('p');
        textElement.textContent = inputTextArea;

        //Append the images, h4, and p tags to their respective containers
        imageContainer.appendChild(imgItem);
        textContainer.appendChild(headerElement);
        textContainer.appendChild(textElement);

        commentContainer.appendChild(imageContainer);
        commentContainer.appendChild(textContainer);

        blogContainer.appendChild(commentContainer);

        //clear input after submission
        inputElement.value = "";
        textAreaElement.value = "";
    })
}
//Contact Page
//Log a thank you message inside the form div after user submits their contact info. 
if (document.body.className === 'contactBody') {

    const contactForm = document.querySelector('#contactForm');

    contactForm.addEventListener('submit', function (e) {
        //Prevent form from refreshing page
        e.preventDefault();

        //Log the name of the user and the email they submitted
        const nameElement = document.querySelector('#name');
        const nameInput = nameElement.value

        console.log(nameInput);

        const emailElement = document.querySelector('#email');
        const emailInput = emailElement.value;

        //Select the parent div of the form
        const contactDiv = document.querySelector('.contactForm');

        //Create a paragraph element to nest within the div after the form has been submitted
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = `Thank you for reaching out ${nameInput}, we will reach out to you shortly at ${emailInput}!`;

        //Clear form html from the container

        contactForm.innerHTML = "";

        //Append the paragraph element to the div
        contactDiv.appendChild(paragraphElement); 

        setTimeout(function() { 
            location.reload() 
        }, 2000);

    })
};