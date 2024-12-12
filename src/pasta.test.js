import { fetchPastas } from "./pasta";

describe("pastas", () => {
  test("that the pasta list works", async () => {
    const pastas = await fetchPastas();
    expect(pastas).toMatchInlineSnapshot(`
[
  "Barbine",
  "Bavette",
  "Bigoli",
  "Bucatini",
  "Busiate (or busiati)",
  "Capellini",
  "Fedelini",
  "Ferrazzuoli",
  "Fettuccine",
  "Fileja",
  "Lagane[25]",
  "Lasagne",
  "Lasagnette",
  "Lasagnotte",
  "Linguine",
  "Maccheroni alla molinara",
  "Maccheroncini di Campofilone",
  "Mafalde",
  "Matriciani",
  "Pappardelle",
  "Perciatelli",
  "Picagge",
  "Pici",
  "Pillus",
  "Rustiche",
  "Sagne 'ncannulate",
  "Scialatelli or scialatielli",
  "Spaghetti",
  "Spaghetti alla chitarra",
  "Spaghettini",
  "Spaghettoni",
  "Stringozzi",
  "Su Filindeu",
  "Tagliatelle",
  "Tagliolini",
  "Trenette",
  "Tripoline",
  "Vermicelli",
  "Ziti",
  "Anelli",
  "Boccoli",
  "Calamarata",
  "Campanelle or torchio",
  "Cappelli da chef",
  "Casarecce",
  "Cascatelli",
  "Castellane",
  "Cavatappi",
  "Cavatelli",
  "Chifferi",
  "Cicioneddos",
  "Conchiglie",
  "Creste di gallo",
  "Fagioloni",
  "Farfalle",
  "Fazzoletti",
  "Festoni",
  "Fiorentine",
  "Fiori",
  "Fusilli",
  "Fusilli bucati",
  "Garganelli",
  "Gemelli",
  "Gnocchi",
  "Gomiti",
  "Lanterne",
  "Lorighittas",
  "Macaroni",
  "Maccheroncelli",
  "Mafaldine",
  "Maltagliati",
  "Malloreddus",
  "Mandala",
  "Marille",
  "Mezzani",
  "Mezze maniche",
  "Mezze penne",
  "Mezzi bombardoni",
  "Nuvole",
  "Paccheri",
  "Passatelli",
  "Pasta al ceppo",
  "Penne",
  "Penne ricce",
  "Picchiarelli",
  "Pipe rigate",
  "Pizzoccheri",
  "Quadrefiore",
  "Radiatori",
  "Riccioli",
  "Ricciolini",
  "Ricciutelle",
  "Rigatoncini",
  "Rigatoni",
  "Rombi",
  "Rotelle",
  "Sagnette",
  "Sagnarelli",
  "Sedani",
  "Spirali",
  "Spiralini (Scharfalini)",
  "Strapponi",
  "Strozzapreti",
  "Testaroli",
  "Tortiglioni",
  "Treccioni",
  "Trenne",
  "Trofie",
  "Trottole",
  "Tuffoli",
  "Vesuvio",
  "Cencioni",
  "Corzetti",
  "Fainelle",
  "Foglie d'ulivo",
  "Orecchiette",
  "Acini di pepe",
  "Alphabet pasta",
  "Anchellini",
  "Anelli",
  "Anellini",
  "Armonie",
  "Conchigliette",
  "Coquillettes",
  "Coralli",
  "Corallini",
  "Cuscussu",
  "Ditali",
  "Egg barley",
  "Farfalline",
  "Fideos[126]",
  "Filini",
  "Fregula",
  "Funghini",
  "Gianduietta",
  "Grano",
  "Gramigna",
  "Grattini",
  "Grattoni",
  "Margheritine",
  "Merletti",
  "Midolline",
  "Occhi di passero",
  "Occhi di pernice",
  "Orzo",
  "Pastina",
  "Piombi",
  "Ptitim",
  "Puntine",
  "Quadrettini",
  "Sorprese",
  "Stelle",
  "Stortini",
  "Tripolini",
  "Agnolini",
  "Agnolotti",
  "Caccavelle",
  "Cannelloni",
  "Cappelletti",
  "Caramelle",
  "Casoncelli",
  "Casunziei",
  "Conchiglioni",
  "Culurgioni",
  "Fagottini",
  "Lumache",
  "Mezzelune",
  "Occhi di lupo",
  "Pansotti",
  "Pavese agnolotti",
  "Ravioli",
  "Rotolo ripieno",
  "Sacchettoni",
  "Tortelli",
  "Tortellini",
  "Tortelloni",
  "Tufoli",
  "Canederli",
  "Donderet",
  "Gnocchi",
]
`);
  });
});
