var S = '10,100,25,0,67,30,35,-1,2,1';

function sort_numbers(x)
{
  var right = x.length-1;
  var temp,S;
  if (x.length <= 1)
  {
    return x;   
  }
  
  for (i=right; i>0;i--)
   {
        for (j=0;j<i;j++)
          {
            if (parseInt(x[j]) < parseInt(x[j+1]))
              {
                temp = parseInt(x[j])
                x[j] = parseInt(x[j+1])
                x[j+1]= temp
              }	
          }
      
    
    }
    S=x.join(',');   
    return S;  
  
}

x=S.split(',');
sortedString = sort_numbers(x)
console.log(sortedString);











