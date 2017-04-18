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
var $modTypes = document.getElementsByClassName('modType');         // Module Type  divs
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
    ddReset();
    document.getElementById('results').style.opacity = '0';
    if($semSelectDD.selectedIndex==1){
        document.getElementById('tableMaintitle').innerText='Enter Your Module Grades Below';
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
    ddReset();
    showElement($hiddenTable);
    document.getElementById('tableMaintitle').innerText='Enter Your Module Grades Below';
    $hiddenTable.style.display='table';
    $func.style.opacity = '1';
    document.getElementById('results').style.opacity = '0';
}

function resetBtnOnclick() {
    location.href='index.html';
    totEarnCredit =0;
    totSemCredit =0;
    totEarnNGPACredit =0;
    ddReset();
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
function showSubject($row,$modCodeField,$subFieldName,$modCreditField,$modTypeField,$gradeName,$modCod,$subjectName,$credit){
    $row.style.display='table-row';
    $modCodeField.innerText = $modCod;
    $subFieldName.innerText = $subjectName;
    $modCreditField.innerText= $credit;
    $modCodeField.style.visibility= 'visible';
    $subFieldName.style.visibility = 'visible';
    $modCreditField.style.visibility='visible';
    $gradeName.style.visibility = 'visible';
    $modTypeField.style.visibility = 'visible';

}

/*remove field from web*/
function hideSubject($row){
    $row.style.display='none';
}

/*data filling logic*/
function fillDataLogic($modCodeData,$subsData,$creditsData){
    $displayedItems = 0;
    for(var i=0;i<$subsData.length;i++){
        showSubject($rows[i],$modCodes[i],$subjects[i],$modCredits[i],$modTypes[i],$subGrade[i],$modCodeData[i],$subsData[i],$creditsData[i]);
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
        var $modCodeData = ['MA1013','CS1032','ME1032','MT1022','CE1022','EE1012','EL1012','MN1012'];
        var $subsData = ['Mathematics' , 'Programming Fundamentals','Mechanics',"Properties of Materials","Fluid Mechanics","Electrical Engineering","Language Skill Enhancement I",'Engineering in Context'];
        var $creditsData =['3.0','3.0','2.0','2.0','2.0','2.0','1.0','1.0'];
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
function ddReset(){
    for(var i=0;i<12;i++){
        $subGrade[i].selectedIndex = 0;
        $modTypes[i].selectedIndex=0;
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
            $modCodeData = ['CS2012','CS2022','CS2052','EN1012','MA1032','EE2093','CS2952','ME1802','CS1962'];
            $subsData = ["Principal of Object Oriented Programming" ,'Data Structures & Algorithms', "Computer Architecture","Electronic Devices & Circuits","Numerical Methods for Computer Science","Theory of Electricity","Communication Skills","Introduction to Manufacturing Engineering",'Engineering Skill Development'];
            $creditsData =['3.0','2.5','3.0','2.0','3.0','2.0','1.5','2.5','1.5'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            $modCodeData = ['CS2032','CS2042','CS2062','EN2022','CE1822','ME1822','CS2150','MA2073','CS2202','CS2963'];
            $subsData = ["Principle of Computer Communication","Operating Systems","Object Oriented Software Development","Digital Electronics","Aspect of Civil Engineering","Basic Engineering Thermodynamics","Graph Theory for Computing","Calculus for System Modeling",'Programming Challenge I','Presentation Skills'];
            $creditsData =['3.0','2.5','3.0','2.5','2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            $modCodeData = ['CS3022','CS3032','CS3042','MA2033','MA2063','EN2062','DE1XXX','CS2212','CS3953'];
            $subsData = ["Software Engineering","Computer Networks","Database Systems","Linear Algebra","Differential Equations & Applications","Signals & Systems","Humanities Elective I",'Programming Challenge II','Technical Writing'];
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
        case 6:
            /*semester 6 Subjects*/
            $modCodeData = ['CS4012','CS3962','CS3312','CS4232','CS4242','CS4532','CS4742','DE2XXX'];
            $subsData = ['Professional Practice','Research & Report Writing','Embedded System Design','Formal Methods in Software Engineeering','Human Computer Iteration','Concurrent Programming','Bioinformatics','Humanities Elective II'];
            $creditsData =['2.0','1.0','3.0','3.0','3.0','3.0','3.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 7:
            /*semester 7 Subjects*/
            $modCodeData = ['CS4202','MN4062','CS4222','CS4232','CS4242','CS4252','CS4262','CS4272','CS4322','CS4332','CS4342','CS4352','CS4432','CS4442','CS4462','CS4472','CS4482','CS4492','CS4522','CS4532','CS4542','CS4552','CS4622','CS4632','CS4642','CS4722','CS4732','CS4742'];
            $subsData = ['Research & Development Project','Organizational Behavior and Management','Software Process & Management','Formal Methods in Software Engineering','Human Computer Interaction','Advanced Operating Systems','Distributed Systems','Quality Engineering','Digital System Design','Computer Aided Digital Design','Advanced Computer Architecture','Robotics & Automation','Network & System Administration','Current Trends in Networking','Computer & Network Security','Mobile Computing','High Performance Networking','Wireless & Broadband Networking','Advanced Algorithms','Concurrent Programming','Compiler Design','Scientific Computing','Machine Learning','Database Internals','Data Mining & Information Retrieval','Computer Vision','Computer Graphics','Bioinformatics'];
            $creditsData =['5.0','2.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 8:
            /*semester 8 Subjects*/
            $modCodeData = ['CS4202','MN4122','CS4222','CS4232','CS4242','CS4252','CS4262','CS4272','CS4322','CS4332','CS4342','CS4352','CS4432','CS4442','CS4462','CS4472','CS4482','CS4492','CS4522','CS4532','CS4542','CS4552','CS4622','CS4632','CS4642','CS4722','CS4732','CS4742','MA4023','MA4033','MA4053'];
            $subsData = ['Research & Development Project','Human Resource Management & Industrial Relations','Software Process & Management','Formal Methods in Software Engineering','Human Computer Interaction','Advanced Operating Systems','Distributed Systems','Quality Engineering','Digital System Design','Computer Aided Digital Design','Advanced Computer Architecture','Robotics & Automation','Network & System Administration','Current Trends in Networking','Computer & Network Security','Mobile Computing','High Performance Networking','Wireless & Broadband Networking','Advanced Algorithms','Concurrent Programming','Compiler Design','Scientific Computing','Machine Learning','Database Internals','Data Mining & Information Retrieval','Computer Vision','Computer Graphics','Bioinformatics','Operational Research','Time Series & Stochastic Process','Numerical Analysis for Scientific'];
            $creditsData =['5.0','2.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
    }
} //Done

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
} //Done

/*Civil Engineering*/
function ce($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:
            /*semester 2 Subjects*/
            $modCodeData = ['MA1023','CE1112','CE1122','CE1132','ME1812','EL1022','DE2XXX','CS2260','CE2260','MN1030'];
            $subsData = ['Methods Of Mathematics','Structural Mechanics I','Fluid Mechanics II','Building Construction & Materials','Basic Thermal Science','Language Skill Enhancement II','Humanities Elective I','Visual Programming & Applications','Building Design Process & Applications','Entrepreneurship Skill Development'];
            $creditsData =['3.0','3.0','3.0','3.0','2.0','1.0','2.0','2.0','2.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            $modCodeData = ['MA2013','MA2023','CE2013','CE2022','CE2032','CE2042','CE2052','CE2062','MN1030'];
            $subsData = ['Differential Equations','Calculus','Structural Mechanics II','Design of Steel Structures','Hydraulic Engineering I','Soil Mechanics & Geology I','Construction Planning & Cost Estimating','Surveying I','Entrepreneurship Skill Development'];
            $creditsData =['2.0','2.0','3.0','3.0','3.0','3.0','3.0','3.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            $modCodeData = ['MA2033','MA3013','CE2113','CE2122','CE3012','CE2132','CE2142','DE2XXX','MN2010'];
            $subsData = ['Linear Algebra','Applied Statistics','Structural Analysis I','Design of Concrete Structures I','Hydraulic Engineering II','Soil Mechanics & Geology II','Surveying II','Humanities Electives II','Entrepreneurial Leadership'];
            $creditsData =['2.0','2.0','3.0','3.0','3.0','3.0','3.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 5:
            /*semester 5 Subjects*/
            $modCodeData = ['CE3112','CE3122','CE3132','CE3142','CE3152','CE3162','MN3042','MN3010'];
            $subsData = ['Structural Analysis II','Design of Masonry & Timber Structures','Geotechnical Engineering','Construction Management','Fundamentals of Environmental Engineering','Fundamentals of Transportation Engineering','Business Economics & Financial Accounting','Multidisciplinary Design,Innovation & Venture Creation'];
            $creditsData =['3.0','3.0','3.0','3.0','2.0','2.0','3.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 6:
            /*semester 6 Subjects*/
            $modCodeData = ['CE4012','CE4022','CE4032','CE4902','CE4922'];
            $subsData = ['Design of Concrete Structures II','Hydraulic Design','Geotechnical Design','Communication Skills for Projects','Research Project'];
            $creditsData =['3.0','3.0','3.0','2.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 7:
            /*semester 7 Subjects*/
            $modCodeData = ['CE4042','CE4052','CE4912','CE4922','CE4312','CE4322','CE4332','CE4342','CE4352','MN3020','MN4900'];
            $subsData = ['Highway Engineering','Environmental Engineering','Comprehensive Design Project','Research Project','Building Engineering','Irrigation Engineering','Remote Sensing & GIS','Construction Technology','Traffic Engineering & Planning','Entrepreneurship Business Basics','Professional Ethics'];
            $creditsData =['3.0','3.0','2.0','2.0','3.0','3.0','3.0','3.0','3.0','3.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 8:
            /*semester 8 Subjects*/
            $modCodeData = ['CE4112','CE4123','CE4912','CE4922','CE4412','CE4422','CE4432','CE4442','CE4452','CE4472','CE4482','CE4492','CE4502','CE4522','CE4532','CE4542','CE4552','CE4562','MN4010'];
            $subsData = ['Management Skill Development','Engineering Economics','Comprehensive Design Project','Research Project','Bridge Engineering','Advanced Structural Engineering & Design','Design of Large Structures','Computational Mechanics','Coastal & Port Engineering','Environmental Geotechnics','Computational Geotechnical Engineering','Project Management','Management Information Systems','Sustainable Design & Construction','Highway Constructions & Maintenance Management','Analysis & Design of Transportation Systems','Water & Wastewater Treatment','Environmental Impact Assessment','Business Plan Development'];
            $creditsData =['2.0','2.0','3.0','1.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','3.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
    }
} //Done

/*Mechanical Engineering*/
function me($sem){
    switch($sem) {
        case 0:alert("Invalid Input Situation !");break;
        case 1:break;
        case 2:
            /*semester 2 Subjects*/
            $modCodeData = ['ME1100','ME1090','ME1052','ME1070','ME2040','EL1022','EN1802','MA1023','MT1812','MN1030'];
            $subsData = ['Mechanics of Materials I','Engineering Drawing & Computer Aided Modeling','Fundamentals of Engineering Thermodynamics','Manufacturing Technology','Fundamentals of Mechatronics','Language Skill Enhancement II','Basic Electronics','Methods of Mathematics','Engineering Materials','Entrepreneurship Skill Development'];
            $creditsData =['2.0','3.0','3.0','2.5','2.0','2.0','1.0','2.0','3.0','2.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            $modCodeData = ['ME2023','ME2092','EE2803','EN2852','MA2013','MA2023','ME2260','CS2882','MN1030'];
            $subsData = ['Manufacturing Engineering','Mechanics of Machines I','Applied Electricity','Applied Electronics','Differential Equations','Calculus','Embedded Systems','Object Oriented Programming Using C++','Entrepreneurship Skill Development'];
            $creditsData =['4.0','4.0','2.0','2.0','2.0','2.0','3.0','3.0','1.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            $modCodeData = ['ME2050','ME2060','ME2160','ME2170','ME2080','ME2280','MA2033','ME2920','CH2803','MA2053','MN2010'];
            $subsData = ['Mechanics of Machines II','Mechanics of Materials II','Introduction to Automotive Engineering','Manufacturing Engineering II','Design of Machine Elements','Sensors/Actuators & Smart Systems','Linear Algebra','Social Community Project-Mechatronics','Process Engineering','Graph Theory','Entrepreneurial Leadership'];
            $creditsData =['3.0','4.0','2.0','4.0','3.0','3.0','2.0','2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 5:
            /*semester 5 Subjects*/
            $modCodeData = ['ME3240','ME3022','MA3013','MN3042','MA3023','ME3260','ME3270','MN3010','MN3052'];
            $subsData = ['Control Systems','Fluid Power Systems & Machinery','Applied Statistics','Business Economics & Financial Accounting','Numerical Methods','Mechatronic System Design Project','Virtual Instrumentation','Multidisciplinary Design Innovation & Venture Creation','Industrial Management & Marketing'];
            $creditsData =['3.0','4.0','2.0','3.0','2.0','4.0','3.0','2.0','3.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 6:
            /*semester 6 Subjects*/
            $modCodeData = ['ME3911','ME4202','DE2XXX','DE2XXX'];
            $subsData = ['Project Methodology & Communications','Design/Research Project**','Humanities Elective I*','Humanities Elective II*'];
            $creditsData =['2.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 7:
            /*semester 7 Subjects*/
            $modCodeData = ['ME4202','ME4310','ME4090','MN4900','ME4903','ME4242','ME4332','MN4122','ME4452','ME4710','ME4422','MA4013','MA4033','ME4620','MN3020','MN4030','MN4042'];
            $subsData = ['Design Research Project**','Micro/Nano Electro Mechanical Systems & Nanotechnology','Industrial Automation','Professional Ethics','Industrial Visits and Guest Lectures II','Energy Technology & Environment','Computer Aided Design & Manufacture','Human Resource Management & Industrial Relations','Industrial Project Management','Aircraft Technology','Energy Conservations','Linear Models & Multivariate Statistics','Time Series & Stochastic Process','Biomedical Engineering Applications','Entrepreneurship Business Basics','Strategic Enterprise Management','Technology Management'];
            $creditsData =['4.0','3.0','3.0','1.0','0.5','3.0','4.0','2.0','4.0','3.0','3.0','3.0','3.0','3.0','3.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
        case 8:
            /*semester 8 Subjects*/
            $modCodeData = ['ME4180','ME4190','ME4202','ME4392','ME4662','ME4072','ME4672','ME4632','ME4652','ME4432','ME4472','MA4043','MN4072','MN4010','MN4170'];
            $subsData = ['Intelligent Systems','Robotics & Autonomous Systems','Design Research Project**','Advanced Aspects of Manufacturing','Die & Mould Design','Industrial Engineering','Control System Design','Automotive Engineering','Marine Engineering & Naval Architecture','Computational Fluid Dynamics','Computer Aided Engineering','Neutral Network & Fuzzy Logic','Small Business Management Entrepreneurship','Business Plan Development','Global Entrepreneurship'];
            $creditsData =['3.0','3.0','4.0','3.0','3.0','4.0','3.0','4.0','4.0','3.0','3.0','3.0','2.0','2.0','2.0'];
            fillDataLogic($modCodeData,$subsData,$creditsData);
            break;
    }
} //Done

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
var totEarnNGPACredit = 0;

var $cGPA = document.getElementById('cGPA');
var $oGPA = document.getElementById('oGPA');
var resultdisplay;

function sGPALogic() {
    totSemCredit = 0;
    totEarnCredit = 0;
    var typeTemp;
    for (var i = 0; i < $displayedItems; i++) {
        typeTemp =$modTypes[i].selectedIndex;
        if(typeTemp==0) {
            if($subGrade[i].selectedIndex==0){
                alert("Please Enter Grade for "+$modCodes[i].innerText);
                resultdisplay = '0';
                break;
            }
            else {
                totEarnCredit += (parseFloat($modCredits[i].innerHTML) * parseFloat($subGrade[i].value));
                totSemCredit += parseFloat($modCredits[i].innerHTML);
            }
        }else if(typeTemp==1) {
            totEarnNGPACredit += (parseFloat($modCredits[i].innerHTML));
        }else{
            continue;
        }
        resultdisplay ='1';
    }
    return (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
}

function displayResults() {
    totEarnCredit = 0;
    totSemCredit = 0;
    totEarnNGPACredit = 0;
    var oldCGPA = parseFloat($oldGPA.value);
    var temp = sGPALogic();
    var sem = $semSelectDD.selectedIndex;
    var dep = $depSelectDD.selectedIndex;
    var multifyCredit = 0;
    //alert(sem.toString());
    document.getElementById('results').style.opacity = resultdisplay;
    document.getElementById('sGPA').innerText = temp;
    document.getElementById('NGPACredits').innerText = totEarnNGPACredit.toString();

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
            temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
            $cGPA.innerText = temp;
            $oGPA.innerText = temp;
            break;
        case 3:                            //Sem 3
            switch(dep){
                case 0: break;          //Do Nothing
                case 1:break;          //ENTC
                case 2:
                    multifyCredit = 34.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit = 36.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 32.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 33.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
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
                case 2:
                    multifyCredit = 53.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit = 52.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 54.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 55.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
        case 5:                            //Sem 5
            switch(dep){
                case 0: break;          //Do Nothing
                case 1: break;          //ENTC
                case 2:
                    multifyCredit = 71.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit = 70.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 77.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 76.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
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
                case 2:
                    multifyCredit = 91.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit = 89.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 96.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 97.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
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
                case 2:
                    multifyCredit = 99.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit =97.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 106.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 103.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
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
                case 2:
                    multifyCredit = 118.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CSE
                case 3:
                    multifyCredit = 117.5;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //EE
                case 4:
                    multifyCredit = 123.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //CE
                case 5:
                    multifyCredit = 119.0;
                    totEarnCredit += oldCGPA*multifyCredit;
                    totSemCredit += multifyCredit;
                    temp = (Math.round(((totEarnCredit/totSemCredit)*100))/100).toString();
                    $cGPA.innerText = temp;
                    $oGPA.innerText = temp;
                    break;          //ME
                case 6: break;          //CH
                case 7: break;          //MA
                case 8: break;          //TM
                case 9: break;          //EM
                case 10: break;         //TLM
            }
            break;
    }

    //alert(oldCGPA);
}