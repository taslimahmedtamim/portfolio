// ========== Preloader ==========
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('loaded'), 400);
    }
});

// ========== Custom Cursor ==========
function setupCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    // Hide on touch devices
    if ('ontouchstart' in window) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        return;
    }

    document.body.style.cursor = 'none';

    // Dot follows mouse instantly, ring trails behind smoothly
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    const ease = 0.15;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * ease;
        ringY += (mouseY - ringY) * ease;
        ring.style.transform = `translate(${ringX - ring.offsetWidth / 2}px, ${ringY - ring.offsetHeight / 2}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Click effect
    document.addEventListener('mousedown', () => {
        dot.classList.add('click');
        ring.classList.add('click');
    });
    document.addEventListener('mouseup', () => {
        dot.classList.remove('click');
        ring.classList.remove('click');
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .social-link, .filter-btn, .project-btn, .social-card, .platform-card, input, textarea');
    interactiveElements.forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', () => {
            ring.classList.add('hover');
            dot.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            ring.classList.remove('hover');
            dot.classList.remove('hover');
        });
    });
}

setupCustomCursor();

// ========== Scroll to Top Button ==========
function setupScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                btn.classList.toggle('visible', window.scrollY > 400);
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

setupScrollTop();

// ========== Active Nav on Scroll ==========
function setupActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.site-nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}

setupActiveNav();

// ========== Particle Canvas Animation ==========
class ParticleCanvas {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        this.particles = [];
        this.particleCount = 30;
        this.mouse = { x: null, y: null, radius: 120 };
        this.animationId = null;
        this.lastTime = 0;
        this.fps = 24;
        this.fpsInterval = 1000 / this.fps;
        this.isVisible = true;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize(), { passive: true });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        }, { passive: true });

        // Pause when tab is not visible
        document.addEventListener('visibilitychange', () => {
            this.isVisible = !document.hidden;
            if (this.isVisible) this.animate();
        });
    }
    
    init() {
        this.resize();
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate(currentTime = 0) {
        if (!this.isVisible) return;
        this.animationId = requestAnimationFrame((time) => this.animate(time));
        
        const elapsed = currentTime - this.lastTime;
        if (elapsed < this.fpsInterval) return;
        this.lastTime = currentTime - (elapsed % this.fpsInterval);
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.mouse);
            this.particles[i].draw(this.ctx);
        }
        
        this.connectParticles();
    }
    
    connectParticles() {
        const len = this.particles.length;
        for (let a = 0; a < len; a++) {
            for (let b = a + 1; b < len; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distSq = dx * dx + dy * dy;
                
                if (distSq < 10000) {
                    const opacity = (1 - Math.sqrt(distSq) / 100) * 0.3;
                    this.ctx.strokeStyle = `rgba(79, 125, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${79 + Math.random() * 50}, ${125 + Math.random() * 80}, 255, ${Math.random() * 0.5 + 0.3})`;
    }
    
    update(mouse) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > this.canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > this.canvas.height || this.y < 0) this.speedY *= -1;
        
        // Mouse interaction
        if (mouse.x && mouse.y) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                this.x -= dx * force * 0.02;
                this.y -= dy * force * 0.02;
            }
        }
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particle canvas
new ParticleCanvas();

// ========== Typed Text Animation ==========
const heroTypedPhrases = [
    "secure systems",
    "scalable web apps",
    "competitive code",
    "cybersecurity labs",
    "elegant solutions"
];

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedSpan = document.querySelector(".typed-text");

function typeLoop() {
    if (!typedSpan) return;

    const currentPhrase = heroTypedPhrases[typedIndex % heroTypedPhrases.length];
    const displayed = isDeleting
        ? currentPhrase.slice(0, Math.max(0, charIndex - 1))
        : currentPhrase.slice(0, charIndex + 1);

    typedSpan.textContent = displayed;
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    if (!isDeleting && charIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeLoop, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typedIndex += 1;
    }

    const typingSpeed = isDeleting ? 35 : 100;
    setTimeout(typeLoop, typingSpeed);
}

typeLoop();

// ========== Stat Counter Animation ==========
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                animateNumber(target, count);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

animateStats();

// ========== Skill Progress Bars Animation ==========
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

animateSkillBars();

// ========== Project Filter ==========
function setupProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter || category === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

setupProjectFilter();

// ========== Scroll Reveal Animation ==========
function setupRevealOnScroll() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.1
        }
    );

    // Only apply reveal animation to panels and cards below hero
    document.querySelectorAll(".panel, .panel .card").forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
}

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupRevealOnScroll();
});

// ========== Mobile Navigation ==========
function setupMobileNav() {
    const toggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".site-nav ul");

    if (!toggle || !navList) return;

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
        navList.classList.toggle("open");
        toggle.classList.toggle("active");
        
        const isOpen = toggle.classList.contains("active");
        toggle.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("open");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = '';
        });
    });
}

setupMobileNav();

// ========== Current Year ==========
function setupYear() {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

setupYear();

// ========== Blog Posts ==========
const blogPosts = [
    {
        title: "Booting Up the Signal Log",
        description: "Why I'm launching this blog, what to expect, and how curiosity fuels every experiment.",
        date: "2025-01-20",
        tags: ["announcement", "learning"],
        link: "#"
    },
    {
        title: "Competitive Programming Mindset",
        description: "A look into the routines, habits, and tactics that help me solve complex problems at speed.",
        date: "2025-02-05",
        tags: ["competitive", "strategy"],
        link: "#"
    },
    {
        title: "Securing the Stack",
        description: "Practical steps for hardening full stack applications without slowing down product velocity.",
        date: "2025-03-15",
        tags: ["security", "full stack"],
        link: "#"
    }
];

function renderBlogCards() {
    const blogGrid = document.getElementById("blog-grid");
    if (!blogGrid) return;

    const formatter = new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    blogGrid.innerHTML = blogPosts
        .map(post => {
            const formattedDate = formatter.format(new Date(post.date));
            const tagsHtml = post.tags
                .map(tag => `<span class="tag">${tag}</span>`)
                .join("");

            return `
                <article class="card blog-card reveal">
                    <time datetime="${post.date}">${formattedDate}</time>
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <div class="tags">${tagsHtml}</div>
                    <a class="project-link" href="${post.link}">Read Post →</a>
                </article>
            `;
        })
        .join("");
}

renderBlogCards();

// Re-observe blog cards after they're rendered
setTimeout(() => {
    const blogCards = document.querySelectorAll('.blog-card');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    blogCards.forEach(card => observer.observe(card));
}, 100);

// ========== Subscribe Button ==========
const subscribeButton = document.getElementById("subscribe-button");
if (subscribeButton) {
    subscribeButton.addEventListener("click", event => {
        event.preventDefault();
        subscribeButton.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        subscribeButton.classList.add("primary");
        subscribeButton.classList.remove("ghost");
        
        setTimeout(() => {
            subscribeButton.innerHTML = '<i class="fas fa-bell"></i> Subscribe for updates';
            subscribeButton.classList.remove("primary");
            subscribeButton.classList.add("ghost");
        }, 3000);
    });
}

// ========== Smooth Scroll with Offset ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Header Background on Scroll ==========
const header = document.querySelector('.site-header');
let headerTicking = false;
window.addEventListener('scroll', () => {
    if (!headerTicking) {
        requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            headerTicking = false;
        });
        headerTicking = true;
    }
}, { passive: true });

// Add CSS animation for project filter
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
