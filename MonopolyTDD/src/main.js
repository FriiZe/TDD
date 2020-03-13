const { Properties } = require("./Classes/Properties.js");
const { Player } = require("./Classes/Player.js");
const { Board } = require("./Classes/Board.js");
const { Game } = require("./Classes/Game.js");
const { Cell } = require("./Classes/Cell.js");
const { Gare } = require("./Classes/Gare.js");

const board = new Board()
const game = new Game()

let player1 = new Player("Romain")
let player2 = new Player("Thomas")
let player3 = new Player("Clement")
let player4 = new Player("Laetitia")

function init() {


    let start = new Cell("Départ", "Uncolored")
    let cell1 = new Properties("AngularJS", "brown", 60, 2, 10, 30, 90, 160, 250, 30, 50)
    let chance = new Cell("chance", "Uncolored")
    let cell2 = new Properties("ReactJS", "brown", 60, 2, 10, 30, 90, 160, 250, 30, 50)
    let cell3 = new Properties("VueJS", "brown", 80, 4, 20, 60, 180, 320, 450, 40, 50)
    let cell4 = new Gare("YnovCampusNantes")
    let cell5 = new Properties("Express", "clairBlue", 100, 6, 30, 90, 270, 400, 550, 50, 50)
    let cell6 = new Properties("Django", "clairBlue", 100, 6, 30, 90, 270, 400, 550, 50, 50)
    let cell7 = new Properties("Rails", "clairBlue", 120, 8, 40, 100, 300, 450, 600, 60, 50)
    let visite = new Cell("Visite", "Uncolored")
    let cell8 = new Properties("Sublime", "purple", 140, 10, 50, 150, 450, 625, 750, 70, 100)
    let cell9 = new Properties("VisualStudioCode", "purple", 140, 10, 50, 150, 450, 625, 750, 70, 100)
    let cell10 = new Properties("VIM", "purple", 160, 12, 60, 180, 500, 700, 900, 80, 100)
    let cell12 = new Gare("YnovCampusLyon")
    let cell13 = new Properties("Eclipse", "orange", 180, 14, 70, 200, 550, 750, 950, 90, 100)
    let cell14 = new Properties("NetBeans", "orange", 180, 14, 70, 200, 550, 750, 950, 90, 100)
    let cell15 = new Properties("IntelliJ", "orange", 200, 16, 80, 220, 600, 800, 1000, 100, 100)
    let shop = new Cell("Boutique", "Uncolored")
    let cell16 = new Properties("JavaScript", "red", 220, 18, 90, 250, 700, 875, 1050, 110, 150)
    let cell17 = new Properties("HTML/CSS", "red", 220, 18, 90, 250, 700, 875, 1050, 110, 150)
    let cell18 = new Properties("SQL", "red", 240, 20, 100, 300, 750, 925, 1100, 120, 150)
    let cell19 = new Gare("YnovCampusParis")
    let cell20 = new Properties("Python", "yellow", 260, 22, 110, 330, 800, 975, 1150, 130, 150)
    let cell21 = new Properties("Java", "yellow", 260, 22, 110, 330, 800, 975, 1150, 130, 150)
    let cell22 = new Properties("Bash", "yellow", 280, 24, 120, 360, 850, 1025, 1200, 140, 150)
    let prison = new Cell("Prison", "Uncolored")
    let cell23 = new Properties("Microsoft", "green", 300, 26, 130, 390, 900, 1100, 1275, 150, 200)
    let cell24 = new Properties("Samsung", "green", 300, 26, 130, 390, 900, 1100, 1275, 150, 200)
    let cell25 = new Properties("Thales", "green", 320, 28, 150, 450, 1000, 1200, 1400, 160, 200)
    let cell26 = new Gare("YnovCampusBordeaux")
    let cell27 = new Properties("CapGemini", "blue", 350, 35, 175, 500, 1100, 1300, 1500, 175, 200)
    let cell28 = new Properties("CodeBuds", "blue", 350, 35, 175, 500, 1100, 1300, 1500, 175, 200)
    let cell29 = new Properties("Wikodit", "blue", 400, 50, 200, 600, 1400, 1700, 2000, 200, 200)

    board.init(start, cell1, chance, cell2, cell3, cell4, cell5, chance, cell6, cell7, visite, cell8,
        chance, cell9, cell10, cell12, cell13, chance, cell14, cell15, shop, cell16, chance, cell17,
        cell18, cell19, cell20, cell21, chance, cell22, prison, cell23, cell24, chance, cell25, cell26,
        cell27, chance, cell28, cell29)

    game.init(board, player1, player2, player3, player4)
    
}



init()

function willPlay(id) { 
    game.playerList[id].playerTurn(board)  
    game.playerList[id].endTurn()
}

while (1) {
    for (let i = 0; i < game.playerList.length; i++) {
        willPlay(i)
    }
}