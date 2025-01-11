import { createSlice } from "@reduxjs/toolkit";


const initialState={
      books: [
        {
          "id": 1,
          "title": "The Midnight Library",
          "author": "Matt Haig",
          "description": "A woman discovers a library between life and death where she can explore alternate versions of her life.",
          "price": 15.99,
          "rating": 4,
          "cover_image": "../src/assets/coverimage/1.jpg",
          "category": "Fiction",
          "pages": 304,
          "published_date": "2020-08-13"
        },
        {
          "id": 2,
          "title": "The Silent Patient",
          "author": "Alex Michaelides",
          "description": "A psychological thriller about a woman who shoots her husband and stops speaking.",
          "price": 12.99,
          "rating": 4.5,
          "cover_image": "../src/assets/coverimage/2.jpg",
          "category": "Thriller",
          "pages": 336,
          "published_date": "2019-02-05"
        },
        {
          "id": 3,
          "title": "Educated",
          "author": "Tara Westover",
          "description": "A memoir of a woman who grows up in a strict and abusive household in rural Idaho, eventually escaping to learn about the world.",
          "price": 18.99,
          "rating": 4.7,
          "cover_image": "../src/assets/coverimage/3.jpg",
          "category": "Non-fiction",
          "pages": 334,
          "published_date": "2018-02-20"
        },
        {
          "id": 4,
          "title": "Atomic Habits",
          "author": "James Clear",
          "description": "A guide to building good habits and breaking bad ones, based on scientific research.",
          "price": 16.95,
          "rating": 4.8,
          "cover_image": "../src/assets/coverimage/4.jpg",
          "category": "Self-help",
          "pages": 320,
          "published_date": "2018-10-16"
        },
        {
          "id": 5,
          "title": "Where the Crawdads Sing",
          "author": "Delia Owens",
          "description": "A mystery and coming-of-age novel set in the marshes of North Carolina, following the life of an isolated girl.",
          "price": 14.99,
          "rating": 3.5,
          "cover_image": "../src/assets/coverimage/5.jpg",
          "category": "Mystery",
          "pages": 384,
          "published_date": "2018-08-14"
        },
        {
          "id": 6,
          "title": "The Road",
          "author": "Cormac McCarthy",
          "description": "A post-apocalyptic novel that follows a father and son journeying through a bleak, desolate world.",
          "price": 13.50,
          "rating": 4.4,
          "cover_image": "../src/assets/coverimage/6.jpg",
          "category": "Literary Fiction",
          "pages": 287,
          "published_date": "2006-09-26"
        },
        {
          "id": 7,
          "title": "Sapiens: A Brief History of Humankind",
          "author": "Yuval Noah Harari",
          "description": "A compelling exploration of the history of humankind, from the Stone Age to modern times.",
          "price": 19.99,
          "rating": 4.7,
          "cover_image": "../src/assets/coverimage/7.jpg",
          "category": "History",
          "pages": 443,
          "published_date": "2015-02-10"
        },
        {
          "id": 8,
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "description": "A tragic love story set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
          "price": 10.99,
          "rating": 4.2,
          "cover_image": "../src/assets/coverimage/8.jpg",
          "category": "Classics",
          "pages": 180,
          "published_date": "1925-04-10"
        },
        {
          "id": 9,
          "title": "Murder on the Orient Express",
          "author": "Agatha Christie",
          "description": "A classic detective novel featuring the famous detective Hercule Poirot solving a murder on a luxurious train.",
          "price": 9.99,
          "rating": 4.7,
          "cover_image": "../src/assets/coverimage/9.jpg",
          "category": "Crime",
          "pages": 256,
          "published_date": "1934-01-01"
        },
        {
          "id": 10,
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "description": "A fable about following your dreams, as a young shepherd embarks on a journey to find his personal legend.",
          "price": 12.99,
          "rating": 4.6,
          "cover_image": "../src/assets/coverimage/10.jpg",
          "category": "Fiction",
          "pages": 208,
          "published_date": "1988-05-01"
        },
        {
          "id": 11,
          "title": "The Subtle Art of Not Giving a F*ck",
          "author": "Mark Manson",
          "description": "A no-nonsense approach to living a better life by caring less about the wrong things.",
          "price": 16.00,
          "rating": 3,
          "cover_image": "../src/assets/coverimage/11.jpg",
          "category": "Self-help",
          "pages": 224,
          "published_date": "2016-09-13"
        },
        {
          "id": 12,
          "title": "Becoming",
          "author": "Michelle Obama",
          "description": "The memoir of former First Lady Michelle Obama, sharing the experiences that shaped her life.",
          "price": 21.99,
          "rating": 4.6,
          "cover_image": "../src/assets/coverimage/12.jpg",
          "category": "Thriller",
          "pages": 448,
          "published_date": "2018-11-13"
        },
        {
          "id": 13,
          "title": "Dune",
          "author": "Frank Herbert",
          "description": "A science fiction epic set on the desert planet of Arrakis, following the story of Paul Atreides.",
          "price": 18.00,
          "rating": 4.7,
          "cover_image": "../src/assets/coverimage/13.jpg",
          "category": "Classics",
          "pages": 896,
          "published_date": "1965-08-01"
        },
        {
          "id": 14,
          "title": "1984",
          "author": "George Orwell",
          "description": "A dystopian novel set in a totalitarian regime where a man struggles to maintain his sanity.",
          "price": 10.99,
          "rating": 3.7,
          "cover_image": "../src/assets/coverimage/14.jpg",
          "category": "Thriller",
          "pages": 328,
          "published_date": "1949-06-08"
        },
        {
          "id": 15,
          "title": "The Handmaid's Tale",
          "author": "Margaret Atwood",
          "description": "A dystopian novel where women have become second-class citizens in a religiously driven totalitarian society.",
          "price": 14.99,
          "rating": 4.4,
          "cover_image": "../src/assets/coverimage/15.jpg",
          "category": "Mystery",
          "pages": 311,
          "published_date": "1985-08-01"
        },
        {
          "id": 16,
          "title": "The Hunger Games",
          "author": "Suzanne Collins",
          "description": "In a post-apocalyptic world, a young girl must fight for survival in a televised death match.",
          "price": 13.99,
          "rating": 3.5,
          "cover_image": "../src/assets/coverimage/16.jpg",
          "category": "Mystery",
          "pages": 374,
          "published_date": "2008-09-14"
        },
        {
          "id": 17,
          "title": "The Outsiders",
          "author": "S.E. Hinton",
          "description": "A coming-of-age story about two weeks in the life of a 14-year-old boy as he struggles with being a 'greaser.'",
          "price": 8.99,
          "rating": 4.4,
          "cover_image": "../src/assets/coverimage/17.jpg",
          "category": "Mystery",
          "pages": 192,
          "published_date": "1967-04-24"
        },
        {
          "id": 18,
          "title": "The Secret History",
          "author": "Donna Tartt",
          "description": "A dark and compelling novel about a group of elite college students who commit murder.",
          "price": 13.00,
          "rating": 2.7,
          "cover_image": "../src/assets/coverimage/18.jpg",
          "category": "Fiction",
          "pages": 576,
          "published_date": "1992-09-01"
        },
        {
          "id": 19,
          "title": "The Seven Husbands of Evelyn Hugo",
          "author": "Taylor Jenkins Reid",
          "description": "A reclusive Hollywood star tells her life story to a young reporter, revealing the true story behind her seven marriages.",
          "price": 17.99,
          "rating": 4.7,
          "cover_image": "../src/assets/coverimage/19.jpg",
          "category": "Crime",
          "pages": 400,
          "published_date": "2017-06-13"
        },
        {
          "id": 20,
          "title": "The 5th Wave",
          "author": "Rick Yancey",
          "description": "The first book in a series about a young girl struggling for survival after a series of alien invasions.",
          "price": 12.99,
          "rating": 4.2,
          "cover_image": "../src/assets/coverimage/20.jpg",
          "category": "Crime",
          "pages": 457,
          "published_date": "2013-05-07"
        },
        {
          "id": 21,
          "title": "The Priory of the Orange Tree",
          "author": "Samantha Shannon",
          "description": "A high fantasy novel set in a world threatened by dragons, with themes of power and gender.",
          "price": 25.99,
          "rating": 4.6,
          "cover_image": "../src/assets/coverimage/21.jpg",
          "category": "Fantasy",
          "pages": 848,
          "published_date": "2019-02-26"
        },
        {
          "id": 22,
          "title": "Good to Great",
          "author": "Jim Collins",
          "description": "A study of companies that made the leap from good to great and how others can do the same.",
          "price": 18.00,
          "rating": 4,
          "cover_image": "../src/assets/coverimage/22.jpg",
          "category": "History",
          "pages": 320,
          "published_date": "2001-10-16"
        },
        {
          "id": 23,
          "title": "Be Here Now",
          "author": "Ram Dass",
          "description": "A classic book on spirituality that blends autobiography, philosophy, and deep insights.",
          "price": 19.99,
          "rating": 3.9,
          "cover_image": "../src/assets/coverimage/23.jpg",
          "category": "Literary Fiction",
          "pages": 416,
          "published_date": "1971-09-01"
        },
        {
          "id": 24,
          "title": "Brida",
          "author": "Paulo Coelho",
          "description": "A novel that explores the mystical and spiritual journey of a young woman named Brida.",
          "price": 14.99,
          "rating": 4.3,
          "cover_image": "../src/assets/coverimage/24.jpg",
          "category": "Fiction",
          "pages": 288,
          "published_date": "2008-09-01"
        },
        {
          "id": 25,
          "title": "The Girl on the Train",
          "author": "Paula Hawkins",
          "description": "A psychological thriller about a woman who gets involved in a missing persons case.",
          "price": 16.99,
          "rating": 4.2,
          "cover_image": "../src/assets/coverimage/25.jpg",
          "category": "Thriller",
          "pages": 395,
          "published_date": "2015-01-13"
        },
        {
          "id": 26,
          "title": "Circe",
          "author": "Madeline Miller",
          "description": "A retelling of the Greek myth of Circe, the daughter of Helios, the sun god.",
          "price": 16.99,
          "rating": 4.6,
          "cover_image": "../src/assets/coverimage/26.jpg",
          "category": "Fantasy",
          "pages": 400,
          "published_date": "2018-04-10"
        },
        {
          "id": 27,
          "title": "The Night Circus",
          "author": "Erin Morgenstern",
          "description": "A fantasy novel about a magical competition between two young illusionists.",
          "price": 16.00,
          "rating": 4.4,
          "cover_image":"../src/assets/coverimage/27.jpg",
          "category": "Fantasy",
          "pages": 512,
          "published_date": "2011-09-13"
        },
        {
          "id": 28,
          "title": "The 48 Laws of Power",
          "author": "Robert Greene",
          "description": "A guide to understanding power dynamics in relationships and the workplace.",
          "price": 14.99,
          "rating": 4.5,
          "cover_image": "../src/assets/coverimage/28.jpg",
          "category": "Self-help",
          "pages": 452,
          "published_date": "1998-09-01"
        },
        {
          "id": 29,
          "title": "The Secret",
          "author": "Rhonda Byrne",
          "description": "A self-help book focused on the law of attraction, teaching how positive thinking can create success.",
          "price": 19.99,
          "rating": 4.3,
          "cover_image": "../src/assets/coverimage/29.jpg",
          "category": "Self-help",
          "pages": 198,
          "published_date": "2006-11-28"
        },
        {
          "id": 30,
          "title": "Outliers",
          "author": "Malcolm Gladwell",
          "description": "A look at what makes high-achievers different, exploring the role of culture, family, and timing.",
          "price": 15.99,
          "rating": 4.4,
          "cover_image": "../src/assets/coverimage/30.jpg",
          "category": "Non-fiction",
          "pages": 309,
          "published_date": "2008-11-18"
        }
      ]   
    
      
}


const bookSlice=createSlice({
    name:"book",
    initialState,
    reducers:{
        addBook:(state,action)=>{
            state.books.push(action.payload);
        }
    }
})

export const{addBook}=bookSlice.actions;
export default bookSlice.reducer;