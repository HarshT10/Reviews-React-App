import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(0);
  const { name, job, image, text } = reviews[person];

  const checkNumber = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (number > reviews.length - 1) {
      return 0;
    }
    return number;
  };

  const prevReview = () => {
    setPerson((prevState) => {
      const newState = prevState - 1;

      return checkNumber(newState);
    });
  };

  const nextReview = () => {
    setPerson((prevState) => {
      const newState = prevState + 1;

      return checkNumber(newState);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === person) {
      randomNumber = person + 1;
    }
    setPerson(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />

          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>

        <p className="job">{job}</p>

        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomReview}>
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
