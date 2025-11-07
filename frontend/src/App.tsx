import { Box, Container, Typography } from "@mui/material";
import QuestionList from "./components/QuestionList";
import { QuestionView } from "./components/QuestionView";
import { useState } from "react";
import { questions, type Question } from "./data/questions";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<Question | null>(null);
  return (
    <>
      <Typography variant="h1" color="primary">
        Goliaths of Pollution and Davids of Polluted
      </Typography>
      <Typography variant="h2" color="secondary">
        Climate Inequality
      </Typography>
      <Box
        component="img"
        sx={{
          height: "auto",
          width: "80%",
        }}
        alt="Home"
        src="src/assets/home_image.png"
      />
      <Container sx={{ py: 6 }}>
        {!selected ? (
          <>
            <Typography variant="h3" color="secondary" gutterBottom>
              Research Questions
            </Typography>
            <Typography variant="subtitle1" color="secondary" sx={{ mb: 1 }}>
              Click a question to explore its insights.
            </Typography>
            <QuestionList questions={questions} onSelect={setSelected} />
          </>
        ) : (
          <QuestionView question={selected} onBack={() => setSelected(null)} />
        )}
      </Container>
    </>
  );
}

export default App;
