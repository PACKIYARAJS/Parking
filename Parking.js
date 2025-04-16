class parking{
 
    Entry(){

        
        var s1 = document.getElementById("slot1");
        var s2 = document.getElementById("slot2");
        var s3 = document.getElementById("slot3");
        var s4 = document.getElementById("slot4");
        var s5 = document.getElementById("slot5");
        var s6 = document.getElementById("slot6");
        var s7 = document.getElementById("slot7");
        var s8 = document.getElementById("slot8");
        var s9 = document.getElementById("slot9");
        var s10 = document.getElementById("slot10")    
        
        var slots = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];

        var carnum = document.getElementById("carnum").value;

        var slotnum = document.getElementById("slotnum").value;

        

        if(carnum == ""){

            alert("Kindly Enter the Car Number");

            return;

        }

        if(slotnum <1 || slotnum >10){

            alert("Kindly Enter the slot between 1 to 10");

            return;

        }

        var slotval = slots[slotnum-1];

        if(slotval.style.backgroundColor=="green"){

            alert("This Slot already occupied by " + slotval.textContent);

            return;

        }


        for(var slot = 0; slot<slots.length; slot++)
        {
            if(slots[slot].textContent == carnum){

                alert("This car already in parking area");

                return;

            }
        }

        slotval.style.backgroundColor = "green";

        slotval.textContent = carnum;

        slotval.style.display= "flex";

        slotval.style.justifyContent = "center";

        slotval.style.alignItems = "center";

        slotval.style.fontSize = "15px";

        slotval.style.color = "white";

        slotval.style.overflow = "hidden";


    }

    Exit(){

        var carnum = document.getElementById("carnum1").value;

        
        var s1 = document.getElementById("slot1");
        var s2 = document.getElementById("slot2");
        var s3 = document.getElementById("slot3");
        var s4 = document.getElementById("slot4");
        var s5 = document.getElementById("slot5");
        var s6 = document.getElementById("slot6");
        var s7 = document.getElementById("slot7");
        var s8 = document.getElementById("slot8");
        var s9 = document.getElementById("slot9");
        var s10 = document.getElementById("slot10")    
        
        this.slots = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
        
        if(!carnum){

            alert("Kindly Enter the Car Number");

            return;

        }

        var slots = false; 

        for(var slot = 0; slot <this.slots.length; slot++){

            if(this.slots[slot].textContent == carnum){

                this.slots[slot].style.backgroundColor = "";

                this.slots[slot].textContent = "";

                alert("Car has exited from slot "+(slot+1));

                slots = true;

                break;

            }

        }

        if(!slots){

            alert(carnum +" this car not here");

            return;

        }
    }

}

var carParking = new parking();