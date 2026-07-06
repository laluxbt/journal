// Sample data for charts (replace with real Firestore data later)
const winRateData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Win Rate',
        data: [0.6, 0.4, 0.7, 0.5, 0.8, 0.3, 0.9],
        backgroundColor: 'rgba(90, 55, 156, 0.2)',
        borderColor: '#5a379c',
        borderWidth: 2,
        fill: true
    }]
};

const dailyTrendData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Daily Performance',
        data: [100, -50, 200, -75, 300, -100, 400],
        backgroundColor: 'rgba(90, 55, 156, 0.2)',
        borderColor: '#5a379c',
        borderWidth: 2,
        fill: false
    }]
};

// Initialize Charts
document.addEventListener('DOMContentLoaded', () => {
    const winRateChart = new Chart(document.getElementById('winRateChart'), {
        type: 'line',
        data: winRateData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });

    const dailyTrendChart = new Chart(document.getElementById('dailyTrendChart'), {
        type: 'line',
        data: dailyTrendData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Load trades from Firestore (mock data for now)
    loadTrades();
});

function loadTrades() {
    const tradeList = document.getElementById('tradeList');
    const trades = [
        { date: '2025-04-01', entry: '100', exit: '120', pnl: 20, notes: 'Strong uptrend' },
        { date: '2025-04-02', entry: '120', exit: '95', pnl: -25, notes: 'Stop loss hit' }
    ];

    tradeList.innerHTML = '';
    trades.forEach(trade => {
        const tradeItem = document.createElement('div');
        tradeItem.className = 'trade-item';
        tradeItem.innerHTML = `
            <p><strong>Date:</strong> ${trade.date}</p>
            <p><strong>Entry:</strong> ${trade.entry}</p>
            <p><strong>Exit:</strong> ${trade.exit}</p>
            <p><strong>Profit/Loss:</strong> ${trade.pnl}</p>
            <p><strong>Notes:</strong> ${trade.notes}</p>
        `;
        tradeList.appendChild(tradeItem);
    });
}

// Add trade to Firestore (mock for now)
document.getElementById('tradeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const tradeDate = document.getElementById('tradeDate').value;
    const entryPrice = document.getElementById('entryPrice').value;
    const exitPrice = document.getElementById('exitPrice').value;
    const profitLoss = document.getElementById('profitLoss').value;
    const notes = document.getElementById('notes').value;

    // Mock data
    const newTrade = {
        date: tradeDate,
        entry: entryPrice,
        exit: exitPrice,
        pnl: profitLoss,
        notes: notes,
        timestamp: Date.now()
    };

    // In real app, save to Firestore
    console.log('New Trade:', newTrade);
    alert('Trade logged successfully!');
    document.getElementById('tradeForm').reset();
    loadTrades();
});
