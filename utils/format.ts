export const formatCurrency=(amount: number | null)=>{
const value = amount || 0;
return new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
}).format(value);
}