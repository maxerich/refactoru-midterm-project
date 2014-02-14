
var students;
if(localStorage.students) {
	students = JSON.parse(localStorage.students)
}
else {
	students = [];
}

// var counter = students.length ? parseInt(students[students.length-1].id) : 0;



var generateID = function() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	var str = ""
	for(var i=0; i<7; i++) {
		str += alphabet[Math.floor(Math.random()*alphabet.length)]
	}
	return str
}

// var increaseCounter = function() {
// 		counter++
// 		return counter
// 	}

$(document).ready(function() {



var getText = function(e) {
	e.preventDefault()
	var profile = $(".profile-parent")
	var profileRow = $(".row-append")
	var newProfile = $(".profile-parent:first").clone()
	var firstName = $("#firstname").val();
	var lastName = $("#lastname").val();
	var month = $("#month").val();
	var day = $("#day").val();
	var year = $("#year").val();
	var male = $("#male").val();
	var female = $("#female").val();
	var state = $("#state").val();
	var city = $("#city").val();
	var highSchool = $("#highschool").val();
	var gpa = $("#gpa").val();
	var classRank = $("#classrank").val();
	var college = $("#college").val();
	var cost = $("#cost").val();
	var essay = $("#essay").val()		
	var newStudent = {
		firstname: firstName,
		lastname: lastName,
		month: month,
		day: day,
		year: year,
		male: male,
		female: female,
		state: state,
		city: city,
		highschool: highSchool,
		gpa: gpa,
		classrank: classRank,
		college: college,
		cost: cost,
		essay: essay,
		id: generateID(),
		modalId: generateID()
	};
	students.push(newStudent);
	localStorage.students = JSON.stringify(students);
	window.location.href = "file:///Users/student/Desktop/My%20Midterm%20Project/Students.html";
}


$("#form-submit-button").click(function(e){
	getText(e);
	
});


if ($("#new-profile").length>0) {
	var source = $("#new-profile").html()

	var template = Handlebars.compile(source)

	for(var i=0; i<students.length; i++) {
		$(".row-append").append(template(students[i]))
	};
}


// if ($("#full-profile").length>0) {
// 	var source = $("#full-profile").html()

// 	var template = Handlebars.compile(source)

// 	for(var i=0; i<students.length; i++) {
// 		$(".modal-body").append(template(students[i]))
// 	};
// }

// if ($("#profile-header").length>0) {
// 	var source = $("#profile-header").html()

// 	var template = Handlebars.compile(source)

// 	for(var i=0; i<students.length; i++) {
// 		$(".modal-header").append(template(students[i]))
// 	};
// }


	// var source = $("#modal-id").html()

	// var template = Handlebars.compile(source)

	// for(var i=0; i<students.length; i++) {
	// 	$(".modal-fade").append(template(students[i]))
	// };


$(".profile-parent").click(function() {
	$(".modal-parent").remove()
	$(this).closest(".profile-parent").data("id");
	var source = $("#full-profile").html();
	var template = Handlebars.compile(source)
	for(var i=0; i<students.length; i++) {
		 if (students[i].id === $(this).closest(".profile-parent").data("id")) {
		  		$(".modal-body").append(template(students[i]))
		  }
		 else {

		 }
		
	};
		// $(".modal-body").append(template())
	
});



$(document).on("click", ".delete", function(e) {
	e.stopPropagation()
	var original = JSON.parse(localStorage.students)
	var dataID = $(this).closest(".profile-parent").data("id")
	console.log(dataID)
	var arrOfObj = JSON.parse(localStorage.students)
	console.log(arrOfObj)
	var arrOfOne = arrOfObj.filter(function(item) {
		 if(item.id === dataID) {
		 	return true
		 }
	})
	console.log(arrOfOne)
	console.log(arrOfObj)
	var studentIndex = arrOfObj.indexOf(arrOfOne[0]);

	
	original.splice(studentIndex, 1)

	$(this).closest(".profile-parent").remove()
	var studentStr = JSON.stringify(original)
	localStorage.students = studentStr	
	console.log(JSON.parse(localStorage.students))
	console.log("length", students.length)
}) 
 





});



// var arrOfOne = filter(arrOfObj, function(item) {
// 		 if(item.id === dataID) {
// 		 	return true
// 		 }
// 	})
// 	console.log(arrOfOne)











