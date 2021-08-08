/*
    SPX: Size and Positioning Expressions for HTML
    Author: Lucas Santana do Nascimento portela <lucas.softdev@gmail.com>
    Date: March 25, 2018
*/
$(()=>{
    $(window).resize(()=>{
        let sides = ['left','bottom','right','height','width'];
        let dimensions = ['height', 'width'];
        let allowedAttrs = sides
            .concat(dimensions)
            .concat(sides.map(x=>'margin-'+x))
            .concat(sides.map(x=>'padding-'+x))
            .concat(['margin','padding']);
        $(allowedAttrs.map(x=>`*[data-spx-${x}]`).each(function(){
            allowedAttrs.forEach(attr=>{
                var exp=this.attr('spx-'+attr);
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
                $(this).css(attr, parseInt(eval(exp))+"px");
            });
        })
    }).trigger('resize');
});
