let manrecord = [];
let isEdit = -1;

const deletietm = (value) => {
    console.log("delet");
    manrecord.splice(value, 1);
    console.log(manrecord);
    renderHtmlTable();
}

const edititem = (editer) => {
    isEdit = editer;
    console.log("edit");
    let type = manrecord.find((record, index) => index === editer);
    console.log(type);

    document.getElementById("fname").value = type.fname
}

const renderHtmlTable = () => {
    document.getElementById("tabledata").innerHTML = manrecord.map((item, index) => `<tr>
<td>${item.fname}</td>
<td>${item.lname}</td>
<td>${item.password}</td>
<td><button onclick="deletietm(${index})">DELET</button>
<td><button onclick="edititem(${index})">EDIT</button>
</tr>`).join("")
}

function myfunction() {
    window.alert("megha");
    console.log("hi dear");

    let demo1 = document.getElementById("fname").value;
    console.log("fname:", demo1);
    let demo2 = document.getElementById("laname").value;
    console.log("laname:", demo2);
    let demo3 = document.getElementById("password").value;
    console.log("password:", demo3);
    let demo4 = document.getElementById("email").value;
    console.log("email:", demo4);
    let demo5 = document.getElementById("color").value;
    console.log("color:", demo5);
    let demo6 = document.getElementById("Female").value;
    console.log("Female:", demo6);
    let demo7 = document.getElementById("dob").value;
    console.log("dob:", demo7);
    let demo8 = document.getElementById("time").value;
    console.log("time:", demo8);

    let peopledata = { fname: demo1, lname: demo2, password: demo3, email: demo4, color: demo5, Female: demo6, dob: demo7, time: demo8 };
    console.log(peopledata);

    if (isEdit !== -1) {
        const updatedArray = manrecord.map((item, index) => {
            if (index === isEdit)
                return peopledata
            else return item
        })
        manrecord = updatedArray
        renderHtmlTable();
        console.log(updatedArray);
    }
    else {
        manrecord.push(peopledata);
    }
    renderHtmlTable();
}
