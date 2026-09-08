import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* We embed the original script logic safely */}
      <Script src="/script.js" strategy="lazyOnload" />
      
      
    {/*  Preloader  */}
    <div id="preloader">
        <div className="preloader-inner">
            <div className="preloader-ring"></div>
            <span className="preloader-text">TAT</span>
        </div>
    </div>


    {/*  Scroll to Top  */}
    <button className="scroll-top" id="scroll-top" aria-label="Scroll to top">
        <i className="fas fa-chevron-up"></i>
    </button>

    {/*  Animated Background  */}
    <canvas id="particle-canvas"></canvas>
    <div className="bg-glow bg-glow-1"></div>
    <div className="bg-glow bg-glow-2"></div>
    <div className="bg-glow bg-glow-3"></div>

    <header className="site-header">
        <div className="nav-overlay-bg" id="nav-overlay"></div>
        <div className="header-inner">
            <a href="#hero" className="logo">TAT</a>
            <nav className="site-nav" aria-label="Primary Navigation">
                <button className="menu-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Journey</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="hero" className="hero" aria-labelledby="hero-title">
            {/*  Floating Decorations  */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            
            <div className="hero-content">
                <div className="hero-visual-mobile">
                    <div className="hex-profile-container">
                        {/* Outer Sci-Fi Target HUD */}
                        <div className="hologram-ring ring-outer-hud">
                            <svg className="hud-svg" viewBox="0 0 500 500">
                                <circle cx="250" cy="250" r="235" className="hud-circle-dashed" />
                                <circle cx="250" cy="250" r="215" className="hud-circle-arc" />
                                <text x="250" y="22" className="hud-deg">000°</text>
                                <text x="482" y="254" className="hud-deg">090°</text>
                                <text x="250" y="492" className="hud-deg">180°</text>
                                <text x="18" y="254" className="hud-deg">270°</text>
                            </svg>
                        </div>
                        
                        <div className="hologram-ring ring-1"></div>
                        <div className="hologram-ring ring-2"></div>
                        <div className="hologram-glow"></div>

                        {/* Main Hexagon Card Frame */}
                        <div className="hex-card-frame">
                            <div className="hex-bg-spotlight"></div>
                            <div className="hex-grid-pattern"></div>

                            {/* SVG Neon Laser Border */}
                            <svg className="hex-laser-svg" viewBox="0 0 330 380">
                                <polygon points="165,4 326,95 326,285 165,376 4,285 4,95" className="laser-path-bg" />
                                <polygon points="165,4 326,95 326,285 165,376 4,285 4,95" className="laser-path-beam" />
                                <circle cx="165" cy="4" r="4" className="hex-node" />
                                <circle cx="326" cy="95" r="4" className="hex-node" />
                                <circle cx="326" cy="285" r="4" className="hex-node" />
                                <circle cx="165" cy="376" r="4" className="hex-node" />
                                <circle cx="4" cy="285" r="4" className="hex-node" />
                                <circle cx="4" cy="95" r="4" className="hex-node" />
                            </svg>
                            
                            <div className="hex-img-wrapper">
                                <img 
                                    src="assets/tamim bg remove.png" 
                                    alt="Taslim Ahmed Tamim" 
                                    className="hex-avatar-img" 
                                    loading="lazy" 
                                />
                            </div>

                            <div className="hex-scan-line"></div>
                        </div>
                    </div>
                </div>
                <h1 id="hero-title">
                    <span className="title-line">Taslim Ahmed</span>
                    <span className="title-line highlight">Tamim</span>
                </h1>
                <p className="hero-typed" aria-live="polite">
                    <span className="typed-prefix"></span>
                    <span className="typed-text"></span>
                    <span className="typed-cursor">&#9608;</span>
                </p>
                <p className="hero-description">
                    CSE student at Green University of Bangladesh. Specialized in defensive security, penetration testing, and threat analysis. Competitive programmer & full-stack web developer.
                </p>
                <div className="hero-actions">
                    <a className="cta-button primary" href="#projects">
                        <i className="fas fa-rocket"></i> Explore Work
                    </a>
                    <a className="cta-button ghost" href="docs/Taslim_Ahmed_Tamim__CV.pdf" download>
                        <i className="fas fa-download"></i> Download CV
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <div className="stat-value">
                            <span className="stat-number" data-count="200">0</span><span className="stat-plus">+</span>
                        </div>
                        <span className="stat-label">Problems Solved</span>
                    </div>
                    <div className="stat">
                        <div className="stat-value">
                            <span className="stat-number" data-count="5">0</span><span className="stat-plus">+</span>
                        </div>
                        <span className="stat-label">Projects Built</span>
                    </div>
                    <div className="stat">
                        <div className="stat-value">
                            <span className="stat-number" data-count="20">0</span><span className="stat-plus">+</span>
                        </div>
                        <span className="stat-label">THM Rooms</span>
                    </div>
                </div>
                <div className="hero-social">
                    <a href="https://github.com/taslimahmedtamim" target="_blank" rel="noopener" className="social-link" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://tryhackme.com/p/soloStriker" target="_blank" rel="noopener" className="social-link" title="TryHackMe">
                        <i className="fas fa-shield-alt"></i>
                    </a>
                    <a href="https://codeforces.com/profile/taslim_ahmed_tamim" target="_blank" rel="noopener" className="social-link" title="Codeforces">
                        <i className="fas fa-code"></i>
                    </a>
                    <a href="https://vjudge.net/user/taslim_tamim" target="_blank" rel="noopener" className="social-link" title="VJudge">
                        <i className="fas fa-gavel"></i>
                    </a>
                    <a href="https://leetcode.com/u/taslim_ahmed_tamim" target="_blank" rel="noopener" className="social-link" title="LeetCode">
                        <i className="fas fa-laptop-code"></i>
                    </a>
                </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
                <div className="hex-profile-container">
                    {/* Outer Sci-Fi Target HUD */}
                    <div className="hologram-ring ring-outer-hud">
                        <svg className="hud-svg" viewBox="0 0 500 500">
                            <circle cx="250" cy="250" r="235" className="hud-circle-dashed" />
                            <circle cx="250" cy="250" r="215" className="hud-circle-arc" />
                            <text x="250" y="22" className="hud-deg">000°</text>
                            <text x="482" y="254" className="hud-deg">090°</text>
                            <text x="250" y="492" className="hud-deg">180°</text>
                            <text x="18" y="254" className="hud-deg">270°</text>
                        </svg>
                    </div>
                    
                    <div className="hologram-ring ring-1"></div>
                    <div className="hologram-ring ring-2"></div>
                    <div className="hologram-glow"></div>

                    {/* Main Hexagon Card Frame */}
                    <div className="hex-card-frame">
                        <div className="hex-bg-spotlight"></div>
                        <div className="hex-grid-pattern"></div>

                        {/* SVG Neon Laser Border */}
                        <svg className="hex-laser-svg" viewBox="0 0 330 380">
                            <polygon points="165,4 326,95 326,285 165,376 4,285 4,95" className="laser-path-bg" />
                            <polygon points="165,4 326,95 326,285 165,376 4,285 4,95" className="laser-path-beam" />
                            <circle cx="165" cy="4" r="4" className="hex-node" />
                            <circle cx="326" cy="95" r="4" className="hex-node" />
                            <circle cx="326" cy="285" r="4" className="hex-node" />
                            <circle cx="165" cy="376" r="4" className="hex-node" />
                            <circle cx="4" cy="285" r="4" className="hex-node" />
                            <circle cx="4" cy="95" r="4" className="hex-node" />
                        </svg>
                        
                        <div className="hex-img-wrapper">
                            <img 
                                src="assets/tamim bg remove.png" 
                                alt="Taslim Ahmed Tamim" 
                                className="hex-avatar-img" 
                                loading="lazy" 
                            />
                        </div>

                        <div className="hex-scan-line"></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="panel about">
            <div className="panel-header">
                <h2><i className="fas fa-user-astronaut"></i> About</h2>
                <span className="panel-tag">Mission Brief</span>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h3 className="about-title">The Story</h3>
                    <p>
                        I'm a <strong>CSE student at Green University of Bangladesh</strong> with a focus on <strong>Cybersecurity</strong>. My expertise spans SIEM/SOAR technologies, firewall management, IDS/IPS systems, and web application security. I have hands-on experience with penetration testing tools and defensive security strategies.
                    </p>
                    <p>
                        Beyond security, I maintain strong competitive programming fundamentals through platforms like Codeforces and LeetCode. I also develop full-stack web applications using the PERN stack — bringing security best practices into production systems.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Green University of Bangladesh (CSE)</span>
                        </div>
                        <div className="highlight-item">
                            <i className="fas fa-bug"></i>
                            <span>SIEM, SOAR & Threat Analysis Specialist</span>
                        </div>
                        <div className="highlight-item">
                            <i className="fas fa-code"></i>
                            <span>Full-Stack Developer & Competitive Programmer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel-grid about-cards">
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-bullseye"></i></div>
                    <h3>My Mission</h3>
                    <p>
                        To build a career in Cybersecurity — protecting systems and solving real problems with strong fundamentals, hands-on practice, and clean code.
                    </p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-brain"></i></div>
                    <h3>Mindset</h3>
                    <p>Always iterating. Always shipping. Always learning. Every challenge is an opportunity to grow.</p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-heart"></i></div>
                    <h3>Passion</h3>
                    <p>I believe in the power of clean code, continuous learning, and building products that users love.</p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-terminal"></i></div>
                    <h3>Fun Fact</h3>
                    <p>I got into programming to understand how hacking actually works — and ended up loving both sides of the terminal.</p>
                </article>
            </div>
        </section>

        <section id="skills" className="panel skills">
            <div className="panel-header">
                <h2><i className="fas fa-cogs"></i> Skills</h2>
                <span className="panel-tag">Tech Arsenal</span>
            </div>
            <div className="skills-container">
                <div className="skills-grid">
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-shield-alt"></i></div>
                            <h3>Cybersecurity</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fas fa-broadcast-tower"></i> SIEM/SOAR</li>
                            <li className="skill-tag"><i className="fas fa-firewall"></i> Firewall Management</li>
                            <li className="skill-tag"><i className="fas fa-exclamation-circle"></i> IDS/IPS</li>
                            <li className="skill-tag"><i className="fas fa-shield-virus"></i> WAF</li>
                            <li className="skill-tag"><i className="fas fa-bug"></i> Threat Analysis</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-hammer"></i></div>
                            <h3>Security Tools</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fas fa-search"></i> Nessus</li>
                            <li className="skill-tag"><i className="fas fa-network-wired"></i> Nmap</li>
                            <li className="skill-tag"><i className="fas fa-magnifying-glass"></i> Wireshark</li>
                            <li className="skill-tag"><i className="fas fa-crosshairs"></i> Metasploit</li>
                            <li className="skill-tag"><i className="fas fa-spider"></i> Burp Suite</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-network-wired"></i></div>
                            <h3>Networking</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fas fa-protocol"></i> TCP/IP</li>
                            <li className="skill-tag"><i className="fas fa-share-alt"></i> Subnetting</li>
                            <li className="skill-tag"><i className="fas fa-ethernet"></i> VLAN</li>
                            <li className="skill-tag"><i className="fas fa-route"></i> Routing</li>
                            <li className="skill-tag"><i className="fas fa-cube"></i> Cisco Packet Tracer</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fab fa-linux"></i></div>
                            <h3>Operating Systems</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fab fa-linux"></i> Kali Linux</li>
                            <li className="skill-tag"><i className="fab fa-linux"></i> Ubuntu</li>
                            <li className="skill-tag"><i className="fab fa-windows"></i> Windows</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-code"></i></div>
                            <h3>Programming Languages</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fas fa-code"></i> C/C++</li>
                            <li className="skill-tag"><i className="fab fa-java"></i> Java</li>
                            <li className="skill-tag"><i className="fab fa-python"></i> Python</li>
                            <li className="skill-tag"><i className="fab fa-php"></i> PHP</li>
                            <li className="skill-tag"><i className="fab fa-js"></i> JavaScript</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-layer-group"></i></div>
                            <h3>Web Technologies</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fab fa-react"></i> React</li>
                            <li className="skill-tag"><i className="fab fa-node-js"></i> Node.js</li>
                            <li className="skill-tag"><i className="fas fa-server"></i> Express.js</li>
                        </ul>
                    </article>
                    <article className="card skill-card">
                        <div className="skill-card-header">
                            <div className="skill-icon"><i className="fas fa-tools"></i></div>
                            <h3>Tools & Platforms</h3>
                        </div>
                        <ul className="skill-tags">
                            <li className="skill-tag"><i className="fab fa-git-alt"></i> Git</li>
                            <li className="skill-tag"><i className="fab fa-github"></i> GitHub</li>
                            <li className="skill-tag"><i className="fas fa-terminal"></i> VS Code</li>
                            <li className="skill-tag"><i className="fas fa-file-alt"></i> LaTeX</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <section id="experience" className="panel experience">
            <div className="panel-header">
                <h2><i className="fas fa-briefcase"></i> Journey</h2>
                <span className="panel-tag">Journey Log</span>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="card timeline-card">
                        <div className="timeline-date">May 2026 – Present</div>
                        <h3>Cybersecurity Analyst Intern</h3>
                        <h4>Bengal Infosec Limited</h4>
                        <p>Analyzing security threats, monitoring SIEM systems, conducting vulnerability assessments using Nessus and Nmap, and supporting penetration testing initiatives. Hands-on experience with incident response and threat analysis.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="card timeline-card">
                        <div className="timeline-date">2026 – Present</div>
                        <h3>Joint General Secretary (Technical)</h3>
                        <h4>GUB Competitive Programming Community</h4>
                        <p>Leading technical initiatives for the competitive programming community at GUB. Organizing contests, mentoring members, and fostering algorithmic problem-solving culture.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="card timeline-card">
                        <div className="timeline-date">2025 – 2026</div>
                        <h3>Joint Organizing Secretary</h3>
                        <h4>GUB Competitive Programming Community</h4>
                        <p>Organized programming contests and community events, managed participant logistics, and developed problem sets for internal competitions.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="card timeline-card">
                        <div className="timeline-date">2024 – Present</div>
                        <h3>Competitive Programmer</h3>
                        <h4>Codeforces · LeetCode · VJudge</h4>
                        <p>Actively solving algorithmic problems, participating in rated contests, and building strong DSA fundamentals across multiple online judges.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="card timeline-card">
                        <div className="timeline-date">2023 – Present</div>
                        <h3>BSc in Computer Science & Engineering</h3>
                        <h4>Green University of Bangladesh</h4>
                        <p>Pursuing undergraduate studies with focus on algorithms, data structures, networking, cybersecurity, and software engineering.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" className="panel services">
            <div className="panel-header">
                <h2><i className="fas fa-server"></i> Services</h2>
                <span className="panel-tag">What I Offer</span>
            </div>
            <div className="services-grid">
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-network-wired"></i></div>
                    <h3>Network Security & Monitoring</h3>
                    <p>
                        Designing and implementing robust network defenses utilizing Firewalls, IDS/IPS, and WAF. Proficient with tools like iptables, Suricata, ModSecurity, and BunkerWeb.
                    </p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-project-diagram"></i></div>
                    <h3>SIEM & SOAR Integration</h3>
                    <p>
                        Comprehensive setup and management of Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) platforms, leveraging Wazuh and Tracecat.
                    </p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-search"></i></div>
                    <h3>Incident Response & Forensics</h3>
                    <p>
                        Executing structured incident response operations and deep cyber forensics capabilities to effectively analyze, contain, and remediate breaches using The Hive, Cortex, DFIRIS, Velociraptor, and GRR.
                    </p>
                </article>
                <article className="card card-gloss">
                    <div className="card-icon"><i className="fas fa-bug"></i></div>
                    <h3>Threat Intelligence & Malware Analysis</h3>
                    <p>
                        Proactive threat intelligence gathering and advanced malware hunting to identify and neutralize sophisticated cyber threats, utilizing MISP, OpenCTI, and Yara.
                    </p>
                </article>
            </div>
        </section>

        <section id="achievements" className="panel achievements">
            <div className="panel-header">
                <h2><i className="fas fa-trophy"></i> Achievements</h2>
                <span className="panel-tag">Hall of Fame</span>
            </div>
            <div className="achievements-grid">
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-certificate"></i></div>
                    <div className="achievement-content">
                        <h3>Cybersecurity Fundamentals & Defensive Tactics (Level 1)</h3>
                        <p>Certified by GUCC Cyber Security Society. Comprehensive training in defensive security principles, threat mitigation, and security operations.</p>
                        <span className="achievement-badge"><i className="fas fa-check-circle"></i> Certified</span>
                    </div>
                </article>
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-certificate"></i></div>
                    <div className="achievement-content">
                        <h3>Beginner to Intermediate Cybersecurity Training (Level 2)</h3>
                        <p>Advanced training by GUCC Cyber Security Society covering network security, penetration testing fundamentals, and attack vectors.</p>
                        <span className="achievement-badge"><i className="fas fa-check-circle"></i> In Progress</span>
                    </div>
                </article>
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-trophy"></i></div>
                    <div className="achievement-content">
                        <h3>200+ CP Problems Solved</h3>
                        <p>Solved 200+ competitive programming problems across Codeforces, LeetCode, and VJudge with focus on algorithms and data structures.</p>
                        <span className="achievement-badge"><i className="fas fa-star"></i> Active</span>
                    </div>
                </article>
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-shield-alt"></i></div>
                    <div className="achievement-content">
                        <h3>TryHackMe — 20+ Rooms</h3>
                        <p>Completed 20+ hands-on cybersecurity rooms covering Linux fundamentals, networking, web exploitation, and penetration testing essentials.</p>
                        <span className="achievement-badge"><i className="fas fa-link"></i> <a href="https://tryhackme.com/p/soloStriker" target="_blank" rel="noopener">View Profile</a></span>
                    </div>
                </article>
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-users"></i></div>
                    <div className="achievement-content">
                        <h3>Leadership in Competitive Programming</h3>
                        <p>Joint General Secretary (Technical) of GUB Competitive Programming Community, leading contests and mentoring aspiring programmers.</p>
                        <span className="achievement-badge"><i className="fas fa-medal"></i> Leadership</span>
                    </div>
                </article>
                <article className="card achievement-card">
                    <div className="achievement-icon"><i className="fas fa-layer-group"></i></div>
                    <div className="achievement-content">
                        <h3>Full-Stack Projects</h3>
                        <p>Built 5+ production-ready web applications using PERN stack with focus on security best practices and scalable architecture.</p>
                        <span className="achievement-badge"><i className="fas fa-code"></i> Development</span>
                    </div>
                </article>
            </div>
        </section>

        <section id="projects" className="panel projects">
            <div className="panel-header">
                <h2><i className="fas fa-folder-open"></i> Projects</h2>
                <span className="panel-tag">Command Center</span>
            </div>
            <div className="projects-filter">
                <button className="filter-btn active" data-filter="all">All Projects</button>
                <button className="filter-btn" data-filter="tools">Security & Tools</button>
                <button className="filter-btn" data-filter="web">Web Platforms</button>
            </div>
            <div className="projects-grid">
                {/* PhishGuard - Featured Cybersecurity Project */}
                <article className="card project-card" data-category="tools">
                    <div className="project-image">
                        <div className="project-placeholder">
                            <i className="fas fa-shield-virus"></i>
                        </div>
                        <div className="project-overlay">
                            <a href="https://github.com/taslimahmedtamim/PhishGuard" target="_blank" rel="noopener" className="project-btn" title="View Source Code">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-status live"><i className="fas fa-shield-alt"></i> Cybersecurity Tool</div>
                        <h3>PhishGuard</h3>
                        <p>AI-powered anti-phishing & web threat detection engine. Analyzes URL heuristics, domain age, SSL certificate validity, and email headers in real-time to intercept phishing attacks.</p>
                        <div className="project-tech">
                            <span>Python</span>
                            <span>Machine Learning</span>
                            <span>Cybersecurity</span>
                            <span>FastAPI</span>
                            <span>React</span>
                        </div>
                    </div>
                </article>

                {/* UConnect - Featured Live Web Platform */}
                <article className="card project-card" data-category="web">
                    <div className="project-image">
                        <div className="project-placeholder">
                            <i className="fas fa-network-wired"></i>
                        </div>
                        <div className="project-overlay">
                            <a href="https://uconnect.up.railway.app" target="_blank" rel="noopener" className="project-btn" title="Live Demo">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-status live"><i className="fas fa-globe"></i> Live Platform</div>
                        <h3>UConnect</h3>
                        <p>Comprehensive academic collaboration platform connecting university students, streamlining project sharing, and building an active campus tech community.</p>
                        <div className="project-tech">
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </article>

                {/* MediAssist - Healthcare Platform */}
                <article className="card project-card" data-category="web">
                    <div className="project-image">
                        <div className="project-placeholder">
                            <i className="fas fa-notes-medical"></i>
                        </div>
                        <div className="project-overlay">
                            <a href="https://github.com/taslimahmedtamim/MediAssist" target="_blank" rel="noopener" className="project-btn" title="View Repository">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-status live"><i className="fas fa-code"></i> Full-Stack App</div>
                        <h3>MediAssist</h3>
                        <p>Healthcare management platform designed to streamline digital medical records, doctor appointments, and secure patient-provider interactions.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>PostgreSQL</span>
                            <span>Express</span>
                        </div>
                    </div>
                </article>

                {/* C++ to Python Code Generator */}
                <article className="card project-card" data-category="tools">
                    <div className="project-image">
                        <div className="project-placeholder">
                            <i className="fas fa-code-compare"></i>
                        </div>
                        <div className="project-overlay">
                            <a href="https://github.com/taslimahmedtamim/cpp-to-python-codeGenerator" target="_blank" rel="noopener" className="project-btn" title="View Repository">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-status live"><i className="fas fa-terminal"></i> Open Source Tool</div>
                        <h3>C++ to Python Transpiler</h3>
                        <p>Automated code transpiler converting C++ control flow, functions, AST structures, and variable definitions into executable Python code.</p>
                        <div className="project-tech">
                            <span>C++</span>
                            <span>Python</span>
                            <span>AST Parsing</span>
                            <span>Transpiler</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section id="blog" className="panel blog">
            <div className="panel-header">
                <h2><i className="fas fa-rss"></i> Blog</h2>
                <span className="panel-tag">Signal Log</span>
            </div>
            <div className="blog-intro">
                <p>Sharing discoveries, experiments, and insights from my coding journey. These posts auto-expand as I publish new content.</p>
                <a className="cta-button ghost" href="#" id="subscribe-button">
                    <i className="fas fa-bell"></i> Subscribe for updates
                </a>
            </div>
            <div className="blog-grid" id="blog-grid">
                {/*  Blog cards injected by script.js  */}
            </div>
        </section>

        <section id="contact" className="panel contact">
            <div className="panel-header">
                <h2><i className="fas fa-satellite-dish"></i> Contact</h2>
                <span className="panel-tag">Open Channels</span>
            </div>
            <div className="contact-content">
                <div className="contact-left">
                    <article className="card card-gloss contact-main">
                        <div className="card-icon"><i className="fas fa-paper-plane"></i></div>
                        <h3>Let's Build Together</h3>
                        <p>
                            Whether it's a collaboration, mentorship request, job opportunity, or a futuristic mission, I'm ready to chat. Let's create something amazing!
                        </p>
                    </article>
                    <form className="contact-form" action="https://formsubmit.co/taslimahmedtamim4u@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="Portfolio Contact" />
                        <input type="hidden" name="_template" value="box" />
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your message..." required></textarea>
                        </div>
                        <button type="submit" className="cta-button primary form-submit">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
                <div className="contact-right">
                    <article className="card card-gloss contact-social">
                        <h3><i className="fas fa-address-book"></i> Connect With Me</h3>
                        <div className="social-grid">
                            <a href="https://github.com/taslimahmedtamim" target="_blank" rel="noopener" className="social-card">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/taslim-ahmed-tamim/" target="_blank" rel="noopener" className="social-card">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="mailto:taslimahmedtamim4u@gmail.com" className="social-card">
                                <i className="fas fa-envelope"></i>
                                <span>Mail</span>
                            </a>
                            <a href="https://x.com/Taslim_Tamim4u" target="_blank" rel="noopener" className="social-card">
                                <i className="fab fa-x-twitter"></i>
                                <span>X</span>
                            </a>
                            <a href="https://www.facebook.com/taslim.ahmed.tamim.2024" target="_blank" rel="noopener" className="social-card">
                                <i className="fab fa-facebook"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/taslimahmedtamim/" target="_blank" rel="noopener" className="social-card">
                                <i className="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </article>
                    <article className="card card-gloss platform-profiles">
                        <h3><i className="fas fa-terminal"></i> Skill Platforms</h3>
                        <div className="platform-grid">
                            <a href="https://tryhackme.com/p/soloStriker" target="_blank" rel="noopener" className="platform-card">
                                <i className="fas fa-shield-alt"></i>
                                <span>TryHackMe</span>
                                <small>soloStriker</small>
                            </a>
                            <a href="https://codeforces.com/profile/taslim_ahmed_tamim" target="_blank" rel="noopener" className="platform-card">
                                <i className="fas fa-code"></i>
                                <span>Codeforces</span>
                                <small>taslim_ahmed_tamim</small>
                            </a>
                            <a href="https://leetcode.com/u/taslim_ahmed_tamim" target="_blank" rel="noopener" className="platform-card">
                                <i className="fas fa-laptop-code"></i>
                                <span>LeetCode</span>
                                <small>taslim_ahmed_tamim</small>
                            </a>
                            <a href="https://vjudge.net/user/taslim_tamim" target="_blank" rel="noopener" className="platform-card">
                                <i className="fas fa-gavel"></i>
                                <span>VJudge</span>
                                <small>taslim_tamim</small>
                            </a>
                        </div>
                    </article>
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                            <div className="contact-text">
                                <span className="label">Email</span>
                                <a href="mailto:taslimahmedtamim4u@gmail.com">taslimahmedtamim4u@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="contact-text">
                                <span className="label">Location</span>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-logo">TAT</div>
            <p>&copy; {new Date().getFullYear()} Taslim Ahmed Tamim. Crafted with <i className="fas fa-heart"></i> and curiosity.</p>
            <div className="footer-social">
                <a href="https://github.com/taslimahmedtamim" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/taslim-ahmed-tamim/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:taslimahmedtamim4u@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                <a href="https://x.com/Taslim_Tamim4u" target="_blank" rel="noopener" aria-label="X"><i className="fab fa-x-twitter"></i></a>
                <a href="https://www.facebook.com/taslim.ahmed.tamim.2024" target="_blank" rel="noopener" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/taslimahmedtamim/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footer-links">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </footer>

    

    </>
  );
}
