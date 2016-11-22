// 通用插件
// Author:Hexiaobo

$(function () {

    //导航宽度判断
    var $nav_w = $(".nav").width();
    var $nav_li_len = $(".nav").find("li").length;
    if($nav_li_len>6){
        $(".nav>li").width($nav_w/$nav_li_len);
    }else {
        $(".nav>li").width(120);
    }

    /***tabs****/
    $(".tabcontrol").find("li:eq(0)").addClass("active");
    $(".tabmain").find(".tab_content:eq(0)").show();

    function tab_switch(cname,delay,navfill) {
        //默认延迟为300ms
        var delay = delay? delay:300;
        //控制切换
        $('.'+cname).on('mouseover', '.tabcontrol>li>a', function () {
            var tabindex = $(this).parent().index();
            var that = $(this);
            var change_tabs = setTimeout(function () {
                that.parent().addClass("active").siblings().removeClass("active");
                that.parents(".tabwrap").find(".tabmain>div").eq(tabindex).show().siblings("div").hide();
            }, delay);
            $(this).mouseout(function () {
                clearTimeout(change_tabs)
            })
        })
        if ($('.'+cname+' .tabcontrol>li').length !== $('.'+cname+' .tabmain>.tab_content').length) {
            throw  cname+'中的tabs与tab_content数量不等'
        }
        //控制tabsnav是否填满
        if(navfill){
            var nav_len = $('.'+cname).find(".tab_item").length;
            var nav_w = $('.'+cname+' .tabcontrol').width();
            //var tab_item_w = nav_w % nav_len ===0?  nav_w/nav_len: Math.floor(nav_w/nav_len);
            var tab_item_w = (function () {
                if (nav_w % nav_len ===0) {
                    return nav_w/nav_len;
                } else {
                    return Math.floor(nav_w/nav_len);
                }
            }());
            $('.'+cname+' .tabcontrol > li').width(tab_item_w);
            $('.'+cname+' .tabcontrol > li:last').width(nav_w - tab_item_w* (nav_len-1));
        }
    }
    tab_switch("tab1",300);
    tab_switch("tab2",300);
    tab_switch("tab3",300);
    tab_switch("tab4",300);
    tab_switch("tab5",300);

    //判断列表，为空则显示“暂无信息”
    var nolist_html='<div class="nolist"><i class="fa fa-exclamation-circle"></i> 暂无信息</div>';
    $(".news-list:empty").html(nolist_html);






})/*$(function){}*/

