import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExamPage.css'; // Import the CSS file
const ExamPage = () => {
  const { course } = useParams(); // Get the course name from URL parameters
  // Mapping full course names to keys used in the questions object
  const courseMapping = {
    "Introduction to C": "c",
    "Web Development": "web",
    "Introduction to Java": "java",
    "Introduction to Python": "python",
    "Typing": "typing",
    "Painting": "painting",
  };
  // Normalize the course name by looking it up in the courseMapping object
  const normalizedCourse = courseMapping[course];
  // Questions for each course (at least 5 questions for each)
  const questions = {
    typing: [
      { id: 1, question: "What is the standard typing speed measured in?", options: ["Words per minute", "Characters per minute", "Pages per minute", "Lines per minute"], answer: "Words per minute" },
      { id: 2, question: "Which key is used to create a space between words?", options: ["Enter", "Backspace", "Spacebar", "Shift"], answer: "Spacebar" },
      { id: 3, question: "Which finger is used to type the letter 'A' on a QWERTY keyboard?", options: ["Left little finger", "Right index finger", "Left index finger", "Right little finger"], answer: "Left little finger" },
      { id: 4, question: "What is the correct posture for typing?", options: ["Hunched back", "Straight back", "Leaning forward", "Leaning backward"], answer: "Straight back" },
      { id: 5, question: "Which tool can be used to measure typing speed?", options: ["Stopwatch", "Typing software", "Ruler", "Calculator"], answer: "Typing software" },
    ],
    painting: [
      { id: 1, question: "What is the primary color in painting?", options: ["Red", "Black", "Green", "White"], answer: "Red" },
      { id: 2, question: "Which of these is a medium used in painting?", options: ["Oil", "Watercolor", "Acrylic", "All of the above"], answer: "All of the above" },
      { id: 3, question: "Which famous artist painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
      { id: 4, question: "Which of these colors is considered a 'warm' color?", options: ["Blue", "Red", "Green", "Purple"], answer: "Red" },
      { id: 5, question: "What is the term for a painting created on a wet plaster surface?", options: ["Fresco", "Mosaic", "Collage", "Etching"], answer: "Fresco" },
    ],
    c: [
      { id: 1, question: "What does 'C' stand for in programming?", options: ["Compiler", "Character", "Complex", "C Language"], answer: "C Language" },
      { id: 2, question: "Which symbol is used to terminate a statement in C?", options: [".", ";", ":", "/"], answer: ";" },
      { id: 3, question: "Which of the following is a loop in C?", options: ["for", "if", "while", "Both for and while"], answer: "Both for and while" },
      { id: 4, question: "What is the extension of C program files?", options: [".txt", ".c", ".cpp", ".java"], answer: ".c" },
      { id: 5, question: "Which function is used to print text on the screen in C?", options: ["scanf()", "printf()", "getchar()", "putchar()"], answer: "printf()" },
    ],
    web: [
      { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyper Text Marking Language", "High Text Markup Language", "Hyper Tool Markup Language"], answer: "Hyper Text Markup Language" },
      { id: 2, question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
      { id: 3, question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], answer: "<a>" },
      { id: 4, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
      { id: 5, question: "What does 'www' stand for in a website URL?", options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], answer: "World Wide Web" },
    ],
    java: [
      { id: 1, question: "Which company developed Java?", options: ["Sun Microsystems", "Microsoft", "Oracle", "IBM"], answer: "Sun Microsystems" },
      { id: 2, question: "Which keyword is used to create a class in Java?", options: ["class", "public", "void", "new"], answer: "class" },
      { id: 3, question: "What is the file extension of Java bytecode files?", options: [".class", ".java", ".jvm", ".jar"], answer: ".class" },
      { id: 4, question: "Which method is used to start the execution of a Java program?", options: ["start()", "run()", "main()", "execute()"], answer: "main()" },
      { id: 5, question: "Which of the following is a primitive data type in Java?", options: ["String", "int", "Object", "ArrayList"], answer: "int" },
    ],
    python: [
      { id: 1, question: "What is the correct file extension for Python files?", options: [".py", ".python", ".pyt", ".pyth"], answer: ".py" },
      { id: 2, question: "What is the keyword used to define a function in Python?", options: ["function", "def", "fun", "define"], answer: "def" },
      { id: 3, question: "Which of the following is a valid Python data type?", options: ["Integer", "String", "List", "All of the above"], answer: "All of the above" },
      { id: 4, question: "How do you start a comment in Python?", options: ["//", "/*", "#", "<!--"], answer: "#" },
      { id: 5, question: "Which function is used to get input from the user in Python?", options: ["scanf()", "input()", "get()", "read()"], answer: "input()" },
    ],
  };
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [marks, setMarks] = useState(0);
  // Handle answer change
  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let totalMarks = 0;
    // Check if the course is valid
    if (questions[normalizedCourse]) {
      questions[normalizedCourse].forEach((question) => {
        if (answers[question.id] === question.answer) {
          totalMarks += 1; // Increment mark for correct answer
        }
      });
    } else {
      console.error("Invalid course name:", normalizedCourse); // Log invalid course names
    }
    setMarks(totalMarks); // Set the total marks
    setSubmitted(true); // Set submitted state to true
  };
  // Render questions for the specified course
  const renderQuestions = () => {
    if (!questions[normalizedCourse]) {
      return <p>Invalid course. Please check the course name in the URL.</p>;
    }
    return (
      <form onSubmit={handleSubmit}>
        {questions[normalizedCourse].map((question) => (
          <div key={question.id} className="question-box">
            <p>{question.question}</p>
            {question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  onChange={() => handleAnswerChange(question.id, option)}
                  checked={answers[question.id] === option}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  };
  // Render results after submission
  const renderResults = () => {
    if (!questions[normalizedCourse]) return null;
    return (
      <div className="result">
        <h2>Your score is {marks} out of {questions[normalizedCourse].length}</h2>
        <h3>Your Answers:</h3>
        <ul>
          {questions[normalizedCourse].map((question) => (
            <li key={question.id}>
              <strong>{question.question}</strong> <br />
              Your answer: {answers[question.id] || "Not answered"} <br />
              Correct answer: {question.answer}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="exam-page">
      <h1>{course} Exam</h1>
      {submitted ? renderResults() : renderQuestions()}
    </div>
  );
};
export default ExamPage;