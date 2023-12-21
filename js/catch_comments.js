document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    const preloader = document.getElementById('preloader');
    const contentContainer = document.getElementById('contentContainer');

    fetchButton.addEventListener('click', fetchData);

    function fetchData() {
        const commentId = Math.ceil(Math.random() * 500);
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?commentId=${commentId}`;

        preloader.style.display = 'block';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                renderData(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                renderError();
                console.error('Fetch error:', error);
            });
    }

    function renderData(data) {
        const { email, body: comment } = data;
        contentContainer.innerHTML = `
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Comment:</strong> ${comment}</div>
    `;
    }

    function renderError() {
        contentContainer.innerHTML = '<div class="error-message">⚠️ Что-то пошло не так</div>';
    }
});
