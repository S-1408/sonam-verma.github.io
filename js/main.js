const socialLinks = [
    { name: "Linkedin", url: "https://linkedin.com/in/verma-sonam", icon: "linkedin", brandIcon: true },
    { name: "Instagram", url: "https://www.instagram.com/angular_ui_developer/", icon: "instagram", brandIcon: true },
    { name: "Github", url: "https://github.com/S-1408", icon: "github", brandIcon: true },
];

const projectFilters = [
    { label: "All", value: "all" },
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Next.js", value: "nextjs" },
    { label: "JavaScript", value: "javaScript" }
];

const projects = [
    { title: "GitHub User Finder", category: "angular", image: "images/angular-project/github-user-finder.png", description: "GitHub user details and repositories", technologies: "Angular | Firebase | TypeScript | Bootstrap", code: "https://github.com/S-1408/github-user-finder" },
    { title: "TODO App", category: "angular", image: "images/angular-project/todo-app.png", description: "Your personal task list", technologies: "Angular | TypeScript | Bootstrap | HTML", code: "https://github.com/S-1408/todo-app" },
    { title: "Random Card App", category: "angular", image: "images/angular-project/random-card.png", description: "Display a random user card with generated details", technologies: "Angular | TypeScript | Bootstrap | HTML", code: "https://github.com/S-1408/random-card" },
    { title: "Currency App", category: "angular", image: "images/angular-project/currency-app.png", description: "Convert values between Indian Rupees and US Dollars", technologies: "Angular | TypeScript | Bootstrap | HTML", code: "https://github.com/S-1408/Exchange-Currency-App" },
    { title: "Counter App", category: "angular", image: "images/angular-project/counter-app.png", description: "A simple Angular counter application", technologies: "Angular | TypeScript | Bootstrap | HTML", code: "https://github.com/S-1408/counter-app" },
    { title: "Task Manager App", category: "angular", image: "images/angular-project/Screenshot (11).png", description: "Manage and organize application tasks", technologies: "Angular | TypeScript | Bootstrap | HTML", code: "https://github.com/S-1408/TaskManager" },
    { title: "Movie Browser", category: "nextjs", image: "images/nextjs/movie.png", description: "Browse popular movies, ratings, and the latest releases using the TMDB API", technologies: "Next.js | TypeScript | TMDB API", demo: "https://movie-browser-movie-browser.vercel.app/", code: "https://github.com/S-1408/Movie-browser" },
    { title: "JobTrackr", category: "react", image: "images/react/jobtrackr.png", description: "Track job applications, statuses, and interview progress", technologies: "React | JavaScript | REST API", demo: "https://jobtracker-react.vercel.app/", code: "https://github.com/S-1408/jobtrackr/tree/main/frontend" },
    { title: "Travel Advisor", category: "react", image: "images/react/traval_adviser_2.png", description: "Discover places using maps and travel APIs", technologies: "React | Material UI | Axios | Google Maps API", code: "https://github.com/S-1408/travel-advisor/tree/traval_advisor" },
    { title: "User Data App", category: "react", image: "images/react/json-server.png", description: "CRUD user management with Redux and JSON Server", technologies: "React | Redux | Axios | React Router | JSON Server", code: "https://github.com/S-1408/restapi-with-jsonserver-reactredux" },
    { title: "Monster App", category: "react", image: "images/react/monster.png", description: "Search and view monsters using React state and API data", technologies: "React | Axios | Hooks", code: "https://github.com/S-1408/monster-app" },
    { title: "Registration Form", category: "react", image: "images/react/form.png", description: "Create, update, and manage form records with CRUD operations", technologies: "React | Axios | React Router | JSON Server", code: "https://github.com/S-1408/monster-app" },
    { title: "Pig Game", category: "javaScript", image: "images/javascript/pig-game.png", description: "A two-player dice game built with JavaScript", technologies: "JavaScript | HTML | CSS", code: "https://github.com/S-1408/PIG-Game" },
    { title: "Stopwatch", category: "javaScript", image: "images/javascript/stopwatch.png", description: "A stopwatch with start, pause, and reset controls", technologies: "JavaScript | HTML | CSS", code: "https://github.com/S-1408/StopWatch" },
    { title: "Task Tracker", category: "javaScript", image: "images/javascript/tasktracker.png", description: "Add and track everyday tasks in the browser", technologies: "JavaScript | HTML | CSS", code: "https://github.com/S-1408/TaskTracker" }
];

const socialLinksContainer = document.getElementById("social-links");
const projectFiltersContainer = document.getElementById("project-filters");
const projectsGrid = document.getElementById("projects-grid");

if (socialLinksContainer) {
    socialLinksContainer.innerHTML = socialLinks.map(({ name, url, icon, brandIcon, download }) => `
        <div class="button${download ? " resume-button" : ""}">
            <a class="text-success social-link" href="${url}" ${download ? 'download' : 'target="_blank" rel="noreferrer noopener"'} aria-label="${download ? "Download Sonam Verma's resume" : `Visit Sonam Verma on ${name}`}">
                <span class="icon"><i class="${brandIcon ? "fab" : "fas"} fa-${icon}" aria-hidden="true"></i></span>
                <span class="social-label">${name}</span>
                ${download ? '<span class="download-icon"><i class="fas fa-download" aria-hidden="true"></i></span>' : ""}
            </a>
        </div>`).join("");
}

if (projectFiltersContainer) {
    projectFiltersContainer.innerHTML = projectFilters.map(({ label, value }, index) => `
        <li class="button${index === 0 ? " active" : ""}" data-filter="${value}">${label}</li>`).join("");
}

const projectCard = (project) => `
    <div class="col-md-4 itemImg ${project.category}">
        <div class="card mb-4">
            <img class="card-img-top" src="${project.image}" alt="${project.title} project preview">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <small class="project-technologies">${project.technologies}</small>
                <div class="project-actions mt-3">
                    ${project.demo ? `<a href="${project.demo}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noreferrer noopener">Live Demo</a>` : ""}
                    <a href="${project.code}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noreferrer noopener" title="View project code on GitHub">
                        <span class="fab fa-github"></span> View Code
                    </a>
                </div>
            </div>
        </div>
    </div>`;

if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(projectCard).join("");
}

const filterButtons = document.querySelectorAll(".control .button[data-filter]");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => filterButton.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".itemImg").forEach((projectCardElement) => {
            const isVisible = selectedFilter === "all" || projectCardElement.classList.contains(selectedFilter);
            projectCardElement.hidden = !isVisible;
        });
    });
});