/* 
Versió γ: Versió amb Base de Dades Joc del Penjat: basedades.html i basedades.js
*/

    // Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Base de Dades Joc del Penjat",
            "Versio": "Versió γ Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Base de Datos Juego del Ahorcado",
            "Versio": "Versión γ Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Database Version",
            "Versio": "Hangman Game γ Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idiomes = Idiomes_dft;
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");

    // Variables Globals.
    var Paraula = [];
    var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
    var Vides = 7;
    var Punts = 0;

    // Llista de paraules per al joc i les pistes associades
    var paraules = ["cordes", "fetge", "forca", "jutges", 
        "jutjat", "mengen", "penjat", "quinta", "setze"];
    var pistes = ["A la quinta forca", 
        "A ca un penjat, no hi anomenis cordes", 
        "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];
    
    // Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
    const Taula_dft = [
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge",  "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca",  "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze",  "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}    
    ];
    var Taula = Taula_dft;
    
    // Escull una paraula aleatòriament
    var aleatori = Math.floor(Math.random() * paraules.length);
    var paraula = paraules[aleatori];
    var pista = pistes[paraulespistes[aleatori]];
    
    // Alternativament, fent servir l'array d'objectes
    // window.alert(Taula.length);
    aleatori = Math.floor(Math.random() * Taula.length);
    paraula = Taula[aleatori].Paraula;
    pista = Taula[aleatori].Pista;
    
    // Marcam cada lletra amb un "_"
    for (var i = 0; i < paraula.length; i++) {
        Paraula[i] = "_";
    }

    // Comprovam si la lletra es troba a la Paraula.
    function Comprovar() {
        // Variables Locals.
        var lletra = document.getElementById("lletra").value;
        // Assignam el valor <input id="lletra" a lletra, 
        // i deixam <input id="lletra" en blanc.
        document.getElementById("lletra").value = "";
        // window.alert(lletra);
        
        // Convertim les majúsculues a minúscules
        lletra = lletra.toLowerCase();

        // Eliminam els accents o dièresis de les vocals
        switch (lletra) {
            case "á":
            case "à":
                lletra = "a";
                break;
            case "é":
            case "è":
                lletra = "e";
                break;
            case "í":
            case "ï":
                lletra = "i";
                break;
            case "ó":
            case "ò":
                lletra = "o";
                break;
            case "ú":
            case "ü":
                lletra = "u";
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        /* 
         * Comprovam que la lletra no sigui repetida, Inici
        */    
        if ((Paraula.indexOf(lletra) != -1) || (Lletres.indexOf(lletra) != -1)) {
            window.alert(Idioma.Repetida);
        } else {
            
        /*
         * Cercam la posició de la lletra a la paraula, si no hi es, obtenim -1
         */
        var pos = paraula.indexOf(lletra);
        if (pos != -1) {
            if (document.getElementById('off').hidden) {            
                document.getElementById("miau").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = false;
            document.getElementById("disfraz1").hidden = true;
            window.alert(Idioma.Encertat);

            // Afegim lletra a Paraula i actualitzam la pantalla.
            for (var i = pos; i < paraula.length; i++) {
              if (paraula[i] == lletra) {
                Paraula[i] = lletra;
              }
            }
            document.getElementById("paraula").innerHTML = Paraula;
        } else if (((lletra >= "a") && (lletra <= "z")) || 
                    (lletra == "ñ") || (lletra == "-") || 
                    (lletra == "ç") || (lletra == "·")) {
            if (document.getElementById('off').hidden) {
                document.getElementById("boom_cloud").play();
            }
            document.getElementById("disfraz3").hidden = true;
            document.getElementById("disfraz2").hidden = true;
            document.getElementById("disfraz1").hidden = false;
            window.alert(Idioma.Fallat);

            // Afegim lletra a Lletres i actualitzam la pantalla.
            // Lletres = Lletres + "<del>" + lletra + "<del>,";
            // Lletres.push(lletra);
            Lletres[7 - Vides] = lletra;
            document.getElementById("lletres").innerHTML = Lletres;
            
            // Decrementam el comptador Vides.    
            // Vides = Vides - 1;
            Vides--;
            // window.alert(Vides);

            // Mostram la imatge corresponent.
            MostraImg();
        } else {
            window.alert(Idioma.Incorrecte);
        }
        
        /*
         * Comprovam que la lletra no sigui repetida. Final
        */
        }
        
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // Comprovam si has perdut! o has guanyat!.
        if (Vides <= 0) {
            window.alert(Idioma.Perdut);
            document.body.style.backgroundImage = "url('img/Jungle.png')";
            document.getElementById("disfraz1").hidden = true;
            document.getElementById("rotar").hidden = false;
            if (document.getElementById('off').hidden) {
                document.getElementById("cat-fight").play();
                const myTimeout6 = setTimeout(BellTollX3Play, 6000);
            }            
            AturaTot();
        } else {
            if (Paraula.indexOf("_") == -1) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                
                // Calculam i mostram la puntuació
                Punts = paraula.length * Vides * 10 - document.getElementById("Segons").innerHTML;
                if (Punts < 0) { Punts = 0; };
                document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
                
                window.alert(Idioma.Guanyat);
                document.body.style.backgroundImage = "url('img/Party.png')";
                document.getElementById("disfraz2").hidden = true;
                document.getElementById("caminar").hidden = false;
                if (document.getElementById('off').hidden) {
                    document.getElementById("cheer").play();
                }
                AturaTot();
            } else {
                if (document.getElementById('off').hidden) {
                    // document.getElementById("clock_ticking").loop = true;
                    document.getElementById("clock_ticking").play();
                    const myTimeout3 = setTimeout(BellTollPlay, 3000);
                }
            }
        }
    }

    function BellTollPlay() {
        document.getElementById("bell_toll").play();
    }    

    function BellTollX3Play() {
        window.alert(Idioma.Descansi);
        document.getElementById("bell_toll_x3").play();
    }            

    // Deshabilitam tant <input id="lletra" com <button id="comprovar".
    function AturaTot() {
        document.getElementById("lletra").disabled = true;
        document.getElementById("comprovar").disabled = true;
        document.getElementById('teclat').disabled = true;
        document.getElementById('sons').disabled = true;
        document.getElementById("pista").disabled = true;
        document.getElementById("Segons").hidden = true;    
    }

    // Amagam totes les imatges.
    function AmagaImg() {
        document.getElementById("ahorcado_6").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_0").hidden = true;
        document.getElementById("ahorcado").hidden = true;

        // document.getElementById("disfraz3").hidden = true;
        document.getElementById("disfraz2").hidden = true;
        document.getElementById("disfraz1").hidden = true;
        document.getElementById("caminar").hidden = true;
        document.getElementById("rotar").hidden = true;

        document.getElementById("Audios").style.display = "none";
        document.getElementById('Teclat').hidden = true;
        
        document.getElementById("paraula").innerHTML = Paraula;
        document.body.style.display = "block";
    }

    // Canviam els diferents literals de la GUI segons l'idioma
    function CanviarIdioma(IdIdioma) {
        AlaWeb_SQLite(IdIdioma);

        Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
        document.title = Idioma.Titol;
        document.getElementById("Versio").innerHTML = Idioma.Versio;
        document.getElementById("lletra").placeholder = Idioma.Input;
        document.getElementById("comprovar").innerHTML = Idioma.Comprovar;
        document.getElementById("Paraula").innerHTML = Idioma.Paraula;
        document.getElementById("Sopes").innerHTML = Idioma.Sopes;
        document.getElementById("pista").innerHTML = Idioma.Pista;        
        document.getElementById("Vides").innerHTML = Idioma.Vides;
        document.getElementById("Moix").innerHTML = Idioma.Moix;
        document.getElementById("Lletres").innerHTML = Idioma.Lletres;
        document.getElementById("Ets").innerHTML = Idioma.Ets;
        document.getElementById("URLpistes").innerHTML = Idioma.URLpistes;
        document.getElementById("Dita1").title = Idioma.Dita1;
        document.getElementById("Dita_1").innerHTML = Idioma.Dita + " 1";
        document.getElementById("Dita2").title = Idioma.Dita2;
        document.getElementById("Dita_2").innerHTML = Idioma.Dita + " 2";
        document.getElementById("Dita3").title = Idioma.Dita3;
        document.getElementById("Dita_3").innerHTML = Idioma.Dita + " 3";
        document.getElementById("Credits").innerHTML = Idioma.Credits;
        document.getElementById("Scratch").innerHTML = Idioma.YouTube;
        document.getElementById("YouTube").innerHTML = Idioma.YouTube;
        document.getElementById("teclat").title = Idioma.Teclat;
        if (Punts > 0) {
            document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
        }

        // Escull una nova paraula aleatòriament
        // window.alert(Taula.length);
        aleatori = Math.floor(Math.random() * Taula.length);
        paraula = Taula[aleatori].Paraula;
        pista = Taula[aleatori].Pista;
        window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
        window.alert("[" + paraula + "]=[" + pista + "]");
        Paraula = [];
        // Marcam cada lletra amb un "_"
        for (var i = 0; i < paraula.length; i++) {
            Paraula[i] = "_";
        }
        document.getElementById("paraula").innerHTML = Paraula;
    }
        
    // Mostram la imatge corresponent.
    function MostraImg() {
        switch (Vides) {
            case 6:
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
              document.getElementById("ahorcado_6").hidden = false;
              break;
            case 5:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
                document.getElementById("ahorcado_5").hidden = false;
                document.getElementById("ahorcado_6").hidden = true;
                break;
            case 4:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor3
                document.getElementById("ahorcado_4").hidden = false;
                document.getElementById("ahorcado_5").hidden = true;
                break;
            case 3:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor4
                document.getElementById("ahorcado_3").hidden = false;
                document.getElementById("ahorcado_4").hidden = true;
                break;
            case 2:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor5
                document.getElementById("ahorcado_2").hidden = false;
                document.getElementById("ahorcado_3").hidden = true;
                break;
            case 1:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor6
                document.getElementById("ahorcado_1").hidden = false;
                document.getElementById("ahorcado_2").hidden = true;
                break;
            case 0:
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor7
                document.getElementById("ahorcado_0").hidden = false;
                document.getElementById("ahorcado_1").hidden = true;
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }
    }
    
    // Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: file => `https://sql.js.org/dist/${file}`
            // locateFile: filename => `https://unpkg.com/sql.js@1.6.2/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the 
        // current html page's folder.
        alasql('ATTACH SQLITE DATABASE penjat("penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //     [], function(res) {Print_Data(Idiomes = res.pop());}
            [], function(res) {Idiomes = res.pop();}
        );
        if (Idiomes.length == 0) {Idiomes = Idiomes_dft;};
        // window.alert(Idiomes[0].Versio);
        alasql('ATTACH SQLITE DATABASE penjat("penjat.db"); USE penjat; \n\
                SELECT Paraula, Pista \n\
                FROM TblParaules INNER JOIN TblPistes \n\
                  ON TblParaules.IdPista = TblPistes.IdPista \n\
                WHERE TblParaules.IdIdioma = "' + IdIdioma + '";',
        //    [], function(res) {Print_Data(Taula = res.pop());}
            [], function(res) {Taula = res.pop();}
        );
        if (Taula.length == 0) {
            Taula = Taula_dft;
            window.alert("Idioma sense paraules / Idioma sin palabras / Language without words!");
        };
        // window.alert(Taula[0].Pista);
    }

    // Print data   
    function Print_Data(res) {
        for (var i in res) 
        {
           // console.log("row " + i);
           // document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i]) 
             {
              // console.log(" " + res[i][j]);
              // document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    }

    // HTML includes are done by JavaScript
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            elmnt.innerHTML = this.responseText;
                        }
                        if (this.status == 404) {
                            elmnt.innerHTML = "Page not found.";
                        }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }