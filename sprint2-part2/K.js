const sqrt = value => {
    for (let i = 1; i < 2; i++) {
      if (i * i === value) return i;
    }
  };

  console.log(sqrt(2))