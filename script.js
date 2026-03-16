function navigate(sectionId) {

    const allSections = document.querySelectorAll('.content');
    allSections.forEach(sec => sec.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
        targetSection.classList.add('active');

        const newBg = targetSection.getAttribute('data-bg');
        const bgContainer = document.getElementById('bg-container');
        
        if (bgContainer && newBg) {
            bgContainer.style.backgroundImage = `url('${newBg}')`;
        }

        const allButtons = document.querySelectorAll('.nav-btn');
        allButtons.forEach(btn => {
            btn.classList.remove('active');
            
            const clickHandler = btn.getAttribute('onclick') || "";
            if (clickHandler.includes(`'${sectionId}'`) || clickHandler.includes(`"${sectionId}"`)) {
                btn.classList.add('active');
            }
        });
    }
}