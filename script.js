// loading page

document.addEventListener('DOMContentLoaded', function () {

    // var myDiv = document.querySelector('.content');
    // myDiv.style.opacity = '1';
    // myDiv.style.transform = 'translateX(0)';
    setTimeout(function () {
        var loadingLabel = document.querySelector('.loading-page');
        if (loadingLabel !== null)
            loadingLabel.style.display = 'none';

    }, 2500);
});



document.querySelector('.nav-menu-link')?.addEventListener('click', function () {
    event.preventDefault();
    var menuBarDivStyle = document.querySelector('.menu-bar-div').style;
    menuBarDivStyle.position = 'absolute';
    menuBarDivStyle.display = 'flex';
    menuBarDivStyle.flexDirection = 'column';
    menuBarDivStyle.alignItems = 'center';
    menuBarDivStyle.backgroundColor = 'black';
    menuBarDivStyle.width = '100%';
    showResponsiveMenuBarItems();
});


// closing menu bar 

document.querySelector('.closing-menu-bar-btn')?.addEventListener('click', function () {
    document.querySelector('.menu-bar-div').style.display = 'none';
});

// responsive menu bar items 
function showResponsiveMenuBarItems() {
    var containers = document.querySelectorAll('.aos-container');

    containers.forEach(function (container, index) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1s ease ' + (index * 0.2) + 's, transform 1s ease ' + (index * 0.2) + 's';
    });

    containers.forEach(function (container) {
        setTimeout(function () {
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)'; // Yukarıdan aşağıya doğru hareket
        }, 500);
    });

};




// section 3 items
let temp = 1;

var changeItemBtns = document.querySelectorAll('.change-item-btn');

changeItemBtns.forEach(function (btn) {
    btn?.addEventListener('click', function () {
        resetOtherButtons();
        this.querySelector('.i').style.color = 'red';

        const sectionItems = document.querySelectorAll('.section-3-item');

        sectionItems.forEach(function (item) {
            fetch('https://picsum.photos/1440')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.blob();
                })
                .then(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    item.style.backgroundImage = `url(${imageUrl})`;
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        });



    });
});

function resetOtherButtons() {
    changeItemBtns.forEach(function (btn) {
        btn.querySelector('.i').style.color = 'black';
    });
};



// link clicks

let links = document.querySelectorAll('.aos-container');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.menu-bar-div').style.display = 'none';
    });
});



// --- add users ----

var users = {};


document.getElementById("register-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var subject = document.getElementById("subject").value;
    // var budget = document.getElementById("budget").value;
    // var message = document.getElementById("message").value;

    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // var cell5 = row.insertCell(4);
    var row = document.getElementById("user-table").getElementsByTagName('tbody')[0].insertRow();
    row.insertCell(0).innerHTML = document.getElementById("name").value;
    row.insertCell(1).innerHTML = document.getElementById("email").value;
    row.insertCell(2).innerHTML = document.getElementById("subject").value;
    row.insertCell(3).innerHTML = document.getElementById("budget").value;
    row.insertCell(4).innerHTML = document.getElementById("message").value;

    // addUser(name, email, subject, budget, message);

    // document.getElementById("register-form").reset();

});
function addUser(name, email, subject, budget, message) {
    var key = email.toLowerCase();
    if (users.hasOwnProperty(key)) {
        alert("THE EMAIL IS EXSISTED ALREADY");
    } else {
        users[key] = [{ name: name, email: email, subject: subject, budget: budget, message: message }];
    }
}



// show users

function showUsers() {
    var table = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    table.innerHTML = "";

    for (var key in users) {
        if (users.hasOwnProperty(key)) {
            var user = users[key];
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = user.name;
            cell2.innerHTML = user.email;
            cell3.innerHTML = user.subject;
            cell4.innerHTML = user.budget;
            cell5.innerHTML = user.message;
        }
    };
}









