import Link from "next/link";
import bike from '@/public/images/bike.jpg'
import Image from "next/image";
const About = () => {


console.log("hello world");

  return (<>
    <div className='pt-6'>This is About page</div>
    <li><Link href="/about/mission">Mission</Link></li>
    <Image src={bike} alt="bike"/>
    
    </>
  )
}
 
export default About

