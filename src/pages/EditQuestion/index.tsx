import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Header from '../../components/Header';

import { useQuestion } from '../../hooks/question';

import {
  Container,
  ContentEnunciado,
  ContentResolucao,
  ButtonUpdate,
} from './styles';

interface Alternativas {
  letra: string;
  correta: boolean;
  texto: string;
}

interface IQuestion {
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

const EditQuestion = () => {
  const history = useHistory();
  const { updateQuestion } = useQuestion();
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion>();
  const [enunciado, setEnunciado] = useState('');
  const [resolucao, setResolucao] = useState('');

  const question = localStorage.getItem('@fbquest:question');

  useEffect(() => {
    if (question) {
      setSelectedQuestion(JSON.parse(question));
    }
  }, [question]);

  const handleEditQuestion = () => {
    if (selectedQuestion?.id) {
      updateQuestion({
        id: selectedQuestion.id,
        enunciado,
        resolucao,
      });
    }
    history.push('/');
    alert('Questão atualizada!');
  };

  return (
    <Container>
      <Header />

      <ContentEnunciado>
        <strong>Enunciado</strong>

        <CKEditor
          editor={ClassicEditor}
          data={selectedQuestion?.enunciado}
          onChange={(event: ChangeEvent, editor: any) => {
            const data = editor.getData();
            setEnunciado(data);
          }}
        />
      </ContentEnunciado>

      <ContentResolucao>
        <strong>Resolução</strong>

        <CKEditor
          editor={ClassicEditor}
          data={selectedQuestion?.resolucao}
          onChange={(event: ChangeEvent, editor: any) => {
            const data = editor.getData();
            setResolucao(data);
          }}
        />
      </ContentResolucao>

      <ButtonUpdate onClick={() => handleEditQuestion()}>
        ATUALIZAR QUESTÃO
      </ButtonUpdate>
    </Container>
  );
};

export default EditQuestion;
