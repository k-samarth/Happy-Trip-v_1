// Implement 
// 1. Hardcoded Search
// 2. Attach Function Dynamically to Button Object
// 3. Event Listners

// Deliverable
// 1. It should Run.
// 2. Code with Comments.
// 3. Workflow Rules Testcases in the document and code.
// 4. Solution -> a. class, b. function object, c. javascript object.
// 5. Lovely, Beautiful and Professional UI.
// 6. Agenda, Welcome, Problem, Solution, Key highlights, best practices.

    // 1. Validate data Entered in the form
    // 2. Implement Rules in Seperate Functions
    // 3. If Valid: Import Classes Needed
    // 4. Create an Model for SearchInfo
    // 5. Fill information for SearchInfo
    // 6. Call the SearchManager -> Searchfunction
    // 19. Upon success redirect to Search Results.
    
    var btn=document.getElementById('search');

    btn.onclick=function()
        
{
    var flag=0;
    var from=document.getElementById("from");
    var to=document.getElementById("to");
    var oneWay=document.getElementById("OneWay");
    if(from.value==to.value)
    {
        alert("From and to location cannot be same");
        flag=1;
        return;
    }
    if(!flag)
    {
        alert("success");
    }
    
    

}


