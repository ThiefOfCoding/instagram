document.addEventListener('DOMContentLoaded', () => {
    const navIcons = document.querySelectorAll('.nav-icon');
    const headerIcons = document.querySelectorAll('.main-header .actions i');
    const sections = document.querySelectorAll('.content-section');
    const storyModal = document.getElementById('story-modal');
    const closeStoryBtn = document.querySelector('.close-story');
    const storyImages = document.querySelectorAll('.story');
    const modalStoryImage = document.getElementById('modal-story-image');
    const modalStoryUsername = document.getElementById('modal-story-username');
    const modalStoryProfilePic = document.getElementById('modal-story-profile-pic');
    const likeButtons = document.querySelectorAll('.like-button');
    const saveButtons = document.querySelectorAll('.save-button');

    // Navigation logic (Footer and Header icons)
    function handleNavigation(element) {
        const targetSectionId = element.dataset.section;

        // Remove active class from all nav and header icons
        navIcons.forEach(i => i.classList.remove('active'));
        headerIcons.forEach(i => i.classList.remove('active'));

        // Remove active class from all sections
        sections.forEach(s => s.classList.remove('active'));

        // Add active class to the clicked icon and corresponding section
        element.classList.add('active');
        if (targetSectionId) {
            document.getElementById(targetSectionId).classList.add('active');
        }
    }

    navIcons.forEach(icon => {
        icon.addEventListener('click', () => handleNavigation(icon));
    });

    headerIcons.forEach(icon => {
        icon.addEventListener('click', () => handleNavigation(icon));
    });

    // Story viewer logic
    storyImages.forEach(story => {
        story.addEventListener('click', () => {
            const user = story.dataset.user;
            const profilePicUrl = story.querySelector('img').src;

            modalStoryProfilePic.src = profilePicUrl;
            modalStoryUsername.textContent = user;
            modalStoryImage.src = `https://unsplash.it/700/1000?random=${Math.floor(Math.random() * 50) + 10}`;
            storyModal.classList.add('active');
        });
    });

    closeStoryBtn.addEventListener('click', () => {
        storyModal.classList.remove('active');
    });

    storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) {
            storyModal.classList.remove('active');
        }
    });

    // Like button logic
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('fas');
            button.classList.toggle('far');
            button.classList.toggle('liked');
        });
    });

    // Save button logic
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('fas');
            button.classList.toggle('far');
            button.classList.toggle('saved');
        });
    });
});
