function animate(obj, target, callback){
    console.log('animate')
    if(obj.timer) {
        clearInterval(obj.timer);
        obj.timer = null;
    }

    obj.timer = setInterval(function(){

        const offsetX = obj.offsetLeft;
        let moving = (target - offsetX) / 10;

        if(offsetX == target) {
            if(callback) callback()
            clearInterval(obj.timer);
            return;
        }
        
        moving = moving > 0 ? Math.ceil(moving) : Math.floor(moving)

        obj.style.left = offsetX + moving + 'px';
    },30);
}