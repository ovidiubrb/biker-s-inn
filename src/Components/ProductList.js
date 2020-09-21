import React from "react";
import Products from "./Products";
import "./ProductList.css";
export const products = [
  {
    id: 1,
    title: "Carpat Shimano",
    img:
      "https://s13emagst.akamaized.net/products/31245/31244673/images/res_7ae7324a472545ac363102010b91afe0.jpg?width=450&height=450&hash=2F20081D987CFB128CA36441FA25B235",
    price: 250,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 2,
    title: "Shimano RX345",
    img:
      "https://cdn.contentspeed.ro/carpatsport.websales.ro/cs-content/cs-photos/products/original/-bicicleta-fat-bike-carpat-hercules-26-inch-c2619b_4179_27_1595335713.jpg",
    price: 300,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 3,
    title: "Pegas MTB Fat Bike",
    img:
      "https://s13emagst.akamaized.net/products/16006/16005951/images/res_e75df8dfd42972f4594fd1249f0edc0b.jpg?width=450&height=450&hash=0F0CF0825052F8E779C22394F5103EFA",
    price: 750,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 4,
    title: "Classic Bicycle",
    img:
      "https://cdn.shopify.com/s/files/1/1245/1481/products/2_DIAMOND_BLACK_1_1024x1024.jpg?v=1597774901",
    price: 800,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 5,
    title: "Norco Storm 1",
    img:
      "https://www.mellowvelo.co.za/wordpress19/wp-content/uploads/2018/09/Norco-Storm-9.1-2019.jpg",
    price: 700,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 6,
    title: "Superstrada",
    img:
      "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/f6fdd30e55ea6b658a278a794a8e2400/large.jpg",
    price: 1500,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 7,
    title: "Urban Cross",
    img:
      "https://media.click4sport.ro/media/catalog/product/cache/d54f9db711fa987435d5ccbc7240f726/3/1/31865_6755_Spria_Urban_1.jpg_1.png",
    price: 1250,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
  {
    id: 8,
    title: "FastSpeed LRHD",
    img:
      "https://www.bikeandgo.co.uk/wp-content/uploads/2020/04/lrhd-road-bike.jpg",
    price: 950,
    description:
      "Vehicula massa curae ante vestibulum aenean montes vitae parturient venenatis magna leo parturient consectetur tincidunt ullamcorper semper integer a tellus vestibulum hac ut velit vel a urna varius accumsan cum.Sapien sit a a ad adipiscing condimentum mattis non pharetra aptent dui suspendisse neque posuere curabitur vel ante posuere.Hac eros ultricies ut felis lacinia a habitasse turpis a varius sit praesent facilisi congue cubilia.",
  },
];

function ProductList() {
  return (
    <div className="prod">
      {products.map((x) => (
        <Products
          title={x.title}
          id={x.id}
          img={x.img}
          price={x.price}
          key={x.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
