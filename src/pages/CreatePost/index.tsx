import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FileInput from '../../components/FileInput';
import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';

interface dataProps {
  title: string;
  image: File;
  content: string;
}
const CreatePost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const handleCreatePost = useCallback(
    async (data: dataProps) => {
      try {
        if (!data) throw new Error();
        await api.post('/posts', data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro!',
          description: 'Ocorreu um erro ao criar seu post, tente novamente!',
        });
      }
    },
    [addToast]
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleCreatePost}>
          <h1>Crie seu post</h1>
          <FileInput name="image" />
          <Input name="title" placeholder="title" icon={FiUser} />
          {/* <FileInput name="post" /> */}
          <Input name="content" placeholder="title" icon={FiUser} />
          <Button type="submit">Criar</Button>
        </Form>
        <Link to="/">Voltar para logon</Link>
      </Content>
    </Container>
  );
};

export default CreatePost;
