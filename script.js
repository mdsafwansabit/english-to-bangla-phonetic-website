function showDownload() {
    document.getElementById('download').classList.remove('hidden');
}

function hideDownload() {
    document.getElementById('download').classList.add('hidden');
}

function downloadSoftware(os) {
    alert(`Downloading for ${os}...`);
    hideDownload();
}

document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseover', () => {
            feature.style.transform = 'scale(1.05)';
        });

        feature.addEventListener('mouseout', () => {
            feature.style.transform = 'scale(1)';
        });
    });

    // Close download modal when clicking outside content
    document.getElementById('download').addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            hideDownload();
        }
    });
});

// Smooth Scroll for Features & Testimonials
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('#features, #testimonials');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('in-view');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight;
}


// ... Previous JS ...

function downloadSoftware(os) {
    // Here we use the same download link regardless of OS for simplicity
    // In a real scenario, you might want to adjust this based on 'os'
    window.location.href = '/english-bangla.exe';
    hideDownload();
}

// ... Rest of the script ...
