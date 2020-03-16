import { submitLoan } from '../loans';

let defaultFormData = {
  price: 30000,
  make: 'Chevy',
  model: 'Malibu',
  income: 200000,
  credit: 700,
};

describe('Loan service tests', () => {
  it('Tests submitLoan function with good input', async () => {
    const response = await submitLoan(defaultFormData);
    expect(response).toEqual('Good quote');
  });
})