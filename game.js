let user_win_num=0
let com_win_num=0
let you_win = document.querySelector("#myAudio2")
let i_win = document.querySelector("#myAudio3")
let draw = document.querySelector("#myAudio4")
let my_s = document.getElementById("user_scoreid")
let com_s = document.getElementById("com_scoreid")
let com_move_box = document.getElementsByClassName("move_box")
my_s.disabled=true
com_s.disabled=true


function user_input_rock(){
    let comMove = com_move()
    if (comMove==="paper"){
        i_win.play()
        com_win_num++;
        com_s.setAttribute("value",com_win_num)
    }else if (comMove==="scissors"){
        you_win.play()
        user_win_num++;
        my_s.setAttribute("value",user_win_num)
    }else{
        draw.play()
    }
}
function user_input_paper(){
    let comMove =com_move()
    if (comMove==="rock"){
        you_win.play()
        user_win_num++;
        my_s.setAttribute("value",user_win_num)
    }else if (comMove==="scissors"){
        i_win.play()
        com_win_num++;
        com_s.setAttribute("value",com_win_num)
    }else{
        draw.play()
    }
}
function user_input_sic(){
    let comMove =com_move()
    if (comMove==="paper"){
        you_win.play()
        user_win_num++;
        my_s.setAttribute("value",user_win_num)
    }else if (comMove==="rock"){
        i_win.play()
        com_win_num++;
        com_s.setAttribute("value",com_win_num)
    }else{
        draw.play()
    }
}
function com_move(){
    var random = Math.floor(Math.random() * 1000);
    console.log(random)
    if (random % 2 === 0 && random % 5 !== 0) {
        com_move_box[0].innerHTML = '<div class="move_box" id="computerMoveBox"><img src="rock.png" alt="" class="rock_img"></div>'
        return "rock"
    }else if (random % 2 !== 0 && random % 5 !== 0){
        com_move_box[0].innerHTML = '<div class="move_box" id="computerMoveBox"><img src="paper.png" alt="" class="rock_img"></div>'
        return "paper"
    }else{
        com_move_box[0].innerHTML = '<div class="move_box" id="computerMoveBox"><img src="sci.png" alt="" class="rock_img"></div>'
        return "scissors"
    }
}
function welcome_play(){
    var x = document.getElementById("myAudio");
    x.play();
}
function welcome() {
    document.addEventListener("click", welcome_play, { once: true });
}
function setupPage() {
    document.getElementById("startModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("startModal").style.display = "none";
    welcome()
}

function startGame() {
    closeModal();
}