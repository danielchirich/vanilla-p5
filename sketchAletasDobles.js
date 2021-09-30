let input1, input2, input3, button, buttonSave;
let largo, ancho, alto
let texto = 'Plano a medida'
let font,
  fontsize = 20;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('/fonts/SourceSansPro-Regular.otf');
}


function setup() {
  
  //createCanvas(1300, 600);
  

  input1 = createInput().attribute('placeholder', 'ingrese largo');
  input1.position(40, 150);

  input2 = createInput().attribute('placeholder', 'ingrese ancho');
  input2.position(40, 200);

  input3 = createInput().attribute('placeholder', 'ingrese alto');
  input3.position(40, 250);

  buttonSave = createButton('Guardar Img');
  buttonSave.position(200 , 330);
  buttonSave.mousePressed(saveToFile);

  button = createButton('Crear Img');
  button.position(40 , 330);
  button.mousePressed(CreateDraw);

    
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  
}

function CreateDraw() {
  //createCanvas(largoCanvas, 600);
  //background(200)
   largo = Number(input1.value());  
   ancho = Number(input2.value());
   alto = Number(input3.value());
   let aletaAlto = ancho - 5
   let aletaLargo = largo - 5
   let aletaAncho = ancho - 5
   let largoAchicado = largo * 0.4
   let anchoAchicado = ancho * 0.4
   let altoAchicado = alto * 0.4
   let aletaAltoAchicado = anchoAchicado - 5
   let aletaLargoAchicado = largoAchicado - 5
   let aletaAnchoAchicado = anchoAchicado - 5
   let largoPlancha = 2 * largo + 2 * ancho
   let largoCanvas = (2 * largo + 2 * ancho) + 100
   let anchoCanvas = (2 * ancho) + alto + 100
   let largoCanvasAchicado = (2 * largoAchicado + 2 * anchoAchicado) + 100
   let anchoCanvasAchicado = (2 * anchoAchicado) + altoAchicado + 100
   let largoCanvasAchicadoMediaCaja = largoAchicado +  anchoAchicado + 100
   



   if (largoPlancha < 1100) {
    createCanvas(largoCanvas, anchoCanvas);
    background(200)
    fill('orange')//Primera aleta de arriba
    rect(52, 50, aletaLargo, aletaAlto)    
    //segunda aleta de arriba      
    rect(52 + largo, 50, aletaAncho, aletaAlto)
    //tercera aleta arriba
    rect(52 + largo + ancho, 50 , aletaLargo, aletaAlto)
    //cuarta aleta arriba
    rect(52 + largo + ancho + largo, 50, aletaAncho, aletaAlto)
    //primera cara
    rect(50, 50 + aletaAlto, largo, alto)
    //segunda cara
    rect(50 + largo, 50 + aletaAlto, ancho, alto)
    //tercera cara
    rect(50 + largo + ancho, 50 + aletaAlto, largo, alto)
    //cuarta cara
    rect(50 + largo + ancho + largo, 50 + aletaAlto, ancho, alto)
    // primera/seg/tercera/cuarta aleta de abajo
    rect(52, 50 + aletaAlto + alto, aletaLargo, aletaAlto)
    rect(52 + largo, 50 + aletaAlto + alto, aletaAncho, aletaAlto)
    rect(52 + largo + ancho, 50 + aletaAlto + alto, aletaLargo, aletaAlto)
    rect(52 + largo + ancho + largo, 50 + aletaAlto + alto, aletaAncho, aletaAlto)
  } 
  else if(largoPlancha > 2400) {
    createCanvas(largoCanvasAchicadoMediaCaja, anchoCanvasAchicado);
    background(200)
    fill('orange')
    //Primera aleta de arriba
    rect(52, 50, aletaLargoAchicado, aletaAltoAchicado)    
    //segunda aleta de arriba      
    rect(52 + largoAchicado, 50, aletaAnchoAchicado, aletaAltoAchicado)
    //primera cara
    rect(50, 50 + aletaAltoAchicado, largoAchicado, altoAchicado)
    //segunda cara
    rect(50 + largoAchicado, 50 + aletaAltoAchicado, anchoAchicado, altoAchicado)   
    // primera/seg/tercera/cuarta aleta de abajo
    rect(52, 50 + aletaAltoAchicado + altoAchicado, aletaLargoAchicado, aletaAltoAchicado)
    rect(52 + largoAchicado, 50 + aletaAltoAchicado + altoAchicado, aletaAnchoAchicado, aletaAltoAchicado)
   
  }
  else {
    createCanvas(largoCanvasAchicado, anchoCanvasAchicado);
    background(200)
    fill('orange')//Primera aleta de arriba
    rect(52, 50, aletaLargoAchicado, aletaAltoAchicado)    
    //segunda aleta de arriba      
    rect(52 + largoAchicado, 50, aletaAnchoAchicado, aletaAltoAchicado)
    //tercera aleta arriba
    rect(52 + largoAchicado + anchoAchicado, 50 , aletaLargoAchicado, aletaAltoAchicado)
    //cuarta aleta arriba
    rect(52 + largoAchicado + anchoAchicado + largoAchicado, 50, aletaAnchoAchicado, aletaAltoAchicado)
    //primera cara
    rect(50, 50 + aletaAltoAchicado, largoAchicado, altoAchicado)
    //segunda cara
    rect(50 + largoAchicado, 50 + aletaAltoAchicado, anchoAchicado, altoAchicado)
    //tercera cara
    rect(50 + largoAchicado + anchoAchicado, 50 + aletaAltoAchicado, largoAchicado, altoAchicado)
    //cuarta cara
    rect(50 + largoAchicado + anchoAchicado + largoAchicado, 50 + aletaAltoAchicado, anchoAchicado, altoAchicado)
    // primera/seg/tercera/cuarta aleta de abajo
    rect(52, 50 + aletaAltoAchicado + altoAchicado, aletaLargoAchicado, aletaAltoAchicado)
    rect(52 + largoAchicado, 50 + aletaAltoAchicado + altoAchicado, aletaAnchoAchicado, aletaAltoAchicado)
    rect(52 + largoAchicado + anchoAchicado, 50 + aletaAltoAchicado + altoAchicado, aletaLargoAchicado, aletaAltoAchicado)
    rect(52 + largoAchicado + anchoAchicado + largoAchicado, 50 + aletaAltoAchicado + altoAchicado, aletaAnchoAchicado, aletaAltoAchicado)
  }
   
   
   input1.value('');
   input2.value('');
   input3.value('');

     
        
  textAlign(LEFT);
  drawWords(width * 0.05);

     
 }

 function saveToFile() {
  // Save the current canvas to file as png
  saveCanvas('plano', 'png')
}

function drawWords(x) {
    
  fill('black');
  text('Plano a escala:', x, 20);

  text(largo + ' x ', x + 130, 20); 
  text(ancho + ' x ', x + 180, 20);
  text(alto, x + 230, 20);
  
  
  
     
  
  
}