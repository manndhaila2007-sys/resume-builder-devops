window.onload = function() {
    document.getElementById('welcomeModal').style.display = 'block';
};

function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}

function downloadPDF() {
    window.print();
}

function updatePreview() {
    const name = document.getElementById('nameInput').value;
    const job = document.getElementById('jobInput').value;
    const email = document.getElementById('emailInput').value;
    const exp = document.getElementById('expInput').value;
    const skills = document.getElementById('skillInput').value;

    document.getElementById('prevName').textContent = name || "YOUR NAME";
    document.getElementById('prevJob').textContent = job || "Professional Title";
    document.getElementById('prevEmail').textContent = email || "email@example.com";
    document.getElementById('prevExp').textContent = exp || "Details about your work experience will appear here as you type in the editor.";

    const skillsContainer = document.getElementById('prevSkills');
    skillsContainer.innerHTML = '';
    
    if (skills) {
        skills.split(',').forEach(skill => {
            if (skill.trim()) {
                const div = document.createElement('div');
                div.className = 'skill-item';
                div.textContent = "• " + skill.trim();
                skillsContainer.appendChild(div);
            }
        });
    }
}
