$("ul").on("click", "li", function(){

$(this).toggleClass("complete");
});
//span click function to delete
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13) // 13 for enter element
	{
		//grabbing the new todo text
		var todotext = $(this).val();
		
		$(this).val("");
		//adding todo to the ul

		// If value is not null then add it to ul.
		if(todotext!=0)
		{
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todotext +"</li>");
		}
	}
});

$(".fa-pencil-square").click(function(){
$("input[type = 'text']").fadeToggle();
});