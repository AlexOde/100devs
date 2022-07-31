const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: 'Major Emperor the firth',
            quote: 'I am the Emperor Major the fourth... No, wait...'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(res => {
        window.location.reload()
    })
})
const messageDiv = document.querySelector('#message')
const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Major Emperor the firth'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        if (response === 'No quote to delete') {
            messageDiv.textContent = 'No quotes to remove. Look before hitting buttons, sicko'
        } else {
            window.location.reload()
        }
    })
})

