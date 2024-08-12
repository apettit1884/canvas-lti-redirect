// Function to get the current user's role and email
async function getUserInfo() {
    const response = await fetch('/api/v1/users/self/profile');
    const user = await response.json();
    return user;
}

// Function to add the "Chat with Teacher" link
async function addChatLink() {
    const user = await getUserInfo();
    if (user.primary_email) {
        const teacherEmail = user.primary_email;
        const chatLink = `https://teams.microsoft.com/l/chat/0/0?users=${teacherEmail}`;
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="${chatLink}" target="_blank">Chat with Teacher</a>`;
        document.querySelector('#section-tabs').appendChild(navItem);
    }
}

// Run the function when the page loads
window.onload = addChatLink;