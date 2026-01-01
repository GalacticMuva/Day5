const USERNAME = 'GalacticMuva'; 
const API_URL = `https://api.github.com/users/${USERNAME}`;

async function fetchGitHubData() {
    try {
        // 1. Fetch User Profile
        const userRes = await fetch(API_URL);
        const user = await userRes.json();

        // Display user info
        document.getElementById('login').innerHTML = user.login;
        document.getElementById('repo-count').innerHTML = user.public_repos;
        document.getElementById('avatar').src = user.avatar_url;

        // 2. Fetch Repositories
        const repoRes = await fetch(`${API_URL}/repos`);
        const repos = await repoRes.json();

        // Render repo names using innerHTML
        const repoList = document.getElementById('repo-list');
        repoList.innerHTML = repos.map(repo => 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${repo.name}
        <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-outline-primary">View</a>
    </li>`
).join('');

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

fetchGitHubData();