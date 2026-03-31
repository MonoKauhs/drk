const imagens = [

"Saved Pictures/bart.jpg",

"Saved Pictures/troll.png",

"Saved Pictures/cr.png",

"Saved Pictures/mito.png",

"Saved Pictures/pt.png",

"Saved Pictures/gordo.png",

"Saved Pictures/mitos.gif",

"Saved Pictures/dio.png",

"Saved Pictures/ney.png",

"Saved Pictures/homer.png",

"Saved Pictures/lula.png",

"Saved Pictures/shrek.jpg",

"Saved Pictures/andre.jpg",
];



let previewAtual = 0;

const textBox = document.getElementById("nome");

const fotoPreview = document.getElementById("fotoPreview");
fotoPreview.src = imagens[previewAtual];


function TrocarFotoPreview(dir){
    console.log(dir)
    if (dir== "direita"){
        if(previewAtual == imagens.length -1){
            previewAtual = 0
            fotoPreview.src = imagens[previewAtual];
        }
        else{
        previewAtual += 1;
        fotoPreview.src = imagens[previewAtual];
        }

    }
    else{
        
        if(previewAtual == 0){
            previewAtual = imagens.length -1
            fotoPreview.src = imagens[previewAtual];
        }
        else{
        previewAtual -= 1;
        fotoPreview.src = imagens[previewAtual];
        }
    }
}


function Entrar(){
    
    
        console.log(textBox.value.length)
    if( textBox.value.length <= 2){
        
    }
    else{
        localStorage.setItem("NomeDoUsuario", textBox.value)
        window.location.replace("paginaPrincipal.html");

    }
    
    
    
}






