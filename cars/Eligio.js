// Author: Arreola Eligio

let carImg = document.getElementById("car-img");
let name_container = document.getElementById("name_container");
let table_container = document.getElementById("specs_table");
let radio_buttons = document.getElementsByName("type");
let totop = document.getElementById("totop");
let table = document.getElementsByTagName('table');
let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let login_id = document.getElementById('login');
let signup_id = document.getElementById('signup_modal');
let signup_button = document.getElementById('signup');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let email = document.getElementById('email');

const auto_price = 2160000;
const manual_price = 2060000;

window.onscroll = function() {scrollFunction()};

//Handle the visibility of the button
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      totop.style.display = "block";
    } else {
      totop.style.display = "none";
    }
}

// Handle Scrolling
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Handle the name
function change(val) {
    carImg.src = val.id;
    
    //Conditional statement for name
    if (val.className == "black") {
        name = "Crystal Black Silica";
    }
    else if (val.className == "blue"){
        name = "Galaxy Blue Silica";
    }
    else if (val.className == "silver") {
        name = "Ice Silver Metallic";
    }
    else if (val.className == "orange") {
        name = "Orange Metallic";
    }
    else if (val.className == "red") {
        name = "Lightning Red";
    }
    else if (val.className == "brown") {
        name = "Wendy Brown"
    }
    else if (val.className == 'gray') {
        name = 'Dark Gray Metallic';
    }
    name_container.innerHTML = name;
}

// Generate Labels and tables onload or onchange
function specsTable() {
    var radio_id = get_id();
    var specs_data, specs_data_len, specs_data_keys;
    var auto = {"Dimensions & Capacity": {"Seating Capacity": "4 seats",
                                          "Fuel Tank Capacity (litres)" : "50 L",
                                          "Wheel Base": "2570 mm",
                                          "Front Tread": "1520 mm",
                                          "Rear Tread": "1540 mm",
                                          "No Of Doors": "2",
                                         }, //capacity end bracket

                "Engine Details": {"Engine": "2.0L Gasoline Engine, 4 Cylinder 16 Valve DOHC",
                                   "No Of Cylinders": "4",
                                   "Valves Per Cylinder": "4",
                                   "Valve Configuration": "DOHC",
                                   "Fuel Supply System": "Direct Injection",
                                   "Compression Ratio":  "12.5:1"
                                  },
                "Transmission": {"Transmission Type": "Automatic",
                                 "Gear Box": "6-speed" 
                                },//transmission end bracket
                "Performance": {"Engine Displacement": "1998 cc",
                                "Power": "197 hp",
                                "Torque": "205 Nm",
                                "Fuel Type": "Gasoline"
                               },//performance end bracket
                "Suspension & Brakes": {"Front Suspension": "MacPherson Strut",
                                        "Rear Suspension": "Double Wishbone",
                                       },
                "Wheel & Tyre": {"Alloy Wheel Size": "17 Inch",
                                 "Tyre Size": "215/45 R17",
                                 "Tyre Type": "Radial",
                                 "Wheel Size": "R17"
                                }, //Wheel end bracket  
                "Steering": {"Steering Type": "Electric Power",
                             "Steering Column": "Tilt & Telescopic",
                             "Steering Gear Type": "Rack & Pinion",
                             "Adjustable Steering Column": "Yes"
                            }, //Steering end bracket         
            }; // main bracket

            var manual = {"Dimensions & Capacity": {"Seating Capacity": "4 seats",
                                                  "Fuel Tank Capacity (litres)" : "50 L",
                                                  "Wheel Base": "2570 mm",
                                                  "Front Tread": "1520 mm",
                                                  "Rear Tread": "1540 mm",
                                                  "No Of Doors": "2",
                                                }, //capacity end bracket

                        "Engine Details": {"Engine": "2.0L Gasoline Engine, 4 Cylinder 16 Valve DOHC",
                                           "No Of Cylinders": "4",
                                           "Valves Per Cylinder": "4",
                                           "Valve Configuration": "DOHC",
                                           "Fuel Supply System": "Direct Injection",
                                           "Compression Ratio":  "12.5:1"
                                          },
                        "Transmission": {"Transmission Type": "Manual",
                                         "Gear Box": "6-speed" 
                                        },//transmission end bracket
                        "Performance": {"Engine Displacement": "1998 cc",
                                        "Power": "197 hp",
                                        "Torque": "205 Nm",
                                        "Fuel Type": "Gasoline"
                                        },//performance end bracket
                        "Suspension & Brakes": {"Front Suspension": "MacPherson Strut",
                                                "Rear Suspension": "Double Wishbone",
                                                },
                        "Wheel & Tyre": {"Alloy Wheel Size": "17 Inch",
                                         "Tyre Size": "215/45 R17",
                                         "Tyre Type": "Radial",
                                         "Wheel Size": "R17"
                                        }, //Wheel end bracket  
                        "Steering": {"Steering Type": "Electric Power",
                                     "Steering Column": "Tilt & Telescopic",
                                     "Steering Gear Type": "Rack & Pinion",
                                     "Adjustable Steering Column": "Yes"
                                    } //Steering end bracket          
            }; // main bracket
    
    if (radio_id != "auto") {
        deleteNode();
        console.log(radio_id);
        specs_data = manual;
        specs_data_keys = Object.keys(auto);
        specs_data_len = specs_data_keys.length;
        price.value = quantity.value * manual_price;
        
    }
    else{
        deleteNode();
        console.log(radio_id);
        specs_data = auto;
        specs_data_keys = Object.keys(manual);
        specs_data_len = specs_data_keys.length;
        price.value = quantity.value * auto_price;
    }
    /*
        Per table have a label
        Get key as label
        Per Label Get values to generate table
    */
    console.log(price)
    //Handles the generation of labels and tables
    for(var label_iter = 0; label_iter < specs_data_len; label_iter++) {
        var label_element = document.createElement("h3");
        var table_element = document.createElement("table");
        var br = document.createElement("br");
        var text = document.createTextNode(specs_data_keys[label_iter]);
        var data = Object.keys(specs_data[specs_data_keys[label_iter]]);
        
        // create label
        table_element.setAttribute("id", "table_" + label_iter.toString);
        label_element.appendChild(text);
        table_container.appendChild(label_element);

        
        // insert data to table
        for(var table_iter = 0; table_iter < data.length; table_iter++){
            var tr_element = document.createElement('tr');
            var td_key = document.createElement('td');
            var td_value = document.createElement('td');
            var label = document.createTextNode(data[table_iter]);
            var value = document.createTextNode(specs_data[specs_data_keys[label_iter]][data[table_iter]]);

            td_key.appendChild(label);
            td_key.setAttribute("style", "background-color:#e64900;color:#ffffff;")
            td_value.appendChild(value)
            tr_element.appendChild(td_key);
            tr_element.appendChild(td_value)
            table_element.appendChild(tr_element);
        }
        table_container.appendChild(table_element);
        table_container.appendChild(br);

    }//end of first for statement

    // refresh parent element for tables
    function deleteNode() {
        while (table_container.hasChildNodes()) {
           table_container.removeChild(table_container.firstChild);
        }
    }
}

// get radion buton id
function get_id() {
    for (var iter = 0, len = radio_buttons.length; iter < len; iter++){
        if(radio_buttons[iter].checked){
            return radio_buttons[iter].id
        }
    }
}

function compute_price() {
    var total_price, amount_per_car;
    var radio_id = get_id();

    if(radio_id == "auto"){
        amount_per_car = auto_price;
    }
    else{
        amount_per_car = manual_price;
    }

    total_price = quantity.value * amount_per_car;
    console.log(price);
    console.log(quantity.value);
    price.value = total_price.toString();
    console.log(price);
}

function loginModal() {
    signup_id.style.display = "none";
    if(login_id.style.display == ""){
        login_id.style.display = "block";
    }
    else if(login_id.style.display == "none"){
        login_id.style.display = "block";
    }
    else if (login_id.style.display == 'block'){
        login_id.style.display = "none";
    }
    console.log("Current state: " + login_id.style.display.toString());
    
}

function signupModal(){
    login_id.style.display = 'none';
    console.log("Singup is pressed!");
    if(signup_id.style.display == ""){
        signup_id.style.display = "block";
    }
    else if(signup_id.style.display == "none"){
        signup_id.style.display = "block";
    }
    else if (signup_id.style.display == 'block'){
        signup_id.style.display = "none";
    }
    console.log("Current state: " + login_id.style.display.toString());
}
