//Registros na memoria
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//registro em memoria um evento de click 
button.addEventListener('click', add)

//registro em memoria uma alterção change
form.addEventListener("change", save)


function add(){
      const today = new Date().toLocaleString('pt-br').slice(0, -5)
      const dayExists = nlwSetup.dayExists(today)

    
      if(dayExists){
       alert('Dia já incluso ❌')
        return
      }
    
      alert('Adicionado com sucesso ✅')
      nlwSetup.addDay(today)
   }

//guardando no localStorage
function save(){
   localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
   
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()


