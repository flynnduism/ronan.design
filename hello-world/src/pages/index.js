import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Header />
    
    <h1><img src="images/ronan.svg" alt="Ronan" /></h1>
    <p>I was born in <a class="hilite personal" href="https://dl3.pushbulletusercontent.com/oXwKRbg4t4TllrVHTZfwXOam9i8iNK4P/Screen%20Shot%202019-12-11%20at%202.49.19%20PM.png">Ireland in 1983</a>, and via a dial-up modem and a lot of CD burning, I found my way to being a designer of screen-based <a class="hilite oss" href="https://gist.github.com/flynnduism/4538d598abd956f22687">things</a>. I graduated from <a href="https://www.dcu.ie/courses/undergraduate/communications/multimedia.shtml">DCU</a> with a BSc in Multimedia and spent my 20s working in <a class="hilite job" href="https://twitter.com/cloudsteph/status/1186897824396578816">digital design agencies</a> and startups in Dublin, before moving to California in 2013 and <a class="hilite personal" href="http://ronanandamiee.com/">getting married</a>.</p>
    <p>Two cats and <a class="hilite personal" href="https://www.instagram.com/p/BpsV4dWBuMa/">two children</a> later, I live in Point Richmond, CA. I've spent the last seven years specializing in front-end and UX design work at <a class="hilite job" href="https://web.archive.org/web/20150310011433/https://www.engineyard.com/">Engine Yard</a>, <a class="hilite job" href="https://www.irishtimes.com/business/technology/sophos-acquires-irish-cybersecurity-start-up-barricade-1.2851925">Barricade</a> and <a class="hilite job" href="https://blogs.microsoft.com/blog/2017/04/10/microsoft-acquire-deis-help-companies-innovate-containers/">Deis</a>.</p>
    <p>Now I am part of the Containers team at <a class="hilite job" href="https://azure.microsoft.com/">Microsoft Azure</a> - where I design, brand, build and work on <a class="hilite oss" href="https://github.com/deislabs/">open source</a> <a class="hilite oss" href="https://helm.sh/">community projects</a>; continuing our goal to make technical development tools accessible and friendly to all.</p>

    <p><a href="https://twitter.com/flynnduism">@flynnduism</a></p>
    
    <Footer />
  )
}
