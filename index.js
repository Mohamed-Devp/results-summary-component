const container = document.querySelector('.categories');

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error(`HTTP Error! status ${response.status}`);
        }

        const fetched = await response.json();
        return fetched;

    } catch(error) {
        console.error(`Failed to fetch data.json: ${error}`);
    }
}

function onMount() {
    fetchData().then(summaries => {
        summaries.forEach(summary => {
            container.innerHTML += `
                <div class="category">
                    <img src="${summary.icon}" alt="${summary.category}">
                    <p class="name">${summary.category}</p>
                    <p class="score">${summary.score} <span>/ 100</span></p>
                </div>
            `;
        });
    });
}

document.addEventListener('DOMContentLoaded', onMount);