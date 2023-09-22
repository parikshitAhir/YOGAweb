import React from "react";
import { useNavigate } from "react-router-dom";



const Prmedision =()=>{

    const Naviget = useNavigate();
   
    return(
        <>
         <div className="yb_main">
         <div className="ybbtnfirst">
          <button className="ybbtnrve"
           onClick={()=>{
            Naviget(-1);
            

          }}
          >
            <img className="revimg" src="./Images/rev.png"></img>
          </button>
        </div>
        
<img className="yogabigmain_img" src="	https://yoga.in/wp-content/uploads/2022/04/Online-Yoga-pranayama-meditation.jpg">
</img>
<div className="pmtit">
    <h1 className="ybtith1">Online Yoga | Pranayama & Meditation Course for Beginners</h1>
    <h2 className="ybtith2">by Shri Sushant Pandey, 20+ years teaching experience, ex Faculty Bihar School of Yoga</h2>
    </div>

<div className="ybmainp">
    <p className="ybp">Mental exhaustion, stress, anxiety? The modern day and age throws such unique challenges at us from time to time. A combination of Pranayama and Meditation is a potent package to cope with these and initiate healing. In the yogic tradition, there are systematic processes to transform the nature and function of your mind. As a result, the mind reaches a state of deep rest and relaxation.</p>
    <br/>
    <p className="ybp">Pranayama is one of the most effective yogic processes that calms down the nerves and enhances mental vigour. It helps clear the mind and activate relaxation response in the body-mind system.</p>
    <br/>
    <p className="ybp">Meditation helps balance the emotional life of an individual and develop relaxed awareness & one-pointedness (Ekagrata). For instance, Yoga Nidra works on cumulative stress and deep-seated anxieties. Likewise, there are various meditation techniques that focus on the other crucial aspects of mental health.</p>
    <br/>
    <p className="ybp">The course aims to develop an insight into the rich tradition of Yogic discipline in a holistic and authentic way with adequate exposure to the various theoretical and practical aspects of Pranayama and Meditation. It is designed to provide everyday tools to assist you in dealing with your mind and its complexities. The course is also an opportunity to set aside time for yourself, and discover your true nature..</p>
    <br/>
    <p className="ybp">Find a little space and have your mat ready for this 5-day, 90-minute class.</p>
    <br/>
    </div>

<div className="ybbox_main">
<div className="ybbox1">
    <h3 className="ybboxh3">Traditional Approach</h3>
    <p className="ybboxp">The course is specially designed for beginners on the foundation of Classical Hatha Yoga promoted Bihar School of Yoga</p>
</div>
<div className="ybbox1">
    <h3 className="ybboxh3">Experienced Yoga Gurus</h3>
    <p className="ybboxp">Classes are taken by senior teachers with decades of experience in teaching yoga, both online and offline.</p>
</div>
<div className="ybbox1">
    <h3 className="ybboxh3">Interactive Sessions</h3>
    <p className="ybboxp">Active interaction & personal attention by teacher creates an environment for learning and evolving with confidence.</p>
</div>
<br/>

</div>

<div className="pmtec">
    <img className="pmtecimg" src="	https://yoga.in/wp-content/uploads/2022/04/sushant-200x200.jpg" alt="manimg"></img>
  
<div className="pmtec_mainp">
    <p className="pmtecp">Sushant is a postgraduate in Yoga Psychology (1997-99), from the World-renowned Bihar School of Yoga and worked as a Lecturer there in the same department for four years. As a lecturer at the Yoga University, Sushant had opportunities to lead practical classes on Hatha and Kundalini Yoga, traditional Meditations and Philosophy talks with specialization in Samkhya, Tantra, Kundalini and Yoga Philosophies.</p>

    </div>
</div>
<br/>

       </div>
        </>
    );
}
export default Prmedision;