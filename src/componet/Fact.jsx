import React from "react";
import CountUp from "react-countup";
const facts = [
  {
    startNumber: "1",
    endNumber: "10",
    unit: "",
    title: "Years of Experience",
    desc: "We are 5 years of experienced in this yoga field. Giving the best instructions.",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Happy Clients",
    desc: "We have over five thousand clients all over the world. They are very satisfied.",
  },
  {
    startNumber: "1",
    endNumber: "15",
    unit: "",
    title: "Experienced Trainers",
    desc: "We have over fifteen dedicated and experienced trainer for yoga and meditation.",
  },
  {
    startNumber: "1",
    endNumber: "24",
    unit: "",
    title: "Monthly Classes",
    desc: "Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.",
  },
];

const Fact = () => {
  return (
    <>
      <div className="main">
        {facts.map((item, index) => {
          const { startNumber, endNumber, unit, title, desc } = item;
          return (
            <div className="mainco">
              <div className="mainnum" key={index}>
                <h1 className="num">
                  <CountUp start={startNumber} end={endNumber} />
                  {unit}+
                </h1>
                {/* <br/> */}
                <h3 className="ftit">{title}</h3>
                <p className="fdes">{desc}</p>
              </div>
            </div>
          );
        })}
        <div className="facttit">
          <h1>Relax And Enjoy a Personalized Day Yoga With Us.</h1>
          <br />
          <br />

          <h4>
            John Cena/ <span className="ffounder">Founder</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Fact;
