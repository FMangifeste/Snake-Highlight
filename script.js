var current = null
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause()
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  })
})

document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause()
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duratin: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  })
})

document.querySelector("#enviar").addEventListener("focus", function (e) {
  if (current) current.pause()
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duratin: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  })
})
