const ExamData = {
  1: {
    title: "Computer Science Fundamentals",
    description: "An exam covering basic concepts in Computer Science.",
    duration: "60 minutes",
    totalQuestions: 20,
    passingScore: 70,
    topicsCovered: ["Data Structures", "Algorithms", "Computer Architecture"],
    sampleQuestions: [
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n", // Corrected closing parenthesis
      },
      {
        question:
          "Which data structure uses LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack",
      },
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Central Program Unit",
          "Computer Personal Unit",
          "Centralized Processing Unit",
        ],
        correctAnswer: "Central Processing Unit",
      },
      {
        question: "What is the purpose of an operating system?",
        options: [
          "To manage hardware resources",
          "To compile programs",
          "To connect to the internet",
          "To provide security",
        ],
        correctAnswer: "To manage hardware resources",
      },
      {
        question:
          "Which sorting algorithm has the best average time complexity?",
        options: [
          "Bubble Sort",
          "Selection Sort",
          "Merge Sort",
          "Insertion Sort",
        ],
        correctAnswer: "Merge Sort",
      },
      {
        question: "What is the primary purpose of an algorithm?",
        options: [
          "To solve a problem",
          "To organize data",
          "To create user interfaces",
          "To connect to the internet",
        ],
        correctAnswer: "To solve a problem",
      },
      {
        question: "What does RAM stand for?",
        options: [
          "Read Access Memory",
          "Random Access Memory",
          "Read And Memory",
          "Rapid Access Memory",
        ],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which of the following is a type of network topology?",
        options: ["Star", "Circle", "Square", "Triangle"],
        correctAnswer: "Star",
      },
      {
        question: "What is a byte?",
        options: [
          "A unit of data equal to 8 bits",
          "A type of computer memory",
          "A programming language",
          "A storage device",
        ],
        correctAnswer: "A unit of data equal to 8 bits",
      },
      {
        question:
          "Which of the following is an example of a high-level programming language?",
        options: ["Assembly", "C", "Java", "Machine Code"],
        correctAnswer: "Java",
      },
      {
        question: "What is the primary function of RAM?",
        options: [
          "Store data permanently",
          "Store data temporarily",
          "Process data",
          "Control peripherals",
        ],
        correctAnswer: "Store data temporarily",
      },
      {
        question: "What is a linked list?",
        options: [
          "A collection of nodes where each node points to the next",
          "A fixed-size array",
          "A type of tree structure",
          "A method of sorting data",
        ],
        correctAnswer:
          "A collection of nodes where each node points to the next",
      },
      {
        question: "Which of the following is a non-linear data structure?",
        options: ["Array", "Linked List", "Tree", "Stack"],
        correctAnswer: "Tree",
      },
      {
        question: "What is the main purpose of an algorithm?",
        options: [
          "To store data",
          "To perform computations",
          "To provide a step-by-step solution to a problem",
          "To display information",
        ],
        correctAnswer: "To provide a step-by-step solution to a problem",
      },
      {
        question:
          "Which programming paradigm is based on the concept of objects?",
        options: [
          "Procedural Programming",
          "Functional Programming",
          "Object-Oriented Programming",
          "Logic Programming",
        ],
        correctAnswer: "Object-Oriented Programming",
      },
    ],
  },
  // Add more exams as needed
};

export default ExamData;
