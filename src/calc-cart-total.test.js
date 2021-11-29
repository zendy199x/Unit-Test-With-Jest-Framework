import { calcCartTotalV1, calcCartTotalV2 } from './calc-cart-total';

// Unit test V1
describe('(calcCartTotalV1(cartItemList))', () => {
  it('should return 0 if empty array or not array', () => {
    expect(calcCartTotalV1([])).toBe(0);
    expect(calcCartTotalV1({})).toBe(0);
    expect(calcCartTotalV1('')).toBe(0);
    expect(calcCartTotalV1(123)).toBe(0);
  });

  it('should return 0 if either price or quantity is zero', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 0 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotalV1(cartItemList)).toBe(200000);
  });

  it('should return correct total if price/quantity > 0', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotalV1(cartItemList)).toBe(250000);
  });
});

// Unit test V2
describe('(calcCartTotalV2(cartItemList))', () => {
  it('should return 0 if empty array or not array', () => {
    expect(calcCartTotalV2([])).toBe(0);
    expect(calcCartTotalV2({})).toBe(0);
    expect(calcCartTotalV2('')).toBe(0);
    expect(calcCartTotalV2(123)).toBe(0);
  });

  it('should return 0 if either price or quantity is zero', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 0 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotalV2(cartItemList)).toBe(200000);
  });

  it('should return correct total if price/quantity > 0', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotalV2(cartItemList)).toBe(250000);
  });
});
