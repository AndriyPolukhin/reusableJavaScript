function cal_fun() {
    var psychobox = {
        school: "Negotiation mastery",
        place: "Kiev",
        year: "2002"
    };
    var student = {
        stu1: {
            name: "Andriy",
            status: "Brilliant"
        },
        stu2: {
            name: "Sergey",
            status: "Undergraduate"
        },
        stu3: {
            name: "Alexander",
            status: "Genius"
        }
    }

    document.getElementById("d1").innerHTML = "School Name: " + psychobox.school + "School Place: " + psychobox.place + " Year: " + psychobox.year;

    document.getElementById("d2").innerHTML = "Name 1 : " + student.stu1.name + "place : " + student.stu3.status;


}
