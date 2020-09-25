import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repositories } from "./styles";
import logoimg from "../../assets/logo.svg";
import api from "../../services/api";

interface Repository {

}
// FC function component
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  async function hadleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;

   // setRepositories([...repositories, repository]);


    console.log(response.data);
  }
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositorios no github</Title>
      <Form onSubmit={hadleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite aqui o nome" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37039238?s=460&u=d31a6ee97ce5512f44f355ed431159b410867226&v=4"
            alt="Edson Chicale"
          />
          <div>
            <strong>Edson Chicalee</strong>
            <p>SJJJJJJJJJJJJJJJJJJJJJJJJJJjjjjjjjjjjjjjjjjjjjjjjjj</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
