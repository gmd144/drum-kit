function animate(event) {
    var btn = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (btn !== null) {
        btn.currentTime = 0;
        btn.play();
        var item = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        var x = document.querySelectorAll(".playing");
        x.forEach(y => {
            y.classList.remove("playing");
        });
        item.classList.add("playing");
    }
}

function removeClass(event) {
    if (event.propertyName === "transform") {
        event.target.classList.remove("playing");
    }
    // else { console.log(event); }
}

window.addEventListener("keyup", animate);

window.addEventListener("transitionend", removeClass);