// Initialize the Async Function:
async function fetchUserData() {
    //Define the API URL:
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    //Select the HTML element where the API data will be displayed:
    const dataContainer = document.getElementById('api-data');

    // Fetch the data
    try {
        const response = await fetch(apiUrl);
        //convert response to json and store it in users
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul')

        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li')

            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;

            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.log('Unable to load data right now.');
    }
    


}

fetchUserData();