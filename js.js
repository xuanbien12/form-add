$(document).ready(function(){

    // $(".name-student").on("keyup" , function(){
    //     const name = $(this).val()
    //    console.log(name)
    // })
    // $(".name-email").on("keyup" , function(){
    //     const email = $(this).val()
        
    // })
    
    function addStudent (){
        const currentHtml = $(".list-student").html();
        const name = $(".name-student").val();
        const email = $(".name-email").val();
        const newElement = `
        <li class="studetn-item dl-flex">
                <span class="student-name">${name}</span>
                <span class="email-student">${email}</span>
        </li>
        `
        const newHtml = currentHtml + newElement ;
        if (name && email){
            $(".list-student").html(newHtml)
            $(".name-student").val("");
            $(".name-email").val("");
        }else {
            $(".notification").show()
        }
    }
    $(".btn-notification").on("click", function(){
        $(".notification").hide()
    })
    $(".add-student").on("click", function(){
        addStudent()
    })
    
    $(".search-student").on("keyup", function(){
        const value = $(this).val()
        $(".studetn-item").each(function(index){
            const content = $(this).text();
            if(content.includes(value)){
                $(this).show()
            }else {
                $(this).hide()
            }
        })
    })
    
})


