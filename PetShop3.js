const PETSHOP = "Petshop DH";
console.log(`** ${PETSHOP} **`);

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`Pet vacinado com sucesso!`);
  } else {
    console.log(`Opa, seu pet já está vacinado!`);
  }
};

const listarPets = () => {
  for (let pet of pets) {
    console.log(`
    ---------------------
    Nome: ${pets.nome}
    Tipo: ${pets.tipo}
    Raça: ${pets.raca}
    Idade: ${pets.idade}
    Genero: ${pets.genero == "F" ? "Femea" : "Macho"}
    Vacinado: ${pets.vacinado ? "Sim" : "Não"}
    Serviços: ${pets.servicos}`)
    }
};

const validarDados = dadosPet => {
  return (
    dadosPet.nome &&
    dadosPet.idade &&
    dadosPet.genero &&
    dadosPet.tipo &&
    dadosPet.raca
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
  } else {
    console.log("Ops, insira um objeto válido!");
  }
};

// adicionarPet({
//   nome: "Costelinha",
//   tipo: "cão",
//   raca: "vira-lata",
//   idade: "6a",
//   genero: "M"
// });

// adicionarPet("scooby");

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} cortou as unhas!`);
};

const atenderPet = (pet, ...servicos) => {
  console.log(`Bem vindo, ${pet.nome}`);
  for (let servico of servicos) {
    servico(pet);
  }

  const pagar = () => {
    console.log(`Pagamento realizado com suce$$o!`);
  };

  pagar();

  console.log(`Volte sempre!`);
};

atenderPet(pets[0], cortarUnhasPet, tosarPet, darBanhoPet);

// DESAFIO

const nVacinados = pet => {
    let jaVacinado = 0;
    let naoVacinado = 0;
           for (let pet of pets) {
            pets.vacinado ? jaVacinado++ : naoVacinado++ ;
        };
        console.log(`Foram encontrados ${naoVacinado} pets não vacinados , Foram encontrados ${jaVacinado} pets vacinados`);
    };
    nVacinados(pets);
const contarVacinados = () => {
    let vacinados = pets.filter(pet => pet.vacinado).length;
    let naoVacinados = pets.filter(pet => !pet.vacinado).length;

    console.log(`
    ---------------------------------------
    temos ${vacinados} pets vacinados.
    Temos ${naoVacinados} pets Não vacinados.
    `)
} 
function companhaVacina () {
        for (let pet of pets) {
            !pet.vacinado ? (vacinarPet(pet), petVacinadosCampanha++) : "";
        }
        console.log(`${petVacinadosCampanha} pets foram vacinados nessa campanha!`)
    }

function buscarPetPeloNome (name) {
    let escolhido = pets.filter (function (acharNome) {
        return acharNome.nome == name
    })
    console.log(escolhido)
}

buscarPetPeloNome("Batman")