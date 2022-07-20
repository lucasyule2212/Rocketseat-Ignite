import { createServer, Model } from "miragejs";

export type Continent = {
  id: string;
  nome: string;
  data: {
    descricao: string;
    paises: number;
    linguas: number;
    cidades: number;
    cidades_data: [
      {
        nome: string;
        pais: string;
        bandeira_pais: string;
        imagem: string;
      }
    ];
  };
  imagem: string;
};

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      continent: Model,
    },

    seeds(server) {
      server.create("continent", {
        id: "africa",
        nome: "África",
        data: {
          descricao:
            "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
          paises: 54,
          linguas: 2000,
          cidades: 10,
          cidades_data: [
            {
              nome: "Nairobi",
              pais: "Quênia",
              imagem:
                "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/188px-Flag_of_Kenya.svg.png",
            },
            {
              nome: "Lusaka",
              pais: "Zambia",
              imagem:
                "https://images.unsplash.com/photo-1636466573447-2bc56930d7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/188px-Flag_of_Zimbabwe.svg.png",
            },
          ],
        },
        imagem: "/africa.jpg",
      });
      server.create("continent", {
        id: "america_do_sul",
        nome: "América do Sul",
        data: {
          descricao:
            "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
          paises: 12,
          linguas: 1060,
          cidades: 8,
          cidades_data: [
            {
              nome: "São Paulo",
              pais: "Brasil",
              imagem:
                "https://images.unsplash.com/photo-1543059080-f9b1272213d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/188px-Flag_of_Brazil.svg.png",
            },
            {
              nome: "Rio de Janeiro",
              pais: "Brasil",
              imagem:
                "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/188px-Flag_of_Brazil.svg.png",
            },
          ],
        },
        imagem: "/southAmerica.jpg",
      });
      server.create("continent", {
        id: "america_do_norte",
        nome: "América do Norte",
        data: {
          descricao:
            "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.",
          paises: 3,
          linguas: 10,
          cidades: 12,
          cidades_data: [
            {
              nome: "Nova Iorque",
              pais: "Estados Unidos",
              imagem:
                "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/188px-Flag_of_the_United_States.svg.png",
            },
            {
              nome: "Montreal",
              pais: "Canadá",
              imagem:
                "https://images.unsplash.com/photo-1445296608114-4b8fabe48256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/188px-Flag_of_Canada_%28Pantone%29.svg.png",
            },
          ],
        },
        imagem: "/northAmerica.jpg",
      });
      server.create("continent", {
        id: "asia",
        nome: "Ásia",
        data: {
          descricao:
            "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
          paises: 50,
          linguas: 2000,
          cidades: 17,
          cidades_data: [
            {
              nome: "Beijing",
              pais: "China",
              imagem:
                "https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/188px-Flag_of_the_People%27s_Republic_of_China.svg.png",
            },
            {
              nome: "Tokyo",
              pais: "Japão",
              imagem:
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/188px-Flag_of_Japan.svg.png",
            },
          ],
        },
        imagem: "/asia.jpg",
      });
      server.create("continent", {
        id: "europa",
        nome: "Europa",
        data: {
          descricao:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          paises: 50,
          linguas: 60,
          cidades: 15,
          cidades_data: [
            {
              nome: "Amsterdam",
              pais: "Holanda",
              imagem:
                "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/188px-Flag_of_the_Netherlands.svg.png",
            },
            {
              nome: "Lisboa",
              pais: "Portugal",
              imagem:
                "https://images.unsplash.com/photo-1585334954347-e50fe83cc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/188px-Flag_of_Portugal.svg.png",
            },
          ],
        },
        imagem: "/europa.png",
      });
      server.create("continent", {
        id: "oceania",
        nome: "Oceania",
        data: {
          descricao:
            "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville.",
          paises: 16,
          linguas: 15,
          cidades: 2,
          cidades_data: [
            {
              nome: "Melbourne",
              pais: "Australia",
              imagem:
                "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png",
            },
            {
              nome: "Sydney",
              pais: "Australia",
              imagem:
                "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              bandeira_pais:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png",
            },
          ],
        },
        imagem: "/oceania.jpg",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/continents", (schema: any) => {
        return schema.continents.all();
      });

      this.get("/continents/:id", (schema: any, request) => {
        const id = request.params.id;
        return schema.continents.find(id);
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
