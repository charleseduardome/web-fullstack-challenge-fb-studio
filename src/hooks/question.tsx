import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api';

interface IQuestion {
  id: string;
  resolucao: string;
  enunciado: string;
}

interface QuestionContextData {
  selectQuestion(question: IQuestion): void;
  updateQuestion(question: IQuestion): void;
}

const AuthContext = createContext<QuestionContextData>(
  {} as QuestionContextData,
);

export const QuestionProvider: React.FC = ({ children }) => {
  const selectQuestion = useCallback(async question => {
    localStorage.setItem('@fbquest:question', JSON.stringify(question));
  }, []);

  const updateQuestion = useCallback(async ({ id, enunciado, resolucao }) => {
    const response = await api.put(`questions/${id}`, {
      enunciado,
      resolucao,
    });

    localStorage.setItem('@fbquest:question', JSON.stringify(response.data));
  }, []);

  return (
    <AuthContext.Provider value={{ selectQuestion, updateQuestion }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useQuestion(): QuestionContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useQuestion must be used within an AuthProvider');
  }

  return context;
}
