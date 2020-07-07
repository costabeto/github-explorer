import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt='github-explorer' />
      <Title>Explore repositórios no Github</Title>
      <Form action=''>
        <input placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/41833666?s=460&u=35b3788020960b1a37fd288b0c23e0a38d424450&v=4'
            alt='profile'
          />
          <div>
            <strong>doraventebeto/project</strong>
            <p>Project descriptorProject descriptor</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/41833666?s=460&u=35b3788020960b1a37fd288b0c23e0a38d424450&v=4'
            alt='profile'
          />
          <div>
            <strong>doraventebeto/project</strong>
            <p>Project descriptorProject descriptor</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/41833666?s=460&u=35b3788020960b1a37fd288b0c23e0a38d424450&v=4'
            alt='profile'
          />
          <div>
            <strong>doraventebeto/project</strong>
            <p>Project descriptorProject descriptor</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/41833666?s=460&u=35b3788020960b1a37fd288b0c23e0a38d424450&v=4'
            alt='profile'
          />
          <div>
            <strong>doraventebeto/project</strong>
            <p>Project descriptorProject descriptor</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
