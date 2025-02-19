function downloadSoftware() {
    alert('Redirecting to download page...'); // Here you would actually redirect or open a download dialog
    // Example: window.location.href = 'download-link.html';
}

// Add more interactivity as needed. For instance:
document.addEventListener('DOMContentLoaded', (event) => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseover', () => {
            feature.style.transform = 'scale(1.05)';
        });
        feature.addEventListener('mouseout', () => {
            feature.style.transform = 'scale(1)';
        });
    });
});

// ... Previous JS ...

function showDownload() {
    document.getElementById('download').classList.remove('hidden');
}

function hideDownload() {
    document.getElementById('download').classList.add('hidden');
}

function downloadSoftware(os) {
    alert(`Downloading for ${os}...`); // Placeholder for actual download logic
    // Here you would implement the actual download functionality, perhaps opening a new tab with the download link
    hideDownload();
}

document.getElementById('download').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        hideDownload();
    }
});


function downloadSoftware(os) {
    // Here we use the same download link regardless of OS for simplicity
    // In a real scenario, you might want to adjust this based on 'os'
    window.location.href = '/english-bangla.exe';
    hideDownload();
}
