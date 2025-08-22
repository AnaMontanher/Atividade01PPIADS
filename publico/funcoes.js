const valorTotal = (quantidade, valorUnitário) => {
  return quantidade * valorUnitário;
};

calcular = (quantidade, unid) => {
  return valorTotal(quantidade, unid);
};
