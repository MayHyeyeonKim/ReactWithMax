import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import { quizQuestions as QUESTIONS } from "../questions";
import Answers from "./Answers";

interface QuestionProps {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
}

const Question = ({ index, onSelectAnswer, onSkipAnswer }: QuestionProps) => {
  const [answer, setAnswer] = useState<{
    selectedAnswer: "" | string;
    isCorrect: boolean | null;
  }>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer: string) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    });
  };

  let answerState: "" | "correct" | "wrong" | "answered" = ""; // '=""' is default

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="questions">
      {answer.selectedAnswer === "" && (
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={onSkipAnswer}
          mode={answerState}
        />
      )}
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
