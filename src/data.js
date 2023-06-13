const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority';

async function insertDocuments(data) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('arena');
    const collection = db.collection('candidates');
    const result = await collection.insertMany(data);
    console.log('Documents inserted:', result.insertedCount);
  } catch (error) {
    console.error('Error inserting documents:', error);
  } finally {
    await client.close();
  }
}

// Example data to be inserted
const data=[
  {
    id: 0,
    name: "Person1",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
    position: "Secretory",
    votes: 50,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 1,
    name: "Person2",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 10,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 2,
    name: "Person3",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 64,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 3,
    name: "Person4",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 52,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 4,
    name: "Person5",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 26,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 5,
    name: "Person6",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 40,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 6,
    name: "Person7",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 30,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 7,
    name: "Person8",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 5,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 9,
    name: "Person10",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 50,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 11,
    name: "Person12",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well a Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 57,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 12,
    name: "Person13",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well a Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 17,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 13,
    name: "Person14",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well a Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 67,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 14,
    name: "Person15",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 14,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 15,
    name: "Person16",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well aServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 40,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 16,
    name: "Person17",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 14,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 17,
    name: "Person18",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 47,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 19,
    name: "Person20",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 64,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 20,
    name: "Person21",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 42,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 21,
    name: "Person22",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 24,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 22,
    name: "Person23",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 4,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 23,
    name: "Person24",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 17,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 24,
    name: "Person25",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 60,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 25,
    name: "Person26",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 57,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 26,
    name: "Person27",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 6,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 27,
    name: "Person28",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Technical head",
    votes: 5,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 28,
    name: "Person29",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Technical head",
    votes: 65,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: 29,
    name: "Person30",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Technical head",
    votes: 15,
    pic:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
  },
];

// Call the insertDocuments function
insertDocuments(data);