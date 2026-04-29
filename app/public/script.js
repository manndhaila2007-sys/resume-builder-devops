function updatePreview() {
    const name = document.getElementById('nameInput').value;
    const job = document.getElementById('jobInput').value;
    const email = document.getElementById('emailInput').value;
    const exp = document.getElementById('expInput').value;
    const skills = document.getElementById('skillInput').value;

    document.getElementById('prevName').textContent = name || "Your Name";
    document.getElementById('prevJob').textContent = job || "Professional Title";
    document.getElementById('prevEmail').textContent = email || "email@example.com";
    document.getElementById('prevExp').textContent = exp || "Details about your work experience will appear here...";

    const skillsContainer = document.getElementById('prevSkills');
    skillsContainer.innerHTML = '';
    
    if (skills) {
        skills.split(',').forEach(skill => {
            if (skill.trim()) {
                const span = document.createElement('span');
                span.className = 'skill-pill';
                span.textContent = skill.trim();
                skillsContainer.appendChild(span);
            }
        });
    }
}
