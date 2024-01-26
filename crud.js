const taskContainerList = document.querySelector('.app__section-task-list');

const taskForm = document.querySelector('.app__form-add-task')
const formToggle = document.querySelector('.app__button--add-task')
const lblForm = document.querySelector('.app__form-label')

const textArea = document.querySelector('.app__form-textarea')

const taskActiveDescription = document.querySelector('.app__section-active-task-description')

const formClose = document.querySelector('.app__form-footer__button--cancel')

const localStorageTask = localStorage.getItem('tarefas')

let tarefas = localStorageTask ? JSON.parse(localStorageTask) : []

const taskSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</svg>
`
let selectedTask = null
let selectedTaskItem = null

/* const selectedTask = () => {

} */

function taskCreation(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskSvg

    const tagP = document.createElement('p')
    tagP.classList.add('app__section-task-list-item-description')

    tagP.textContent = tarefa.descricao

    onclick = () => {
        selectTask(tarefa, li)
    }
    
    li.appendChild(svgIcon)
    li.appendChild(tagP)

    return li
}

tarefas.forEach(task => {
    const taskItem = taskCreation(task)
    taskContainerList.appendChild(taskItem)
})

formToggle.addEventListener('click', () => {
    lblForm.textContent = 'Adicionando tarefa'
    taskForm.classList.toggle('hidden') 
})

const localStorageUpdate = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

taskForm.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const task = {
        descricao: textArea.value,
        concluida: false
    }
    tarefas.push(task)
    const taskItem = taskCreation(task)
    taskContainerList.appendChild(taskItem)
    localStorageUpdate()
    textArea.value=''
    
})

formClose.addEventListener('click', () => {
    taskForm.classList.toggle('hidden') 
    textArea.value=''
    
})

/* localStorage.setItem('quantidade', 10)   localStorage.setItem( key, 10) */





