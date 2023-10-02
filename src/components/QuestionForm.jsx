import React, { useState } from "react";
import { Select, Input, Button } from "antd";

const { Option } = Select;

function QuestionForm() {
  const [selectedType, setSelectedType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [choice, setChoice] = useState("");

  const handleAddQuestion = () => {
    if (
      selectedType === "paragraph" ||
      selectedType === "shortAnswer" ||
      selectedType === "yesNo"
    ) {
      // Add a question without choices
      setQuestions([...questions, { type: selectedType, text: "" }]);
    } else if (
      selectedType === "multipleChoice" ||
      selectedType === "dropDown"
    ) {
      // Add a question with choices
      setQuestions([
        ...questions,
        { type: selectedType, text: "", choices: [choice] },
      ]);
      setChoice(""); // Clear the choice input
    } else if (selectedType === "video") {
      // Add a video question
      setQuestions([...questions, { type: selectedType, text: "" }]);
    }
    setSelectedType(""); // Clear the selected type
  };

  const handleAddChoice = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].choices.push("");
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = text;
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (questionIndex, choiceIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices[choiceIndex] = text;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <Select
        style={{ width: 200, marginBottom: 16 }}
        placeholder="Select a question type"
        value={selectedType}
        onChange={(value) => setSelectedType(value)}
      >
        <Option value="paragraph">Paragraph</Option>
        <Option value="shortAnswer">Short Answer</Option>
        <Option value="yesNo">Yes or No</Option>
        <Option value="multipleChoice">Multiple Choice</Option>
        <Option value="dropDown">Drop Down</Option>
        <Option value="video">Video</Option>
      </Select>

      {selectedType && (
        <div>
          {selectedType !== "video" && (
            <div>
              <label>Question:</label>
              <Input
                value={questions[questions.length - 1]?.text || ""}
                onChange={(e) =>
                  handleQuestionChange(questions.length - 1, e.target.value)
                }
              />
            </div>
          )}

          {(selectedType === "multipleChoice" ||
            selectedType === "dropDown") && (
            <div>
              <label>Choice:</label>
              <Input
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
              />
              <Button onClick={() => handleAddChoice(questions.length - 1)}>
                +
              </Button>
              {questions[questions.length - 1]?.choices.map(
                (choice, choiceIndex) => (
                  <div key={choiceIndex}>
                    <label>Choice:</label>
                    <Input
                      value={choice}
                      onChange={(e) =>
                        handleChoiceChange(
                          questions.length - 1,
                          choiceIndex,
                          e.target.value
                        )
                      }
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}

      <Button type="primary" onClick={handleAddQuestion}>
        Add
      </Button>

      <div>
        <h3>Questions:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.text} ({question.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionForm;
