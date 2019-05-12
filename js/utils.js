var log = function() {
    console.log(console, arguments)
}

var q = function(e) {
    return document.querySelector(e)
}

var qa = function(e) {
    return document.querySelectorAll(e)
}

var toggle = function(name) {
    var show = q('.show')
    window.addEventListener('click', (e) => {
        log(e.target)
        if (show.classList.contains(name)) {
            show.classList.remove(name)
        } else {
            show.classList.add(name)
        }
    })
}

// <script src="../js/utils.js"></script>
// <script>
//     toggle('min-content')
// </script>