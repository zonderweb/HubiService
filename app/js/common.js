$(".itemTab").not(":first").hide();
$(".prodWrapper .prodTab").click(function() {
	$(".prodTabs .prodTab").removeClass("activeTab").eq($(this).index()).addClass("activeTab");
	$(".itemTab").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("activeTab");