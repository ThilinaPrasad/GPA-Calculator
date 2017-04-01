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

/*semester Drop Down On Change things here*/
function semDDOnChange(){
    fillSubjects();
    semesterDDStyle();
    showElement($hiddenTable);
    showElement($oldGPA);
    showElement($calc);
    showElement($rst);
    gradeReset();
    if($semSelectDD.selectedIndex==1){
        hideElement($depSelectDD);
        $oldGPA.style.visibility='hidden';
    }else{
        showElement($depSelectDD);
        $oldGPA.style.visibility='visible';
    }
}

/*department Drop Down On Change things here*/
function depDDOnChange(){
    fillSubjects();
    gradeReset();
}

/*test Function*/
function sem(){
        alert($subjects[6].innerText + " " +$subjects[6].value);
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
    $semSelectDD.style.margin = 'auto';
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
function showSubject($fieldName,$gradeName,$subjectName,$credit){
    $fieldName.innerText = $subjectName;
    $fieldName.value = $credit;
    $fieldName.style.visibility = 'visible';
    $gradeName.style.visibility = 'visible';
}

/*remove field from web*/
function hideSubject($fieldName,$gradeName){
    $fieldName.style.visibility = 'hidden';
    $gradeName.style.visibility = 'hidden';
}

/*data filling logic*/
function fillDataLogic($subsData,$creditsData){
    for(var i=0;i<$subsData.length;i++){
        showSubject($subjects[i],$subGrade[i],$subsData[i],$creditsData[i]);
    }
    for(var j=0;j<=(11-$subsData.length);j++){
        hideSubject($subjects[11-j],$subGrade[11-j]);
    }
}

/*fill subjects wise */
function fillSubjects() {
    var $sem = $semSelectDD.selectedIndex;
    var $dep = $depSelectDD.selectedIndex;
    if($sem==1){
        var $subsData = ['Mathematics' , 'Programming Fundamentals','Mechanics',"Properties of Materials","Fluid Mechanics","Electrical Engineering","Language Skill Enhancement I"];
        var $creditsData =['3','3','2','2','2','2','1'];
        fillDataLogic($subsData,$creditsData);
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
            var $subsData = ["Principal of Object Oriented Programming" , "Computer Architecture","Electronic Devices & Circuits","Numerical Methods for Computer Science","Theory of Electricity","Communication Skills","Introduction to Manufacturing Engineering"];
            var $creditsData =['3','2.5','3','2','3','2','1.5','2.5'];
            fillDataLogic($subsData,$creditsData);
            break;
        case 3:
            /*semester 3 Subjects*/
            var $subsData = ["Principle of Computer Communication","Operating Systems","Object Oriented Software Development","Digital Electronics","Aspect of Civil Engineering","Basic Engineering Thermodynamics","Graph Theory for Computing","Calculus for System Modeling"];
            var $creditsData =['3','2.5','3','2.5','2','2','2','2'];
            fillDataLogic($subsData,$creditsData);
            break;
        case 4:
            /*semester 4 Subjects*/
            var $subsData = ["Software Engineering","Computer Networks","Database Systems","Linear Algebra","Differential Equations & Applications","Signals & Systems","Humanities Elective I"];
            var $creditsData =['3','3','3','2','2','2.5','2'];
            fillDataLogic($subsData,$creditsData);
            break;
        case 5:
            /*semester 5 Subjects*/
            var $subsData = ["Software Engineering Project","Computer Security","Theory of Computing","Micro-Controllers & Applications","Business Economics & Financial Accounting","Applied Statistics","Software Architecture & Design","Advanced Networking","Programming Languages","Intelligent Systems","Image Processing"];
            var $creditsData =['2','2','2','3','3','2','3','3','3','3','3'];
            fillDataLogic($subsData,$creditsData);
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
        case 2:/*semester 2 Subjects*/break;
        case 3:/*semester 3 Subjects*/break;
        case 4:/*semester 4 Subjects*/break;
        case 5:/*semester 5 Subjects*/break;
        case 6:/*semester 6 Subjects*/break;
        case 7:/*semester 7 Subjects*/break;
        case 8:/*semester 8 Subjects*/break;
    }
}

/*Civil Engineering*/
function ce($sem){
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