events.on("ready",function(){$(".botao").on("click",function(){$(this).removeClass("infinite")}),$(".flip-click").on("click",function(){$(this).removeClass("infinite")}),$(".noler").attr("tabindex","-1"),$("video").attr("tabindex","-1"),$(".owl-next").addClass("animated pulse infinite"),$(".line-interation").find(".line-major").addClass("animated fadeInRight"),$(".line-interation").find(".botao").on("click",function(){$(this).parent().parent(".line-minor").siblings(".line-major").css("display","block")});var n=$(".component-template-header").outerHeight()||0,e=[];$('[id^="ponto"]').each(function(){e.push($(this).offset().top-n)}),$(window).on("scroll",function(){for(var n=$(this).scrollTop(),i=0;i<e.length;i++)if(n>=e[i]&&(i===e.length-1||n<e[i+1])){$(".opMenu").removeClass("active"),$(".op0"+(i+1)).addClass("active");break}}),$(window).on("resize",function(){n=$(".component-template-header").outerHeight()||0,e=[],$('[id^="ponto"]').each(function(){e.push($(this).offset().top-n)})})});
//# sourceMappingURL=script.js.map
