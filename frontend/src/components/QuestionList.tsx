import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import type { Question } from "../data/questions";

interface Props {
  questions: Question[];
  onSelect: (question: Question) => void;
}

const QuestionList: React.FC<Props> = ({ questions, onSelect }) => {
  return (
    <Grid container spacing={0.5}>
      {questions.map((q) => (
        <Grid>
          <Card key={q.id}>
            <CardActionArea onClick={() => onSelect(q)}>
              <CardContent>
                <Typography variant="h6" color="secondary">
                  {q.id}) {q.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionList;
