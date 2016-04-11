

function test(){

  $("#dataInputButton").click(function() {
    $('.wrapper').empty();
    var data = [];
    data = $("#dataInputBox").val().split(',');
    for(var i = data.length-1;i>=0;i--){
      data[i] = parseInt(data[i]);
    }
    // var data = [10,20,30,23,54,65,10,98];
    console.log(window.innerWidth);
    var width = (0.5*window.innerWidth)/data.length;
    var heightScale = (0.6*window.innerHeight)/(Math.max(...data));
    console.log(width);
    for(var i = data.length-1;i>=0;i--){
      var color = i*((360%200)/data.length);
      createCube(width,data[i]*heightScale,data.length,color);
    }
  });




}

function createCube(width,height,dataLength,color)
{

  var widthStr;
  var heightStr;
  //container for the cube
  var container = $("<div/>");
  container.attr("class","columnCustom");
  widthStr = (width+((0.2*window.innerWidth)/dataLength)) + 'px';
  container.css('width', widthStr);

  //the container for the faces
  var faceContainer = $("<div/>");
  faceContainer.attr('id','customFullCube');
  widthStr = (width+10)+'px';
  faceContainer.attr('width', widthStr);
  heightStr = (height+10)+'px';
  faceContainer.attr('height', heightStr);

  //append each face
  var className;
  var cubeFace;

  widthStr = width + 'px';
  heightStr = height + 'px';
  translateStr = ((width+10)/2) + 'px';
  translateStrTop = ((height-(width-10)*0.5)) + 'px';

  className = 'cubeTop';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","rotateX(90deg) translateZ("+ translateStr + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", widthStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",80%,50%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  className = 'cubeTop';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","rotateX(-90deg) translateZ("+ translateStrTop + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", widthStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",80%,50%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  className = 'cubeSide';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","translateZ("+ translateStr + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", heightStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",80%,50%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  className = 'cubeSide';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","rotateY(90deg) translateZ("+ translateStr + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", heightStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",80%,50%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  className = 'cubeSide';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","rotateY(180deg) translateZ("+ translateStr + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", heightStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",80%,50%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  className = 'cubeSide';
  cubeFace = $("<div/>");
  cubeFace.attr("class",className);
  cubeFace.css("transform","rotateY(-90deg) translateZ("+ translateStr + ")");
  cubeFace.css("position", "absolute");
  cubeFace.css("height", heightStr);
  cubeFace.css("width", widthStr);
  cubeFace.css("padding", "7px");
  cubeFace.css("background-color", "hsl("+color+",60%,40%)");
  cubeFace.css("opacity","0.3");
  faceContainer.append(cubeFace);

  container.append(faceContainer);

  $('.wrapper').append(container);
  $('.wrapper').css("transform","rotateZ(180deg) translateY(-" + 0.5*window.innerHeight + "px) translateX(" + 0.15*window.innerWidth + "px)");
}
window.onload = test;
