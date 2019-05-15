		
		document.getElementById("btn").addEventListener("click", send);
		let result = document.getElementById("result");
        x = setInterval(function(){
		fetch("engine.php").then(response => response.json()).then(res => {result.innerHTML = '';
        //console.log(res);
			for (i=0; i<res.length;i++){
				if(i==res.length-1) {
                    result.innerHTML+= "<div style='color:red;' class='message'><img src="+res[i][4]+"><span><b>"+res[i][1]+" </b>: <br><br>"+res[i][2]+"</span><span class='date'>"+res[i][3]+"</span></div>";
                }
               else{
                result.innerHTML+= "<div class='message'><img src="+res[i][4]+"><span><b>"+res[i][1]+" </b>: <br><br>"+res[i][2]+"</span><span class='date'>"+res[i][3]+"</span></div>";
			}
            }
		})},100);
        function avatar(x){
            avatars = document.querySelectorAll("form img");
            for(i=0;i<avatars.length;i++){
                avatars[i].style="border: 2px solid red;";
            }
            const av = x.src;
            console.log(av);
            x.style = "border: 4px solid lime;filter:brightness(100%);";
            send(0,av)
        }
		function send(option,value){
            if(!option) 
            {
                av = value;
            }
			var name = document.querySelector("#name");
			var mess = document.querySelector("#mess");
            av = av;
			var formData = new FormData();
			formData.append("name", name.value);
			formData.append("mess", mess.value);
            formData.append("avatar", av);

			fetch("engine.php", {
				method : "POST",
				body : formData
			})
            mess.value ="";
			
		}
        function go()
        {
            setTimeout(() => {
               
            if(document.querySelectorAll("audio").length>0){
            clearInterval(x);
            } 
            }, 1000);
        }
go();
