export const submitLoan = formData => {
  const { 
    price,
    income,
    credit
   } = formData;
  return new Promise((res, rej) => {
    if (price > income / 5) {
      return res('Price cannot be greater than 1/5 of income');
    }

    if (credit < 600) {
      return res('Credit cannot be below 600');
    }

    if (price > 1000000) {
      return res('Bad request');
    }
    
    else {
      return res('Good quote');
    }
  })
}

