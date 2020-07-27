import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import Pagination from '@material-ui/lab/Pagination';
import parse from 'html-react-parser';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Container, ContentQuestion } from './styles';

interface Alternativas {
  letra: string;
  correta: boolean;
  texto: string;
}

interface Question {
  id: string;
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: Alternativas[];
  disponivel: boolean;
}

const DashboardQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get('/questions', {
        params: {
          page,
        },
      })
      .then(response => {
        setQuestions(response.data);
        console.log(response.data);
      });
  }, [page]);

  const handleAvailability = async (id: String, availability: boolean) => {
    await api.patch(`/questions/${id}/availability`, {
      disponivel: availability,
    });

    await api
      .get('/questions', {
        params: {
          page,
        },
      })
      .then(response => {
        setQuestions(response.data);
      });
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Header />
      <ContentQuestion>
        {questions.map(question => (
          <li key={question.id}>
            <div>
              <strong>Matéria:</strong>
              <p>{question.materia}</p>
            </div>

            <div>
              <strong>Vestibular:</strong>
              <p>{question.vestibular}</p>
            </div>

            <div>
              <strong>Ano:</strong>
              <p>{question.ano}</p>
            </div>

            <div>
              <strong>Disponível:</strong>
              <Switch
                onChange={() =>
                  handleAvailability(question.id, !question.disponivel)
                }
                checked={question.disponivel}
                onColor="#04d361"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>

            <div>
              <strong>Enunciado:</strong>
            </div>
            <span>{parse(question.enunciado)}</span>
            <Button>EDITAR QUESTÃO</Button>
          </li>
        ))}
        <Pagination
          count={10}
          page={page}
          onChange={handleChangePage}
          size={'small'}
        />
      </ContentQuestion>
    </Container>
  );
};

export default DashboardQuestions;
