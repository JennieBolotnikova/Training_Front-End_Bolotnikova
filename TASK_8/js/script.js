let defaultURL = Function;
let update = updateDataEvent(3000);

(() => {
    setTimeout(() => {
        getFile('jennie_data1.json', 'container_1')
    }, 1000)
    setTimeout(() => {
        getFile('jennie_data2.json', 'container_2')
    }, 2000)
    setTimeout(() => {
        getFile('jennie_data3.json', 'container_3')
    }, 3000)
    document.getElementById('add-event-btn').addEventListener('click', () => {
        addEventToJsonFile()
    })
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'jennie_data1.json', 'container_1')
update(2000, 'jennie_data2.json', 'container_2')
update(3000, 'jennie_data3.json', 'container_3')

function addEventToJsonFile(){
    let event = createEvent()

    let fileName = document.getElementById('file-name-add').value.toString()
    const url = new URL(defaultURL(`files`))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'event' : event,
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('log').appendChild(createLog(response.msg, 'blue'))
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}

function getFile(fileName, divName){
    let url = new URL(defaultURL('getData'))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        var node = document.getElementById(divName);
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        if (response.events){
            response.events.forEach(element => {
                let rootEl = document.createElement('div')
      
                rootEl.innerHTML = element
                document.getElementById(divName).appendChild(rootEl)
            });
        }
        else{
            let rootEl = document.createElement('div')
            rootEl.innerHTML = response.events
            document.getElementById(divName).appendChild(rootEl)
        }
        document.getElementById('log').appendChild(createLog(response.msg, 'blue'))
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}

function convertToJSON(object){
    return JSON.stringify(object)
}

function convertToObjet(jsonObject){
    return JSON.parse(jsonObject)
}

function createURL(hostname){
    return function(pathname){
        return `http://${hostname}/${pathname}`
    }
}

function createLog(msg, color){
    let rootEl = document.createElement('div')
    rootEl.innerHTML = msg
    rootEl.style.color = color
    return rootEl
}

function updateDataEvent(interval){
    return function(timeout, fileName, contentId){
        setTimeout(() => {
            setInterval(() => {
                getFile(fileName, contentId)
            }, interval)
        }, timeout)
    }
}

function createEvent(){
    return {
        'date' : document.getElementById('add-date-event').value.toString(),
        'time' : document.getElementById('add-time-event').value.toString(),
        'name' : document.getElementById('add-name-event').value.toString(),
        'eventImportance' : document.getElementById('add-degreeImportance-event').value.toString(),
        'notes' : document.getElementById('add-nodes-event').value.toString(),
    }
}