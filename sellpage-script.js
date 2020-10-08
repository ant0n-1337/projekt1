var currentBrand
var currentModel

const cars = {
    toyota: {
        models: {
            "model1": {
                label: "Toyota Supra Mk3",
                desc: "Toyota Supra – sportowy samochód osobowy produkowany przez japoński koncern Toyota w latach 1978-2002 oraz ponownie od 2019 roku. Do napędu używano wyłącznie benzynowych silników R6, także z turbodoładowaniem. Trzecia generacja Supry trafiła do produkcji w lutym 1986 roku, na rynku japońskim zrezygnowano z nazwy Celica XX. Była to już zupełnie nowa konstrukcja niespokrewniona z Celicą. Oba modele stały się różnymi konstrukcjami, Celica otrzymała napęd przedni, w Suprze zaś pozostawiono napęd tylny. Nadwozie zachowało podobieństwo do drugiej generacji modelu. Pod względem konstrukcyjnym była to konstrukcja pokrewna z Toyotą Soarer",
                name: "supramk3"
            },
            "model2": {
                label: "Toyota Supra Mk4",
                desc: "Toyota Supra – sportowy samochód osobowy produkowany przez japoński koncern Toyota w latach 1978-2002 oraz ponownie od 2019 roku. Do napędu używano wyłącznie benzynowych silników R6, także z Produkcję czwartej generacji rozpoczęto w grudniu 1992 roku, wypuszczono wtedy na rynek 20 egzemplarzy przedprodukcyjnych. Produkcja seryjna ruszyła w maju 1993 Czwarta generacja otrzymała całkowicie przestylizowane nadwozie typu hatchback coupé o obłych kształtach i dwie nowe jednostki napędowe. Eksportu czwartej generacji Supry, w Europie zaprzestano w roku 1996 w Stanach Zjednoczonych w 1998. W sierpniu 2002 zakończono produkcję samochodu, było to spowodowane spadkiem zainteresowania na rynku.",
                name: "supramk4"
            },
            "model3": {
                label: "Toyota Celica V",
                desc: "Toyota Celica – sportowy samochód osobowy produkowany przez japońską firmę Toyota w latach 1970-2005. Dostępny był jako liftback i coupé, w niewielkiej liczbie egzemplarzy powstawała też wersja kabriolet. Do napędu używano benzynowych silników R4 o pojemności 1,6-2,4 l. Celica piątej generacji trafiła do produkcji we wrześniu 1989 już jako rocznik 1990. Samochód charakteryzował się nadwoziem o bardziej zaokrąglonych kształtach niż w przypadku poprzedni generacji. Długość samochodu nieznacznie wzrosła, rozstaw osi pozostał niezmieniony. Produkcję zakończono po czterech latach - w 1993 roku.",
                name: "celica5"
            },

            "model4": {
                label: "Toyota Celica VI",
                desc: "Toyota Celica – sportowy samochód osobowy produkowany przez japońską firmę Toyota w latach 1970-2005. Szósta generacja Celiki zadebiutowała w lutym 1994 roku. Gama nadwozi ograniczyła się do liftbacka, coupe i kabrioletu (od września 1994), oparta na tej wersji konstrukcja przez lata odnosiła sukcesy w Rajdowych Mistrzostwach Świata. Podstawowy model wyposażony został w czterocylindrowy silnik o pojemności 1,8 l i mocy 116 KM, z kolei w wersji GT zastosowano 170-konną jednostkę o pojemności dwóch litrów. Wersję GT można rozpoznać po seryjnie montowanych obręczach kół z lekkich stopów i charakterystycznych światłach przeciwmgielnych.",
                name: "celica6"
            },
        }
    },

    mazda: {
        models: {
            "model1": {
                label: "Mazda MX-3",
                desc: "Mazda MX-3 – kompaktowy samochód sportowy produkowany przez japońską firmę Mazda w latach 1991–1998. Po raz pierwszy został zaprezentowany na Geneva Auto Show w marcu 1991. Dostępny jako 3-drzwiowy coupe. Samochód mógł być napędzany przez cztery różne silniki; trzy czterocylindrowe rzędowe oraz jeden V6. Moc przenoszona była na koła przednie poprzez 5-biegową manualną bądź 4-biegową automatyczną skrzynię biegów.Przyspieszenie 0-100 km/h: 8,4 s. Prędkość maksymalna: 202 km/h.",
                name: "mx3"
            },
            "model2": {
                label: "Mazda MX-5",
                desc: "Mazda MX-5 – samochód osobowy typu roadster produkowany przez japońską markę Mazda od 1989 roku. W USA pojazd występował pod nazwą Miata, a w Japonii jako Eunos Roadster. 10 lutego 1989 roku Mazda MX-5 oznaczona symbolem NA została zaprezentowana na Chicago Auto Show. Model o kodzie produkcyjnym NA, trafił do sprzedaży na całym świecie w następujących datach: marzec 1989 roku w Japonii, maj 1989 roku (już jako model z roku 1990) w USA i w Kanadzie; oraz w roku 1990 w Europie. Opcjonalny twardy dach, wykonany z kompozytu SMC, został udostępniony w tym samym czasie. Popyt początkowo przerósł produkcję, napędzany optymistycznymi recenzjami.",
                name: "mx5"
            },
            "model3": {
                label: "Mazda RX-7",
                desc: "Mazda RX-7 – samochód sportowy, oficjalnie zaprezentowany w marcu 1978 roku. Było to auto, które charakteryzowało się bardzo niskim jak na tamte czasy współczynnikiem oporu powietrza Cx=0,36. Na rynku europejskim model RX-7 był dostępny tylko od początku 1992 r. do początku 1996 r. W związku z wprowadzeniem nowych norm emisji zanieczyszczeń sprzedaż nowych aut tego typu była już niemożliwa. Jego zasadniczą wadą było wysokie zużycie paliwa. We wszystkich modelach tego auta montowany był oryginalny silnik z tłokiem obrotowym skonstruowany według patentu Feliksa Wankla nazwany od jego nazwiska silnikiem Wankla.",
                name: "rx7"
            },
            "model4": {
                label: "Mazda 323",
                desc: "Mazda 323 – samochód osobowy segmentu C produkowany przez japoński koncern Mazda,sprzedawany w latach 1977–2003. Następcą tego modelu jest Mazda 3. V generacja Mazdy 323 pojawiła się we wrześniu 1994. Początkowo dostępne były silniki: niezmieniona konstrukcja z modelu BG 1300 cm³ SOHC z 16 zaworami i o mocy 73 KM (B3) (tylko w 323S i 323C). Z końcem 1998 zakończono produkcję modeli Mazdy 323C i 323S. Model 323P produkowano do 2000, kiedy to dostał zastąpiony kolejną generacją.",
                name: "323c"
            }
        }
    },

    honda: {
        models: {
            "model1": {
                label: "Honda Civic IV",
                desc: "Honda Civic – samochód osobowy klasy kompaktowej, produkowany przez japoński koncern motoryzacyjny Honda Motor Company od 1972 roku jako następca modelu N360 oraz N600. Od 2015 roku produkowana jest dziesiąta generacja pojazdu, która od 2017 roku oferowana jest w Europie. Honda Civic IV została po raz pierwszy oficjalnie zaprezentowana podczas targów motoryzacyjnych we Frankfurcie w 1987 roku. W 1987 roku zaprezentowano także sportową odmianę Si oraz CRX II. W 1990 roku auto przeszło face lifting. Zmieniono zderzaki przednie oraz wprowadzono światła przednie z elektryczną regulacją wysokości. Wersję Civic Shuttle produkowano do 1996 roku.",
                name: "civic4"
            },
            "model2": {
                label: "Honda Civic V",
                desc: "Honda Civic – samochód osobowy klasy kompaktowej, produkowany przez japoński koncern motoryzacyjny Honda Motor Company od 1972 roku jako następca modelu N360 oraz N600. Od 2015 roku produkowana jest dziesiąta generacja pojazdu, która od 2017 roku oferowana jest w Europie. Honda Civic V została po raz pierwszy zaprezentowana w 1991 roku.W 1991 roku zaprezentowana została także sportowa odmiana Si, a rok później na bazie pojazdu zbudowana została Honda CR-X del Sol. W pojeździe zwiększone zostało bezpieczeństwo, rozpoczęto montowanie systemu ABS i poduszek powietrznych. Wraz z piątą generacją modelu zaczęto stosowanie silników z rodziny VTEC.",
                name: "civic5"
            },
            "model3": {
                label: "Honda NSX",
                desc: "Honda NSX − samochód sportowy produkowany przez japoński koncern motoryzacyjny Honda MC w latach 1990 - 2005 oraz ponownie od kwietnia 2016 roku. Honda NSX I została po raz pierwszy oficjalnie zaprezentowana podczas targów motoryzacyjnych w 1989 roku jako pierwsze sportowe auto marki z centralnie umieszczonym silnikiem. Był to pierwszy seryjnie produkowany pojazd z nadwoziem w pełni wykonanym z aluminium. NSX w Stanach Zjednoczonych sprzedawana była pod należącą do Hondy marką Acura. Miała zmniejszoną moc w stosunku do wersji europejskiej i japońskiej, osiągała około 255 KM, lecz identyfikowała się lepszym momentem obrotowym. W 2005 roku zaprzestano produkcji samochodu z powodu restrykcyjnych norm emisji spalin i zmian w przepisach dotyczących wyposażenia.",
                name: "nsx"
            },
            "model4": {
                label: "Honda CR-X",
                desc: "Honda CR-X – mały samochód sportowy produkowany przez japoński koncern motoryzacyjny Honda MC w latach 1983 - 1992. Honda CRX II została po raz pierwszy oficjalnie zaprezentowana w 1987 roku. Auto zbudowane zostało na bazie płyty podłogowej modelu Civic IV. Ta generacja pojazdu określana mianem Cyber, w stosunku do pierwszej różniła się m.in. całkowicie nowym zawieszeniem, przestronniejszym wnętrzem z wieloma udogodnieniami, np. regulacją koła kierownicy, nawiewem świeżego powietrza na twarz kierowcy podczas ogrzewania, oraz dostępnymi opcjonalnie elektrycznie sterowanymi szybami i lusterkami oraz szyberdachem, a także klimatyzacją i skórzaną tapicerką.",
                name: "crx"
            }
        }
    },

    nissan: {
        models: {
            "model1": {
                label: "Nissan 180SX",
                desc: "HNissan 180SX to coupe osadzone na płycie typu S13 z serii Nissan S platform. Nissan sprzedawał ten model tylko w Japonii (na innych rynkach sprzedawany był pod innymi nazwami). Nazwa 180SX wzięła się z silnika (1.8). W 1991, silnik został udoskonalany do 2.0 a model, zaproponowany w dwóch wersjach: wolnossącej i turbodoładowanej. Chociaż nowy silnik miał większe możliwości, nazwa 180SX pozostała. W latach 1996 do 1998 ograniczono ilość serii 2, ponieważ produkowano typ X. Model ten ma drobne kosmetyczne różnice, w porównaniu do starszych modeli. Mechaniczne różnice: dostępne tylko w SR20DET blacktop silnik z VVT",
                name: "180sx"
            },
            "model2": {
                label: "Nissan 240SX",
                desc: "Nissan 240SX – kompaktowy samochód sportowy przygotowany przez Nissana z myślą o rynku północnoamerykańskim w 1989. Zastąpił on w 1989 model 200SX (RWD). 240SX wyposażony był w czterocylindrowy silnik KA24E o pojemności 2,4 l, który napędzał koła tylne. Model doczekał się dwóch generacji, S13 (1989-1994) oraz S14 (1995-1998), obie oparte były na płycie podłogowej S. Samochód wykazuje podobieństwo do innych modeli opartych na tej samej platformie: Silvia, 180SX oraz 200SX.",
                name: "240sx"
            },
            "model3": {
                label: "Nissan Silvia",
                desc: "Nissan Silvia – sportowe coupé produkowane na przestrzeni lat przez Nissana oparte na platformie Nissan S. Samochód dzielił płytę podłogową z wieloma innymi modelami Nissana (m.in. z przygotowanym na rynek europejski 200SX, północnoamerykańskim 240SX czy też sprzedawanym na rynku japońskim 180SX), mimo to nazwa Silvia nie jest stosowana z nimi zamiennie.",
                name: "silvia"
            },
            "model4": {
                label: "Nissan Skyline R34",
                desc: "Nissan Skyline – Samochód sportowy klasy średniej bądź luksusowej produkowany w Japonii przez firmę Nissan od 1957 roku. Dostępne są wersje: coupé lub sedan. Skyline jest sprzedawany w Ameryce Północnej i Korei Południowej. W maju 1998 roku model NR34 przeszedł ogromną liczbę zmian w porównaniu do dwóch poprzednich modeli R32 i R33, pogłębiono w nim sportowy charakter, silnik stał się bardziej ekonomiczny, bardziej przyjazny środowisku. Skyline’a R34 napędzał silnik z 5-biegową skrzynią biegów. Samochód był używany w filmie '2Fast 2Furious' oraz Fast and Furious 4.",
                name: "skyline"
            }
        }
    }
}


function modelMenu(change){
    switch(change){
        case "toyota":
            textContentChange("model1", "Supra Mk3")
            textContentChange("model2", "Supra Mk4")
            textContentChange("model3", "Celica V")
            textContentChange("model4", "Celica VI")
            currentBrand = "toyota"
            console.log(currentBrand)
        break

        case "mazda":
            textContentChange("model1", "MX-3")
            textContentChange("model2", "MX-5")
            textContentChange("model3", "RX-7")
            textContentChange("model4", "323C")
            currentBrand = "mazda"
            console.log(currentBrand)
        break

        case "honda":
            textContentChange("model1", "Civic IV")
            textContentChange("model2", "Civic V")
            textContentChange("model3", "NSX")
            textContentChange("model4", "CR-X")
            currentBrand = "honda"
            console.log(currentBrand)
        break

        case "nissan":
            textContentChange("model1", "180SX")
            textContentChange("model2", "240SX")
            textContentChange("model3", "Silvia")
            textContentChange("model4", "Skyline R34")
            currentBrand = "nissan"
            console.log(currentBrand)
        break
    }
}

function showPanel(){
    document.getElementById("panel").style.display = "block"
}

function modelDesc(model){
    showPanel()
    const car = cars[currentBrand].models[model];
    currentModel = car.name;
    setPic();
    textContentChange('modelLabel',car.label)
    textContentChange('desc',car.desc)
    console.log(car);
}

function textContentChange(id, value){
    document.getElementById(id).textContent = value
}

function setPic(){
    var img = document.getElementById("carShowcase")
    img.src = "img/"+currentModel+"_1.png"
}

function picChange(){
    var img = document.getElementById('carShowcase');
    if(img.src.match(currentModel+"_1")) {
        img.src = "img/"+currentModel+"_2.png";
    }
    else {
        img.src = "img/"+currentModel+"_1.png";
    }
}



