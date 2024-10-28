import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./about/page";

import Blog from "./blog/page";

export default function Home() {
  return (
    <div>
      <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <nav>
          <Navbar />
        </nav>
        <div style={{display:"flex",flexDirection:"row",marginTop:"50px" ,width:"auto"}}>
          <div style={{width:"50vw",marginLeft:"90px",}}>

          <h1 style={{fontWeight:"bold",height:"auto",fontSize:"30px"}}><i><em>Hi, I am Faris, <br /> Creative Technologist</em></i></h1>
          <p style={{marginTop:"9px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error ut ab porro! Animi voluptate rem accusamus explicabo maxime incidunt?</p>
          <button style={{backgroundColor:"red",borderRadius:"7px",width:"130px",height:"30px",fontSize:"12px",marginTop:"20px"}}>Download Resume</button>
          </div>
          
        <div>
          <Image src="/images/img5.jpg" alt="eror" width={200} height={50} style={{border:"2  px solid blue",borderRadius:"100px", width:"15vw",height:"30vh", boxShadow: "0px 4px 8px rgba(1.5, 0, 1, 1)"}}/ >
        </div>
        </div>
        <div style={{marginTop:"50px"}}>
        <div style={{border:"1px solid black",width:"100vw"}}>
            <div style={{width:"100vw",backgroundColor:"pink"}}>
            <h1 style={{float:"left",marginLeft:"13px"}}><a href="/">Recent Post</a></h1>
            <h1 style={{float:"right",marginRight:"20px",color:"red"}}><a href="/">View all</a></h1>
            <div style={{display:"flex",flexDirection:"row"}}>
              <div style={{display:"flex",marginLeft:"10px"}}>

            <div style={{ marginRight:"50px"}}>
              
           <About/>
            </div>
            <div  style={{ marginRight:"50px"}}>

           <About/>
            </div>
            <div  style={{ marginRight:"50px"}}>

           <About/>
            </div>
              </div>

           
            </div>
            </div>
        </div>
        </div>
        <div style={{ margin:"50px 0 0 90px "}}>
          <h1>Featured works</h1>
        </div><div>
          
       <div style={{display:"flex", margin:"10px 0 70px 90px "}}>
        

        <div style={{margin:"0 15px 0 0" }}>
          <Image src="/images/img2.jpg" alt="eror" width={100} height={100} style={{width:"14vw",height:"118px"}}/>
          </div>
          

          <Blog/>
        
       </div>
       <div style={{display:"flex", margin:"10px 0 70px 90px "}}>
        

       <div style={{margin:"0 15px 0 0" }}>
          <Image src="/images/img3.jpg" alt="eror" width={100} height={100} style={{width:"14vw",height:"118px"}} />
          </div>
        

          <Blog/>
        
       </div>
       <div style={{display:"flex", margin:"10px 0 70px 90px "}}>
        

       <div style={{margin:"0 15px 0 0" }}>
          <Image src="/images/img4.jpg" alt="eror" width={100} height={100} style={{width:"14vw",height:"118px"}} />
          </div>
          

          <Blog/>
        
       </div>
       <div>

        <div style={{display:"flex",width:"25vw",justifyContent:"space-around",marginLeft:"500px"}}>
          <div>
          <a href="https://www.facebook.com/yourprofile" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M24 0v24H0V0h24z" fill="none"/><path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4C0 23.4.6 24 1.3 24h11.5v-9.3H9.5v-3.7h3.3V8.3c0-3.3 2-5.1 5-5.1 1.4 0 2.6.1 3 .1v3.4h-2.1c-1.6 0-2.1.8-2.1 2v2.6h4.1l-.5 3.7h-3.6V24h7c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z"/>
  </svg>
</a>
          </div>
          <div>

          <a href="https://twitter.com/yourprofile" target="_blank"/>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M24 2.6a9.9 9.9 0 0 1-2.9.8A4.8 4.8 0 0 0 23.3 1a9.8 9.8 0 0 1-3.1 1.2A4.8 4.8 0 0 0 11.6 5c0 .4 0 .7.1 1A13.7 13.7 0 0 1 1.6.9a4.8 4.8 0 0 0-.6 2.5 4.8 4.8 0 0 0 2.1 4 4.8 4.8 0 0 1-2.2-.6v.1a4.8 4.8 0 0 0 3.9 4.7 4.8 4.8 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3A9.7 9.7 0 0 1 0 21.5a13.7 13.7 0 0 0 7.4 2.2 13.7 13.7 0 0 0 13.8-13.8v-.6A9.8 9.8 0 0 0 24 2.6"/>
  </svg>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.45A1.77 1.77 0 0 0 1.77 24h20.45A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.09 20.45H3.54V9h3.55v11.45zM5.31 7.63a2.07 2.07 0 1 1 0-4.15 2.07 2.07 0 0 1 0 4.15zM20.45 20.45h-3.54v-5.49a3.31 3.31 0 0 0-6.62 0v5.49H6.76V9h3.54v1.47a4.82 4.82 0 0 1 8.5 3.51v6.47z"/>
  </svg>
</a>
          </div>
          <div>
          <a href="https://www.instagram.com/yourprofile" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 2 .2 2.5.3.6.2 1.1.4 1.5.8.4.4.6.9.8 1.5.1.4.2 1.3.3 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 2-.3 2.5-.2.6-.4 1.1-.8 1.5-.4.4-.9.6-1.5.8-.5.1-1.3.2-2.5.3-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-2-.2-2.5-.3-.6-.2-1.1-.4-1.5-.8-.4-.4-.6-.9-.8-1.5-.1-.5-.2-1.3-.3-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-2 .3-2.5.2-.6.4-1.1.8-1.5.4-.4.9-.6 1.5-.8.5-.1 1.3-.2 2.5-.3 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.8 0 8.4 0 7.1.1 5.9.1 5.1.2 4.5.4c-.7.2-1.3.5-1.8.9-.6.4-1.1 1-1.5 1.5-.4.6-.7 1.1-.9 1.8-.2.6-.3 1.5-.4 2.5C0 8.4 0 8.8 0 12s0 3.6.1 4.9c.1 1.2.2 2 .4 2.5.2.7.5 1.3.9 1.8.4.6 1 1.1 1.5 1.5.6.4 1.1.7 1.8.9.6.2 1.5.3 2.5.4 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2 0 2-.2 2.5-.3.7-.2 1.3-.5 1.8-.9.6-.4 1.1-1 1.5-1.5.4-.6.7-1.1.9-1.8.2-.6.3-1.5.4-2.5.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.2-2-.4-2.5-.2-.7-.5-1.3-.9-1.8-.4-.6-1-1.1-1.5-1.5-.6-.4-1.1-.7-1.8-.9-.6-.2-1.5-.3-2.5-.4C15.6.1 15.2 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zM12 15.2c-1.8 0-3.2-1.4-3.2-3.2S10.2 8.8 12 8.8s3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zM17.8 4.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
  </svg>
</a>

          </div>
          
</div>
<div style={{width:"25vw",justifyContent:"space-around",marginLeft:"500px"}}>
  <h1 style={{textAlign:"center"}}>Copyright  2024 All right resered</h1>
</div>
</div>
       </div>
      </div>
    </div>
    
  );
  
}
