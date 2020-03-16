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

  it('Tests submitLoan function with an income that is too low', async () => {
    const formData = {
      ...defaultFormData,
      income: 10,
    }
    const response = await submitLoan(formData);
    expect(response).toEqual('Price cannot be greater than 1/5 of income');
  });

  it('Tests submitLoan function with credit that is too low', async () => {
    const formData = {
      ...defaultFormData,
      credit: 30,
    }
    const response = await submitLoan(formData);
    expect(response).toEqual('Credit cannot be below 600');
  });

  it('Tests submitLoan function with price that is too high', async () => {
    const formData = {
      ...defaultFormData,
      price: 100000000000,
      income: 1000000000000000
    }
    const response = await submitLoan(formData);
    expect(response).toEqual('Bad request');
  });
})