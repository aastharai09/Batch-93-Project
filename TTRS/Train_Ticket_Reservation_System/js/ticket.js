
var train={no:"",na:"",so:"",de:"",fa:""};
pa ="<table align=center><tr><th>Sr no</th><th>Name</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
var date;
var pacd;
var tt_fa=0;
var p_c=0;
var PNR="";
var count=100;
ticket="";
var d_tt="";



function get_train(){
   var tr=document.getElementById("tr_no").value;
    date=document.getElementById("da_te").value;
    // var d=new Date();
    // var date1=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear(); 
   console.log(date);
//    console.log(date1);
   if (date=="") {
       alert("Choose Travel date")
//    }else if(date1>date){
//        alert("Travel date is before current date");
   }
//    }
   else{

   console.log(tr)

   let url='http://localhost:9191/api/train/' + tr;

    let fr=fetch(url,{method: 'GET'})
    fr.then(function (response) {
       return response.json();
   })
   .then(data => {
       console.log("success")
       append(data);    
   })

   function append(data) {
           
      train.no=data.trainNo;
      train.na=data.trainName;
      train.so=data.source;
      train.de=data.destination;
      train.fa=data.ticketPrice;
     
      console.log(train);
         
               table="<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>FARE</th></tr>";
              
                   table+="<tr><td>"+data.trainNo+"</td><td>"+data.trainName+"</td><td>"+data.source+"</td><td>"+data.destination+"</td><td>"+data.ticketPrice+"</td></tr>";
               table+="</table>"
              add1();
               document.getElementById("trdata").innerHTML=table;

   }  
   
   }

}

function add1() {
   d_tt+="Train Number &emsp;&emsp;&ensp;:"+train.no+"<br>"
   d_tt+="Train Name &ensp;&nbsp;:"+train.na+"<br>"
   d_tt+="From &emsp;&emsp;&ensp;:"+train.so+"<br>"
   d_tt+="To &emsp;&emsp;&emsp:&ensp;"+train.de+"<br>"
   d_tt+="Date &emsp;&emsp;&ensp:"+date+"<br><br>"
}

var pd_tt="Sr.no &ensp; Name  Age &emsp; Gender &emsp; Fare"


function add_pa() 
{

  if (train.no=="") {
       alert("Choose Train");
   }
   else
   { 
       tab="<table align=center id='pa_t'><tr><th>Sr No</th><th>Name</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
           var pac=document.getElementById("pa_no").value;
           var p_fa=train.fa;
           pacd=parseInt(pac);
           if (pacd>p_c) {
               p_c++;
               p_na=document.getElementById("pa_na").value.toUpperCase();
               var p_nas=p_na;
               var l=p_na.length;
               console.log(l);
               
               for (let index = 0; index < 24-l; index++) {
                  p_nas+="&nbsp;";
                  console.log(index);
                   
               }
               p_ag=parseInt(document.getElementById("pa_ag").value);
               p_gn=(document.getElementById("pa_gn").value).toUpperCase();
               
               if (p_ag<=12) {
                   p_fa=p_fa*50/100; 
               }else if (p_ag>60) {
                   p_fa=p_fa*60/100;
               }

               if (p_gn=='F') {
                   p_fa=p_fa*75/100;
                   
               }


               tt_fa +=p_fa;
               tab+="<tr> <td>"+ p_c +"</td><<td>"+p_na+"</td><td>"+p_ag +"</td><td>"+p_gn+"</td> <td>"+p_fa+"</td></tr>";
               pa+="<tr> <td>"+ p_c +"</td><<td>"+p_na+"</td><td>"+p_ag +"</td><td>"+p_gn+"</td> <td>"+p_fa+"</td></tr>";
               tab+="</table>"
               pd_tt+="<br>"+p_c+" &emsp; &emsp;"+p_nas+" &emsp; &emsp; "+p_ag+" &emsp; &emsp;"+p_gn+" &emsp; &ensp;"+p_fa;
           console.log(p_c);
           console.log(p_na);
           console.log(p_ag);
           console.log(p_gn);
           console.log(p_fa);
                if (p_c==pacd) {
                   console.log(tt_fa);
                    show_pa();
                   }
                   else{
                   document.getElementById("padata").innerHTML=tab;
                   }
      
            }
            else{
               alert(pacd +" passengers added sucessfully");
               
            }
    }
}

function show_pa() {
   tab+="</table>"
               document.getElementById("padata").innerHTML=pa;
}


function book_ticket() {

        if (p_c==pacd) {
       PNR=get_pnr();
       console.log("pnr ="+PNR);
       ticket="PNR : "+PNR+"<br>"
       ticket+="Train Number : "+train.no+"<br>Train Name : "+train.na+"<br>From : "+train.so+"<br>To : "+train.de+"<br>Date : "+date;
       ticket+="<br>"+pd_tt;
       ticket+="<br> <br> Total Fare = "+tt_fa;
           console.log(ticket);
       document.getElementById("tcdata").innerHTML=ticket;

       } 
       else{
           alert("add passenger")
       }

 
}


function get_pnr() {
   var pnr=train.so.charAt(0);
   pnr+=train.de.charAt(0);
   pnr+=date;
   pnr+=count;
   count++;

return pnr;
}

function download_ticket()
{   if (PNR=="") {
   alert("No Dta found");
  }
  else
  {
   var text =ticket;
   var filename = PNR+".txt";
   
   download(filename, text);
  }

}


function download(filename, text) {
   var element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);
 
   element.style.display = 'none';
   document.body.appendChild(element);
 
   element.click();
 
   document.body.removeChild(element);
 }


  
