function addText () {
  var input = document.getElementById("input_value")
  var res = document.getElementById("res")
  var cont = document.createElement('div')
  var save = document.createElement('p')
  var chickBox = document.createElement('input')
  var child = document.createElement("input")
  var editBut = document.createElement("button")
  var button = document.createElement("button")
  var body = document.getElementById("body")
    if(input.value != ''){
      save.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>'
      button.innerHTML = `<i class="fas fa-trash-alt"></i>`
      editBut.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
      chickBox.setAttribute("type", "checkbox")
      child.value = input.value
      child.disabled = true
      cont.appendChild(save)
      cont.appendChild(chickBox)
      cont.appendChild(child)
      cont.appendChild(editBut)
      cont.appendChild(button)
      res.appendChild(cont)
      body.appendChild(res)
      save.style.display = 'none'
      input.value = ""
      save.classList = "saveStyle"
      chickBox.classList = "chickStyle"
      editBut.classList = "editStyle"
      child.classList = "childStyle"
      button.classList = "buttonStyle"
      cont.classList = "contStyle"
      editBut.addEventListener("click", edit)
      button.addEventListener("click", dele)
      chickBox.addEventListener("click", done)
      save.addEventListener("click", disTr)
    }
    function dele(){
      if (cont[0] === button[0]){
          res.removeChild(cont)
      }
    }
    function done(){
      if (cont[0] === chickBox[0]){
        child.classList.toggle("doneStyle")
        editBut.classList.toggle("doneStyle")
        chickBox.classList.toggle("doneStyle")
    }
    }
    function edit(){
      if (child[0] === editBut[0]) {
          child.disabled = false
          chickBox.style.display = 'none'
          save.style.display = 'flex'
      }
    }
    function disTr(){
          child.disabled = true
          chickBox.style.display = 'flex'
          save.style.display = 'none'
    }
}
