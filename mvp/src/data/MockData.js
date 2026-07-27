export const MOCK_SELLER = {
  name: 'Paola & Kevin',
  email: 'seller@email.com',
  phone: '8095551234',
  password: 'password1'
};

export const MOCK_STORE = {
  logo: 'https://cdn.creativefabrica.com/2018/10/Store-shop-logo-by-DEEMKA-STUDIO.jpg',
  name: 'Custom Gifts Co.',
  slug: 'custom-gifts-co',
  phone: '8095551234',
  email: 'store@email.com',
  instagram: '@customgiftsco',
  address: 'Plaza Central, Santo Domingo',
  description: 'Brief description of the store and what do they sell'
};

export const MOCK_ORDERS = [
  { 
    id: 1,
    title: 'Custom T-Shirt',
    dateOrdered: '2023-10-04',
    sendByDate: '2023-10-12',
    completedDate: null,
    price: '$45.00', 
    status: 'New', 
    itemCount: 1, 
    buyer: {
      name: 'Alex Smith',
      phone: '809-333-5555',
      address: '1234 Elmo Street, Santo Domingo'
    },
    products: [
      { 
        id: 1, 
        name: 'Custom T-Shirt', 
        price: '$25.00', 
        image: '',
        message: '',
        customizations: [
          { category: 'Color', option: 'Red', price: '5.00' },
          { category: 'Size', option: 'Medium', price: '5.00' }
        ]
      },
      { 
        id: 2, 
        name: 'Custom T-Shirt', 
        price: '$20.00', 
        image: '',
        message: '',
        customizations: [
          { category: 'Color', option: 'Blue', price: '5.00' }
        ]
      }
    ] 
  },
  { 
    id: 2,
    title: 'Mug & Tote Bag',
    dateOrdered: '2023-10-01',
    sendByDate: '2023-10-08',
    completedDate: '2023-10-06',
    price: '$32.50', 
    status: 'Completed', 
    itemCount: 2, 
    buyer: {
      name: 'Jordan Lee',
      phone: '809-555-0199',
      address: '456 Avenida Winston Churchill, Santo Domingo'
    },
    products: [
      { 
        id: 3, 
        name: 'Custom Ceramic Mug', 
        price: '$12.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu purus, lobortis quis consectetur eget, laoreet vel massa. Vivamus eleifend dapibus tellus, ac maximus ligula. ',
        customizations: [
          { category: 'Text', option: "World's Best Boss", price: '5.00' },
          { category: 'Font', option: 'Serif', price: '5.00' }
        ]
      },
      { 
        id: 4, 
        name: 'Canvas Tote Bag', 
        price: '$20.00', 
        image: '',
        message: '',
        customizations: [
          { category: 'Design', option: 'Floral Print', price: '5.00' },
          { category: 'Color', option: 'Natural', price: '5.00' }
        ]
      },
    ] 
  },
  { 
    id: 3,
    title: 'Vinyl Sticker Pack',
    dateOrdered: '2023-10-14',
    sendByDate: '2023-10-20',
    completedDate: null,
    price: '$15.00', 
    status: 'In Progress', 
    itemCount: 1, 
    buyer: {
      name: 'Casey Jones',
      phone: '809-555-8822',
      address: '789 Calle El Conde, Santo Domingo'
    },
    products: [
      { 
        id: 5, 
        name: 'Vinyl Sticker Pack', 
        price: '$15.00', 
        image: '',
        message: '',
        customizations: [
          { category: 'Theme', option: 'Retro Gaming', price: '5.00' },
          { category: 'Finish', option: 'Holographic', price: '5.00' }
        ]
      }
    ] 
  },
  { 
    id: 4,
    title: 'Embroidered Hoodie',
    dateOrdered: '2023-10-15',
    sendByDate: '2023-10-22',
    completedDate: null,
    price: '$55.00', 
    status: 'Pending', 
    itemCount: 1, 
    buyer: {
      name: 'Sam Taylor',
      phone: '809-555-3344',
      address: '101 Bella Vista, Santo Domingo'
    },
    products: [
      { 
        id: 6, 
        name: 'Embroidered Hoodie', 
        price: '$55.00', 
        image: '',
        message: '',
        customizations: [
          { category: 'Color', option: 'Black', price: '5.00' },
          { category: 'Thread Color', option: 'White', price: '0.00' },
          { category: 'Size', option: 'Large', price: '5.00' }
        ]
      }
    ] 
  },
];

export const MOCK_LISTINGS = [
  {
    id: 1,
    name: 'Custom T-Shirt',
    price: 20.00,
    image: '',
    amountAvailable: 50,
    delivery: true,
    description: '',
    customizations: [
      {
        id: 1,
        field: 'Color',
        required: false,
        options: [
          { id: 1, name: 'Red', price: '0.00' },
          { id: 2, name: 'Blue', price: '0.00' },
          { id: 3, name: 'Black', price: '0.00' }
        ]
      },
      {
        id: 2,
        field: 'Size',
        required: false,
        options: [
          { id: 4, name: 'Small', price: '0.00' },
          { id: 5, name: 'Medium', price: '0.00' },
          { id: 6, name: 'Large', price: '5.00' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Custom Ceramic Mug',
    price: 12.00,
    image: ['https://mokaorigins.com/cdn/shop/products/gray-speckle-handmade-mug_09128_91bdc684-4d7c-4ad5-b286-37df6643faeb.jpg?v=1676578654&width=2000'],
    amountAvailable: 30,
    delivery: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu purus, lobortis quis consectetur eget, laoreet vel massa. Vivamus eleifend dapibus tellus, ac maximus ligula. ',
    customizations: [
      {
        id: 3,
        field: 'Font',
        required: true,
        options: [
          { id: 7, name: 'Serif', price: '0.00', image: 'https://m.media-amazon.com/images/I/71UlsXP7AtS._AC_UF350,350_QL80_.jpg' },
          { id: 8, name: 'Sans-Serif', price: '0.00', image: 'https://www.ikea.com/us/en/images/products/gladelig-mug-blue__1439873_pe985552_s5.jpg?f=s' },
          { id: 9, name: 'Cursive', price: '2.00', image: 'https://cdn11.bigcommerce.com/s-ukqi7wk1fh/images/stencil/1280x1280/products/1602/6773/italian-handmade-ceramic-coffee-mug-on-morning-table-setting__46094.1771200458.png?c=2' }
        ]
      },
      {
        id: 4,
        field: 'Size',
        required: false,
        options: [
          { id: 10, name: 'Small', price: '0.00', image: 'https://www.miniaturesweethk.com/cdn/shop/products/MI126_grande.jpg?v=1517659924' },
          { id: 11, name: 'Medium', price: '0.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPJ7ERhO-aNCegZlHavqqouXWaTH546OnlBJSwuthOa9xlRs9CaTLbfqL&s=10' },
          { id: 12, name: 'Big', price: '9.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHfrD6Dq7jZKOB5zNFR0B6sBvJq4JbvHe55ADKGcmh4fvvtY9zn3rykys&s=10' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Embroidered Hoodie',
    price: 50.00,
    image: '',
    amountAvailable: 20,
    delivery: true,
    description: '',
    customizations: [
      {
        id: 5,
        field: 'Color',
        required: false,
        options: [
          { id: 13, name: 'Black', price: '0.00' },
          { id: 14, name: 'Heather Grey', price: '0.00' }
        ]
      },
      {
        id: 6,
        field: 'Thread Color',
        required: false,
        options: [
          { id: 15, name: 'White', price: '0.00' },
          { id: 16, name: 'Gold', price: '2.50' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Custom 3D Printed Nameplate',
    price: 15.00,
    image: '',
    amountAvailable: null, 
    delivery: false,
    description: '',
    customizations: [
      {
        id: 7,
        field: 'Material',
        required: false,
        options: [
          { id: 17, name: 'Standard PLA', price: '0.00' },
          { id: 18, name: 'Glow in the Dark', price: '3.00' },
          { id: 19, name: 'Silk Metallic', price: '4.00' }
        ]
      }
    ]
  },
];

export const MOCK_CART = [
{ 
  id: 1, 
  name: 'Custom T-Shirt', 
  price: '$25.00', 
  image: 'https://www.skhouston.com/pub/media/catalog/product/cache/249608ba4171d44d21805ed7657a13ae/t/s/tshirt_red.jpg',
  customizations: [
    { category: 'Color', option: 'Red', price: '5.00' },
    { category: 'Size', option: 'Medium' }
  ]
},
{ 
  id: 2, 
  name: 'Custom T-Shirt', 
  price: '$20.00', 
  image: 'https://cdn2.propercloth.com/pic_cs/501066_d7196a4c9be205fb4a151fd965e31758_size6.jpg',
  customizations: [
    { category: 'Color', option: 'Blue', price: '5.00' }
  ]
}
] 