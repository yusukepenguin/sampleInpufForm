const form = document.getElementById('submissionForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwG1oSsQvTwYPtaOZXMUsTqYZNqxtI5cU3WiUxFQ4zHNJ7uUPgpL2mbA423Nmy_0VIz/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Data submitted successfully');
            form.reset();
        } else {
            alert('Failed to submit data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit data');
    }
});
