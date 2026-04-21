let capture;

function setup() {
  // 第一步驟：產生一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 取得攝影機影像
  capture = createCapture(VIDEO);
  
  // 隱藏 p5.js 預設產生的 HTML 影片元素，確保影像只顯示在我們的畫布中
  capture.hide();
  
  // 將影像的繪製模式設定為置中 (CENTER)，這樣座標指定在中心點時更容易對齊
  imageMode(CENTER);
}

function draw() {
  // 設定畫布的背景顏色為 #e7c6ff
  background('#e7c6ff');
  
  // 計算顯示的影像寬高（整個畫布寬高的 60%）
  let imgWidth = width * 0.6;
  let imgHeight = height * 0.6;
  
  // 將擷取的攝影機影像繪製在視窗正中間
  image(capture, width / 2, height / 2, imgWidth, imgHeight);
}

// 監聽視窗大小改變事件，確保縮放視窗時畫布依然能維持全螢幕
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
