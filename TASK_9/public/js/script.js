async function getStudents() {
    const response = await fetch("/api/students", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {

        const students = await response.json();
        let rows = document.querySelector("tbody"); 
        students.forEach(student => {
            rows.append(row(student));
        });
    }
}

async function getStudent(id) {
    const response = await fetch("/api/students/" + id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const student = await response.json();
        const form = document.forms["studentForm"];
        form.elements["id"].value = student.id;
        form.elements["fistName"].value = student.fistName;
        form.elements["secondName"].value = student.secondName;
        form.elements["age"].value = student.age;
        form.elements["speciality"].value = student.speciality;
    }
}

async function createStudent(fistName, secondName, age, speciality) {
  
    const response = await fetch("api/students", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            fistName: fistName,
            secondName : secondName,
            age: parseInt(age, 10),
            speciality: speciality
        })
    });
    if (response.ok === true) {
        const student = await response.json();
        reset();
        document.querySelector("tbody").append(row(student));
    }
}

async function editStudent(studentId, studentFistName, studentSecondName, studentAge, studentSpeciality) {
    const response = await fetch("api/students", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            id: studentId,
            fistName: studentFistName,
            secondName : studentSecondName,
            age: parseInt(studentAge, 10),
            speciality: studentSpeciality
        })
    });
    if (response.ok === true) {
        const student = await response.json();
        reset();
        document.querySelector("tr[data-rowid='" + student.id + "']").replaceWith(row(student));
    }
}

async function deleteStudent(id) {
    const response = await fetch("/api/students/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const student = await response.json();
        document.querySelector("tr[data-rowid='" + student.id + "']").remove();
    }
}

function reset() {
    const form = document.forms["studentForm"];
    form.reset();
    form.elements["id"].value = 0;
}

function row(student) {
  
    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", student.id);

    const idTd = document.createElement("td");
    idTd.append(student.id);
    tr.append(idTd);

    const fistNameTd = document.createElement("td");
    fistNameTd.append(student.fistName);
    tr.append(fistNameTd);

    const secondNameTd = document.createElement("td");
    secondNameTd.append(student.secondName);
    tr.append(secondNameTd);

    const ageTd = document.createElement("td");
    ageTd.append(student.age);
    tr.append(ageTd);

    const specialityTd = document.createElement("td");
    specialityTd.append(student.speciality);
    tr.append(specialityTd);
      
    const linksTd = document.createElement("td");

    const editLink = document.createElement("a");
    editLink.setAttribute("data-id", student.id);
    editLink.setAttribute("style", "cursor:pointer;padding:15px;");
    editLink.append("Change");
    editLink.addEventListener("click", e => {

        e.preventDefault();
        getStudent(student.id);
    });
    linksTd.append(editLink);

    const removeLink = document.createElement("a");
    removeLink.setAttribute("data-id", student.id);
    removeLink.setAttribute("style", "cursor:pointer;padding:15px;");
    removeLink.append("Delete");
    removeLink.addEventListener("click", e => {

        e.preventDefault();
        deleteStudent(student.id);
    });

    linksTd.append(removeLink);
    tr.appendChild(linksTd);

    return tr;
}

document.getElementById("reset").click(function (e) {
  
    e.preventDefault();
    reset();
})

document.forms["studentForm"].addEventListener("submit", e => {
    e.preventDefault();
    const form = document.forms["studentForm"];
    const id = form.elements["id"].value;
    const fistName = form.elements["fistName"].value;
    const secondName = form.elements["secondName"].value;
    const age = form.elements["age"].value;
    const speciality = form.elements["speciality"].value;

    if (id == 0)
        createStudent(fistName, secondName, age, speciality);
    else
        editStudent(id, fistName, secondName, age, speciality);
});

// загрузка пользователей
getStudents();