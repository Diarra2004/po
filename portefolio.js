// Données de compétences en développement
const competencesDeveloppement = {
    labels: ["HTML", "CSS", "JavaScript", "Python", "Php", "MySql",],
    datasets: [{
        data: [90, 85, 55, 75, 70],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Données de compétences en marketing digital
const competencesMarketing = {
    labels: ["SEO", "Réseaux sociaux", "Google Ads", "Wordpress"],
    datasets: [{
        data: [70, 95, 100, 75],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration des graphiques
const configDeveloppement = {
    type: 'bar',
    data: competencesDeveloppement,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        switch (value) {
                            case 90:
                                return 'Très compétent';
                            case 85:
                                return 'Compétent';
                            case 75:
                                return 'Moyen';
                            case 80:
                                return 'Bon';
                            case 70:
                                return 'Débutant';
                            default:
                                return '';
                        }
                    }
                }
            }
        }
    }
};

const configMarketing = {
    type: 'bar',
    data: competencesMarketing,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        switch (value) {
                            case 80:
                                return 'Très compétent';
                            case 85:
                                return 'Compétent';
                            case 70:
                                return}
                        }
                    }
                }
            }
        }
    }

    // Création des graphiques
const ctxDeveloppement = document.getElementById('devChart').getContext('2d');
const ctxMarketing = document.getElementById('marketingChart').getContext('2d');

const devChart = new Chart(ctxDeveloppement, configDeveloppement);
const marketingChart = new Chart(ctxMarketing, configMarketing);
