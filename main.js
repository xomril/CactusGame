
			//init object globally
			var objImage= null;
            let ploted = {x:0,y:0};
            let scores = 0;
			function init(){
				objImage=document.getElementById("image1");				
				objImage.style.position='relative';
				objImage.style.left='0px';
				objImage.style.top='0px';
                doPlot();
			}
			function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: //left arrow key
						moveLeft();
						break;
					case 38: //Up arrow key
						moveUp();
						break;
					case 39: //right arrow key
						moveRight();
						break;
					case 40: //down arrow key
						moveDown();
						break;						
				}
			}
			function moveLeft(){
                if(parseInt(objImage.style.left)-5 < 0) return;
				objImage.style.left=parseInt(objImage.style.left)-5 +'px';
                checkMe();
			}
			function moveUp(){
                if(parseInt(objImage.style.top)-5 < 0) return;
				objImage.style.top=parseInt(objImage.style.top)-5 +'px';
                checkMe()
			}
			function moveRight(){
                if(parseInt(objImage.style.left)+5 > 560) return;
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
                checkMe()
			}
			function moveDown(){
                if(parseInt(objImage.style.top)+5 > 360) return;
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
                checkMe()
			}
			window.onload=init;
		function doPlot(){
            document.getElementById('scoresDisplay').innerText = scores;
            let x = Math.floor(Math.random() * 560) + 1;
            let y = Math.floor(Math.random() * 360) + 1;
            plot = {x:x, y:y};

            objImage2=document.getElementById("image2");				
				objImage2.style.position='relative';
				objImage2.style.left= x + 'px';
				objImage2.style.top= y +'px';
        }

        function checkMe(){

            let objX = parseInt(objImage.style.left);
            let objY = parseInt(objImage.style.top);
            let collisionX = false;
            let collisionY = false;
            if(objX > plot.x){
                if(objX - plot.x < 50) collisionX = true;
            } else {
                if(plot.x - objX < 50) collisionX = true;
            }

            if(objY > plot.y){
                if(objY - plot.y < 20) collisionY = true;
            } else {
                if(plot.y - objY < 20) collisionY = true;
            }
            console.log([objX, objY, plot.x,plot.y, collisionX, collisionY])
            if(collisionY && collisionX ){
                scores++;
                doPlot();
            }
        }