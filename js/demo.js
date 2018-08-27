window.onload = function() {
    //IE函数检测
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function(cls) {
            var ret = [];
            var els = document.getElementsByTagName("*");
            for(var i = 0;i < els.length; i++){
                if(els[i].className == cls ){
                    ret.push(els[i]);
                }
            }
            return ret;
        }

    }



    //变量声明
    var catTable = document.getElementById('cartTable');
    var tr = catTable.children[1].rows;
    var checkInput = document.getElementsByClassName("check");
    var checkAll = document.getElementsByClassName('check-all');


    //全选功能
   for(var i = 0; i<checkAll.length; i++) {
        checkAll[i].addEventListener('click',function(){//勾选全选自动选中所有产品
            for(var i = 0; i<checkInput.length; i++){
                checkInput[i].checked = this.checked;
            }
        },false); 
    }

    for(var i = 1; i < checkInput.length - 1; i++){
        checkInput[i].addEventListener('click',function(){//产品全部选中自动勾选全选
            for(var i = 1; i < checkInput.length - 1; i++){
                if(!checkInput[i].checked){
                    for(var i = 0; i<checkAll.length; i++){
                        checkAll[i].checked = false;
                    };
                    break;
                }else{
                    if(i == checkInput.length - 2){
                        checkAll[0].checked = true;
                        checkAll[1].checked = true;
                    }
                }                
            }
        },false)
    }


    //计算价格
    var priceTotal = document.getElementById('priceTotal');//总金额
    var countInput = document.getElementsByClassName("count-input");//数量
    var reduceBtn = document.getElementsByClassName('reduce');

    for(var i = 0; i<reduceBtn.length; i++){
        reduceBtn[i].addEventListener('click',reduce,false)
    }
    
    function reduce(){
        for(var i = 0; i<countInput.length; i++){
        
        }
    }








}