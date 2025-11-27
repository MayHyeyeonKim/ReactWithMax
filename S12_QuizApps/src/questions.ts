export interface QuizQuestion {
  id: string;
  text: string;
  answers: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      "By using the 'new' keyword followed by the component name.",
    ],
  },
  {
    id: "q5",
    text: "What does the term 'React state' imply?",
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using map() to iterate over an array and return JSX.",
      "By using a for() loop to return JSX.",
      "By using forEach() to return JSX.",
      "By using a loop() method to return JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },

  // --- ADDED QUESTIONS (10 more) ---
  {
    id: "q8",
    text: "What is the key difference between props and state?",
    answers: [
      "Props are external and read-only; state is internal and mutable.",
      "Props are internal to the component.",
      "State is passed from parent to child.",
      "Props always trigger API calls.",
    ],
  },
  {
    id: "q9",
    text: "What is a React ref used for?",
    answers: [
      "Accessing DOM nodes or storing mutable values across renders.",
      "Sharing global data between components.",
      "Rendering lists efficiently.",
      "Handling errors in child components.",
    ],
  },
  {
    id: "q10",
    text: "Which statement best describes a JavaScript Promise?",
    answers: [
      "An object representing a future completed or failed asynchronous result.",
      "A function that always executes immediately.",
      "A synchronous wrapper around callbacks.",
      "A built-in React feature for scheduling renders.",
    ],
  },
  {
    id: "q11",
    text: "Why is className used instead of class in React?",
    answers: [
      "Because 'class' is a reserved keyword in JavaScript.",
      "Because React transforms all attributes automatically.",
      "Because HTML does not allow the word class.",
      "Because it creates CSS modules automatically.",
    ],
  },
  {
    id: "q12",
    text: "What does useContext provide?",
    answers: [
      "A way to read shared context values without prop drilling.",
      "A way to trigger component re-renders manually.",
      "A built-in router replacement.",
      "A replacement for Redux reducers.",
    ],
  },
  {
    id: "q13",
    text: "What role does a Context Provider play?",
    answers: [
      "It supplies a value that descendant components can read via useContext.",
      "It stores component state.",
      "It forces re-renders globally.",
      "It defines layout boundaries.",
    ],
  },
  {
    id: "q14",
    text: "What does a reducer do in React?",
    answers: [
      "Processes actions to produce a new state.",
      "Automatically fetches API data.",
      "Creates global event listeners.",
      "Optimizes component rendering.",
    ],
  },
  {
    id: "q15",
    text: "What is the primary benefit of useReducer?",
    answers: [
      "Managing complex state logic in a predictable way.",
      "Sharing data between projects.",
      "Creating animations.",
      "Handling form validation automatically.",
    ],
  },
  {
    id: "q16",
    text: "What does the useEffect hook handle?",
    answers: [
      "Running side effects after render.",
      "Manipulating CSS classes.",
      "Executing synchronous functions only.",
      "Rendering fallback UI components.",
    ],
  },
  {
    id: "q17",
    text: "What is a controlled component in React?",
    answers: [
      "A component whose input values are managed by React state.",
      "A component that cannot receive props.",
      "A component that only renders once.",
      "A component controlled by the browser automatically.",
    ],
  },
];
