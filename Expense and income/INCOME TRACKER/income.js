
let income_per_category = [0, 0, 0, 0, 0];
let count = 4;
let t=[];
i=0
update_sum();
 
function update_sum() {
  let sum = document.querySelectorAll(".sum");
  for (let i = 0; i < sum.length; i++) {
    sum[i].innerHTML = ` - ${income_per_category[i]} Rs. spent`;
  }
}


function add_income() {
  let amt = document.getElementsByClassName("form-input")[0].value;
  let date = document.getElementsByClassName("form-input")[2].value;
  let note = document.getElementsByClassName("form-input")[3].value;
  let category=document.getElementsByClassName("form-input")[1].selectedIndex;
  let selected = document.getElementsByTagName("option")[category].value;
  i=i+1
  t.push(Number(amt));
    if (amt && date && note && selected) {
    alert("Successfully added income");
    let table = document.getElementsByTagName("table")[0];
    let new_row = document.createElement("tr");
    new_row.innerHTML = `
      <tr style="border-bottom: 1px solid white;">
        <td>${i}</td>
        <td>${amt}</td>
        <td>${selected}</td>
        <td>${date}</td>
        <td>${note}</td>
      </tr>`;
    table.appendChild(new_row);
    income_per_category[category] += parseInt(amt);
    update_sum();
    document.getElementsByClassName("add-new-income")[0].style.display = "none";
    let sum=0
    t.forEach( num => {
  sum += Number(num);
})

   

    let tt=document.getElementsByClassName("tot")[0];
    let aa=document.createElement("span");
    aa.innerHTML=`<span>${sum}</span>`;
    tt.innerHTML=""
    tt.appendChild(aa);

  } else {
    alert("Please enter all details!");

  }
  formtoreset=document.getElementById("f1")
  formtoreset.reset();

}


function add_category() {
  let new_category_value = document.getElementsByName("new-category")[0].value;
  if (new_category_value) {
    let dropdown = document.getElementsByName("category")[0];
    let available_categories = document.getElementsByClassName("available-categories")[0];
    let new_category_option = document.createElement("option");
    new_category_option.innerHTML = `<option>${new_category_value}</option>`;
    count++;
    income_per_category[count] = 0;
    let new_category_span = document.createElement("span");
    new_category_span.innerHTML = `
      <span>${new_category_value}<span class="sum"> - ${income_per_category[count]} Rs spent</span></span>`;
    dropdown.appendChild(new_category_option);
    available_categories.appendChild(new_category_span);
    document.getElementsByClassName("add-category")[0].style.display = "none";


   
      }
   formtoreset=document.getElementById("f2")
  formtoreset.reset();
}



function add_income_page() {
  let addNewIncome = document.getElementsByClassName("add-new-income")[0];
  if (addNewIncome.style.display === "block") {
    addNewIncome.style.display = "none";
  } else {
    addNewIncome.style.display = "block";
  }
}


function add_category_page() {
	// body...
	if(document.getElementsByClassName("add-category")[0].style.display=="block"){
		document.getElementsByClassName("add-category")[0].style.display=="none";
	}
else{
	document.getElementsByClassName("add-category")[0].style.display="block";
}}


 function ExportToExcel(type, fn, dl) {
            var elt = document.getElementById('tab');
            var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
            return dl ?
                XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
                XLSX.writeFile(wb, fn || ('MyIncome.' + (type || 'xlsx')));
        }
