const tracks = [{
        id: 1,
        Name: "rock",
        single: "./music/COCODY_ROCK.mp3"
    },
    {
        id: 2,
        Name: "Spear",
        single: "./music/Burning_spear_Identity.mp3",
    },
    {
        id: 3,
        Name: "Blames",
        single: "./music/CAN'T_BLAME_YOU.mp3"
    },
    {
        id: 4,
        Name: "Crazy",
        single: "./music/CRAZY_WORLD.mp3"
    },
    {
        id: 5,
        Name: "Crime",
        single: "./music/CRIME.mp3"
    },
    {
        id: 6,
        Name: "Know",
        single: "./music/HOW_WILL_I_KNOW.mp3"
    },
    {
        id: 7,
        Name: "Freedom",
        single: "./music/IS_THIS_FREEDOM.MP3"
    },
    {
        id: 8,
        Name: "Hope",
        single: "./music/Up_with_hope.MP3"
    },
    {
        id: 2,
        Name: "Spear",
        single: "./music/Burning_spear_Identity.mp3"
    },
    {
        id: 9,
        Name: "OneLove",
        single: "./music/One_love.mp3"
    },
    {
        id: 10,
        Name: "Respect",
        single: "./music/RESPECT.mp3"
    },
    {
        id: 11,
        Name: "Birds",
        single: "./music/THREE_LITLE_BIRDS.mp3"
    },
    {
        id: 12,
        Name: "Trinity",
        single: "./music/trinity.mp3"
    }
];
//TODO:WILL COMPLETE LATER

const start = document.querySelector(".start");
const player = document.getElementById("player");
const btnContainer = document.querySelector(".musicBtns")
const audio = document.getElementsByTagName("audio")[0]
const source = document.getElementById("play")
const score = document.getElementsByClassName("scores")[0]
const remark = document.getElementsByClassName("remark")[0]
const musicContain = document.querySelector(".musicContainer")
let buttons = btnContainer.querySelectorAll(".btns")
const rand = Math.floor(1 + Math.random() * 12)
let result = 0
let isPlaying = true;
let click = false;
let cont = true
let sum = +result


start.addEventListener("click", () => {
    click = true
    console.log(rand)
    if (!isPlaying) {
        play()
    } else {
        pause()
    }

})


function displayButtons(buttons) {
    let displayBtn = buttons.map((btn) => {
        return `<button class="flex btns" data-id="${btn.id}">${btn.id}-${btn.Name}</button>`;
    });
    displayBtn = displayBtn.join("")
    btnContainer.innerHTML = displayBtn;
}

function checkTracks(ids) {
    let buttons = btnContainer.querySelectorAll(".btns")
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let position = e.currentTarget.dataset.id;
            if (click == true) {
                if (position == tracks[ids].id) {
                    remark.textContent = "Congratulations, you have passed"
                    setTimeout(() => {
                        window.location.reload()
                    }, 5000)
                } else {
                    pause()
                    remark.textContent = "Pathetic,You failed"
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000)
                }
            } else {
                window.location.reload()
            }

        })
    })
}


function pause() {
    start.innerHTML = "Play"
    audio.pause();
    isPlaying = false;
}


function play() {
    playRandomtracks(rand)
    isPlaying = true;
    start.innerHTML = "Pause"
}

function playRandomtracks(trackIndex) {
    audio.src = tracks[trackIndex].single
    audio.load()
    audio.play()
}


window.addEventListener("DOMContentLoaded", () => {
    displayButtons(tracks)
    checkTracks(rand)
})