import React, { useCallback, useEffect, useMemo, useState } from 'react';

import api from '../../services/api';

import { Container, TopContent, TableContainer, PageBtnsContainer } from  './styles';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  const [filterLists, setFilterLists] = useState({
    sellers: [],
    countries: [],
    products: [],
  });
  const [sellersFilter, setSellersFilter] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  const [orderPaging, setOrdersPaging] = useState({ page: 1, start: 0, end: 6})
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/orders');

        const sellers = ['All sellers'];
        const countries = ['All countries'];
        const products = ['All products'];

        data.orders.forEach(order => {
          if (!sellers.includes(order.seller)) sellers.push(order.seller);
          if (!countries.includes(order.country)) countries.push(order.country);
          if (!products.includes(order.product)) products.push(order.product);
        })

        setFilterLists({ sellers, countries, products });
        setSellersFilter(sellers);
        setCountriesFilter(countries);
        setProductsFilter(products);
        setOrders(data.orders);
      } catch (err) {
        alert('Ocorreu um erro ao buscar os pedidos. Tente novamente!');
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleSellersFilter = useCallback((selectedSeller) => {
    if (selectedSeller === 'All sellers') setSellersFilter(filterLists.sellers);
    setOrdersPaging({ page: 1, start: 0, end: 6});
    setSellersFilter([selectedSeller]);
  }, [filterLists.sellers]);

  const handleCountriesFilter = useCallback((selectedCountry) => {
    if (selectedCountry === 'All countries') setCountriesFilter(filterLists.countries);
    setOrdersPaging({ page: 1, start: 0, end: 6});
    setCountriesFilter([selectedCountry]);
  }, [filterLists.countries]);

  const handleProductsFilter = useCallback((selectedProduct) => {
    if (selectedProduct === 'All products') setProductsFilter(filterLists.products);
    setOrdersPaging({ page: 1, start: 0, end: 6});
    setProductsFilter([selectedProduct]);
  }, [filterLists.products]);

  const incrementPage = useCallback(() => {
    setOrdersPaging(oldState => ({
      page: oldState.page + 1,
      start: oldState.start + 6,
      end: oldState.end + 6,
    }));
  }, []);

  const decrementPage = useCallback(() => {
    setOrdersPaging(oldState => ({
      page: oldState.page - 1,
      start: oldState.start - 6,
      end: oldState.end - 6,
    }));
  }, []);

  const ordersListFiltered = useMemo(() => {
    return orders.map(order => {
      if ((sellersFilter.includes('All sellers') || sellersFilter.includes(order.seller)) && 
      (countriesFilter.includes('All countries') || countriesFilter.includes(order.country)) &&
      (productsFilter.includes('All products') || productsFilter.includes(order.product)))
        return order;
      return null;
    }).filter(order => order);
  }, [orders, sellersFilter, countriesFilter, productsFilter]);

  const numberOfOrdersAndPages = useMemo(() => {
    let i = 0;
    let pages = 0;

    while (i < ordersListFiltered.length) {
      i += 6;
      pages += 1;
    }
    return {
      orders: ordersListFiltered.length,
      pages,
    };
  }, [ordersListFiltered]);

  const totalRevenueOfSellers = useMemo(() => {
    const totalRevenuePerSeller = [];
    ordersListFiltered.forEach(order => {
      let sellerInfo = totalRevenuePerSeller.find(info => info.id === order.seller);

      if (!sellerInfo) totalRevenuePerSeller.push({
        id: order.seller,
        revenue: order.price,
      });
      else sellerInfo.revenue += order.price;
    });

    return totalRevenuePerSeller;
  }, [ordersListFiltered]);

  return (
    <Container>
      <TopContent>
        <div className="title">
          <h1>Orders</h1>
          <strong>Total: {numberOfOrdersAndPages.orders} (Nº of pages: {numberOfOrdersAndPages.pages})</strong>
        </div>

        <div className="revenue-per-seller">
          {totalRevenueOfSellers.map(sellerInfo => (
            <div>
              <strong>{sellerInfo.id}</strong>
              <p>${sellerInfo.revenue}</p>
            </div>
          ))}
        </div>

        {!!orders.length && (
          <div className="filter-container">
            <select onChange={e => handleSellersFilter(e.target.value)}>
              {filterLists.sellers.map(seller => (
                <option key={seller} value={seller}>{seller}</option>
              ))}
            </select>
            <select onChange={e => handleCountriesFilter(e.target.value)}>
              {filterLists.countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <select onChange={e => handleProductsFilter(e.target.value)}>
              {filterLists.products.map(product => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
          </div>
        )}
      </TopContent>
      <TableContainer>
      {loading && <h2 className="loading">Carregando...</h2>}
      
      {!loading && (
        <table>
        <thead>
          <tr className="titles">
            <th>Order Id</th>
            <th>Product</th>
            <th>Price</th>
            <th>Seller</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {ordersListFiltered.slice(orderPaging.start, orderPaging.end).map(order => {
              return (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td>{order.seller}</td>
                  <td>{order.country}</td>
                </tr>
              );
          })}
          {!ordersListFiltered.length && (
            <tr>
              <td>No order found!</td>
              <td>No order found!</td>
              <td>No order found!</td>
              <td>No order found!</td>
              <td>No order found!</td>
            </tr>
          )}
        </tbody>
      </table>
      )}
      </TableContainer>
      {!loading && (
        <PageBtnsContainer
          showDecrement={orderPaging.start > 0}
          showIncrement={orderPaging.end < ordersListFiltered.length}
        >
          <strong>Page</strong>
          <div>
            <button className="decrement" type="button" onClick={decrementPage}>{'<<'}</button>
            <span>{orderPaging.page}</span>
            <button className="increment" type="button" onClick={incrementPage}>{'>>'}</button>
          </div>
        </PageBtnsContainer>
      )}
    </Container>
  );
};

export default Orders;