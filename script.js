var currentBrand
var currentModel

function modelMenu(change){
    switch(change){
        case "toyota":
            textContentChange("model1", "toyota1")
            textContentChange("model2", "toyota2")
            textContentChange("model3", "toyota3")
            textContentChange("model4", "toyota4")
            currentBrand = "toyota"
            console.log(currentBrand)
        break

        case "mazda":
            textContentChange("model1", "MX-5")
            textContentChange("model2", "mazda2")
            textContentChange("model3", "mazda3")
            textContentChange("model4", "mazda4")
            currentBrand = "mazda"
            console.log(currentBrand)
        break

        case "honda":
            textContentChange("model1", "honda1")
            textContentChange("model2", "honda2")
            textContentChange("model3", "honda3")
            textContentChange("model4", "honda4")
            currentBrand = "honda"
            console.log(currentBrand)
        break

        case "nissan":
            textContentChange("model1", "nissan1")
            textContentChange("model2", "nissan2")
            textContentChange("model3", "nissan3")
            textContentChange("model4", "nissan4")
            currentBrand = "nissan"
            console.log(currentBrand)
        break
    }
}

function modelDesc(model){
    switch(currentBrand){
        case "toyota":
            switch(model){
                case 'model1':
                    textContentChange('modelLabel', 'Toyota1')
                    textContentChange('desc', 'Do dolor sit eu duis aliquip Lorem elit labore incididunt cupidatat fugiat culpa laboris id.')
                break

                case 'model2':
                    textContentChange('modelLabel', 'Toyota2')
                    textContentChange('desc', 'Magna in eu quis est eu commodo.')
                break

                case 'model3':
                    textContentChange('modelLabel', 'Toyota3')
                    textContentChange('desc', 'Fugiat consequat aliqua velit ea ut mollit exercitation eiusmod ea id Lorem.')
                break

                case 'model4':
                    textContentChange('modelLabel', 'Toyota4')
                    textContentChange('desc', 'Adipisicing sit magna consequat dolor nostrud eu amet et nostrud nulla consequat minim fugiat commodo.')
                break
        }
        break

        case "mazda":
            switch(model){
                case 'model1':
                    textContentChange('modelLabel', 'Mazda MX-5')
                    textContentChange('desc', 'Mazda MX-5 – samochód osobowy typu roadster produkowany przez japońską markę Mazda od 1989 roku. W USA pojazd występował pod nazwą Miata, a w Japonii jako Eunos Roadster. 10 lutego 1989 roku Mazda MX-5 oznaczona symbolem NA została zaprezentowana na Chicago Auto Show. Model o kodzie produkcyjnym NA, trafił do sprzedaży na całym świecie w następujących datach: marzec 1989 roku w Japonii, maj 1989 roku (już jako model z roku 1990) w USA i w Kanadzie; oraz w roku 1990 w Europie. Opcjonalny twardy dach, wykonany z kompozytu SMC, został udostępniony w tym samym czasie. Popyt początkowo przerósł produkcję, napędzany optymistycznymi recenzjami.')
                break

                case 'model2':
                    textContentChange('modelLabel', 'Mazda2')
                    textContentChange('desc', 'Proident qui mollit ipsum et est et non eiusmod ad qui ad.')
                break

                case 'model3':
                    textContentChange('modelLabel', 'Mazda3')
                    textContentChange('desc', 'Non anim sit id duis consectetur.')
                break

                case 'model4':
                    textContentChange('modelLabel', 'Mazda4')
                    textContentChange('desc', 'Ad dolor pariatur voluptate adipisicing occaecat pariatur qui in exercitation aliqua exercitation dolore fugiat culpa.')
                break
        }

        case "honda":
            switch(model){
                case 'model1':
                    textContentChange('modelLabel', 'Honda1')
                    textContentChange('desc', 'Eu non id aute enim dolore do incididunt veniam.')
                break

                case 'model2':
                    textContentChange('modelLabel', 'Honda2')
                    textContentChange('desc', 'Mollit incididunt exercitation elit culpa in dolore esse cupidatat sint quis sunt nulla aute ex.')
                break

                case 'model3':
                    textContentChange('modelLabel', 'Honda3')
                    textContentChange('desc', 'Consequat elit anim incididunt reprehenderit ipsum sint mollit deserunt voluptate sit velit dolor excepteur dolore.')
                break

                case 'model4':
                    textContentChange('modelLabel', 'Honda4')
                    textContentChange('desc', 'Fugiat exercitation duis duis quis excepteur magna incididunt tempor laborum irure amet cupidatat est.')
                break
        }

        case "nissan":
            switch(model){
                case 'model1':
                    textContentChange('modelLabel', 'nissan1')
                    textContentChange('desc', 'Voluptate pariatur exercitation mollit do esse esse aliqua duis irure.')
                break

                case 'model2':
                    textContentChange('modelLabel', 'nissan2')
                    textContentChange('desc', 'Duis do tempor eu officia eu reprehenderit anim consectetur minim aute in laborum.')
                break

                case 'model3':
                    textContentChange('modelLabel', 'nissan3')
                    textContentChange('desc', 'Duis anim anim ex adipisicing sunt reprehenderit ipsum incididunt.')
                break

                case 'model4':
                    textContentChange('modelLabel', 'nissan4')
                    textContentChange('desc', 'Adipisicing deserunt non esse proident qui dolore consectetur esse qui cupidatat ea dolor in do.')
                break
        }
    }
}

function textContentChange(id, value){
    document.getElementById(id).textContent = value
}

function picChange(number){
    var img = document.getElementById("carShowcase")
    img.src = "img/miata_"+number+".png"
    document.getElementById("CurrentPic").value = number
}
