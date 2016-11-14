
var Input = function(canvas){

  var mouseX;
  var mouseY;

  var offsetX;
  var offsetY;


  // マウスイベントを設定
  canvas.addEventListener( "mousemove", function( e ){

      if(e.buttons !== undefined){

        var data = e.buttons;
  		  var button_l = ((data & 0x0001) ? true : false);

  		  //console.log("マウス左ボタンの押下状態:"   + button_l);

        // マウス位置を取得する
        mouseX = e.pageX;	// X座標
        mouseY = e.pageY;	// Y座標

        // 要素の位置を取得
        var rect = canvas.getBoundingClientRect();

        // 要素の位置座標を計算
        var positionX = rect.left + window.pageXOffset;	// 要素のX座標
        var positionY = rect.top + window.pageYOffset;	// 要素のY座標

        // 要素の左上からの距離を計算
        offsetX = mouseX - positionX;
        offsetY = mouseY - positionY;

      }
  });



  var KeyboardInput = function()
  {

      // キーボードの入力状態を記録する配列
      var input_key_buffer = new Array();

      // ------------------------------------------------------------
      // キーボードを押したときに実行されるイベント
      // ------------------------------------------------------------
      document.onkeydown = function (e){
        if(!e) e = window.event; // レガシー

        input_key_buffer[e.keyCode] = true;
      };

      // ------------------------------------------------------------
      // キーボードを離したときに実行されるイベント
      // ------------------------------------------------------------
      document.onkeyup = function (e){
        if(!e) e = window.event; // レガシー

        input_key_buffer[e.keyCode] = false;
      };

      // ------------------------------------------------------------
      // ウィンドウが非アクティブになる瞬間に実行されるイベント
      // ------------------------------------------------------------
      window.onblur = function (){
        // 配列をクリアする
        input_key_buffer.length = 0;
      };

      // ------------------------------------------------------------
      // キーボードが押されているか調べる関数
      // ------------------------------------------------------------
      this.KeyIsDown = function(key_code){

        if(input_key_buffer[key_code])	return true;

        return false;
      };

      /*
      キー	keyCode
      0	48
      1	49
      2	50
      3	51
      4	52
      5	53
      6	54
      7	55
      8	56
      9	57
      A	65
      B	66
      C	67
      D	68
      E	69
      F	70
      G	71
      H	72
      I	73
      J	74
      K	75
      L	76
      M	77
      N	78
      O	79
      P	80
      Q	81
      R	82
      S	83
      T	84
      U	85
      V	86
      W	87
      X	88
      Y	89
      Z	90

      F1	112
      F2	113
      F3	114
      F4	115
      F5	116
      F6	117
      F7	118
      F8	119
      F9	120
      F10	121
      F11	122
      F12	123
      F13	124
      F14	125
      F15	126

      BackSpace	8
      Tab	9
      Clear	12
      Enter	13
      Command	15
      Shift	16
      Ctrl	17
      Alt	18
      CapsLock	20
      Esc	27
      スペースバー	32
      PageUp	33
      PageDown	34
      End	35
      Home	36
      ← (左矢印)	37
      ↑ (上矢印)	38
      → (右矢印)	39
      ↓ (下矢印)	40
      Insert	45
      Delete	46
      NumLock	144
      , <	188
      . >	190
      / ?	191
      [ {	219
      \ |	220
      ] }	221
      */
  };
};
