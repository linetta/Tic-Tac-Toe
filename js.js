    window.onload = function () {
    for (let i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }

    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    let step = 0;
    let isEnded = false;
    let player = "X";
    document.getElementById('game').onclick = function (event) {
        console.log(event);
        if (isEnded !== false)
            return;
        if (event.target.className === 'block') {
            if (event.target.innerHTML === "") {
                event.target.innerHTML = player;
                checkWin(player);
            }
        }
    };
        function checkWin(curPlayer) {

            const w = document.getElementsByClassName('block');

            for (let i in wins) {
                if (w[wins[i][0]].innerHTML === curPlayer
                    && w[wins[i][1]].innerHTML === curPlayer
                    && w[wins[i][2]].innerHTML === curPlayer) {
                    w[wins[i][0]].id = 'w';
                    w[wins[i][1]].id = 'w';
                    w[wins[i][2]].id = 'w';

                    message.innerText = 'Победил игрок ' + curPlayer ;
                    isEnded = true;
                    return;
                }
            }
            player === "X" ? (player = "0") : (player = "X");
            ++step === 9 ? (message.innerText = 'Ничья', isEnded = true) : (message.innerText = 'Очередь игрока ' + player );



            newGame.addEventListener("click", function () {
                for (let i = 0; i < w.length; i++) {
                    w[i].innerText = "";
                    w[i].removeAttribute('id');
                    isEnded = false;
                    step = 0;
                    player = "X";
                    message.innerText = 'Очередь игрока ' + player
                }
            });
        }


    };
