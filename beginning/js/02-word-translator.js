// The Word Translator

// Usage: Use simple conditional statements
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

// Hello World translated in French is: Bonjour le monde


//prompt ask user for language code
let lang = prompt('Enter the language code es, de, en, or fr');

//if es, display hello world in spanish
if(lang == 'es') {
    console.log('Hola Mundo');
}

//if de, display hello world in german
else if(lang == 'de') {
    console.log('Hallo Welt');
}

//if en, display hello world in english
else if(lang == 'en') {
    console.log('Hello World');
}

//if fr, display hello world in french
else if(lang == 'fr') {
    console.log('Bonjour le monde');
}

//if user doesn't enter a valid code
else {
    console.log('Hello World');
}