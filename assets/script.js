function filter(fil)
		{
			if (fil == 'lyg') 
			{
				let d1=document.getElementById('d1').value;
				let d2=document.getElementById('d2').value;

				let hasil=1/2*d1*d2;
				document.getElementById('show').innerHTML=hasil;
			}
			else if(fil == 'blk')
			{
				let panjang=document.getElementById('panjang').value;
				let lebar  =document.getElementById('lebar').value;
				let tinggi =document.getElementById('tinggi').value;

				let vol=panjang*lebar*tinggi;
				document.getElementById('show').innerHTML=vol;
			}
		}