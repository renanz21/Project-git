function validate(){
    var staffPassword = document.getElementById('staffAccess').value;

    //regex check to meet requirements
    var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    //if correct password page will hide login div and show up the menu with ranmdom users
    if (regx.test(staffPassword)){
        alert('You are now logged in (Sorry for putting alert but felt necessary)')
        document.getElementById('everything').style.display= "block"
        document.getElementById('loginScreen').style.display= "none"
    //if passowrd not correct display error message
    }
    else {
        document.getElementById('invalid').style.visibility= "visible"
    }
}

function getUsers(){
        //generation of random users limited to 5 users
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
                                        <td><b>Email : ${user.email}</b></td>
                                    </tr>
                                    <tr>
                                        <td><img src=${user.picture.large}></td>
                                    </tr>
                                    <tr>
                                        <td><b>Phone Number : ${user.phone} <br>   Cell number: ${user.cell}</b></td>
                                    </tr>
                                    <tr>
                                        <td><b>Age : ${user.dob.age}</b></td>
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
        //values to calculate total of items based on specific aspectes
        var total = 0;
        var totalMain = 0;
        var totalStarter = 0;
        var totalDessert = 0;
        var totalDrink = 0;
        var totalNonVeg  = 0;
        var totalVeg = 0;

        for (let i = 1; i <= total_items; i++) {
           itemID =document.getElementById("val_" + i);
           elCat = itemID.getAttribute("data-category"); //category checker
           elVeg = itemID.getAttribute("data-veg"); //vegetarian checker
           total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

           switch (elCat) {
               case "starter":

                    totalStarter = totalStarter + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                   
                   break;
                case "main":

                    totalMain = totalMain + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                   
                   break;
               case "dessert":

                    totalDessert = totalDessert + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                   
                   break;
                case "drink":

                    totalDrink = totalDrink + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                   
                   break; 

               default:
                   break;
           }

           //if/else to check wheter or not vegetarian price goes up
           if (elVeg == "Yes") {

            totalVeg = totalVeg + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
               
           } else {

            totalNonVeg = totalNonVeg + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
               
           }
            
        }
        //writing totals depending on vegetarian and categories
        document.getElementById('ItemsTotal').innerHTML = "???" + total;
        document.getElementById('StarterTotal').innerHTML = "???" + totalStarter;
        document.getElementById('MainTotal').innerHTML = "???" + totalMain;
        document.getElementById('DessertTotal').innerHTML = "???" + totalDessert;
        document.getElementById('DrinkTotal').innerHTML = "???" + totalDrink;
        document.getElementById('NonVegTotal').innerHTML = "???" + totalNonVeg;
        document.getElementById('VegTotal').innerHTML = "???" + totalVeg;
    }


   
