
it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 20000,
      years: 10,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('207.28');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 20000,
      years: 10,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('207.28');
  });
  
  /// etc
  