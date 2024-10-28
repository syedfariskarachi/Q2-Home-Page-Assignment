export default function Navbar(){
   return(
    <>
    <ul className="flex gap-5 float-end mx-10" >
        <a href="/wlog"><li>Work</li></a>
        <a href="/blog"><li>Blog</li></a>
        <a href="/contact"><li>Contact</li></a>
    </ul>
    </>
   )
}