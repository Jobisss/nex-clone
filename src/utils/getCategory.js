export const getCategory = (item) => {

  switch (item.toLowerCase()) {
    case 'conferencias':
      return 'Conferência';
    case 'workshops':
      return 'Workshop';
    case 'seminarios':
      return 'Seminário';
    case 'reuniaodenegocios':
      return 'Reunião de negócios';
    case 'lançamentosdeprodutos':
      return 'Lançamento de produto';
    case 'treinamentos':
      return 'Treinamento';
    case 'networking':
      return 'Networking';
    case 'webinars':
      return 'Webinar';
    case 'all':
      return '';
    default:
      return 'Categoria desconhecida';
  }
}