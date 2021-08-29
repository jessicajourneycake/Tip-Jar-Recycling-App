import client from "./client";

const endpoint = "/barcode";

const addBarcode = barcode => {
  const data = new FormData();
  data.append('item', JSON.stringify(barcode.item))


return client.post('./barcode', data);

}

export default {
  addBarcode,
 
};