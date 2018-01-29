function displayTime(){
			var currentTime	= new Date();
			var diem = "AM";
			var hr = currentTime.getHours();
			var min = currentTime.getMinutes();
			var sec = currentTime.getSeconds();

			if (hr == 0)
			{
				h = 12;
			}else if (hr>12){
				hr = hr - 12;
				diem = "PM";
			}

			if (hr<10){
				hr= "0"+hr;
			}

			if (min<10){
				min = "0"+min;
			}
			if (sec<10){
				sec = "0"+sec;
			}
			
			var myTime = document.getElementById('timeDisplay')
			myTime.textContent = hr + ":"+min+":"+sec +" "+diem;
			setTimeout('displayTime()',1000) 
		}
		displayTime();