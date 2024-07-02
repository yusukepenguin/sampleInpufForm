const form = document.getElementById('submissionForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzwKuyyQ0CdM4RctP8wKuvWyEH5rT1iCPm5XI6SbKbCUaxmxTMx4v-fxzr08SKKJUct/exec', {
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
