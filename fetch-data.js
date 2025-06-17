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
        console.log(users);
        console.log(response);
    } catch (error) {
        console.log('Failed to load user data.');
    }
    //clear content in the data container
    dataContainer.innerHTML = '';

}

fetchUserData();