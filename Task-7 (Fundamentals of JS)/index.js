/* 
    Q. What is JavaScript?
        It is a high level just in time compiled programming language. It is used to build Full Stack applications. 
        Thus, we can handle server and client side with it.
*/

//-----------------------------------------------------------------------------------------------------------------------//

/*
    Q. How to run JS?
        1- Browser 
            i. Directly in Console in Inspect Window on Browsers
            ii. Internal JS in <script> tag in <body> tag of HTML file
            iii. External JS and provide its link in <script> tag of HTML file
        2- Node.js
            In the project file's integrated terminal, write node <file name> to run JS.
*/

//-----------------------------------------------------------------------------------------------------------------------//

/* 
    COMMENTS
        Single Line: '//' is used
        Multi Line: /* *'/ is used
*/

//-----------------------------------------------------------------------------------------------------------------------//

/* 
    VARIABLES
        Values that are not fixed. They are declared using:
            i. let -> block level scope and value can be changed
            ii. const -> block level scope and value cannot be changed
            iii. var -> function level scope and default declaration type
*/

//-----------------------------------------------------------------------------------------------------------------------//

/*
    Data Types
        1. Primitive Types
            i. String
                const name = 'x' -> single quote
                const name = "x" -> double quote
                const name = `x`-> back dash
            ii. Number
                const num = 0   -> integer
                const num = 0.1 -> floating-point
            iii. Boolean
                const valueIs = true
                const valueIs = false
            iv. Null
                const data = null -> Unknown value
            v. Undefined
                var varName -> no value assigned
                let varName -> no value assigned

        2. Non Primivites/Complex
            i. Objects
                const person = {'key': value} -> accesed by (person.key)
                const person = [value1, value2] -> accesed by (person[index]])
*/

//-----------------------------------------------------------------------------------------------------------------------//

/*
    Operators
        1. Assignment
            let x = 10
        2. Arithmetic
            x+y -> addition
            x-y -> subtraction
            x/y -> division
            x%y -> modulus
            x*y -> multiplication
            ++x -> increment x=x+1
            --x -> decrement x=x-1
        3. Comparison
            x==y  -> values are equal
            x!=y  -> values are not equal
            x===y -> values and data types are equal
            x!==y -> values and data types are not equal
            x<y   -> less than
            x<=y  -> less than and equal to
            x>y   -> greather than
            x>=y  -> greater than and equal to
        4. Logical Operator
            && -> AND operator (returns true if both are true)
            || -> OR operator (returns true if either is true)
            !  -> NOT operator (returns opposite value)

        5. Concatenation Operator
            + -> strings are joined
        6. Ternary Operator
            condition ? statement1 executed if true: statement2 executed if false
*/

//-----------------------------------------------------------------------------------------------------------------------//

/*
    Conditional Statements
        1. if
            eg: 
            if(condition){
                    do something
            }
        2. if -- else
            eg: 
            if(condition){
                do something
            }else{
                do something
            }
        3. if -- else if -- else
            eg: 
            if(condition){
                do something
            }else if(condition){
                do something
            }else{
                do something
            }
        4. switch
            eg:
            switch(variable){
                case <value 1 of variable>:
                    do somthing
                    break
                case <value 2 of variable>:
                    do somthing
                    break
                default:
                    do somthing
                    break
                
            }
*/

//-----------------------------------------------------------------------------------------------------------------------//

/*
    Loops
    1. for loop
        syntax:
            for (initializer; condition; final-expression){
                do something
            }
        execution sequence:
            i. value initialized
            ii. condiiton checked
            iii. if true body of loop is executed, else loop terminates
            iv. final-expression executed
    2. while loop
        syntax:
            initializer
            while(condition){
                do something
                final-expression
            }
        execution sequence:
            i. value initialized
            ii. condiiton checked
            iii. if true body of loop is executed, else loop terminates
            iv. final-expression executed
    3. do -- while loop
        syntax:
            initializer
            do{
                do something
                final-expression
            }while(condition)
    4. for -- of loop
            For the values of an array
        syntax:
            for (const item of array){do something}

*/
