const formatDate = date => new Date(date)
  .toLocaleDateString('pt-BR', {
    day:'numeric',
    month:'numeric',
    year:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric'
  })

const dateNow = () => {
    const dataAtual = new Date();
    const dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
    const mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    const hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
    const minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
    const segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();
  
    const dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
    return dataFormatada;
  }

