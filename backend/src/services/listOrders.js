const fbAdmin = require('../config/firebase');

const listOrders = async () => {
  try {
    const orders = await fbAdmin
      .database()
      .ref('/orders')
      .once('value')
      .then(snap => snap.val());

    if (!orders) return [];

    return orders;
  } catch (err) {
    throw new Error('An error occured while listing orders.');
  }
};

module.exports = listOrders;