function validate(){
    var staffPassword = document.getElementById('staffAccess').value;

    //regex check to meet requirements
    var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (regx.test(staffPassword)){
        document.getElementById('everything').style.display= "block"
        document.getElementById('loginScreen').style.display= "none"
    }
    else {
        document.getElementById('invalid').style.visibility= "visible"
    }
}

function getUsers(){
        fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
                let author = data.results;
                let output = ''
                console.log(data);
                author.forEach(function(user){
                    output += `
                    <div class="usersList">
                        <br><div id ="customer" class="customer">
                            <h1><strong>Customer ${user.name.title} ${user.name.first} ${user.name.last}</strong></h1>
                           
                                <table id="customerTable">
                                    <tr>
                                        <td>Email : ${user.email}</td>
                                    </tr>
                                    <tr>
                                        <td><img src=${user.picture.large}></td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number : ${user.phone} <br>   Cell number: ${user.cell}</td>
                                    </tr>
                                    <tr>
                                        <td>Age : ${user.dob.age}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    `;
                });
            document.getElementById('mainPage').innerHTML = output;
        })
    };

    
function totalBillCalc(){
        var total = 0;

        for (let i = 1; i <= total_items; i++) {
           itemID =document.getElementById("val_" + i);
           total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
            
        }
        document.getElementById('ItemsTotal').innerHTML = "€" + total;
    }

    
