const alunos = [
    { nome: 'Ana', notas: [8, 9, 7] },
    { nome: 'João', notas: [6, 8, 5] },
    { nome: 'Maria', notas: [9, 9, 10] },
    { nome: 'Carlos', notas: [5, 7, 6] }
  ];
  
  const alunosComMedia = [];
  const alunosAprovados = [];
  
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    let somaNotas = 0;
    
    for (let i = 0; j < aluno.notas.length; i++) {
      somaNotas += aluno.notas[j];
    }
    
    const media = somaNotas / aluno.notas.length;
    
    alunosComMedia.push({ nome: aluno.nome, media: media });
    
    if (media >= 7) {
      alunosAprovados.push({ nome: aluno.nome, media: media });
    }
    else {
        
    }
  }
  
  console.log('Alunos com média:', alunosComMedia);
  console.log('Alunos aprovados:', alunosAprovados);
  

