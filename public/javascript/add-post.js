async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;

    const response = await fetch('/api/psots', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: { 'Content-Type': 'applcation/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.form-new-post').addEventListener('submit', newFormHandler);