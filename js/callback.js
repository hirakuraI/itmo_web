window.onload = function() {
    document.getElementById('callback-form').onsubmit = function(event) {
        event.preventDefault();
        var resultsContainer = document.getElementById('result-container');

        var name = document.getElementById('fullname').value;
        var phone = document.getElementById('phone').value;
        var callTime = document.getElementById('call-time').value;

        var resultList = document.createElement('ul');
        resultList.classList.add('results-list');

        appendItem(resultList, 'ФИО: ', name);
        appendItem(resultList, 'Телефон: ', phone);
        appendItem(resultList, 'Желаемое время звонка: ', callTime);
        resultsContainer.appendChild(resultList);

        var storedData = loadLocalStorage();

        var newData = {
            name: name,
            phone: phone,
            callTime: callTime
        };
        storedData.push(newData);

        saveToLocalStorage(storedData)
    }

    function appendItem(list, label, value){
        var listItem = document.createElement('li');
        listItem.innerHTML = `<b>${label}</b> ${value}`;
        list.appendChild(listItem);
    }

    function saveToLocalStorage(data){
        data.forEach(function (entry, index){
            localStorage.setItem('callbackData'+index, JSON.stringify(entry))
        })
    }

    function loadLocalStorage(){
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
        return storedData
    }
};
