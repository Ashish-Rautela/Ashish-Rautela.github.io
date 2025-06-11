const form = document.getElementById('form');
const qrImage = document.getElementById('qr-image');
const qrContainer = document.querySelector('.qr');
const downloadBtn = document.getElementById('download-btn');

async function form_to_backend(event) {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(form));

    try {
        const response = await fetch("https://qr-backend-gs6p.onrender.com/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        if (response.ok) {
            const imageUrl = await response.text();
            console.log("Image URL:", imageUrl);

            qrImage.src = imageUrl;
            qrImage.style.display = 'block';
            qrContainer.style.display = 'block';

            downloadBtn.style.display = 'block';
            
            
            downloadBtn.replaceWith(downloadBtn.cloneNode(true));
            const newDownloadBtn = document.getElementById('download-btn');
            
            newDownloadBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                try {
                   
                    const imageResponse = await fetch(imageUrl, {
                        mode: 'cors'
                    });
                    
                    window.open(imageUrl, '_blank');
            });

        } else {
            console.error("Error submitting form:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

form.addEventListener('submit', form_to_backend);
