function loadVideo(e) {
	var n = $("#icon_play"),
		i = ($("#bg_video"), new tvp.VideoInfo);
	i.setVid(e);
	var t = new tvp.Player;
	(function() {
		var e = navigator.userAgent.match(/chrome\/(\d+)/i);
		return !!(e && e[1] > 44)
	})();
	(bowser.tablet || bowser.safari) && n.hide();
	var o = {
		width: 1024,
		height: 600,
		video: i,
		modId: "video_show",
		vodFlashSkin: "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",
		autoplay: "1",
		playerType: "html5"
	};
	navigator.userAgent.indexOf("MSIE") >= 0 && navigator.userAgent.indexOf("Opera") < 0 && (o.playerType = ""), n.on("click", function() {
		try {
			t.create(o), $("#video_show,.fullmask").show()
		} catch(e) {
			console.log("播放失败")
		}
	})
}

function fixTxtHeght() {
	"en" == $("html").attr("lang")
}

function loadPcVideo() {
	var e = new tvp.VideoInfo,
		n = new tvp.Player,
		i = {
			width: "1024",
			height: "600",
			modId: "video18",
			vodFlashSkin: "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",
			isHtml5ShowLoadingAdOnStart: "false",
			isHtml5ShowLoadingAdOnChange: "false",
			type: "2",
			video: e,
			autoplay: "1"
		};
	$(".slide-video .logo").on("click", function() {
		e.setVid("b0344jiap29"), $(".banner-video,.fullmask").show(), n.create(i), autovideosize(), $(window).resize(function() {
			autovideosize()
		})
	}), $("#icon_play").on("click", function() {
		/en-us/.test(location.href) ? e.setVid("z0165kfbrmf") : e.setVid("a0165qlzxbt"), $(".banner-video,.fullmask").show(), n.create(i), autovideosize(), $(window).resize(function() {
			autovideosize()
		})
	})
}

function autovideosize() {
	var e = $(document).width(),
		n = $(window).height(),
		i = $(document).height();
	$(".banner-video").width(e), $(".banner-video").height(i), $(".banner-video .video").css({
		top: (n - 600) / 2
	})
}
if(navigator.userAgent.indexOf("MSIE") >= 0 && navigator.userAgent.indexOf("Opera") < 0) {
	$("#rotatingGlobe").hide(), $(".banner_img_planet").show();
	var userAgent = navigator.userAgent,
		rMsie = /(MSIE\s|trident.*rv:)([\w.]+)/,
		version, match = rMsie.exec(userAgent);
	match[2] < 9 && $(".slide-video video").hide()
} else $(".banner_img_planet").hide(), $("#rotatingGlobe").show(),
	function() {
		function e(e) {
			e = e || {};
			var n = !1,
				i = null,
				t = function() {
					window.innerWidth + (e.extraWidth || 0), 800 + (e.extraHeight || 0);
					i.canvas.width = 1500, i.canvas.height = 624, i.projection.translate([750, 950])
				};
			return function(e) {
				i = e, e.onInit(function() {
					n = !0, d3.select(window).on("resize", function() {
						n = !0
					})
				}), e.onDraw(function() {
					n && (t(), n = !1)
				})
			}
		}

		function n(e) {
			return e = e || {},
				function(n) {
					n.onInit(function() {
						window.innerWidth + (e.extraWidth || 0), window.innerHeight + (e.extraHeight || 0);
						n.projection.scale(800)
					})
				}
		}

		function i(e) {
			return function(n) {
				var i = null,
					t = !1;
				n.plugins.autorotate = {
					pause: function() {
						t = !0
					},
					resume: function() {
						t = !1
					}
				}, n.onDraw(function() {
					if(t || !i) i = new Date;
					else {
						var o = new Date,
							a = o - i,
							r = n.projection.rotate();
						r[0] += e * a / 1e3, r[0] >= 180 && (r[0] -= 360), n.projection.rotate(r), i = o
					}
				})
			}
		}
		var t = document.getElementById("rotatingGlobe"),
			o = planetaryjs.planet();
		o.loadPlugin(e({
			extraHeight: -120
		})), o.loadPlugin(n({
			extraHeight: -120
		})), o.loadPlugin(planetaryjs.plugins.earth({
			topojson: {
				file: "../js/world-110m.json"
			},
			oceans: {
				fill: "#085dc0"
			},
			land: {
				fill: "#7db4f4"
			},
			borders: {
				stroke: "#2577d4"
			}
		})), o.loadPlugin(planetaryjs.plugins.pings()), o.loadPlugin(planetaryjs.plugins.zoom({
			scaleExtent: [50, 5e3]
		})), o.loadPlugin(i(5)), o.projection.rotate([250, -10, 0]), o.draw(t);
		var a = ["white"];
		setInterval(function() {
			var e = 45 * Math.random() + 40,
				n = 360 * Math.random() - 180,
				i = a[Math.floor(Math.random() * a.length)];
			o.plugins.pings.add(n, e, {
				color: i,
				ttl: 2e3,
				angle: 10 * Math.random()
			})
		}, 100)
	}();
var addVideoHandler = function(e, n) {
	var i = new tvp.VideoInfo;
	i.setVid(e), i.setTitle(n);
	var t = new tvp.Player,
		o = $("#bg_video"),
		a = $("#icon_play");
	o.width(), o.height();
	t.create({
		width: 1024,
		height: 600,
		video: i,
		modId: "video18",
		playerType: "html5",
		isHtml5ShowPlayBtnOnPause: !1
	}), a.on("click", function() {
		t.play(), $(".banner-video,.fullmask").show(), autovideosize()
	})
};
$(function() {
	fixTxtHeght(), loadPcVideo(), $(".banner-video .close").on("click", function() {
		$(".banner-video,.fullmask").hide(), $("#video18").empty()
	}), $(".flexslider").flexslider({
		animation: "fade",
		slideshowSpeed: 6e3,
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a")
	}), $(".tab_item").on("click", function() {
		var e = $(this).children().text();
		$(this).addClass("current").siblings().removeClass("current"), $(this).parent(".tab_list").siblings(".news_con").find(".list_" + e).siblings().hide().end().fadeIn(400)
	}), $(".fullmask").height($(document).height())
});