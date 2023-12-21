window.onload = function() {
    document.getElementById('callback-form').onsubmit = function(event) {
        event.preventDefault();

        var name = document.getElementById('fullname').value;
        var phone = document.getElementById('phone').value;
        var callTime = document.getElementById('call-time').value;

        var result = "ФИО: " + name + "<br>" + "Телефон: " + phone + "<br>" + "Желаемое время звонка: " + callTime;

        document.getElementById('result-container').innerHTML = result;

        localStorage.setItem('callbackName', name);
        localStorage.setItem('callbackPhone', phone);
        localStorage.setItem('callbackCallTime', callTime);
    }

    if (localStorage.getItem('callbackName') && localStorage.getItem('callbackPhone') && localStorage.getItem('callbackCallTime')) {
        var savedName = localStorage.getItem('callbackName');
        var savedPhone = localStorage.getItem('callbackPhone');
        var savedCallTime = localStorage.getItem('callbackCallTime');
        document.getElementById('fullname').value = savedName;
        document.getElementById('phone').value = savedPhone;
        document.getElementById('call-time').value = savedCallTime;
    }
};
