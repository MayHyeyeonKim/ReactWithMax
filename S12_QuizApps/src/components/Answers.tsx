import { useRef } from "react";

interface AnswersProps {
  answers: string[];
  selectedAnswer: string;
  answerState: "correct" | "wrong" | "answered" | "";
  onSelect: (answer: string) => void;
}

const Answers = ({ answers, selectedAnswer, answerState, onSelect }: AnswersProps) => {
  const shuffledAnswers = useRef<string[]>([]);

  if (shuffledAnswers.current.length === 0) {
    shuffledAnswers.current = [...answers];
    // Math.random has known issues but is sufficient for this use case
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer: string) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
