document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const festButtons = document.querySelectorAll('.learn-more');

    const festDetails = {
        techmania: {
            title: 'TechMania',
            date: 'June 15, 2024',
            image: 'images/techmania.jpg',
            description: 'TechMania is our annual technical fest featuring hackathons, coding challenges, and robotics competitions.'
        },
        innovate: {
            title: 'Innovate',
            date: 'July 20, 2024',
            image: 'images/innovate.jpg',
            description: 'Innovate brings together the brightest minds to showcase their innovative projects and ideas in technology and science.'
        },
        codersden: {
            title: 'Coders Den',
            date: 'August 10, 2024',
            image: 'images/codersden.jpg',
            description: 'Coders Den is a paradise for programming enthusiasts with workshops, competitive coding events, and expert talks.'
        }
    };

    festButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const fest = event.target.dataset.fest;
            const festInfo = festDetails[fest];

            document.getElementById('modal-title').innerText = festInfo.title;
            document.getElementById('modal-date').innerText = festInfo.date;
            document.getElementById('modal-image').src = festInfo.image;
            document.getElementById('modal-description').innerText = festInfo.description;

            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
