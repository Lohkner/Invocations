/* ══════════════════════════════════════════
   BASE DE DATOS DE REGLAS — S&S Director
   Generada desde el Manual de Monstruos v1 y la Guía del Director v1.
   Se puede editar entera desde el Editor de Reglas de la app; al cambiar
   este archivo, sube STORAGE.RULES_DATA_VERSION (js/storage.js).
══════════════════════════════════════════ */
const DEFAULT_DB = {
 "na": {
  "0": {
   "name": "NA 0",
   "pb": 2,
   "fuerte": 2,
   "normal": 0,
   "debil": -2,
   "dano": "1d6",
   "a": 0,
   "pa": 2,
   "peso": 0,
   "etiqueta": "Civil"
  },
  "1": {
   "name": "NA 1",
   "pb": 2,
   "fuerte": 2,
   "normal": 0,
   "debil": -2,
   "dano": "2d6",
   "a": 0,
   "pa": 3,
   "peso": 2,
   "etiqueta": "Novato"
  },
  "2": {
   "name": "NA 2",
   "pb": 2,
   "fuerte": 2,
   "normal": 0,
   "debil": -2,
   "dano": "2d6",
   "a": 1,
   "pa": 3,
   "peso": 2
  },
  "3": {
   "name": "NA 3",
   "pb": 3,
   "fuerte": 3,
   "normal": 0,
   "debil": -2,
   "dano": "3d6",
   "a": 1,
   "pa": 3,
   "peso": 3,
   "etiqueta": "Veterano"
  },
  "4": {
   "name": "NA 4",
   "pb": 3,
   "fuerte": 3,
   "normal": 1,
   "debil": -2,
   "dano": "3d6",
   "a": 2,
   "pa": 3,
   "peso": 3
  },
  "5": {
   "name": "NA 5",
   "pb": 3,
   "fuerte": 3,
   "normal": 1,
   "debil": -2,
   "dano": "4d6",
   "a": 2,
   "pa": 3,
   "peso": 4
  },
  "6": {
   "name": "NA 6",
   "pb": 4,
   "fuerte": 4,
   "normal": 1,
   "debil": -2,
   "dano": "4d6",
   "a": 3,
   "pa": 3,
   "peso": 4
  },
  "7": {
   "name": "NA 7",
   "pb": 4,
   "fuerte": 4,
   "normal": 1,
   "debil": -2,
   "dano": "5d6",
   "a": 3,
   "pa": 4,
   "peso": 5
  },
  "8": {
   "name": "NA 8",
   "pb": 4,
   "fuerte": 4,
   "normal": 2,
   "debil": -2,
   "dano": "5d6",
   "a": 4,
   "pa": 4,
   "peso": 5
  },
  "9": {
   "name": "NA 9",
   "pb": 5,
   "fuerte": 5,
   "normal": 2,
   "debil": -2,
   "dano": "6d6",
   "a": 4,
   "pa": 4,
   "peso": 6
  },
  "10": {
   "name": "NA 10",
   "pb": 5,
   "fuerte": 5,
   "normal": 2,
   "debil": -2,
   "dano": "6d6",
   "a": 5,
   "pa": 4,
   "peso": 6,
   "etiqueta": "Élite"
  },
  "11": {
   "name": "NA 11",
   "pb": 5,
   "fuerte": 5,
   "normal": 2,
   "debil": -2,
   "dano": "7d6",
   "a": 5,
   "pa": 5,
   "peso": 7
  },
  "12": {
   "name": "NA 12",
   "pb": 6,
   "fuerte": 6,
   "normal": 3,
   "debil": -2,
   "dano": "7d6",
   "a": 6,
   "pa": 5,
   "peso": 7,
   "etiqueta": "Legendario"
  },
  "13": {
   "name": "NA 13",
   "pb": 6,
   "fuerte": 6,
   "normal": 3,
   "debil": -2,
   "dano": "8d6",
   "a": 6,
   "pa": 5,
   "peso": 8
  },
  "14": {
   "name": "NA 14",
   "pb": 6,
   "fuerte": 6,
   "normal": 3,
   "debil": -2,
   "dano": "8d6",
   "a": 7,
   "pa": 5,
   "peso": 8
  },
  "15": {
   "name": "NA 15",
   "pb": 7,
   "fuerte": 7,
   "normal": 3,
   "debil": -2,
   "dano": "9d6",
   "a": 7,
   "pa": 6,
   "peso": 8
  }
 },
 "roles": {
  "arrollador": {
   "name": "Arrollador",
   "mod": "Fuertes: FUE, CON · Débil: DES · +1d6 al daño",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES"
   ],
   "hab": "Ataque Masivo",
   "habTipo": "Aptitud",
   "habCoste": "2 PA",
   "habTxt": "Aplica un estado de Daño en el Tiempo o Derriba sin tirada.",
   "danoDados": 1
  },
  "hostigador": {
   "name": "Hostigador",
   "mod": "Fuertes: DES, FUE · Débil: CON · +10 pies",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON"
   ],
   "hab": "Flanqueo",
   "habTipo": "Rasgo",
   "habCoste": "",
   "habTxt": "Ventaja si un aliado está adyacente al mismo objetivo.",
   "vel": 10
  },
  "represor": {
   "name": "Represor",
   "mod": "Fuertes: INT, SAB",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [],
   "hab": "Control de Zona",
   "habTipo": "Aptitud",
   "habCoste": "3 PA",
   "habTxt": "Aplica un estado en un radio de 10 pies (3 PA); los afectados hacen su Salvación."
  },
  "comandante": {
   "name": "Comandante",
   "mod": "Fuertes: CAR, FUE",
   "fuertes": [
    "CAR",
    "FUE"
   ],
   "debiles": [],
   "hab": "Aura de Mando",
   "habTipo": "Aura",
   "habCoste": "",
   "habTxt": "Un aliado ataca como Reacción; +2 al ataque de los aliados a 30 pies."
  },
  "soporte": {
   "name": "Soporte",
   "mod": "Fuertes: SAB, CAR · Débil: CON",
   "fuertes": [
    "SAB",
    "CAR"
   ],
   "debiles": [
    "CON"
   ],
   "hab": "Restaurar",
   "habTipo": "Aptitud",
   "habCoste": "2 PA",
   "habTxt": "Un aliado recupera 1d8 PV o se libra de un estado."
  },
  "explorador": {
   "name": "Explorador",
   "mod": "Fuertes: DES, SAB · +15 pies · Iniciativa +4",
   "fuertes": [
    "DES",
    "SAB"
   ],
   "debiles": [],
   "hab": "Primero en Llegar",
   "habTipo": "Rasgo",
   "habCoste": "",
   "habTxt": "Ventaja en todas sus tiradas durante su primer turno.",
   "vel": 15,
   "ini": 4
  },
  "artillero": {
   "name": "Artillero",
   "mod": "Fuertes: DES, SAB · Débil: CON",
   "fuertes": [
    "DES",
    "SAB"
   ],
   "debiles": [
    "CON"
   ],
   "hab": "Posición",
   "habTipo": "Rasgo",
   "habCoste": "",
   "habTxt": "Si no se ha movido este turno, su primer ataque a distancia tiene Ventaja."
  },
  "acechador": {
   "name": "Acechador",
   "mod": "Fuertes: DES, FUE",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [],
   "hab": "Primer Golpe",
   "habTipo": "Modificador",
   "habCoste": "",
   "habTxt": "Su primer impacto contra una criatura Desprevenida suma el daño base otra vez."
  },
  "guardian": {
   "name": "Guardián",
   "mod": "Fuertes: CON, FUE · +1 Armadura · −10 pies",
   "fuertes": [
    "CON",
    "FUE"
   ],
   "debiles": [],
   "hab": "Custodia",
   "habTipo": "Reacción",
   "habCoste": "",
   "habTxt": "Un ataque dirigido a un aliado adyacente pasa a dirigirse contra él.",
   "a": 1,
   "vel": -10
  },
  "esbirro": {
   "name": "Esbirro",
   "mod": "Fuertes: a elegir · PV = NA × 2",
   "fuertes": [],
   "debiles": [],
   "hab": "Esbirro",
   "habTipo": "Rasgo",
   "habCoste": "",
   "habTxt": "Cae con cualquier golpe que le quite sus PV. Sin Rasgos propios salvo los de tipo. No tira Moral: huye cuando cae su líder o la mitad de su grupo. Todos los esbirros de un mismo tipo actúan en la misma Iniciativa.",
   "esbirro": true
  }
 },
 "tamanos": {
  "diminuto": {
   "name": "Diminuto",
   "ej": "Rata, fuego fatuo, dron de bolsillo",
   "fue": "D",
   "des": 1,
   "con": -1,
   "atrTxt": "FUE Débil · DES +1 · CON −1",
   "alcance": "0 pies",
   "espacio": "2 pies"
  },
  "pequeno": {
   "name": "Pequeño",
   "ej": "Goblin, kobold, perro",
   "fue": -1,
   "des": 0,
   "con": 0,
   "atrTxt": "FUE −1 · DES — · CON —",
   "alcance": "5 pies",
   "espacio": "5 pies"
  },
  "mediano": {
   "name": "Mediano",
   "ej": "Humano, orco, lobo",
   "fue": 0,
   "des": 0,
   "con": 0,
   "atrTxt": "FUE — · DES — · CON —",
   "alcance": "5 pies",
   "espacio": "5 pies"
  },
  "grande": {
   "name": "Grande",
   "ej": "Ogro, caballo, oso",
   "fue": 1,
   "des": 0,
   "con": 0,
   "atrTxt": "FUE +1 · DES — · CON —",
   "alcance": "10 pies",
   "espacio": "10 pies"
  },
  "enorme": {
   "name": "Enorme",
   "ej": "Troll viejo, dragón adulto, tanque",
   "fue": 2,
   "des": -1,
   "con": 1,
   "atrTxt": "FUE +2 · DES −1 · CON +1",
   "alcance": "15 pies",
   "espacio": "15 pies",
   "naEnc": 1
  },
  "colosal": {
   "name": "Colosal",
   "ej": "Kraken, titán, nave de desembarco",
   "fue": 3,
   "des": "D",
   "con": 2,
   "atrTxt": "FUE +3 · DES Débil · CON +2",
   "alcance": "20 pies",
   "espacio": "20 pies o más",
   "naEnc": 1
  }
 },
 "hordas": {
  "grupo": {
   "name": "Grupo",
   "min": 4,
   "max": 6,
   "txt": "NA del miembro + 2",
   "na": 2
  },
  "banda": {
   "name": "Banda",
   "min": 7,
   "max": 12,
   "txt": "NA del miembro + 4",
   "na": 4
  },
  "turba": {
   "name": "Turba",
   "min": 13,
   "max": 30,
   "txt": "NA del miembro + 6",
   "na": 6
  },
  "marea": {
   "name": "Marea",
   "min": 31,
   "max": 999,
   "txt": "Registro Planetario (Guía, Cap. 9)",
   "marea": true
  }
 },
 "tipos": {
  "bestia": {
   "name": "Bestia",
   "txt": "Olfato Agudo o Visión en la Oscuridad. Con INT Débil no tira Moral: huye cuando la pelea deja de compensar.",
   "atrDeb": "INT",
   "debiles": [
    "INT"
   ],
   "deb": "Fotosensible, Hambre",
   "elige": [
    [
     "olfato_agudo",
     "vision_en_la_oscuridad"
    ]
   ],
   "fuertesDef": [
    "DES",
    "CON"
   ]
  },
  "humanoide": {
   "name": "Humanoide",
   "txt": "Ninguno. Puede llevar equipo del Manual Básico: su armadura sustituye a la Armadura base si es mayor.",
   "atrDeb": "Ninguno, o el que pida su oficio",
   "debiles": [],
   "deb": "Mando Único, Cobarde",
   "fuertesDef": [
    "FUE",
    "CON"
   ],
   "equipo": true
  },
  "gigante": {
   "name": "Gigante",
   "txt": "Gigantismo. Tamaño Grande o mayor.",
   "atrDeb": "DES o INT",
   "debiles": [
    "INT"
   ],
   "deb": "Crédula, Lenta",
   "gratis": [
    {
     "id": "gigantismo"
    }
   ],
   "fuertesDef": [
    "FUE",
    "CON"
   ],
   "tamMin": "grande"
  },
  "monstruosidad": {
   "name": "Monstruosidad",
   "txt": "Un Rasgo de Forma y anatomía de Potencial 1.",
   "atrDeb": "CAR",
   "debiles": [
    "CAR"
   ],
   "deb": "Núcleo Expuesto",
   "gratisFam": {
    "fam": "forma",
    "peso": 1
   },
   "fuertesDef": [
    "FUE",
    "CON"
   ]
  },
  "dragon": {
   "name": "Dragón",
   "txt": "Visión en la Oscuridad e Inmunidad a su elemento. Debe tener Aliento (paga su Potencial).",
   "atrDeb": "Ninguno",
   "debiles": [],
   "deb": "Aversión (un nombre, un metal)",
   "gratis": [
    {
     "id": "vision_en_la_oscuridad"
    },
    {
     "id": "inmunidad",
     "nota": "su elemento"
    }
   ],
   "exige": [
    "aliento"
   ],
   "fuertesDef": [
    "DES",
    "CON"
   ]
  },
  "no_muerto": {
   "name": "No-muerto",
   "txt": "Vigor Inagotable e Inmunidad a Estados (Envenenado y Aterrado). No respira.",
   "atrDeb": "CAR, e INT si no tiene mente",
   "debiles": [
    "CAR"
   ],
   "deb": "Vulnerabilidad (Radiante), Aversión",
   "gratis": [
    {
     "id": "vigor_inagotable"
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Aterrado"
    }
   ],
   "fuertesDef": [
    "CON",
    "SAB"
   ]
  },
  "espiritu": {
   "name": "Espíritu",
   "txt": "Telepatía. Suele tener Incorpóreo (paga su Potencial).",
   "atrDeb": "FUE",
   "debiles": [
    "FUE"
   ],
   "deb": "Ligada al Lugar, Nombre Verdadero",
   "gratis": [
    {
     "id": "telepatia"
    }
   ],
   "fuertesDef": [
    "DES",
    "SAB"
   ]
  },
  "constructo": {
   "name": "Constructo",
   "txt": "Vigor Inagotable e Inmunidad a Estados (Envenenado y Encantado). No tira Moral.",
   "atrDeb": "INT, CAR",
   "debiles": [
    "INT",
    "CAR"
   ],
   "deb": "Mando Único, Crédula",
   "gratis": [
    {
     "id": "vigor_inagotable"
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Encantado"
    }
   ],
   "fuertesDef": [
    "FUE",
    "CON"
   ],
   "noMoral": "nunca"
  },
  "maquina": {
   "name": "Máquina",
   "txt": "Vigor Inagotable y Sistemas Redundantes. No tira Moral.",
   "atrDeb": "CAR",
   "debiles": [
    "CAR"
   ],
   "deb": "Vulnerabilidad (Rayo)",
   "gratis": [
    {
     "id": "vigor_inagotable"
    },
    {
     "id": "sistemas_redundantes"
    }
   ],
   "fuertesDef": [
    "CON",
    "INT"
   ],
   "noMoral": "nunca"
  },
  "elemental": {
   "name": "Elemental",
   "txt": "Inmunidad a su elemento y Fundirse con el Elemento.",
   "atrDeb": "INT",
   "debiles": [
    "INT"
   ],
   "deb": "Vulnerabilidad (elemento opuesto)",
   "gratis": [
    {
     "id": "inmunidad",
     "nota": "su elemento"
    },
    {
     "id": "fundirse_con_el_elemento"
    }
   ],
   "fuertesDef": [
    "CON",
    "DES"
   ]
  },
  "extraplanar": {
   "name": "Extraplanar",
   "txt": "Telepatía y Resistencia a dos tipos de energía.",
   "atrDeb": "Ninguno",
   "debiles": [],
   "deb": "Aversión, Nombre Verdadero",
   "gratis": [
    {
     "id": "telepatia"
    },
    {
     "id": "resistencia",
     "nota": "dos tipos de energía"
    }
   ],
   "fuertesDef": [
    "SAB",
    "CAR"
   ]
  },
  "feerico": {
   "name": "Feérico",
   "txt": "Voluntad de Hierro. Debe tener Aversión (hierro frío) como debilidad.",
   "atrDeb": "FUE",
   "debiles": [
    "FUE"
   ],
   "deb": "Aversión (obligatoria)",
   "gratis": [
    {
     "id": "voluntad_de_hierro"
    }
   ],
   "exige": [
    "aversion"
   ],
   "fuertesDef": [
    "DES",
    "CAR"
   ]
  },
  "aberracion": {
   "name": "Aberración",
   "txt": "Mente Ajena y Visión en la Oscuridad.",
   "atrDeb": "FUE",
   "debiles": [
    "FUE"
   ],
   "deb": "Fotosensible",
   "gratis": [
    {
     "id": "mente_ajena"
    },
    {
     "id": "vision_en_la_oscuridad"
    }
   ],
   "fuertesDef": [
    "INT",
    "SAB"
   ]
  },
  "planta_u_hongo": {
   "name": "Planta u hongo",
   "txt": "Inmunidad a Estados (Cegado y Ensordecido) y Camuflaje en su entorno.",
   "atrDeb": "DES, INT",
   "debiles": [
    "DES",
    "INT"
   ],
   "deb": "Vulnerabilidad (Fuego), Lenta",
   "gratis": [
    {
     "id": "inmunidad_a_estados",
     "nota": "Cegado y Ensordecido"
    },
    {
     "id": "camuflaje"
    }
   ],
   "fuertesDef": [
    "CON",
    "FUE"
   ]
  },
  "cieno": {
   "name": "Cieno",
   "txt": "Forma Amorfa y Sentido Sísmico. Ciego más allá de 60 pies.",
   "atrDeb": "INT, CAR",
   "debiles": [
    "INT",
    "CAR"
   ],
   "deb": "Vulnerabilidad (Frío)",
   "gratis": [
    {
     "id": "forma_amorfa"
    },
    {
     "id": "sentido_sismico"
    }
   ],
   "fuertesDef": [
    "CON",
    "FUE"
   ]
  },
  "mutante": {
   "name": "Mutante",
   "txt": "Un Rasgo de Forma y anatomía y una Debilidad, ambos aleatorios (Cap. 9).",
   "atrDeb": "Uno al azar",
   "debiles": [],
   "deb": "La que salga en la tabla",
   "gratisFam": {
    "fam": "forma"
   },
   "fuertesDef": [
    "CON",
    "SAB"
   ]
  }
 },
 "familias": {
  "ataque": {
   "name": "Ataque y daño",
   "txt": "Cómo hace daño y qué pasa cuando acierta.",
   "d20": "1",
   "dado": "d20"
  },
  "defensa": {
   "name": "Defensa y resistencia",
   "txt": "Cómo aguanta, y qué hace falta para atravesarla.",
   "d20": "2",
   "dado": "d20"
  },
  "movilidad": {
   "name": "Movilidad",
   "txt": "Por dónde llega y cómo se va.",
   "d20": "3",
   "dado": "d12"
  },
  "sentidos": {
   "name": "Sentidos",
   "txt": "Qué percibe, y por qué es difícil pillarla por sorpresa.",
   "d20": "4",
   "dado": "d10"
  },
  "control": {
   "name": "Control y estados",
   "txt": "Cómo le quita al grupo sus opciones.",
   "d20": "5",
   "dado": "d20"
  },
  "mente": {
   "name": "Mente e influencia",
   "txt": "Lo que hace sin tocar a nadie.",
   "d20": "6",
   "dado": "d12"
  },
  "vitalidad": {
   "name": "Vitalidad",
   "txt": "Por qué no cae cuando debería.",
   "d20": "7",
   "dado": "d10"
  },
  "elementos": {
   "name": "Elementos y energías",
   "txt": "Lo que arde, se congela o chisporrotea a su alrededor.",
   "d20": "8",
   "dado": "d12"
  },
  "sobrenatural": {
   "name": "Poderes sobrenaturales",
   "txt": "Axiomas, maldiciones y cosas que no deberían poder hacerse.",
   "d20": "9",
   "dado": "d12"
  },
  "manada": {
   "name": "Manada y aliados",
   "txt": "Lo que cambia cuando no está sola.",
   "d20": "10",
   "dado": "d10"
  },
  "sigilo": {
   "name": "Sigilo y engaño",
   "txt": "Cómo se esconde, y cómo engaña cuando la encuentran.",
   "d20": "11",
   "dado": "d10"
  },
  "forma": {
   "name": "Forma y anatomía",
   "txt": "El cuerpo que tiene, y lo que ese cuerpo permite.",
   "d20": "12",
   "dado": "d10"
  },
  "tecnologia": {
   "name": "Tecnología y máquinas",
   "txt": "Para autómatas, naves, drones y todo lo que tenga batería.",
   "d20": "13",
   "dado": "d10"
  },
  "mando": {
   "name": "Mando y jefes",
   "txt": "Para quien dirige la pelea o la protagoniza.",
   "d20": "14",
   "dado": "d10"
  },
  "guarida": {
   "name": "Guarida y entorno",
   "txt": "El lugar como parte de la criatura.",
   "d20": "15",
   "dado": "d8"
  },
  "debilidades": {
   "name": "Debilidades",
   "txt": "Potencial negativo: devuelven presupuesto y le dan al grupo algo que descubrir.",
   "d20": "16–20",
   "dado": "d12"
  }
 },
 "rasgos": {
  "ataque": [
   {
    "id": "golpe_aplastante",
    "name": "Golpe Aplastante",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Al impactar con su ataque principal, el objetivo hace Salvación FUE contra la CD o queda Derribado."
   },
   {
    "id": "garras_dobles",
    "name": "Garras Dobles",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Su Ataque Normal (2 PA) son dos ataques, cada uno con la mitad del daño base."
   },
   {
    "id": "mordisco_tenaz",
    "name": "Mordisco Tenaz",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Al impactar, el objetivo queda Apresado (escapar: Proeza Física contra la CD). Mientras lo retiene, no puede morder a otro."
   },
   {
    "id": "embestida",
    "name": "Embestida",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Si se ha movido 20 pies en línea recta, ataca y añade la mitad del daño base; el objetivo es empujado 10 pies.",
    "coste": "2 PA",
    "frec": "1/ronda"
   },
   {
    "id": "ataque_barrido",
    "name": "Ataque Barrido",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Una sola tirada contra la Guardia de cada criatura a su alcance; cada una impactada recibe el daño base.",
    "coste": "3 PA"
   },
   {
    "id": "aguijon_venenoso",
    "name": "Aguijón Venenoso",
    "tipo": "Modificador",
    "peso": 2,
    "txt": "Al impactar, Salvación CON contra la CD o queda Envenenado (Ud8)."
   },
   {
    "id": "garras_desgarradoras",
    "name": "Garras Desgarradoras",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Si impacta dos veces al mismo objetivo en un turno, o con un Crítico, aplica Sangrado (Ud6)."
   },
   {
    "id": "alcance_largo",
    "name": "Alcance Largo",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Su alcance cuerpo a cuerpo aumenta 10 pies y provoca Ataques de Oportunidad en todo ese radio."
   },
   {
    "id": "proyectiles",
    "name": "Proyectiles",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Ataque a distancia hasta 60 pies con su bono de ataque y el daño base (espinas, púas, saliva, dardos).",
    "coste": "2 PA",
    "frec": "a voluntad",
    "pide": "Qué lanza"
   },
   {
    "id": "andanada",
    "name": "Andanada",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Área de 15 pies de radio a 60 pies: Salvación DES contra la CD; daño base, la mitad si la supera.",
    "coste": "3 PA",
    "frec": "Ud6"
   },
   {
    "id": "aliento",
    "name": "Aliento",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Cono de 30 pies (60 si es Enorme o mayor) de un tipo de energía elegido al crearla: Salvación DES contra la CD; daño base más 1 dado de ese tipo por cada 3 NA, la mitad si la supera.",
    "coste": "3 PA",
    "frec": "Ud6",
    "pide": "Tipo de energía"
   },
   {
    "id": "punto_debil",
    "name": "Punto Débil",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Sus Críticos ocurren con 19–20 y maximizan también cualquier daño añadido por sus Rasgos."
   },
   {
    "id": "frenesi",
    "name": "Frenesí",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Hasta el final de su siguiente turno, sus ataques tienen Ventaja y los ataques contra ella también.",
    "coste": "1 PA",
    "frec": "1/combate"
   },
   {
    "id": "tiro_apuntado",
    "name": "Tiro Apuntado",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Su siguiente ataque a distancia en este turno ignora la cobertura parcial y 2 puntos de Armadura.",
    "coste": "1 PA"
   },
   {
    "id": "constriccion",
    "name": "Constricción",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Contra una criatura que ya tiene Apresada: le inflige el daño base sin tirada, y el objetivo no puede hablar ni respirar hasta liberarse.",
    "coste": "1 PA"
   },
   {
    "id": "remate",
    "name": "Remate",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ventaja en sus ataques contra criaturas Derribadas, Apresadas o por debajo de la mitad de sus PV."
   },
   {
    "id": "devorar",
    "name": "Devorar",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Engulle a una criatura Apresada al menos una categoría de tamaño menor. Dentro, la víctima está Cegada y Apresada y recibe la mitad del daño base (Ácido) al inicio de cada uno de sus turnos. Sale si inflige a la criatura NA × 5 de daño en un solo turno, o cuando esta muere.",
    "coste": "2 PA",
    "frec": "Ud4"
   }
  ],
  "defensa": [
   {
    "id": "piel_gruesa",
    "name": "Piel Gruesa",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "+2 de Armadura, sin superar el NA + 3.",
    "mod": {
     "a": 2
    }
   },
   {
    "id": "caparazon",
    "name": "Caparazón",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "+3 de Armadura y −10 pies de velocidad. Retraerse (1 PA): dobla su Armadura, pero no puede actuar hasta volver a salir (1 PA).",
    "mod": {
     "a": 3,
     "vel": -10
    }
   },
   {
    "id": "evasiva",
    "name": "Evasiva",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "+2 a la Guardia.",
    "mod": {
     "g": 2
    }
   },
   {
    "id": "resistencia",
    "name": "Resistencia",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Resistencia a un tipo físico (Cortante, Perforante o Contundente) o a dos tipos de energía. Se puede tomar varias veces.",
    "multi": true,
    "pide": "Un tipo físico o dos de energía"
   },
   {
    "id": "inmunidad",
    "name": "Inmunidad",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Inmune a un tipo de daño. Se puede tomar varias veces.",
    "multi": true,
    "pide": "Tipo de daño"
   },
   {
    "id": "inmunidad_a_estados",
    "name": "Inmunidad a Estados",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Inmune a dos estados elegidos al crearla (p. ej., Envenenado y Aterrado). Se puede tomar varias veces.",
    "multi": true,
    "pide": "Dos estados"
   },
   {
    "id": "voluntad_de_hierro",
    "name": "Voluntad de Hierro",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ventaja en las Salvaciones contra efectos que la dejen Encantada, Aterrada o bajo control ajeno."
   },
   {
    "id": "bloqueador",
    "name": "Bloqueador",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Bloquea como un personaje: 1d20 + su bono de ataque contra el total del ataque que la ha impactado. Si iguala o supera, no hay daño.",
    "frec": "1/ronda"
   },
   {
    "id": "parada",
    "name": "Parada",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Cuando un ataque cuerpo a cuerpo la impactaría, +3 a la Guardia contra ese ataque.",
    "frec": "1/ronda"
   },
   {
    "id": "resistencia_sobrenatural",
    "name": "Resistencia Sobrenatural",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Resistencia al daño no mágico."
   },
   {
    "id": "reflejar_axiomas",
    "name": "Reflejar Axiomas",
    "tipo": "Reacción",
    "peso": 3,
    "txt": "Cuando un Axioma con tirada de ataque falla contra ella, lo devuelve contra quien lo usó con la misma tirada.",
    "frec": "Ud6"
   },
   {
    "id": "escudo_vivo",
    "name": "Escudo Vivo",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Hasta su siguiente turno, un aliado adyacente gana +2 a la Guardia y +2 de Armadura.",
    "coste": "1 PA"
   },
   {
    "id": "incorporeo",
    "name": "Incorpóreo",
    "tipo": "Rasgo",
    "peso": 3,
    "txt": "Resistencia a todo daño no mágico. Atraviesa objetos y criaturas (si termina dentro de algo, sale al espacio libre más cercano y recibe 1d10). No puede Apresar ni ser Apresado."
   },
   {
    "id": "endurecido",
    "name": "Endurecido",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Los Golpes Críticos contra ella son impactos normales."
   },
   {
    "id": "forma_amorfa",
    "name": "Forma Amorfa",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Inmune a Derribado y Apresado. Pasa por huecos del tamaño de una moneda."
   }
  ],
  "movilidad": [
   {
    "id": "veloz",
    "name": "Veloz",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "+20 pies de velocidad.",
    "mod": {
     "vel": 20
    }
   },
   {
    "id": "vuelo",
    "name": "Vuelo",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Vuela a su velocidad. Si queda Derribada o Paralizada en el aire, cae."
   },
   {
    "id": "planeo",
    "name": "Planeo",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "No recibe daño por caída; avanza 2 pies en horizontal por cada pie que desciende."
   },
   {
    "id": "trepadora",
    "name": "Trepadora",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Trepa a su velocidad por muros y techos, sin tirada."
   },
   {
    "id": "excavadora",
    "name": "Excavadora",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Excava a la mitad de su velocidad. Si emerge junto a una criatura que no la esperaba, esa criatura está Desprevenida."
   },
   {
    "id": "anfibia",
    "name": "Anfibia",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Nada a su velocidad y respira bajo el agua."
   },
   {
    "id": "salto_depredador",
    "name": "Salto Depredador",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Salta hasta su velocidad sin provocar Ataques de Oportunidad; si cae junto a un objetivo, su siguiente ataque tiene Ventaja.",
    "coste": "1 PA"
   },
   {
    "id": "desplazamiento",
    "name": "Desplazamiento",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Se teletransporta hasta 30 pies a un punto que pueda ver.",
    "coste": "1 PA",
    "frec": "Ud6"
   },
   {
    "id": "retirada_agil",
    "name": "Retirada Ágil",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "No provoca Ataques de Oportunidad al alejarse."
   },
   {
    "id": "imparable",
    "name": "Imparable",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ignora el terreno difícil y no puede quedar Ralentizada."
   },
   {
    "id": "paso_de_sombra",
    "name": "Paso de Sombra",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "En penumbra u oscuridad, pasa de una sombra a otra hasta 60 pies.",
    "coste": "1 PA"
   },
   {
    "id": "carga_arrolladora",
    "name": "Carga Arrolladora",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Recorre su velocidad en línea recta atravesando criaturas de menor tamaño: cada una hace Salvación FUE contra la CD o recibe la mitad del daño base y queda Derribada.",
    "coste": "2 PA",
    "frec": "Ud6"
   }
  ],
  "sentidos": [
   {
    "id": "vision_en_la_oscuridad",
    "name": "Visión en la Oscuridad",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "Ve sin luz hasta 60 pies, en tonos de gris."
   },
   {
    "id": "olfato_agudo",
    "name": "Olfato Agudo",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "Ventaja en Percepción basada en el olfato; rastrea sin tirada un rastro de menos de un día."
   },
   {
    "id": "sentido_sismico",
    "name": "Sentido Sísmico",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Percibe a toda criatura que toque el suelo a 60 pies, aunque no pueda verla."
   },
   {
    "id": "ecolocalizacion",
    "name": "Ecolocalización",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ve sin luz hasta 60 pies. Si queda Ensordecida, queda también Cegada."
   },
   {
    "id": "vision_verdadera",
    "name": "Visión Verdadera",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Ve a través de ilusiones, invisibilidad y cambios de forma hasta 60 pies."
   },
   {
    "id": "nunca_desprevenida",
    "name": "Nunca Desprevenida",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "No puede quedar Desprevenida, y los ataques desde ocultamiento no tienen Ventaja contra ella."
   },
   {
    "id": "olor_de_la_sangre",
    "name": "Olor de la Sangre",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Percibe a las criaturas heridas a 120 pies, aunque estén ocultas o sean invisibles."
   },
   {
    "id": "ojos_multiples",
    "name": "Ojos Múltiples",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "No se la puede flanquear, y un único efecto no basta para dejarla Cegada: hacen falta dos."
   },
   {
    "id": "sentir_axiomas",
    "name": "Sentir Axiomas",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Percibe el uso de cualquier Axioma a 120 pies y de dónde procede; tiene Ventaja en su primer ataque contra quien lo usó."
   },
   {
    "id": "mente_colmena",
    "name": "Mente Colmena",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Lo que percibe un miembro de su especie lo perciben todos los que estén a menos de una milla."
   }
  ],
  "control": [
   {
    "id": "mirada_paralizante",
    "name": "Mirada Paralizante",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Una criatura a 30 pies que la esté mirando: Salvación CON contra la CD o queda Paralizada (Ud4). Quien aparte la vista a propósito ataca con Desventaja, pero no puede ser afectado.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "mirada_petrificante",
    "name": "Mirada Petrificante",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Una criatura a 30 pies que la mire: Salvación CON contra la CD o queda Ralentizada (Ud4). Si falla otra vez mientras sigue Ralentizada, queda Petrificada.",
    "coste": "3 PA",
    "frec": "Ud4"
   },
   {
    "id": "rugido_aterrador",
    "name": "Rugido Aterrador",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Cada criatura hostil a 30 pies: Salvación SAB contra la CD o queda Aterrada (Ud4).",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "telarana",
    "name": "Telaraña",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Área de 10 pies a 30 pies: terreno difícil; quien esté dentro hace Salvación DES contra la CD o queda Apresado.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "aturdir",
    "name": "Aturdir",
    "tipo": "Modificador",
    "peso": 2,
    "txt": "Al impactar, Salvación CON contra la CD o queda Aturdido (Ud4).",
    "frec": "Ud6"
   },
   {
    "id": "nube_cegadora",
    "name": "Nube Cegadora",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Cono de 15 pies (esporas, tinta, destello): Salvación CON contra la CD o queda Cegado (Ud4).",
    "coste": "1 PA",
    "frec": "Ud6"
   },
   {
    "id": "chillido",
    "name": "Chillido",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Radio de 20 pies: Salvación CON contra la CD o queda Ensordecido (Ud6) y recibe la mitad del daño base Sónico.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "pisoton",
    "name": "Pisotón",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Cada criatura a 10 pies: Salvación FUE contra la CD o queda Derribada. El suelo en ese radio pasa a ser terreno difícil.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "arrastrar",
    "name": "Arrastrar",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Se mueve hasta 15 pies llevando consigo a una criatura que tenga Apresada, sin provocar Ataques de Oportunidad.",
    "coste": "1 PA"
   },
   {
    "id": "aliento_helado",
    "name": "Aliento Helado",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Radio de 10 pies: Salvación CON contra la CD o queda Ralentizado (Ud4).",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "zona_de_control",
    "name": "Zona de Control",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Una criatura que empiece su turno adyacente a ella no puede alejarse sin superar antes una Salvación FUE o DES contra la CD."
   },
   {
    "id": "veneno_paralizante",
    "name": "Veneno Paralizante",
    "tipo": "Modificador",
    "peso": 3,
    "txt": "Al impactar a una criatura Envenenada: Salvación CON contra la CD o queda Paralizada (Ud4)."
   },
   {
    "id": "lanzar",
    "name": "Lanzar",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Arroja hasta 20 pies a una criatura Apresada de su tamaño o menor: daño base Contundente para ella y para quien reciba el golpe.",
    "coste": "2 PA"
   },
   {
    "id": "marca_de_presa",
    "name": "Marca de Presa",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Señala a un objetivo. Sus aliados tienen +2 al ataque contra él hasta que la criatura muera o marque a otro.",
    "coste": "0 PA"
   }
  ],
  "mente": [
   {
    "id": "voz_seductora",
    "name": "Voz Seductora",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Una criatura a 30 pies: Salvación SAB contra la CD o queda Encantada (Ud6). No puede atacarla mientras dure.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "dominar",
    "name": "Dominar",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Una criatura Encantada por ella: Salvación SAB contra la CD o, en su siguiente turno, actúa como la criatura decida (nunca contra sí misma). Repite la Salvación al final de cada turno.",
    "coste": "3 PA",
    "frec": "Ud4"
   },
   {
    "id": "susurros",
    "name": "Susurros",
    "tipo": "Aura",
    "peso": 1,
    "txt": "Radio de 20 pies: quien empiece su turno dentro tiene Desventaja en las Salvaciones de Concentración."
   },
   {
    "id": "leer_mentes",
    "name": "Leer Mentes",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Oye los pensamientos superficiales a 30 pies. Una vez por ronda, puede preguntar a un jugador qué va a hacer su personaje en su próximo turno."
   },
   {
    "id": "ilusion",
    "name": "Ilusión",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Crea una imagen convincente de sí misma o de un peligro hasta 60 pies. Descubrir el engaño: Investigación o Perspicacia contra la CD.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "pavor",
    "name": "Pavor",
    "tipo": "Aura",
    "peso": 2,
    "txt": "Radio de 30 pies: la primera vez que una criatura entra o empieza su turno dentro, Salvación SAB contra la CD o queda Aterrada mientras siga dentro. Quien la supera es inmune un día."
   },
   {
    "id": "drenar_mente",
    "name": "Drenar Mente",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Un objetivo a 30 pies: la mitad del daño base Psíquico y pierde 1d6 de Ingenio.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "confundir",
    "name": "Confundir",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Radio de 10 pies a 60 pies: Salvación SAB contra la CD o queda Conmocionado (Ud6); mientras dure, en un 1–2 en 1d6 ataca a la criatura más cercana, amiga o enemiga.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "imitacion",
    "name": "Imitación",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Imita cualquier voz o sonido que haya oído. Distinguirlo exige Perspicacia contra la CD."
   },
   {
    "id": "pesadillas",
    "name": "Pesadillas",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Una criatura que duerma a menos de una milla no descansa: su Descanso Largo no reduce la Fatiga y solo recupera la mitad.",
    "coste": "fuera de combate"
   },
   {
    "id": "mente_ajena",
    "name": "Mente Ajena",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Quien lea su mente o le imponga un efecto mental recibe la mitad del daño base Psíquico."
   },
   {
    "id": "telepatia",
    "name": "Telepatía",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "Se comunica mentalmente con cualquier criatura con lenguaje a 120 pies."
   }
  ],
  "vitalidad": [
   {
    "id": "regeneracion",
    "name": "Regeneración",
    "tipo": "Rasgo",
    "peso": 3,
    "txt": "Recupera NA × 2 PV al inicio de su turno, salvo si recibió daño de un tipo elegido al crearla (normalmente Fuego o Ácido) desde su turno anterior. Solo muere a 0 PV si ese turno recibió ese daño.",
    "pide": "Daño que la detiene (Fuego, Ácido…)"
   },
   {
    "id": "curacion_rapida",
    "name": "Curación Rápida",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Recupera NA PV al inicio de su turno mientras le quede al menos 1 PV."
   },
   {
    "id": "absorber_vida",
    "name": "Absorber Vida",
    "tipo": "Modificador",
    "peso": 2,
    "txt": "Recupera PV iguales a la mitad del daño que inflige con su ataque principal."
   },
   {
    "id": "dura_de_matar",
    "name": "Dura de Matar",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "La primera vez en cada combate que llega a 0 PV, queda en 1 PV."
   },
   {
    "id": "segunda_forma",
    "name": "Segunda Forma",
    "tipo": "Rasgo",
    "peso": 3,
    "txt": "Al llegar a 0 PV por primera vez, se transforma: recupera la mitad de sus PV máximos, termina todos sus estados y cambia uno de sus Rasgos o Aptitudes por otro."
   },
   {
    "id": "cuerpo_divisible",
    "name": "Cuerpo Divisible",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Si un solo golpe Cortante le inflige 10 o más y le quedan al menos 10 PV, se divide en dos criaturas con la mitad de los PV que le queden cada una."
   },
   {
    "id": "carronera",
    "name": "Carroñera",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Devora un cadáver adyacente y recupera NA × 3 PV.",
    "coste": "2 PA"
   },
   {
    "id": "vigor_inagotable",
    "name": "Vigor Inagotable",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "No sufre Fatiga."
   },
   {
    "id": "resurgir",
    "name": "Resurgir",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Si no se destruye su núcleo (un objeto, un lugar, un nombre), vuelve a formarse en 1d4 días.",
    "pide": "Su núcleo"
   },
   {
    "id": "transfusion",
    "name": "Transfusión",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Cede hasta NA × 3 de sus PV a un aliado adyacente.",
    "coste": "1 PA"
   }
  ],
  "elementos": [
   {
    "id": "cuerpo_igneo",
    "name": "Cuerpo Ígneo",
    "tipo": "Aura",
    "peso": 2,
    "txt": "Quien la toque o la golpee cuerpo a cuerpo recibe la mitad del daño base de Fuego. Los objetos inflamables a su alcance prenden."
   },
   {
    "id": "toque_gelido",
    "name": "Toque Gélido",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Su ataque añade 1d6 de Frío; el objetivo hace Salvación CON contra la CD o queda Ralentizado (Ud4)."
   },
   {
    "id": "toque_electrico",
    "name": "Toque Eléctrico",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Su ataque añade 1d6 de Rayo, y tiene Ventaja contra quien lleve armadura Media o Pesada de metal."
   },
   {
    "id": "acido_corrosivo",
    "name": "Ácido Corrosivo",
    "tipo": "Modificador",
    "peso": 2,
    "txt": "Su ataque añade 1d6 de Ácido y aplica Desgarro (Ud6)."
   },
   {
    "id": "aura_toxica",
    "name": "Aura Tóxica",
    "tipo": "Aura",
    "peso": 2,
    "txt": "Radio de 10 pies: quien empiece su turno dentro hace Salvación CON contra la CD o queda Envenenado (Ud4)."
   },
   {
    "id": "tormenta_personal",
    "name": "Tormenta Personal",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Radio de 30 pies: hasta tres objetivos reciben el daño base de Rayo (Salvación DES, la mitad); el viento convierte todo el radio en terreno difícil hasta su siguiente turno.",
    "coste": "3 PA",
    "frec": "Ud6"
   },
   {
    "id": "muro_elemental",
    "name": "Muro Elemental",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Levanta un muro de 30 pies de su elemento durante un minuto; cruzarlo cuesta la mitad del daño base.",
    "coste": "2 PA",
    "frec": "Ud4",
    "pide": "Elemento"
   },
   {
    "id": "absorcion_elemental",
    "name": "Absorción Elemental",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "El daño de un tipo de energía elegido la cura en lugar de dañarla.",
    "pide": "Tipo de energía"
   },
   {
    "id": "estallido_al_morir",
    "name": "Estallido al Morir",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Al llegar a 0 PV explota: radio de 10 pies, Salvación DES contra la CD, la mitad del daño base de su elemento.",
    "pide": "Elemento"
   },
   {
    "id": "fundirse_con_el_elemento",
    "name": "Fundirse con el Elemento",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Dentro de su elemento (fuego, agua, piedra, niebla) es invisible y tiene Resistencia a todo daño.",
    "pide": "Elemento"
   },
   {
    "id": "prender",
    "name": "Prender",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Al impactar, Salvación DES contra la CD o queda en Ignición."
   },
   {
    "id": "clima_hostil",
    "name": "Clima Hostil",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "En 60 pies a su alrededor el clima cambia —niebla, nevada, calor sofocante—: terreno difícil y visibilidad reducida a 30 pies para todos salvo ella."
   }
  ],
  "sobrenatural": [
   {
    "id": "uso_de_axiomas",
    "name": "Uso de Axiomas",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Conoce hasta tres Axiomas del Catálogo de un Nivel no superior a la mitad de su NA (redondeando hacia arriba, máximo 9). Usa su CD y una Reserva de NA × 5 puntos. Potencial 3 si alguno es de Nivel 4 o más.",
    "pide": "Axiomas que conoce (hasta tres)"
   },
   {
    "id": "trucos",
    "name": "Trucos",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "Conoce dos Trucos del Catálogo y los usa con su CD.",
    "pide": "Los dos Trucos"
   },
   {
    "id": "contraaxioma",
    "name": "Contraaxioma",
    "tipo": "Reacción",
    "peso": 2,
    "txt": "Anula un Axioma de Nivel no superior a la mitad de su NA que se use a 60 pies.",
    "frec": "Ud6"
   },
   {
    "id": "maldicion",
    "name": "Maldición",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Un objetivo a 60 pies: Salvación SAB contra la CD o queda Maldito (Ud8), con Desventaja en un tipo de tirada que ella elige.",
    "coste": "2 PA",
    "frec": "Ud6",
    "pide": "Tipo de tirada"
   },
   {
    "id": "toque_necrotico",
    "name": "Toque Necrótico",
    "tipo": "Modificador",
    "peso": 1,
    "txt": "Su daño pasa a ser Necrótico, y el objetivo no recupera PV hasta el final de su siguiente turno."
   },
   {
    "id": "invocar_aliados",
    "name": "Invocar Aliados",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Al final de su turno aparecen 1d4 criaturas de NA igual a la mitad del suyo (mínimo 0), que actúan justo después de ella.",
    "coste": "3 PA",
    "frec": "1/combate"
   },
   {
    "id": "posesion",
    "name": "Posesión",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Una criatura adyacente: Salvación SAB contra la CD o entra en su cuerpo y controla sus acciones. El cuerpo recibe el daño; la víctima repite la Salvación al final de cada uno de sus turnos. Sale al llegar el cuerpo a 0 PV.",
    "coste": "3 PA",
    "frec": "Ud4"
   },
   {
    "id": "aura_antiaxiomas",
    "name": "Aura Antiaxiomas",
    "tipo": "Aura",
    "peso": 3,
    "txt": "Radio de 20 pies: los Axiomas de Nivel no superior a un tercio de su NA no funcionan dentro."
   },
   {
    "id": "presencia_consagrada",
    "name": "Presencia Consagrada",
    "tipo": "Aura",
    "peso": 1,
    "txt": "Radio de 30 pies: sus aliados tienen +1 a las Salvaciones, y las criaturas de la naturaleza opuesta (profana o sagrada) atacan con Desventaja."
   },
   {
    "id": "piel_arcana",
    "name": "Piel Arcana",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Los Axiomas de Nivel 1 y 2 no la afectan, salvo su daño."
   },
   {
    "id": "drenar_reserva",
    "name": "Drenar Reserva",
    "tipo": "Modificador",
    "peso": 2,
    "txt": "Al impactar, el objetivo pierde 1d6 puntos de la mayor de sus dos Reservas."
   }
  ],
  "manada": [
   {
    "id": "tactica_de_manada",
    "name": "Táctica de Manada",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ventaja en sus ataques si un aliado está adyacente al mismo objetivo."
   },
   {
    "id": "aullido_de_llamada",
    "name": "Aullido de Llamada",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Al final de la ronda siguiente llegan 1d4 congéneres de su mismo NA o inferior.",
    "coste": "1 PA",
    "frec": "1/combate"
   },
   {
    "id": "formacion",
    "name": "Formación",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "+1 a la Guardia por cada aliado adyacente, hasta +3."
   },
   {
    "id": "sacrificio_leal",
    "name": "Sacrificio Leal",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Recibe en su lugar un ataque dirigido a un aliado adyacente de NA superior al suyo."
   },
   {
    "id": "enjambre",
    "name": "Enjambre",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Ocupa el espacio de otras criaturas. Resistencia al daño de ataques contra un solo objetivo; recibe el doble de daño de los efectos de área."
   },
   {
    "id": "lider_de_manada",
    "name": "Líder de Manada",
    "tipo": "Aura",
    "peso": 2,
    "txt": "Radio de 30 pies: sus aliados de la misma especie tienen +2 al ataque y +2 a la Moral."
   },
   {
    "id": "coordinacion",
    "name": "Coordinación",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Un aliado a 30 pies hace de inmediato un ataque de 1 PA como Reacción.",
    "coste": "1 PA"
   },
   {
    "id": "rodear",
    "name": "Rodear",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Sus aliados no provocan Ataques de Oportunidad al moverse entre enemigos adyacentes a ella."
   },
   {
    "id": "colmena",
    "name": "Colmena",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Mientras viva el núcleo de la colmena (su reina, su nodo, su madre), sus miembros no tiran Moral y comparten lo que perciben.",
    "mod": {
     "noMoral": true
    }
   },
   {
    "id": "venganza_del_grupo",
    "name": "Venganza del Grupo",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Cuando cae un aliado de su especie, gana +2 al daño hasta el final del combate."
   }
  ],
  "sigilo": [
   {
    "id": "camuflaje",
    "name": "Camuflaje",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ventaja en Sigilo en su entorno. Inmóvil, es indistinguible del terreno: Percepción contra la CD para verla."
   },
   {
    "id": "emboscadora_nata",
    "name": "Emboscadora Nata",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "En la primera ronda de combate, sus ataques contra criaturas Desprevenidas suman el daño base otra vez."
   },
   {
    "id": "invisibilidad",
    "name": "Invisibilidad",
    "tipo": "Aptitud",
    "peso": 3,
    "txt": "Queda invisible hasta que ataca o usa una Aptitud.",
    "coste": "1 PA",
    "frec": "Ud6"
   },
   {
    "id": "cambiaformas",
    "name": "Cambiaformas",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Adopta la forma de una criatura de su tamaño que haya visto. Descubrirla exige Perspicacia contra la CD.",
    "coste": "2 PA"
   },
   {
    "id": "falsa_apariencia",
    "name": "Falsa Apariencia",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Inmóvil, parece un objeto corriente: un cofre, una estatua, una maraña de raíces."
   },
   {
    "id": "esconderse",
    "name": "Esconderse",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Se oculta aprovechando cualquier cobertura parcial o penumbra, incluso en pleno combate.",
    "coste": "1 PA"
   },
   {
    "id": "senuelo",
    "name": "Señuelo",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Crea un duplicado ilusorio: el primer ataque que la impactaría golpea al señuelo y lo disipa.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "silenciosa",
    "name": "Silenciosa",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "No hace ningún ruido al moverse."
   },
   {
    "id": "huida_en_humo",
    "name": "Huida en Humo",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Al recibir daño, suelta humo o tinta: oscuridad en 10 pies a su alrededor, y se aleja la mitad de su velocidad sin provocar Ataques de Oportunidad.",
    "frec": "Ud4"
   },
   {
    "id": "rastro_falso",
    "name": "Rastro Falso",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Seguir su rastro exige Supervivencia contra la CD + 5."
   }
  ],
  "forma": [
   {
    "id": "varias_cabezas",
    "name": "Varias Cabezas",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "+1 PA por turno. Cada Golpe Crítico contra ella, o cada golpe que le quite NA × 5 PV, le arranca una cabeza y le quita ese PA. Si recibe Fuego esa ronda, no vuelve a crecer; si no, al final de su turno le crecen dos.",
    "mod": {
     "pa": 1
    }
   },
   {
    "id": "tentaculos",
    "name": "Tentáculos",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Puede mantener Apresadas a tantas criaturas como tentáculos tenga (de 2 a 4) sin dejar de atacar.",
    "pide": "Cuántos (de 2 a 4)"
   },
   {
    "id": "cola_barredora",
    "name": "Cola Barredora",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Cuando una criatura la flanquea, le hace un ataque con la cola: daño base, y Salvación FUE contra la CD o queda Derribada.",
    "frec": "1/ronda"
   },
   {
    "id": "sangre_acida",
    "name": "Sangre Ácida",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Quien le inflija daño Cortante o Perforante cuerpo a cuerpo recibe 1d6 de Ácido."
   },
   {
    "id": "espinas",
    "name": "Espinas",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Quien la Apresa o la golpea desarmado recibe 1d6 de daño Perforante."
   },
   {
    "id": "brazos_adicionales",
    "name": "Brazos Adicionales",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Una vez por turno, un ataque adicional de 1 PA sin coste."
   },
   {
    "id": "gigantismo",
    "name": "Gigantismo",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Ventaja al Apresar y al Empujar a criaturas más pequeñas; puede atravesar su espacio."
   },
   {
    "id": "adaptacion",
    "name": "Adaptación",
    "tipo": "Reacción",
    "peso": 2,
    "txt": "Tras recibir daño de un tipo, gana Resistencia a ese tipo hasta el final del combate.",
    "frec": "Ud6"
   },
   {
    "id": "partes_separables",
    "name": "Partes Separables",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Separa una extremidad, que actúa como criatura de NA 0 en su mismo turno y con sus mismos ataques.",
    "coste": "1 PA"
   },
   {
    "id": "cuerpo_hueco",
    "name": "Cuerpo Hueco",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Dentro lleva algo: al llegar a 0 PV libera 1d4 criaturas de NA 1 (larvas, enjambres, prisioneros).",
    "pide": "Qué lleva dentro"
   }
  ],
  "tecnologia": [
   {
    "id": "blindaje_reactivo",
    "name": "Blindaje Reactivo",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Al recibir un impacto, resta su Armadura una segunda vez a ese daño.",
    "frec": "1/ronda"
   },
   {
    "id": "escudo_de_energia",
    "name": "Escudo de Energía",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Absorbe los primeros NA × 3 puntos de daño de cada combate antes de que lleguen a sus PV. Se recarga tras un Respiro."
   },
   {
    "id": "sistemas_redundantes",
    "name": "Sistemas Redundantes",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Inmune a Aturdido y Conmocionado. Cegado solo le impone Desventaja en los ataques a distancia."
   },
   {
    "id": "arma_montada",
    "name": "Arma Montada",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Ataque a distancia hasta 120 pies con su bono de ataque y el daño base (Energía o Perforante).",
    "coste": "2 PA",
    "frec": "a voluntad"
   },
   {
    "id": "sobrecarga",
    "name": "Sobrecarga",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Hasta el final de su siguiente turno gana +1 PA y su dado de daño sube un paso. Después queda Conmocionada (Ud4).",
    "coste": "1 PA",
    "frec": "1/combate"
   },
   {
    "id": "autorreparacion",
    "name": "Autorreparación",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Recupera NA PV al inicio de su turno, salvo si recibió daño de Rayo desde su turno anterior."
   },
   {
    "id": "drones",
    "name": "Drones",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Despliega dos drones de NA 0 (vuelo 40 pies, ataque 1d4) que actúan en su turno.",
    "coste": "2 PA",
    "frec": "Ud6"
   },
   {
    "id": "pulso_electromagnetico",
    "name": "Pulso Electromagnético",
    "tipo": "Aptitud",
    "peso": 2,
    "txt": "Radio de 30 pies: el equipo tecnológico deja de funcionar durante Ud4 rondas, y las máquinas hacen Salvación CON contra la CD o quedan Aturdidas.",
    "coste": "3 PA",
    "frec": "Ud4"
   },
   {
    "id": "protocolo_de_amenaza",
    "name": "Protocolo de Amenaza",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Tras ser atacada por una criatura, tiene +2 al ataque contra ella."
   },
   {
    "id": "autodestruccion",
    "name": "Autodestrucción",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Al llegar a 0 PV, explota al final de la ronda siguiente: radio de 20 pies, Salvación DES contra la CD, el doble del daño base. Desactivarla: Tecnología contra la CD (2 PA)."
   }
  ],
  "mando": [
   {
    "id": "accion_de_jefe",
    "name": "Acción de Jefe",
    "tipo": "Rasgo",
    "peso": 3,
    "txt": "Al final del turno de cada personaje puede gastar 1 PA de su siguiente turno para moverse, atacar o usar una Aptitud de 1 PA. Como máximo dos veces por ronda."
   },
   {
    "id": "turno_doble",
    "name": "Turno Doble",
    "tipo": "Rasgo",
    "peso": 3,
    "txt": "Tira dos veces la Iniciativa y actúa en ambas; reparte sus PA entre los dos turnos."
   },
   {
    "id": "resistencia_legendaria",
    "name": "Resistencia Legendaria",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Cuando falla una Salvación, puede superarla igualmente; después tira el Ud.",
    "frec": "Ud6"
   },
   {
    "id": "fases",
    "name": "Fases",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "Al bajar de la mitad de sus PV cambia: termina sus estados, gana una Aptitud nueva y el campo de batalla se transforma (tabla de Fases, Cap. 5)."
   },
   {
    "id": "voz_de_mando",
    "name": "Voz de Mando",
    "tipo": "Aptitud",
    "peso": 1,
    "txt": "Hasta tres aliados que la oigan se mueven de inmediato la mitad de su velocidad sin provocar Ataques de Oportunidad.",
    "coste": "1 PA"
   },
   {
    "id": "sin_rendicion",
    "name": "Sin Rendición",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "No tira Moral, y sus aliados a 30 pies tampoco mientras ella siga en pie.",
    "mod": {
     "noMoral": true
    }
   },
   {
    "id": "sacudirse",
    "name": "Sacudirse",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Al inicio de su turno termina uno de sus estados, el más reciente."
   },
   {
    "id": "guardia_personal",
    "name": "Guardia Personal",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Mientras tenga un aliado adyacente, los ataques a distancia contra ella tienen Desventaja."
   },
   {
    "id": "represalia",
    "name": "Represalia",
    "tipo": "Reacción",
    "peso": 1,
    "txt": "Cuando falla un ataque cuerpo a cuerpo contra ella, ataca de inmediato a quien lo hizo.",
    "frec": "1/ronda"
   },
   {
    "id": "victoria_alternativa",
    "name": "Victoria Alternativa",
    "tipo": "Rasgo",
    "peso": 0,
    "txt": "El combate termina si el grupo consigue algo concreto: romper el sello, sacar al rehén, apagar la máquina. Debe poder verse o deducirse en escena.",
    "pide": "La condición"
   }
  ],
  "guarida": [
   {
    "id": "guarida",
    "name": "Guarida",
    "tipo": "Rasgo",
    "peso": 2,
    "txt": "En su guarida, al final de cada ronda elige una Acción de Guarida (tabla del Cap. 5)."
   },
   {
    "id": "terreno_propio",
    "name": "Terreno Propio",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "En su guarida ignora el terreno difícil y conoce cada salida."
   },
   {
    "id": "trampas_de_la_guarida",
    "name": "Trampas de la Guarida",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Su guarida tiene 1d4 trampas de NA igual al suyo, que ella sabe esquivar."
   },
   {
    "id": "oscuridad_viva",
    "name": "Oscuridad Viva",
    "tipo": "Aura",
    "peso": 2,
    "txt": "Radio de 30 pies: la luz no mágica se reduce a penumbra."
   },
   {
    "id": "ecos",
    "name": "Ecos",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Sabe cuántas criaturas entran en su guarida y dónde están en cada momento."
   },
   {
    "id": "nido",
    "name": "Nido",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "Mientras defiende su nido, +2 al daño y no tira Moral."
   },
   {
    "id": "corrupcion_del_lugar",
    "name": "Corrupción del Lugar",
    "tipo": "Rasgo",
    "peso": 1,
    "txt": "En una milla alrededor de su guarida algo va mal —agua envenenada, animales ausentes, sueños compartidos—. Es su señal: el grupo puede notarla antes de entrar."
   },
   {
    "id": "ligada_al_lugar",
    "name": "Ligada al Lugar",
    "tipo": "Rasgo",
    "peso": -1,
    "txt": "No puede alejarse más de 300 pies de su guarida o de su punto de origen.",
    "pide": "El lugar"
   }
  ],
  "debilidades": [
   {
    "id": "vulnerabilidad",
    "name": "Vulnerabilidad",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Un tipo de daño le hace la mitad más: ×1,5, como en el Manual Básico (Cap. 9).",
    "pide": "Tipo de daño"
   },
   {
    "id": "fotosensible",
    "name": "Fotosensible",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "En luz brillante, Desventaja en ataques y en Percepción."
   },
   {
    "id": "aversion",
    "name": "Aversión",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "No puede tocar ni cruzar un material o símbolo (plata, hierro frío, sal, un sello sagrado). Las armas de ese material ignoran sus Resistencias y hacen Crítico con 19–20.",
    "pide": "Material o símbolo"
   },
   {
    "id": "lenta",
    "name": "Lenta",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "−10 pies de velocidad y actúa siempre la última en la ronda.",
    "mod": {
     "vel": -10
    }
   },
   {
    "id": "credula",
    "name": "Crédula",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Cae en cualquier finta: Engaño contra su CD − 5, y Desventaja en las Salvaciones contra ilusiones."
   },
   {
    "id": "cobarde",
    "name": "Cobarde",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Su Moral baja 4, y la tira en cuanto recibe un golpe que le quite un cuarto de sus PV.",
    "mod": {
     "moral": -4
    }
   },
   {
    "id": "nucleo_expuesto",
    "name": "Núcleo Expuesto",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Tiene un punto débil que Analizar o una Percepción contra la CD revelan: los ataques contra él hacen Crítico con 18–20.",
    "pide": "Dónde está"
   },
   {
    "id": "hambre",
    "name": "Hambre",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Si hay comida o un cadáver a la vista, Salvación SAB CD 12 o se detiene a comer ese turno."
   },
   {
    "id": "nombre_verdadero",
    "name": "Nombre Verdadero",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Pronunciar su nombre verdadero (2 PA) la deja Aturdida (Ud4), una vez por combate.",
    "pide": "El nombre (para el Director)"
   },
   {
    "id": "fragil",
    "name": "Frágil",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Su CON pasa a ser Débil.",
    "mod": {
     "conDebil": true
    }
   },
   {
    "id": "mando_unico",
    "name": "Mando Único",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "Sin su líder a la vista, pierde 1 PA y no puede usar Aptitudes."
   },
   {
    "id": "ruidosa",
    "name": "Ruidosa",
    "tipo": "Debilidad",
    "peso": -1,
    "txt": "No puede ocultarse ni moverse en silencio; nunca sorprende al grupo."
   }
  ]
 },
 "plantillas": {
  "anciana": {
   "name": "Anciana",
   "naTxt": "+2",
   "txt": "Estadísticas del nuevo NA. Gana Voluntad de Hierro y un Rasgo de su familia principal. Tamaño +1 categoría si es una bestia.",
   "na": 2,
   "gana": [
    "voluntad_de_hierro"
   ]
  },
  "no_muerta": {
   "name": "No-muerta",
   "naTxt": "+0",
   "txt": "Tipo No-muerto. Pierde las Aptitudes que requieran respirar o pensar. Gana Toque Necrótico y Vulnerabilidad (Radiante).",
   "na": 0,
   "tipo": "no_muerto",
   "gana": [
    "toque_necrotico",
    "vulnerabilidad"
   ],
   "notas": {
    "vulnerabilidad": "Radiante"
   }
  },
  "espectral": {
   "name": "Espectral",
   "naTxt": "+1",
   "txt": "Tipo Espíritu. Gana Incorpóreo. Pierde Apresar y cualquier Rasgo de Forma y anatomía.",
   "na": 1,
   "tipo": "espiritu",
   "gana": [
    "incorporeo"
   ],
   "pierdeFam": [
    "forma"
   ]
  },
  "infernal": {
   "name": "Infernal",
   "naTxt": "+1",
   "txt": "Tipo Extraplanar. Gana Cuerpo Ígneo o Maldición, y Aversión (sal consagrada).",
   "na": 1,
   "tipo": "extraplanar",
   "gana": [
    "cuerpo_igneo",
    "aversion"
   ],
   "notas": {
    "aversion": "sal consagrada"
   }
  },
  "mecanizada": {
   "name": "Mecanizada",
   "naTxt": "+1",
   "txt": "Tipo Máquina. +2 de Armadura, Arma Montada, Vulnerabilidad (Rayo).",
   "na": 1,
   "tipo": "maquina",
   "gana": [
    "arma_montada",
    "vulnerabilidad"
   ],
   "notas": {
    "vulnerabilidad": "Rayo"
   },
   "a": 2
  },
  "colosal": {
   "name": "Colosal",
   "naTxt": "+2 o +3",
   "txt": "Dos categorías de tamaño más. Gana Pisotón y Gigantismo. Pierde Sigilo y cualquier Rasgo de Movilidad salvo Vuelo.",
   "na": 2,
   "tam": 2,
   "gana": [
    "pisoton",
    "gigantismo"
   ],
   "pierdeFam": [
    "sigilo"
   ]
  },
  "enjambre": {
   "name": "Enjambre",
   "naTxt": "+0",
   "txt": "Se convierte en horda de criaturas Diminutas (Cap. 6). Gana Enjambre.",
   "na": 0,
   "horda": true,
   "gana": [
    "enjambre"
   ]
  },
  "corrupta": {
   "name": "Corrupta",
   "naTxt": "+1",
   "txt": "Tipo Mutante. Gana Aura Tóxica o Cuerpo Hueco, y una Debilidad aleatoria.",
   "na": 1,
   "tipo": "mutante",
   "gana": [
    "aura_toxica"
   ]
  },
  "cristalina": {
   "name": "Cristalina",
   "naTxt": "+1",
   "txt": "Gana Piel Gruesa y Reflejar Axiomas. Vulnerabilidad (Contundente).",
   "na": 1,
   "gana": [
    "piel_gruesa",
    "reflejar_axiomas",
    "vulnerabilidad"
   ],
   "notas": {
    "vulnerabilidad": "Contundente"
   }
  },
  "sombria": {
   "name": "Sombría",
   "naTxt": "+1",
   "txt": "Gana Paso de Sombra y Oscuridad Viva. Fotosensible.",
   "na": 1,
   "gana": [
    "paso_de_sombra",
    "oscuridad_viva",
    "fotosensible"
   ]
  },
  "alfa": {
   "name": "Alfa",
   "naTxt": "+1",
   "txt": "Rol Comandante. Gana Líder de Manada. Aparece siempre con 1d4 de su especie.",
   "na": 1,
   "rol": "comandante",
   "gana": [
    "lider_de_manada"
   ]
  },
  "cria": {
   "name": "Cría",
   "naTxt": "−2",
   "txt": "Estadísticas del nuevo NA, un tamaño menos. Pierde su Rasgo de Potencial más alto. Cobarde.",
   "na": -2,
   "tam": -1,
   "gana": [
    "cobarde"
   ],
   "pierdeMayor": true
  }
 },
 "peligros": {
  "losa_con_resorte": {
   "name": "Losa con resorte",
   "na": 1,
   "cond": "Al pisarla",
   "senal": "una junta más limpia que las demás",
   "cons": "Salvación DES o 1d6 y Derribado."
  },
  "foso_cubierto": {
   "name": "Foso cubierto",
   "na": 2,
   "cond": "Al cruzar el pasillo",
   "senal": "polvo sin huellas en el centro",
   "cons": "Salvación DES o 2d6 de caída y Apresado en el fondo."
  },
  "dardos_envenenados": {
   "name": "Dardos envenenados",
   "na": 2,
   "cond": "Al abrir la puerta",
   "senal": "agujeros diminutos en el marco",
   "cons": "Salvación DES o 1d4 y Envenenado (Ud6)."
  },
  "gas_soporifero": {
   "name": "Gas soporífero",
   "na": 3,
   "cond": "Al romper el sello del cofre",
   "senal": "olor dulzón",
   "cons": "Salvación CON o Inconsciente durante 1 minuto."
  },
  "cuchillas_pendulares": {
   "name": "Cuchillas pendulares",
   "na": 3,
   "cond": "Cada ronda en la sala",
   "senal": "marcas en el suelo",
   "cons": "Salvación DES o 1d10 Cortante."
  },
  "techo_que_baja": {
   "name": "Techo que baja",
   "na": 4,
   "cond": "Al cerrarse la puerta",
   "senal": "marcas de roce en las paredes",
   "cons": "4 rondas para salir; después, 2d6 por ronda."
  },
  "runa_explosiva": {
   "name": "Runa explosiva",
   "na": 4,
   "cond": "Al leerla",
   "senal": "tinta que brilla en la oscuridad",
   "cons": "Salvación DES o 2d6 de su elemento en 10 pies."
  },
  "cienaga_salobre": {
   "name": "Ciénaga salobre",
   "na": 3,
   "cond": "Al salirse del sendero",
   "senal": "agua que burbujea",
   "cons": "Salvación FUE o Apresado y una Ronda de Exploración perdida."
  },
  "hielo_delgado": {
   "name": "Hielo delgado",
   "na": 2,
   "cond": "Al cruzar el lago",
   "senal": "grietas blancas",
   "cons": "Salvación DES o al agua helada: 1 escalón de Fatiga."
  },
  "aire_enrarecido": {
   "name": "Aire enrarecido",
   "na": 4,
   "cond": "Cada Vigilia en altura",
   "senal": "jaquecas, labios morados",
   "cons": "Salvación CON o 1 escalón de Fatiga."
  },
  "galeria_que_cede": {
   "name": "Galería que cede",
   "na": 5,
   "cond": "Tras una Vigilia bajo sus vigas",
   "senal": "polvo que cae",
   "cons": "Salvación DES o 2d8 y salida bloqueada."
  },
  "fiebre_del_puerto": {
   "name": "Fiebre del puerto",
   "na": 4,
   "cond": "Cada Vigilia en el barrio bajo",
   "senal": "puertas marcadas con cal",
   "cons": "Salvación CON o 1 escalón de Fatiga."
  },
  "esporas_de_sueno": {
   "name": "Esporas de sueño",
   "na": 3,
   "cond": "Al tocar los hongos",
   "senal": "polvo violeta",
   "cons": "Salvación CON o Conmocionado (Ud6) y visiones."
  },
  "radiacion": {
   "name": "Radiación",
   "na": 5,
   "cond": "Cada hora en la zona",
   "senal": "el contador chasquea, la piel escuece",
   "cons": "Salvación CON o pierde 1 de Flesh."
  },
  "sensor_de_movimiento": {
   "name": "Sensor de movimiento",
   "na": 3,
   "cond": "Al entrar en el pasillo",
   "senal": "luz roja intermitente",
   "cons": "alerta a 1d4 guardias (Dron o Centinela)."
  },
  "suelo_electrificado": {
   "name": "Suelo electrificado",
   "na": 5,
   "cond": "Al pisarlo con metal",
   "senal": "chispas en las juntas",
   "cons": "Salvación CON o 2d8 Rayo y Aturdido (Ud4)."
  },
  "espejo_hambriento": {
   "name": "Espejo hambriento",
   "na": 6,
   "cond": "Al mirarse",
   "senal": "el reflejo sonríe tarde",
   "cons": "Salvación SAB o Encantado (Ud6) y se acerca al espejo."
  },
  "tormenta_de_arena": {
   "name": "Tormenta de arena",
   "na": 4,
   "cond": "Al cruzar el desierto",
   "senal": "cielo amarillo al horizonte",
   "cons": "visibilidad 10 pies; Salvación CON cada Vigilia o 1 escalón de Fatiga."
  },
  "maldicion_del_umbral": {
   "name": "Maldición del umbral",
   "na": 6,
   "cond": "Al cruzar sin permiso",
   "senal": "sal derramada en la entrada",
   "cons": "Salvación SAB o Maldito (Ud8)."
  },
  "sala_que_cambia": {
   "name": "Sala que cambia",
   "na": 7,
   "cond": "Cada Ronda de Exploración",
   "senal": "las esquinas no suman",
   "cons": "Salvación INT o el grupo se separa en dos grupos."
  }
 },
 "bestiario": {
  "guardia_de_la_ciudad": {
   "nombre": "Guardia de la Ciudad",
   "na": 1,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "esbirro",
   "estructura": "normal",
   "rasgos": [],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Lanza",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [],
   "senal": "Silbatos, antorchas que se acercan en fila.",
   "contexto": "No son enemigos: son tiempo. Cuatro guardias no matan a nadie, pero cada ronda que el grupo pasa con ellos es una ronda más para que llegue quien sí puede hacerlo.",
   "impreso": {
    "pv": 2,
    "g": 12,
    "a": 0,
    "vel": 30,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 12,
    "ini": 0,
    "moral": null,
    "attrs": {
     "FUE": 2,
     "DES": 0,
     "CON": 2,
     "INT": 0,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "kobold_trampero": {
   "nombre": "Kobold Trampero",
   "na": 1,
   "tipo": "humanoide",
   "tam": "pequeno",
   "rol": "acechador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "trampas_de_la_guarida",
     "txt": "Su madriguera tiene 1d4 trampas de NA 1 (Cap. 7) que él sabe esquivar."
    },
    {
     "id": "tactica_de_manada",
     "txt": "Ventaja si otro kobold está adyacente al mismo objetivo."
    },
    {
     "id": "esconderse",
     "txt": "1 PA: se oculta tras cualquier cobertura parcial o en penumbra."
    },
    {
     "id": "fotosensible",
     "txt": "En luz brillante, Desventaja en ataques y Percepción."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Lanza corta",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [],
   "senal": "Cascabeles colgados de hilos, piedras apiladas en los cruces.",
   "contexto": "El kobold no pelea: te hace pelear contra su casa. Si el grupo avanza con prisa, las trampas hacen el trabajo; si avanza con cuidado, los kobolds tienen tiempo de rodearlo.",
   "impreso": {
    "pv": 55,
    "g": 14,
    "a": 0,
    "vel": 30,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 12,
    "ini": 2,
    "moral": 11,
    "attrs": {
     "FUE": 1,
     "DES": 2,
     "CON": 0,
     "INT": 0,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "dron_centinela": {
   "nombre": "Dron Centinela",
   "na": 1,
   "tipo": "maquina",
   "tam": "pequeno",
   "rol": "artillero",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "sistemas_redundantes",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 30 pies.",
     "nota": "30 pies"
    },
    {
     "id": "arma_montada",
     "txt": "2 PA: ataque a distancia hasta 120 pies."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño de Rayo.",
     "nota": "Rayo"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Energía",
   "ataqueNombre": "Láser",
   "fuertes": [
    "DES",
    "SAB"
   ],
   "debiles": [
    "CON",
    "CAR"
   ],
   "senal": "Un zumbido intermitente, luces rojas que barren el pasillo.",
   "contexto": "Uno solo es una molestia. Tres, cubriendo el mismo pasillo desde el techo, obligan al grupo a buscar otra ruta o a asumir que alguien va a caer antes de llegar a la puerta.",
   "impreso": {
    "pv": 53,
    "g": 14,
    "a": 0,
    "vel": 30,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 12,
    "ini": 2,
    "moral": null,
    "attrs": {
     "FUE": -1,
     "DES": 2,
     "CON": -2,
     "INT": 0,
     "SAB": 2,
     "CAR": -2
    }
   }
  },
  "cieno_gris": {
   "nombre": "Cieno Gris",
   "na": 2,
   "tipo": "cieno",
   "tam": "mediano",
   "rol": "",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "forma_amorfa",
     "gratis": true
    },
    {
     "id": "sentido_sismico",
     "gratis": true
    },
    {
     "id": "acido_corrosivo",
     "txt": "Su ataque añade 1d6 de Ácido y aplica Desgarro (Ud6)."
    },
    {
     "id": "falsa_apariencia",
     "txt": "Inmóvil, parece un charco de agua sucia."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño de Frío.",
     "nota": "Frío"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Ácido",
   "ataqueNombre": "Pseudópodo",
   "fuertes": [
    "CON",
    "FUE"
   ],
   "debiles": [
    "INT",
    "CAR"
   ],
   "senal": "Armas y armaduras corroídas en el suelo, sin dueño.",
   "contexto": "No mata rápido: desarma. Cada golpe que recibe el Audaz le quita Armadura que tardará en recuperar, y el grupo descubre demasiado tarde que las espadas también se corroen.",
   "impreso": {
    "pv": 64,
    "g": 12,
    "a": 1,
    "vel": 30,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 13,
    "ini": 0,
    "moral": null,
    "attrs": {
     "FUE": 2,
     "DES": 0,
     "CON": 2,
     "INT": -2,
     "SAB": 0,
     "CAR": -2
    }
   }
  },
  "mercenario_veterano": {
   "nombre": "Mercenario Veterano",
   "na": 2,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "guardian",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "bloqueador",
     "txt": "Una vez por ronda, bloquea con 1d20 + 4 contra el total del ataque."
    },
    {
     "id": "formacion",
     "txt": "+1 a la Guardia por cada aliado adyacente, hasta +3."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Cortante",
   "ataqueNombre": "Espada larga",
   "fuertes": [
    "CON",
    "FUE"
   ],
   "debiles": [],
   "equipo": "cota de malla y escudo (Armadura 4 con el Rol).",
   "senal": "Hogueras de campamento ordenadas, un estandarte de compañía.",
   "contexto": "El mercenario no busca ganar: busca que su pagador salga vivo. Pelea en línea, protege al que paga y se rinde en cuanto el contrato deja de compensar (Moral 12).",
   "manual": {
    "armadura": 4
   },
   "impreso": {
    "pv": 64,
    "g": 12,
    "a": 4,
    "vel": 20,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 13,
    "ini": 0,
    "moral": 12,
    "attrs": {
     "FUE": 2,
     "DES": 0,
     "CON": 2,
     "INT": 0,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "tejedora_del_techo": {
   "nombre": "Tejedora del Techo",
   "na": 3,
   "tipo": "bestia",
   "tam": "grande",
   "rol": "acechador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vision_en_la_oscuridad",
     "gratis": true
    },
    {
     "id": "trepadora",
     "txt": "Trepa a su velocidad por muros y techos."
    },
    {
     "id": "telarana",
     "txt": "2 PA · Ud6: área de 10 pies a 30 pies, terreno difícil; Salvación DES CD 16 o Apresado."
    },
    {
     "id": "arrastrar",
     "txt": "1 PA: se mueve 15 pies llevándose a una criatura Apresada."
    },
    {
     "id": "garras_desgarradoras",
     "txt": "Dos impactos al mismo objetivo en un turno, o un Crítico, aplican Sangrado (Ud6)."
    },
    {
     "id": "fotosensible",
     "txt": "En luz brillante, Desventaja en ataques y Percepción."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Quelíceros",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "INT",
    "CAR"
   ],
   "rolNota": "Primer Golpe: su primer impacto contra una criatura Desprevenida suma el daño base otra vez.",
   "senal": "Hilos pegajosos a la altura de la cabeza; ratas envueltas; ningún eco en la galería.",
   "contexto": "No pelea: elige al último de la fila, lo inmoviliza y se lo lleva. El grupo decide entre perseguirla hacia su terreno o dejar atrás a un compañero.",
   "impreso": {
    "pv": 65,
    "g": 16,
    "a": 1,
    "vel": 30,
    "atk": 7,
    "dano": "3d6+4",
    "cd": 16,
    "ini": 3,
    "moral": null,
    "attrs": {
     "FUE": 4,
     "DES": 3,
     "CON": 0,
     "INT": -2,
     "SAB": 0,
     "CAR": -2
    }
   }
  },
  "sabueso_infernal": {
   "nombre": "Sabueso Infernal",
   "na": 3,
   "tipo": "extraplanar",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "telepatia",
     "nota": "con los suyos",
     "gratis": true
    },
    {
     "id": "resistencia",
     "nota": "Fuego y Necrótico",
     "gratis": true
    },
    {
     "id": "aliento",
     "txt": "3 PA · Ud6: cono de 30 pies, Salvación DES CD 15, 4d6 de Fuego; la mitad si la supera."
    },
    {
     "id": "tactica_de_manada",
     "txt": "Ventaja si un aliado está adyacente al mismo objetivo."
    },
    {
     "id": "aversion",
     "txt": "No cruza una línea de sal consagrada; las armas bendecidas hacen Crítico contra él con 19–20."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante y Fuego",
   "ataqueNombre": "Mordisco",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON",
    "INT"
   ],
   "rolNota": "Flanqueo: Ventaja si un aliado está adyacente al mismo objetivo.",
   "senal": "Hierba quemada en forma de huellas; un olor a azufre que no se va.",
   "contexto": "Cazan en tríos y abren con el aliento antes de cerrar el cerco. El grupo que se agrupa para defenderse es el que mejor queda para el siguiente aliento.",
   "impreso": {
    "pv": 59,
    "g": 16,
    "a": 1,
    "vel": 40,
    "atk": 6,
    "dano": "3d6+3",
    "cd": 15,
    "ini": 3,
    "moral": null,
    "attrs": {
     "FUE": 3,
     "DES": 3,
     "CON": -2,
     "INT": -2,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "ghoul": {
   "nombre": "Ghoul",
   "na": 3,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Aterrado",
     "gratis": true
    },
    {
     "id": "toque_necrotico",
     "txt": "Su daño es Necrótico, y el objetivo no recupera PV hasta el final de su siguiente turno."
    },
    {
     "id": "carronera",
     "txt": "2 PA: devora un cadáver adyacente y recupera 9 PV."
    },
    {
     "id": "remate",
     "txt": "Ventaja contra criaturas Derribadas o por debajo de la mitad de sus PV."
    },
    {
     "id": "garras_desgarradoras",
     "txt": "Dos impactos al mismo objetivo en un turno aplican Sangrado (Ud6)."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño Radiante.",
     "nota": "Radiante"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Cortante",
   "ataqueNombre": "Garras",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "CAR"
   ],
   "rolNota": "Ataque Masivo (2 PA): Derriba sin tirada.",
   "senal": "Tumbas abiertas desde dentro; huesos partidos a lo largo.",
   "contexto": "Derriba y se ceba. Un personaje en el suelo junto a un ghoul pierde un turno levantándose y sufre dos ataques con Ventaja; el grupo tiene que decidir quién se queda a su lado.",
   "impreso": {
    "pv": 74,
    "g": 11,
    "a": 1,
    "vel": 30,
    "atk": 6,
    "dano": "4d6+3",
    "cd": 15,
    "ini": -2,
    "moral": 13,
    "attrs": {
     "FUE": 3,
     "DES": -2,
     "CON": 3,
     "INT": 0,
     "SAB": 0,
     "CAR": -2
    }
   }
  },
  "fuego_fatuo": {
   "nombre": "Fuego Fatuo",
   "na": 3,
   "tipo": "espiritu",
   "tam": "diminuto",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "telepatia",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Flota a 30 pies.",
     "nota": "30 pies"
    },
    {
     "id": "voz_seductora",
     "txt": "2 PA · Ud6: una criatura a 30 pies, Salvación SAB CD 15 o Encantada (Ud6); la sigue hacia el pantano."
    },
    {
     "id": "ligada_al_lugar",
     "txt": "No se aleja más de 300 pies de la ciénaga donde murió."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Rayo",
   "ataqueNombre": "Toque",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [],
   "rolNota": "Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Luces azules entre los juncos; viajeros que juran haber visto un farol.",
   "contexto": "No mata: conduce. La víctima Encantada camina hacia la ciénaga más profunda (Cap. 7), y el grupo tiene que elegir entre perseguir la luz o sacar a su compañero del agua.",
   "impreso": {
    "pv": 62,
    "g": 14,
    "a": 1,
    "vel": 30,
    "atk": 4,
    "dano": "3d6+1",
    "cd": 15,
    "ini": 1,
    "moral": 13,
    "attrs": {
     "FUE": -2,
     "DES": 1,
     "CON": -1,
     "INT": 3,
     "SAB": 3,
     "CAR": 0
    }
   }
  },
  "arpia": {
   "nombre": "Arpía",
   "na": 3,
   "tipo": "monstruosidad",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "espinas",
     "txt": "Sus plumas cortan a quien la apresa, 1d6 Perforante",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 40 pies.",
     "nota": "40 pies"
    },
    {
     "id": "voz_seductora",
     "txt": "2 PA · Ud6: una criatura a 30 pies, Salvación SAB CD 15 o Encantada (Ud6)."
    },
    {
     "id": "cobarde",
     "txt": "Moral 9; la tira en cuanto pierde un cuarto de sus PV."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Cortante",
   "ataqueNombre": "Garras",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [],
   "senal": "Un canto hermoso en los acantilados; restos de marineros al pie.",
   "contexto": "Encanta a uno y ataca desde el aire a quien intenta despertarlo. Es frágil y huye pronto, así que la pelea no se gana matándola, sino sacando al encantado del borde.",
   "impreso": {
    "pv": 65,
    "g": 13,
    "a": 1,
    "vel": 30,
    "atk": 3,
    "dano": "3d6",
    "cd": 15,
    "ini": 0,
    "moral": 9,
    "attrs": {
     "FUE": 0,
     "DES": 0,
     "CON": 0,
     "INT": 3,
     "SAB": 3,
     "CAR": 0
    }
   }
  },
  "mimico": {
   "nombre": "Mímico",
   "na": 4,
   "tipo": "monstruosidad",
   "tam": "mediano",
   "rol": "acechador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "sangre_acida",
     "txt": "Quien le hace daño Cortante o Perforante cuerpo a cuerpo recibe 1d6 de Ácido",
     "gratis": true
    },
    {
     "id": "falsa_apariencia",
     "txt": "Inmóvil, es un cofre, una puerta o un taburete."
    },
    {
     "id": "mordisco_tenaz",
     "txt": "Al impactar, el objetivo queda Apresado (escapar: Proeza Física CD 16)."
    },
    {
     "id": "emboscadora_nata",
     "txt": "En la primera ronda, sus ataques contra Desprevenidos suman el daño base otra vez."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Contundente y Ácido",
   "ataqueNombre": "Pseudópodo",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CAR"
   ],
   "rolNota": "Primer Golpe: su primer impacto contra una criatura Desprevenida suma el daño base otra vez.",
   "senal": "Un cofre sin polvo en una sala abandonada; marcas de arrastre bajo él.",
   "contexto": "El primer golpe es el peor. Después, el personaje pegado al mímico tiene que elegir entre forcejear y seguir recibiendo ácido o que sus compañeros lo golpeen de cerca y se quemen.",
   "impreso": {
    "pv": 74,
    "g": 16,
    "a": 2,
    "vel": 30,
    "atk": 6,
    "dano": "3d6+3",
    "cd": 16,
    "ini": 3,
    "moral": 14,
    "attrs": {
     "FUE": 3,
     "DES": 3,
     "CON": 1,
     "INT": 1,
     "SAB": 1,
     "CAR": -2
    }
   }
  },
  "ogro": {
   "nombre": "Ogro",
   "na": 4,
   "tipo": "gigante",
   "tam": "grande",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "gigantismo",
     "gratis": true
    },
    {
     "id": "golpe_aplastante",
     "txt": "Al impactar, Salvación FUE CD 17 o Derribado."
    },
    {
     "id": "lanzar",
     "txt": "2 PA: arroja a una criatura Apresada hasta 20 pies; 3d6 para ella y para quien reciba el golpe."
    },
    {
     "id": "frenesi",
     "txt": "1 PA · 1/combate: hasta su siguiente turno, Ventaja en sus ataques y en los ataques contra él."
    },
    {
     "id": "credula",
     "txt": "Cae en cualquier finta: Engaño contra CD 12."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Contundente",
   "ataqueNombre": "Garrote",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT"
   ],
   "rolNota": "Ataque Masivo (2 PA): Derriba sin tirada.",
   "senal": "Árboles tronchados a la altura del pecho; cabras desaparecidas.",
   "contexto": "Pega muchísimo y piensa muy poco. El grupo que lo engaña —una finta, un señuelo, un puente que no aguanta su peso— lo vence sin recibir un solo golpe.",
   "impreso": {
    "pv": 82,
    "g": 11,
    "a": 2,
    "vel": 30,
    "atk": 7,
    "dano": "4d6+4",
    "cd": 17,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 4,
     "DES": -2,
     "CON": 3,
     "INT": -2,
     "SAB": 1,
     "CAR": 1
    }
   }
  },
  "bruja_del_pantano": {
   "nombre": "Bruja del Pantano",
   "na": 5,
   "tipo": "feerico",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "voluntad_de_hierro",
     "gratis": true
    },
    {
     "id": "maldicion",
     "txt": "2 PA · Ud6: Salvación SAB CD 16 o Maldito (Ud8), con Desventaja en el tipo de tirada que ella elija."
    },
    {
     "id": "cambiaformas",
     "txt": "2 PA: adopta la forma de una anciana, una niña o un cuervo."
    },
    {
     "id": "pesadillas",
     "txt": "Quien duerma a menos de una milla no descansa bien."
    },
    {
     "id": "aversion",
     "txt": "No cruza hierro frío; las armas de hierro frío hacen Crítico con 19–20."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Cortante",
   "ataqueNombre": "Uñas",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "FUE"
   ],
   "rolNota": "Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Muñecos de paja en las puertas; los niños sueñan con una casa sobre patas.",
   "contexto": "Ataca antes de que el grupo sepa que está en guerra: con pesadillas que les quitan el descanso y maldiciones que llegan con la cena. Enfrentarla es encontrarla, y encontrarla es saber quién es.",
   "impreso": {
    "pv": 80,
    "g": 14,
    "a": 2,
    "vel": 30,
    "atk": 4,
    "dano": "4d6+1",
    "cd": 16,
    "ini": 1,
    "moral": 15,
    "attrs": {
     "FUE": -2,
     "DES": 1,
     "CON": 1,
     "INT": 3,
     "SAB": 3,
     "CAR": 1
    }
   }
  },
  "manticora": {
   "nombre": "Mantícora",
   "na": 5,
   "tipo": "monstruosidad",
   "tam": "grande",
   "rol": "artillero",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "cola_barredora",
     "txt": "Reacción, 1/ronda, ataque con la cola a quien la flanquee",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 50 pies.",
     "nota": "50 pies"
    },
    {
     "id": "andanada",
     "txt": "3 PA · Ud6: radio de 15 pies a 60 pies, Salvación DES CD 16, 4d6; la mitad si la supera."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Púas",
   "fuertes": [
    "DES",
    "SAB"
   ],
   "debiles": [
    "CON"
   ],
   "rolNota": "Posición: si no se ha movido, Ventaja en su primer ataque a distancia.",
   "senal": "Cadáveres erizados de púas negras; un rugido que parece una risa.",
   "contexto": "Dispara desde donde nadie llega y baja solo cuando alguien se aísla. Obliga al grupo a buscar cobertura en campo abierto, o a encontrar la forma de traerla al suelo.",
   "impreso": {
    "pv": 65,
    "g": 16,
    "a": 2,
    "vel": 30,
    "atk": 6,
    "dano": "4d6+3",
    "cd": 16,
    "ini": 3,
    "moral": 15,
    "attrs": {
     "FUE": 2,
     "DES": 3,
     "CON": -2,
     "INT": 1,
     "SAB": 3,
     "CAR": 1
    }
   }
  },
  "basilisco": {
   "nombre": "Basilisco",
   "na": 5,
   "tipo": "monstruosidad",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "sangre_acida",
     "gratis": true
    },
    {
     "id": "mirada_petrificante",
     "txt": "3 PA · Ud4: una criatura a 30 pies que lo mire, Salvación CON CD 16 o Ralentizada (Ud4); si vuelve a fallar mientras lo está, Petrificada."
    },
    {
     "id": "piel_gruesa",
     "txt": "+2 de Armadura."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Mordisco",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "CAR"
   ],
   "rolNota": "Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Estatuas demasiado realistas, con cara de sorpresa; pájaros de piedra en las ramas.",
   "contexto": "La mirada no mata al primer intento: avisa. El grupo tiene un turno para decidir si pelea con los ojos cerrados (Desventaja) o se arriesga a una segunda mirada.",
   "impreso": {
    "pv": 80,
    "g": 14,
    "a": 2,
    "vel": 30,
    "atk": 4,
    "dano": "4d6+1",
    "cd": 16,
    "ini": 1,
    "moral": 15,
    "attrs": {
     "FUE": 1,
     "DES": 1,
     "CON": 1,
     "INT": 3,
     "SAB": 3,
     "CAR": -2
    }
   }
  },
  "troll": {
   "nombre": "Troll",
   "na": 6,
   "tipo": "gigante",
   "tam": "grande",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "gigantismo",
     "gratis": true
    },
    {
     "id": "regeneracion",
     "txt": "Recupera 12 PV al inicio de su turno salvo si recibió Fuego o Ácido desde su turno anterior. Solo muere a 0 PV si ese turno recibió Fuego o Ácido."
    },
    {
     "id": "garras_dobles",
     "txt": "Su Ataque Normal son dos ataques, cada uno con la mitad del daño base."
    },
    {
     "id": "olor_de_la_sangre",
     "txt": "Percibe a las criaturas heridas a 120 pies."
    },
    {
     "id": "hambre",
     "txt": "Con un cadáver a la vista, Salvación SAB CD 12 o se detiene a comer."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Cortante",
   "ataqueNombre": "Garras",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT"
   ],
   "rolNota": "Ataque Masivo (2 PA): aplica Sangrado sin tirada.",
   "senal": "Huesos de caballo mordidos; un hedor que se huele a una milla.",
   "contexto": "Se puede tumbar muchas veces y se levanta todas. La pelea contra un troll es una pelea por el fuego: quién lo lleva, cuánto queda y cómo aguantar hasta usarlo.",
   "impreso": {
    "pv": 104,
    "g": 12,
    "a": 3,
    "vel": 30,
    "atk": 9,
    "dano": "5d6+5",
    "cd": 20,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 5,
     "DES": -2,
     "CON": 4,
     "INT": -2,
     "SAB": 1,
     "CAR": 1
    }
   }
  },
  "espectro": {
   "nombre": "Espectro",
   "na": 6,
   "tipo": "espiritu",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "telepatia",
     "gratis": true
    },
    {
     "id": "incorporeo",
     "txt": "Resistencia a todo daño no mágico; atraviesa paredes y criaturas."
    },
    {
     "id": "toque_necrotico",
     "txt": "El objetivo no recupera PV hasta el final de su siguiente turno."
    },
    {
     "id": "drenar_reserva",
     "txt": "Al impactar, el objetivo pierde 1d6 de su mayor Reserva."
    },
    {
     "id": "fotosensible",
     "txt": "En luz brillante, Desventaja en ataques y Percepción."
    },
    {
     "id": "ligada_al_lugar",
     "txt": "No se aleja más de 300 pies de la casa donde murió."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Necrótico",
   "ataqueNombre": "Toque",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON"
   ],
   "rolNota": "Flanqueo: Ventaja si un aliado está adyacente al mismo objetivo.",
   "senal": "Frío en una sola habitación; los espejos se empañan desde dentro.",
   "contexto": "Sale de la pared, toca y vuelve a entrar. No se le puede acorralar, así que el grupo tiene que traer la luz a su terreno o sacarlo del lugar al que está ligado.",
   "impreso": {
    "pv": 68,
    "g": 18,
    "a": 3,
    "vel": 40,
    "atk": 8,
    "dano": "4d6+4",
    "cd": 19,
    "ini": 4,
    "moral": 16,
    "attrs": {
     "FUE": 4,
     "DES": 4,
     "CON": -2,
     "INT": 1,
     "SAB": 1,
     "CAR": 1
    }
   }
  },
  "golem_de_arcilla": {
   "nombre": "Gólem de Arcilla",
   "na": 6,
   "tipo": "constructo",
   "tam": "grande",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Encantado",
     "gratis": true
    },
    {
     "id": "resistencia_sobrenatural",
     "txt": "Resistencia al daño no mágico."
    },
    {
     "id": "piel_arcana",
     "txt": "Los Axiomas de Nivel 1 y 2 no le afectan, salvo su daño."
    },
    {
     "id": "golpe_aplastante",
     "txt": "Al impactar, Salvación FUE CD 20 o Derribado."
    },
    {
     "id": "mando_unico",
     "txt": "Sin su creador a la vista, pierde 1 PA y no puede usar Aptitudes."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Contundente",
   "ataqueNombre": "Puños",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT",
    "CAR"
   ],
   "rolNota": "Ataque Masivo (2 PA): Derriba sin tirada.",
   "senal": "Huellas profundas y exactas, siempre a la misma distancia; runas en una puerta.",
   "contexto": "Casi nada le hace daño y todo lo que toca cae. La verdadera pelea es contra quien lo controla: encontrarlo y apartarlo convierte al gólem en una estatua lenta.",
   "impreso": {
    "pv": 104,
    "g": 12,
    "a": 3,
    "vel": 30,
    "atk": 9,
    "dano": "5d6+5",
    "cd": 20,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 5,
     "DES": -2,
     "CON": 4,
     "INT": -2,
     "SAB": 1,
     "CAR": -2
    }
   }
  },
  "cazador_sintetico": {
   "nombre": "Cazador Sintético",
   "na": 6,
   "tipo": "maquina",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "sistemas_redundantes",
     "gratis": true
    },
    {
     "id": "arma_montada",
     "txt": "2 PA: ataque a distancia hasta 120 pies."
    },
    {
     "id": "camuflaje",
     "txt": "Camuflaje óptico: inmóvil, Percepción CD 19 para verlo."
    },
    {
     "id": "autorreparacion",
     "txt": "Recupera 6 PV al inicio de su turno salvo si recibió Rayo."
    },
    {
     "id": "salto_depredador",
     "txt": "1 PA: salta hasta su velocidad sin provocar Ataques de Oportunidad."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño de Rayo.",
     "nota": "Rayo"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Energía",
   "ataqueNombre": "Rifle integrado",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON",
    "CAR"
   ],
   "rolNota": "Flanqueo.",
   "senal": "Cámaras destruidas en orden; un objetivo marcado con un punto rojo que nadie más ve.",
   "contexto": "Tiene un nombre en la lista y no se detiene hasta tacharlo. El grupo puede pelear, esconder a su objetivo o descubrir quién lo programó y cambiarle la lista.",
   "impreso": {
    "pv": 68,
    "g": 18,
    "a": 3,
    "vel": 40,
    "atk": 8,
    "dano": "4d6+4",
    "cd": 19,
    "ini": 4,
    "moral": null,
    "attrs": {
     "FUE": 4,
     "DES": 4,
     "CON": -2,
     "INT": 1,
     "SAB": 1,
     "CAR": -2
    }
   }
  },
  "guardian_de_raiz": {
   "nombre": "Guardián de Raíz",
   "na": 7,
   "tipo": "planta_u_hongo",
   "tam": "grande",
   "rol": "guardian",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "inmunidad_a_estados",
     "nota": "Cegado y Ensordecido",
     "gratis": true
    },
    {
     "id": "camuflaje",
     "nota": "en el bosque",
     "gratis": true
    },
    {
     "id": "piel_gruesa",
     "txt": "+2 de Armadura."
    },
    {
     "id": "zona_de_control",
     "txt": "Quien empiece su turno adyacente a él no puede alejarse sin superar Salvación FUE o DES CD 20."
    },
    {
     "id": "tentaculos",
     "txt": "Mantiene Apresadas hasta tres criaturas con sus raíces sin dejar de atacar."
    },
    {
     "id": "curacion_rapida",
     "txt": "Recupera 7 PV al inicio de su turno."
    },
    {
     "id": "pisoton",
     "txt": "2 PA · Ud6: cada criatura a 10 pies, Salvación FUE CD 20 o Derribada."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño de Fuego.",
     "nota": "Fuego"
    },
    {
     "id": "lenta",
     "txt": "−10 pies de velocidad; actúa siempre el último."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Contundente",
   "ataqueNombre": "Ramas",
   "fuertes": [
    "CON",
    "FUE"
   ],
   "debiles": [
    "DES",
    "CAR"
   ],
   "rolNota": "Custodia (Reacción).",
   "senal": "Un claro donde los árboles miran hacia dentro; caminos que se cierran.",
   "contexto": "No persigue: retiene. Mientras el guardián sujeta a dos personajes, lo que protege tiene tiempo de hacer lo que el grupo vino a impedir.",
   "impreso": {
    "pv": 113,
    "g": 12,
    "a": 4,
    "vel": 20,
    "atk": 9,
    "dano": "5d6+5",
    "cd": 20,
    "ini": -2,
    "moral": 17,
    "attrs": {
     "FUE": 5,
     "DES": -2,
     "CON": 4,
     "INT": 1,
     "SAB": 1,
     "CAR": -2
    }
   }
  },
  "elemental_de_tormenta": {
   "nombre": "Elemental de Tormenta",
   "na": 7,
   "tipo": "elemental",
   "tam": "grande",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "inmunidad",
     "nota": "Rayo",
     "gratis": true
    },
    {
     "id": "fundirse_con_el_elemento",
     "nota": "en nubes de tormenta",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 60 pies.",
     "nota": "60 pies"
    },
    {
     "id": "tormenta_personal",
     "txt": "3 PA · Ud6: hasta tres objetivos en 30 pies reciben 5d6 de Rayo (Salvación DES CD 19, la mitad); el viento convierte el radio en terreno difícil."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Rayo",
   "ataqueNombre": "Descarga",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "CAR"
   ],
   "rolNota": "Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Nubes que se mueven contra el viento; el pelo se eriza.",
   "contexto": "Convierte el campo en un lugar donde nadie avanza. Cada ronda que el grupo pasa bajo ella es una ronda de rayos; la decisión es cubrirse o correr hacia algo que la ancle.",
   "impreso": {
    "pv": 92,
    "g": 15,
    "a": 3,
    "vel": 30,
    "atk": 6,
    "dano": "5d6+2",
    "cd": 19,
    "ini": 1,
    "moral": 17,
    "attrs": {
     "FUE": 2,
     "DES": 1,
     "CON": 1,
     "INT": 4,
     "SAB": 4,
     "CAR": -2
    }
   }
  },
  "tejedor_del_vacio": {
   "nombre": "Tejedor del Vacío",
   "na": 7,
   "tipo": "aberracion",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "mente_ajena",
     "gratis": true
    },
    {
     "id": "vision_en_la_oscuridad",
     "gratis": true
    },
    {
     "id": "voz_seductora",
     "txt": "2 PA · Ud6: una criatura a 30 pies, Salvación SAB CD 19 o Encantada (Ud6)."
    },
    {
     "id": "dominar",
     "txt": "3 PA · Ud4: una criatura Encantada, Salvación SAB CD 19 o actúa como él decida."
    },
    {
     "id": "leer_mentes",
     "txt": "Una vez por ronda, pregunta a un jugador qué hará su personaje."
    },
    {
     "id": "fotosensible",
     "txt": "En luz brillante, Desventaja en ataques y Percepción."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Psíquico",
   "ataqueNombre": "Toque",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "FUE"
   ],
   "rolNota": "Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Gente que repite frases que no son suyas; dibujos idénticos hechos por desconocidos.",
   "contexto": "Pelea con el grupo contra el grupo. Sabe lo que van a hacer y usa a uno de ellos para impedirlo. La luz y la distancia son las únicas armas que no puede volver en su contra.",
   "impreso": {
    "pv": 92,
    "g": 15,
    "a": 3,
    "vel": 30,
    "atk": 5,
    "dano": "5d6+1",
    "cd": 19,
    "ini": 1,
    "moral": 17,
    "attrs": {
     "FUE": -2,
     "DES": 1,
     "CON": 1,
     "INT": 4,
     "SAB": 4,
     "CAR": 1
    }
   }
  },
  "vampiro_senorial": {
   "nombre": "Vampiro Señorial",
   "na": 8,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "comandante",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Aterrado",
     "gratis": true
    },
    {
     "id": "absorber_vida",
     "txt": "Recupera PV iguales a la mitad del daño que inflige con su mordisco."
    },
    {
     "id": "voz_seductora",
     "txt": "2 PA · Ud6: una criatura a 30 pies, Salvación SAB CD 20 o Encantada (Ud6)."
    },
    {
     "id": "curacion_rapida",
     "txt": "Recupera 8 PV al inicio de su turno mientras le quede al menos 1 PV."
    },
    {
     "id": "trepadora",
     "txt": "Trepa a su velocidad por muros y techos."
    },
    {
     "id": "aversion",
     "txt": "No cruza un umbral sin ser invitado; los símbolos sagrados presentados con fe lo frenan."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño Radiante.",
     "nota": "Radiante"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante y Necrótico",
   "ataqueNombre": "Mordisco",
   "fuertes": [
    "CAR",
    "FUE"
   ],
   "debiles": [],
   "rolNota": "Aura de Mando: +2 al ataque de sus aliados a 30 pies; un aliado ataca como Reacción.",
   "senal": "Una familia noble que solo recibe de noche; sirvientes pálidos que no comen.",
   "contexto": "Nunca pelea solo y nunca pelea donde no quiere. Encanta a quien más daño hace, se cura con quien más cerca está y se retira por el techo cuando pierde la ventaja.",
   "impreso": {
    "pv": 106,
    "g": 16,
    "a": 4,
    "vel": 30,
    "atk": 8,
    "dano": "5d6+4",
    "cd": 20,
    "ini": 2,
    "moral": 18,
    "attrs": {
     "FUE": 4,
     "DES": 2,
     "CON": 2,
     "INT": 2,
     "SAB": 2,
     "CAR": 4
    }
   }
  },
  "hidra": {
   "nombre": "Hidra",
   "na": 8,
   "tipo": "monstruosidad",
   "tam": "enorme",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "gigantismo",
     "gratis": true
    },
    {
     "id": "varias_cabezas",
     "txt": "+1 PA por turno. Cada Crítico o golpe de 40 o más le arranca una cabeza y le quita ese PA; si no recibe Fuego esa ronda, al final de su turno le crecen dos."
    },
    {
     "id": "anfibia",
     "txt": "Nada a su velocidad y respira bajo el agua."
    },
    {
     "id": "ataque_barrido",
     "txt": "3 PA: una tirada contra cada criatura a su alcance; daño base a cada impactada."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Mordiscos",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT",
    "CAR"
   ],
   "rolNota": "Ataque Masivo (2 PA): aplica Sangrado sin tirada.",
   "senal": "Un lago donde ya no beben los animales; dientes del tamaño de un puñal en la orilla.",
   "contexto": "Cortarle la cabeza sin fuego la hace más peligrosa. El grupo necesita a alguien que corte y a alguien que queme, y que los dos estén en el mismo sitio a la vez.",
   "impreso": {
    "pv": 130,
    "g": 11,
    "a": 4,
    "vel": 30,
    "atk": 10,
    "dano": "6d6+6",
    "cd": 22,
    "ini": -3,
    "moral": null,
    "attrs": {
     "FUE": 6,
     "DES": -3,
     "CON": 5,
     "INT": -2,
     "SAB": 2,
     "CAR": -2
    }
   }
  },
  "serafin_ceniciento": {
   "nombre": "Serafín Ceniciento",
   "na": 9,
   "tipo": "extraplanar",
   "tam": "grande",
   "rol": "comandante",
   "estructura": "normal",
   "rasgos": [
    {
     "id": "telepatia",
     "gratis": true
    },
    {
     "id": "resistencia",
     "nota": "Fuego y Necrótico",
     "gratis": true
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 60 pies.",
     "nota": "60 pies"
    },
    {
     "id": "cuerpo_igneo",
     "txt": "Quien lo toque o golpee cuerpo a cuerpo recibe 3d6 de Fuego."
    },
    {
     "id": "presencia_consagrada",
     "txt": "Radio de 30 pies: sus aliados +1 a las Salvaciones; los no-muertos y los infernales atacan con Desventaja."
    },
    {
     "id": "resistencia_legendaria",
     "txt": "Ud6: cuando falla una Salvación, puede superarla."
    },
    {
     "id": "aversion",
     "txt": "No puede mentir ni romper un juramento; si se le hace jurar, lo cumple."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Radiante y Fuego",
   "ataqueNombre": "Espada",
   "fuertes": [
    "CAR",
    "FUE"
   ],
   "debiles": [],
   "rolNota": "Aura de Mando.",
   "senal": "Ceniza que cae de un cielo despejado; cánticos en una lengua que todos entienden.",
   "contexto": "Viene a cumplir una sentencia, no a pelear. Se le puede vencer, pero también se le puede hacer jurar: el grupo que entiende qué juró antes de llegar tiene una salida que no pasa por la espada.",
   "impreso": {
    "pv": 113,
    "g": 17,
    "a": 4,
    "vel": 30,
    "atk": 11,
    "dano": "6d6+6",
    "cd": 23,
    "ini": 2,
    "moral": 19,
    "attrs": {
     "FUE": 6,
     "DES": 2,
     "CON": 2,
     "INT": 2,
     "SAB": 2,
     "CAR": 5
    }
   }
  },
  "liche": {
   "nombre": "Liche",
   "na": 10,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "jefe",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "inmunidad_a_estados",
     "nota": "Envenenado y Aterrado",
     "gratis": true
    },
    {
     "id": "uso_de_axiomas",
     "txt": "Conoce tres Axiomas de hasta Nivel 5 (Erudición): Relámpago, Muro de Fuerza y Detener Monstruo; CD 23, Reserva 50."
    },
    {
     "id": "contraaxioma",
     "txt": "Reacción · Ud6: anula un Axioma de Nivel 5 o menos usado a 60 pies."
    },
    {
     "id": "resurgir",
     "txt": "Si no se destruye su filacteria, vuelve a formarse en 1d4 días."
    },
    {
     "id": "accion_de_jefe",
     "txt": "Al final del turno de cada personaje, gasta 1 PA de su siguiente turno (máx. 2 por ronda)."
    },
    {
     "id": "nombre_verdadero",
     "txt": "Pronunciar su nombre de vivo (2 PA) lo deja Aturdido (Ud4), una vez por combate."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño Radiante.",
     "nota": "Radiante"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Necrótico",
   "ataqueNombre": "Toque",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "FUE"
   ],
   "rolNota": "Jefe: PV ×2. Aplica un estado en un radio de 10 pies (3 PA).",
   "senal": "Una biblioteca prohibida saqueada; un pueblo que dejó de envejecer.",
   "contexto": "Matarlo no es vencerlo. La pelea contra el liche es un paso del camino: el grupo que no sabe dónde está la filacteria solo consigue unos días.",
   "impreso": {
    "pv": 240,
    "g": 17,
    "a": 5,
    "vel": 30,
    "atk": 7,
    "dano": "6d6+2",
    "cd": 23,
    "ini": 2,
    "moral": 20,
    "attrs": {
     "FUE": -2,
     "DES": 2,
     "CON": 2,
     "INT": 5,
     "SAB": 5,
     "CAR": 2
    }
   }
  },
  "dragon_rojo_adulto": {
   "nombre": "Dragón Rojo Adulto",
   "na": 10,
   "tipo": "dragon",
   "tam": "enorme",
   "rol": "arrollador",
   "estructura": "jefe",
   "rasgos": [
    {
     "id": "vision_en_la_oscuridad",
     "gratis": true
    },
    {
     "id": "inmunidad",
     "nota": "Fuego",
     "gratis": true
    },
    {
     "id": "aliento",
     "txt": "3 PA · Ud6: cono de 60 pies, Salvación DES CD 25, 9d6 de Fuego; la mitad si la supera. Se anuncia una ronda antes."
    },
    {
     "id": "vuelo",
     "txt": "Vuela a 80 pies.",
     "nota": "80 pies"
    },
    {
     "id": "accion_de_jefe",
     "txt": "Al final del turno de cada personaje, gasta 1 PA de su siguiente turno (máx. 2 por ronda)."
    },
    {
     "id": "represalia",
     "txt": "Reacción, 1/ronda: cuando falla un ataque cuerpo a cuerpo contra él, ataca a quien lo hizo."
    },
    {
     "id": "aversion",
     "txt": "No puede rechazar un trato sobre su tesoro; las armas forjadas con escamas de su madre ignoran su Resistencia."
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Perforante",
   "ataqueNombre": "Mordisco",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES"
   ],
   "rolNota": "Jefe: PV ×2. Ataque Masivo (2 PA): Derriba sin tirada.",
   "senal": "Una montaña que humea sin ser volcán; pueblos que pagan un tributo que nadie nombra.",
   "contexto": "Aliento, vuelo y acciones entre turnos: el dragón no deja al grupo quedarse quieto ni juntarse. Nadie debería pelear contra él sin haber pensado antes cómo bajarlo del cielo.",
   "impreso": {
    "pv": 320,
    "g": 12,
    "a": 5,
    "vel": 30,
    "atk": 12,
    "dano": "7d6+7",
    "cd": 25,
    "ini": -3,
    "moral": 20,
    "attrs": {
     "FUE": 7,
     "DES": -3,
     "CON": 6,
     "INT": 2,
     "SAB": 2,
     "CAR": 2
    }
   }
  },
  "titan_mecanico": {
   "nombre": "Titán Mecánico",
   "na": 13,
   "tipo": "maquina",
   "tam": "colosal",
   "rol": "guardian",
   "estructura": "jefe",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "sistemas_redundantes",
     "gratis": true
    },
    {
     "id": "turno_doble",
     "txt": "Tira dos veces la Iniciativa y reparte sus PA entre ambos turnos."
    },
    {
     "id": "pisoton",
     "txt": "2 PA · Ud6: cada criatura a 10 pies, Salvación FUE CD 29 o Derribada."
    },
    {
     "id": "escudo_de_energia",
     "txt": "Absorbe los primeros 39 puntos de daño de cada combate."
    },
    {
     "id": "arma_montada",
     "txt": "2 PA: ataque a distancia hasta 120 pies con el daño base."
    },
    {
     "id": "fases",
     "txt": "Por debajo de la mitad de sus PV, el blindaje cae (−2 de Armadura) y se abre su núcleo (Cap. 5)."
    },
    {
     "id": "autodestruccion",
     "txt": "Al llegar a 0 PV, explota al final de la ronda siguiente en 20 pies; desactivarlo: Tecnología CD 29."
    },
    {
     "id": "vulnerabilidad",
     "txt": "Recibe ×1,5 de daño de Rayo.",
     "nota": "Rayo"
    }
   ],
   "fuente": "Manual de Monstruos",
   "danoTipo": "Contundente",
   "ataqueNombre": "Puños",
   "fuertes": [
    "CON",
    "FUE"
   ],
   "debiles": [
    "CAR"
   ],
   "rolNota": "Jefe: PV ×2. Custodia (Reacción).",
   "senal": "El suelo tiembla a intervalos regulares; una ciudad entera evacuada sin explicación.",
   "contexto": "No se puede vencer desde fuera. El grupo tiene que subir, encontrar el núcleo que la fase deja al descubierto y salir antes de que la autodestrucción los alcance.",
   "impreso": {
    "pv": 438,
    "g": 14,
    "a": 7,
    "vel": 20,
    "atk": 15,
    "dano": "8d6+9",
    "cd": 29,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 9,
     "DES": -2,
     "CON": 8,
     "INT": 3,
     "SAB": 3,
     "CAR": -2
    }
   }
  },
  "colmena_xenomorfa": {
   "nombre": "Colmena Xenomorfa",
   "na": 3,
   "tipo": "monstruosidad",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "horda",
   "rasgos": [
    {
     "id": "colmena",
     "txt": "Mientras viva la reina, no tiran Moral y comparten lo que perciben."
    },
    {
     "id": "trepadora",
     "txt": "Trepan a su velocidad por muros y techos."
    },
    {
     "id": "sangre_acida",
     "txt": "Quien les hace daño Cortante o Perforante cuerpo a cuerpo recibe 1d6 de Ácido."
    }
   ],
   "fuente": "Manual de Monstruos",
   "miembros": 8,
   "danoTipo": "Perforante",
   "ataqueNombre": "Garras y colas",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON"
   ],
   "senal": "Conductos de ventilación con marcas de ácido; los sensores de movimiento marcan una sola señal muy grande.",
   "contexto": "Parece un enemigo y son ocho. Llegan por el techo, rodean y se separan en dos cuando se les hiere. Matar a la reina es la única forma de que dejen de coordinarse.",
   "impreso": {
    "pv": 71,
    "g": 18,
    "a": 3,
    "vel": 40,
    "atk": 8,
    "dano": "5d6+4",
    "cd": 19,
    "ini": 4,
    "moral": null,
    "attrs": {
     "FUE": 4,
     "DES": 4,
     "CON": -2,
     "INT": 1,
     "SAB": 1,
     "CAR": 1
    }
   }
  },
  "enjambre_de_nanitos": {
   "nombre": "Enjambre de Nanitos",
   "na": 1,
   "tipo": "maquina",
   "tam": "diminuto",
   "rol": "",
   "estructura": "horda",
   "rasgos": [
    {
     "id": "vigor_inagotable",
     "gratis": true
    },
    {
     "id": "sistemas_redundantes",
     "gratis": true
    },
    {
     "id": "enjambre",
     "txt": "Ocupa el espacio de otras criaturas, Resistencia a ataques contra un solo objetivo, doble daño de área",
     "gratis": true
    },
    {
     "id": "acido_corrosivo",
     "txt": "Su ataque añade 1d6 de Ácido y aplica Desgarro (Ud6): se comen la armadura."
    }
   ],
   "fuente": "Manual de Monstruos",
   "miembros": 6,
   "danoTipo": "Energía",
   "ataqueNombre": "",
   "fuertes": [
    "CON",
    "INT"
   ],
   "debiles": [],
   "senal": "Un brillo metálico en el aire; puertas de acero con agujeros como encaje.",
   "contexto": "No se le puede cortar ni golpear con eficacia. El grupo necesita un área —fuego, un pulso, una descarga— o una puerta que el enjambre no pueda atravesar a tiempo.",
   "impreso": {
    "pv": 71,
    "g": 14,
    "a": 1,
    "vel": 30,
    "atk": 4,
    "dano": "3d6+1",
    "cd": 15,
    "ini": 1,
    "moral": null,
    "attrs": {
     "FUE": -2,
     "DES": 1,
     "CON": 2,
     "INT": 3,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "lobo": {
   "nombre": "Lobo",
   "na": 1,
   "tipo": "bestia",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Caza en Manada",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Ventaja en todos los ataques si otro lobo está adyacente al mismo objetivo."
    },
    {
     "custom": true,
     "name": "Derribador",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Cuando un lobo impacta, el objetivo hace Salvación DES CD 12 o queda Derribado."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante",
   "ataqueNombre": "",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON",
    "INT"
   ],
   "contexto": "Los lobos raramente están solos. El peligro no es el daño individual — es la combinación de Caza en Manada (Ventaja constante) y Derribador (los derribados son atacados con Ventaja por los demás). Un grupo de cinco lobos que tira con Ventaja sobre un personaje Derribado es amenaza seria incluso para un Audaz bien acorazado: son muchos golpes pequeños, y la Armadura los frena bien, pero el Derribo multiplica los impactos hasta que la aritmética se invierte. El Alfa del grupo (NA 2, +2 daño) actúa siempre último y apunta al objetivo ya Derribado. La táctica correcta: evitar el Derribo y eliminar al Alfa primero para desmoralizar a la manada (comprobación de Moral (Puntuación 10) al caer el Alfa).",
   "impreso": {
    "pv": 53,
    "g": 14,
    "a": 0,
    "vel": 40,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 12,
    "ini": 2,
    "moral": null,
    "attrs": {
     "FUE": 2,
     "DES": 2,
     "CON": -2,
     "INT": -2,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "esqueleto": {
   "nombre": "Esqueleto",
   "na": 1,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Inmune",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Veneno, Enfermedad, Encantamiento y Miedo"
    },
    {
     "custom": true,
     "name": "Vulnerable al daño Contundente (×1,5)",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Vulnerable al daño Contundente (×1,5)"
    },
    {
     "custom": true,
     "name": "Muerto-Vivo",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "No necesita respirar, comer, dormir ni mantener Concentración para funcionar."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante",
   "ataqueNombre": "",
   "fuertes": [
    "DES",
    "CON"
   ],
   "debiles": [
    "INT",
    "CAR"
   ],
   "contexto": "Los esqueletos son obstáculos de desgaste, no amenazas individuales. Su valor táctico real es dos cosas: la inmunidad al Miedo (no tiran Moral) y la vulnerabilidad al Contundente (que los jugadores tienen que descubrir o deducir). Un DJ que coloca esqueletos armados con mazas y armados con espadas en el mismo pasillo está invitando a una pregunta táctica: ¿cómo atacarlos de forma eficiente? Los jugadores que descubren la vulnerabilidad al Contundente se sienten recompensados. Los que no la descubren aprenden que la información del entorno tiene valor.",
   "impreso": {
    "pv": 57,
    "g": 14,
    "a": 0,
    "vel": 30,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 12,
    "ini": 2,
    "moral": null,
    "attrs": {
     "FUE": 0,
     "DES": 2,
     "CON": 2,
     "INT": -2,
     "SAB": 0,
     "CAR": -2
    }
   }
  },
  "zombie": {
   "nombre": "Zombie",
   "na": 1,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Inmune a Veneno, Enfermedad y Miedo",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Veneno, Enfermedad y Miedo"
    },
    {
     "custom": true,
     "name": "Obstinación No-muerta",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Cuando llega a 0 PV, tira 1d20. Con resultado 8 o más, se mantiene en 1 PV en lugar de caer. Este efecto no puede activarse dos veces seguidas en el mismo zombie."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Contundente",
   "ataqueNombre": "",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT",
    "CAR"
   ],
   "contexto": "Los zombies son lentos, fáciles de golpear y difíciles de matar definitivamente en el primer intento. Su amenaza es el desgaste numérico y la imprevisibilidad de Obstinación No-muerta: el grupo que cree haber eliminado una amenaza puede encontrarla de pie al inicio del siguiente turno.\n\nEn grupos de 6–10 en un espacio cerrado, los zombies convierten el combate en gestión de recursos más que en táctica individual. Útiles para enseñar al grupo la lección contraria a la que enseña un enemigo acorazado: con Guardia 10 y Armadura 0, el zombie es el objetivo ideal para los ataques ligeros y repetidos, que aquí rinden más que un único golpe pesado. Un grupo que aprende a leer Guardia y Armadura antes de elegir cómo pegar acierta el doble de veces.",
   "manual": {
    "vel": 20
   },
   "impreso": {
    "pv": 57,
    "g": 10,
    "a": 0,
    "vel": 20,
    "atk": 4,
    "dano": "3d6+2",
    "cd": 12,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 2,
     "DES": -2,
     "CON": 2,
     "INT": -2,
     "SAB": 0,
     "CAR": -2
    }
   }
  },
  "orco": {
   "nombre": "Orco",
   "na": 2,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Agresivo",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Puede moverse su velocidad completa hacia un objetivo como parte de la misma acción que atacar (1 PA de movimiento + 2 PA de ataque = 3 PA, sin coste adicional)."
    },
    {
     "custom": true,
     "name": "Tenacidad Orca",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "La primera vez en el combate que llega a 0 PV, se mantiene en 1 PV y realiza un Ataque de Oportunidad gratuito contra quien lo redujo."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante",
   "ataqueNombre": "",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES"
   ],
   "contexto": "Un orco solo es un encuentro menor. Un grupo de orcos con un Jefe de Tribu (NA 4, Rol Comandante) es una amenaza de diseño: los orcos comunes son Agresivos y Tenaces, el Jefe tiene Aura de Mando que hace que sus Ataques de Oportunidad sean especialmente dolorosos, y eliminar al Jefe cambia la Moral del grupo completo (Puntuación de Moral 12). Funcionan bien con Rol Arrollador (más PV y daño, menos Guardia) o Rol Hostigador (+2 Guardia, flanquea constantemente).",
   "manual": {
    "armadura": 2
   },
   "impreso": {
    "pv": 64,
    "g": 10,
    "a": 2,
    "vel": 30,
    "atk": 4,
    "dano": "3d6+2",
    "cd": 13,
    "ini": -2,
    "moral": 12,
    "attrs": {
     "FUE": 2,
     "DES": -2,
     "CON": 2,
     "INT": 0,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "oso_pardo": {
   "nombre": "Oso Pardo",
   "na": 3,
   "tipo": "bestia",
   "tam": "grande",
   "rol": "arrollador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Trepar 30 pies",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Trepar 30 pies"
    },
    {
     "custom": true,
     "name": "Garras y Mordida",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "El oso ataca con las garras y, si impacta, muerde sin tirada adicional: su daño por turno (4d6+4) se reparte entre los dos golpes.",
     "coste": "3 PA"
    },
    {
     "custom": true,
     "name": "Abrazar",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Si el ataque de garras inflige 8 o más puntos de daño, el objetivo queda Apresado hasta que el oso decida soltarlo o sea abatido. Un objetivo Apresado no puede moverse y el oso tiene Ventaja en sus ataques contra él."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante y Perforante",
   "ataqueNombre": "",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES",
    "INT"
   ],
   "contexto": "El oso es una amenaza de territorio, no de mazmorra. Aparece porque el grupo entró en su zona, porque hay crías cerca (lo que transforma el encuentro en un dilema moral: matar a un animal que defiende su progenie), o como custodio accidental de algo que el grupo necesita. Mecánicamente, la combinación de Abrazar y Garras-Mordida puede eliminar a un Sagaz en un turno si el oso lo elige como objetivo. La táctica del grupo debe ser romper el Agarre rápidamente antes de que el ciclo de daño se establezca.",
   "manual": {
    "vel": 40
   },
   "impreso": {
    "pv": 74,
    "g": 11,
    "a": 1,
    "vel": 40,
    "atk": 7,
    "dano": "4d6+4",
    "cd": 16,
    "ini": -2,
    "moral": null,
    "attrs": {
     "FUE": 4,
     "DES": -2,
     "CON": 3,
     "INT": -2,
     "SAB": 0,
     "CAR": 0
    }
   }
  },
  "azotamente": {
   "nombre": "Azotamente",
   "na": 7,
   "tipo": "aberracion",
   "tam": "mediano",
   "rol": "represor",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Volar 30 pies",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Volar 30 pies"
    },
    {
     "custom": true,
     "name": "Inmune a Encantamiento",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Encantamiento"
    },
    {
     "custom": true,
     "name": "Resistente a daño Psíquico",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Resistente a daño Psíquico"
    },
    {
     "custom": true,
     "name": "Explosión Mental",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Cono de 60 pies. Todos en el cono hacen Salvación INT CD 19. Fallo: 5d6 de daño Psíquico y estado Aturdido. Éxito: la mitad del daño, sin Aturdido. Tras usarla, tira su Ud6 (Manual de Monstruos, Cap. 3).",
     "coste": "3 PA",
     "frec": "Ud6"
    },
    {
     "custom": true,
     "name": "Extracción Cerebral",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Solo contra un objetivo a 0 PV que además esté Aturdido (la Inconsciencia no anula el Aturdido a estos efectos). El objetivo muere instantáneamente y el Azotamente recupera 20 PV. Además, su cuerpo queda siendo un esclavo (zombie) al servicio del Azotamente.",
     "coste": "1 PA"
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Psíquico",
   "ataqueNombre": "",
   "fuertes": [
    "INT",
    "SAB"
   ],
   "debiles": [
    "FUE"
   ],
   "contexto": "El Azotamente es una amenaza de conocimiento, no de estadísticas brutas. Un grupo que no entiende su ciclo (Explosión Mental → objetivos Aturdidos → Extracción Cerebral) puede perder un personaje de forma permanente. La clave táctica es evitar estar Aturdido cuando un aliado está en 0 PV, o sacar al aliado de 0 PV antes de que el Azotamente pueda gastar el 1 PA de Extracción. Un Sagaz con Axioma de curación en turno de aliado Aturdido (gastando su Reacción si tiene el Talento correspondiente) puede salvar una vida. El Azotamente vuela, lo que complica el posicionamiento del Audaz como anclaje táctico.",
   "impreso": {
    "pv": 92,
    "g": 15,
    "a": 3,
    "vel": 30,
    "atk": 5,
    "dano": "5d6+1",
    "cd": 19,
    "ini": 1,
    "moral": 17,
    "attrs": {
     "FUE": -2,
     "DES": 1,
     "CON": 1,
     "INT": 4,
     "SAB": 4,
     "CAR": 1
    }
   }
  },
  "gigante_de_la_tormenta": {
   "nombre": "Gigante de la Tormenta",
   "na": 8,
   "tipo": "gigante",
   "tam": "enorme",
   "rol": "arrollador",
   "estructura": "jefe",
   "rasgos": [
    {
     "custom": true,
     "name": "Inmune a Rayo, Aturdido y Derribado",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Rayo, Aturdido y Derribado"
    },
    {
     "custom": true,
     "name": "Lanzamiento de Rayo",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Línea de 90 pies. Todos en la línea hacen Salvación DES CD 22. Fallo: 5d6 de daño de Rayo. Éxito: la mitad.",
     "coste": "3 PA",
     "frec": "Ud6"
    },
    {
     "custom": true,
     "name": "Aplastamiento",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Cuando el ataque de mazo impacta, el objetivo hace Salvación CON CD 22 o queda Aturdido hasta el inicio del turno del Gigante."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Contundente",
   "ataqueNombre": "",
   "fuertes": [
    "FUE",
    "CON"
   ],
   "debiles": [
    "DES"
   ],
   "contexto": "Con 260 PV, Guardia 11, Armadura 5 y Ataque +10, el Gigante de la Tormenta es un jefe de arco, no un encuentro de pasillo. Su Armadura 5 castiga especialmente a los personajes que atacan muchas veces con dados pequeños.\n\nLo que lo hace interesante no son sus estadísticas — es que puede hablar y tiene motivaciones. Un Gigante que el grupo intenta matar directamente es un combate difícil. Un Gigante al que el grupo descubre que protege un valle de su tribu, y con el que pueden negociar, es un arco de campaña. El Lanzamiento de Rayo obliga al grupo a dispersarse (línea de 90 pies puede atravesar toda la formación). El Aplastamiento sobre el Audaz puede bloquearlo con Bloqueo Enfrentado, pero a un coste de Adrenalina significativo.",
   "manual": {
    "armadura": 5,
    "vel": 50
   },
   "impreso": {
    "pv": 260,
    "g": 11,
    "a": 5,
    "vel": 50,
    "atk": 10,
    "dano": "6d6+6",
    "cd": 22,
    "ini": -3,
    "moral": 18,
    "attrs": {
     "FUE": 6,
     "DES": -3,
     "CON": 5,
     "INT": 2,
     "SAB": 2,
     "CAR": 2
    }
   }
  },
  "licantropo": {
   "nombre": "Licántropo",
   "na": 4,
   "tipo": "monstruosidad",
   "tam": "mediano",
   "rol": "hostigador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Inmune a daño no mágico sin plata",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a daño no mágico sin plata"
    },
    {
     "custom": true,
     "name": "Regeneración",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Regeneración: 8 PV al inicio de cada turno (salvo daño de plata o Radiante)"
    },
    {
     "custom": true,
     "name": "Maldición de la Luna",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Cuando la mordida inflige 8 o más puntos de daño, el objetivo hace Salvación CON CD 16. Fallo: contrae Licantropía incipiente (síntomas en la próxima luna llena)."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante",
   "ataqueNombre": "",
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON"
   ],
   "contexto": "El hombre lobo es el encuentro que funciona mejor cuando el grupo lo conoce como persona antes de saber que es lo que es. Mecánicamente, la combinación de Regeneración (8 PV por turno) e Inmunidad a daño no mágico sin plata obliga al grupo a tener la herramienta correcta o gestionar el combate de forma inusual: el daño de Axiomas y el daño mágico sí aplican, lo que convierte al Sagaz en el combatiente más efectivo por primera y probablemente única vez en el arco. La Maldición de la Luna es la presión de campaña real: la cuestión no es si el grupo puede matar al hombre lobo, sino si quiere hacerlo, si puede curarlo, y qué pasa si un miembro del grupo contrajo la Maldición.",
   "impreso": {
    "pv": 62,
    "g": 16,
    "a": 2,
    "vel": 40,
    "atk": 6,
    "dano": "3d6+3",
    "cd": 16,
    "ini": 3,
    "moral": 14,
    "attrs": {
     "FUE": 3,
     "DES": 3,
     "CON": -2,
     "INT": 1,
     "SAB": 1,
     "CAR": 1
    }
   }
  },
  "caballero_de_la_muerte": {
   "nombre": "Caballero de la Muerte",
   "na": 9,
   "tipo": "no_muerto",
   "tam": "mediano",
   "rol": "comandante",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Inmune a Veneno y Frío",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Veneno y Frío"
    },
    {
     "custom": true,
     "name": "Resistente",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Resistente a Necrótico y a daño físico no mágico"
    },
    {
     "custom": true,
     "name": "Aura de Conquista",
     "tipo": "Aura",
     "peso": 0,
     "txt": "Radio de 30 pies: las criaturas dentro del aura que reciben daño del Caballero tienen Desventaja en todas las Salvaciones contra Miedo y en sus tiradas de Moral."
    },
    {
     "custom": true,
     "name": "Llamada Infernal",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Convoca 2d4 no-muertos de NA 1 en espacios adyacentes vacíos.",
     "coste": "3 PA",
     "frec": "Ud6"
    },
    {
     "custom": true,
     "name": "Marca Espectral",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Cuando el Caballero impacta a un objetivo, ese objetivo queda Marcado. El Caballero tiene Ventaja en todos los ataques contra objetivos Marcados y puede teletransportarse (2 PA) a un espacio adyacente a cualquier objetivo Marcado en su línea de visión."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante y Necrótico",
   "ataqueNombre": "",
   "fuertes": [
    "CAR",
    "FUE"
   ],
   "debiles": [],
   "contexto": "El Caballero de la Muerte (Guardia 17, Armadura 6, 113 PV, Ataque +10) es un desafío de diseño de encuentro. Con Guardia 17, un Audaz de Nivel 9 con PB +4 y FUE +3 impacta con 10 o más en 1d20 —alrededor del 55 %— pero su Armadura 6 se come buena parte de cada golpe. Contra él, el Esfuerzo volcado en daño y las armas Penetrantes rinden mucho más que acumular ataques pequeños. La Llamada Infernal genera presión de área que obliga al grupo a dividir la atención. La Marca Espectral convierte la movilidad del Caballero en una amenaza adicional: puede teletransportarse al Sagaz al fondo de la sala si lo Marcó en el primer turno.\n\nPero lo más poderoso del Caballero de la Muerte como elemento de diseño es su historia: fue un héroe. Tiene un nombre, una tumba, una razón por la que no está en paz. El grupo que descubre esa historia puede tener una vía alternativa: no destruirlo, sino redimirlo o liberarlo. Si lo intenta y falla, el combate es más tenso porque las apuestas eran mayores.",
   "manual": {
    "armadura": 6
   },
   "impreso": {
    "pv": 113,
    "g": 17,
    "a": 6,
    "vel": 30,
    "atk": 10,
    "dano": "6d6+5",
    "cd": 22,
    "ini": 2,
    "moral": 19,
    "attrs": {
     "FUE": 5,
     "DES": 2,
     "CON": 2,
     "INT": 2,
     "SAB": 2,
     "CAR": 5
    }
   }
  },
  "jefe_de_tribu": {
   "nombre": "Jefe de Tribu",
   "na": 4,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "comandante",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Aura de Mando",
     "tipo": "Aura",
     "peso": 0,
     "txt": "Radio de 30 pies: los aliados dentro del aura ganan +2 al ataque. Una vez por ronda, como Reacción, ordena a un aliado del aura que ataque."
    },
    {
     "custom": true,
     "name": "Voz de Guerra",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "La primera vez que un aliado cae dentro del aura, los demás no tiran Moral hasta el final del siguiente turno del Jefe."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Cortante",
   "ataqueNombre": "",
   "fuertes": [
    "CAR",
    "FUE"
   ],
   "debiles": [],
   "contexto": "El Jefe no está para ganar el duelo: está para que su banda pelee mejor. Se queda un paso por detrás de la primera línea y dirige el ataque hacia quien quede expuesto. Abatirlo apaga el Aura y obliga a toda la banda a tirar Moral; por eso un grupo listo gasta su primer turno en llegar hasta él, y un Jefe listo lo sabe.",
   "impreso": {
    "pv": 74,
    "g": 14,
    "a": 2,
    "vel": 30,
    "atk": 6,
    "dano": "3d6+3",
    "cd": 16,
    "ini": 1,
    "moral": 14,
    "attrs": {
     "FUE": 3,
     "DES": 1,
     "CON": 1,
     "INT": 1,
     "SAB": 1,
     "CAR": 3
    }
   }
  },
  "acolito_de_la_ceniza": {
   "nombre": "Acólito de la Ceniza",
   "na": 3,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "soporte",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Bálsamo de Ceniza",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Un aliado a 30 pies recupera 1d8 PV o se libra de un estado.",
     "coste": "2 PA"
    },
    {
     "custom": true,
     "name": "Tras la Línea",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Mientras un aliado esté entre él y el atacante, los ataques a distancia contra el Acólito se hacen con Desventaja."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Contundente",
   "ataqueNombre": "",
   "fuertes": [
    "SAB",
    "CAR"
   ],
   "debiles": [
    "CON"
   ],
   "contexto": "El Acólito no pega: sostiene a los suyos. Su trabajo es que nadie llegue hasta él. Colócalo detrás de dos Arrolladores y deja que cure cada ronda: el grupo aprende enseguida que el enemigo que no ataca es el que más importa.",
   "impreso": {
    "pv": 59,
    "g": 13,
    "a": 1,
    "vel": 30,
    "atk": 3,
    "dano": "3d6",
    "cd": 15,
    "ini": 0,
    "moral": 13,
    "attrs": {
     "FUE": 0,
     "DES": 0,
     "CON": -2,
     "INT": 0,
     "SAB": 3,
     "CAR": 3
    }
   }
  },
  "batidor": {
   "nombre": "Batidor",
   "na": 2,
   "tipo": "humanoide",
   "tam": "mediano",
   "rol": "explorador",
   "estructura": "normal",
   "rasgos": [
    {
     "custom": true,
     "name": "Primero en Llegar",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Ventaja en todas sus tiradas durante su primer turno de combate."
    },
    {
     "custom": true,
     "name": "Dar la Alarma",
     "tipo": "Aptitud",
     "peso": 0,
     "txt": "Si ve al grupo antes de ser visto, puede renunciar a atacar y marcharse. Si llega a los suyos, el Reloj de Amenaza de la zona avanza un paso.",
     "coste": "1 PA"
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Perforante",
   "ataqueNombre": "Arco",
   "fuertes": [
    "DES",
    "SAB"
   ],
   "debiles": [],
   "contexto": "El Batidor casi nunca es el combate: es lo que decide si hay combate. Ponlo antes del encuentro principal y deja que los jugadores decidan si lo persiguen (p. 41), lo dejan ir o lo esperan en una emboscada.",
   "impreso": {
    "pv": 60,
    "g": 14,
    "a": 1,
    "vel": 45,
    "atk": 4,
    "dano": "2d6+2",
    "cd": 13,
    "ini": 6,
    "moral": 12,
    "attrs": {
     "FUE": 0,
     "DES": 2,
     "CON": 0,
     "INT": 0,
     "SAB": 2,
     "CAR": 0
    }
   }
  },
  "enjambre_de_ratas": {
   "nombre": "Enjambre de Ratas",
   "na": 1,
   "tipo": "bestia",
   "tam": "diminuto",
   "rol": "hostigador",
   "estructura": "horda",
   "rasgos": [
    {
     "custom": true,
     "name": "Trepar 20 pies",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Trepar 20 pies"
    },
    {
     "custom": true,
     "name": "Inmune a Derribado y Apresado",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Inmune a Derribado y Apresado"
    },
    {
     "custom": true,
     "name": "Horda",
     "tipo": "Rasgo",
     "peso": 0,
     "txt": "Actúa como una sola criatura con un solo turno. Recibe el doble de daño de área. A la mitad de sus PV se divide en dos enjambres de NA 1 que actúan por separado."
    },
    {
     "custom": true,
     "name": "Mordisco Sucio",
     "tipo": "Reacción",
     "peso": 0,
     "txt": "Quien reciba daño del enjambre hace Salvación CON CD 16 o sufre +1 escalón de Fatiga al terminar la escena."
    }
   ],
   "fuente": "Guía del Director",
   "danoTipo": "Perforante",
   "ataqueNombre": "",
   "miembros": 6,
   "fuertes": [
    "DES",
    "FUE"
   ],
   "debiles": [
    "CON",
    "INT",
    "CAR"
   ],
   "contexto": "El enjambre enseña el valor del área: una antorcha o un Axioma bien colocado vale más que tres espadas. En un pasillo estrecho es un obstáculo; en una bodega con víveres, es un Ud de Raciones perdido si nadie lo espanta a tiempo.",
   "manual": {
    "vel": 30
   },
   "impreso": {
    "pv": 56,
    "g": 17,
    "a": 1,
    "vel": 30,
    "atk": 7,
    "dano": "3d6+4",
    "cd": 16,
    "ini": 4,
    "moral": null,
    "attrs": {
     "FUE": -2,
     "DES": 4,
     "CON": -3,
     "INT": -2,
     "SAB": 0,
     "CAR": -2
    }
   }
  }
 },
 "tablas": {
  "fases": {
   "name": "Fases de jefe (d12)",
   "filas": [
    "Se libera: rompe sus cadenas, su armadura cae, su forma real aparece. +1 PA, −2 de Armadura.",
    "Cambia de terreno: el suelo se hunde, el techo se abre, el agua entra. Todo el campo pasa a ser terreno difícil salvo donde él está.",
    "Llama a los suyos: aparecen 1d4 criaturas de NA igual a la mitad del suyo.",
    "Se aferra a algo: un pilar, un altar, un rehén. Mientras lo toque, Resistencia a todo daño.",
    "Se desespera: pierde Represalia y cualquier Reacción defensiva, pero su daño sube un paso.",
    "Se divide: se separa en dos con la mitad de sus PV restantes cada uno.",
    "Huye hacia su núcleo: intenta llegar a un lugar donde regenerarse. El combate se convierte en persecución.",
    "Recupera su Aptitud más poderosa: su Ud vuelve a Ud6.",
    "Revela una verdad: dice o muestra algo que cambia por qué el grupo está luchando.",
    "Se vuelve contra su propio bando: ataca a sus aliados para alimentarse o por furia.",
    "Aura nueva: gana Pavor, Aura Tóxica u Oscuridad Viva durante el resto del combate.",
    "Ofrece un trato: se detiene y negocia. Si el grupo se niega, recupera 1d4 × NA PV."
   ]
  },
  "guarida": {
   "name": "Acciones de Guarida (d12)",
   "filas": [
    "Derrumbe: un área de 10 pies a su elección; Salvación DES contra la CD o la mitad del daño base y Derribado.",
    "Oscuridad: todas las fuentes de luz no mágica se apagan hasta el final de la ronda siguiente.",
    "Corriente: el agua, el viento o el vapor empuja 10 pies a cada criatura en una línea.",
    "Ecos: la criatura sabe dónde está cada personaje; ninguno puede ocultarse hasta la siguiente ronda.",
    "Grietas: una zona de 15 pies se convierte en terreno difícil o se abre un paso nuevo para la criatura.",
    "Nido: 1d4 criaturas de NA 0 o 1 salen de las paredes.",
    "Gas: nube de 10 pies; Salvación CON contra la CD o Envenenado (Ud4).",
    "Sellado: una salida se cierra (puerta, reja, derrumbe). Abrirla: Proeza Física contra la CD.",
    "Resonancia: los Axiomas usados esta ronda cuestan 2 puntos más de Reserva.",
    "Latido: la criatura recupera NA PV.",
    "Ilusión del lugar: una parte de la sala parece distinta de lo que es hasta que alguien la toca.",
    "Calor o frío extremo: cada personaje hace Salvación CON contra la CD o sufre 1 escalón de Fatiga."
   ]
  },
  "victoria": {
   "name": "Victoria alternativa (d10): el combate termina si el grupo…",
   "filas": [
    "…rompe los tres sellos que lo atan al lugar.",
    "…saca al rehén de la sala.",
    "…apaga el ritual antes de que se complete el Reloj.",
    "…lo convence de que su amo ha muerto.",
    "…destruye el objeto que lleva al cuello.",
    "…lo obliga a salir a la luz del día.",
    "…sobrevive hasta que se derrumba la sala o llega el alba.",
    "…pronuncia su nombre verdadero tres veces en la misma ronda.",
    "…le devuelve lo que se le robó.",
    "…lo derrota en su propio juego: un duelo, un acertijo, una apuesta."
   ]
  },
  "bandas": {
   "name": "Composición de bandas (d12)",
   "filas": [
    "Un Comandante y dos grupos de esbirros.",
    "Un Arrollador y un Represor que lo cubre.",
    "Tres Hostigadores y un Explorador que avisa.",
    "Un Guardián y dos Artilleros detrás de él.",
    "Una horda y un Soporte que la mantiene unida.",
    "Dos Acechadores y un señuelo que atrae al grupo.",
    "Un jefe solo en su guarida.",
    "Un jefe y cuatro esbirros que se sacrifican por él.",
    "Dos Arrolladores rivales que se detestan (Moral −2 si uno cae).",
    "Un Represor invisible y una bestia que somete.",
    "Un enjambre y la criatura que lo pastorea.",
    "Una Anomalía y sus fieles (Cap. 8)."
   ]
  },
  "forma": {
   "name": "Aspecto: forma base (d20)",
   "filas": [
    "Felina",
    "Reptil",
    "Insecto",
    "Arácnida",
    "Ave",
    "Pez o anfibio",
    "Canina",
    "Humana, casi",
    "Serpentina",
    "Cefalópodo",
    "Hongo",
    "Árbol o raíz",
    "Estatua",
    "Autómata",
    "Nube o niebla",
    "Fuego o luz",
    "Líquido",
    "Sombra",
    "Geométrica",
    "Dos animales cosidos"
   ]
  },
  "rasgoVisible": {
   "name": "Aspecto: rasgo visible (d20)",
   "filas": [
    "Demasiados ojos",
    "Piel translúcida",
    "Cubierta de pelo blanco",
    "Huesos por fuera",
    "Cristales que crecen de la espalda",
    "Máscara que no se quita",
    "Una segunda boca",
    "Cables bajo la piel",
    "Brilla en la oscuridad",
    "Siempre mojada",
    "Sin sombra",
    "Huele a flores",
    "Cicatrices de runas",
    "Coronada de humo",
    "Extremidades de más",
    "Voz de niño",
    "Ropa de otra época",
    "Metálica y oxidada",
    "Parpadea al moverse",
    "Tira dos veces"
   ]
  },
  "mueve": {
   "name": "Aspecto: se mueve… (d12)",
   "filas": [
    "a cuatro patas",
    "reptando",
    "volando",
    "bajo tierra",
    "por las paredes",
    "nadando",
    "flotando",
    "a saltos",
    "sobre ruedas u orugas",
    "rodando",
    "a través de las sombras",
    "no se mueve: espera"
   ]
  },
  "ataca": {
   "name": "Aspecto: ataca con… (d12)",
   "filas": [
    "garras",
    "mordisco",
    "aguijón o cola",
    "tentáculos",
    "un arma",
    "escupitajo o proyectiles",
    "aplastamiento",
    "la mirada",
    "la voz",
    "energía",
    "toque",
    "no ataca: atrapa"
   ]
  },
  "quiere": {
   "name": "Comportamiento: qué quiere (d20)",
   "filas": [
    "Comer",
    "Proteger sus crías",
    "Defender su territorio",
    "Cumplir una orden",
    "Recuperar algo robado",
    "Vengarse",
    "Escapar",
    "Coleccionar",
    "Reproducirse",
    "Jugar",
    "Ser adorada",
    "Saber",
    "Terminar una tarea antigua",
    "Volver a casa",
    "Que nadie cruce",
    "Negociar",
    "Nada: está enferma",
    "Dormir",
    "Convertir a otros en lo que es",
    "Morir, y no puede"
   ]
  },
  "pelea": {
   "name": "Comportamiento: cómo pelea (d12)",
   "filas": [
    "Carga contra el más grande",
    "Busca al que está solo",
    "Huye y vuelve",
    "Solo pelea acorralada",
    "Ataca a quien la hirió primero",
    "Se ceba con el caído",
    "Desarma y se lleva cosas",
    "Usa a sus aliados como escudo",
    "Espera a que se separen",
    "Grita y avisa a otros",
    "Se retira a su guarida",
    "No se detiene hasta morir"
   ]
  },
  "habitat": {
   "name": "Hábitat (d20)",
   "filas": [
    "Bosque viejo",
    "Pantano",
    "Cavernas",
    "Ruinas",
    "Montaña",
    "Desierto",
    "Costa",
    "Alcantarillas",
    "Ciudad",
    "Cementerio",
    "Mina",
    "Nave o estación",
    "Laboratorio",
    "Templo",
    "Mar abierto",
    "Tundra",
    "Volcán",
    "Cielo",
    "Otro plano",
    "Donde nadie mira"
   ]
  },
  "senal": {
   "name": "La señal (d20)",
   "filas": [
    "Huesos roídos y ordenados",
    "Silencio total: ni pájaros",
    "Marcas de garras a tres metros",
    "Un olor dulce, a fruta pasada",
    "Hilos o secreciones",
    "Ganado desaparecido",
    "Un canto por la noche",
    "Frío repentino",
    "Estatuas que no estaban",
    "Aparatos quemados",
    "Un superviviente que no habla",
    "Huellas que empiezan de la nada",
    "Plantas muertas en círculo",
    "Sangre que no se seca",
    "Símbolos rayados en las puertas",
    "Una ofrenda reciente",
    "Los perros no se acercan",
    "Un sonido metálico rítmico",
    "Todos sueñan lo mismo",
    "Ninguna: eso es la señal"
   ]
  },
  "botinCae": {
   "name": "Lo que deja al caer (d12)",
   "filas": [
    "Nada útil, pero sí una pista sobre quién la envió.",
    "Un órgano valioso para un alquimista (NA × 20 pp).",
    "Piel o placas para una armadura (Artesanía; NA × 50 pp de ahorro).",
    "Veneno o glándula (1d4 dosis de su Aguijón o su Aliento).",
    "Objetos de sus víctimas: 1d6 × NA × 10 pp.",
    "Un objeto Infrecuente (Guía del Director, Cap. 13).",
    "Un mapa, un diario o una orden escrita.",
    "Un huevo, una cría o un núcleo que sigue vivo.",
    "Un componente que sirve de Foco (Guía del Director, Cap. 13).",
    "Un trofeo que abre puertas sociales (Reputación +1 en una Facción).",
    "Una maldición (Guía del Director, Cap. 13) para quien se lo lleve.",
    "Un objeto Raro, y alguien que lo reclama."
   ]
  },
  "nomNucleo": {
   "name": "Nombres: artículo y núcleo (d20)",
   "filas": [
    "el Tejedor",
    "la Madre",
    "el Devorador",
    "la Viuda",
    "el Coro",
    "la Boca",
    "el Heraldo",
    "la Reina",
    "el Guardián",
    "la Sombra",
    "el Paciente",
    "la Hija",
    "el Sin Nombre",
    "la Voz",
    "el Pastor",
    "la Cosecha",
    "el Engranaje",
    "la Espina",
    "el Eco",
    "la Llaga"
   ]
  },
  "nomRaiz": {
   "name": "Nombres: raíz sonora (d20)",
   "filas": [
    "Mórd-",
    "Vesk-",
    "Úl-",
    "Karr-",
    "Sith-",
    "Ozh-",
    "Brenn-",
    "Ithr-",
    "Gael-",
    "Drah-",
    "Tzil-",
    "Quor-",
    "Nhem-",
    "Arv-",
    "Zeph-",
    "Olm-",
    "Hesk-",
    "Vorr-",
    "Lir-",
    "Crax-"
   ]
  },
  "nomEpiteto": {
   "name": "Nombres: epíteto (d20)",
   "filas": [
    "del Pozo",
    "de las Horas",
    "Carroñera",
    "sin Rostro",
    "de Ceniza",
    "que Espera",
    "del Último Invierno",
    "de Óxido",
    "Hambrienta",
    "del Umbral",
    "de Mil Ojos",
    "Silenciosa",
    "de la Marea",
    "Rota",
    "del Cristal",
    "que no Duerme",
    "de Sal",
    "Antigua",
    "del Norte Muerto",
    "de Todos"
   ]
  },
  "nomFin": {
   "name": "Nombres: terminaciones",
   "filas": [
    "ax",
    "ith",
    "ora",
    "un",
    "esh",
    "ul"
   ]
  },
  "trampaDisp": {
   "name": "Trampa: disparador (d12)",
   "filas": [
    "Pisar una losa",
    "Abrir una puerta",
    "Tocar un objeto",
    "Cruzar un hilo",
    "Leer una inscripción",
    "Hablar en voz alta",
    "Llevar luz",
    "Sacar un tesoro",
    "Pasar demasiado tiempo",
    "Usar un Axioma",
    "Mentir",
    "Ser el último en pasar"
   ]
  },
  "trampaEfecto": {
   "name": "Trampa: efecto (d12)",
   "filas": [
    "Dardos (daño base, Envenenado)",
    "Foso (caída y Apresado)",
    "Gas (Inconsciente o Envenenado)",
    "Red (Apresado)",
    "Estallido de energía",
    "Derrumbe (daño y bloqueo)",
    "Alarma (llegan guardianes)",
    "La sala se inunda",
    "El techo desciende",
    "El Axioma rebota",
    "Maldición (Maldito)",
    "La puerta se cierra detrás"
   ]
  },
  "trampaSenal": {
   "name": "Trampa: señal (d12)",
   "filas": [
    "Una junta más limpia",
    "Polvo sin huellas",
    "Olor dulzón o metálico",
    "Un brillo a la altura del tobillo",
    "Tinta que brilla",
    "Grietas en el techo",
    "Un mecanismo de latón visible",
    "Marcas de agua en las paredes",
    "Marcas de roce",
    "Runas de contención",
    "Una estatua que observa",
    "Bisagras sin polvo"
   ]
  },
  "riesgo": {
   "name": "Dado de Riesgo (d6)",
   "filas": [
    "Encuentro — Aparece una amenaza. Tira Reacción (2d10) para la actitud inicial. No necesariamente hostil.",
    "Indicio — Huellas, ruidos, olor, rastro visual. Avisa de peligro sin desencadenarlo.",
    "Recurso — Tira el Ud del recurso más relevante en ese momento.",
    "Entorno — Cambio climático, trampa ambiental, fluctuación de la Fuente.",
    "Luz — Tira el Ud de la fuente de luz activa del grupo.",
    "Calma — El tiempo transcurre sin incidentes. El grupo avanza."
   ]
  },
  "reaccion": {
   "name": "Reacción de PNJ (2d10): 2–5 · 6–10 · 11–15 · 16–19 · 20",
   "filas": [
    "Hostil: ataca de inmediato o prepara emboscada.",
    "Desfavorable: amenazante o desconfiado. Escucha solo con oferta tangible.",
    "Neutral: indiferente o cauteloso. Dispuesto a parlamentar.",
    "Amistoso: ofrece ayuda, información o comercio.",
    "Aliado: ayuda activamente sin compensación inmediata."
   ]
  },
  "objFaccion": {
   "name": "Objetivos de Facción (d8)",
   "filas": [
    "Eliminar a una Facción rival",
    "Controlar un recurso o localización clave",
    "Reclutar a un personaje o grupo específico",
    "Obtener un objeto o información",
    "Expandir su influencia a una nueva zona",
    "Sobrevivir a una amenaza que la está presionando",
    "Recuperarse de una derrota reciente",
    "Mantener el statu quo ante una amenaza emergente"
   ]
  },
  "objTipo": {
   "name": "Objeto mágico: tipo (d12)",
   "filas": [
    "Arma cuerpo a cuerpo",
    "Arma a distancia",
    "Armadura",
    "Escudo",
    "Capa o vestimenta",
    "Accesorio (anillo, amuleto, brazalete)",
    "Consumible (poción, pergamino)",
    "Joya o gema",
    "Herramienta especializada",
    "Foco",
    "Documento o mapa arcano",
    "Objeto extraño (no identificable a primera vista)"
   ]
  },
  "objHistoria": {
   "name": "Objeto mágico: las tres preguntas",
   "filas": [
    "¿Quién lo creó y con qué propósito?",
    "¿Cuál fue su momento de mayor poder o infamia?",
    "¿Qué quiere ahora el objeto, o qué creen los que lo conocen que «quiere» hacer?"
   ]
  },
  "revision": {
   "name": "Revisión final de una criatura",
   "filas": [
    "¿Se puede ver venir? Tiene una señal, y sus Aptitudes más peligrosas se anuncian.",
    "¿Obliga a decidir? Si la respuesta óptima es siempre «pegarle más fuerte», le falta algo.",
    "¿Se puede descubrir su punto débil? Si tiene una Debilidad, el grupo tiene forma de averiguarla antes o durante el encuentro.",
    "¿Sabe cuándo huir? Anota su Moral o la condición en la que abandona la pelea."
   ]
  },
  "moralMods": {
   "name": "Modificadores de Moral",
   "filas": [
    "+2 · Líder especialmente carismático o intimidante",
    "+3 · Defienden algo que no pueden abandonar",
    "−2 · Han sufrido un Golpe Crítico devastador",
    "−2 · Su líder acaba de caer",
    "−1 · El terreno ofrece una huida fácil y visible"
   ]
  },
  "moralCuando": {
   "name": "Cuándo comprobar la Moral",
   "filas": [
    "Cae el líder visible del grupo enemigo.",
    "La mitad o más del grupo ha sido incapacitada o muerta.",
    "Aparece un terror sobrenatural o una amenaza desproporcionada.",
    "Un enemigo recibe un golpe que supera la mitad de sus PV de una vez."
   ]
  },
  "danos": {
   "name": "Tipos de daño",
   "filas": [
    "Cortante",
    "Perforante",
    "Contundente",
    "Fuego",
    "Frío",
    "Rayo",
    "Ácido",
    "Veneno",
    "Energía",
    "Sónico",
    "Fuerza",
    "Psíquico",
    "Necrótico",
    "Radiante"
   ]
  }
 },
 "encuentros": {
  "1-2": {
   "name": "Nivel 1–2",
   "f": 1,
   "e": 2,
   "p": 3,
   "m": 4,
   "estandar": "1",
   "serio": "2",
   "mortal": "3+"
  },
  "3-4": {
   "name": "Nivel 3–4",
   "f": 2,
   "e": 3,
   "p": 4,
   "m": 5,
   "estandar": "2–3",
   "serio": "4",
   "mortal": "5+"
  },
  "5-6": {
   "name": "Nivel 5–6",
   "f": 4,
   "e": 5,
   "p": 6,
   "m": 7,
   "estandar": "4–5",
   "serio": "6",
   "mortal": "7+"
  },
  "7-8": {
   "name": "Nivel 7–8",
   "f": 6,
   "e": 7,
   "p": 8,
   "m": 9,
   "estandar": "6–7",
   "serio": "8",
   "mortal": "9+"
  },
  "9-10": {
   "name": "Nivel 9–10",
   "f": 8,
   "e": 9,
   "p": 10,
   "m": 11,
   "estandar": "8–9",
   "serio": "10",
   "mortal": "11+"
  }
 },
 "grupoAjuste": {
  "1": -2,
  "2": -1,
  "3": -1,
  "4": 0,
  "5": 1,
  "6": 1
 },
 "riqueza": {
  "1": {
   "name": "Nivel 1",
   "acum": "100–300 pp",
   "sesion": "50–100 pp",
   "sesMin": 50,
   "sesMax": 100,
   "objetos": "0–1 Comunes"
  },
  "2": {
   "name": "Nivel 2",
   "acum": "300–600 pp",
   "sesion": "100–200 pp",
   "sesMin": 100,
   "sesMax": 200,
   "objetos": "1 Común, posible Infrecuente"
  },
  "3": {
   "name": "Nivel 3",
   "acum": "600–1.200 pp",
   "sesion": "150–300 pp",
   "sesMin": 150,
   "sesMax": 300,
   "objetos": "1–2 Infrecuentes"
  },
  "4": {
   "name": "Nivel 4",
   "acum": "1.200–2.500 pp",
   "sesion": "200–400 pp",
   "sesMin": 200,
   "sesMax": 400,
   "objetos": "1 Infrecuente + posible Raro"
  },
  "5": {
   "name": "Nivel 5",
   "acum": "2.500–5.000 pp",
   "sesion": "300–600 pp",
   "sesMin": 300,
   "sesMax": 600,
   "objetos": "1–2 Raros"
  },
  "6": {
   "name": "Nivel 6",
   "acum": "5.000–10.000 pp",
   "sesion": "500–1.000 pp",
   "sesMin": 500,
   "sesMax": 1000,
   "objetos": "1–2 Raros, posible Muy Raro"
  },
  "7": {
   "name": "Nivel 7",
   "acum": "10.000–20.000 pp",
   "sesion": "800–1.500 pp",
   "sesMin": 800,
   "sesMax": 1500,
   "objetos": "1 Muy Raro"
  },
  "8": {
   "name": "Nivel 8",
   "acum": "20.000–40.000 pp",
   "sesion": "1.000–2.500 pp",
   "sesMin": 1000,
   "sesMax": 2500,
   "objetos": "1–2 Muy Raros"
  },
  "9": {
   "name": "Nivel 9",
   "acum": "40.000–80.000 pp",
   "sesion": "2.000–4.000 pp",
   "sesMin": 2000,
   "sesMax": 4000,
   "objetos": "1 Muy Raro, posible Legendario"
  },
  "10": {
   "name": "Nivel 10",
   "acum": "80.000+ pp",
   "sesion": "3.000–6.000 pp",
   "sesMin": 3000,
   "sesMax": 6000,
   "objetos": "1 Legendario o recompensa especial"
  }
 },
 "costes": {
  "informacion_de_calidad": {
   "name": "Información de calidad",
   "coste": "50–500 pp",
   "txt": "Un contacto revela la Moneda de un PNJ, el plano de un edificio, o el punto débil de una facción."
  },
  "soborno_menor": {
   "name": "Soborno menor",
   "coste": "50–500 pp",
   "txt": "+1 escalón de actitud con un PNJ o facción."
  },
  "soborno_mayor": {
   "name": "Soborno mayor",
   "coste": "1.000–5.000 pp",
   "txt": "+2 escalones. Solo funciona una vez por relación sin acción narrativa adicional."
  },
  "entrenamiento_especializado": {
   "name": "Entrenamiento especializado",
   "coste": "300 pp × Nivel",
   "txt": "Equivale a 1 PD extra entre sesiones (no más de 1 vez por sesión)."
  },
  "curacion_avanzada": {
   "name": "Curación avanzada",
   "coste": "100 pp",
   "txt": "Restaura 1 punto de Flesh o elimina un estado persistente básico —elige uno— (el Flesh se recupera muy despacio: ver Manual Básico, Cap. 10)."
  },
  "mercenarios_100_soldados_1_mes": {
   "name": "Mercenarios (100 soldados, 1 mes)",
   "coste": "60.000 pp",
   "txt": "Fuerza disponible para una operación de Escala Planetaria."
  },
  "fortaleza_basica": {
   "name": "Fortaleza básica",
   "coste": "10.000–50.000 pp",
   "txt": "Base de Poder física con F 1, A 1 y R 2."
  },
  "nave_estelar_usada": {
   "name": "Nave estelar usada",
   "coste": "50.000–150.000 pp",
   "txt": "Vehículo con Ud de Integridad degradado; requiere reparación."
  }
 },
 "rarezas": {
  "comun": {
   "name": "Común",
   "d6": "1–2",
   "na": "0–2",
   "sintonia": "No requiere",
   "nivel": "Cualquier nivel. Consumibles, herramientas menores, munición encantada.",
   "props": 0,
   "atk": "—",
   "def": "—",
   "cd": "—",
   "dano": "—",
   "precio": "consumibles menores"
  },
  "infrecuente": {
   "name": "Infrecuente",
   "d6": "3–4",
   "na": "3–5",
   "sintonia": "Sí (1 slot)",
   "nivel": "Nivel 3–5. Mejoras significativas sin romper el balance.",
   "props": 1,
   "atk": "+1",
   "def": "+1",
   "cd": "—",
   "dano": "+1d4",
   "precio": "400–1.200 pp"
  },
  "raro": {
   "name": "Raro",
   "d6": "5",
   "na": "6–8",
   "sintonia": "Sí (1 slot)",
   "nivel": "Nivel 6–8. Objetos con mecánicas propias, no solo bonos.",
   "props": 2,
   "atk": "+2",
   "def": "+2",
   "cd": "+1",
   "dano": "+1d6",
   "precio": "3.000–8.000 pp"
  },
  "muy_raro": {
   "name": "Muy Raro",
   "d6": "6",
   "na": "9–11",
   "sintonia": "Sí (1 slot)",
   "nivel": "Nivel 9–10. Cambios cualitativos en cómo el personaje opera.",
   "props": 3,
   "atk": "+3",
   "def": "+3",
   "cd": "+2",
   "dano": "+1d8",
   "precio": "15.000–30.000 pp"
  },
  "legendario": {
   "name": "Legendario",
   "d6": "7",
   "na": "12+",
   "sintonia": "Sí (requiere Nivel 7+)",
   "nivel": "Solo en juego épico. Objetos que alteran el mundo, no solo al personaje.",
   "props": 4,
   "atk": "+3 y único",
   "def": "+3 y único",
   "cd": "+3",
   "dano": "+1d10",
   "precio": "no comprable"
  },
  "artefacto_unico": {
   "name": "Artefacto Único",
   "d6": "8",
   "na": "Escala Cósmica",
   "sintonia": "Sí (requiere Nivel 9+)",
   "nivel": "Objetos con voluntad propia y agenda.",
   "props": 5,
   "atk": "+3 y único",
   "def": "+3 y único",
   "cd": "+3",
   "dano": "+1d10",
   "precio": "no comprable"
  }
 },
 "propiedades": {
  "bono_de_ataque": {
   "name": "Bono de Ataque",
   "d20": "1–2",
   "min": 1,
   "max": 2,
   "txt": "+1, +2 o +3 al ataque (según rareza).",
   "bono": "atk"
  },
  "bono_defensivo": {
   "name": "Bono defensivo",
   "d20": "3–4",
   "min": 3,
   "max": 4,
   "txt": "+1 o +2 a la Guardia, o +1 o +2 de Armadura, mientras se lleva. Qué eje toca lo decide lo que el objeto hace en la ficción: un campo de fuerza, una capa que desvía o un escudo bien equilibrado suben la Guardia; una pieza que endurece el cuerpo o refuerza el blindaje sube la Armadura. Un mismo objeto puede tocar los dos ejes a la vez, pero entonces cada bono se cuenta por separado. El límite de +2 es el del bono sostenido: un objeto que solo se activa una ronda, o contra un único ataque, puede llegar más alto: hasta +3 o +4 si dura una sola ronda, y hasta +5 si solo afecta a un único ataque.",
   "bono": "def"
  },
  "dano_elemental": {
   "name": "Daño elemental",
   "d20": "5–6",
   "min": 5,
   "max": 6,
   "txt": "Añade 1d4, 1d6 o 1d8 de daño del tipo elegido.",
   "bono": "dano"
  },
  "propulsion_tactica": {
   "name": "Propulsión táctica",
   "d20": "7–8",
   "min": 7,
   "max": 8,
   "txt": "Una vez por turno, desplaza al objetivo 10 pies en cualquier dirección al impactar."
  },
  "deposito_de_poder": {
   "name": "Depósito de poder",
   "d20": "9–10",
   "min": 9,
   "max": 10,
   "txt": "Contiene 4d6 puntos de Ingenio recargables (1 Descanso Largo). Solo pueden gastarse en capacidades que consuman esa Reserva."
  },
  "resistencia_elemental": {
   "name": "Resistencia elemental",
   "d20": "11",
   "min": 11,
   "max": 11,
   "txt": "El portador tiene Resistencia a un tipo de daño."
  },
  "absorcion_de_axiomas": {
   "name": "Absorción de Axiomas",
   "d20": "12",
   "min": 12,
   "max": 12,
   "txt": "Una vez por Descanso Largo, al recibir un Axioma, lo absorbe en lugar de recibir el efecto."
  },
  "telepatico": {
   "name": "Telepático",
   "d20": "13",
   "min": 13,
   "max": 13,
   "txt": "Permite comunicación sin palabras en 30 pies con alguien sintonizado."
  },
  "sigiloso": {
   "name": "Sigiloso",
   "d20": "14",
   "min": 14,
   "max": 14,
   "txt": "El portador no deja rastro físico (huellas, olor) mientras lo lleva."
  },
  "detectar": {
   "name": "Detectar",
   "d20": "15",
   "min": 15,
   "max": 15,
   "txt": "Vibra o emite luz tenue al detectar una condición específica en 60 pies."
  },
  "regenerativo": {
   "name": "Regenerativo",
   "d20": "16",
   "min": 16,
   "max": 16,
   "txt": "El portador recupera 1 PV al inicio de cada turno si tiene menos de la mitad."
  },
  "vinculo_de_alma": {
   "name": "Vínculo de alma",
   "d20": "17",
   "min": 17,
   "max": 17,
   "txt": "Si el portador muere, el objeto puede absorber su alma y liberarla en un lugar seguro (1 vez)."
  },
  "voluntad_propia": {
   "name": "Voluntad propia",
   "d20": "18–19",
   "min": 18,
   "max": 19,
   "txt": "El objeto tiene una personalidad definida y puede comunicarse. Puede resistirse si va contra sus valores."
  },
  "propiedad_unica": {
   "name": "Propiedad única",
   "d20": "20",
   "min": 20,
   "max": 20,
   "txt": "El DJ define algo que no aparece en esta tabla, específico de la historia del objeto."
  }
 },
 "maldiciones": {
  "licantropia": {
   "name": "Licantropía",
   "txt": "Transformación forzada en luna llena (sin control). Tiradas secretas de SAB en situaciones de estrés para controlar los impulsos.",
   "cura": "Menor: Axioma Curar Maldición Nv3 en los primeros tres días. Grave (ya transformado): sangre del licántropo original + ritual de purificación Nv5."
  },
  "maldicion_del_no_muerto": {
   "name": "Maldición del No-muerto",
   "txt": "El personaje no puede recuperar PV mediante Axiomas ni Talentos. Solo recupera 1 PV por Vigilia de reposo.",
   "cura": "Destruir el objeto o ser que ancla la maldición al personaje, o un sacerdote de alta autoridad de la orden correspondiente."
  },
  "geas": {
   "name": "Geas",
   "txt": "Obligación compulsiva definida al usarse. Mientras la incumple: +1 escalón de Fatiga por día (efecto del Axioma Geas, Catálogo).",
   "cura": "Axioma Romper Geas (Nv5, Divinidad), o que la entidad que la impuso la levante voluntariamente."
  },
  "corrupcion_arcana": {
   "name": "Corrupción Arcana",
   "txt": "El Ud de todos los Focos del personaje degrada 1 escalón de forma permanente.",
   "cura": "Ritual de limpieza en un lugar de alta energía natural pura durante 3 Vigilias. No puede hacerse en zonas corruptas."
  }
 },
 "focos": {
  "foco_de_erudicion": {
   "name": "Foco de Erudición",
   "ud": "Ud8",
   "fuente": "Erudición",
   "txt": "El siguiente Axioma del turno no requiere Concentración aunque normalmente la necesite.",
   "coste": "200 pp"
  },
  "foco_de_devocion": {
   "name": "Foco de Devoción",
   "ud": "Ud8",
   "fuente": "Divinidad",
   "txt": "Restaura 1d6 PV a ti o a un aliado adyacente inmediatamente.",
   "coste": "200 pp"
  },
  "foco_de_pacto": {
   "name": "Foco de Pacto",
   "ud": "Ud6",
   "fuente": "Pacto",
   "txt": "Tu Patrono bloquea 1 ataque dirigido a ti como Reacción en el próximo turno enemigo.",
   "coste": "250 pp"
  },
  "foco_natural": {
   "name": "Foco Natural",
   "ud": "Ud8",
   "fuente": "Naturaleza",
   "txt": "Un aliado adyacente recupera 4 puntos de Adrenalina.",
   "coste": "175 pp"
  },
  "foco_psionico": {
   "name": "Foco Psiónico",
   "ud": "Ud10",
   "fuente": "Psiónica",
   "txt": "El siguiente Axioma de esa Fuente afecta a 1 objetivo adicional sin coste extra de Reserva.",
   "coste": "300 pp"
  },
  "foco_indefinido": {
   "name": "Foco Indefinido",
   "ud": "Ud6",
   "fuente": "Cualquier Fuente",
   "txt": "Sin Resonancia especial. Reduce el Coste en 3 puntos (no 2) mientras activo.",
   "coste": "350 pp"
  }
 },
 "modulos": {
  "filo_sonico": {
   "name": "Filo Sónico",
   "cd": "12",
   "tipo": "Ofensivo",
   "txt": "+1d4 de daño de Energía (sónico) en cada impacto; ignora 2 puntos de Armadura no mágica.",
   "coste": "500 pp"
  },
  "carga_de_plasma": {
   "name": "Carga de Plasma",
   "cd": "15",
   "tipo": "Ofensivo",
   "txt": "1 vez por combate: +2d6 daño de plasma en un Ataque Normal.",
   "coste": "1.800 pp"
  },
  "modulador_de_frecuencia": {
   "name": "Modulador de Frecuencia",
   "cd": "12",
   "tipo": "Ofensivo",
   "txt": "Como 0 PA al inicio del turno: cambia el tipo de daño del arma al tipo declarado.",
   "coste": "600 pp"
  },
  "capa_ablativa": {
   "name": "Capa Ablativa",
   "cd": "12",
   "tipo": "Defensivo",
   "txt": "RD 2 permanente. Al inicio de cada combate tira Ud8; en 1–2, la RD baja a 1 hasta repararse.",
   "coste": "800 pp"
  },
  "disipador_de_energia": {
   "name": "Disipador de Energía",
   "cd": "15",
   "tipo": "Defensivo",
   "txt": "Resistencia al tipo energético elegido al instalar. Tira Ud8 tras cada impacto resistido.",
   "coste": "2.500 pp"
  },
  "refuerzo_de_articulaciones": {
   "name": "Refuerzo de Articulaciones",
   "cd": "12",
   "tipo": "Defensivo",
   "txt": "Elimina la penalización de Sigilo de armaduras medias.",
   "coste": "1.000 pp"
  },
  "receptor_de_datos": {
   "name": "Receptor de Datos",
   "cd": "10",
   "tipo": "Utilitario",
   "txt": "Comunicación con dispositivos en red; enviar mensajes cuesta 0 PA.",
   "coste": "200 pp"
  },
  "visor_termo_espectral": {
   "name": "Visor Termo-espectral",
   "cd": "12",
   "tipo": "Utilitario",
   "txt": "Visión en oscuridad total mediante calor residual.",
   "coste": "700 pp"
  }
 },
 "etiquetas": {
  "1": {
   "name": "Cicatriz Mágica",
   "txt": "Una Fuente desbordada estalló aquí. La tierra está marcada. Algo mutó, algo aún sangra.",
   "enemigo": "Carroñero que extrae de la cicatriz cualquier cosa que resuene, al precio que sea.",
   "aliado": "Investigadora de una orden erudita que estudia la anomalía y necesita escolta.",
   "complicacion": "El área distorsiona tu Fuente: cada Axioma usado aquí tiene un 20 % de probabilidades (1–4 en 1d20) de ver alterado su alcance o su efecto.",
   "objeto": "Foco de calidad excepcional, inestable si se saca de la zona.",
   "lugar": "El epicentro de la cicatriz — un cráter vitrificado donde el tiempo parece lento."
  },
  "2": {
   "name": "Tecnología Olvidada",
   "txt": "Los constructores murieron o se fueron. Sus máquinas siguen funcionando. Nadie entiende por qué.",
   "enemigo": "Coleccionista que envía mercenarios a «recuperar» piezas; su empleador tiene planes peores.",
   "aliado": "Técnico local que ha aprendido a mantener una máquina sin entenderla.",
   "complicacion": "La tecnología responde a usuarios con una Fuente; los demás la activan por accidente.",
   "objeto": "Componente de función desconocida por el que varios grupos están dispuestos a matar.",
   "lugar": "La instalación sellada: cuatro niveles, suministro de energía propio, un sistema de seguridad todavía activo."
  },
  "3": {
   "name": "Culto del Vacío",
   "txt": "Alguien escuchó algo en la oscuridad. Algunos creyeron. La mayoría de los que se unieron no salieron.",
   "enemigo": "El Portavoz — un converso de alto rango que antes era alguien respetado.",
   "aliado": "Familiar de un miembro que quiere rescatarlo antes de que complete la iniciación final.",
   "complicacion": "El culto tiene informantes en la guardia local; cualquier investigación llega a sus oídos.",
   "objeto": "El texto fundacional del culto — peligroso de leer, valioso de destruir o estudiar.",
   "lugar": "El Santuario Interior — solo accesible en la luna nueva, bajo una estructura pública conocida."
  },
  "4": {
   "name": "Hegemonía Decadente",
   "txt": "El poder todavía existe. Las instituciones todavía funcionan. Pero algo se está pudriendo desde dentro.",
   "enemigo": "El Inspector — un funcionario corrupto que extrae tributos informales a todo el que pasa.",
   "aliado": "Un reformista que tiene pruebas pero no brazo ejecutor.",
   "complicacion": "Las leyes locales favorecen al que tiene más monedas; el grupo puede ser criminalizado sin previo aviso.",
   "objeto": "Sello oficial robado que legitima órdenes falsas.",
   "lugar": "La Cámara de Registros — donde está todo el pasado de la hegemonía, si alguien sabe buscar."
  },
  "5": {
   "name": "Criatura Ancestral",
   "txt": "Lleva aquí más tiempo que cualquier civilización. No es malvada. Tampoco es segura.",
   "enemigo": "Cazador de trofeos que quiere la cabeza de la criatura y no entiende lo que eso rompería.",
   "aliado": "Guardián de la tradición que conoce los términos del viejo acuerdo con la criatura.",
   "complicacion": "La criatura tiene territorio marcado; los personajes ya lo han cruzado sin saberlo.",
   "objeto": "Una ofrenda ritual que apacigua a la criatura — escasa y difícil de conseguir.",
   "lugar": "El Territorio Sagrado — la criatura no entra en él; tampoco los que la sirven."
  },
  "6": {
   "name": "Tierra Maldita",
   "txt": "Algo ocurrió aquí. Quizá fue merecido. Quizá no. El suelo todavía lo recuerda.",
   "enemigo": "El que causó la maldición, vivo o no, que no quiere que nadie descubra la verdad.",
   "aliado": "Superviviente del suceso original, marcado, que sabe lo que pasó.",
   "complicacion": "Quien pasa más de una Vigilia en la zona hace una Salvación CON CD 13 o contrae un estado persistente.",
   "objeto": "El artefacto o acto que podría levantar la maldición — está en manos equivocadas.",
   "lugar": "El punto cero de la maldición: un edificio, una tumba, un campo, irreconociblemente deformado."
  },
  "7": {
   "name": "Ruinas de una era anterior",
   "txt": "Estuvieron aquí antes que nosotros. Sus muros duran más que nuestra memoria.",
   "enemigo": "Saqueador organizado con una empresa financiando la extracción — legal en el papel.",
   "aliado": "Académico que quiere documentar antes de que los saqueadores lo destruyan todo.",
   "complicacion": "Parte de las ruinas sigue habitada — por algo que no sabe que el mundo exterior cambió.",
   "objeto": "Un registro en un idioma que nadie vivo domina del todo.",
   "lugar": "La Cámara Sellada — los saqueadores no han llegado aún; hay razones para que esté sellada."
  },
  "8": {
   "name": "Guerra Civil Fría",
   "txt": "Dos facciones. Una ciudad. Una economía. La tensión es tan densa que se corta.",
   "enemigo": "El agente provocador — trabaja para escalar el conflicto porque alguien externo lo quiere.",
   "aliado": "El mediador agotado que necesita información concreta para evitar el estallido.",
   "complicacion": "El grupo es percibido como aliado de una facción en cuanto llega; su neutralidad no se cree.",
   "objeto": "La prueba de que el conflicto fue fabricado desde fuera.",
   "lugar": "La Zona Neutral — mercado o templo donde las reglas del conflicto no aplican, todavía."
  },
  "9": {
   "name": "Comercio de Secretos",
   "txt": "Aquí todo tiene precio. La información es la moneda más dura. Y alguien siempre sabe más de lo que vende.",
   "enemigo": "El Archivista — tiene lo que el grupo necesita pero lo vende al mejor postor, incluyendo a sus enemigos.",
   "aliado": "Corredor de información que debe un favor al grupo o lo necesita.",
   "complicacion": "El grupo ya es mercancía: alguien ha puesto precio a información sobre ellos.",
   "objeto": "Fragmento de información que varias facciones quieren suprimir.",
   "lugar": "La Casa de la Balanza — el mercado de secretos, neutral por norma y por violencia."
  },
  "10": {
   "name": "Orden en Declive",
   "txt": "Fueron poderosos. Creen que todavía lo son. No todos sus miembros están equivocados.",
   "enemigo": "El Guardián de la Pureza — purga a los que cuestionan la relevancia de la Orden.",
   "aliado": "Miembro joven que ve la realidad y quiere cambiarla desde dentro.",
   "complicacion": "La Orden tiene jurisdicción legal en esta zona; su cooperación o su hostilidad cambia todo.",
   "objeto": "El Archivo Sellado — registros de lo que hizo la Orden cuando todavía importaba.",
   "lugar": "La Sede Central — imponente, parcialmente abandonada, con secciones que nadie visita ya."
  },
  "11": {
   "name": "Refugiados del Colapso",
   "txt": "Llegaron huyendo de algo. Lo que los persiguió podría seguirlos.",
   "enemigo": "El oficial que los persigue todavía, con papeles que lo legalizan.",
   "aliado": "Líder de la comunidad refugiada que sabe exactamente qué causó el colapso de donde vienen.",
   "complicacion": "Lo que causó el colapso original ya llegó aquí; nadie lo ha reconocido todavía.",
   "objeto": "El registro del colapso — prueba de quién fue responsable y por qué.",
   "lugar": "El Campamento Exterior — entre el muro y el mundo; ni dentro ni fuera."
  },
  "12": {
   "name": "Frontera en Disputa",
   "txt": "El mapa dice una cosa. La gente que vive aquí dice otra. Ambos están dispuestos a morir por su versión.",
   "enemigo": "El comandante de frontera que tiene órdenes de «estabilizar» y las interpreta liberalmente.",
   "aliado": "Habitante local que solo quiere que su granja siga en pie y conoce cada piedra del terreno.",
   "complicacion": "Cualquier acción del grupo será interpretada como toma de partido por alguien.",
   "objeto": "El tratado original — interpretado de forma incompatible por ambas partes, con razón.",
   "lugar": "El Paso — el único acceso práctico entre los dos lados, actualmente cerrado y vigilado."
  },
  "13": {
   "name": "Plaga Latente",
   "txt": "Los síntomas aún no son evidentes para todos. Los que los tienen intentan ocultarlos.",
   "enemigo": "El curandero charlatán que vende curas falsas y suprime las reales para mantener el negocio.",
   "aliado": "Médica que tiene el diagnóstico correcto pero no los medios para tratarlo a escala.",
   "complicacion": "El grupo puede ser portador sin saberlo — la incubación es larga; la propagación, silenciosa.",
   "objeto": "Muestra del agente original — cura potencial o arma biológica dependiendo de quién la tenga.",
   "lugar": "El Hospital Provisional — hacinado, con pacientes que no se atreven a decir sus síntomas reales."
  },
  "14": {
   "name": "Recurso Codiciado",
   "txt": "Hay algo aquí que el mundo necesita. Eso significa que el mundo viene a buscarlo, con o sin permiso.",
   "enemigo": "El representante de la empresa extractora — legal, bien financiado, dispuesto a ser flexible en ética.",
   "aliado": "Comunidad local que vive del recurso y lo gestiona desde hace generaciones.",
   "complicacion": "El recurso tiene una propiedad no documentada que lo hace más peligroso de lo que nadie calculó.",
   "objeto": "El contrato de explotación — tiene una cláusula que nadie leyó bien.",
   "lugar": "La Veta Principal — el acceso está disputado; llegar requiere pasar por territorio de al menos dos partes."
  },
  "15": {
   "name": "Red de Contrabando",
   "txt": "Hay cosas que la ley no permite mover. Alguien siempre las mueve de todas formas.",
   "enemigo": "El recaudador corrupto que toma su parte y elimina a los que no pagan.",
   "aliado": "Contrabandista con principios que traficó algo que no debía y ahora tiene consecuencias.",
   "complicacion": "El grupo necesita un servicio que solo la red puede proveer — el precio es un favor.",
   "objeto": "El cargamento problemático — lo que contiene no es lo que nadie esperaba.",
   "lugar": "El Almacén de Tránsito — oficialmente abandonado, oficiosamente el nudo de la red."
  },
  "16": {
   "name": "Facción Fanática",
   "txt": "Creen tener razón. Probablemente tienen razón en algo. Su método es el problema.",
   "enemigo": "El Ideólogo — incapaz de imaginar que los medios puedan invalidar el fin.",
   "aliado": "Desertor reciente que se fue cuando vio lo que la facción estaba dispuesta a hacer.",
   "complicacion": "La facción tiene apoyo popular genuino; atacarla frontalmente crearía mártires.",
   "objeto": "El Manifiesto — el documento fundacional que el Ideólogo ya no sigue aunque lo invoca.",
   "lugar": "El Bastión — la sede de la facción en esta zona, accesible pero no sin consecuencias."
  },
  "17": {
   "name": "Portal Inestable",
   "txt": "Abre. Cierra. A veces lo que sale no debería estar aquí.",
   "enemigo": "El que quiere estabilizarlo con propósitos que no son públicos.",
   "aliado": "El que sobrevivió a lo que salió la última vez y sabe cómo sellarlo.",
   "complicacion": "El portal tiene un ciclo — la próxima apertura es en horas o días. El grupo puede no querer estar cerca.",
   "objeto": "El Ancla — el artefacto que podría estabilizarlo o sellarlo permanentemente.",
   "lugar": "La Zona de Exclusión — el área alrededor del portal donde las reglas físicas son sugerencias."
  },
  "18": {
   "name": "Colonia Aislada",
   "txt": "Se separaron del resto por elección o por fuerza. Lo que construyeron funciona. Hasta cierto punto.",
   "enemigo": "El Fundador o su sucesor, que no acepta que el aislamiento tiene costes que ya no pueden pagar.",
   "aliado": "La generación joven, que quiere contacto exterior y tiene buenas razones.",
   "complicacion": "La colonia tiene algo que el mundo exterior quiere; ese conocimiento llegará pronto.",
   "objeto": "Los Registros Fundacionales — explican por qué se aislaron; la razón sigue siendo válida.",
   "lugar": "El Límite — la frontera física o simbólica que los colonos no cruzan; los forasteros tampoco deberían."
  },
  "19": {
   "name": "Bestia de Escala",
   "txt": "Es tan grande que el terreno que ocupa es, en la práctica, su cuerpo.",
   "enemigo": "El Cazador de Renombre — quiere la hazaña; no le importa el coste colateral.",
   "aliado": "El Ecólogo — ha estudiado la bestia años; sabe que matarla rompería algo.",
   "complicacion": "La bestia no es agresiva salvo bajo una condición específica — que alguien ya cumplió sin saberlo.",
   "objeto": "La Escama/Garra/Fragmento — tiene propiedades alquímicas únicas; hay demanda.",
   "lugar": "El Corazón del Territorio — donde la bestia descansa; se puede llegar allí sin provocarla si se sabe cómo."
  },
  "20": {
   "name": "Anomalía Cósmica",
   "txt": "Las leyes físicas aquí son… sugerencias. Algo más antiguo que el mundo local dejó una marca.",
   "enemigo": "El Investigador sin escrúpulos que experimenta con personas para entender la anomalía.",
   "aliado": "El Nativo — alguien nacido en la zona, adaptado a sus reglas, que las entiende instintivamente.",
   "complicacion": "Los Axiomas se comportan de forma impredecible; tu Fuente puede amplificarse o bloquearse sin previo aviso.",
   "objeto": "El Artefacto de Origen — lo que causó la anomalía; activo, antiguo, y aún funcionando.",
   "lugar": "El Centro Quieto — el único punto de la zona donde todo es completamente normal. Nadie sabe por qué."
  }
 },
 "faccionesEj": {
  "guardia_de_la_ciudad": {
   "name": "Guardia de la Ciudad",
   "f": 4,
   "a": 2,
   "r": 3,
   "activos": "Milicia urbana (F3), Red de informantes (A2)"
  },
  "gremio_de_mercaderes": {
   "name": "Gremio de Mercaderes",
   "f": 1,
   "a": 3,
   "r": 5,
   "activos": "Caravana armada (F1), Sobornos (A3), Almacén (R4)"
  },
  "culto_del_vacio": {
   "name": "Culto del Vacío",
   "f": 2,
   "a": 5,
   "r": 2,
   "activos": "Fanáticos (F2), Célula infiltrada (A5), Fondo oculto (R2)"
  },
  "orden_en_declive": {
   "name": "Orden en Declive",
   "f": 3,
   "a": 3,
   "r": 2,
   "activos": "Veteranos (F3), Archivo secreto (A3), Sede regional (R2)"
  },
  "senor_de_la_guerra": {
   "name": "Señor de la Guerra",
   "f": 5,
   "a": 2,
   "r": 1,
   "activos": "Ejército (F5), Explorador (A2)"
  }
 },
 "accionesFaccion": {
  "atacar": {
   "name": "Atacar",
   "attr": "F",
   "txt": "Inflige daño a otra Facción: 1d6 + F al PG del objetivo. El objetivo puede resistir (véase «Conflicto entre Facciones»)."
  },
  "defender": {
   "name": "Defender",
   "attr": "F",
   "txt": "Añade +2 a las tiradas de resistencia esta ronda."
  },
  "infiltrar": {
   "name": "Infiltrar",
   "attr": "A",
   "txt": "Obtiene información sobre otra Facción o planta un agente. Siguiente Ataque de esta Facción gana Ventaja."
  },
  "sabotear": {
   "name": "Sabotear",
   "attr": "A",
   "txt": "Destruye un Activo del objetivo si supera A del objetivo (2d10 + A propia vs. CD 10 + A objetivo)."
  },
  "crecer": {
   "name": "Crecer",
   "attr": "R",
   "txt": "Añade un nuevo Activo de NA ≤ R actual. Tarda 1d4 Turnos."
  },
  "recuperar": {
   "name": "Recuperar",
   "attr": "R",
   "txt": "Recupera 1d6 + R PG. No se puede hacer si fue Atacada este Turno."
  },
  "moverse": {
   "name": "Moverse",
   "attr": "—",
   "txt": "Expande o contrae su zona de influencia en el mapa de campaña."
  },
  "contratar": {
   "name": "Contratar",
   "attr": "R",
   "txt": "Intenta reclutar a un PNJ o grupo neutral (incluyendo al grupo de PJ, si lo aceptan)."
  }
 },
 "estados": {
  "sangrado": {
   "name": "Sangrado",
   "ud": "Ud6",
   "txt": "1d4 Físico por turno. Las curaciones solo restauran la mitad."
  },
  "desgarro": {
   "name": "Desgarro",
   "ud": "Ud6",
   "txt": "2 de daño por turno. −1 de Armadura (o de Guardia si no lleva)."
  },
  "trauma": {
   "name": "Trauma",
   "ud": "Ud4",
   "txt": "1d6 Físico por turno. Desventaja en las tiradas de FUE."
  },
  "envenenado": {
   "name": "Envenenado",
   "ud": "Ud8",
   "txt": "1d6 por turno. Desventaja en ataques y habilidades."
  },
  "ignicion": {
   "name": "Ignición",
   "ud": "Ud6",
   "txt": "1d10 de Fuego por turno, +1 acumulativo cada turno que el Ud no degrada."
  },
  "ralentizado": {
   "name": "Ralentizado",
   "ud": "Ud6",
   "txt": "Movimiento a la mitad. Sin Paso Táctico gratuito."
  },
  "aturdido": {
   "name": "Aturdido",
   "ud": "Ud4",
   "txt": "Sin Reacciones ni acciones de 3 PA. Ventaja para quien lo ataque."
  },
  "conmocionado": {
   "name": "Conmocionado",
   "ud": "Ud6",
   "txt": "Desventaja en la primera tirada de cada turno. Sus fuentes de Ventaja quedan canceladas."
  },
  "cegado": {
   "name": "Cegado",
   "ud": "Ud4",
   "txt": "Desventaja en sus ataques. Ventaja para quien lo ataque."
  },
  "aterrado": {
   "name": "Aterrado",
   "ud": "Ud4",
   "txt": "Desventaja en todas sus tiradas mientras perciba la fuente. No puede acercarse a ella."
  },
  "paralizado": {
   "name": "Paralizado",
   "ud": "Ud4",
   "txt": "No se mueve ni gasta PA. Ventaja contra él; cuerpo a cuerpo a 5 pies es Crítico."
  },
  "apresado": {
   "name": "Apresado",
   "ud": "",
   "txt": "Velocidad 0. Desventaja en sus ataques y Salvaciones de DES. Ventaja para quien lo ataque."
  },
  "derribado": {
   "name": "Derribado",
   "ud": "",
   "txt": "En el suelo: levantarse cuesta movimiento. Ventaja cuerpo a cuerpo contra él."
  },
  "encantado": {
   "name": "Encantado",
   "ud": "Ud6",
   "txt": "Ve a la fuente como aliada y no puede atacarla. Recibir daño de ella lo rompe."
  },
  "ensordecido": {
   "name": "Ensordecido",
   "ud": "Ud6",
   "txt": "No oye. Inmune a los efectos basados en el sonido."
  },
  "maldito": {
   "name": "Maldito",
   "ud": "Ud8",
   "txt": "Desventaja en un tipo de tirada, según la fuente."
  },
  "petrificado": {
   "name": "Petrificado",
   "ud": "",
   "txt": "Como Paralizado, con Resistencia a todo el daño."
  },
  "desprevenido": {
   "name": "Desprevenido",
   "ud": "",
   "txt": "No ha actuado o no ve venir el golpe: pierde el escudo y las Reacciones."
  }
 }
};
