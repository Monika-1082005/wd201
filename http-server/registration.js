let userForm = document.getElementById("user-form");
const retrieveEntries = () => {
    let entries = localStorage.getItem("user");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];

    }
    return entries;
};
let Entries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries
        .map((entry) => {
            const nameCell = `<td class="border px-4 py-2">${entry.name}</td>`;
            const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
            const passwordCell = `<td class="border px-4 py-2">${entry.password}</td>`;
            const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
            const acceptTermsCell = `<td class="border px-4 py-2">${entry.acceptTermsandConditions}</td>`;

            const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell} </tr>`;
            return row;
        })
        .join("\n");

    const table = `<table class="table-auto w-full"><tr> 
<th class="px-2 py-2"> Name </th>
<th class="px-2 py-2"> Email </th>
<th class="px-2 py-2"> Password </th>
<th class="px-2 py-2"> DOB </th>
<th class="px-2 py-2"> Accepted terms? </th>
</tr>
${tableEntries}
</table>`;


    let details = document.getElementById("table-container");
    details.innerHTML = table;
};

window.onload = function () {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    dob.setAttribute("min", minDate.toISOString().split("T")[0]);
    dob.setAttribute("max", maxDate.toISOString().split("T")[0]);
}

const saveUserData = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTermsandConditions =
        document.getElementById("acceptTerms").checked;

    const userEntry = {
        name,
        email,
        password,
        dob,
        acceptTermsandConditions,
    };

    Entries.push(userEntry);
    localStorage.setItem("user", JSON.stringify(Entries));
    displayEntries();
};
userForm.addEventListener("submit", saveUserData);
displayEntries();
