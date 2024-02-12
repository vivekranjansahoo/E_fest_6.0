import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What are the events in E-FEST 5.0?",
    answer:
      "There are a total of 5 events: 1. Biz-Tank  2. Pitch Against The Startup 3. Bidding War 4. Prototype Exhibition (Junior) and (Senior)  5. AD-MAD Show",
  },
  {
    question: "How do I participate in the events?",
    answer:
      "You can register directly from the registration link provided in the website.",
  },
  {
    question: "How many events can I participate in?",
    answer: "You can participate in a maximum of 2 events",
  },
  {
    question: "Whom to contact for any information regarding E-FEST 5.0?",
    answer: "Contact the event management team for further queries.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
