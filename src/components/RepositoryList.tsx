import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gui-rosales/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  // nunca deixar o useEffect sem o segundo parametro e nem atualizar a variável que ele fica aguardando alteração dentro dele, pois se não ele entra em loop
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
