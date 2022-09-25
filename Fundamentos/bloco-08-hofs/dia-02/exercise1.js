const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  /* Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
De olho na dica 👀: use a função find. */ 

function authorBornIn1947() {
  const found = books.find(book => book.author.birthYear === 1947).author.name;
  return found;
}

console.log(authorBornIn1947())

/* Retorne o nome do livro de menor nome.
De olho na dica 👀: use a função forEach. */

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (nameBook === undefined || book.name.length < nameBook.length) {
      nameBook = book.name
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName())

/* Encontre o primeiro livro cujo nome possui 26 caracteres. */

/* const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
        name: 'George R. R. Martin',
    birthYear: 1948,
  },
    releaseYear: 1991,
}; */

function getNamedBook() {
    const found = books.find(book => book.name.length === 26);

    return found;
}

console.log(getNamedBook())

/* Ordene os livros por data de lançamento em ordem decrescente. */

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear)

console.log(booksOrderedByReleaseYearDesc())

/* Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contr? */

/* const expectedResult = false; */

function everyoneWasBornOnSecXX() {
   return books.every((book) => book.author.birthYear >= 2000)
}

console.log(everyoneWasBornOnSecXX())

/* Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

/* const expectedResult = true; */

function someBookWasReleaseOnThe80s() {
 return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s());

/* Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. */

/* const expectedResult = false; */

function authorUnique() {
 return books.every((book) => 
     books.some((booktwo) => 
     booktwo.author.birthYear === book.author.birthYear && 
     booktwo.name !== book.name));
}

console.log(authorUnique())