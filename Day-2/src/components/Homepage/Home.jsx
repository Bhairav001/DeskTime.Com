import React from "react"
import {Button, Stack} from "@chakra-ui/react"
import "./HomePage.css"
function Home(){
  return(
  <div>
      <div id="main">
           <div id="main-1">
             <h1>The ultimate all-in-one automatic time tracker</h1>
             <p>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</p>
             <Stack spacing={3}>
               <input type="text" placeholder="Your work email" size="md"/>
               <Button>START FREE TRIAL</Button>
             </Stack>
             <p>Try free for 14 days. No credit card required.
               By signing up, you agree to our terms and privacy policy.</p>
           </div>
           <div>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/sgmDvqlSMF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
      </div>
  </div>
  )
}
export default Home