   // Projects Data with enhanced structure
      const projectsData = {
        logic: [
          {
            title: {
              en: "Evaluation and Ordenation Numbers",
              es: "Evaluación y Ordenación de Números",
            },
            description: {
              en: "A simple program to evaluate and order numbers using efficient algorithms",
              es: "Un programa simple para evaluar y ordenar números usando algoritmos eficientes",
            },
            tech: ["Java", "Algorithms"],
            github: "https://github.com/Alep9923/logica-programacion-1",
            demo: "#",
            video: null,
          },
          {
            title: {
              en: "Data Structures Implementation",
              es: "Implementación de Estructuras de Datos",
            },
            description: {
              en: "Custom implementation of common data structures",
              es: "Implementación personalizada de estructuras de datos comunes",
            },
            tech: ["Java", "Data Structures"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
        web: [
          {
            title: {
              en: "E-commerce Platform for Emeralds Colombia",
              es: "Plataforma E-commerce para Esmeraldas Colombia",
            },
            description: {
              en: "Full-featured online store with modern design and payment integration",
              es: "Tienda en línea completa con diseño moderno e integración de pagos",
            },
            tech: ["React", "Tailwind CSS", "Node.js"],
            github: "#",
            demo: "#",
            video: null,
          },
          {
            title: {
              en: "Portfolio Website",
              es: "Sitio Web de Portafolio",
            },
            description: {
              en: "Responsive portfolio with animations and modern design",
              es: "Portafolio responsivo con animaciones y diseño moderno",
            },
            tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
            github: "#",
            demo: "#",
            video: null,
          },
          {
            title: {
              en: "Pawslove Foundation",
              es: "Fundación Pawslove",
            },
            description: {
              en: "Non-profit website for animal adoption with volunteer management",
              es: "Sitio web sin fines de lucro para adopción de animales con gestión de voluntarios",
            },
            tech: ["React", "MySQL", "Express"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
        ui: [
          {
            title: {
              en: "Banking App Redesign",
              es: "Rediseño de App Bancaria",
            },
            description: {
              en: "Complete UI/UX redesign for mobile banking application",
              es: "Rediseño completo de UI/UX para aplicación bancaria móvil",
            },
            tech: ["Figma", "UI/UX", "Prototyping"],
            github: "#",
            demo: "#",
            video: null,
          },
          {
            title: {
              en: "Dashboard UI Kit",
              es: "Kit de UI para Dashboard",
            },
            description: {
              en: "Comprehensive component library for analytics dashboards",
              es: "Librería integral de componentes para dashboards analíticos",
            },
            tech: ["Figma", "Design System"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
        db: [
          {
            title: {
              en: "Relational Database Design for Pawslove Foundation",
              es: "Diseño de Base de Datos Relacional para Fundación Pawslove",
            },
            description: {
              en: "Complete database design for animal adoption management system",
              es: "Diseño completo de base de datos para sistema de gestión de adopción animal",
            },
            tech: ["MySQL", "Database Design", "ERD"],
            github: "#",
            demo: "#",
            video: null,
          },
          {
            title: {
              en: "Data Migration Tool",
              es: "Herramienta de Migración de Datos",
            },
            description: {
              en: "ETL process for migrating legacy system data",
              es: "Proceso ETL para migrar datos de sistemas legacy",
            },
            tech: ["SQL", "Python", "ETL"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
        backend: [
          {
            title: {
              en: "REST API Development",
              es: "Desarrollo de API REST",
            },
            description: {
              en: "Scalable REST API with authentication and documentation",
              es: "API REST escalable con autenticación y documentación",
            },
            tech: ["Spring Boot", "MySQL", "JWT"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
        testing: [
          {
            title: {
              en: "Automated Testing Suite",
              es: "Suite de Pruebas Automatizadas",
            },
            description: {
              en: "Comprehensive testing framework for web applications",
              es: "Framework integral de pruebas para aplicaciones web",
            },
            tech: ["JUnit", "Selenium", "TestNG"],
            github: "#",
            demo: "#",
            video: null,
          },
        ],
      };

      let currentlyOpen = null;
      let currentLanguage = "en";

      // Language Toggle Function
      function toggleLanguage() {
        const langButton = document.getElementById("langToggle");
        const enElements = document.querySelectorAll(".lang-en");
        const esElements = document.querySelectorAll(".lang-es");

        if (currentLanguage === "en") {
          currentLanguage = "es";
          enElements.forEach((el) => el.classList.add("hidden"));
          esElements.forEach((el) => el.classList.remove("hidden"));
          langButton.querySelector(".lang-en").classList.add("hidden");
          langButton.querySelector(".lang-es").classList.remove("hidden");
        } else {
          currentLanguage = "en";
          esElements.forEach((el) => el.classList.add("hidden"));
          enElements.forEach((el) => el.classList.remove("hidden"));
          langButton.querySelector(".lang-es").classList.add("hidden");
          langButton.querySelector(".lang-en").classList.remove("hidden");
        }

        // Update select options
        updateSelectOptions();

        // Update any open project cards
        if (currentlyOpen) {
          const category = currentlyOpen.id.replace("subCards-", "");
          // Close and reopen to refresh content
          const parentCard = currentlyOpen.previousElementSibling;
          currentlyOpen.classList.add("hidden");
          currentlyOpen.innerHTML = "";
          currentlyOpen = null;
          toggleSubCards(parentCard, category);
        }
      }

      function updateSelectOptions() {
        const select = document.getElementById("projectType");
        const options = select.querySelectorAll("option");
        options.forEach((option) => {
          if (
            option.classList.contains("lang-en") ||
            option.classList.contains("lang-es")
          ) {
            if (currentLanguage === "en") {
              option.classList.toggle(
                "hidden",
                !option.classList.contains("lang-en")
              );
            } else {
              option.classList.toggle(
                "hidden",
                !option.classList.contains("lang-es")
              );
            }
          }
        });

        // Update placeholder text
        const placeholderEn = select.querySelector('option[value=""].lang-en');
        const placeholderEs = select.querySelector('option[value=""].lang-es');
        if (currentLanguage === "en") {
          placeholderEn.selected = true;
          placeholderEs.classList.add("hidden");
          placeholderEn.classList.remove("hidden");
        } else {
          placeholderEs.selected = true;
          placeholderEn.classList.add("hidden");
          placeholderEs.classList.remove("hidden");
        }
      }

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
              "bg-slate-700/50 backdrop-blur-md rounded-xl p-4 border border-warm/10 shadow-md hover:shadow-lg transition";

            const currentTitle =
              project.title[currentLanguage] || project.title.en;
            const currentDescription =
              project.description[currentLanguage] || project.description.en;

            card.innerHTML = `
                        ${
                          project.video
                            ? `
                            <div class="video-container mb-3">
                                <div class="video-placeholder">
                                    <span class="${
                                      currentLanguage === "en" ? "" : "hidden"
                                    }">Video preview coming soon</span>
                                    <span class="${
                                      currentLanguage === "es" ? "" : "hidden"
                                    }">Vista previa de video próximamente</span>
                                </div>
                            </div>
                        `
                            : ""
                        }
                        <h4 class="font-bold mb-2 text-sm md:text-base text-accent">${currentTitle}</h4>
                        <p class="text-xs text-text-light mb-3">${currentDescription}</p>
                        <div class="flex flex-wrap gap-1 mb-3">
                            ${project.tech
                              .map(
                                (tech) =>
                                  `<span class="text-xs py-1 px-2 bg-warm/20 text-warm rounded-full">${tech}</span>`
                              )
                              .join("")}
                        </div>
                        <div class="flex gap-2">
                            <a href="${project.demo}" target="_blank" 
                               class="flex-1 text-xs py-2 px-3 bg-warm text-primary rounded-lg font-medium hover:bg-orange-400 transition text-center">
                                <span class="${
                                  currentLanguage === "en" ? "" : "hidden"
                                }">Live Demo</span>
                                <span class="${
                                  currentLanguage === "es" ? "" : "hidden"
                                }">Demo en Vivo</span>
                            </a>
                            <a href="${project.github}" target="_blank" 
                               class="flex-1 text-xs py-2 px-3 bg-slate-600 text-accent rounded-lg font-medium hover:bg-slate-500 transition text-center">
                                <span class="${
                                  currentLanguage === "en" ? "" : "hidden"
                                }">GitHub</span>
                                <span class="${
                                  currentLanguage === "es" ? "" : "hidden"
                                }">GitHub</span>
                            </a>
                        </div>
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

      // Smooth scrolling for navigation links
      function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
              // Calculate offset based on navbar height
              const navbarHeight =
                document.getElementById("navbar").offsetHeight;
              const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          });
        });
      }

      // Mobile menu toggle
      function toggleMobileMenu() {
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu.classList.toggle("open");
      }

      // Form submission with EmailJS
      function setupForm() {
        const form = document.getElementById("contactForm");
        if (form) {
          form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              country: document.getElementById("country").value,
              projectType: document.getElementById("projectType").value,
              message: document.getElementById("message").value,
            };

            // Send email using EmailJS
            emailjs
              .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData) // Reemplaza con tus IDs de EmailJS
              .then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text);
                  // Show success message
                  document
                    .getElementById("formSuccess")
                    .classList.remove("hidden");
                  document.getElementById("formError").classList.add("hidden");

                  // Reset form
                  form.reset();
                  updateSelectOptions(); // Reset select options based on language

                  // Hide success message after 5 seconds
                  setTimeout(() => {
                    document
                      .getElementById("formSuccess")
                      .classList.add("hidden");
                  }, 5000);
                },
                function (error) {
                  console.log("FAILED...", error);
                  // Show error message
                  document
                    .getElementById("formError")
                    .classList.remove("hidden");
                  document
                    .getElementById("formSuccess")
                    .classList.add("hidden");
                }
              );
          });
        }
      }

      // Intersection Observer for fade-in animations
      function setupAnimations() {
        const fadeElements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.1 }
        );

        fadeElements.forEach((element) => {
          observer.observe(element);
        });
      }

      // Sticky navbar on scroll
      function setupStickyNav() {
        const navbar = document.getElementById("navbar");
        const heroSection = document.getElementById("home");

        window.addEventListener("scroll", () => {
          if (window.scrollY > heroSection.offsetHeight * 0.5) {
            navbar.classList.add("bg-primary/95");
          } else {
            navbar.classList.remove("bg-primary/95");
          }
        });
      }

      // Initialize everything when DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        // Language toggle event listener
        document
          .getElementById("langToggle")
          .addEventListener("click", toggleLanguage);

        // Initialize smooth scrolling
        initSmoothScrolling();

        // Setup form submission
        setupForm();

        // Setup animations
        setupAnimations();

        // Setup sticky navbar
        setupStickyNav();

        // Initialize select options based on current language
        updateSelectOptions();
      });