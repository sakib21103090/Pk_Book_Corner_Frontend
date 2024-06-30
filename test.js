

 const products=[
    {
        "id": 1,
        "BookName": "বাংলাদেশের মুক্তিযুদ্ধ",
        "description": "Description for Book 1",
        "price": 120,
        "discountPercentage": 10.5,
        "rating": 3.1,
        "stock": 105,
        "AuthorName": "Mohammad Zakaria",
        "category": "Educational Books",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 2,
        "BookName": "আশ্চর্য প্রদীপ",
        "description": "Description for Book 2",
        "price": 140,
        "discountPercentage": 11.0,
        "rating": 3.2,
        "stock": 110,
        "AuthorName": "Muhammed Zafar Iqbal",
        "category": "Science and Technology",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 3,
        "BookName": "Mohakash",
        "description": "Description for Book 3",
        "price": 160,
        "discountPercentage": 11.5,
        "rating": 3.3,
        "stock": 115,
        "AuthorName": "Asif Azim",
        "category": "Science and Technology",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 4,
        "BookName": "স্বাস্থ্য কথা",
        "description": "Description for Book 4",
        "price": 180,
        "discountPercentage": 12.0,
        "rating": 3.4,
        "stock": 120,
        "AuthorName": "Dr. Zafrullah Chowdhury",
        "category": "Health and Wellness",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 5,
        "BookName": "ঠাকুরমার ঝুলি",
        "description": "Description for Book 5",
        "price": 200,
        "discountPercentage": 12.5,
        "rating": 3.5,
        "stock": 125,
        "AuthorName": "Dakshinaranjan Mitra Majumder",
        "category": "Childrens Books",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 6,
        "BookName": "গীতাঞ্জলি",
        "description": "Description for Book 6",
        "price": 220,
        "discountPercentage": 13.0,
        "rating": 3.6,
        "stock": 130,
        "AuthorName": "গীতগোবিন্দ",
        "category": "Literature and Poetry",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    
    {
        "id": 8,
        "BookName": "বাংলাদেশ: একাত্তরের জনযুদ্ধ",
        "description": "Description for Book 8",
        "price": 260,
        "discountPercentage": 14.0,
        "rating": 3.8,
        "stock": 140,
        "AuthorName": "Hasan Azizul Haque",
        "category": "Educational Books",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 9,
        "BookName": "পরিবেশ বিজ্ঞান",
        "description": "Description for Book 9",
        "price": 280,
        "discountPercentage": 14.5,
        "rating": 3.9,
        "stock": 145,
        "AuthorName": "Ba",
        "category": "A K M Azizul Haque",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 10,
        "BookName": "Pakistaner Jonmo Mrityu",
        "description": "Description for Book 10",
        "price": 300,
        "discountPercentage": 15.0,
        "rating": 4.0,
        "stock": 150,
        "AuthorName": "অরুন্ধতী রায়",
        "category": "Politics and Social Sciences",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 11,
        "BookName": "মন ও মনের রোগ",
        "description": "Description for Book 11",
        "price": 320,
        "discountPercentage": 15.5,
        "rating": 4.1,
        "stock": 155,
        "AuthorName": "Dr. Tahmina Banu",
        "category": "Health and Wellness",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 12,
        "BookName": "Hatim Tai",
        "description": "Description for Book 12",
        "price": 340,
        "discountPercentage": 16.0,
        "rating": 4.2,
        "stock": 160,
        "AuthorName": "Gazi Abdul Hakim",
        "category": "Childrens Books",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 13,
        "BookName": "ঘরে বাইরে",
        "description": "Description for Book 13",
        "price": 360,
        "discountPercentage": 16.5,
        "rating": 4.3,
        "stock": 165,
        "AuthorName": "রবীন্দ্রনাথ ঠাকুর ",
        "category": "Literature and Poetry",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 14,
        "BookName": "গোরা",
        "description": "Description for Book 13",
        "price": 360,
        "discountPercentage": 16.5,
        "rating": 4.3,
        "stock": 165,
        "AuthorName": "রবীন্দ্রনাথ ঠাকুর ",
        "category": "Literature and Poetry",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    },
    {
        "id": 15,
        "BookName": "ইতিহাস ও রাজনীতি",
        "description": "Description for Book 1",
        "price": 120,
        "discountPercentage": 10.5,
        "rating": 3.1,
        "stock": 105,
        "AuthorName": "Mohammad Zakaria",
        "category": "Educational Books",
        "images": "https://i.ibb.co/pnGJwLn/image.png"
    }
    
    ]
const category=[...new Set([...products.map(p=>p.category)])]
console.log(category.map(c=>({value:c,Label:c.split('-').join(''),checked:false})))