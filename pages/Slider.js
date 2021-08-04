import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
const bsurl = process.env.customurl;


export const getServerSideProps = async () => 
{
   const res = await fetch(bsurl+'api/Slider');
   const data = await res.json();
   console.log(data);
   return {
      props : { nws :  data }
   }
}
const Slider = ( { props }) =>{
// export default function Solutions() {
  console.log('test');
   
  return (

   <>
  Slider
   </>
  )
}
export default Slider;
