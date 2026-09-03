$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
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
    { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "ExpressJS", icon: "https://img.icons8.com/fluency/48/000000/node-js.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
    { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
    { name: "MaterialUI", icon: "https://img.icons8.com/color/48/000000/material-ui.png" },
    { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
    { name: "jQuery", icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png" },
    { name: "Git VCS", icon: "https://img.icons8.com/color/48/000000/git.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/000000/github.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/48/000000/wordpress.png" }
];

const defaultProjects = [
    {
        name: "EventFlow | Scalable Event Streaming & Processing System",
        desc: "An event-driven backend handling 10K+ events/min with atomic offset management (Redis INCR), fault-tolerant consumer pipeline with retry logic and DLQ, and real-time observability metrics.",
        image: "eventflow.png",
        category: "mern",
        links: {
            view: "https://github.com/Ashish-Rautela/EventFlow",
            code: "https://github.com/Ashish-Rautela/EventFlow"
        }
    },
    {
        name: "Finance Data Processing & Analytics Backend",
        desc: "High-performance finance backend with JWT authentication, RBAC, REST APIs for record filtering, and MongoDB aggregation pipelines for dashboard analytics deployed on AWS EC2.",
        image: "finance.png",
        category: "mern",
        links: {
            view: "https://github.com/Ashish-Rautela/finance-dashboard-backend",
            code: "https://github.com/Ashish-Rautela/finance-dashboard-backend"
        }
    },
    {
        name: "Decentralized Online Voting System",
        desc: "A secure online voting platform built with blockchain technology and smart contracts, ensuring data immutability, transparency, and role-based access control.",
        image: "voting.png",
        category: "mern",
        links: {
            view: "https://github.com/Ashish-Rautela/Decentralized_Online_Voting_System",
            code: "https://github.com/Ashish-Rautela/Decentralized_Online_Voting_System"
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
          <img draggable="false" src="${imgSrc}" onerror="this.onerror=null; this.src='./assets/images/projects/${baseName}.png';" alt="project" />
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

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
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

// Education box click
$(document).ready(function () {
    $('.education .box').on('click', function () {
        window.open('./college/index.html', '_blank');
    });
});