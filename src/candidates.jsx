const candidates = [
  {
    id: 0,
    name: "Person1",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
    position: "Secretory",
    votes: 0,
    pic: "",
  },
  {
    id: 1,
    name: "Person2",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 10,
    pic: "",
  },
  {
    id: 2,
    name: "Person3",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Secretory",
    votes: 40,
    pic: "",
  },
  {
    id: 3,
    name: "Person4",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 5,
    pic: "",
  },
  {
    id: 4,
    name: "Person5",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 50,
    pic: "",
  },
  {
    id: 5,
    name: "Person6",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well a Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Tresurer",
    votes: 7,
    pic: "",
  },
  {
    id: 6,
    name: "Person7",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popullightweight, interpreted compiled programmilanguage. It is also known as scriptilanguage for web pages. It is well-known fthe development of web pages, many non-browsenvironments also use it. JavaScript can used for Client-side developments as well Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 14,
    pic: "",
  },
  {
    id: 7,
    name: "Person8",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most populalightweight, interpreted compiled programminlanguage. It is also known as scriptinlanguage for web pages. It is well-known fothe development of web pages, many non-browseenvironments also use it. JavaScript can bused for Client-side developments as well aServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 40,
    pic: "",
  },
  {
    id: 8,
    name: "Person9",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Cultural head",
    votes: 4,
    pic: "",
  },
  {
    id: 9,
    name: "Person10",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 17,
    pic: "",
  },
  {
    id: 10,
    name: "Person11",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popularlightweight, interpreted compiled programminglanguage. It is also known as scriptinglanguage for web pages. It is well-known forthe development of web pages, many non-browserenvironments also use it. JavaScript can beused for Client-side developments as well asServer-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 60,
    pic: "",
  },
  {
    id: 11,
    name: "Person12",
    moto: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments`,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor in reprehenderit in volupta",
      position: "Security head",
    votes: 56,
    pic: "",
  },
];
export default candidates;
