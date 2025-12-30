let dataList = [];

function addData() {
    const name = document.getElementById('name').value;
    const score = parseFloat(document.getElementById('score').value);
    const standard = parseFloat(document.getElementById('standard').value);

    if (!name || isNaN(score) || isNaN(standard)) {
        alert("請完整輸入所有欄位！");
        return;
    }

    // 計算相差 (國際依據 - 成績)
    const diff = standard - score;

    // 加入陣列
    dataList.push({
        name: name,
        score: score,
        standard: standard,
        diff: diff
    });

    // 依據相差值「由小到大」排序
    dataList.sort((a, b) => a.diff - b.diff);

    updateTable();
    
    // 清空輸入框
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    document.getElementById('standard').value = '';
}

function updateTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    dataList.forEach((item, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="rank-cell">${index + 1}</td>
            <td>${item.name}</td>
            <td class="score-cell">${item.score}</td>
            <td>${item.standard}</td>
            <td>${item.diff.toFixed(2)}</td>
        `;
        
        tbody.appendChild(row);
    });
}