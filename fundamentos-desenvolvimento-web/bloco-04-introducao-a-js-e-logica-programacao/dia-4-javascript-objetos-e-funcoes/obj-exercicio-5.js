let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Montain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };
  
  for (let x in (info)) {
    if (info[x] != info2[x] ) {
    console.log(info[x], "e", info2[x]) 
    }else {
    console.log("Ambos recorrentes")   
    }
  }
