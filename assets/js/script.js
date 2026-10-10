$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('.navbar ul li a').click(function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('header').length) {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // emailjs contact form
    if (document.getElementById("contact-form")) {
        emailjs.init("zYqMY2e_q9Pj7HFJe");

        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm(
                "service_stewulh",
                "template_suxk5z2",
                this
            )
                .then(function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    document.getElementById("contact-form").reset();
                    alert("Form Submitted Successfully!");
                }, function (error) {
                    console.log("FAILED...", error);
                    alert("Form Submission Failed! Try Again.");
                });
        });
    }

});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio '26 | Ashish Rautela";
        $("#favicon").attr("href", "assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typed js effect
var typed = new Typed(".typing-text", {
    strings: ["full stack applications", "scalable event-driven backends", "cloud infrastructure on AWS", "high-performance algorithms"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Fallback Data Arrays
const defaultSkills = [
    { name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
    { name: "ExpressJS", icon: "https://img.icons8.com/fluency/48/000000/node-js.png" },
    { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "AWS", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/000000/postgreesql.png" },
    { name: "DynamoDB", icon: "./assets/images/skills/dynamodb.svg" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
    { name: "Redis", icon: "https://img.icons8.com/color/48/000000/redis.png" },
    { name: "TailwindCSS", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" },
    { name: "GitHub Actions", icon: "https://img.icons8.com/color/48/000000/github--v1.png" },
    { name: "Git VCS", icon: "https://img.icons8.com/color/48/000000/git.png" },
    { name: "SQL", icon: "https://img.icons8.com/color/48/000000/sql.png" }
];

const defaultProjects = [
    {
        name: "Evidex | Legal Contract Intelligence & Evidence Search",
        desc: "An AI-powered legal contract search engine enabling natural-language and legal-term queries across multi-hundred-page agreements with traceable evidence. Built with AWS Bedrock, Cohere Embed v3, PostgreSQL pgvector (HNSW) hybrid search, Reciprocal Rank Fusion (RRF), Cohere Rerank v3.5, and AWS Textract.",
        image: "evidex.png",
        category: "mern",
        links: {
            view: "https://evidex.ashishrautela.in",
            code: "https://github.com/Ashish-Rautela/Evidex"
        }
    },
    {
        name: "SynkDocs | Serverless Real-Time Collaboration Backend",
        desc: "A high-performance, event-driven serverless backend microservices architecture for real-time collaborative document editing. Built with Node.js, AWS SAM, Lambda, API Gateway (REST & WebSockets), DynamoDB, EventBridge, and SNS featuring Clean Architecture, real-time operational transform sync, and CI/CD pipelines.",
        image: "synkdocs.png",
        category: "mern",
        links: {
            view: "https://synkdocs.ashishrautela.in",
            code: "https://github.com/Ashish-Rautela/SynkDocs-backend"
        }
    }
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
          <div class="info">
            <img src="${skill.icon}" alt="skill" />
            <span>${skill.name}</span>
          </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) return;
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        let baseName = project.image.split('.')[0];
        let imgSrc = project.image.includes('.') ? `./assets/images/projects/${project.image}` : `./assets/images/projects/${project.image}.png`;
        projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="${imgSrc}" onerror="this.onerror=null; this.src='./assets/images/projects/${baseName}.png';" alt="${project.name}" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn btn-purple" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectHTML;

    if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 12,
            speed: 400,
            glare: false,
        });
    }
}

// Render fallback immediately so page is never empty
showSkills(defaultSkills);
showProjects(defaultProjects);

// Attempt fetch and update if available
async function fetchData(type = "skills") {
    try {
        let url = (type === "skills") ? "skills.json" : "./projects/projects.json";
        let response = await fetch(url);
        if (!response.ok) throw new Error("Fetch failed");
        let data = await response.json();
        return data;
    } catch (e) {
        console.warn("Using fallback data for " + type, e);
        return (type === "skills") ? defaultSkills : defaultProjects;
    }
}

fetchData("skills").then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// Disable developer keys
document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};
