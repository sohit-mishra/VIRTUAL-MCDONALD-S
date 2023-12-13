var img = document.querySelector("img");
var work = document.querySelector("p");
var orderid = document.querySelector("#top");

function order() {
    document.querySelector('button').disabled = true;
    var input = document.querySelectorAll("input[name='order']:checked");
    if (input.length != 0) {
        var bag = '';
        for (let x of input) {
            bag += x.value + ' , ';
        }

        if (input.length > 1) {
            var str = bag.slice(0, bag.length - 2);
            const lastIndex = str.lastIndexOf(',');
            const replacement = ' and ';
            const txt = bag.slice(0, lastIndex) + replacement + str.slice(lastIndex + 1, bag.length);

            work.textContent = txt + " is Prepare. Please wait a few seconds...";
        } else {
            console.log(bag.slice(0, bag.length - 2));
            work.textContent = bag.slice(0, bag.length - 2) + " is Prepare. Please wait a few seconds...";
        }
        img.src = 'img/prepare.svg';
        let myPromise1 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                var ImgParent = document.querySelector("#img");
                ImgParent.innerHTML = '';
                for (let x of input) {
                    var column = document.createElement('img');
                    column.src = 'img/' + x.id + '.svg';
                    ImgParent.append(column);
                }
                work.textContent = "Your Order is Complete!";
                orderid.style.display = 'block';
                orderid.textContent = "order Id:- " + Math.floor(Math.random() * 10000);
                document.querySelector('button').disabled = false;
            }, 2000);
        });

    } else {
        alert("Please Choose Any One Menu!");
    }

}