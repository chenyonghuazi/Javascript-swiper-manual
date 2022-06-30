

window.addEventListener('load',function(){

    const ul = document.querySelector('.content'); //轮播图主体
    const ol = document.querySelector('.pageNavigator'); //小圆圈

    //小圆圈的监听事件-----------------------------------------------
    // @ts-ignore
    for(var i = 0; i < ul?.children.length; i++){
        
        var li = document.createElement('li');

        li.setAttribute('index',i.toString());

        ol?.appendChild(li);
        
        li.addEventListener('click',function(){
            
            // @ts-ignore
            for (var i = 0; i < ul?.children.length; i++){
                // @ts-ignore
                ol.children[i].className = '';
            }
            this.className = 'currentPage';
            const index = this.getAttribute('index');
            animate(ul,parseInt(index) * -600)
        })
    }

    // @ts-ignore 初始化样式
    ol.children[0].className = 'currentPage';
    //复制第一张图
    var firstChild = ul?.children[0].cloneNode(true)
    //添加第一张图到最后面 以达到无缝按右键
    ul?.appendChild(firstChild)

    //按钮点击监听-------------------------------------------------
    const btn_left = document.querySelector('.btn_left');
    const btn_right = document.querySelector('.btn_right');

    let offset = 0; //按钮点击后的偏移量

    btn_left?.addEventListener('click',function(e){
        
        //移动后的圆圈的index
        let newIndex = 0;

        // @ts-ignore
        for(var i = 0; i < ol?.children.length; i++){
        
            // @ts-ignore //找到当前是哪个圆圈高亮的index
            if(ol?.children[i].className == 'currentPage'){
                
                // @ts-ignore //已经到头啦！如果已经最右边了就不能再点了
                if(i == 0) return; 

                //新的移动量
                offset = (i-1) * -600;
                
                //得出移动后的圆圈的index
                newIndex = i-1;

                // @ts-ignore //取消旧的圆圈的样式
                ol.children[i].className = '';
            }
        }
        //移动动画
        animate(ul,offset);

        // @ts-ignore //给下一个新圆圈加上新的样式
        ol.children[newIndex].className = 'currentPage';
    });

    btn_right?.addEventListener('click',function(e){
        
        //移动后的圆圈的index
        let newIndex = 0;

        // @ts-ignore
        for(var i = 0; i < ol?.children.length; i++){
        
            // @ts-ignore //找到当前是哪个圆圈高亮的index
            if(ol?.children[i].className == 'currentPage'){
                
                // @ts-ignore //已经到头啦！如果已经最右边了就不能再点了
                //if(i == ol?.children.length -1) newIndex = -1; 

                //新的移动量
                offset = (i+1) * -600;
                
                //得出移动后的圆圈的index
                newIndex = i+1;

                // @ts-ignore //取消旧的圆圈的样式
                ol.children[i].className = '';
            }
        }
        //移动动画
        animate(ul,offset);

        // @ts-ignore //给下一个新圆圈加上新的样式
        ol.children[newIndex == ol?.children.length? 0 : newIndex].className = 'currentPage';
    });

    //显示or隐藏按钮的mouseover，mouseleave监听事件----------------------
    const container = document.querySelector('.container'); //整个轮播图的框架

    container?.addEventListener('mouseover',function(){
        console.log('mouseover');
        // @ts-ignore
        btn_left.style.display = 'block';
        // @ts-ignore
        btn_right.style.display = 'block';
    })

    container?.addEventListener('mouseleave',function(){
        console.log('mouseleave');
        // @ts-ignore
        btn_left.style.display = 'none';
        // @ts-ignore
        btn_right.style.display = 'none';
    })

})