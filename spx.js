/*
    SPX: Size and Positioning Expressions for HTML
    Author: Lucas Santana do Nascimento portela <lucas.softdev@gmail.com>
    Date: March 25, 2018
*/
$(()=>{
    $(window).resize(()=>{
        $(
            '*[data-spx-top],*[data-spx-left],'+
            '*[data-spx-bottom],*[data-spx-right],'+
            '*[data-spx-height],*[data-spx-width]'
        ).each(function(){
            ['top','left','bottom','right','height','width'].forEach(cssattr=>{
                var exp=this.dataset[
                    'spx'+
                    cssattr.charAt(0).toUpperCase()+
                    cssattr.substr(1)
                ];
                if(!exp)return;
                var anchors=exp.match(/([tlbrhw]\([^\)]+\))/g);
                if(anchors)anchors.forEach(anchor=>{
                    var prefix=anchor.charAt(0).toLowerCase();
                    var el=$(anchor.substr(2,anchor.length-3));
                    var value=0;
                    switch(prefix){
                        case 't': value=el.offset().top;break;
                        case 'l': value=el.offset().left;break;
                        case 'b': value=el.offset().top+el.outerHeight();break;
                        case 'r': value=el.offset().top+el.outerWidth();break;
                        case 'h': value=el.outerHeight();break
                        case 'w': value=el.outerWidth();break
                    };
                    exp=exp.replace(anchor,value);
                });

                var H=$(window).height();
                var W=$(window).height();
                exp=exp.replace(/H/g,H);
                exp=exp.replace(/W/g,W);
                $(this).css(cssattr,parseInt(eval(exp))+"px");
            });
        })
    }).trigger('resize');
});
