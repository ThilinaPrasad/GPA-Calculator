/**
 * Created by Thilina Prasad on 3/23/2017.
 */
var $semSelectDD = document.getElementById("semDD");                // Semester select DD
var $depSelectDD = document.getElementById("depDD");                // department select DD
var $hiddenTable = document.getElementById("hiddenTable");          // hidden table
var $oldGPA = document.getElementById("olderGPA");                  // older GPA text box
var $calc  = document.getElementById("calcBtn");                    // cal button
var $rst = document.getElementById("resetBtn");                     // reset button
var $subGrade= document.getElementsByClassName('grade');            // subject grade drop downs
var $subjects = document.getElementsByClassName('subs');            //subjects divs
var $modCodes = document.getElementsByClassName('modCode');         // module code divs
var $modCredits = document.getElementsByClassName('modCredit');         // Module credit  divs
var $rows = document.getElementsByClassName('subRow');              // Module credit  divs
var $func = document.getElementById("functional");                // Semester select DD
var $displayedItems = 0;

/*semester Drop Down On Change things here*/
function semDDOnChange(){
    fillSubjects();
    semesterDDStyle();
    showElement($oldGPA);
    showElement($calc);
    showElement($rst);
    gradeReset();
    document.getElementById('results').style.opacity = '0';
    if($semSelectDD.selectedIndex==1){
        document.getElementById('tableMaintitle').innerText='Enter Your Module Grades below';
        hideElement($depSelectDD);
        $oldGPA.style.visibility='hidden';
        showElement($hiddenTable);
        $hiddenTable.style.display='table';
        $func.style.opacity = '1';
    }else{
        showElement($depSelectDD);
        $oldGPA.style.visibility='visible';
        if($depSelectDD.selectedIndex==0) {
            document.getElementById('tableMaintitle').innerText = 'Select Your Department !';
            $hiddenTable.style.display='none';
            $func.style.opacity = '0';
        }
    }
}

/*department Drop Down On Change things here*/
function depDDOnChange(){
    fillSubjects();
    gradeReset();
    showElement($hiddenTable);
    document.getElementById('tableMaintitle').innerText='Enter Your Module Grades below';
    $hiddenTable.style.display='table';
    $func.style.opacity = '1';
    document.getElementById('results').style.opacity = '0';
}

/*test Function*/
function sem(){
        alert((parseFloat($modCredits[0].innerHTML)*parseFloat($subGrade[0].value)).toString());
}

/* hide elements from web*/
function hideElement($temp) {
    $temp.style.visibility = "hidden";
}

/*show elements in web*/
function showElement($temp) {
    $temp.style.visibility = "visible";
}

/*semester selection style*/
function semesterDDStyle() {
    document.getElementsByClassName('semdepSelect')[0].style.left = '0';
    document.getElementsByClassName('wrapper')[0].style.height='auto';
    document.getElementById('tableMaintitle').style.visibility = 'visible';
    $semSelectDD.style.margin = 'auto';
    $semSelectDD.style.marginTop = "40%";
    $depSelectDD.style.marginTop = "20%";
    $semSelectDD.style.backgroundColor = 'white';
    $semSelectDD.style.width = 'auto';
    $semSelectDD.style.height= '30px';
    $semSelectDD.style.borderRadius= '5px';
    $semSelectDD.style.color= '#800000';
    $semSelectDD.style.borderColor= '#800000';
    $semSelectDD.style.borderWidth= '3px';
    $semSelectDD.style.fontWeight= '700';
    $semSelectDD.style.fontSize='12.5px';
    $semSelectDD.style.padding='0';
}

/*add Subject for field*/
function showSubject($row,$modCodeField,$subFieldName,$modCreditField,$gradeName,$modCod,$subjectName,$credit){
    $row.style.display='table-row';
    $modCodeField.innerText = $modCod;
    $subFieldName.innerText = $subjectName;
    $modCreditField.innerText= $credit;
    $modCodeField.style.visibility= 'visible';
    $subFieldName.style.visibility = 'visible';
    $modCreditField.style.visibility='visible';
    $gradeName.style.visibility = 'visible';
}

/*remove field from web*/
function hideSubject($row){
    $row.style.display='none';
}

/*data filling logic*/
function fillDataLogic($modCodeData,$subsData,$creditsData){
    $displayedItems = 0;
    for(var i=0;i<$subsData.length;i++){
        showSubject($rows[i],$modCodes[i],$subjects[i],$modCredits[i],$subGrade[i],$modCodeData[i],$subsData[i],$creditsData[i]);
        $displayedItems++;
    }
    for(var j=0;j<=(29-$subsData.length);j++){
        hideSubject($rows[29-j]);
    }
}

/*fill subjects wise */
function fillSubjects() {
    var $sem = $semSelectDD.selectedIndex;
    var $dep = $depSelectDD.selectedIndex;
    if($sem==1){
        var $modCodeData = ['MA1013','CS1032','ME1032','MT1022','CE1022','EE1012','EL1012'];
        var $subsData = ['Mathematics' , 'Programming Fundamentals','Mechanics',"Properties of Materials","Fluid Mechanics","Electrical Engineering","Language Skill Enhancement I"];
        var $creditsData =['3.0','3.0','2.0','2.0','2.0','2.0','1.0'];
        fillDataLogic($modCodeData,$subsData,$creditsData);
        $func.style.opacity = '1';
    }else {
        switch ($dep) {
            case 0:
                break;
            case 1:
                entc($sem);
                break;
            case 2:
                cse($sem);
                break;
            case 3:
                ee($sem);
                break;
            case 4:
                ce($sem);
                break;
            case 5:
                me($sem);
                break;
            case 6:
                ch($sem);
                break;
            case 7:
                ma($sem);
                break;
            case 8:
                tm($sem);
                break;
            case 9:
                em($sem);
                break;
            case 10:
                tlm($sem);
                break;
        }
    }
}

/*Reset the grade drop downs*/
function gradeReset(){
    for(var i=0;i<12;i++){
        $subGrade[i].selectedIndex = 0;
    }
}



/* >>>>>>>>>>>>>>>>>>departments Subject Details<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

/*Electronic & Telecommunications Engineering */
var $modCodeData;
var $subsData;
var $creditsData;
function entc($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Computer Science & Engineering */
function cse($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:
            /*semester 2 Subjects*/
            $modCodeData = ['CS2012','CS2022','CS2052','EN1012','MA1032','EE2093','CS2952','ME1802'];
            $subsData = ["Principal of Object Oriented Programming" ,'Data Structures & Algorithms', "Computer Architecture","Electronic Devices & Circuits","Numerical Methods for Computer Science","Theory of Electricity","Communication Skills","Introduction to Manufacturing Engineering"];
            $creditsData =['3.0','2.5','3.0','2.0','3.0','2.0','1.5','2.5'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            $modCodeData = ['CS2032','CS2042','CS2062','EN2022','CE1822','ME1822','CS2150','MA2073'];
            $subsData = ["Principle of Computer Communication","Operating Systems","Object Oriented Software Development","Digital Electronics","Aspect of Civil Engineering","Basic Engineering Thermodynamics","Graph Theory for Computing","Calculus for System Modeling"];
            $creditsData =['3.0','2.5','3.0','2.5','2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            $modCodeData = ['CS3022','CS3032','CS3042','MA2033','MA2063','EN2062','DE1XXX'];
            $subsData = ["Software Engineering","Computer Networks","Database Systems","Linear Algebra","Differential Equations & Applications","Signals & Systems","Humanities Elective I"];
            $creditsData =['3.0','3.0','3.0','2.0','2.0','2.5','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 5:
            /*semester 5 Subjects*/
            $modCodeData = ['CS3202','CS3052','CS3062','CS3242','MN3042','MA3013','CS3212','CS3412','CS3512','CS3612','CS3712'];
            $subsData = ["Software Engineering Project","Computer Security","Theory of Computing","Micro-Controllers & Applications","Business Economics & Financial Accounting","Applied Statistics","Software Architecture & Design","Advanced Networking","Programming Languages","Intelligent Systems","Image Processing"];
            $creditsData =['2.0','2.0','2.0','3.0','3.0','2.0','3.0','3.0','3.0','3.0','3.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Electrical Engineering*/
function ee($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:
            /*semester 2 Subjects*/
            $modCodeData = ['MA1023','EE2093','EN1802','EN1052','CS2812','CS2842','ME1802','ME1100','EE1193','EL1022','DE1XXX','MN1030'];
            $subsData = ['Methods of Mathematics','Theory of Electricity','Basic Electronics','Introduction to Telecommunication','Visual Programming','Computer Systems','Introduction to Manufacturing Engineering','Mechanics Of Materials I','Laboratory Practice I','Language Skill Enhancement II','Humanities Elective I','Entrepreneurship Skill Development'];
            $creditsData =['3.0','2.0','2.0','2.0','2.0','2.0','2.5','2.0','1.0','1.0','2.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            $modCodeData = ['MA2013','MA2023','EE2043','EE2063','EN2012','EN2022','CE1822','EE2183','EE1953','EE1963','MN1030'];
            $subsData = ['Differential Equations','Calculus','Electrical Measurement and Instrumentation','Electromagnetic Field Theory','Analog Electronics','Digital Electronics','Aspects of Civil Engineering','Laboratory Practice II','Engineering Design','Engineering Skill Development','Entrepreneurship Skill Development'];
            $creditsData =['2.0','2.0','2.0','2.0','2.5','2.5','2.0','1.0','1.5','1.5','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            $modCodeData = ['MA2033','MA2053','EE2013','EE2023','EE2033','EE2193','ME2842','EE3203','EE3953','DE2XXX','MN2010'];
            $subsData = ['Linear Algebra','Graph Theory','Circuit Theory','Electrical Machines & Drivers','Power Systems I','Laboratory Practice III','Basic Thermal Science & Applications','Individual Project','Communication and Presentation Skills','Humanities Electives II','Entrepreneurial Leadership'];
            $creditsData =['2.0','2.0','2.0','2.0','2.0','1.0','3.0','2.0','1.5','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 5:
            /*semester 5 Subjects*/
            $modCodeData = ['MA3013','MA3023','MN3042','MN3052','EE2053','EE3073','EE2073','EE2083','EE3183','MN3010'];
            $subsData = ['Applied Statistics','Numerical Methods','Business Economics & Financial Accounting','Industrial Management & Marketing','Control Systems I','Electrical Installations I','Electrical Machines Drivers II','Power Systems II','Laboratory Practice IV','Multidisciplinary Design, Innovation & Venture Creation'];
            $creditsData =['2.0','2.0','3.0','3.0','2.0','2.0','2.0','2.0','1.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 6:
            /*semester 6 Subjects*/
            $modCodeData = ['EE3063','EE4013','EE4033','EE4073'];
            $subsData = ['Energy Systems','Automation & Control Technologies','Electrical Installations II','Computer Aided Design & Simulation'];
            $creditsData =['2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 7:
            /*semester 7 Subjects*/
            $modCodeData = ['EE3013','EE3023','EE3033','EE3043','EE3053','EE4203','EE4183','EE4903','EE4243','EE4213','MN4042','MN4022','MN3020','MN4030'];
            $subsData = ['High Voltage Engineering I','Control Systems II','Electrical Machines & Drivers','Power Systems III','Power Electronics & Applications','Design Project','Laboratory Practice VI','Field Visit','Nuclear Power Management','Robotics & Mechatronics','Technology Management','Engineering Economics','Entrepreneurship Business Basics','Strategic Enterprise Management'];
            $creditsData =['2.0','2.0','2.0','2.0','2.0','5.0','1.0','1.0','2.0','2.0','2.0','2.0','3.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 8:
            /*semester 8 Subjects*/
            $modCodeData = ['EE4023','EE4043','EE4053','EE4063','EE4203','EE4193','MN4900','EE4223','MN4072','MN4092','MN4122','MA4023','MA4033','MN4010','MN4170','MN4112'];
            $subsData = ['High Voltage Engineering II','Electrical Machines & Drivers','Power Systems IV','Power Electronics & Applications II','Design Project','Laboratory Practice VII','Professional Ethics','Renewable Energy & Environment','Small Business Management & Entrepreneurship','Management Skill Development','Human Resource Management & Industrial Relations','Operation Research','Time Series & Stochastic Process','Business Plan Development','Global Entrepreneurship','Production & Operation Management'];
            $creditsData =['2.0','2.0','2.0','2.0','5.0','1.0','1.0','2.0','2.0','2.0','2.0','2.0','2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
    }
}

/*Civil Engineering*/
function ce($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:
            /*semester 2 Subjects*/
            var $modCodeData = ['MA1023','CE1112','CE1122','CE1132','ME1812','EL1022','DE2XXX'];
            var $subsData = ['Methods Of Mathematics','Structural Mechanics I','Fluid Mechanics II','Building Construction & Materials','Basic Thermal Science','Language Skill Enhancement II','Humanities Elective I'];
            var $creditsData =['3.0','3.0','3.0','3.0','2.0','1.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Mechanical Engineering*/
function me($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Chemical & Process Engineering*/
function ch($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Material Science & Engineering*/
function ma($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Textile & Clothing Technology*/
function tm($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Earth Resource Engineering*/
function em($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Transport & Logistic Management*/
function tlm($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Calculate <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var totEarnCredit = 0;
var totSemCredit = 0;

function sGPALogic() {
    totSemCredit = 0;
    totEarnCredit = 0;
    for (var i = 0; i < $displayedItems; i++) {
        totEarnCredit += (parseFloat($modCredits[i].innerHTML)*parseFloat($subGrade[i].value));
        totSemCredit += parseFloat($modCredits[i].innerHTML);
    }
    return (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
}

var $cGPA = document.getElementById('cGPA');
var $oGPA = document.getElementById('oGPA');

function displayResults() {
    var oldCGPA = parseFloat($oldGPA.value);
    var temp = sGPALogic();
    var sem = $semSelectDD.selectedIndex;
    var dep = $depSelectDD.selectedIndex;
    alert(totEarnCredit.toString()+"   "+ totSemCredit.toString());
    document.getElementById('results').style.opacity = '1';
    document.getElementById('sGPA').innerText = temp;
    var multifyCredit = 0;

    switch (sem){
        case 0: break;                     //Nothing
        case 1:                            //Sem 1
            $cGPA.innerText = temp;
            $oGPA.innerText = temp;
            break;
        case 2:                            //Sem 2
            multifyCredit = 15.0;
            totEarnCredit += oldCGPA*multifyCredit;
            totSemCredit += multifyCredit;
            break;
        case 3:                            //Sem 3
            switch(dep){
                case 0: break;          //Do Nothing
                case 1:break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    multifyCredit = 36.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 4:                            //Sem 4
            switch(dep){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    multifyCredit = 52.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 5:                            //Sem 5
            switch($depSelectDD.selectedIndex){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    multifyCredit = 70.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 6:                            //Sem 6
            switch(dep){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    multifyCredit = 89.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 7:                            //Sem 7
            switch(dep){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    97.5
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 8:                            //Sem 8
            switch(dep){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2: break;          //CSE
                case 3:
                    multifyCredit = 117.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    break;          //EE
                case 4: break;          //CE
                case 5: break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
    }
    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
    $cGPA.innerText = temp;
    $oGPA.innerText = temp;
}