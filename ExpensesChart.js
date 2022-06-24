import data from './data.json' assert {type: 'json'};

let charts = document.querySelector('.charts');

    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        chart.innerHTML = `   
        <div class="chart-wrapper">
        <div class = "chart-value" style="height:${item.amount}%"></div>
        </div>
        <div class ="chart-title">${item.day}</div>`;
        
        charts.appendChild(chart);
    })
    
