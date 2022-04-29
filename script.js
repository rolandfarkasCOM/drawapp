    var $ = function(id){return document.getElementById(id)};
  
  
    var canvas = this.__canvas = new fabric.Canvas('c');
        var cheight = canvas.setHeight(500);
          var cwidth = canvas.setWidth(500);


     

         //canvas.width = window.innerWidth;

  

  
  
  
  var text = new fabric.IText("Example Text", {
      fontFamily: 'Courier New',
      left: 0,
      top: 0,
      fontSize: 16,
      fill: '#000000'
  });
  
  var rect = new fabric.Rect({
      height: 100,
      width: 100,
      fill: '#ffcc12',
      opacity: 1
  });
  
  var group = new fabric.Group([rect, text]);
  canvas.add(group);
  canvas.centerObject(group);
  group.setCoords();

  
  //just added this in
  canvas.setActiveObject(text)

  
  
  function Addtext() { 
  canvas.add(new fabric.IText('Tap and Type', { 
        left: 0,
        top:   0,
        fontFamily: 'arial black',
        fill: '#333',
          fontSize: 20,
     
  }));
  }
  

  document.getElementById('file').addEventListener("change", function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(f) {
       var data = f.target.result;
       fabric.Image.fromURL(data, function(img) {
          // add background image
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
             scaleX: canvas.width / img.width,
             scaleY: canvas.height / img.height
          });
       });
    };
    reader.readAsDataURL(file);
 });
      
     document.getElementById('text-color').onchange = function() {
              canvas.getActiveObject().setFill(this.value);
              canvas.renderAll();
          };
    document.getElementById('text-color').onchange = function() {
              canvas.getActiveObject().setFill(this.value);
              canvas.renderAll();
          };
          
       /*   document.getElementById('text-bg-color').onchange = function() {
              canvas.getActiveObject().setBackgroundColor(this.value);
              canvas.renderAll();
          };
          
          document.getElementById('text-lines-bg-color').onchange = function() {
              canvas.getActiveObject().setTextBackgroundColor(this.value);
              canvas.renderAll();
          };
  
          document.getElementById('text-stroke-color').onchange = function() {
              canvas.getActiveObject().setStroke(this.value);
              canvas.renderAll();
          };	
  
          document.getElementById('text-stroke-width').onchange = function() {
              canvas.getActiveObject().setStrokeWidth(this.value);
              canvas.renderAll();
          };	*/			
      
          document.getElementById('font-family').onchange = function() {
              canvas.getActiveObject().setFontFamily(this.value);
              canvas.renderAll();
          };
          
          document.getElementById('text-font-size').onchange = function() {
              canvas.getActiveObject().setFontSize(this.value);
              canvas.renderAll();
          };
          
          document.getElementById('text-line-height').onchange = function() {
              canvas.getActiveObject().setLineHeight(this.value);
              canvas.renderAll();
          };
          
          document.getElementById('text-align').onchange = function() {
              canvas.getActiveObject().setTextAlign(this.value);
        canvas.renderAll();
          };
          
      
   radios5 = document.getElementsByName("fonttype");  // wijzig naar button
      for(var i = 0, max = radios5.length; i < max; i++) {
          radios5[i].onclick = function() {
              
              if(document.getElementById(this.id).checked == true) {
                  if(this.id == "text-cmd-bold") {
                      canvas.getActiveObject().set("fontWeight", "bold");
                  }
                  if(this.id == "text-cmd-italic") {
                      canvas.getActiveObject().set("fontStyle", "italic");
                  }
                  if(this.id == "text-cmd-underline") {
                      canvas.getActiveObject().set("textDecoration", "underline");
                  }
                  if(this.id == "text-cmd-linethrough") {
                      canvas.getActiveObject().set("textDecoration", "line-through");
                  }
                  if(this.id == "text-cmd-overline") {
                      canvas.getActiveObject().set("textDecoration", "overline");
                  }
                  
                  
                  
              } else {
                  if(this.id == "text-cmd-bold") {
                      canvas.getActiveObject().set("fontWeight", "");
                  }
                  if(this.id == "text-cmd-italic") {
                      canvas.getActiveObject().set("fontStyle", "");
                  }  
                  if(this.id == "text-cmd-underline") {
                      canvas.getActiveObject().set("textDecoration", "");
                  }
                  if(this.id == "text-cmd-linethrough") {
                      canvas.getActiveObject().set("textDecoration", "");
                  }  
                  if(this.id == "text-cmd-overline") {
                      canvas.getActiveObject().set("textDecoration", "");
                  }
              }
              
              
              canvas.renderAll();
          }
      }
    
      document.getElementById('select').addEventListener('click', function() {
        canvas.isDrawingMode = false;
      });
      document.getElementById('draw').addEventListener('click', function() {
        canvas.isDrawingMode = true;
      });

      document.getElementById('pen-color').onchange = function() {
        canvas.getActiveObject().setStroke(this.value);
        canvas.renderAll();
    };	
           
  document.getElementById('json-dataless').addEventListener('click', function() {
      console.log(canvas.toDatalessJSON());
  });
  
  document.getElementById('json').addEventListener('click', function() {
      console.log(canvas.toJSON());
  });
  
  
// Delete selected object
document.getElementById('remove').addEventListener('click', function() {
    canvas.getActiveObject().remove();
});
  // Refresh page
  document.getElementById('clear').addEventListener('click', function() {
  setTimeout(function() {
     location.reload()
  }, 100);
});

   // Download
   var imageSaver = document.getElementById('convert2png');
   imageSaver.addEventListener('click', saveImage, false);
   
   function saveImage(e) {
      this.href = canvas.toDataURL({
         format: 'png',
         quality: 0.8
      });
      this.download = 'custom.png'
   }
   // Do some initializing stuff
   fabric.Object.prototype.set({
      transparentCorners: true,
      cornerColor: '#22A7F0',
      borderColor: '#22A7F0',
      cornerSize: 12,
      padding: 5
   });

