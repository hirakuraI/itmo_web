document.addEventListener('DOMContentLoaded', function (){
    var resultsContainer = document.getElementById('result-container');

    var storedData = [];
    var index = 0;

    while(true){
        var entry = localStorage.getItem('callbackData'+index);
        if(entry === null){
            break
        }
        storedData.push(JSON.parse(entry));
        index++;
    }

    storedData.forEach(function (data){
        var resultList = document.createElement('ul');
        resultList.classList.add('results-list');

        appendItem(resultList, 'ФИО: ', data.name);
        appendItem(resultList, 'Телефон: ', data.phone);
        appendItem(resultList, 'Желаемое время звонка: ', data.callTime);
        resultsContainer.appendChild(resultList);
    });

    function appendItem(list, label, value){
        var listItem = document.createElement('li');
        listItem.innerHTML = `<b>${label}</b> ${value}`;
        list.appendChild(listItem);
    }
});