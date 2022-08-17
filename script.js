const coding_jokes = [
    "“Knock, knock.”\n\n“Who’s there?”\n\nvery long pause….\n\n“Java.”",
    "A SQL query goes into a bar, walks up to two tables and asks, “Can I join you?”",
    "Why do programmers always mix up Halloween and Christmas?\n\nA: Because Oct 31 == Dec 25!”",
    "“[“”hip””,””hip””]\n\n(hip hip array!)”",
    "To understand what recursion is, you must first understand recursion.",
    "I don’t see women as objects. I consider each to be in a class of her own.",
    "3 Errors walk into a bar. The barman says, “Normally I’d Throw you all out, but tonight I’ll make an Exception.”",
    "An optimist says the glass is half full. A pessimist says the glass is half empty. A programmer says the glass is twice as large as necessary.",
    "What did the Project Manager say to the Programmer?\n\nYou start coding, I’ll go find out what they want.",
    "Software can be fast, reliable and cheap. Choose any two."
]

const animal_jokes = [
    "What do you call a dog magician? A Labracadabrador!",
    "What do you call an alligator who solves mysteries? An investgator!",
    "Why are cats bad storytellers? Because they only have one tale.",
    "What steps do you take if you a tiger is running towards you? Big ones!",
    "A pony went to see the doctor, because it couldn't speak. \"I know what's wrong,\" said the doctor. \"You're a little horse!\""
]

const dad_jokes = [
    "RIP boiling water, you will be mist.",
    "I once wrote a song about a tortilla, but it's more of a wrap.",
    "The wedding was so beautiful, even the cake was in tiers.",
    "I used to be able to play the piano by ear, but now I have to use my hands.",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "How do celebrities stay cool? They have many fans.",
    "What did the fisherman say to the magician? Pick a cod, any cod.",
    "Why can't a leopard hide? Because he's always spotted.",
    "Why are spiders so smart? They can find everything on the web.",
    "Did you hear about the circus fire? It was in tents."
]

const themes = ["coding", "animal", "dad"];

const batch = {
    "coding": coding_jokes,
    "animal": animal_jokes,
    "dad": dad_jokes
};

const choose = arr => arr[Math.floor(Math.random() * (arr.length - 1))];

const theme = choose(themes);

const joke = choose(batch[theme]);

console.log("Hi! Welcome to my joke generator!\n"+
            "Here's a joke for you today, thematic of the joke: "+theme+" joke.\n\n"+joke);
