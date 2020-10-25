// example orders.JSON in ordersList variable
const ordersList = [{"orderId": 2019060001, "product": "Laptop #1", "seller": "Seller #1", "country": "BRA", "price": 1000}, {"orderId": 2019060002, "product": "Laptop #2", "seller": "Seller #2", "country": "ARG", "price": 1250}, {"orderId": 2019060003, "product": "Laptop #3", "seller": "Seller #3", "country": "ARG", "price": 1900}, {"orderId": 2019060004, "product": "Printer #1", "seller": "Seller #1", "country": "MEX", "price": 199}, {"orderId": 2019060005, "product": "Smartphone #1", "seller": "Seller #2", "country": "BRA", "price": 999}, {"orderId": 2019060006, "product": "Printer #2", "seller": "Seller #3", "country": "BRA", "price": 399}, {"orderId": 2019060007, "product": "Smartphone #2", "seller": "Seller #1", "country": "ARG", "price": 1499}, {"orderId": 2019060008, "product": "Laptop #3", "seller": "Seller #2", "country": "ARG", "price": 1900}, {"orderId": 2019060009, "product": "Smartphone #1", "seller": "Seller #3", "country": "MEX", "price": 999}, {"orderId": 2019060010, "product": "Printer #2", "seller": "Seller #1", "country": "BRA", "price": 399}, {"orderId": 2019060011, "product": "Printer #3", "seller": "Seller #2", "country": "ARG", "price": 899}, {"orderId": 2019060012, "product": "Laptop #2", "seller": "Seller #3", "country": "MEX", "price": 1250}, {"orderId": 2019060013, "product": "Smartphone #1", "seller": "Seller #1", "country": "BRA", "price": 999}, {"orderId": 2019060014, "product": "Printer #1", "seller": "Seller #2", "country": "BRA", "price": 199}, {"orderId": 2019060015, "product": "Smartphone #3", "seller": "Seller #3", "country": "ARG", "price": 2399}, {"orderId": 2019060016, "product": "Laptop #3", "seller": "Seller #1", "country": "MEX", "price": 1900}, {"orderId": 2019060017, "product": "Smartphone #1", "seller": "Seller #2", "country": "BRA", "price": 999}, {"orderId": 2019060018, "product": "Laptop #3", "seller": "Seller #3", "country": "BRA", "price": 1900}, {"orderId": 2019060019, "product": "Smartphone #3", "seller": "Seller #1", "country": "BRA", "price": 2399}, {"orderId": 2019060020, "product": "Printer #1", "seller": "Seller #2", "country": "ARG", "price": 199}, {"orderId": 2019060021, "product": "Smartphone #2", "seller": "Seller #3", "country": "MEX", "price": 1499}, {"orderId": 2019060022, "product": "Laptop #3", "seller": "Seller #1", "country": "ARG", "price": 1900}, {"orderId": 2019060023, "product": "Printer #1", "seller": "Seller #2", "country": "MEX", "price": 199}, {"orderId": 2019060024, "product": "Smartphone #3", "seller": "Seller #3", "country": "BRA", "price": 2399}, {"orderId": 2019060025, "product": "Laptop #3", "seller": "Seller #1", "country": "BRA", "price": 1900}];

function getProductsInfo(orders) {
  let formattedProducts = []; 

  orders.forEach(order => {
    const foundProduct = formattedProducts.find(info => info.product === order.product);

    if (!foundProduct) {
      formattedProducts.push({
        product: order.product,
        countries: {
          [order.country]: {
            stores_qty: [order.seller],
            orders_qty: [order.orderId],
            orders_total: order.price,
          },
        },
      });
      return;
    }

    const foundCountry = foundProduct.countries[order.country];

    if (!foundCountry) {
      foundProduct.countries[order.country] = {
        stores_qty: [order.seller],
        orders_qty: [order.orderId],
        orders_total: order.price,
      };
      return;
    }
    
    if (!foundCountry.stores_qty.includes(order.seller)) foundCountry.stores_qty.push(order.seller);
    if (!foundCountry.orders_qty.includes(order.orderId)) {
      foundCountry.orders_qty.push(order.orderId);
      foundCountry.orders_total += order.price;
    }
  });

  const result = [];

  formattedProducts.map(info => {
    const countries = Object.keys(info.countries);

    countries.forEach(country => {
      result.push({
        product: info.product,
        country: country,
        stores_qty: info.countries[country].stores_qty.length,
        orders_qty: info.countries[country].orders_qty.length,
        orders_total: info.countries[country].orders_total,
      });
    });
  });

  return result;
}

console.log(getProductsInfo(ordersList));