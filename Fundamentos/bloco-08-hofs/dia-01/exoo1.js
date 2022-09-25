const people = (nome) => {
  const obj = {
    nomeCompleto: nome,
    email: `${nome.toLocaleLowerCase().replace(' ', '_')}@trybe.com`
  }
  return obj;
}


const newEmployees = (calback) => {
    const employees = {
      id1: calback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: calback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: calback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(people))