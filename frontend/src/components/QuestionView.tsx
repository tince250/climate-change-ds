import { Box, Button, Typography, Divider } from "@mui/material";
import type { Question } from "../data/questions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  question: Question;
  onBack: () => void;
}

export const QuestionView: React.FC<Props> = ({ question, onBack }) => {
  return (
    <Box sx={{ mt: 1 }}>
      <Button
        variant="text"
        color="secondary"
        onClick={onBack}
        sx={{ mb: 3, gap: 1, display: "flex", alignItems: "center" }}
      >
        <ArrowBackIcon></ArrowBackIcon> Questions
      </Button>

      <Typography variant="h4" color="secondary" gutterBottom>
        {question.title}
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, mb: 4, maxWidth: 800 }}>
        {question.story}
      </Typography>

      <Divider sx={{ mb: 3 }} />
    </Box>
  );
};
