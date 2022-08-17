import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hoverEffect from 'hover-effect'

let smallMediaQuery = window.matchMedia("(max-width:767px)");
let largeMediaQuery = window.matchMedia("(min-width:992px)");
const scrollEl = document.querySelector("[data-scroll-container]");
// const body = document.body;


// custom cursor
const cursor = document.querySelector('.cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 2;`)    
}


// navigation
const tl = gsap.timeline({paused:true, reversed: true});
tl.to('.box', {height: '100vh', duration: .5, transformOrigin: 'bottom', stagger: .3})
tl.to('.mobile-logo', {opacity: '1'})
tl.to('.nav-main__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3})
tl.from('#close', {opacity: '0'})


const navIcon = document.querySelector('#nav');
const navClose = document.querySelector('#close');
navIcon.onclick = function() {
    if (tl.reversed()) {
        this.classList.add('nav-anim')
        tl.play()
        tl.to('#close', {opacity: '1'})
        document.classList.add('#close');
        document.body.classList.add('noScroll');
    }
}
navClose.onclick = function() {
if(tl) {
  this.classList.remove('nav-anim')
  tl.reverse()
  document.body.classList.remove('noScroll');
}
}

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: scrollEl,
  smooth: true,
  lerp: 0.06,
});

setTimeout(() => {
  scroll.update();
}, 1000);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scroll.el, {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

export default class Home {
  constructor(scroll) {
    this.locomotive = scroll;
    this.homeIntro();
    this.homeAnimations();
    this.textAnimation();
    this.myAnimation();
  }


  homeIntro() {
    const tl = gsap.timeline();

    gsap.to(scrollEl, {
      autoAlpha: 1,
    });

    // preloader 
// 
 tl.to('.l-box', {height: '0', duration: 1.8,delay:2.1, transformOrigin: 'bottom', stagger: .5})
// tl.play();
gsap.utils.toArray(".sop").forEach(TextIntro => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: TextIntro,
      toggleActions: "play none none none",
    },
  })
tl.to(TextIntro, {
 
 
  duration: 1.5,
  x: -100,
  skewY: 3,
  opacity: 0,
  stagger: 0.3,
  delay:-1,
  ease: "Power3.easeOut",
 
},);


})
gsap.utils.toArray(".port").forEach(TextIntrotwo => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: TextIntrotwo,
      toggleActions: "play none none none",
    },
  })
tl.to(TextIntrotwo, {
 
 
  duration: 1.5,
  y: 100,
  skewY: 3,
  opacity: 0,
  stagger: 0.3,
  delay:0.5,
  ease: "Power3.easeOut",
 
},);






})
    // Mobile
    var smallListener = function(e){
      if(e.matches){
    tl.from(".home__main__nav", {
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
      yPercent: -100,
      ease: "power4.out",
    })
  // .from(".hero__title [title-overflow]", {
    // duration: 0.2,
    // yPercent: 100,
    // stagger: {
      // amount: 0.2,
    // },
    // ease: "power4.out",
  // })
      .from(
        ".hero__title .bottom__right",
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
        },
        "<20%"
      )
      .set(".hero__title .overflow", { overflow: "unset" })
      .from(
        ".hero__title .mobile",
        {
          duration: 0.7,
          yPercent: 100,
          delay:-2,
          stagger: {
            amount: 0.2,
          },
          ease: "power4.out",
        },
        "-=1.4"
      );
    }}

// Desktop
    var largeListener = function(e){
      if(e.matches){

    tl.from(".home__main__nav", {
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
      yPercent: -100,
      ease: "power4.out",
    })
      .from(".hero__title [title-overflow]", {
        duration: 0.7,
        yPercent: 100,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      })
      .from(".home__hero .timeline_container .timeline ul li:nth-child(even) div", {
        duration: 0.7,
        xPercent: -100,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      })
      .from(".home__hero .timeline_container .timeline ul li:nth-child(odd) div", {
        duration: 0.7,
        xPercent: 100,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      })
     .from(
        ".hero__title .bottom__right",
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
        },
        "<20%"
      )
      .set(".hero__title .overflow", { overflow: "unset" })
      .from(
        ".hero__title .mobile",
        {
          duration: 0.7,
          yPercent: 100,
          stagger: {
            amount: 0.2,
          },
          ease: "power4.out",
        },
        "-=1.4"
      );
    }}

//Add the listener to MediaQueryList
smallMediaQuery.addListener(smallListener);
largeMediaQuery.addListener(largeListener);

// Initialise onload
smallListener(smallMediaQuery); 
largeListener(largeMediaQuery); 
  }

  homeAnimations() {
    gsap.to(".home__projects__line", { autoAlpha: 1 });
    gsap.utils.toArray(".home__projects__line").forEach((el) => {
      const line = el.querySelector("span");
      gsap.from(line, {
        scrollTrigger: {
          trigger: el,
          scroller: "[data-scroll-container]",
        },
        duration: 1.5,
        scaleX: 0,
      });
    });

    gsap.utils.toArray("[data-fade-in]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scroller: "[data-scroll-container]",
        },
        duration: 1.5,
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
      });
    });

      gsap.utils.toArray(".home__projects__project").forEach((el) => {
        const text = el.querySelector(".title__main");
        const link = el.querySelector(".project__link");
        gsap.from([text, link], {
          scrollTrigger: {
            trigger: el,
            scroller: "[data-scroll-container]",
          },
          duration: 1.5,
          yPercent: 80,
          stagger: {
            amount: 0.2,
          },
          ease: "power4.out",
        });
      });
  }

  textAnimation() {
    gsap.to(".hero__title__dash", {
      scrollTrigger: {
        trigger: ".hero__title",
        scroller: "[data-scroll-container]",
        scrub: true,
        start: "-8% 9%",
        end: "110% 20%",
      },
      ease: "none",
      scaleX: 4,
    });
 
 
    gsap.to(".timeline_container .timeline ul li:nth-child(odd) div", {
      scrollTrigger: {
        trigger: ".hero__title",
        scroller: "[data-scroll-container]",
        scrub: true,
        start: "-8% 9%",
        end: "110% 20%",
      }, 
      opacity: 0,
      duration: 0.8,
      yPercent: 90,
    });

    gsap.to(".timeline_container .timeline ul li:nth-child(even) div", {
      scrollTrigger: {
        trigger: ".hero__title",
        scroller: "[data-scroll-container]",
        scrub: true,
        start: "-8% 9%",
        end: "110% 20%",
      }, 
      opacity: 0,
      duration: 0.8,
    
    });
  }

 myAnimation(){
   Array.from(document.querySelectorAll('.home__projects__img')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));
	new hoverEffect({
		parent: el,
	  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: '../img/displacement-image.png',
	});
});
 }

}


new Home(scroll);
