// Audiobook market data for charts
const marketGrowth = [3.3, 8.7, 35.47];
const marketLabels = ['2020', '2024', '2030 (Projected)'];
const platformShareData = [65, 12, 11, 8, 4];
const platformLabels = ['Audible', 'Apple Books', 'Spotify', 'Google Play', 'Others'];
const platformColors = ['#175fa1', '#27c782', '#ff7d44', '#c7adfb', '#d8e3e7'];

window.onload = function() {
    // Growth Chart
    const ctxGrowth = document.getElementById('growthChart').getContext('2d');
    new Chart(ctxGrowth, {
        type: 'line',
        data: {
            labels: marketLabels,
            datasets: [{
                data: marketGrowth,
                label: "Market Size (USD Billions)",
                fill: true,
                borderColor: "#175fa1",
                backgroundColor: "rgba(23,95,161,0.10)",
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#175fa1',
                pointRadius: 6,
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: v => '$' + v + 'B' }
                }
            }
        }
    });

    // Platform Share Donut Chart
    const ctxPlatform = document.getElementById('platformChart').getContext('2d');
    new Chart(ctxPlatform, {
        type: 'doughnut',
        data: {
            labels: platformLabels,
            datasets: [{
                data: platformShareData,
                backgroundColor: platformColors,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
};
