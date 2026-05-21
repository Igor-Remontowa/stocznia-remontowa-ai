const companies = [
  {
    "name": "PARTNER SERWIS",
    "location": "Świecie",
    "contact": "Dariusz Bohdziewicz",
    "phone": "606370344",
    "email": "dariusz.bohdziewicz@grupapartner.pl",
    "website": "https://www.grupapartner.pl/",
    "services": "remonty; remont silników exx wysokie i niskie napięcie; wymiany wałów; scharge; instalacje elektryczne ex; sn oświetlenie; rozdzielnie montaż instalacji elektrycznych; również w standardzie ex",
    "tags": [
      "remonty",
      "remont silników exx wysokie i niskie napięcie",
      "wymiany wałów",
      "scharge",
      "instalacje elektryczne ex",
      "sn oświetlenie",
      "rozdzielnie montaż instalacji elektrycznych",
      "również w standardzie ex"
    ]
  },
  {
    "name": "NAWIREM",
    "location": "GSR",
    "contact": "Józef Ormańczyk",
    "phone": "605955226",
    "email": "nawiremspj@wp.pl",
    "website": "https://www.trojmiasto.pl/Nawirem-Sp-j-o90158.html",
    "services": "remonty; remont i przezwajanie silników",
    "tags": [
      "remonty",
      "remont i przezwajanie silników"
    ]
  },
  {
    "name": "PRĄD",
    "location": "GSR",
    "contact": "",
    "phone": "505511572",
    "email": "rafal.orzol@pradservice.com",
    "website": "https://www.pradservice.com/",
    "services": "remonty; remont silników elektrycznych; usługi ślusarskie; światłowód",
    "tags": [
      "remonty",
      "remont silników elektrycznych",
      "usługi ślusarskie",
      "światłowód"
    ]
  },
  {
    "name": "EMAO",
    "location": "Gdynia",
    "contact": "",
    "phone": "501265738",
    "email": "ami@emao.pl",
    "website": "https://www.emao.pl/kontakt.html",
    "services": "remonty; remont i przezwajanie silników",
    "tags": [
      "remonty",
      "remont i przezwajanie silników"
    ]
  },
  {
    "name": "EMS",
    "location": "Bierutów k. Wrocławia",
    "contact": "",
    "phone": "797591412",
    "email": "j.pawlak@emsmotors.pl",
    "website": "https://www.emsmotors.pl/kontakt",
    "services": "serwis silników elektrycznych; wymiana łożysk; montaże; demontaże; regeneracja; tulejowanie; pomiary",
    "tags": [
      "serwis silników elektrycznych",
      "wymiana łożysk",
      "montaże",
      "demontaże",
      "regeneracja",
      "tulejowanie",
      "pomiary"
    ]
  },
  {
    "name": "EMIT",
    "location": "Żychlin",
    "contact": "",
    "phone": "(24) 285 10 14",
    "email": "emit.handlowy@cantonigroup.com",
    "website": "https://www.cantonigroup.com/emit",
    "services": "silniki; próby dużych silników 3mw",
    "tags": [
      "silniki",
      "próby dużych silników 3mw"
    ]
  },
  {
    "name": "ABI",
    "location": "Trzeciewnica",
    "contact": "Jakub Rybacki",
    "phone": "509824794",
    "email": "rybacki@abi-serwis.pl",
    "website": "https://abi-serwis.pl/serwis",
    "services": "remonty; serwis maszyn elektrycznych tj prądnice generatory; silniki elektryczne serwis na statku oraz w naszym warsztacie remontowym",
    "tags": [
      "remonty",
      "serwis maszyn elektrycznych tj prądnice generatory",
      "silniki elektryczne serwis na statku oraz w naszym warsztacie remontowym"
    ]
  },
  {
    "name": "ELMOR",
    "location": "Gdańsk",
    "contact": "",
    "phone": "509572895",
    "email": "dorotaz@elmor.com.pl",
    "website": "https://elmor.com.pl/?pl_oferta;19",
    "services": "remonty; modernizacje i remonty maszyn elektrycznych do 1 kv; elektryczne urządzenia rozdzielczo - sterownicze niskonapieciowe do 1kv - 36 kv",
    "tags": [
      "remonty",
      "modernizacje i remonty maszyn elektrycznych do 1 kv",
      "elektryczne urządzenia rozdzielczo - sterownicze niskonapieciowe do 1kv - 36 kv"
    ]
  },
  {
    "name": "STERNET",
    "location": "Gdańsk",
    "contact": "Tadeusz Łukomski",
    "phone": "722241831",
    "email": "sternet@sternet.pl",
    "website": "https://sternet.pl/pl/oferta/serwis",
    "services": "remonty; usługi remonty; naprawy; diagnostyka silników; przekładni; wentylatorów itp dystrybucja silników elektrycznych; motoreduktorów; sprzęgieł; przemienników częstotliwości; automatyki przemysłowej; akcesoriów specjalistycznych efektywność energetyczna w technice napędowej eef",
    "tags": [
      "remonty",
      "usługi remonty",
      "naprawy",
      "diagnostyka silników",
      "przekładni",
      "wentylatorów itp dystrybucja silników elektrycznych",
      "motoreduktorów",
      "sprzęgieł",
      "przemienników częstotliwości",
      "automatyki przemysłowej",
      "akcesoriów specjalistycznych efektywność energetyczna w technice napędowej eef"
    ]
  },
  {
    "name": "ENERIA",
    "location": "Gdańsk",
    "contact": "",
    "phone": "602276654",
    "email": "marine@eneria.pl",
    "website": "https://eneria.pl/kontakt/",
    "services": "remonty; remonty silników i agregatów cata",
    "tags": [
      "remonty",
      "remonty silników i agregatów cata"
    ]
  },
  {
    "name": "KONWEKTOR",
    "location": "Lipno",
    "contact": "",
    "phone": "693738600",
    "email": "marcin.wozniak@konwektor.pl",
    "website": "https://konwektor.pl/dane-kontaktowe/",
    "services": "remonty; instalacje klimatyzacji; wentylacja; klimatyzacja; remonty silników i obróbka metali",
    "tags": [
      "remonty",
      "instalacje klimatyzacji",
      "wentylacja",
      "klimatyzacja",
      "remonty silników i obróbka metali"
    ]
  },
  {
    "name": "IGABAU",
    "location": "Łęgowo",
    "contact": "",
    "phone": "500343952",
    "email": "serwis.energetyczny@gmail.com",
    "website": "https://aleo.com/pl/firma/igabau-sp-z-oo-legowo",
    "services": "czyszczenie silników; prądnic; wymiana łożysk",
    "tags": [
      "czyszczenie silników",
      "prądnic",
      "wymiana łożysk"
    ]
  },
  {
    "name": "MOTORMONITOR S.J",
    "location": "Toruń",
    "contact": "Sławomir Bocianowski",
    "phone": "600-839-211",
    "email": "serwis@motormonitor.com.pl",
    "website": "www.motormonitor.pl",
    "services": "pomiary współosiowości wałów śrubowych; osiowanie silników; pomp; wentylatorów; wyważanie wentylatorów; pomiary drgań",
    "tags": [
      "pomiary współosiowości wałów śrubowych",
      "osiowanie silników",
      "pomp",
      "wentylatorów",
      "wyważanie wentylatorów",
      "pomiary drgań"
    ]
  },
  {
    "name": "A&JProject",
    "location": "Borkowo",
    "contact": "Adam Malicki, Jacek Janeczko",
    "phone": "501 805 537 ,  660 805 888",
    "email": "ajprojects.c@gmail.com",
    "website": "",
    "services": "demontaż silników",
    "tags": [
      "demontaż silników"
    ]
  },
  {
    "name": "ETMAL",
    "location": "Gdynia",
    "contact": "Piotr Karnikowski",
    "phone": "784948431",
    "email": "piotr.karnikowski@etmal.com.pl",
    "website": "https://etmal.com.pl/",
    "services": "wciągarki kotwiczno-cumownicze i holownicze; maszyny sterowe; dźwigi ładunkowe; silniki; akumulatory i pompy hydrauliczne; siłowniki; zawory i rozdzielacze; systemy hydrauliczne i pneumatyczne",
    "tags": [
      "wciągarki kotwiczno-cumownicze i holownicze",
      "maszyny sterowe",
      "dźwigi ładunkowe",
      "silniki",
      "akumulatory i pompy hydrauliczne",
      "siłowniki",
      "zawory i rozdzielacze",
      "systemy hydrauliczne i pneumatyczne"
    ]
  },
  {
    "name": "DAMEL",
    "location": "Dąbrowa Górnicza",
    "contact": "Piotr Janicki",
    "phone": "532441936",
    "email": "pjanicki@damel.pl",
    "website": "https://damel.pl/",
    "services": "remonty; produkcja elektrycznych silników asynchronicznych; produkcja silników zintegrowanych z falownikami; produkcja aparatury elektrycznej i urządzeń pomocniczych; usługi serwisowe remonty; diagnostyka; konserwacja maszyn elektrycznych wysokiego i niskiego napięcia; transformatorów; urządzeń elektrycznych",
    "tags": [
      "remonty",
      "produkcja elektrycznych silników asynchronicznych",
      "produkcja silników zintegrowanych z falownikami",
      "produkcja aparatury elektrycznej i urządzeń pomocniczych",
      "usługi serwisowe remonty",
      "diagnostyka",
      "konserwacja maszyn elektrycznych wysokiego i niskiego napięcia",
      "transformatorów",
      "urządzeń elektrycznych"
    ]
  },
  {
    "name": "BESTGUM",
    "location": "Rogowiec",
    "contact": "",
    "phone": "(44) 737 18 24",
    "email": "sekretariat@bestgum.pl",
    "website": "https://bestgum.pl/naprawa-urzadzen-elektrycznych",
    "services": "remonty; remonty i przeglądy silników elektrycznych; remont i przeglądy transformatorów; remonty urządzeń przemysłowych i elektrycznych",
    "tags": [
      "remonty",
      "remonty i przeglądy silników elektrycznych",
      "remont i przeglądy transformatorów",
      "remonty urządzeń przemysłowych i elektrycznych"
    ]
  },
  {
    "name": "PRIME POWER Mateusz Cłapa",
    "location": "Tomaszów Mazowiecki",
    "contact": "",
    "phone": "604 2101 02",
    "email": "serwis@prime-power.pl",
    "website": "https://prime-power.pl/",
    "services": "agregaty; prądnice; przezwajanie",
    "tags": [
      "agregaty",
      "prądnice",
      "przezwajanie"
    ]
  },
  {
    "name": "REMEL",
    "location": "Świecie",
    "contact": "",
    "phone": "606370344",
    "email": "dariusz.bohdziewicz@remel.pl",
    "website": "https://www.remel.pl/instalacje_elektryczne/",
    "services": "wysokie i niskie napięcie; wymiany wałów; scharge; instalacje elektryczne ex; sn oświetlenie; rozdzielnie montaż instalacji elektrycznych; również w standardzie ex",
    "tags": [
      "wysokie i niskie napięcie",
      "wymiany wałów",
      "scharge",
      "instalacje elektryczne ex",
      "sn oświetlenie",
      "rozdzielnie montaż instalacji elektrycznych",
      "również w standardzie ex"
    ]
  },
  {
    "name": "3K Automatyka",
    "location": "Osiek",
    "contact": "Grzegorz Kupiec",
    "phone": "577068800",
    "email": "biuro@3kautomatyka.pl",
    "website": "https://www.3kautomatyka.pl/uslugi-elektryczne",
    "services": "wyłączniki; pomiary; próby napięciowe",
    "tags": [
      "wyłączniki",
      "pomiary",
      "próby napięciowe"
    ]
  },
  {
    "name": "COLECTIV",
    "location": "Kolbudy",
    "contact": "",
    "phone": "512517178",
    "email": "Jakub.Wroblewski@colectiv.pl",
    "website": "http://colectiv.pl/index.html#features12-2i",
    "services": "firma w polocie do 15 osób - odła wro budowa i modernizacja instalacji elektrycznych montażu rozdzielnic elektrycznych",
    "tags": [
      "firma w polocie do 15 osób - odła wro budowa i modernizacja instalacji elektrycznych montażu rozdzielnic elektrycznych"
    ]
  },
  {
    "name": "KONEKT",
    "location": "Poznań",
    "contact": "",
    "phone": "61 861 54 64",
    "email": "info@konekt.com.pl",
    "website": "https://www.konekt.com.pl/pracownia-projektowa/",
    "services": "projektowanie rozdzielni nn i instalacji elektrycznych",
    "tags": [
      "projektowanie rozdzielni nn i instalacji elektrycznych"
    ]
  },
  {
    "name": "DELTA",
    "location": "Gdańsk",
    "contact": "Jan Kaczyśki",
    "phone": "790566017",
    "email": "delta.elektro.systems@gmail.com",
    "website": "https://deltaelectrosystems.pl/",
    "services": "prace elektryczne; ślusarka; andoy",
    "tags": [
      "prace elektryczne",
      "ślusarka",
      "andoy"
    ]
  },
  {
    "name": "RES",
    "location": "GSR",
    "contact": "",
    "phone": "501534839",
    "email": "W.Dabski@res.rh.pl",
    "website": "https://www.res.rh.pl/uslugi/",
    "services": "instalacje elektryczne; monitoring cctv; elektryka; ślusarka; spawanie; automatyka; system zużycia paliwa; ffco; wyłączniki; rozdzielnice",
    "tags": [
      "instalacje elektryczne",
      "monitoring cctv",
      "elektryka",
      "ślusarka",
      "spawanie",
      "automatyka",
      "system zużycia paliwa",
      "ffco",
      "wyłączniki",
      "rozdzielnice"
    ]
  },
  {
    "name": "HGS",
    "location": "GSR",
    "contact": "Roman Gragowski",
    "phone": "605305314",
    "email": "roman.gragowski@hgsolutions.pl",
    "website": "https://www.hareidgroup.com/pl/przemysl-morski/hg-solutions-sp-zo-o/",
    "services": "instalacje elektryczne; monitoring cctv; automatyka; elektryka; ślusarka; branża elektryczna; projektowanie systemów okrętowych; wykonywanie rozdzielnic; własny system monitoringu statkowego hgias; programowanie",
    "tags": [
      "instalacje elektryczne",
      "monitoring cctv",
      "automatyka",
      "elektryka",
      "ślusarka",
      "branża elektryczna",
      "projektowanie systemów okrętowych",
      "wykonywanie rozdzielnic",
      "własny system monitoringu statkowego hgias",
      "programowanie"
    ]
  },
  {
    "name": "HTC",
    "location": "GSR",
    "contact": "",
    "phone": "517735881",
    "email": "pawel.brzeski@htc-system.pl;",
    "website": "https://www.htc-system.pl/",
    "services": "instalacje elektryczne; elektryka; ślusarka; anody",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "ślusarka",
      "anody"
    ]
  },
  {
    "name": "ENAMOR",
    "location": "Gdynia",
    "contact": "Tomasz Czykier, Kierownik działu technicznego",
    "phone": "58 69 01 700",
    "email": "enamor@enamor.pl  service@enamor.pl",
    "website": "www.enamor.pl",
    "services": "nawigacja; automatyka; łączność; wyłączniki",
    "tags": [
      "nawigacja",
      "automatyka",
      "łączność",
      "wyłączniki"
    ]
  },
  {
    "name": "ESS",
    "location": "GSR",
    "contact": "",
    "phone": "514 185 115; 792 004 412",
    "email": "a.potapczuk@ess.com.pl",
    "website": "https://ess.com.pl/uslugi/",
    "services": "instalacje elektryczne; rozdzielnice; światłowody; telekomunikacja; ślusarka; elektryka",
    "tags": [
      "instalacje elektryczne",
      "rozdzielnice",
      "światłowody",
      "telekomunikacja",
      "ślusarka",
      "elektryka"
    ]
  },
  {
    "name": "AN-ELEC",
    "location": "Gdynia",
    "contact": "",
    "phone": "668-44-00",
    "email": "oferty@an-elec.pl",
    "website": "",
    "services": "instalacje elektryczne; rozdzielnice; kable; przeciwpożarowe; drabinki kablowe; światłowód; automatyka; elektryka",
    "tags": [
      "instalacje elektryczne",
      "rozdzielnice",
      "kable",
      "przeciwpożarowe",
      "drabinki kablowe",
      "światłowód",
      "automatyka",
      "elektryka"
    ]
  },
  {
    "name": "EL CARUZZI",
    "location": "Reda",
    "contact": "",
    "phone": "505-984-214",
    "email": "ELCARUZZI@GMAIL.COM",
    "website": "https://aleo.com/pl/firma/krystian-caruzzi-reda",
    "services": "instalacje kablowe; 12 osób - podwykonawcy res; ess; amt",
    "tags": [
      "instalacje kablowe",
      "12 osób - podwykonawcy res",
      "ess",
      "amt"
    ]
  },
  {
    "name": "INFINITY TECH",
    "location": "Borkowo",
    "contact": "",
    "phone": "606713710",
    "email": "infinitytechpiotrmisztal@gmail.com",
    "website": "",
    "services": "anody",
    "tags": [
      "anody"
    ]
  },
  {
    "name": "AC ELEKTRO",
    "location": "Gdynia",
    "contact": "",
    "phone": "519 818 501, 508 062 681",
    "email": "mg@acelektro.pl",
    "website": "https://acelektro.pl/oferta/",
    "services": "montaż torów i przejść kablowych oraz inne prace ślusarskie montaż i uruchomianie systemów nawigacyjnych montaż i uruchomianie systemów automatyki",
    "tags": [
      "montaż torów i przejść kablowych oraz inne prace ślusarskie montaż i uruchomianie systemów nawigacyjnych montaż i uruchomianie systemów automatyki"
    ]
  },
  {
    "name": "AMT",
    "location": "GSR",
    "contact": "",
    "phone": "552432086",
    "email": "k.michalak@amtsolutions.pl;",
    "website": "https://amtsolutions.pl/pl/services/",
    "services": "automatyka; instalacje kablowe; 12 osób - podwykonawcy res; ess; amt",
    "tags": [
      "automatyka",
      "instalacje kablowe",
      "12 osób - podwykonawcy res",
      "ess",
      "amt"
    ]
  },
  {
    "name": "NSG",
    "location": "GSR",
    "contact": "",
    "phone": "512111175",
    "email": "office@nordshipsgroup.pl",
    "website": "https://nordshipsgroup.pl/pl/glowna/",
    "services": "instalacje elektryczne; bwts; automatyka; elektryka 20 osób",
    "tags": [
      "instalacje elektryczne",
      "bwts",
      "automatyka",
      "elektryka 20 osób"
    ]
  },
  {
    "name": "INZON",
    "location": "Gdynia",
    "contact": "",
    "phone": "881 012 126; 668 931 860",
    "email": "e.kulesza@inzongroup.com",
    "website": "https://inzongroup.com/pl/grupa/",
    "services": "instalacje elektryczne; elektryka; ślusarka",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "ślusarka"
    ]
  },
  {
    "name": "DS-ELECTRO ENGINEERING",
    "location": "Gdynia",
    "contact": "",
    "phone": "501191097",
    "email": "sales@ds-electro.pl",
    "website": "http://ds-electro.pl/",
    "services": "elektronika; serwis; naprawa falowników i przetwornic",
    "tags": [
      "elektronika",
      "serwis",
      "naprawa falowników i przetwornic"
    ]
  },
  {
    "name": "TEAM ELECTRIC",
    "location": "Gdynia",
    "contact": "Pawel Kolny",
    "phone": "505874716",
    "email": "pawel.kolny@team-electric.com",
    "website": "https://www.team-electric.com/team-electric-group",
    "services": "instalacje elektryczne; elektryka; ślusarka",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "ślusarka"
    ]
  },
  {
    "name": "AMEK",
    "location": "Sztum",
    "contact": "",
    "phone": "609142842",
    "email": "w.iwanski@amek.net.pl",
    "website": "http://amek.pl/pl/uslugi/",
    "services": "ślusarka elektryczna",
    "tags": [
      "ślusarka elektryczna"
    ]
  },
  {
    "name": "ELEKTROBUDOWA",
    "location": "Warszawa",
    "contact": "Adam Malicki, Jacek Janeczko",
    "phone": "32 888 63 63",
    "email": "adam.matuszek@elektrobudowa.com.pl   lukasz.kaminski@elektrobudowa.com.pl",
    "website": "www.elektrobudowa.com.pl",
    "services": "prace elektroinstalacyjne; projekty; budowa rozdzielni sn; montaż; rozruch",
    "tags": [
      "prace elektroinstalacyjne",
      "projekty",
      "budowa rozdzielni sn",
      "montaż",
      "rozruch"
    ]
  },
  {
    "name": "Electric Unit Sp z.o.o",
    "location": "Gdańsk",
    "contact": "",
    "phone": "6697699940",
    "email": "electricunitpl@gmail.com",
    "website": "",
    "services": "naprawa i konserwacja statków i łodzi",
    "tags": [
      "naprawa i konserwacja statków i łodzi"
    ]
  },
  {
    "name": "MarineTeknik",
    "location": "Pruszcz Gdański",
    "contact": "",
    "phone": "",
    "email": "office@marineteknik.com",
    "website": "https://marineteknik.com/pl/jobs/elektryk/",
    "services": "elektrotechnika morska; instalacje na statkach pasażerskich; projektownie; realizacjia; uruchomienie",
    "tags": [
      "elektrotechnika morska",
      "instalacje na statkach pasażerskich",
      "projektownie",
      "realizacjia",
      "uruchomienie"
    ]
  },
  {
    "name": "GC energy",
    "location": "Rzeszów",
    "contact": "",
    "phone": "(+48) 178 501 663",
    "email": "biuro@gc-energy.eu;",
    "website": "https://gc-energy.eu/",
    "services": "usługi i realizacje dla przemysłu paliwowo-energetycznego; instalacje elektryczne; automatyka; telekomunikacja; serwis",
    "tags": [
      "usługi i realizacje dla przemysłu paliwowo-energetycznego",
      "instalacje elektryczne",
      "automatyka",
      "telekomunikacja",
      "serwis"
    ]
  },
  {
    "name": "ELEKTROMONTAŻ RZESZÓW S A",
    "location": "Rzeszów",
    "contact": "",
    "phone": "(+48) 86 405 30",
    "email": "m.goralik@elektromontaz.com.pl",
    "website": "https://elektromontaz.com.pl/",
    "services": "produkcja i montaż rozdzielnic sn; usługi elektroinstalacyjne; branża lądowa; linie kablowe; oświetlenie",
    "tags": [
      "produkcja i montaż rozdzielnic sn",
      "usługi elektroinstalacyjne",
      "branża lądowa",
      "linie kablowe",
      "oświetlenie"
    ]
  },
  {
    "name": "WROSYSTEM",
    "location": "Pruszcz Gdański",
    "contact": "",
    "phone": "(+48) 585 261 438",
    "email": "przemyslaw.zarski@wrosystem.pl",
    "website": "https://wrosystem.pl/",
    "services": "instalacje elektrotechniczne na statkach; prace w siłowniach; oświetlenie; montaż rozdzielnic",
    "tags": [
      "instalacje elektrotechniczne na statkach",
      "prace w siłowniach",
      "oświetlenie",
      "montaż rozdzielnic"
    ]
  },
  {
    "name": "El Professional Mariusz Maszota",
    "location": "Gdynia",
    "contact": "",
    "phone": "(+48) 586 782 386",
    "email": "biuro@elprofessional.pl",
    "website": "https://elprofessional.pl/",
    "services": "wykonywanie linii energetycznych kablowych i napowietrznych wysokiego; średniego oraz niskiego napięcia",
    "tags": [
      "wykonywanie linii energetycznych kablowych i napowietrznych wysokiego",
      "średniego oraz niskiego napięcia"
    ]
  },
  {
    "name": "ONETECH GROUP",
    "location": "Gdańsk",
    "contact": "",
    "phone": "607 879 959 \n696 972 972",
    "email": "baltic@onetech.global",
    "website": "",
    "services": "service; automatyka",
    "tags": [
      "service",
      "automatyka"
    ]
  },
  {
    "name": "Agat SA",
    "location": "Koluszki",
    "contact": "",
    "phone": "(+48) 447 146 610",
    "email": "biuro@agat-koluszki.pl",
    "website": "https://agat-koluszki.pl/",
    "services": "automatyka technologiczna; budownictwo przemysłowe; energetyka; projektowanie; telekomunikacja",
    "tags": [
      "automatyka technologiczna",
      "budownictwo przemysłowe",
      "energetyka",
      "projektowanie",
      "telekomunikacja"
    ]
  },
  {
    "name": "Trident Maritime Systems",
    "location": "Gdańsk",
    "contact": "",
    "phone": "+48 607-031-635",
    "email": "piotr.zabrocki@tridentllc.com",
    "website": "www.TridentBMC.com",
    "services": "przemysł stoczniowy; projektowanie; montaż; produkcja; hvac; zasilanie; wyposażenie",
    "tags": [
      "przemysł stoczniowy",
      "projektowanie",
      "montaż",
      "produkcja",
      "hvac",
      "zasilanie",
      "wyposażenie"
    ]
  },
  {
    "name": "COPCO PLUS",
    "location": "Imielin",
    "contact": "",
    "phone": "(+48) 501 697 439",
    "email": "arkadiusz.kopacz@copco.pl",
    "website": "https://copco.pl/",
    "services": "automatyka; instalacje elektryczne; elektroinstalatorstwo",
    "tags": [
      "automatyka",
      "instalacje elektryczne",
      "elektroinstalatorstwo"
    ]
  },
  {
    "name": "Elektryka Morska",
    "location": "Szczecin",
    "contact": "",
    "phone": "+48 506 371 781",
    "email": "bartlomiej.stepien@elektrykamorska.pl",
    "website": "https://www.elektrykamorska.pl/",
    "services": "instalacje elektryczne; systemy alarmowe; projekty; sprzedaż; produkcja; elektryka; automatyka; rozdzielnie; bam; bnwas; system alarmowy mostka; telegraf; kolumny sygnalizacyjne",
    "tags": [
      "instalacje elektryczne",
      "systemy alarmowe",
      "projekty",
      "sprzedaż",
      "produkcja",
      "elektryka",
      "automatyka",
      "rozdzielnie",
      "bam",
      "bnwas",
      "system alarmowy mostka",
      "telegraf",
      "kolumny sygnalizacyjne"
    ]
  },
  {
    "name": "ELECTROKOMPLEX",
    "location": "",
    "contact": "",
    "phone": "",
    "email": "k.brzozowski@elektrokomplex.pl",
    "website": "www.elektrokomplex.pl",
    "services": "instalacje elektryczne; projekty; wykonastwo; automatyka",
    "tags": [
      "instalacje elektryczne",
      "projekty",
      "wykonastwo",
      "automatyka"
    ]
  },
  {
    "name": "JANASZEK ELECTRIC",
    "location": "",
    "contact": "",
    "phone": "789012039",
    "email": "marcin.glebocki@janaszekelectric.pl",
    "website": "",
    "services": "",
    "tags": []
  },
  {
    "name": "Electra M&E Polska",
    "location": "Warszawa",
    "contact": "",
    "phone": "(+48) 222 103 710",
    "email": "office@electra.co.pl",
    "website": "https://www.electra.co.il/electra_polskaa",
    "services": "obiekty przemysłowe; energetyczne",
    "tags": [
      "obiekty przemysłowe",
      "energetyczne"
    ]
  },
  {
    "name": "MATTER ELECTRO Sp. z o.o.",
    "location": "Sopot",
    "contact": "",
    "phone": "(+48) 535 560 182",
    "email": "",
    "website": "https://matter-electro.com",
    "services": "prace głównie skandynawia; niemcy",
    "tags": [
      "prace głównie skandynawia",
      "niemcy"
    ]
  },
  {
    "name": "TAMALK",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "tomasz.malkiewicz@tamalk.pl",
    "website": "https://www.tamalk.pl/kontakt/",
    "services": "instalacje elektryczne; monitoring cctv; elektryka; ślusarka; automatyka przemysłowa",
    "tags": [
      "instalacje elektryczne",
      "monitoring cctv",
      "elektryka",
      "ślusarka",
      "automatyka przemysłowa"
    ]
  },
  {
    "name": "Elektro-Plus",
    "location": "Gdynia",
    "contact": "",
    "phone": "(+48) 608 434 552",
    "email": "",
    "website": "https://elektroplus.biz/glowna/",
    "services": "",
    "tags": []
  },
  {
    "name": "ELNOW",
    "location": "Bydgoszcz",
    "contact": "",
    "phone": "(+48) 693 725 136",
    "email": "",
    "website": "http://www.elnow.pl",
    "services": "",
    "tags": []
  },
  {
    "name": "LUK-CONNECT",
    "location": "Strzeblino",
    "contact": "",
    "phone": "(+48) 660 583 535",
    "email": "",
    "website": "",
    "services": "",
    "tags": []
  },
  {
    "name": "Sigma-Electric",
    "location": "Bydgoszcz",
    "contact": "",
    "phone": "",
    "email": "",
    "website": "http://www.sigmaelectric.pl/",
    "services": "projektowanie; wykonywanie; uruchamianie instalacji elektrycznych",
    "tags": [
      "projektowanie",
      "wykonywanie",
      "uruchamianie instalacji elektrycznych"
    ]
  },
  {
    "name": "QENERGI Sp. z o.o.",
    "location": "Katowice",
    "contact": "",
    "phone": "(+48) 323 558 682",
    "email": "",
    "website": "https://qenergi.pl/pl/",
    "services": "montaż okablowania pomiary i uruchomienie",
    "tags": [
      "montaż okablowania pomiary i uruchomienie"
    ]
  },
  {
    "name": "Energocenter Sp. z o.o.",
    "location": "Katowice",
    "contact": "",
    "phone": "(+48) 322 523 485",
    "email": "",
    "website": "https://Energocenter.pl",
    "services": "projekt; wykonawstwo; badania i rozruchy; dostawa",
    "tags": [
      "projekt",
      "wykonawstwo",
      "badania i rozruchy",
      "dostawa"
    ]
  },
  {
    "name": "Ezet Sp. Z o.o.",
    "location": "Bygoszcz",
    "contact": "",
    "phone": "(+48) 525 835 161",
    "email": "",
    "website": "https://ezet.pl",
    "services": "",
    "tags": []
  },
  {
    "name": "OPA-ROW Sp. z o.o.",
    "location": "Rybnik",
    "contact": "",
    "phone": "(+48) 668 689 707",
    "email": "",
    "website": "https://opa-row.pl/",
    "services": "przemysł górniczy",
    "tags": [
      "przemysł górniczy"
    ]
  },
  {
    "name": "OMEGA ELECTRONICS",
    "location": "Warszawa",
    "contact": "",
    "phone": "513325698",
    "email": "info@omega-e.pl",
    "website": "www.omega-e.eu",
    "services": "automatyka przemysłowa falowniki serwonapędy sterowniki silnikó przepływomierze wskażniki przyrządy pomiarowe regulatory pid",
    "tags": [
      "automatyka przemysłowa falowniki serwonapędy sterowniki silnikó przepływomierze wskażniki przyrządy pomiarowe regulatory pid"
    ]
  },
  {
    "name": "A&D SERWIS",
    "location": "Wrocław",
    "contact": "",
    "phone": "730292100",
    "email": "info@adserwis.pl",
    "website": "",
    "services": "naprawy - sterowniki plc; panele hmi; falowniki i softstarty; serwonapędy; robotyka; silniki",
    "tags": [
      "naprawy - sterowniki plc",
      "panele hmi",
      "falowniki i softstarty",
      "serwonapędy",
      "robotyka",
      "silniki"
    ]
  },
  {
    "name": "Elstar Electric Artur Bygar",
    "location": "Kielce",
    "contact": "",
    "phone": "(+48) 413 616 973",
    "email": "",
    "website": "http://www.elstarelectric.pl/",
    "services": "",
    "tags": []
  },
  {
    "name": "Aniro Grupa Handlowa Engineering",
    "location": "Toruń",
    "contact": "",
    "phone": "(+48) 605 631 017",
    "email": "",
    "website": "https://aniro.pl/",
    "services": "montaż mechaniczny i elektryczny; uruchomienie systemu automatyki",
    "tags": [
      "montaż mechaniczny i elektryczny",
      "uruchomienie systemu automatyki"
    ]
  },
  {
    "name": "ZAKŁAD USŁUGOWO HANDLOWY INSTALATORSTWO I ARTYKUŁY ELEKTRYCZNE WIŚNIEWSKI NIDZICA SP Z O O",
    "location": "Ożarów Mazowiecki",
    "contact": "",
    "phone": "(+48) 896 256 677",
    "email": "",
    "website": "https://wisniewski-nidzica.pl/",
    "services": "obiekty przemysłowe; energetyczne",
    "tags": [
      "obiekty przemysłowe",
      "energetyczne"
    ]
  },
  {
    "name": "ZWSE Rzeszów",
    "location": "Rzeszów",
    "contact": "",
    "phone": "(+48) 175 804 900",
    "email": "",
    "website": "http://zwse.rzeszow.pl/pl/",
    "services": "remonty; budowa i remont linii elektroenergety-cznych",
    "tags": [
      "remonty",
      "budowa i remont linii elektroenergety-cznych"
    ]
  },
  {
    "name": "Elektrotim SA",
    "location": "Wrocław",
    "contact": "",
    "phone": "(+48) 713 521 341",
    "email": "",
    "website": "https://www.elektrotim.pl/",
    "services": "sieci elektryczne; automatyka przemysłowa grupa kapitałowa elektrotim",
    "tags": [
      "sieci elektryczne",
      "automatyka przemysłowa grupa kapitałowa elektrotim"
    ]
  },
  {
    "name": "EnergoSter",
    "location": "Wrocław",
    "contact": "",
    "phone": "(+48) 502 185 170",
    "email": "",
    "website": "http://www.energoster.com.pl/",
    "services": "automatyka przemysłowa",
    "tags": [
      "automatyka przemysłowa"
    ]
  },
  {
    "name": "BUD-EL INSTAL SPÓŁKA Z O.O.",
    "location": "Gdańsk",
    "contact": "",
    "phone": "(+48) 583 334 816",
    "email": "",
    "website": "http://budel-instal.pl/",
    "services": "instalacje elektryczne w budownictwie przemysłowym oraz mieszkaniowych",
    "tags": [
      "instalacje elektryczne w budownictwie przemysłowym oraz mieszkaniowych"
    ]
  },
  {
    "name": "Elemont",
    "location": "Opole",
    "contact": "",
    "phone": "(+48) 775 432 395",
    "email": "elemont@elemont.pl",
    "website": "http://elemont.pl",
    "services": "obsługa dużych inwestycji w obszarze energetyki; przemysłu; ochrony środowiska",
    "tags": [
      "obsługa dużych inwestycji w obszarze energetyki",
      "przemysłu",
      "ochrony środowiska"
    ]
  },
  {
    "name": "REZONANS Sp. z o.o.",
    "location": "Zielona Góra",
    "contact": "",
    "phone": "(+48) 789 131 001",
    "email": "",
    "website": "http://rezonans-elektro.pl",
    "services": "roboty elektryczne; szafy elektryczne; robotyka i automatyka",
    "tags": [
      "roboty elektryczne",
      "szafy elektryczne",
      "robotyka i automatyka"
    ]
  },
  {
    "name": "EKT INSTAL",
    "location": "Wrocław",
    "contact": "",
    "phone": "(+48) 715 851 480",
    "email": "",
    "website": "http://ektinstal.com/",
    "services": "głównie leasing pracowników do pracy za granicą",
    "tags": [
      "głównie leasing pracowników do pracy za granicą"
    ]
  },
  {
    "name": "ETB Elektronika",
    "location": "Lubliniec",
    "contact": "",
    "phone": "(+48) 791 768 941",
    "email": "",
    "website": "http://etb-elektrotechnik.eu/",
    "services": "głównie montaż szaf; dodatkowo wykonanie instalacji przemysłowych",
    "tags": [
      "głównie montaż szaf",
      "dodatkowo wykonanie instalacji przemysłowych"
    ]
  },
  {
    "name": "Quman",
    "location": "Blizne Łaszczyńskiego",
    "contact": "",
    "phone": "(+48) 608 408 185",
    "email": "",
    "website": "https://quman.pl/",
    "services": "",
    "tags": []
  },
  {
    "name": "Sitrax",
    "location": "Gdańsk",
    "contact": "",
    "phone": "(+48) 697 400 599",
    "email": "",
    "website": "http://sitraxengineering.eu/",
    "services": "wielobranżowa realizacja usług",
    "tags": [
      "wielobranżowa realizacja usług"
    ]
  },
  {
    "name": "El Marine",
    "location": "Gdańsk",
    "contact": "",
    "phone": "(+48) 791 129 417",
    "email": "",
    "website": "http://www.elmarine.pl",
    "services": "instalacje elektryczne; automatyka",
    "tags": [
      "instalacje elektryczne",
      "automatyka"
    ]
  },
  {
    "name": "JM-TRONIC S.A.",
    "location": "Warszawa",
    "contact": "",
    "phone": "(+48) 225 166 666",
    "email": "",
    "website": "http://jmtronik.pl/",
    "services": "montażu; podłączenia; rozruchu bezpośrednio na obiekcie",
    "tags": [
      "montażu",
      "podłączenia",
      "rozruchu bezpośrednio na obiekcie"
    ]
  },
  {
    "name": "EnergoAparatura",
    "location": "Katowice",
    "contact": "",
    "phone": "(+48) 327285410",
    "email": "",
    "website": "https://enap.com.pl/",
    "services": "prace elektryczne; pomiary; rozruchy",
    "tags": [
      "prace elektryczne",
      "pomiary",
      "rozruchy"
    ]
  },
  {
    "name": "P.H.U BYCHOWO",
    "location": "Lublin",
    "contact": "",
    "phone": "(+48) 814 420 288",
    "email": "",
    "website": "http://www.bychowo.lublin.pl/",
    "services": "usługi elektroenergetyczne branża głównie budowlana",
    "tags": [
      "usługi elektroenergetyczne branża głównie budowlana"
    ]
  },
  {
    "name": "TP_ELECTRIC",
    "location": "Pruszcz Gdański",
    "contact": "",
    "phone": "",
    "email": "kontakt@tp-electric.com",
    "website": "https://tp-electric.com/",
    "services": "instalacje elektryczne; elektryka",
    "tags": [
      "instalacje elektryczne",
      "elektryka"
    ]
  },
  {
    "name": "KRISMAR",
    "location": "Bydgoszcz",
    "contact": "",
    "phone": "603088834",
    "email": "dzial.handlowy@krismar.tech",
    "website": "https://www.krismar.biz/wspolpraca",
    "services": "usługi spawalnicze i ślusarskie",
    "tags": [
      "usługi spawalnicze i ślusarskie"
    ]
  },
  {
    "name": "Elektryk.Gdańsk",
    "location": "Gdańsk",
    "contact": "",
    "phone": "604664325",
    "email": "brak",
    "website": "brak",
    "services": "instalacje elektryczne",
    "tags": [
      "instalacje elektryczne"
    ]
  },
  {
    "name": "ELEKTROTECH PARTNER",
    "location": "Gdańsk",
    "contact": "",
    "phone": "500225587",
    "email": "eltepartner@gmail.com",
    "website": "https://elektryk3miasto.pl/oferta/",
    "services": "instalacje elektryczne; systemy alarmowe; elektryka; automatyka; pomiary; alarmy i kamery",
    "tags": [
      "instalacje elektryczne",
      "systemy alarmowe",
      "elektryka",
      "automatyka",
      "pomiary",
      "alarmy i kamery"
    ]
  },
  {
    "name": "GRIZ POLAND SP. Z O. O. SP",
    "location": "Gdańsk",
    "contact": "",
    "phone": "660295957",
    "email": "kamil.ulatowski@griz.pl",
    "website": "http://www.griz.pl/oferta/instalacje-elektryczne",
    "services": "instalacje elektryczne; elektryka; serwis",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "serwis"
    ]
  },
  {
    "name": "MES/SONATA",
    "location": "GSR",
    "contact": "",
    "phone": "",
    "email": "janusz@tymoteusz.com",
    "website": "",
    "services": "",
    "tags": []
  },
  {
    "name": "Wiesław Budzich Usługi Elektryczne i Pomiarowe",
    "location": "Tczew",
    "contact": "",
    "phone": "692468130",
    "email": "wieslaw.budzich@wp.pl",
    "website": "",
    "services": "instalacje elektryczne; elektryka",
    "tags": [
      "instalacje elektryczne",
      "elektryka"
    ]
  },
  {
    "name": "ElNet Installation",
    "location": "Gdańsk",
    "contact": "",
    "phone": "733379592",
    "email": "office@elnetinstallation.pl",
    "website": "",
    "services": "instalacje elektryczne; elektryka",
    "tags": [
      "instalacje elektryczne",
      "elektryka"
    ]
  },
  {
    "name": "El-instal",
    "location": "Gdynia",
    "contact": "",
    "phone": "507169589",
    "email": "jacek@el-instal.com.pl",
    "website": "https://www.el-instal.com.pl/oferta/",
    "services": "instalacje elektryczne; elektryka",
    "tags": [
      "instalacje elektryczne",
      "elektryka"
    ]
  },
  {
    "name": "Lamel",
    "location": "Gdańsk",
    "contact": "",
    "phone": "661600307",
    "email": "marcin.zawadzki@lamel.com.pl",
    "website": "http://lamel.com.pl/12-oferta",
    "services": "instalacje elektryczne; rozdzielnice; elektryka",
    "tags": [
      "instalacje elektryczne",
      "rozdzielnice",
      "elektryka"
    ]
  },
  {
    "name": "NordaMar",
    "location": "Gdynia",
    "contact": "",
    "phone": "58 660 30 37",
    "email": "nordamar@nordamar.pl",
    "website": "https://nordamar.pl/projects/",
    "services": "instalacje elektryczne; elektryka; automatyka",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "automatyka"
    ]
  },
  {
    "name": "el-mos",
    "location": "Lublewo Gdańskie",
    "contact": "",
    "phone": "48538488466",
    "email": "biuro@el-mos.html",
    "website": "https://www.el-mos.pl/#txt-3col-89681",
    "services": "instalacje elektryczne; elektryka",
    "tags": [
      "instalacje elektryczne",
      "elektryka"
    ]
  },
  {
    "name": "atsystems",
    "location": "Gdańsk",
    "contact": "",
    "phone": "58 739 65 57",
    "email": "biuro@atsystems.pl",
    "website": "https://www.atsystems.pl/#zakres-dzialalnosci",
    "services": "instalacje elektryczne; elektryka; rozdzielnice; przeciwpożarowe; automatyka",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "rozdzielnice",
      "przeciwpożarowe",
      "automatyka"
    ]
  },
  {
    "name": "Schneider Electric",
    "location": "Gdynia",
    "contact": "",
    "phone": "509200807",
    "email": "radoslaw.bryza@se.com",
    "website": "",
    "services": "wyłaczniki przeglad; uruchomiwniea; urządzeń schneider eelctric; wymiana aparatów innych producentów",
    "tags": [
      "wyłaczniki przeglad",
      "uruchomiwniea",
      "urządzeń schneider eelctric",
      "wymiana aparatów innych producentów"
    ]
  },
  {
    "name": "BALTYARD",
    "location": "Gdynia",
    "contact": "",
    "phone": "517073717",
    "email": "office@baltyard.com",
    "website": "https://www.baltyard.com/#oferta",
    "services": "instalacje hydrauliczne; remonty; remonty klasowe; serwis systemów elektrycznych; hydraulika; przeglądy silników",
    "tags": [
      "instalacje hydrauliczne",
      "remonty",
      "remonty klasowe",
      "serwis systemów elektrycznych",
      "hydraulika",
      "przeglądy silników"
    ]
  },
  {
    "name": "Virtus-Control Piotr Roszkowski",
    "location": "Gdynia",
    "contact": "Piotr Roszkowski",
    "phone": "608404831",
    "email": "Piotr.roszkowski@virtuscontrol.pl",
    "website": "https://virtuscontrol.pl/services/",
    "services": "instalacje elektryczne; sieci sn i nn; oświetlenie zasilanie gruntowe; automatyka",
    "tags": [
      "instalacje elektryczne",
      "sieci sn i nn",
      "oświetlenie zasilanie gruntowe",
      "automatyka"
    ]
  },
  {
    "name": "El-systems",
    "location": "Gdańsk",
    "contact": "",
    "phone": "792663773",
    "email": "marcinturko@el-system.gda.pl",
    "website": "https://el-system.gda.pl/uslugi-elektryczne-gdansk/",
    "services": "instalacje elektryczne; elektryka; podłączenia",
    "tags": [
      "instalacje elektryczne",
      "elektryka",
      "podłączenia"
    ]
  },
  {
    "name": "Elektryk-gda",
    "location": "Pruszcz/Gdańsk",
    "contact": "",
    "phone": "698055095, 791 093 791",
    "email": "",
    "website": "http://elektryk-gda.pl/",
    "services": "remonty; montaż i remonty instalacji elektrycznych; podłaczanie",
    "tags": [
      "remonty",
      "montaż i remonty instalacji elektrycznych",
      "podłaczanie"
    ]
  },
  {
    "name": "SOLTEC SERVICES",
    "location": "Gdańsk",
    "contact": "",
    "phone": "500215062",
    "email": "biuro@soltec.com.pl",
    "website": "https://soltec.com.pl/oferta/",
    "services": "remonty; ślusarka elektryczna; stalówka; rury; izolacja; remonty i budowy kadłuba",
    "tags": [
      "remonty",
      "ślusarka elektryczna",
      "stalówka",
      "rury",
      "izolacja",
      "remonty i budowy kadłuba"
    ]
  },
  {
    "name": "OMK",
    "location": "Gdańsk",
    "contact": "",
    "phone": "662171864",
    "email": "office@omk.com.pl",
    "website": "https://omk.com.pl/oferta/",
    "services": "instalacje hydrauliczne; rozdzielnice; systemy elektryczne; rurarskie; elektro-hydraulika; fat",
    "tags": [
      "instalacje hydrauliczne",
      "rozdzielnice",
      "systemy elektryczne",
      "rurarskie",
      "elektro-hydraulika",
      "fat"
    ]
  },
  {
    "name": "ATB",
    "location": "GSR",
    "contact": "",
    "phone": "",
    "email": "atb.pomorze@gmail.com",
    "website": "https://aleo.com/pl/firma/atb-sp-z-oo-gdansk",
    "services": "demontaże",
    "tags": [
      "demontaże"
    ]
  },
  {
    "name": "WRO",
    "location": "Pruszcz",
    "contact": "",
    "phone": "58 526 14 38",
    "email": "biuro@wrosystem.pl",
    "website": "https://wrosystem.pl/oferta",
    "services": "instalacje elektryczne niskoprądowe; przeciwpożarowe; automatyka; elektrotechnika stoczniowa",
    "tags": [
      "instalacje elektryczne niskoprądowe",
      "przeciwpożarowe",
      "automatyka",
      "elektrotechnika stoczniowa"
    ]
  },
  {
    "name": "ELEKTROTECHNIKA",
    "location": "Gdynia",
    "contact": "",
    "phone": "535-416-881",
    "email": "BIURO@ELEKTROTECHNIKA.PL",
    "website": "",
    "services": "instalacje; wyąłczniki; powykownawca htc; enamor",
    "tags": [
      "instalacje",
      "wyąłczniki",
      "powykownawca htc",
      "enamor"
    ]
  },
  {
    "name": "Sondex",
    "location": "Warszawa",
    "contact": "",
    "phone": "783-838-280",
    "email": "mpo@sondex.pl",
    "website": "",
    "services": "solomierze elektroniczne",
    "tags": [
      "solomierze elektroniczne"
    ]
  },
  {
    "name": "ALFA LAVAL",
    "location": "Gdynia",
    "contact": "",
    "phone": "",
    "email": "andrzej.pietka@alfalaval.com",
    "website": "https://www.alfalaval.pl/kontakt",
    "services": "bwts",
    "tags": [
      "bwts"
    ]
  },
  {
    "name": "TMX",
    "location": "GSR",
    "contact": "",
    "phone": "58 307-21-52",
    "email": "tmx@tmx.pl",
    "website": "https://tmx.pl/",
    "services": "",
    "tags": []
  },
  {
    "name": "Mikroenergetyka Sp.J.",
    "location": "SOPOT",
    "contact": "Tomasz Wisniewski",
    "phone": "603943875",
    "email": "tw@mikroenergetyka.com.pl",
    "website": "http://mikroenergetyka.com.pl/",
    "services": "elektrycznym ogrzewaniem kable; maty grzejne; sterowanie",
    "tags": [
      "elektrycznym ogrzewaniem kable",
      "maty grzejne",
      "sterowanie"
    ]
  },
  {
    "name": "RyzaEnginering",
    "location": "Gdańsk",
    "contact": "Ryszard Zabudowski",
    "phone": "58-682-0316",
    "email": "ryzaeng@wp.pl",
    "website": "",
    "services": "iccp; mgps",
    "tags": [
      "iccp",
      "mgps"
    ]
  },
  {
    "name": "Mirosław Szwarc",
    "location": "Gdynia",
    "contact": "",
    "phone": "58-621-8923",
    "email": "",
    "website": "",
    "services": "alfa laval",
    "tags": [
      "alfa laval"
    ]
  },
  {
    "name": "Zeltech",
    "location": "Łódz",
    "contact": "Sebastian Jagiełło",
    "phone": "603-630-643",
    "email": "sebastian.jagiello@zeltech.pl",
    "website": "www.zeltech.pl",
    "services": "nowe silniki elektryczne",
    "tags": [
      "nowe silniki elektryczne"
    ]
  },
  {
    "name": "Macgregor",
    "location": "Gdynia",
    "contact": "",
    "phone": "608-697 992",
    "email": "gdynia.poland@macgregor.com",
    "website": "https://www.portalmorski.pl/katalog-firm/firma/946-macgregor-poland-sp-z-o-o",
    "services": "",
    "tags": []
  },
  {
    "name": "ABB",
    "location": "Katowice/Gdańsk",
    "contact": "Wadim Stochmiałek ,  Sławomir Zwolińsk",
    "phone": "605-900-479 ; 601-364-359",
    "email": "wadim.stochmialek@pl.abb.com",
    "website": "https://new.abb.com/pl",
    "services": "",
    "tags": []
  },
  {
    "name": "MEGAT",
    "location": "Kolbudy",
    "contact": "Mirosław Mocarski",
    "phone": "600-424-670",
    "email": "mocarski@megat.pl",
    "website": "",
    "services": "zapytania kable",
    "tags": [
      "zapytania kable"
    ]
  },
  {
    "name": "MAAT Sp. Z o.o.",
    "location": "Gdynia",
    "contact": "",
    "phone": "58 741 58 81",
    "email": "sales@maat24.pl",
    "website": "https://maat24.pl/",
    "services": "dystrybucja",
    "tags": [
      "dystrybucja"
    ]
  },
  {
    "name": "EATON",
    "location": "Gdańsk",
    "contact": "Tomasz Bółkowski",
    "phone": "694-430-975",
    "email": "tomaszbolkowski@eaton.com",
    "website": "https://www.eaton.com/pl/pl-pl.html",
    "services": "ups-y",
    "tags": [
      "ups-y"
    ]
  },
  {
    "name": "FAMOR",
    "location": "Bydgoszcz",
    "contact": "Mariola Rojecka",
    "phone": "600-224-406",
    "email": "mrojecka@famor.pl",
    "website": "https://famor.pl/5/produkty",
    "services": "oprawy przeciwwybuchowe sprzęt sygnalizacyjny rozdzielnice projektory i naświetlacze pulpity nawigacyjne i sterownicze",
    "tags": [
      "oprawy przeciwwybuchowe sprzęt sygnalizacyjny rozdzielnice projektory i naświetlacze pulpity nawigacyjne i sterownicze"
    ]
  },
  {
    "name": "PG",
    "location": "Gdańsk",
    "contact": "Paweł Zariczny",
    "phone": "668-141-009",
    "email": "pawel.zariczny@pg.edu.pl",
    "website": "https://pg.edu.pl/uczelnia/wydzialy/wydzial-inzynierii-mechanicznej-i-okretownictwa",
    "services": "okrętowe urządzenia demagnetyzacyjne",
    "tags": [
      "okrętowe urządzenia demagnetyzacyjne"
    ]
  },
  {
    "name": "Elnord",
    "location": "REDA",
    "contact": "Adam Blok",
    "phone": "602-611-228",
    "email": "biuro@elnord.pl",
    "website": "https://elnord.pl/katalog-produktow/",
    "services": "osprzęt kablowy te connectivity raychem; przepusty kablowe hauff-technik narzędzia klauke złączki i końcówki klauke przewody grzejne raychem",
    "tags": [
      "osprzęt kablowy te connectivity raychem",
      "przepusty kablowe hauff-technik narzędzia klauke złączki i końcówki klauke przewody grzejne raychem"
    ]
  },
  {
    "name": "NAVY-SAN",
    "location": "Gdynia",
    "contact": "Paweł Michalski, Michał Wiśniewski",
    "phone": "519010065",
    "email": "biuro@navy-san.pl",
    "website": "www.navy-san.pl",
    "services": "remonty; specjalizacja firmy obejmuje wykonywanie i serwis okrętowych systemów hvac; sanitarnych; chłodniczych oraz filtrowentylacyjnych firma realizuje także modernizacje; remonty i kompleksowe wyposażenie jednostek pływających",
    "tags": [
      "remonty",
      "specjalizacja firmy obejmuje wykonywanie i serwis okrętowych systemów hvac",
      "sanitarnych",
      "chłodniczych oraz filtrowentylacyjnych firma realizuje także modernizacje",
      "remonty i kompleksowe wyposażenie jednostek pływających"
    ]
  },
  {
    "name": "Marineinvest",
    "location": "Gdańsk",
    "contact": "Bartosz Jarmoliński, Mateusz Ilasiewicz",
    "phone": "728-359-090,  728-462-210",
    "email": "safety@marineinvestgroup.com",
    "website": "https://marineinvestgroup.com/",
    "services": "wirówki; gas detection system; kalibracja ows - 15ppm",
    "tags": [
      "wirówki",
      "gas detection system",
      "kalibracja ows - 15ppm"
    ]
  },
  {
    "name": "TECHWIND",
    "location": "Banino",
    "contact": "Grzegorz Żmijewski",
    "phone": "608430794",
    "email": "biuro@techwind.pl",
    "website": "BRAK",
    "services": "projektowanie; produkcja i montaż dźwigów osobowych i towarowych",
    "tags": [
      "projektowanie",
      "produkcja i montaż dźwigów osobowych i towarowych"
    ]
  },
  {
    "name": "Electro Ship Service",
    "location": "Gdańsk",
    "contact": "",
    "phone": "514185115",
    "email": "contact@ess.com.pl",
    "website": "https://ess.com.pl/",
    "services": "pomiary elektryczne do napięcia 11kv; automatyka",
    "tags": [
      "pomiary elektryczne do napięcia 11kv",
      "automatyka"
    ]
  },
  {
    "name": "Kongsberg Maritime Poland Sp. z o.o.",
    "location": "Szczecin",
    "contact": "Maciej Sobieraj",
    "phone": "669989808",
    "email": "maciej.sobieraj@km.kongsberg.com",
    "website": "KongsbergMaritime.com",
    "services": "automatyka przemysłowa technologie morskie",
    "tags": [
      "automatyka przemysłowa technologie morskie"
    ]
  },
  {
    "name": "Trimor",
    "location": "Sopot",
    "contact": "Katarzyna Lachowicz",
    "phone": "601056636",
    "email": "trimor@trimor.com.pl",
    "website": "https://trimor.com.pl/",
    "services": "dostawa filtrów; części zamiennych; filtracja przemysłowa",
    "tags": [
      "dostawa filtrów",
      "części zamiennych",
      "filtracja przemysłowa"
    ]
  },
  {
    "name": "Baltimar",
    "location": "Gdynia",
    "contact": "",
    "phone": "586222130",
    "email": "baltimar@baltimar.pl",
    "website": "https://www.baltimar.pl/",
    "services": "czujniki mgły olejowej",
    "tags": [
      "czujniki mgły olejowej"
    ]
  },
  {
    "name": "ALL X",
    "location": "Rąb",
    "contact": "Daniel Matuszak",
    "phone": "788602761",
    "email": "danielallxinfo@gmail.com",
    "website": "",
    "services": "monitoring cctv; instalacje elektryczne - cctv; ssp; s dip; sos",
    "tags": [
      "monitoring cctv",
      "instalacje elektryczne - cctv",
      "ssp",
      "s dip",
      "sos"
    ]
  },
  {
    "name": "AVATEC",
    "location": "Szczecin",
    "contact": "Arek Zabrocki",
    "phone": "600970758",
    "email": "arek.zabrocki@avatecmarine.com",
    "website": "www.avatecmarine.com",
    "services": "monitoring cctv; systemy alarmowe; serwisy systemów automatyki morskiej ams alarm management systems; pms power management system; generators; sensors; pickups; acb; lemag shaft power monitoring; plc; pumps; automation relays; valve systems; compressors; main engine conventional sensors; main engine electronics pumps; emergency generators; radar level monitoring systems; purifiers; igg; auxiliary engine automation and safety systems; shaft generators safety systems; controller pitch propeller automation and safety systems; bolster units; sewer system automation; fire alarm systems; telephone exchange and public address systems; bow thruster automation; bwts ballast water treatment systems; ballast monitoring; boiler systems automation; fuel consumption monitoring i inne",
    "tags": [
      "monitoring cctv",
      "systemy alarmowe",
      "serwisy systemów automatyki morskiej ams alarm management systems",
      "pms power management system",
      "generators",
      "sensors",
      "pickups",
      "acb",
      "lemag shaft power monitoring",
      "plc",
      "pumps",
      "automation relays",
      "valve systems",
      "compressors",
      "main engine conventional sensors"
    ]
  },
  {
    "name": "GOOD TIME IHOR NAZAR",
    "location": "Gdańsk",
    "contact": "IHOR NAZAR",
    "phone": "694-851-775",
    "email": "goodtime.inpl@gmail.com",
    "website": "",
    "services": "instalacje elektryczne nn",
    "tags": [
      "instalacje elektryczne nn"
    ]
  },
  {
    "name": "ATEL",
    "location": "Cieplewo",
    "contact": "Andrzej Tomaczkowski",
    "phone": "694889130",
    "email": "ateltomaczkowski@onet.pl",
    "website": "",
    "services": "branża elektryczna",
    "tags": [
      "branża elektryczna"
    ]
  },
  {
    "name": "LONEX",
    "location": "Piotrków Kujawski",
    "contact": "Jarosław Świątkowski",
    "phone": "667680118",
    "email": "biuro@lonex-instalacje.pl",
    "website": "",
    "services": "zroboty związane z budową linii telekomunikacyjnych i elektroenergetycznych; obróbka mechaniczna elementów metalowych; wykonywanie instalacji elektrycznych",
    "tags": [
      "zroboty związane z budową linii telekomunikacyjnych i elektroenergetycznych",
      "obróbka mechaniczna elementów metalowych",
      "wykonywanie instalacji elektrycznych"
    ]
  },
  {
    "name": "HV TEST",
    "location": "PRUSZCZ GDAŃSKI",
    "contact": "PAWEŁ SĘKOWSKI",
    "phone": "501025771",
    "email": "HV_TEST@WP.PL",
    "website": "",
    "services": "prace elektryczne; pomiary elektryczne",
    "tags": [
      "prace elektryczne",
      "pomiary elektryczne"
    ]
  },
  {
    "name": "Suret",
    "location": "Gdańsk",
    "contact": "Monika Górska",
    "phone": "667661010",
    "email": "monikagorska@suret.com.pl",
    "website": "",
    "services": "prace inżynieryjne montażowe; elektryczne sektor stoczniowy",
    "tags": [
      "prace inżynieryjne montażowe",
      "elektryczne sektor stoczniowy"
    ]
  },
  {
    "name": "TOKA ICCP MGPS",
    "location": "Szczecin",
    "contact": "Tomasz Kaniak",
    "phone": "696424928",
    "email": "iccp@iccp.pl service@iccp.pl",
    "website": "www.iccp.pl",
    "services": "systemy iccp; systemy mgps; systemy sed; systemy reverse osmoze",
    "tags": [
      "systemy iccp",
      "systemy mgps",
      "systemy sed",
      "systemy reverse osmoze"
    ]
  },
  {
    "name": "Profi Electric Montage Ihor Voloshyn",
    "location": "Kraków",
    "contact": "Ihor Voloshyn",
    "phone": "791-353-883",
    "email": "ihorvoloshyn89@gmail.com",
    "website": "",
    "services": "montaż i demontaż tras kablowych; podłączanie kabli zasilających; podłączanie rozdzielni; przejścia kablowe rotax; układanie kabli i przewodów w trasach",
    "tags": [
      "montaż i demontaż tras kablowych",
      "podłączanie kabli zasilających",
      "podłączanie rozdzielni",
      "przejścia kablowe rotax",
      "układanie kabli i przewodów w trasach"
    ]
  },
  {
    "name": "J-MARINE",
    "location": "Gdańsk",
    "contact": "",
    "phone": "730268360",
    "email": "tomas@j-marine.com.pl",
    "website": "https://j-marine.com.pl/",
    "services": "remonty; remonty instalacji rurarskich; systemu bwts; oczyszczanie spalin; zuużycie paliwa",
    "tags": [
      "remonty",
      "remonty instalacji rurarskich",
      "systemu bwts",
      "oczyszczanie spalin",
      "zuużycie paliwa"
    ]
  },
  {
    "name": "EUMAT",
    "location": "gdańsk",
    "contact": "",
    "phone": "723-179-131",
    "email": "eumat@wp.pl",
    "website": "eumat.com.pl",
    "services": "instalacje hydrauliczne; hydraulika",
    "tags": [
      "instalacje hydrauliczne",
      "hydraulika"
    ]
  },
  {
    "name": "CEMAR",
    "location": "Szczecin",
    "contact": "",
    "phone": "501177235",
    "email": "mfryt@cermar.com.pl",
    "website": "cermar.com.pl",
    "services": "instalacje hydrauliczne; hydraulika siłowa i elektryczna; zabezpieczenia antykorozyjne",
    "tags": [
      "instalacje hydrauliczne",
      "hydraulika siłowa i elektryczna",
      "zabezpieczenia antykorozyjne"
    ]
  },
  {
    "name": "WestMar Sp. z o.o.",
    "location": "Gdynia",
    "contact": "",
    "phone": "+48 518 007 245",
    "email": "Jarek.Woronowski@westmar.pl",
    "website": "www.westmar.pl",
    "services": "instalacje hydrauliczne; hydraulika i pneumatyka",
    "tags": [
      "instalacje hydrauliczne",
      "hydraulika i pneumatyka"
    ]
  },
  {
    "name": "MAREL SZCZECIN",
    "location": "Szczecin, Przecław",
    "contact": "",
    "phone": "607 331 555; 508 798 881",
    "email": "office@marel-service.com",
    "website": "http://marel-service.com/pl/produkty/",
    "services": "instalacje elektryczne; bwts; automatyka; elektryka 20 osób",
    "tags": [
      "instalacje elektryczne",
      "bwts",
      "automatyka",
      "elektryka 20 osób"
    ]
  },
  {
    "name": "REMCONTROL",
    "location": "GSR",
    "contact": "",
    "phone": "502160523",
    "email": "remcontrol@o2.pl",
    "website": "https://www.rem-control.com/",
    "services": "automatyka; pneumatyka; oily mist; oliy water",
    "tags": [
      "automatyka",
      "pneumatyka",
      "oily mist",
      "oliy water"
    ]
  },
  {
    "name": "HAL-BUD",
    "location": "GSR",
    "contact": "",
    "phone": "721192554",
    "email": "halbud@hal-bud.pl",
    "website": "https://hal-bud.com/",
    "services": "automatyka; pneumatyka; oily mist; oliy water",
    "tags": [
      "automatyka",
      "pneumatyka",
      "oily mist",
      "oliy water"
    ]
  },
  {
    "name": "FOCUS ELECTRO",
    "location": "Gdańsk",
    "contact": "Jakub Ząbkiewicz",
    "phone": "508553692",
    "email": "j.zabkiewicz@focuselectro.pl biuro@focuselectro.pl",
    "website": "www.focuselectro.pl",
    "services": "remonty; instalacje elektryczne i automatyka na statkach nowe budowy i remonty więcej informacji na naszej stronie",
    "tags": [
      "remonty",
      "instalacje elektryczne i automatyka na statkach nowe budowy i remonty więcej informacji na naszej stronie"
    ]
  },
  {
    "name": "Marine invest safety",
    "location": "Gdańsk",
    "contact": "Bartosz Jarmoliński",
    "phone": "660539709",
    "email": "safety@marineinvestgroup.com",
    "website": "https://marineinvestgroup.com/",
    "services": "instalacje gazowe; co hydraulic hoses wykonane z komponentów firm alfagomma i zec włochy; zatwierdzone przez dnv i rina fire safety equipment gaśnice; systemy co; aparaty oddechowe scba; eebd; kamizelki ratunkowe; kombinezony ratunkowe itp calibration gas detection przenośne i osobiste detektory gazu; fgds; odme; ows; gazy kalibracyjne lifeboat davit testing testy obciążeniowe zgodne z msc 1; circ 40296 oraz msc 1; circ 1331 engineering manpower naprawy; części zamienne; monterzy; spawacze; technicy; elektrycy i inni specjaliści refrigeration services modernizacje systemów; wymiana czynnika r404a; konserwacja instalacji; coroczne przeglądy",
    "tags": [
      "instalacje gazowe",
      "co hydraulic hoses wykonane z komponentów firm alfagomma i zec włochy",
      "zatwierdzone przez dnv i rina fire safety equipment gaśnice",
      "systemy co",
      "aparaty oddechowe scba",
      "eebd",
      "kamizelki ratunkowe",
      "kombinezony ratunkowe itp calibration gas detection przenośne i osobiste detektory gazu",
      "fgds",
      "odme",
      "ows",
      "gazy kalibracyjne lifeboat davit testing testy obciążeniowe zgodne z msc 1",
      "circ 40296 oraz msc 1",
      "circ 1331 engineering manpower naprawy",
      "części zamienne"
    ]
  },
  {
    "name": "IMS SERWIS",
    "location": "Gdańsk",
    "contact": "",
    "phone": "48501527700",
    "email": "biuro@imsserwis.pl",
    "website": "https://imsserwis.pl/",
    "services": "instalacje hydrauliczne; sterowniki; układy sterowani i automatyki; hydraulika; odzywskiwanie haseł z kart sterowników",
    "tags": [
      "instalacje hydrauliczne",
      "sterowniki",
      "układy sterowani i automatyki",
      "hydraulika",
      "odzywskiwanie haseł z kart sterowników"
    ]
  },
  {
    "name": "MASEC",
    "location": "Gdynia",
    "contact": "",
    "phone": "665990925",
    "email": "kontakt@masec.tech",
    "website": "https://www.masec.pl/",
    "services": "serwis instalacji elektrycznych i automatyki morskiej",
    "tags": [
      "serwis instalacji elektrycznych i automatyki morskiej"
    ]
  },
  {
    "name": "VTMS LTD",
    "location": "Gdynia",
    "contact": "Piotr Gąsiewicz\nBiuro",
    "phone": "570595825\n798 769 886",
    "email": "office@vtms.eu \ntechsup@vtms.eu",
    "website": "https://www.vtms.eu/index.php/strona-glowna",
    "services": "silniki przekładnie linie wałów pędniki śruby napędowe systemy sterowania napędami",
    "tags": [
      "silniki przekładnie linie wałów pędniki śruby napędowe systemy sterowania napędami"
    ]
  },
  {
    "name": "BOTA TECHNIK",
    "location": "Gdańsk",
    "contact": "",
    "phone": "882-038-885",
    "email": "pawel.maciulewicz@botatechnik.pl",
    "website": "www.botatechnik.pl",
    "services": "pneumatyka; modernizacja rozdzielnic; stery strumieniowe",
    "tags": [
      "pneumatyka",
      "modernizacja rozdzielnic",
      "stery strumieniowe"
    ]
  },
  {
    "name": "Techniline",
    "location": "Gdańsk",
    "contact": "Michał Byrecki",
    "phone": "696-421-042",
    "email": "office@techniline.com",
    "website": "",
    "services": "automatyka i elektronika; sterowanie silnikami; agregaty",
    "tags": [
      "automatyka i elektronika",
      "sterowanie silnikami",
      "agregaty"
    ]
  },
  {
    "name": "DALT GROUP",
    "location": "Gdynia",
    "contact": "",
    "phone": "694775666",
    "email": "support@daltgroup.com",
    "website": "https://daltgroup.com/electrical-automation/index.php/contact-9/",
    "services": "automatyka i elektronika",
    "tags": [
      "automatyka i elektronika"
    ]
  },
  {
    "name": "JPPmarine",
    "location": "Szczecin",
    "contact": "",
    "phone": "609530033",
    "email": "zjag@jppmarine.com",
    "website": "https://jppmarine.com/",
    "services": "ochrona przeciwpożarowa; eletryka; rurarstwo",
    "tags": [
      "ochrona przeciwpożarowa",
      "eletryka",
      "rurarstwo"
    ]
  },
  {
    "name": "elektro-install",
    "location": "Wejherowo",
    "contact": "Michał Łaga",
    "phone": "608635711",
    "email": "biuro@elektro-install.com.pl",
    "website": "https://elektro-install.com.pl/oferta/",
    "services": "przeciw pożarowe; instalacje elektryczne; prace instalacyjne branży elektroenergetycznej i teletechnicznej",
    "tags": [
      "przeciw pożarowe",
      "instalacje elektryczne",
      "prace instalacyjne branży elektroenergetycznej i teletechnicznej"
    ]
  },
  {
    "name": "Direct Fire& Security Service",
    "location": "Gdańsk",
    "contact": "",
    "phone": "586822839",
    "email": "dfas@dfas.pl",
    "website": "http://dfas.pl/pl/Oferta.html",
    "services": "kamery; przeciwpożarowe",
    "tags": [
      "kamery",
      "przeciwpożarowe"
    ]
  },
  {
    "name": "KSS",
    "location": "Gdańsk",
    "contact": "",
    "phone": "511043746",
    "email": "biuro@kss-group.pl",
    "website": "https://kss-group.pl/#oferta",
    "services": "przeciwpożarowe; instalacje; wyąłczniki; powykownawca htc; enamor",
    "tags": [
      "przeciwpożarowe",
      "instalacje",
      "wyąłczniki",
      "powykownawca htc",
      "enamor"
    ]
  },
  {
    "name": "SUPON",
    "location": "Straszyn",
    "contact": "PIOTR BARTCZAK",
    "phone": "58/ 664-68-13 LUB 664-70-91",
    "email": "biuro@supon.gda.pl",
    "website": "https://supon.gda.pl/",
    "services": "serwis sprzętu; systemów przeciwpożarowych",
    "tags": [
      "serwis sprzętu",
      "systemów przeciwpożarowych"
    ]
  },
  {
    "name": "SEALAB",
    "location": "Gdańsk",
    "contact": "Marcin Barski",
    "phone": "+ 48 601 80 94 24",
    "email": "m.barski@sealab.pl; K.filipowicz@sealab.com.pl",
    "website": "www.sealab.pl",
    "services": "przeciwpożarowe; czujki; salwico; 800euro za 8h pracy serwisu",
    "tags": [
      "przeciwpożarowe",
      "czujki",
      "salwico",
      "800euro za 8h pracy serwisu"
    ]
  },
  {
    "name": "Techmex",
    "location": "Gdańsk",
    "contact": "Andrzej Maciański",
    "phone": "583461600",
    "email": "biuro@techmex.gda.pl",
    "website": "www.techmex.gda.pl",
    "services": "automatyka przemysłowa; autoryzowany dystrybutor oraz partner serwisowy danfoss vltvacon; przepompownie",
    "tags": [
      "automatyka przemysłowa",
      "autoryzowany dystrybutor oraz partner serwisowy danfoss vltvacon",
      "przepompownie"
    ]
  },
  {
    "name": "ELECOM",
    "location": "Gdynia",
    "contact": "Adrian Gronek - ups cons. , Katarzyna Górska , Bartłomiej Szwed",
    "phone": "697-882-140 , 605-404-144 , 601-928-102",
    "email": "a.gronek@elecom.com.pl , k.gorska@elecom.com.pl , b.szwed@elecom.com.pl",
    "website": "https://elecom.com.pl/?post_type=offer",
    "services": "monitoring cctv; przeciwpożarowe; światła nawigacyjne; telegraf; tv-sat; radary",
    "tags": [
      "monitoring cctv",
      "przeciwpożarowe",
      "światła nawigacyjne",
      "telegraf",
      "tv-sat",
      "radary"
    ]
  },
  {
    "name": "ELMARINE",
    "location": "Gdańsk",
    "contact": "Patrycja Miszewska",
    "phone": "575112067",
    "email": "office@elmarine.com.pl",
    "website": "www.elmarine.com.pl",
    "services": "instalacje elektryczne; specjalizujemy się w projektowaniu i instalacji systemów elektroniki i elektryki jachtowej",
    "tags": [
      "instalacje elektryczne",
      "specjalizujemy się w projektowaniu i instalacji systemów elektroniki i elektryki jachtowej"
    ]
  },
  {
    "name": "ALPHATRON",
    "location": "Gdynia",
    "contact": "Arkadiusz Płowczyk",
    "phone": "697-520-630",
    "email": "service@alphatronpoland.pl",
    "website": "https://alphatronpoland.pl/serwis-elektroniki-morskiej/",
    "services": "ecdis; annual; vdr; gmdss; ssas; sart; ais; żyro; radary",
    "tags": [
      "ecdis",
      "annual",
      "vdr",
      "gmdss",
      "ssas",
      "sart",
      "ais",
      "żyro",
      "radary"
    ]
  },
  {
    "name": "ELSA",
    "location": "Gdańsk",
    "contact": "",
    "phone": "58 782 49 97",
    "email": "biuro@elsa.pl",
    "website": "https://elsa.pl/oferta/automatyka-i-bms",
    "services": "automatyka; radiówka; bms",
    "tags": [
      "automatyka",
      "radiówka",
      "bms"
    ]
  },
  {
    "name": "NAUTICOM",
    "location": "Gdynia",
    "contact": "",
    "phone": "58 733 98 93",
    "email": "info@nauticom.pl",
    "website": "https://www.nauticom.pl/oferta.html",
    "services": "przegląd kompasów żyro; serwis zenitel; cobham; sailor; seatel; czujniki nawigacyjne; meteorologiczne",
    "tags": [
      "przegląd kompasów żyro",
      "serwis zenitel",
      "cobham",
      "sailor",
      "seatel",
      "czujniki nawigacyjne",
      "meteorologiczne"
    ]
  },
  {
    "name": "APISS",
    "location": "Bezrzecze",
    "contact": "Arkadiusz Gaul",
    "phone": "501 317 011; 91 439 58 01",
    "email": "apiss@apiss.pl",
    "website": "http://www.apiss.pl/uslugi/serwis-elektroniki-i-automatyki-morskiej-i-ldowej/",
    "services": "przeciwpożarowe; serwis elektroniki i automatyki morskiej deckma; graviner; visatron; daihatsu; sren t lyngs; abb; autronica; salwico; siemens; ulstein; selco; alfa-laval; rilez electricidad; grenco; tenfjord; noris; weishaup; wyłączniki",
    "tags": [
      "przeciwpożarowe",
      "serwis elektroniki i automatyki morskiej deckma",
      "graviner",
      "visatron",
      "daihatsu",
      "sren t lyngs",
      "abb",
      "autronica",
      "salwico",
      "siemens",
      "ulstein",
      "selco",
      "alfa-laval",
      "rilez electricidad",
      "grenco"
    ]
  },
  {
    "name": "Escort",
    "location": "Gdańsk",
    "contact": "Mariusz Małecki",
    "phone": "601-890-870",
    "email": "gdansk@escort.com.pl",
    "website": "",
    "services": "log; żyrokompas echosonda; sonary; dzwony; zegary; sekstanty; radiotelefony vhf i mf; hf z dsc; radary morskie",
    "tags": [
      "log",
      "żyrokompas echosonda",
      "sonary",
      "dzwony",
      "zegary",
      "sekstanty",
      "radiotelefony vhf i mf",
      "hf z dsc",
      "radary morskie"
    ]
  },
  {
    "name": "FURUNO POLSKA",
    "location": "Gdynia",
    "contact": "Jacek Formela - serwis / Marcin Pleczyński",
    "phone": "502-355-088 ; 58-669-02-20",
    "email": "jf@furuno.pl",
    "website": "https://www.furuno.pl/",
    "services": "systemy nawigacyjne; elektryczne urządzenia pomiarowe; komunikacja satelitarna i vhf; instrumenty meteorologiczne",
    "tags": [
      "systemy nawigacyjne",
      "elektryczne urządzenia pomiarowe",
      "komunikacja satelitarna i vhf",
      "instrumenty meteorologiczne"
    ]
  },
  {
    "name": "Else",
    "location": "Gdańsk",
    "contact": "Joanna Jarkowska",
    "phone": "501-145-537",
    "email": "else@else.pl",
    "website": "",
    "services": "autopilot i systemy sterowania systemy radarowe urządzenia nawigacyjne; log; ais systemy radiokomunikacyjne",
    "tags": [
      "autopilot i systemy sterowania systemy radarowe urządzenia nawigacyjne",
      "log",
      "ais systemy radiokomunikacyjne"
    ]
  },
  {
    "name": "ROHDE & SCHWARZ",
    "location": "Warszawa",
    "contact": "Grzegorz Kurek",
    "phone": "698-667-737",
    "email": "Grzegorz.Kurek@rohde-schwarz.com",
    "website": "www.rohde-schwarz.com",
    "services": "technika pomiarowa; radiowe systemy łączności; urządzenia szyfrujące; systemy rozpoznania i walki radioelektronicznej",
    "tags": [
      "technika pomiarowa",
      "radiowe systemy łączności",
      "urządzenia szyfrujące",
      "systemy rozpoznania i walki radioelektronicznej"
    ]
  },
  {
    "name": "SIM",
    "location": "Lublin",
    "contact": "Piotr Białek",
    "phone": "605-438-624",
    "email": "piotr.bialek@sim.com.pl",
    "website": "",
    "services": "serwis i montaż urządzeń wojskowych",
    "tags": [
      "serwis i montaż urządzeń wojskowych"
    ]
  },
  {
    "name": "TESPOL",
    "location": "Gdynia",
    "contact": "Sebastian Czajkowski",
    "phone": "601-498-800",
    "email": "sebastian.czajkowski@tespol.com.pl",
    "website": "",
    "services": "anteny; radiostacje urządzeń wojskowych",
    "tags": [
      "anteny",
      "radiostacje urządzeń wojskowych"
    ]
  },
  {
    "name": "NavSim",
    "location": "Bolesławiec",
    "contact": "Wojtek Tycholiz",
    "phone": "509-376-644",
    "email": "wojtek.tycholiz@navsim.pl",
    "website": "",
    "services": "anteny; radiostacje urządzeń wojskowych",
    "tags": [
      "anteny",
      "radiostacje urządzeń wojskowych"
    ]
  },
  {
    "name": "PowerSYS",
    "location": "Gdańsk",
    "contact": "Romuald Polak",
    "phone": "692-731-003",
    "email": "powersys@powersys.pl",
    "website": "",
    "services": "prostownik bester - urządzenia wojskowe",
    "tags": [
      "prostownik bester - urządzenia wojskowe"
    ]
  },
  {
    "name": "STACJA BADANIA KOMPASÓW",
    "location": "Gdynia",
    "contact": "",
    "phone": "602 630 821; 58 625 11 83",
    "email": "kompas.stacja@wp.pl",
    "website": "http://compass-station.com/oferta.html",
    "services": "serwis kompasów magnetycznych; namierników",
    "tags": [
      "serwis kompasów magnetycznych",
      "namierników"
    ]
  },
  {
    "name": "RENTMIX",
    "location": "Gdańsk",
    "contact": "Feliks Kopij",
    "phone": "513181141",
    "email": "RENTMIX@WP.PL",
    "website": "",
    "services": "dewiacje kompasu",
    "tags": [
      "dewiacje kompasu"
    ]
  },
  {
    "name": "BOOLEAN",
    "location": "Szczecin",
    "contact": "Piotr Ożga",
    "phone": "609797811",
    "email": "info@boolean.pl",
    "website": "www.boolean.pl",
    "services": "serwis urządzeń radio nawigacji; produkcja urządzeń",
    "tags": [
      "serwis urządzeń radio nawigacji",
      "produkcja urządzeń"
    ]
  },
  {
    "name": "EPA MARINE",
    "location": "Szczecin/Gdańsk",
    "contact": "Mariusz Urman",
    "phone": "601 77 12 67",
    "email": "service@epamarine.pl",
    "website": "www.epamarine.pl",
    "services": "żyrokompasy; radary",
    "tags": [
      "żyrokompasy",
      "radary"
    ]
  },
  {
    "name": "OTCC Sp. z o.o.",
    "location": "Szczecin",
    "contact": "Jakub Jędryk",
    "phone": "539869628",
    "email": "jje@otcc.tech",
    "website": "",
    "services": "echosondy; żyrokompasy; autopilot; speedlog",
    "tags": [
      "echosondy",
      "żyrokompasy",
      "autopilot",
      "speedlog"
    ]
  },
  {
    "name": "PZP one",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "biuro@pzp.one",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "eurostandard",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "'leonchuk@eustandard.com.pl'",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "spolid",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "'firmaspolid@wp.pl'",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "wejhersteel",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "'m.lipka@wejhersteel.pl'",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "promors",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "'promors@wp.pl'",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "climarem",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "rafal.kuzma@climarem.pl'",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "Realmet",
    "location": "Gdańsk",
    "contact": "",
    "phone": "",
    "email": "'Andrzej Wojtacki' <a.wojtacki@realmet.pl>",
    "website": "",
    "services": "ślusarka",
    "tags": [
      "ślusarka"
    ]
  },
  {
    "name": "TS2 SPACE",
    "location": "Warszawa",
    "contact": "Karol Łoś",
    "phone": "603969934",
    "email": "ts@ts2.pl, contact@support.ts2.pl",
    "website": "https://ts2.store/pl/",
    "services": "starlink; łączność satelitarna i radiowa",
    "tags": [
      "starlink",
      "łączność satelitarna i radiowa"
    ]
  },
  {
    "name": "SATRENT",
    "location": "",
    "contact": "",
    "phone": "48789208221",
    "email": "kontakt@satrent.pl",
    "website": "https://satrent.pl/#contact",
    "services": "starlink wypożyczenie",
    "tags": [
      "starlink wypożyczenie"
    ]
  },
  {
    "name": "RADMOR",
    "location": "Gdynia",
    "contact": "Danuta Zaremba",
    "phone": "58-76-55-667",
    "email": "danuta.zaremba@radmor.com.pl",
    "website": "https://www.radmor.com.pl/",
    "services": "radiotelefony",
    "tags": [
      "radiotelefony"
    ]
  },
  {
    "name": "KenBIT Spółka z o.o",
    "location": "Warszawa",
    "contact": "Andrzej Skrzyński",
    "phone": "2258172",
    "email": "askrzynski@kenbit.pl",
    "website": "www.kenbit.pl",
    "services": "monitoring cctv; łączność radiowa; przewodowa i satelitarna w tym specjalna teleinformatyka i sieci teleinformatyczne niejawne rozpoznanie radioelektroniczne i optyczne systemy nawigacyjne systemy nadzoru i kontroli dostępu systemy telewizji przemysłowej cctv systemy pomiarowe i akwizycji danych sterujących okrętowe systemy opbmr wykonujemy i mamy wdrożone własne produkty i rozwiązania związane z systemami łączności; rozpoznania i nawigacji",
    "tags": [
      "monitoring cctv",
      "łączność radiowa",
      "przewodowa i satelitarna w tym specjalna teleinformatyka i sieci teleinformatyczne niejawne rozpoznanie radioelektroniczne i optyczne systemy nawigacyjne systemy nadzoru i kontroli dostępu systemy telewizji przemysłowej cctv systemy pomiarowe i akwizycji danych sterujących okrętowe systemy opbmr wykonujemy i mamy wdrożone własne produkty i rozwiązania związane z systemami łączności",
      "rozpoznania i nawigacji"
    ]
  }
];
