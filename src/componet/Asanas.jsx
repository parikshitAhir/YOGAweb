import React from "react";
import { useNavigate } from "react-router-dom";



const Asanas =()=>{

  const Naviget = useNavigate();

   
    return(
        <>
        <div className="asan">
    <div className="asan_main">
    <div className="ybbtnfirst">
          <button className="ybbtnrve"
           onClick={()=>{
            Naviget(-1);

          }}
          >
            <img className="revimg" src="./Images/rev.png"></img>
          </button>
        </div>
    <div>
<h1 className="asantith1">ASANAS: MEANING, DEFINITION</h1>
<img className="asantitline" src="./Images/line.png" alt="line"></img>
<img className="asantitimg" src="	./Images/Asanas.jpg" alt="titimg"></img>

</div>
<div className="asantitp" >
<p >Anyone who’s taken a yoga class has probably heard the term “asana.” Asanas are the physical body positions or poses of yoga that form the foundation of a modern hatha yoga practice. While most classes only teach the basics, there is a wide range of difficulty and complexity of the yoga asanas. To fully understand and learn the asanas, we will need to uncover the history of them, their origin, and how they’re used today in yoga. Gaining this knowledge opens up the doors for us to have a deep, profound and insightful practice.</p>

<br/>
<h1 >Asana meaning and definition in Yoga</h1>
<br/>
  
<p>
Asana is a Sanskrit word meaning “posture,” “seat,” or “place.” Asanas are the physical positions we assume during a hatha yoga practice. Each pose has its own Sanskrit and English name. Almost all of the Sanskrit names for the poses end with “asana.” For example, the classic lotus pose is named Padmasana, and the common tree poses is named Vrikshasana. Many of the asana names have come from the shapes and movements of animals and elements of the natural world. Some names differ by different schools of yoga, and some of the names have changed over time. There are several asanas that have been known by multiple names at different time periods.
</p>
<br/>
<p>
There are many different types of poses, but they all follow the same basic principles of alignment and muscular engagement. They include everything from simple twists and backbends to advanced balancing poses. There can be many variations on the individual poses, and each variation has its own benefits, purpose and challenges.
</p>
<br/>
<p>An asana can be performed as a still and static position that can be held for several breaths, or it can be a posture that is part of a dynamic flowing movement that lasts for less than one inhale or exhale. The period of time it is held is dependent on the school of yoga followed and the intensity and difficulty of the physical posture. For example, Iyengar Yoga emphasizes yoga anatomy and physical alignment so the poses are held a while. In contrast, Ashtanga Yoga and Vinyasa styles move quickly between poses linking movements with breath as in the sun salutations.

</p>
<br/>
<br/>

<h1 className="asan10">10 Easy Yoga Asanas for Beginners</h1>
<br/>
<p>Right from its origins from about 5000 years ago, yoga has now got a worldwide appeal - its significance and benefits appreciated and proven through scientific studies and practices; its profundity obvious when we see the smile that it offers to those health-conscious - be it in terms of physical fitness and a calm, serene mind or through the attainment of higher states of consciousness.</p>
<br/>
<p>Yoga for beginners is all about connecting to that yogi in us, to remind us of the wonder poses that we are all familiar with. This wonderful inheritance of our ancient tradition has a multi-fold effect on us. It helps us to increase our awareness; to be in the present moment, with a calm relaxed state of mind, while making our body flexible and healthier.</p>
<br/>
<img className="asanbegimg" src="./Images/asanpo.jpg"></img>
<br/>
<br/>
<p>Whether you are a beginner, an intermediate or an expert, it is advisable to begin your yoga routine with warm-ups and Sukshma Vyayam (gentle exercises). Few minutes of warm-ups make the tendons more flexible, while Sukshma Vyayam relaxes the body. Once through, you can perform the following sequence of easy-to-do yoga poses for beginners</p>
<br/>
<br/>
<h4>10 Easy Yoga Asanas for beginners</h4>
<br/>
<ui className="asanyog">
<li className="asanyog">Paschimottanasana (Seated forward bend)</li>
<li className="asanyogli">Veerabhadrasana (Warrior pose )</li>
<li className="asanyogli">Marjiarasana (Cat pose)</li>
<li className="asanyogli">Shishuasana (Child pose)</li>
<li className="asanyogli">Ardha Chakrasana (Bending backward)</li>
<li className="asanyogli">Hastapadasana (Forward bend)</li>
<li className="asanyogli">Utkatasana (Chair pose)</li>
<li className="asanyogli">Yoga Nidra (Yogic sleep)</li>
<li className="asanyogli">Baddha Konasana (Butterfly pose)</li>
<li className="asanyogli">Konasana (Angle pose)</li>

</ui>
<br/>
    
    </div>
    </div>
    </div>
        </>
    );
}
export default Asanas;