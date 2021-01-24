// * DINO ======================= *
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
//var created to check is is Dino jumping or not
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode == 32) {
        //This IF checks if the Dino is jumping or not
        if (!isJumping) {
            jump()
        }

    }
}

function jump() {
    isJumping = true;
    //this code it'll be used each 20ms
    let upInterval = setInterval(() => {

        if (position >= 150) {
            clearInterval(upInterval)

            // down
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);

                    isJumping = false; //if DIno is down cannot jump

                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }

            }, 20)
        } else {
            //subindo
            position += 20 // position = position + 20
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

// * CATUS ======================= *
function createCactus() {
    //This line it'll create a new div on html using JS
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    // to generate a random number for create random cactus
    let randomTime = Math.random() * 6000;

    console.log(randomTime)

    //adding a class on html by js
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        // Se o cactus sair da tela limpa para criar outro logo apos
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
// this line watch if the dino touched the cactus or not
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // GAME OVER ======
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">GAME OVER</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keyup', handleKeyUp)