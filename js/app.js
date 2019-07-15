function addHtmlTableRow()

{
    // for getting the table by id

    var table = document.getElementById('customers');


        // for creating the row
     var   newRow = table.insertRow(table.length);

        // for creating the cell 

     var   cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell3 = newRow.insertCell(3);
      
     // for getting the input by id 
        fname = document.getElementById('fname').value,
        
        lname = document.getElementById('lname').value,
        
        age = document.getElementById('age').value;

        des = document.getElementById('des').value;

        // now set the value
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        cell3.innerHTML = des;
        
}