function setup() { //設定初始內容，只會執行一次
    createCanvas(windowWidth, windowHeight);//產生一個畫布
   //background(0)黑色背景
    background("#7D6B91")//設定背景顏色
  }
  
  function draw() {//畫圖，每秒繪畫60次
    //background(220)     背景顏色灰白色(0黑色~255白)                                                                                                                
    background("#7D6B91");
    rectMode(CENTER)//設定方形的座標點放在方形的中間
    noFill()//以下所畫的物件不要充滿顏色
    stroke("#989FCE")//線條的顏色
    strokeWeight(3)//線條的粗細
    // 宣告變數
    var rect_width=50+mouseX/10 //方形的寬度
    var bc_width=50+mouseY/10 //大圓的寬度
    var sc_width=25+mouseX/10 //小圓的寬度
    
    //FOR迴圈
    //i=0:i為變數，要i從0開始(設定i的初始值)
    //i<20:條件判斷，當條件成立時，就繼續進到迴圈內的程式碼執行
    //i=i+1:i 值每次改變的差距值
     for (let j=0;j<20;j=j+1) {//產生第幾排，共20排
      for (let i=0;i<40;i=i+1) {
        if(j<5){
          stroke("#F9EAE1")
        }else if(j>10){
          stroke("#CC8B86")
        }else{
          stroke("#7D4F50")
        }
      ellipse(25+50*i,25+50*j, bc_width) //在座標(x:25,y:25)畫一個直徑為50的圓
      rect(25+50*i,25+50*j,rect_width)//畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
      ellipse(50+50*i,50+50*j,sc_width)//畫小圓，直徑為25
    }
        }
      }