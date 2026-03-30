const imagens = [

"Saved Pictures/mitos.gif",

    "Saved Pictures/mito.jpg",

    "Saved Pictures/andre.jpg",
    


];

let previewAtual = 0;
const fotoPreview = document.getElementById("fotoPreview")
fotoPreview.src = imagens[previewAtual]


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


