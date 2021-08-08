var i

for ( i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + "-AmiTumi" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ "-Ami" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ "-Tumi" );
  }
}
