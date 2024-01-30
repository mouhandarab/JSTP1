
notation(62)

function notation(note){
    if (note <= 100 && note >= 90) {
         console.log("A")
      } else if (note <= 90&& note >= 80) {
           console.log("b")
      }else if (note <= 80 && note >= 70) {
           console.log("c")
      }else if (note <= 70 && note >= 0) {
         console.log("la note d")
      }
}

localStorage.setItem("tt","dark")
console.log(localStorage.getItem("tt"));