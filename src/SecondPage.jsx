import React from 'react'
import './m.css'
import logo2 from './images/logo2.png'
import palm from './images/palm.png'
import headquaters from './images/headquaters.png'
import boss from './images/boss.png'
import Star from './images/Star.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function SecondPage() {
  const star = <img src={Star} />
  return (
    <div className='main'>
        <div className='main__intro'>
          <img src={logo2} />
          <div className='main__intro__title'>Get Top Quality<br/>Palm Oil from Saro</div>
          <div className='main__intro__button'></div>
          <div className='main__intro__buttons'></div>
          <div className='main__intro__buttons2'></div>
        
        </div>
        <div className='main__next'>
           <div>
              <h2 className='main__next__head'>LEARN ABOUT US</h2>
              <h3 className='main__next__title'>About Saro<br/>Oil Palm</h3>
            </div> 
            <div>
              <div className='main__next__text'>
                Saro Oil Palm Limited a multi-billion naira project is the single biggest investment
                decision that<br/> Saroafrica group has taken from inception till date.<br/>
                The investment in Oil Palm represents our stake and commitment towards achieving the group's<br/> 
                strategic objective to transform Saroafrica into a main player in the Agricultural value chain.
              </div>
              <div className='main__next__button'>Learn More</div>  
            </div>
        </div>
        <div className='work'>
              <img src={palm} />
              <div className='work__info'>
                <div className='work__header'>
                  how it works
                </div>
                <div className='work__main'>
                  Our Value Offering 
                </div>
                <div className='work__content'>
                  With consumers at the heart of our business,
                  we re focused on<br/> complying with RSPO standards
                  in production of:
                </div>
                <div className='work__head'>
                  Top Quality Palm Oil
                </div>
                <div className='work__two'>
                  Crude & refined, planted and processed to 
                  meet the consumer and<br/> industry needs.
                </div>
                <div className='work__head'>
                  Top quality PKO
                </div>
                <div className='work__two'> 
                  Crude & refined, as Industrial feed for both 
                  local and global market
                </div>
                <div className='work__head'>
                  Crude Palm Kernel Cake 
                </div>
                <div className='work__two'>
                  As Industrial feed for both local 
                  and global market
                </div>
                <div className='work__button'>
                    <div className='work__button__text'>Learn More</div>
                </div>
              </div>     
        </div>
        <div className='about'>
          <div className='about__us'>
            About us
          </div>
          <div className='about__header'>
            Learn more about<br/><span> Saro Oil Palm</span>
          </div>
          <div className='about__text'>
            Saro Oil Palm, still a project under Saro Africa<br/>
            International is currently being supervised by the<br/>
            Saroafrica Board.
          </div>
          <div className='about__button'>
            <div className='about__button__text'>
              View Our Management Team
            </div>
          </div>
          <div>
            <div className='about__headquaters'>
                 <img src={headquaters} />
            </div>
            <div className='about__boss'>
                <img src={boss} />
            </div>
          </div>
        </div>
        <div className='capabilities'>
          <div className='capabilities__header'>learn more </div>
          <div className='capabilities__text'>Our Capabilities</div>
          <div className='capabilities__points'>
            <span>1</span>
            <div className='capabilities__state'>Integrity</div>
          </div>
          <div className='capabilities__points'>
            <span>2</span>
            <div className='capabilities__state'>Accountability</div>
          </div>
          <div className='capabilities__points'>
            <span>3</span>
            <div className='capabilities__state'>Talent management</div>
          </div>
          <div className='capabilities__points'>
            <span>4</span>
            <div className='capabilities__state'>Strategic Thinking</div>
          </div>
          <div className='capabilities__points'>
            <span>5</span>
            <div className='capabilities__state'>Shared Mindset</div>
          </div>
          <div className='capabilities__points'>
            <span>6</span>
            <div className='capabilities__state'>Speed & Aggression</div>
          </div>
        </div>
        <div className='contact'>
            <h1>happy clients</h1>
            <h2>What our clients<br/><span> are saying</span></h2>
            <h3>These are things that customers who have<br/> used our services say.</h3>
            <div className='contact__box'>
                <div className='contact__info'>
                    <div className='contact__circle'></div>
                    <h2>“Thank you so much for valuing me as 
                      a customer,<br/> and coming through for me 
                      and my family at a<br/> trying time in this world.”
                    </h2>
                    <hr/>
                    <div className='contact__circle2'></div>
                    <h3>Chintya Xin</h3>
                    <h4>Housewife</h4>
                    <div className='star__rating'>{star}{star}{star}{star}{star}</div>
                </div>
                <div className='contact__info'>
                    <div className='contact__circle'></div>
                    <h2>“This is by far the simplest, most frictionless,<br/>
                         easiest-to-get-going platform that I’ve ever applied<br/>
                         on. The check was seamless. ”
                    </h2>
                    <hr/>
                    <div className='contact__circle2'></div>
                    <h3>Braun Yes</h3>
                    <h4>CEO Of Arcane</h4>
                    <div className='star__rating'>{star}{star}{star}{star}{star}</div>
                </div>
                <div className='contact__info'>
                    <div className='contact__circle'></div>
                    <h2>“This is by far the simplest, most frictionless,<br/> easiest-to-get-going
                         platform that I’ve ever<br/> applied on. The check was seamless. ”
                    </h2>
                    <hr/>
                    <div className='contact__circle2'></div>
                    <h3>Nazmi Javier</h3>
                    <h4>Househusband</h4>
                    <div className='star__rating'>{star}{star}{star}{star}{star}</div>
                </div>             
            </div>
             <div className='contact__end'>
                  <h1><span>We would</span> love to talk<br/> with you!</h1>
                  <h3>You want to ask something to us, just by clicking the<br/> button next to it 
                      and contact us directly.
                  </h3>
                  <div className='contact__button'><span>Contact Us</span></div>
                  <hr/>
             </div> 
             <div className='contact__last'>
                      <h1>Saro oil Palm</h1>
                      <h3>Learn about us and how we can help you with<br/> loans to rehabilitate your home 
                        and sell. Also<br/> learn about our works.
                      </h3>
                    
                    
                    <div className='contact__last__link'>
                      <h1>Links</h1>
                      <h2>Home</h2>                     
                      <h2>About us</h2>                     
                      <h2>Contact us</h2>                     
                    </div>
                    <div className='contact__last__about'>
                      <h1>About</h1>
                      <h2>About Saro Oil Palm</h2>                     
                      <h2>Management Team</h2>                     
                      <h2>Our values</h2>                     
                    </div>
                    <div className='contact__last__address'>
                      <h1>Our Office</h1>
                      <h2>Address</h2>                                         
                      <h2>Address</h2>                                         
                    </div>
                   
             </div> 
             <div className='facebook'><FacebookIcon /></div>
             <div className='instagram'><InstagramIcon/></div>
             <div className='twitter'><TwitterIcon/></div> 
             <div className='mail'><EmailIcon/></div> 
        </div>
    </div>

  )   
}

export default SecondPage