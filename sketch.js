 let font;//載入字型文字 
    let points = [];//轉成點狀文字
    let angle = 0
    let r = 1
    //  ーーーーーーーーーーーーーーーーーーーーーーーーーーー 
    function preload(){//在執行setup（）前，必須先做此函數執行，主要先載入字型//為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型 
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf")
    }
    //-------------------------------------------------- 
     function setup() { 
      createCanvas (windowWidth, windowHeight);
      angleMode (DEGREES)//設定三角函數的角度0～360
      background("#COA9BO")
      points = font.textToPoints("c.y", 8, 200, 200, {
        sampleFactor:0.1 
      });//轉成文字圖檔，放在（0，200）位置，圖形大小為200，sampleFactor為點數距離大小
     fill("#6A4E56")
      for (let i=0; i<points.length-1; i++) {
         // text(str(i),points[i].x,points[i].y) 
         strokeWeight (1) 
         ellipse(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),10)//畫線，兩個點構成一線
         stroke("#7880B5")//線條顏色 
         strokeWeight(5)//線條組細 
         line (points [i].x, points[i].y,points[i+1].x,points[i+1].y)
         //ー--------------------------------------------------ーー 
         angle=angle+10
      }
      }
          function draw(){//畫圖，每秒會進入執行程式60次
           // text (mouseX+"""+mouseY, 100,500)
            background("#f5ebe0")//背景顏色 
            translate (width/2, height/2)//原本原點（0,0）在左上角，改為到畫布中心點（width/2-300， height/2-120）原點（8,0） 
            rotate(frameCount%360) //依照frameCount除360求餘數
             for (let i=0; i<points.length-1; i++) {
               //text (str(i),points[i].x,points[i]-y) 
               //在座標上顯示一個文字（數字） 
               fill ("#cdb4db") 
               //noStroke()
                //ellipse （points ［i］-xtr*sin（angle+i*10），points［il-ytr*sin（angle+i*10），10）
                 stroke ("#6d6875") 
                 strokeWeight (5) 
                 line (points[i].x,points[i].y,points[i+1].x,points[i+1] .y) 
                 //畫線，兩個點構成一條線 
             }
              angle = angle+10
          }