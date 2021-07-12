import React from "react";
import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

interface IRepositories {
  name: string;
  id:number;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepositories[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/lucasyule2212/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

export { RepositoryList };
