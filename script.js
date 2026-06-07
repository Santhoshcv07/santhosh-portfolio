// script.js
// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 80,
});

// Mobile navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ========== RESUME DOWNLOAD WITH PROGRESS ANIMATION ==========
// 📁 IMPORTANT: Place your PDF file in a folder named "resume" at the root of your project
// Example: /resume/Santhosh_CV.pdf
// Update the file name below to match your actual PDF file
const RESUME_FILE_PATH = "resume/Santhosh_CV.pdf";

function triggerDownloadWithProgress(buttonElement) {
    // Prevent multiple clicks while downloading
    if (buttonElement.classList.contains('downloading')) return;

    // Create or get progress bar element
    let progressBar = buttonElement.querySelector('.download-progress');
    if (!progressBar) {
        progressBar = document.createElement('span');
        progressBar.className = 'download-progress';
        buttonElement.style.position = 'relative';
        buttonElement.appendChild(progressBar);
    }

    // Reset and start animation
    buttonElement.classList.add('downloading');
    progressBar.style.width = '0%';
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Start actual download
            const link = document.createElement('a');
            link.href = RESUME_FILE_PATH;
            link.download = RESUME_FILE_PATH.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset button state after a short delay
            setTimeout(() => {
                progressBar.style.width = '0%';
                buttonElement.classList.remove('downloading');
            }, 300);
        } else {
            width += 2;
            progressBar.style.width = width + '%';
        }
    }, 10);
}

// Attach download event to both buttons
const downloadBtns = document.querySelectorAll('#downloadCVBtn, #cvDownloadNav');
downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerDownloadWithProgress(btn);
    });
});

// Contact form handler
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("✨ Thanks for reaching out! I'll get back within 24 hours.");
        form.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 17, 23, 0.95)';
        navbar.style.backdropFilter = 'blur(16px)';
    } else {
        navbar.style.background = 'rgba(15, 17, 23, 0.85)';
    }
});

// Add glow effect to about image frame
const aboutImgFrame = document.querySelector('.about-img-frame');
if (aboutImgFrame) aboutImgFrame.classList.add('glow-red');