const projectsData = {
  logic: [
    {
      title: "Evaluation and Ordenation Numbers",
      description: "A simple program to evaluate and order numbers",
      link: "https://github.com/Alep9923/logica-programacion-1",
    },

  ],
  web: [
    {
      title: "E-commerce Platform for Emeralds Colombia",
      description: "Full-featured online store with Tailwind CSS",
      link: "#", // Por publicar Emeralds Colombia
    },
    {
      title: "Portfolio Website",
      description: "Responsive design with animations",
      link: "#", // Por publicar Portafolio
    },
    {
      title: "Pawslove Foundation",
      description: "Non-profit website for animal adoption",
      link: "#", // Por publicar Pawslove Foundation
    },



  ],
  ui: [
    {
      title: "Banking App Redesign",
      description: "Figma prototype for mobile banking",
      link: "#", // 
    },
    {
      title: "Dashboard UI Kit",
      description: "Component library for analytics",
      link: "#", // 
    },
  ],
  db: [
    {
      title: "Relational Database Design for Pawslove Foundation",
      description: "MySQL database design for animal adoption",
      link: "#", // 
    },
    {
      title: "Data Migration Tool",
      description: "ETL process for legacy systems",
      link: "#", // 
    },
  ],
  backend: [
    {
      title: "En definición",
      description: "Por definir",
      link: "#", 
    },

  ],
  testing: [
    {
      title: "Por definir",
      description: "por definir",
      link: "#",
    },
  ],
};

let currentlyOpen = null;

function toggleSubCards(element, category) {
  const parent = element.parentElement;
  const subCardsContainer = parent.querySelector(`#subCards-${category}`);

  // Close any currently open subcards
  if (currentlyOpen && currentlyOpen !== subCardsContainer) {
    currentlyOpen.classList.add("hidden");
    currentlyOpen.innerHTML = "";
  }

  // Toggle current subcards
  if (subCardsContainer.classList.contains("hidden")) {
    // Generate subcards
    subCardsContainer.innerHTML = "";
    projectsData[category].forEach((project) => {
      const card = document.createElement("div");
      card.className =
        "bg-primary/60 backdrop-blur-md rounded-xl p-4 border border-accent/10 shadow-md hover:shadow-lg transition";
      card.innerHTML = `
                    <h4 class="font-bold mb-1 text-sm md:text-base">${project.title}</h4>
                    <p class="text-xs opacity-80 mb-2">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="text-xs py-1 px-2 bg-secondary/20 text-secondary rounded-full inline-flex items-center hover:bg-secondary/30 transition">
                        View project
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                `;
      subCardsContainer.appendChild(card);
    });

    // Show with animation
    subCardsContainer.classList.remove("hidden");
    subCardsContainer.style.opacity = "0";
    subCardsContainer.style.transform = "translateY(-10px)";

    setTimeout(() => {
      subCardsContainer.style.opacity = "1";
      subCardsContainer.style.transform = "translateY(0)";
    }, 10);

    currentlyOpen = subCardsContainer;

    // Scroll to ensure visibility
    parent.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    // Hide with animation
    subCardsContainer.style.opacity = "0";
    subCardsContainer.style.transform = "translateY(-10px)";

    setTimeout(() => {
      subCardsContainer.classList.add("hidden");
      subCardsContainer.innerHTML = "";
    }, 300);

    currentlyOpen = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});


