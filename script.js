

function CharacterCount() {
    const input = document.getElementById('myInput');
    const current = document.getElementById('current');
    const remaining = document.getElementById('remaining');
    input.addEventListener('input', function() {
        const currentLength = input.value.length;
        current.textContent = `${currentLength}`;
        remaining.textContent = `${50 - currentLength}`;
    });
}

window.onload = CharacterCount;