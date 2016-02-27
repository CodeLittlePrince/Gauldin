function $ (elm) {
		return document.getElementById(elm);
}
//getElementsByClassName兼容
function getElementsByClassName(className,root,tagName) {   
    if(root){
        root=typeof root=="string" ? document.getElementById(root) : root;   
    }else{
        root=document.body;
    }
    tagName=tagName||"*";                                    
    if (document.getElementsByClassName) {                   
        return root.getElementsByClassName(className);
    }else 
    { 
        var tag= root.getElementsByTagName(tagName);    
        var tagAll = [];                                    
        for (var i = 0; i < tag.length; i++) {                
            for(var j = 0,n = tag[i].className.split(' '); j < n.length; j++){    
                if(n[j] == className){
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}

// addEvent的兼容
var addEvent = document.addEventListener?
    function(elm,type,listener,useCapture){
        elm.addEventListener(type,listener,useCapture)
    }:
    function(elm,type,listener,useCapture){
        elm.attachEvent('on' + type,listener);
    };