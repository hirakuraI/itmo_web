document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    const preloader = document.getElementById('preloader');
    const contentContainer = document.getElementById('contentContainer');

    fetchButton.addEventListener('click', fetchData);

    function fetchData() {
        const commentId = Math.ceil(Math.random() * 100) + 1;
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;

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
        contentContainer.innerHTML = `
        <div><strong>Email:</strong> ${data[0].email}</div>
        <div><strong>Comment:</strong> ${data[0].body}</div>
    `;
    }

    function renderError() {
        contentContainer.innerHTML = '<div class="error-message">⚠️ Что-то пошло не так</div>';
    }
});
