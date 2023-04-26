DROP TABLE IF EXISTS TblIdiomes;
CREATE TABLE TblIdiomes (IdIdioma text, Idioma text,
  PRIMARY KEY (IdIdioma));

  INSERT INTO TblIdiomes VALUES ("an","aragonés");
  INSERT INTO TblIdiomes VALUES ("ca","catalán");
  INSERT INTO TblIdiomes VALUES ("en","inglés");
  INSERT INTO TblIdiomes VALUES ("es","español (o castellano)");
  INSERT INTO TblIdiomes VALUES ("eu","euskera");
  INSERT INTO TblIdiomes VALUES ("gl","gallego");

DROP TABLE IF EXISTS TblPistes;
CREATE TABLE TblPistes (IdPista integer, Pista text, IdIdioma text,
  PRIMARY KEY (IdPista),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma));

  INSERT INTO TblPistes VALUES (1,"A la quinta forca","ca");
  INSERT INTO TblPistes VALUES (2,"A ca un penjat, no hi anomenis cordes","ca");
  INSERT INTO TblPistes VALUES (3,"Setze jutges d'un jutjat mengen fetge d'un penjat","ca");

  INSERT INTO TblPistes VALUES (4,"En casa del ahorcado, no hay que mentar la soga","es");
  INSERT INTO TblPistes VALUES (5,"El que miente es adorado, el que dice la verdad, ahorcado","es");
  INSERT INTO TblPistes VALUES (6,"Tan bien parece el ladrón ahorcado, como en el altar el santo","es");

  INSERT INTO TblPistes VALUES (7,"God tempers the wind to the shorn lamb","en");
  INSERT INTO TblPistes VALUES (8,"Give a dog a bad name and hang it","en");
  INSERT INTO TblPistes VALUES (9,"Early to bed, early to rise, makes the man healthy, wealthy and wise","en");

DROP TABLE IF EXISTS TblParaules;
CREATE TABLE TblParaules (Paraula text, IdIdioma text, IdPista integer,
  PRIMARY KEY (Paraula),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma),
  FOREIGN KEY (IdPista) REFERENCES TblPistes (IdPista));

  INSERT INTO TblParaules VALUES ("cordes","ca",2);
  INSERT INTO TblParaules VALUES ("fetge","ca",3);
  INSERT INTO TblParaules VALUES ("forca","ca",1);
  INSERT INTO TblParaules VALUES ("jutges","ca",3);
  INSERT INTO TblParaules VALUES ("jutjat","ca",3);
  INSERT INTO TblParaules VALUES ("mengen","ca",3);
  INSERT INTO TblParaules VALUES ("penjat","ca",2);
  INSERT INTO TblParaules VALUES ("quinta","ca",1);
  INSERT INTO TblParaules VALUES ("setze","ca",3);

  INSERT INTO TblParaules VALUES ("ahorcado","es",4);
  INSERT INTO TblParaules VALUES ("mentar","es",4);
  INSERT INTO TblParaules VALUES ("soga","es",4);
  INSERT INTO TblParaules VALUES ("miente","es",5);
  INSERT INTO TblParaules VALUES ("adorado","es",5);
  INSERT INTO TblParaules VALUES ("verdad","es",5);
  INSERT INTO TblParaules VALUES ("ladrón","es",6);
  INSERT INTO TblParaules VALUES ("altar","es",6); 
  INSERT INTO TblParaules VALUES ("santo","es",6);

  INSERT INTO TblParaules VALUES ("god","en",7);
  INSERT INTO TblParaules VALUES ("wind","en",7);
  INSERT INTO TblParaules VALUES ("lamb","en",7);
  INSERT INTO TblParaules VALUES ("dog","en",8);
  INSERT INTO TblParaules VALUES ("name","en",8);
  INSERT INTO TblParaules VALUES ("hang","en",8);
  INSERT INTO TblParaules VALUES ("healthy","en",9);
  INSERT INTO TblParaules VALUES ("wealthy","en",9);
  INSERT INTO TblParaules VALUES ("wise","en",9);

SELECT TblParaules.Paraula
  FROM TblParaules
WHERE (((TblParaules.IdIdioma)="ca") AND ((length([paraula]))=6));

SELECT TblPistes.Pista, TblParaules.Paraula, TblIdiomes.Idioma
  FROM (TblIdiomes INNER JOIN TblParaules ON TblIdiomes.IdIdioma = TblParaules.IdIdioma) 
  INNER JOIN TblPistes ON (TblPistes.IdPista = TblParaules.IdPista) AND (TblIdiomes.IdIdioma = TblPistes.IdIdioma)
ORDER BY TblPistes.Pista, TblParaules.Paraula, TblIdiomes.Idioma;

DROP TABLE IF EXISTS TblPaisos;
CREATE TABLE TblPaisos (IdPais2T text, NomOficial text, IdPais3T text, IdPais3N integer, Observacions text,
  PRIMARY KEY (IdPais2T));

  INSERT INTO TblPaisos VALUES ("AD","Andorra", "AND", 20, "");
  INSERT INTO TblPaisos VALUES ("AU","Australia", "AUS", 36, "Incluye las Islas Ashmore y Cartier y las Islas del Mar del Coral.");
  INSERT INTO TblPaisos VALUES ("CA","Canadá", "CAN", 124, "");
  INSERT INTO TblPaisos VALUES ("ES","España", "ESP", 724, "Códigos obtenidos del idioma nativo (español): España");
  INSERT INTO TblPaisos VALUES ("GB","Reino Unido de Gran Bretaña e Irlanda", "GBR", 826, "Debido a que para obtener los códigos ISO no se utilizan las palabras comunes de Reino y Unido, los códigos se han obtenido a partir del resto del nombre oficial.");
  INSERT INTO TblPaisos VALUES ("IE","Irlanda", "IRL", 372, "");
  INSERT INTO TblPaisos VALUES ("IN","India", "IND", 356, "");
  INSERT INTO TblPaisos VALUES ("US","Estados Unidos de América (los)", "USA", 840, "");

DROP TABLE IF EXISTS TblIdiomesPaisos;
CREATE TABLE TblIdiomesPaisos (IdIdioma text, IdPais2T text,
  PRIMARY KEY (IdIdioma, IdPais2T),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma));

  INSERT INTO TblIdiomesPaisos VALUES ("an", "ES");
  INSERT INTO TblIdiomesPaisos VALUES ("ca", "AD");
  INSERT INTO TblIdiomesPaisos VALUES ("ca", "ES");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "AU");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "CA");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "GB");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "IE");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "IN");
  INSERT INTO TblIdiomesPaisos VALUES ("en", "US");
  INSERT INTO TblIdiomesPaisos VALUES ("es", "ES");
  INSERT INTO TblIdiomesPaisos VALUES ("eu", "ES");
  INSERT INTO TblIdiomesPaisos VALUES ("gl", "ES");

SELECT TblIdiomes.IdIdioma, TblIdiomes.Idioma, TblPaisos.IdPais2T, TblPaisos.NomOficial
  FROM TblPaisos 
  INNER JOIN (TblIdiomes INNER JOIN TblIdiomesPaisos ON TblIdiomes.IdIdioma = TblIdiomesPaisos.IdIdioma) 
    ON TblPaisos.IdPais2T = TblIdiomesPaisos.IdPais2T;

DROP TABLE IF EXISTS TblTextosGUI;
CREATE TABLE TblTextosGUI (IdIdioma text, Titol text, Versio text, Input text, Pregunta text, 
  Comprovar text, Paraula text, Sopes text, Pista text, Vides text, Moix text, Lletres text, Ets text, 
  URLpistes text, Dita text, Dita1 text, Dita2 text, Dita3 text, Credits text, YouTube text, Wikis text, 
  Idioma text, Diccionari text, Teclat text, Incorrecte text, Repetida text, Encertat text, Guanyat text, 
  Fallat text, Perdut text, Descansi text, Puntuacio text,
  PRIMARY KEY (IdIdioma),
  FOREIGN KEY (IdIdioma) REFERENCES TblIdiomes (IdIdioma));

  INSERT INTO TblTextosGUI VALUES ("ca", "Versió amb Base de Dades Joc del Penjat", "Versió γ Joc del Penjat", 
    "Escriu una lletra minúscula", "Anam a la quinta forca?", "Comprovar", "Paraula:", "Demanes sopes?", "Pista", 
    "Vides:", "Un moix en té set?", "Lletres:", "Ets de lletres?", "URLpistes:", "Dita", "A la quinta forca,", 
    "A ca un penjat, no hi anomenis cordes,", "Setze jutges d'un jutjat mengen fetge d'un penjat, …", "Crèdits:", 
    "Joc Penjat on Scratch", "Penjat", "en Català", "Diccionari", "Mostra o Amaga", "Caràcter incorrecte!", 
    "Lletra repetida!", "Has encertat!", "i has guanyat!", "Has fallat!", "i has perdut!", "En pau descansi – RIP!", 
    "Puntuació:");
  INSERT INTO TblTextosGUI VALUES ("es", "Versión con Base de Datos Juego del Ahorcado", "Versión γ Juego del Ahorcado", 
    "Escribe una letra minúscula", "Vamos al quinto pino?", "Comprobar", "Palabra:", "Te rindes?", "Pista", 
    "Vidas:", "Un gato tiene siete?", "Letras:", "Eres de letras?", "URLpistas:", "Dicho", "Al quinto pino, ", 
    "En casa de un ahorcado, no hables de cuerdas,", "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …", "Crèditos:", 
    "Juego Ahorcado on Scratch", "Ahorcado", "en Español", "Diccionario", "Muestra o Esconde", "Carácter incorrecto!", 
    "Letra repetida!", "Has acertado!", "y has ganado!", "Has fallado!", "y has perdido!", "En paz descanse - RIP!", 
    "Puntuación:" ); 
  INSERT INTO TblTextosGUI VALUES ("en", "Hangman Game Database Version", "Hangman Game γ Versión", 
    "Write a lowercase letter", "Are we going to the boondocks?", "Check it", "Word:", "You give up?", "Clue", 
    "Lives:", "A cat has seven?", "Letters:", "Are you in liberal arts?", "URLclues:", "Saying", "To the boondocks,", 
    "In a hanged man's home, don't talk about ropes,", "Sixteen judges of a court eat the liver of a hangman, …", "Credits:", 
    "Hangman Game on Scratch", "Hangman", "in English", "Dictionary", "Show or Hide", "Wrong character!", "Repeated letter!", 
    "You're right!", "and you have won!", "You have failed!", "and you have lost!", "Rest in peace - RIP!", 
    "Score:" ); 

SELECT TblTextosGUI.IdIdioma, TblTextosGUI.Input, TblTextosGUI.Pregunta, TblTextosGUI.Comprovar, TblTextosGUI.Paraula, 
    TblTextosGUI.Sopes, TblTextosGUI.Pista, TblTextosGUI.Vides, TblTextosGUI.Moix, TblTextosGUI.Lletres, TblTextosGUI.Ets
  FROM TblTextosGUI;

SELECT TblParaules.IdIdioma, Count(TblParaules.Paraula) AS CuentaDeParaula
  FROM TblParaules
GROUP BY TblParaules.IdIdioma;

SELECT Count(TblIdiomesPaisos.IdIdioma) AS CuentaDeIdIdioma, TblIdiomesPaisos.IdPais2T
  FROM TblIdiomesPaisos
GROUP BY TblIdiomesPaisos.IdPais2T
HAVING (((Count(TblIdiomesPaisos.IdIdioma))>1));

SELECT DISTINCT TblPistes.Pista, TblPistes.IdIdioma
  FROM TblPistes 
INNER JOIN TblParaules ON TblPistes.IdPista = TblParaules.IdPista;
