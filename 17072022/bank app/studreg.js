
const readline=require("readline"); // readli


const student={

}

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

input.question("input the student name \r\n",function(name){
  

    student.name=name;
    input.question("input your city name \r\n",function(cityname){
        student.cityname=cityname

        input.question("input your state name \r\n",function(state){
            student.state=state


            input.question("input your country name \r\n",function(country){
                student.country=country;


                input.question("input your age \r\n",function(age){
                    student.age=age;


                    input.question("input your privious year marks in % \r\n",function(marks){
                        student.marks=marks;

                input.write("your registred successfuly \n");
                input.write(`student details are ${JSON.stringify(student)} `);

                input.close();
                })
            })

            })
        })

        

    })
   
})


// You have to create a student registration app

// Name ,city ,state ,country ,age ,marks -->