import React, { useEffect, useState } from 'react';
import '../styles/example.scss';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function Example() {
	const [html, setHtml] = useState('Sample');
	const [headerLogo, setHeaderLogo] = useState([
		{
			value: '1',
			id: 0,
		},
	]);
	const [artist, setArtist] = useState([
		{
			value:
				'/track/33m6w/Aoife+Nessa+Frances+-+Way+to+Say+Goodbye',
			id: 0,
		},
	]);
	const [baseTitle, setBaseTitle] = useState([
		{
			value:
				'https://static.hypem.com/items_images/dc/33m6w_320.jpg',
			id: 0,
		},
	]);
	const [rank, setRank] = useState([
		{
			value: 'Aoife Nessa Frances',
			id: 0,
		},
	]);
	const [remixLink, setRemixLink] = useState([
		{
			value: 'Way to Say Goodbye',
			id: 0,
		},
	]);
	const [socMedia, setSocMedia] = useState([
		{
			value: '',
			id: 0,
		},
	]);
	const [socMediaLink, setSocMediaLink] = useState([
		{
			value: 'Bandcamp',
			id: 0,
		},
	]);
	const [thumb, setThumb] = useState([
		{
			value: '/go/bc/33m6w',
			id: 0,
		},
	]);
	const [thumbNail, setThumbNail] = useState([
		{
			title: 'Hype Machine',
			href: '/latest',
		},
	]);
	const sampleUrl = 'https://hypem.com/popular';

	const randomNumOneToTen =
		Math.floor(Math.random() * (19 - 0 + 1)) + 0;

	const previewThumb =
		!!thumbNail && !!thumbNail[randomNumOneToTen]?.value
			? thumbNail[randomNumOneToTen].value
			: null;

	const previewRank =
		!!rank && !!rank[randomNumOneToTen]?.value
			? rank[randomNumOneToTen].value
			: null;

	const previewArtist =
		!!artist && !!artist[randomNumOneToTen]?.value
			? artist[randomNumOneToTen].value
			: null;

	const previewTitle =
		!!baseTitle && !!baseTitle[randomNumOneToTen]?.value
			? baseTitle[randomNumOneToTen].value
			: null;

	const sendUrl = () => {
		axios
			.get(
				'https://aqueous-lowlands-32179.herokuapp.com/scrape',
				{
					params: { url: sampleUrl },
				}
			)
			.then((res) => {
				const data = JSON.parse(res.data);
				const {
					html,
					headerLogo,
					artist,
					baseTitle,
					rank,
					remixLink,
					socialMedia,
					socialMediaLink,
					thumb,
					thumbnail,
				} = data;
				setHtml(html);
				setHeaderLogo(headerLogo);
				setArtist(artist);
				setBaseTitle(baseTitle);
				setRank(rank);
				setRemixLink(remixLink);
				setSocMedia(socialMedia);
				setSocMediaLink(socialMediaLink);
				setThumb(thumb);
				setThumbNail(thumbnail);
			})
			.catch((error) => {
				const data = {
					html: [
						'<!DOCTYPE html><html lang="en"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# hype-machine: http://ogp.me/ns/fb/hype-machine#">\n\n    <title>Popular tracks / Hype Machine</title>\n\n    <meta property="fb:app_id" content="149376585092829">\n    <meta property="og:url" content="https://hypem.com/popular">\n    <meta property="og:description" content="The most popular music on the web right now">\n    <meta property="og:title" content="Popular tracks / Hype Machine">\n    <meta property="og:image" content="https://static.hypem.com/images/share-logo-wide.png">\n    <meta property="og:site_name" content="Hype Machine">\n    <meta property="twitter:image" content="https://static.hypem.com/images/share-logo-square.png">\n    <meta property="twitter:card" content="summary">\n    <meta name="viewport" content="width=device-width, maximum-scale=2">\n    <meta name="apple-mobile-web-app-capable" content="yes">\n    <meta name="verify-v1" content="qwbaObdzdZWrdu9G4KvAUGD+eLPZj38HYoLP/rhlBYo=">\n    <meta name="title" content="Popular tracks / Hype Machine">\n    <meta name="description" content="The most popular music on the web right now">\n    \n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n    \n        <link rel="canonical" href="/popular">\n    \n    <link rel="icon" href="https://static.hypem.com/favicon.png" type="image/x-icon">\n\n    <link rel="shortcut icon" href="https://static.hypem.com/favicon.png" type="image/x-icon">\n\n        <link rel="apple-touch-icon" href="/images/touch-icon-iphone.png">\n    <link rel="apple-touch-icon" sizes="76x76" href="/images/touch-icon-ipad.png">\n    <link rel="apple-touch-icon" sizes="114x114" href="/images/touch-icon-iphone4.png">\n    <link rel="apple-touch-icon" sizes="120x120" href="/images/touch-icon-iphone-retina.png">\n    <link rel="apple-touch-icon" sizes="152x152" href="/images/touch-icon-ipad-retina.png">\n    <link rel="apple-touch-icon" sizes="167x167" href="/images/touch-icon-ipad-pro.png">\n    <link rel="apple-touch-icon" sizes="180x180" href="/images/touch-icon-iphone-6-plus.png">\n    <link rel="search" type="application/opensearchdescription+xml" href="/hypemachine.xml" title="Hype Machine">\n    \n        <link rel="stylesheet" type="text/css" media="screen" href="https://static.hypem.com/rev_1667150368/css/stylish.css">\n\n        <link rel="alternate" type="application/rss+xml" title="RSS" href="http://hypem.com/feed/popular/3day/1/feed.xml">\n    \n    <script src="https://static.hypem.com/rev_1492790219/js/libs/jquery-3.2.1.min.js"></script>\n<script src="https://static.hypem.com/rev_1667150372/js/hype_functions_min.js"></script>\n<script>\n\n(function($) {\n\n    window.takeovers = []; /* this is included prior to header_scripts.php, in header.php */\n\n    /* utility jQuery extensions */\n    jQuery.cachedScript = function(url, options) {\n        options = $.extend(options || {}, {\n            dataType: "script",\n            cache: true,\n            url: url\n        });\n\n        return jQuery.ajax(options);\n    };\n\n    /*\n        INIT User-Agent info\n        This should be reworked eventually, but we do need to sometimes know, is_ios, is_android, and etc.\n    */\n    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) { ua_info.is_ios = true; } \n    else if (navigator.userAgent.match(/android/i)) { ua_info.is_android = true; }\n    else if (navigator.userAgent.match(/playbook/i)) { ua_info.is_playbook = true; } \n    else if (navigator.userAgent.match(/\\(BB10;/i)) { ua_info.is_blackberry = true; }\n    else if (navigator.userAgent.match(/Windows Phone/i)) { ua_info.is_win_phone = true; } \n    else if (navigator.userAgent.match(/Mozilla\\/5\\.0 \\(Mobile; rv:/) ) { ua_info.is_ff_os = true; } \n\n    if (navigator.userAgent.match(/android 2\\.1/i) ) { ua_info.is_android_old_flash = true; } \n    else { ua_info.is_android_old_flash = false; }\n\n    if (navigator.userAgent.match(/msie (5|6|7|8)/i)) { ua_info.is_old_ie = true; } \n    else { ua_info.is_old_ie = false; }\n\n    if ( navigator.userAgent.match(/version\\//i) \n         && navigator.userAgent.match(/safari\\//i) ) {\n        ua_info.is_safari = true;\n    } else {\n        ua_info.is_safari = false;\n    }\n\n    if ( navigator.userAgent.match(/chromium\\//i) ) { ua_info.is_chromium = true; } \n    else { ua_info.is_chromium = false; }\n\n    if ( navigator.userAgent.match(/chrome\\/(25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40)/i) ) {\n        ua_info.is_bad_chrome = true;\n    } else {\n        ua_info.is_bad_chrome = false;\n    }\n\n    if(\n        ua_info.is_ios ||\n        ua_info.is_playbook ||\n        ua_info.is_android ||\n        navigator.userAgent.match(/Mozilla\\/5\\.0 \\(Mobile; rv:/) || /* Firefox Mobile OS */ \n        navigator.userAgent.match(/blackberry/i) ||\n        navigator.userAgent.match(/palm/i) ||\n        navigator.userAgent.match(/sony/i) ||\n        navigator.userAgent.match(/symbian/i) ||\n        navigator.userAgent.match(/nokia/i) ||\n        navigator.userAgent.match(/samsung/i) ||\n        navigator.userAgent.match(/mobile/i) ||\n        navigator.userAgent.match(/windows ce/i) ||\n        navigator.userAgent.match(/epoc/i) ||\n        navigator.userAgent.match(/opera mini/i) ||\n        navigator.userAgent.match(/nitro/i) ||\n        navigator.userAgent.match(/j2me/i) ||\n        navigator.userAgent.match(/midp\\-/i) ||\n        navigator.userAgent.match(/cldc\\-/i) ||\n        navigator.userAgent.match(/netfront/i) ||\n        navigator.userAgent.match(/mot/i) ||\n        navigator.userAgent.match(/up\\.browser/i) ||\n        navigator.userAgent.match(/up\\.link/i) ||\n        navigator.userAgent.match(/audiovox/i) ||\n        navigator.userAgent.match(/ericsson/i) ||\n        navigator.userAgent.match(/panasonic/i) ||\n        navigator.userAgent.match(/philips/i) ||\n        navigator.userAgent.match(/sanyo/i) ||\n        navigator.userAgent.match(/sharp/i) ||\n        navigator.userAgent.match(/sie-/i) ||\n        navigator.userAgent.match(/portalmmm/i) ||\n        navigator.userAgent.match(/blazer/i) ||\n        navigator.userAgent.match(/avantgo/i) ||\n        navigator.userAgent.match(/danger/i) ||\n        navigator.userAgent.match(/series60/i) ||\n        navigator.userAgent.match(/palmsource/i) ||\n        navigator.userAgent.match(/pocketpc/i) ||\n        navigator.userAgent.match(/smartphone/i) ||\n        navigator.userAgent.match(/rover/i) ||\n        navigator.userAgent.match(/ipaq/i) ||\n        navigator.userAgent.match(/au\\-mic/i) ||\n        navigator.userAgent.match(/alcatel/i) ||\n        navigator.userAgent.match(/ericy/i) ||\n        navigator.userAgent.match(/up\\.link/i) ||\n        navigator.userAgent.match(/vodafone/i) ||\n        navigator.userAgent.match(/wap1\\./i) ||\n        navigator.userAgent.match(/wap2\\./i)\n    ) {\n        ua_info.is_mobile = true;\n    } else {\n        ua_info.is_mobile = false;\n    }\n\n    ua_info.ua = navigator.userAgent;\n\n    /*\n    (function() {\n        if(ua_info.is_mobile) {\n            var head = document.getElementsByTagName(\'head\')[0];\n            var css_sheet = document.createElement(\'link\');\n            css_sheet.type = "text/css";\n            css_sheet.rel = "stylesheet";\n            css_sheet.id = "mobile_css";\n            css_sheet.href = \'https://static.hypem.com/rev_1667150367/css/mobile.css\';\n            head.appendChild(css_sheet);\n        }\n    })();\n    */\n\n    static_http_server = "https://static.hypem.com";\n    server_time = 1667457905;\n\n    window.custom_css = [\n    {\n        match: /\\/zeitgeist\\/2007/, id: "css_zeitgeist07",\n        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2007.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2008/, id: "css_zeitgeist08",\n        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2008.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2009/, id: "css_zeitgeist09",\n        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2009.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2010/, id: "css_zeitgeist10",\n        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2010.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2011/, id: "css_zeitgeist11",\n        href: "https://static.hypem.com/rev_1590107838/css/zeitgeist-2011.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2011\\/artists/, id: "css_zeitgeist11_artists",\n        href: "https://static.hypem.com/rev_1590107838/css/zeitgeist-2011-map-ui.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2012/, id: "css_zeitgeist12",\n        href: "https://static.hypem.com/rev_1667150368/css/zeitgeist-2012.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2013/, id: "css_zeitgeist13",\n        href: "https://static.hypem.com/rev_1667150369/css/zeitgeist-2013.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2014/, id: "css_zeitgeist14",\n        href: "https://static.hypem.com/rev_1667150369/css/zeitgeist-2014.css"\n    }, \n    {\n        match: /\\/zeitgeist\\/2015/, id: "css_zeitgeist15",\n        href: "https://static.hypem.com/rev_1667150369/css/zeitgeist-2015.css"\n    }, \n    {\n        match: /\\/zeitgeist\\/2016/, id: "css_zeitgeist16",\n        href: "https://static.hypem.com/rev_1667150369/css/zeitgeist-2016.css"\n    },\n    {\n        match: /\\/zeitgeist\\/2017/, id: "css_zeitgeist17",\n        href: "https://static.hypem.com/rev_1667150369/css/zeitgeist-2017.css"\n    },  \n    {\n        match: /\\/zeitgeist\\/2018/, id: "css_zeitgeist18",\n        href: "https://static.hypem.com/rev_1667150370/css/zeitgeist-2018.css"\n    },  \n    {\n        match: /\\/zeitgeist\\/2019/, id: "css_zeitgeist19",\n        href: "https://static.hypem.com/rev_1667150370/css/zeitgeist-2019.css"\n    },  \n    {\n        match: /\\/zeitgeist\\/2020/, id: "css_zeitgeist20",\n        href: "https://static.hypem.com/rev_1667150370/css/zeitgeist-2020.css"\n    },  \n    {\n        match: /\\/zeitgeist\\/2021/, id: "css_zeitgeist21",\n        href: "https://static.hypem.com/rev_1667150370/css/zeitgeist-2021.css"\n    },  \n    {\n        match: /\\/hotel\\/2014/, id: "css_sxsw2014_wrap",\n        href: "https://static.hypem.com/rev_1667150368/css/sxsw-2014_wrap.css"\n    }, \n    {\n        match: /\\/hotel\\/2015/, id: "css_sxsw2015",\n        href: "https://static.hypem.com/rev_1667150368/css/sxsw-2015.css"\n    }, \n    {\n        match: /\\/hotel\\/2016/, id: "css_sxsw2016",\n        href: "https://static.hypem.com/rev_1667150368/css/sxsw-2016.css"\n    }, \n    {\n        match: /\\/special\\/ones-to-watch-2015-2/, id: "css_otw2015_2",\n        href: "https://static.hypem.com/rev_1667150367/css/otw-2015_2.css"\n    }, \n    { \n        match: /\\/special\\/moogfest-2016/, id: "css_moogfest2016",\n        href: "https://static.hypem.com/rev_1667150367/css/moogfest-2016.css"\n    }, \n    { \n        match: /\\/special\\/moogfest-2016/, id: "css_moogfest2016",\n        href: "https://static.hypem.com/rev_1667150367/css/moogfest-2016.css"\n    }, \n    { \n        match: /\\/special\\/form-2016/, id: "css_form2016",\n        href: "https://static.hypem.com/rev_1667150366/css/form-2016.css"\n    }, \n    { \n        match: /\\/cmj2015/, id: "css_cmj2015",\n        href: "https://static.hypem.com/rev_1667150366/css/cmj-2015.css"\n    }, \n    {\n        match: /\\/hotel\\/video/, id: "css_baeble_video",\n        href: "http://hypehotel.baeblemusic.com/fancybox/source/jquery.fancybox.css?v=2.0.6"\n    },\n    {\n        match: /\\/hotel\\/mobile/, id: "css_tb_special",\n        href: "https://static.hypem.com/rev_1335021536/css/tb-mobile-special.css"\n    },\n    {\n        match: /\\/spy/, id: "css_spy_map",\n        href: "https://static.hypem.com/rev_1493874591/js/jquery-jvectormap-2.0.3/jquery-jvectormap-2.0.3.css"\n    }\n    ];\n\n    \n\n\n    /* Mini-scroll action to remove the location bar on iOS */\n    if(ua_info.is_ios) {\n\n        window.addEventListener("load",function() {\n\n            /* timeout required for this to work, somehow */\n            setTimeout(function(){\n                window.scrollTo(0, 1); /* Hide the address bar! */\n            }, 1000);\n\n        });\n\n    }\n \n\n    /* load libs */\n    /* global namespaces */\n    var libs = {\n        Waypoints : \'https://static.hypem.com/rev_1443595686/js/libs/jquery.waypoints.min.js\',\n        Lightbox : \'https://static.hypem.com/rev_1544208599/js/libs/jquery.lightbox.js\' /* WARNING: not really a jquery plugin */\n    };\n    var libs_loaded = [];\n    for(var lib in libs){\n        if(typeof window[lib] === \'undefined\'){\n            libs_loaded.push($.cachedScript(libs[lib]));\n        }\n    }\n\n    /* namespaces under jQuery */\n    // var jquery_libs = {\n    //     tooltip: \'https://static.hypem.com/rev_1667150372/js/libs/tooltip_min.js\'\n    // };\n    // for(var jquery_lib in jquery_libs){\n    //     if(!$.fn[jquery_lib]){\n    //         libs_loaded.push($.cachedScript(jquery_libs[jquery_lib]));\n    //     }\n    // }\n\n\n    /* load and init soundmanager */\n    $.cachedScript(\'https://static.hypem.com/rev_1543440594/js/soundmanagerv297a-20170601/script/soundmanager2-nodebug-jsmin.js\')\n        .then(init_soundmanager);\n\n    if(is_hypem()) {\n        $.cachedScript(\'https://static.hypem.com/rev_1667150372/js/libs/fingerprint_min.js\')\n        .then(init_fp);\n    }\n    \n    $(document).ready(function() { /* this attaches to outer document scope only and fires once per hard page reload */\n        show_loading();\n\n        activeList = get_current_rel_url();\n\n        init_selectors();\n\n        attach_clicks();\n        attach_clicks_player_bar();\n\n        init_visibility_check();\n\n        if(!ua_info.is_mobile) {\n            $(window).scroll(sticky_relocate);\n            sticky_relocate();\n        }\n\n        /* wait for user menu callback to return with user info */\n        $.when(load_user_menu()).done(function(){\n            page_url_state_init();\n        }); \n\n    }); \n\n    })(jQuery); \n\n</script>\n\n    <!-- facebook setup-->\n    <script>\n            window.facebook_authed = false;\n            window.facebook_auto_share = false;\n    </script>\n\n</head>\n\n<body id="popular" class="">\n\n<div id="about-site">\nThe best place to find new music on the web. Every day, thousands of people around the world write about music they love — and it all ends up here.\n</div>\n\n<div id="sticky-anchor"></div>\n\n<div id="header" data-header-type="standard">\n\n    <div id="header-inner" class="content-centered">\n        <a id="logo-txt" class="logo-txt icon-logo" href="/latest" title="Hype Machine"></a>\n        <a id="header-view-in-app" title="View in app" href="hypem://">Open in App →</a>\n        <ul class="menu">\n            <li id="menu-item-latest"><a href="/latest" title="Latest music">Latest</a>\n\n                            </li>\n            <li id="menu-item-popular" class="active"><a href="/popular" title="Popular tracks">Popular</a>\n            </li>\n\n            <li id="menu-item-stack"><a href="/stack" title="Stack newsletter"><span>✉</span>&nbsp;&nbsp;Stack</a></li>\n            \n                        <li id="menu-item-supportus"><a href="https://hypem.com/support-us" title="Fund Hype Machine">Support us</a></li>\n            \n            <li id="menu-item-more"><a title="More"><b>● ● ●</b></a>\n                <ul>\n                    <li id="menu-item-zeitgeist"><a href="/zeitgeist/2021" title="Best of the year"><span style="color: red;">★</span> Zeitgeist 2021</a></li>\n                    <li id="menu-item-mixes"><a href="/mixes" title="A collection of mixes from our newsletter">Good Mixes</a></li>\n                    <li id="menu-item-reads"><a href="/reads" title="Music longreads from our newsletter">Good Reads</a></li>\n                    <li id="menu-item-spy"><a href="/spy" title="View real-time activity on the site">Spy</a></li>\n                    <li id="menu-item-merchtable"><a href="/merch-table" title="Merch Table">Merch Table</a></li>\n                    <li id="menu-item-directory"><a href="/sites" title="All the sites we index">Indexed Sites</a></li>\n                    <li id="menu-item-album"><a href="/albums" title="Featured albums">Featured Album Archive</a></li>\n                </ul>\n            </li>\n        </ul>\n        <form id="search-form" action="/search" method="get" onsubmit="load_search(); return false;" name="searchform">\n            <input name="q" type="text" id="q" value="Artist or Track" title="Artist or Track" class="clear-on-click">\n            <input type="submit" id="g" value="Search">\n            <!--<a href="/random_search" id="shuf" class="icon-shuffle" onclick="load_random_search();return false;" title="Do the search shuffle"></a>-->\n        </form>\n        <div id="filter" class="user-menu"></div><!-- filter -->    </div>\n\n</div>\n\n<div id="flash-message"></div>\n\n<div id="player-loading"><span>LOADING</span></div>\n\n<div id="player-container">\n\n    <div id="yt-container"></div>\n\n    <div id="player-inner" class="content-centered">\n\n        <div id="player-page"></div>\n\n        <div id="player-controls" class="haarp-fav-active">\n            <a id="playerPrev" class="icon-previous"></a>\n            <a id="playerPlay" class="play-ctrl haarp-play-ctrl icon-play"></a>\n            <a id="playerFav" class="icon-heart haarp-fav-ctrl"></a>\n            <a id="playerNext" class="icon-next"></a>\n            <a id="playerRepeat" class="icon-repeat"></a>\n\n            <div id="player-queue"></div>\n            <div id="player-nowplaying"></div>\n\n            <div id="player-timebar">\n                <div id="player-time-position">0:00</div>\n                <div id="player-time-total"></div>\n                <div id="player-progress-outer">\n                    <div id="player-progress-loading">&nbsp;</div>\n                    <div id="player-progress-playing">&nbsp;</div>\n                </div>\n                <div id="player-volume-container">\n                    <div id="player-volume-mute" class="icon-speaker"><span>&nbsp;</span>\n                    </div>\n                    <div id="player-volume-outer">\n                        <div id="player-volume-ctrl">&nbsp;</div>\n                    </div>\n                </div>\n            </div> <!-- player-timebar -->\n            \n        </div><!-- player-controls-->\n\n    </div><!-- player-inner -->\n\n</div><!-- player-container -->\n<div id="content-wrapper">\n\n    \n        <script>\n        jQuery(\'body\').attr(\'id\', \'popular\'); // apply appropriate css styles by changing body id\n        window.displayList[\'url\'] = document.location.href; // FIXME: should be rel?\n    </script>\n    \n    <div id="container">\n\n        \n                    <div class="ad-breakout"><div class="ad-wrapper ad-leaderboard" id="ad-leaderboard"></div></div>\n                <div id="content" class="content-centered"><!-- oh look you are reading comments. well, we love you.  -->\n<div id="content-right">\n    <div class="section social-summary">\n\n        <div style="padding-top: 4px; margin-bottom:12px;"><a href="https://hypem.com/support-us?e=sidebar" style="text-decoration: none;"><div class="supportus-button">Join 3,062 supporters.<br>Fund Hype Machine →</div></a></div>       \n\n        <div class="summary-item">\n            <div class="summary-other"><a href="/about">About/FAQ</a> • <a href="/contact">Contact</a> • <a href="http://merch.hypem.com">Tees &amp; Merch</a></div>\n        </div>\n\n        <div class="summary-item">\n            <div class="summary-title">Apps</div>\n            <div class="summary-content">\n                <a class="icon-apple" href="/iphone"></a>\n                <a class="icon-android" href="/android"></a>\n            </div>\n        </div>  \n        <div class="summary-item">\n            <div class="summary-title">Social</div>\n            <div class="summary-content">\n        \t\t<a class="icon-instagram" href="https://instagram.com/hypem"></a>\n        \t\t<a class="icon-twitter" href="https://twitter.com/hypem"></a>\n                <a class="icon-spotify" href="https://open.spotify.com/user/hypem"></a>\n                <a class="icon-sc" href="https://soundcloud.com/hypem"></a>        \n            </div>\n        </div>\n\n    </div>\n        <div class="ad-wrapper ad-rectangle-modern ad-rectangleA" id="ad-rectangleA"></div>    <div class="section" style="margin-bottom:10px;">\n\n        <a href="/stack" style="margin-left: -10px;">\n            <img src="https://static.hypem.com/rev_1420743250/images/stack_sidebar.svg" alt="Stack logo">\n        </a>\n\n        <p style="margin-top:-7px;">\n        Once a week, Stack delivers a mix of the most interesting new music on the web, handpicked by the Hype Machine team. <a href="/stack/">Here\'s a recent mix</a>.\n        </p>\n\n                <!-- Begin MailChimp Signup Form -->\n        <div id="mc_embed_signup" style="padding: 5px 0px;font-size:13px;">\n            <form id="mc-embedded-subscribe-form" class="validate" action="https://hypem.us7.list-manage.com/subscribe/post?u=e9e17a06a5cc8fcbf10aaddf3&amp;id=28a82e4150" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">\n                <div class="mc-field-group" style="float:left;">\n                    <label for="mce-EMAIL" style="margin-right:5px;font-size:13px;">Email </label>\n                    <input id="mce-EMAIL" class="required email" style="width: 140px;font-size:13px;" name="EMAIL" type="email" value="">\n                    <input type="hidden" name="SIGNUP_SRC" id="SIGNUP_SRC" value="site_sidebar">\n                </div>\n            \n                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                <div style="position: absolute; left: -5000px;"><input tabindex="-1" name="b_e9e17a06a5cc8fcbf10aaddf3_28a82e4150" type="text" value=""></div>\n\n                <input id="mc-embedded-subscribe" class="button" style="font-size:13px;background:#ddd;" name="subscribe" type="submit" value="Subscribe">\n            </form>\n        </div><!--End mc_embed_signup-->\n            </div>\n<div class="ad-wrapper ad-rectangle-modern ad-rectangleB" id="ad-rectangleB"></div>    <div id="news" class="section">\n        <h3><a href="https://blog.hypem.com">HYPE MACHINE PROJECT NEWS</a></h3>\n        <ul>\n                                <li><a href="https://blog.hypem.com/2021/07/new-audius-support/">\n                            <span class="dates">Jul 28</span>\n                            <span class="title">New: Audius support</span>\n                        </a>\n                    </li>\n                                    <li><a href="https://blog.hypem.com/2021/01/zeitgeist-2020/">\n                            <span class="dates">Jan 5</span>\n                            <span class="title">Zeitgeist 2020</span>\n                        </a>\n                    </li>\n                                    <li><a href="https://blog.hypem.com/2020/04/were-15/">\n                            <span class="dates">Apr 27</span>\n                            <span class="title">We’re 15!</span>\n                        </a>\n                    </li>\n                                    <li><a href="https://blog.hypem.com/2020/01/zeitgeist-2019/">\n                            <span class="dates">Jan 2</span>\n                            <span class="title">Zeitgeist 2019</span>\n                        </a>\n                    </li>\n                                    <li><a href="https://blog.hypem.com/2019/07/state-of-hype-machines-crowdfunding-year-two/">\n                            <span class="dates">Jul 29</span>\n                            <span class="title">State of Hype Machine’s Crowdfunding: Year Two</span>\n                        </a>\n                    </li>\n                                    <li><a href="https://blog.hypem.com/2019/04/loved-by-your-music-neighbors/">\n                            <span class="dates">Apr 12</span>\n                            <span class="title">Loved by – your music neighbors</span>\n                        </a>\n                    </li>\n                        </ul>\n    </div><!-- news -->\n\n<div id="rectangleC-sticky-anchor"></div>\n          <div class="ad-wrapper ad-rectangle-modern ad-rectangleC" id="ad-rectangleC">\n              <div id="ds_default_anchor"></div>\n          </div>\n</div> <!-- content-right -->\n\n\n    <div id="message" class="">\n\n        <h1>Popular Now</h1>    </div><!-- message -->\n<ul id="submenu" class="">\n\n            <li id="nav-now">\n              <a href="/popular" class="selected">Now</a>\n            </li>\n            <li id="nav-lastweek">\n              <a href="/popular/lastweek">Time Machine</a>\n            </li>\n            <li id="nav-remixes_only">\n              <a href="/popular/remix">Only Remixes</a>\n            </li>\n            <li id="nav-no_remixes">\n              <a href="/popular/noremix">No Remixes</a>\n            </li>\n            <li id="nav-artists">\n              <a href="/popular/artists">Artists</a>\n            </li>\n            <li id="nav-videos">\n              <a href="/popular/videos">Videos</a>\n            </li>\n\n    <li id="submenu-filter">\n        <span class="title">Sort:</span>\n                            <span id="submenu-filter-title">1 to 50 ↓</span>\n                    \n        <ul>\n                    <li>\n              <a href="/popular?">1 to 50 <span class="checkmark">✓</span></a>\n          </li>\n                    <li>\n              <a href="/popular?sortby=rank">50 to 1 </a>\n          </li>\n                    <li>\n              <a href="/popular?sortby=shuffle">Shuffle </a>\n          </li>\n                </ul>\n    </li>\n  \n</ul>\n\n\n\n<div id="content-left">\n\n    \n    <script type="text/javascript">set_nav_item_active(\'menu-item-popular\');</script>\n\n    <div id="track-list">\n\n    \n\n\n<div data-itemid="33m6w" id="section-track-33m6w" class="section section-track haarp-section-track  first">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">1</span>\n\n\n    <a class="thumb" href="/track/33m6w/Aoife+Nessa+Frances+-+Way+to+Say+Goodbye" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/dc/33m6w_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Aoife Nessa Frances - search Hype Machine for this artist" href="/artist/Aoife+Nessa+Frances">Aoife Nessa Frances</a><span class="divider"> - </span>        <a class="track" title="Way to Say Goodbye - go to page for this track" href="/track/33m6w/Aoife+Nessa+Frances+-+Way+to+Say+Goodbye">\n            <span class="base-title">Way to Say Goodbye</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33m6w&amp;text=Aoife+Nessa+Frances+-+Way+to+Say+Goodbye%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33m6w" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33m6w" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 4 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33m6w">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/2P8aYZRH33dfajdNbVfrop">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/the+vinyl+factory/23991">The Vinyl Factory</a><a class="follow-pill fav_site_23991 follow" onclick="toggleFavoriteBlog(\'23991\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Essential weekend listening. This week’s rundown is by VF’s Kelly Doherty, alongside Annabelle Van Dort, Emily Hill and James Hammond.…”\n                        <a class="readpost" href="https://thevinylfactory.com/features/releases-of-the-week-october-28/" title="28 Oct 2022 - 10:19 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33n62" id="section-track-33n62" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">2</span>\n\n\n    <a class="thumb" href="/track/33n62/The+Sweet+Serenades+-+Back+In+Your+Arms" title="Go to the page for this track" style="background:url(https://static.hypem.com/images/albumart/320/1.png) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="The Sweet Serenades - search Hype Machine for this artist" href="/artist/The+Sweet+Serenades">The Sweet Serenades</a><span class="divider"> - </span>        <a class="track" title="Back In Your Arms - go to page for this track" href="/track/33n62/The+Sweet+Serenades+-+Back+In+Your+Arms">\n            <span class="base-title">Back In Your Arms</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33n62&amp;text=The+Sweet+Serenades+-+Back+In+Your+Arms%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33n62" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33n62" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 3 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/sc/33n62">SoundCloud</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/phonograph+me/24855">Phonograph Me</a><a class="follow-pill fav_site_24855 follow" onclick="toggleFavoriteBlog(\'24855\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “De volta ao blog nesta manhã de Terça-feira, está o projecto sueco The Sweet Serenades, que tem single novo. Chama-se…”\n                        <a class="readpost" href="https://phonographme.blogspot.com/2022/11/the-sweet-serenades-back-in-your-arms.html" title="1 Nov 2022 - 5:00 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="32m6z" id="section-track-32m6z" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">3</span>\n\n\n    <a class="thumb" href="/track/32m6z/SAULT+-+Heart" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/df/32m6z_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="SAULT - search Hype Machine for this artist" href="/artist/SAULT">SAULT</a><span class="divider"> - </span>        <a class="track" title="Heart - go to page for this track" href="/track/32m6z/SAULT+-+Heart">\n            <span class="base-title">Heart</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F32m6z&amp;text=SAULT+-+Heart%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_32m6z" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_32m6z" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 18 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/32m6z">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/0TK0V7xWimQosb8KpzmFGY">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/the+tape+deck/24696">The Tape Deck</a><a class="follow-pill fav_site_24696 follow" onclick="toggleFavoriteBlog(\'24696\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “SAULT\'s orchestral AIR is a confounding left turn for the enigmatic London collective. It both benefits from the group\'s social…”\n                        <a class="readpost" href="https://tapedeckpodcast.com/sault-air-review/" title="15 Apr 2022 - 3:27 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33kza" id="section-track-33kza" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">4</span>\n\n\n    <a class="thumb" href="/track/33kza/Lowgo+-+Addict+%28feat.+Joseph+Tilley%29" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/ea/33kza_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Lowgo - search Hype Machine for this artist" href="/artist/Lowgo">Lowgo</a><span class="divider"> - </span>        <a class="track" title="Addict (feat. Joseph Tilley) - go to page for this track" href="/track/33kza/Lowgo+-+Addict+%28feat.+Joseph+Tilley%29">\n            <span class="base-title">Addict (feat. Joseph Tilley)</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33kza&amp;text=Lowgo+-+Addict+%28feat.+Joseph+Tilley%29%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33kza" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33kza" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 3 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/sc/33kza">SoundCloud</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/3ayCMiWHbp897sriKdLkkG">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/digital+high/24125">Digital High</a><a class="follow-pill fav_site_24125 follow" onclick="toggleFavoriteBlog(\'24125\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Drugs, gambling, sex, Bravo programming…the list of vices is well-known and seemingly endless. But Lowgo and Joseph Tilley are putting…”\n                        <a class="readpost" href="https://digitalhigh.blog/2022/10/27/lowgo-ft-joseph-tilley-addict/" title="27 Oct 2022 - 2:16 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33nmw" id="section-track-33nmw" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">5</span>\n\n\n    <a class="thumb" href="/track/33nmw/Jouska+-+Blue+Like+the+Sun" title="Go to the page for this track" style="background:url(https://static.hypem.com/images/albumart/320/3.png) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Jouska - search Hype Machine for this artist" href="/artist/Jouska">Jouska</a><span class="divider"> - </span>        <a class="track" title="Blue Like the Sun - go to page for this track" href="/track/33nmw/Jouska+-+Blue+Like+the+Sun">\n            <span class="base-title">Blue Like the Sun</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33nmw&amp;text=Jouska+-+Blue+Like+the+Sun%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33nmw" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33nmw" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 1 site</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/sc/33nmw">SoundCloud</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/electric+sound+of+joy/16312">electric sound of joy</a><a class="follow-pill fav_site_16312 follow" onclick="toggleFavoriteBlog(\'16312\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “A second LP by Oslo artist Marit Othilie Thorvik aka Jouska is on the way. Following in the footsteps of…”\n                        <a class="readpost" href="http://www.electricsoundofjoy.com/blog/2022/10/31/jouska" title="31 Oct 2022 - 5:05 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="31dz4" id="section-track-31dz4" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">6</span>\n\n\n    <a class="thumb" href="/track/31dz4/K%2C+Le+Maestro+-+CAN%C2%B4T+FAKE+IT%21" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/e4/31dz4_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="K, Le Maestro - search Hype Machine for this artist" href="/artist/K%2C+Le+Maestro">K, Le Maestro</a><span class="divider"> - </span>        <a class="track" title="CAN´T FAKE IT! - go to page for this track" href="/track/31dz4/K%2C+Le+Maestro+-+CAN%C2%B4T+FAKE+IT%21">\n            <span class="base-title">CAN´T FAKE IT!</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F31dz4&amp;text=K%2C+Le+Maestro+-+CAN%C2%B4T+FAKE+IT%21%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_31dz4" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_31dz4" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 5 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/31dz4">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/okayplayer/16684">Okayplayer</a><a class="follow-pill fav_site_16684 follow" onclick="toggleFavoriteBlog(\'16684\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Solemn Brigham, YUNGMORPHEUS x Eyedress, Wiki, maticulous, Ur Maa and more this Mixtape Monday. Solemn Brigham kicks things off this…”\n                        <a class="readpost" href="https://www.okayplayer.com/originals/best-hip-hop-rb-albums-eps-bandcamp-mixtapes-projects-week-october-4th-download.html" title="4 Oct 2021 - 10:36 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33khp" id="section-track-33khp" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">7</span>\n\n\n    <a class="thumb" href="/track/33khp/Furrows+-+Never+Here" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/36/33khp_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Furrows - search Hype Machine for this artist" href="/artist/Furrows">Furrows</a><span class="divider"> - </span>        <a class="track" title="Never Here - go to page for this track" href="/track/33khp/Furrows+-+Never+Here">\n            <span class="base-title">Never Here</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33khp&amp;text=Furrows+-+Never+Here%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33khp" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33khp" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33khp">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/594SiGoy1DSpGCa2PSCK1l">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/iggy+magazine/23747">IGGY MAGAZINE</a><a class="follow-pill fav_site_23747 follow" onclick="toggleFavoriteBlog(\'23747\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Continuons notre exploration musicale du lundi avec une nouvelle surprise. Le genre qui arrive à point nommé, un lundi où…”\n                        <a class="readpost" href="https://www.iggymagazine.com/ecoutez-never-here-le-dernier-titre-devoile-par-furrows/" title="31 Oct 2022 - 5:23 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n<div class="ad-wrapper ad-leaderboard ad-leaderboard-tracks ad-leaderboard-tracks-A" id="ad-leaderboard-tracks-A"></div>\n\n\n<div data-itemid="33gh7" id="section-track-33gh7" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">8</span>\n\n\n    <a class="thumb" href="/track/33gh7/PVA+-+Bunker" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/27/33gh7_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="PVA - search Hype Machine for this artist" href="/artist/PVA">PVA</a><span class="divider"> - </span>        <a class="track" title="Bunker - go to page for this track" href="/track/33gh7/PVA+-+Bunker">\n            <span class="base-title">Bunker</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33gh7&amp;text=PVA+-+Bunker%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33gh7" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33gh7" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 5 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33gh7">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/7tdhnR3o3p2jPZL7WD1u6k">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/post+trash/23560">Post-Trash</a><a class="follow-pill fav_site_23560 follow" onclick="toggleFavoriteBlog(\'23560\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “by Matty McPherson (@ghostplanetmatt) When I emerged from the Knoxville Airport back in March for Big Ears, I shared a…”\n                        <a class="readpost" href="http://post-trash.com/news/2022/11/2/pva-blush-album-review" title="2 Nov 2022 - 11:01 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="2xsnd" id="section-track-2xsnd" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">9</span>\n\n\n    <a class="thumb" href="/track/2xsnd/Stay+Inside+-+Revisionist" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/ad/2xsnd_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Stay Inside - search Hype Machine for this artist" href="/artist/Stay+Inside">Stay Inside</a><span class="divider"> - </span>        <a class="track" title="Revisionist - go to page for this track" href="/track/2xsnd/Stay+Inside+-+Revisionist">\n            <span class="base-title">Revisionist</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F2xsnd&amp;text=Stay+Inside+-+Revisionist%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_2xsnd" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_2xsnd" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 4 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/2xsnd">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/3Z0gpLGcm3bSD5a324jhgQ">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/stereogum/152">stereogum</a><a class="follow-pill fav_site_152 follow" onclick="toggleFavoriteBlog(\'152\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Despite the name, Brooklyn\'s Stay Inside are not specifically a pandemic-themed band. They released their debut EP The Sea Engulfs…”\n                        <a class="readpost" href="https://www.stereogum.com/2080110/stream-stay-insides-debut-album-viewing/music/album-stream/" title="13 Apr 2020 - 10:48 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="334gn" id="section-track-334gn" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">10</span>\n\n\n    <a class="thumb" href="/track/334gn/Loraine+James+-+Maybe+If+I+%28Stay+On+It%29" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/15/334gn_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Loraine James - search Hype Machine for this artist" href="/artist/Loraine+James">Loraine James</a><span class="divider"> - </span>        <a class="track" title="Maybe If I (Stay On It) - go to page for this track" href="/track/334gn/Loraine+James+-+Maybe+If+I+%28Stay+On+It%29">\n            <span class="base-title">Maybe If I (Stay On It)</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F334gn&amp;text=Loraine+James+-+Maybe+If+I+%28Stay+On+It%29%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_334gn" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_334gn" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 9 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/334gn">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/59gwh9WN0Z211RA8wnmHOC">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/groove+magazine/18116">Groove Magazine</a><a class="follow-pill fav_site_18116 follow" onclick="toggleFavoriteBlog(\'18116\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Teil 2 der essenziellen Alben im Oktober â mit Joachim Spieth, Konduku, Loraine James, Ludwig A.F., Massimiliano Pagliara und NiÃ±o…”\n                        <a class="readpost" href="https://groove.de/2022/10/25/oktober-2022-die-essenziellen-alben-teil-2/" title="25 Oct 2022 - 9:30 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33n8f" id="section-track-33n8f" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">11</span>\n\n\n    <a class="thumb" href="/track/33n8f/Kuni+-+Sleep+Baby" title="Go to the page for this track" style="background:url(https://static.hypem.com/images/albumart/320/0.png) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Kuni - search Hype Machine for this artist" href="/artist/Kuni">Kuni</a><span class="divider"> - </span>        <a class="track" title="Sleep Baby - go to page for this track" href="/track/33n8f/Kuni+-+Sleep+Baby">\n            <span class="base-title">Sleep Baby</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33n8f&amp;text=Kuni+-+Sleep+Baby%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33n8f" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33n8f" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 3 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33n8f">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/zone+nights/23840">Zone Nights</a><a class="follow-pill fav_site_23840 follow" onclick="toggleFavoriteBlog(\'23840\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Disponible en nuestro playlist 🦕 LA MUSIQUITA 🦕 https://open.spotify.com/playlist/7vN5zjhCKy8N5rBVkXpU9y?si=beeacadfb1874f43 Kuni, estrena su sencillo, titulado, Sleep Baby. Atención lectores, aquellos fanáticos…”\n                        <a class="readpost" href="https://www.zonenights.com/2022/10/kuni-sleep-baby/" title="28 Oct 2022 - 7:32 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33cnn" id="section-track-33cnn" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">12</span>\n\n\n    <a class="thumb" href="/track/33cnn/Sampa+The+Great+-+Never+Forget" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/b5/33cnn_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Sampa The Great - search Hype Machine for this artist" href="/artist/Sampa+The+Great">Sampa The Great</a><span class="divider"> - </span>        <a class="track" title="Never Forget - go to page for this track" href="/track/33cnn/Sampa+The+Great+-+Never+Forget">\n            <span class="base-title">Never Forget</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33cnn&amp;text=Sampa+The+Great+-+Never+Forget%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33cnn" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33cnn" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33cnn">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/rimas+e+batidas/24607">Rimas e Batidas</a><a class="follow-pill fav_site_24607 follow" onclick="toggleFavoriteBlog(\'24607\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Muitas rainhas por aqui nesta selecção semanal que só começa nestes seis nomes. Olhem aí o resto e tentem acompanhar:…”\n                        <a class="readpost" href="https://www.rimasebatidas.pt/sexta-feira-farta-novos-trabalhos-de-sampa-the-great-sudan-archives-ari-lennox-jockstrap-son-little-e-tiacorine/" title="9 Sep 2022 - 7:34 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33g5s" id="section-track-33g5s" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">13</span>\n\n\n    <a class="thumb" href="/track/33g5s/Ian+Fink+-+Moonlite+%28Duality%2FDetroit+Version%29" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/b9/33g5s_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Ian Fink - search Hype Machine for this artist" href="/artist/Ian+Fink">Ian Fink</a><span class="divider"> - </span>        <a class="track" title="Moonlite (Duality/Detroit Version) - go to page for this track" href="/track/33g5s/Ian+Fink+-+Moonlite+%28Duality%2FDetroit+Version%29">\n            <span class="base-title">Moonlite</span> <span class="remix-link">Duality/Detroit Version</span>         </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33g5s&amp;text=Ian+Fink+-+Moonlite+%28Duality%2FDetroit+Version%29%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33g5s" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33g5s" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 3 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33g5s">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/the+quietus/21614">The Quietus</a><a class="follow-pill fav_site_21614 follow" onclick="toggleFavoriteBlog(\'21614\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Out in October, the mix is an homage to the present and future of the music scene in his hometown…”\n                        <a class="readpost" href="https://thequietus.com/articles/32140-theo-parrish-to-oversee-next-dj-kicks-compilation" title="29 Sep 2022 - 6:28 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33m8g" id="section-track-33m8g" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">14</span>\n\n\n    <a class="thumb" href="/track/33m8g/Siv+Jakobsen+-+Tangerine" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/10/33m8g_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Siv Jakobsen - search Hype Machine for this artist" href="/artist/Siv+Jakobsen">Siv Jakobsen</a><span class="divider"> - </span>        <a class="track" title="Tangerine - go to page for this track" href="/track/33m8g/Siv+Jakobsen+-+Tangerine">\n            <span class="base-title">Tangerine</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33m8g&amp;text=Siv+Jakobsen+-+Tangerine%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33m8g" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33m8g" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 4 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/sc/33m8g">SoundCloud</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/321CAPcR4HTnaaxR0dus2e">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/abduction+radiation/21500">Abduction Radiation</a><a class="follow-pill fav_site_21500 follow" onclick="toggleFavoriteBlog(\'21500\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Norwegian songwriter Siv Jakobsen will be releasing her third album Gardening on January 20, 2023 via The Nordic Mellow. Last…”\n                        <a class="readpost" href="https://abductionradiation.tumblr.com/post/699013264057810944/norwegian-songwriter-siv-jakobsen-will-be" title="24 Oct 2022 - 12:03 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n<div class="ad-wrapper ad-leaderboard ad-leaderboard-tracks ad-leaderboard-tracks-B" id="ad-leaderboard-tracks-B"></div>\n\n\n<div data-itemid="32gap" id="section-track-32gap" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">15</span>\n\n\n    <a class="thumb" href="/track/32gap/Dopplereffekt+-+Neuroplasticity" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/56/32gap_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Dopplereffekt - search Hype Machine for this artist" href="/artist/Dopplereffekt">Dopplereffekt</a><span class="divider"> - </span>        <a class="track" title="Neuroplasticity - go to page for this track" href="/track/32gap/Dopplereffekt+-+Neuroplasticity">\n            <span class="base-title">Neuroplasticity</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F32gap&amp;text=Dopplereffekt+-+Neuroplasticity%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_32gap" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_32gap" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/32gap">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/filter+mxico/24305">FILTER México</a><a class="follow-pill fav_site_24305 follow" onclick="toggleFavoriteBlog(\'24305\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Si están gozando de las vacaciones de Semana Santa o están experimentando la frustración de no saber qué demonios son…”\n                        <a class="readpost" href="https://filtermexico.com/2022/04/15/whats-new-15-discos-nuevos-para-el-fin-de-semana-11/" title="15 Apr 2022 - 9:18 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33mx1" id="section-track-33mx1" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">16</span>\n\n\n    <a class="thumb" href="/track/33mx1/Midnight+Rodeo+-+The+Big+Melt" title="Go to the page for this track" style="background:url(https://static.hypem.com/images/albumart/320/3.png) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Midnight Rodeo - search Hype Machine for this artist" href="/artist/Midnight+Rodeo">Midnight Rodeo</a><span class="divider"> - </span>        <a class="track" title="The Big Melt - go to page for this track" href="/track/33mx1/Midnight+Rodeo+-+The+Big+Melt">\n            <span class="base-title">The Big Melt</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33mx1&amp;text=Midnight+Rodeo+-+The+Big+Melt%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33mx1" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33mx1" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33mx1">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/niche+music/22324">Niche Music</a><a class="follow-pill fav_site_22324 follow" onclick="toggleFavoriteBlog(\'22324\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “イングランド/ノッティンガム拠点のサイケデリックロックバンド Midnight Rodeoが、10/27にFatCat Recordsからリリースしたニューシングル \'The Big Melt\'を公開！ 6 […] The post Midnight Rodeo、\'The Big Melt\'を公開 first appeared on Niche Music.”\n                        <a class="readpost" href="https://nichemusic.info/midnight-rodeo-the-big-melt/" title="27 Oct 2022 - 8:29 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33ftk" id="section-track-33ftk" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">17</span>\n\n\n    <a class="thumb" href="/track/33ftk/Melby+-+Hammers" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/53/33ftk_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Melby - search Hype Machine for this artist" href="/artist/Melby">Melby</a><span class="divider"> - </span>        <a class="track" title="Hammers - go to page for this track" href="/track/33ftk/Melby+-+Hammers">\n            <span class="base-title">Hammers</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33ftk&amp;text=Melby+-+Hammers%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33ftk" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33ftk" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33ftk">Bandcamp</a> \n        \n                    \n            <span class="download-extra">\n             •             Also on:\n\n                            <a rel="nofollow" href="/go/spotify_track/35HZmpgWYXbp1DgDV3YST2">Spotify</a>\n            \n            \n            </span>\n\n             </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/we+love+that/23219">WE LOVE THAT</a><a class="follow-pill fav_site_23219 follow" onclick="toggleFavoriteBlog(\'23219\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Auch wenn ‚Hammers‘ relativ düster beginnt, vertreibt kurze Zeit darauf der typische Melby Sound die dunklen Wolken. Immer mehr kommt…”\n                        <a class="readpost" href="https://www.welovethat.de/2022/melby-hammers/" title="29 Sep 2022 - 12:51 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33bsf" id="section-track-33bsf" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">18</span>\n\n\n    <a class="thumb" href="/track/33bsf/Trentem%C3%B8ller+-+Into+The+Silence+feat.+D%C3%ADSA" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/2f/33bsf_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Trentemøller - search Hype Machine for this artist" href="/artist/Trentem%C3%B8ller">Trentemøller</a><span class="divider"> - </span>        <a class="track" title="Into The Silence feat. DíSA - go to page for this track" href="/track/33bsf/Trentem%C3%B8ller+-+Into+The+Silence+feat.+D%C3%ADSA">\n            <span class="base-title">Into The Silence feat. DíSA</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33bsf&amp;text=Trentem%C3%B8ller+-+Into+The+Silence+feat.+D%C3%ADSA%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33bsf" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33bsf" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 3 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33bsf">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/808blogg/24953">808blogg</a><a class="follow-pill fav_site_24953 follow" onclick="toggleFavoriteBlog(\'24953\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “While touring the new album Memoria together Trentemøller and Disa Jakobs a.k.a. DíSA decided to make a track together and…”\n                        <a class="readpost" href="https://808blogg.wordpress.com/2022/09/15/into-the-silence-by-trentemoller-feat-disa/" title="14 Sep 2022 - 8:49 PM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33mpm" id="section-track-33mpm" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">19</span>\n\n\n    <a class="thumb" href="/track/33mpm/Krak%C3%B3w+Loves+Adana+-+When+The+Storm+Comes+%28feat.+Ruth+Radelet+%26+Adam+Miller%29" title="Go to the page for this track" style="background:url(https://static.hypem.com/images/albumart/320/3.png) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Kraków Loves Adana - search Hype Machine for this artist" href="/artist/Krak%C3%B3w+Loves+Adana">Kraków Loves Adana</a><span class="divider"> - </span>        <a class="track" title="When The Storm Comes (feat. Ruth Radelet &amp; Adam Miller) - go to page for this track" href="/track/33mpm/Krak%C3%B3w+Loves+Adana+-+When+The+Storm+Comes+%28feat.+Ruth+Radelet+%26+Adam+Miller%29">\n            <span class="base-title">When The Storm Comes (feat. Ruth Radelet &amp; Adam Miller)</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33mpm&amp;text=Krak%C3%B3w+Loves+Adana+-+When+The+Storm+Comes+%28feat.+Ruth+Radelet+%26+Adam+Miller%29%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33mpm" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33mpm" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 6 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33mpm">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/the+revue/22227">The Revue</a><a class="follow-pill fav_site_22227 follow" onclick="toggleFavoriteBlog(\'22227\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “The Matinee ’22 v. 142, which is the first half of our Friday doubleheader, is full of drama, which is…”\n                        <a class="readpost" href="https://therevue.ca/2022/10/28/the-matinee-22-v-142/" title="28 Oct 2022 - 3:00 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n\n\n<div data-itemid="33dkm" id="section-track-33dkm" class="section section-track haarp-section-track  odd">\n\n\n\n\n<div class="track-info"></div>\n\n\n<div class="playlist-ctrls playlist-off">\n    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>\n    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>\n    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>\n    <a class="playlist-selected " href=""></a>\n</div>\n\n\n\n\n\n\n\n\n\n<div class="section-player">\n\n    <span class="rank">20</span>\n\n\n    <a class="thumb" href="/track/33dkm/Hammered+Hulls+-+Rights+and+Reproduction" title="Go to the page for this track" style="background:url(https://static.hypem.com/items_images/74/33dkm_320.jpg) center center;background-size:cover;">\n    </a>\n\n\n<h3 class="track_name">\n    \n                    <a class="artist" title="Hammered Hulls - search Hype Machine for this artist" href="/artist/Hammered+Hulls">Hammered Hulls</a><span class="divider"> - </span>        <a class="track" title="Rights and Reproduction - go to page for this track" href="/track/33dkm/Hammered+Hulls+-+Rights+and+Reproduction">\n            <span class="base-title">Rights and Reproduction</span>        </a>\n    \n\n    \n</h3>\n\n\n\n<span class="share-links">\n    <a class="twitter-share icon-twitter fire-share-modal" data-href="//hypem.com/share?share_type=twitter&amp;create_type=hypem-player&amp;url=https%3A%2F%2Fhypem.com%2Ftrack%2F33dkm&amp;text=Hammered+Hulls+-+Rights+and+Reproduction%20on%20@hypem&amp;via=hypem"></a>\n</span>\n\n\n<ul class="tools">\n            <li class="playdiv">\n            <a id="play_ctrl_33dkm" class="play-ctrl play icon-toggle haarp-play-ctrl" title="Play" href="">\n            </a>\n        </li>\n    \n            <li class="favdiv">\n\n                        <a class="haarp-fav-ctrl icon-heart fav-off" id="fav_item_33dkm" title="Favorite" href=""></a>\n               \n        </li>\n\n    \n</ul>\n\n\n\n<div class="meta">\n        <span class="buy">\n                        <a href="" class="toggle-reposts">Posted by 9 sites</a>\n                </span>\n    \n        <span class="download">\n    \n            \n        •\n        \n                    On <a rel="nofollow" href="/go/bc/33dkm">Bandcamp</a> \n        \n            </span>\n    </div>\n\n\n\n\n    \n        <p class="post_info">\n\n            \n                    \n                        <a class="blog-fav-off" title="See other tracks posted by this blog" href="/site/stereogum/152">stereogum</a><a class="follow-pill fav_site_152 follow" onclick="toggleFavoriteBlog(\'152\');return false;" href="#"><em></em><span>Follow</span></a>\n\n                            “Rock-band chemistry is such a strange, mysterious force. You can’t just put a bunch of musicians into a room together…”\n                        <a class="readpost" href="https://www.stereogum.com/2204392/stream-hammered-hulls-excellent-debut-album-careening/news/" title="28 Oct 2022 - 11:05 AM CST">\n\n                            Read &nbsp;→\n                        </a>\n                    \n                \n        </p>\n\n    \n    <div class="act_info" style="display:none"></div>\n    \n\n\n\n\n</div><!-- section player -->\n\n\n\n</div><!-- section track -->\n\n        <div class="paginator infinite">\n        \n                </div>\n        \n        <script type="text/javascript">\n            enable_infinite_page_scroll();\n        </script>\n\n    \n\n\n    \n    \n    </div>            \n\n</div>\t\t \n\n\n\n\n\t \n    <script type="application/json" id="displayList-data">\n    {"page_cur":"\\/popular","page_num":1,"tracks":[{"type":"normal","id":"33m6w","time":282,"ts":1666970980,"postid":4143858,"posturl":"https:\\/\\/thevinylfactory.com\\/features\\/releases-of-the-week-october-28\\/","fav":0,"key":"7760f5ed1aadc98a3d4ac711714d9469","artist":"Aoife Nessa Frances","song":"Way to Say Goodbye","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:2P8aYZRH33dfajdNbVfrop"},{"type":"normal","id":"33n62","time":244,"ts":1667298970,"postid":4144967,"posturl":"https:\\/\\/phonographme.blogspot.com\\/2022\\/11\\/the-sweet-serenades-back-in-your-arms.html","fav":0,"key":"8638703f51badb0e72d0dffea8e7bbf1","artist":"The Sweet Serenades","song":"Back In Your Arms","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"32m6z","time":233,"ts":1650058340,"postid":4070885,"posturl":"https:\\/\\/tapedeckpodcast.com\\/sault-air-review\\/","fav":0,"key":"f27c438fbf7b68767535a6b9177680d7","artist":"SAULT","song":"Heart","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:0TK0V7xWimQosb8KpzmFGY"},{"type":"normal","id":"33kza","time":110,"ts":1666900335,"postid":4143445,"posturl":"https:\\/\\/digitalhigh.blog\\/2022\\/10\\/27\\/lowgo-ft-joseph-tilley-addict\\/","fav":0,"key":"4ea56707d026a167a07bd562898ebdeb","artist":"Lowgo","song":"Addict (feat. Joseph Tilley)","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:3ayCMiWHbp897sriKdLkkG"},{"type":"normal","id":"33nmw","time":171,"ts":1667257450,"postid":4144843,"posturl":"http:\\/\\/www.electricsoundofjoy.com\\/blog\\/2022\\/10\\/31\\/jouska","fav":0,"key":"f06d0d2be8579930e3d88acf36cd3fa7","artist":"Jouska","song":"Blue Like the Sun","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"31dz4","time":207,"ts":1633365164,"postid":3996788,"posturl":"https:\\/\\/www.okayplayer.com\\/originals\\/best-hip-hop-rb-albums-eps-bandcamp-mixtapes-projects-week-october-4th-download.html","fav":0,"key":"a134ffe46914877a29d558fcf5b24e19","artist":"K, Le Maestro","song":"CAN\\u00b4T FAKE IT!","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33khp","time":260,"ts":1667213057,"postid":4144508,"posturl":"https:\\/\\/www.iggymagazine.com\\/ecoutez-never-here-le-dernier-titre-devoile-par-furrows\\/","fav":0,"key":"ef49d2947475ae14556fe3202e4af02e","artist":"Furrows","song":"Never Here","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:594SiGoy1DSpGCa2PSCK1l"},{"type":"normal","id":"33gh7","time":321,"ts":1667450647,"postid":4145754,"posturl":"http:\\/\\/post-trash.com\\/news\\/2022\\/11\\/2\\/pva-blush-album-review","fav":0,"key":"4459e4b2e8df6ea7e2db4e8f6123385a","artist":"PVA","song":"Bunker","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:7tdhnR3o3p2jPZL7WD1u6k"},{"type":"normal","id":"2xsnd","time":247,"ts":1586796967,"postid":3746426,"posturl":"https:\\/\\/www.stereogum.com\\/2080110\\/stream-stay-insides-debut-album-viewing\\/music\\/album-stream\\/","fav":0,"key":"2f163b4c0f12222201a034c310e9336a","artist":"Stay Inside","song":"Revisionist","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:3Z0gpLGcm3bSD5a324jhgQ"},{"type":"normal","id":"334gn","time":237,"ts":1666710268,"postid":4142347,"posturl":"https:\\/\\/groove.de\\/2022\\/10\\/25\\/oktober-2022-die-essenziellen-alben-teil-2\\/","fav":0,"key":"abd5df5b6fd1d65eee1e7b158918c3cf","artist":"Loraine James","song":"Maybe If I (Stay On It)","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:59gwh9WN0Z211RA8wnmHOC"},{"type":"normal","id":"33n8f","time":159,"ts":1667004265,"postid":4144074,"posturl":"https:\\/\\/www.zonenights.com\\/2022\\/10\\/kuni-sleep-baby\\/","fav":0,"key":"1b32f7b617c9999e0b9a101b1e78f578","artist":"Kuni","song":"Sleep Baby","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33cnn","time":218,"ts":1662727457,"postid":4125271,"posturl":"https:\\/\\/www.rimasebatidas.pt\\/sexta-feira-farta-novos-trabalhos-de-sampa-the-great-sudan-archives-ari-lennox-jockstrap-son-little-e-tiacorine\\/","fav":0,"key":"d2aa1358430c2a44fabfb4281bcf8139","artist":"Sampa The Great","song":"Never Forget","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33g5s","time":500,"ts":1664497687,"postid":4132929,"posturl":"https:\\/\\/thequietus.com\\/articles\\/32140-theo-parrish-to-oversee-next-dj-kicks-compilation","fav":0,"key":"e00696af076b888cbfac96e4681a65e3","artist":"Ian Fink","song":"Moonlite (Duality\\/Detroit Version)","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33m8g","time":185,"ts":1666643287,"postid":4142082,"posturl":"https:\\/\\/abductionradiation.tumblr.com\\/post\\/699013264057810944\\/norwegian-songwriter-siv-jakobsen-will-be","fav":0,"key":"bf78bc048de3e5d775f69ef84db18df6","artist":"Siv Jakobsen","song":"Tangerine","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:321CAPcR4HTnaaxR0dus2e"},{"type":"normal","id":"32gap","time":185,"ts":1650033399,"postid":4070662,"posturl":"https:\\/\\/filtermexico.com\\/2022\\/04\\/15\\/whats-new-15-discos-nuevos-para-el-fin-de-semana-11\\/","fav":0,"key":"60bbcae7e69b3f1a7d50496db048ad47","artist":"Dopplereffekt","song":"Neuroplasticity","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33mx1","time":255,"ts":1666922659,"postid":4143559,"posturl":"https:\\/\\/nichemusic.info\\/midnight-rodeo-the-big-melt\\/","fav":0,"key":"3de1f48f313857892783ca1a3ae931a6","artist":"Midnight Rodeo","song":"The Big Melt","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33ftk","time":220,"ts":1664475855,"postid":4132801,"posturl":"https:\\/\\/www.welovethat.de\\/2022\\/melby-hammers\\/","fav":0,"key":"c61bc7a47c4c93bc516692a35f2923e9","artist":"Melby","song":"Hammers","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false,"spotify_uri":"spotify:track:35HZmpgWYXbp1DgDV3YST2"},{"type":"normal","id":"33bsf","time":247,"ts":1663209162,"postid":4127284,"posturl":"https:\\/\\/808blogg.wordpress.com\\/2022\\/09\\/15\\/into-the-silence-by-trentemoller-feat-disa\\/","fav":0,"key":"c7806c033182c6a511a0e1d9d9f28a26","artist":"Trentem\\u00f8ller","song":"Into The Silence feat. D\\u00edSA","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33mpm","time":264,"ts":1666944524,"postid":4143636,"posturl":"https:\\/\\/therevue.ca\\/2022\\/10\\/28\\/the-matinee-22-v-142\\/","fav":0,"key":"d4b2470253e1250d39426943b2c4e0a4","artist":"Krak\\u00f3w Loves Adana","song":"When The Storm Comes (feat. Ruth Radelet...","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false},{"type":"normal","id":"33dkm","time":288,"ts":1666976670,"postid":4143918,"posturl":"https:\\/\\/www.stereogum.com\\/2204392\\/stream-hammered-hulls-excellent-debut-album-careening\\/news\\/","fav":0,"key":"92b734cfe4fd1f783850582d2f01929e","artist":"Hammered Hulls","song":"Rights and Reproduction","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"is_ca":false}],"page_name":"popular","page_mode":"3day","page_arg":"","page_sort":"","title":"Popular tracks \\/ Hype Machine","page_next":"\\/popular\\/2"}    </script>\n\n\n<script>\n    enable_notification_check();\n    </script>\n\n    </div><!-- content -->\n    </div><!-- container -->\n\n    \n    <!-- PAGE TOTAL: 0.035s -->\n\n</div><!-- end content wrapper -->\n\n\n<div id="footer-menu">\n\n    <div id="footer-menu-inner" class="content-centered">\n\n        <ul class="menu">\n            <li><a href="/about">About</a></li>\n            <li><a class="user" href="/contact">Contact</a></li>\n                        <li><a target="_blank" href="http://blog.hypem.com">Our Blog</a></li>\n            <li><a target="_blank" class="hide_mobile" href="http://merch.hypem.com/">Merch</a></li>\n            <li><a href="/stack" class="hide_mobile">Stack: Weekly Mix</a></li>\n            <li><a target="_blank" class="hide_mobile" href="/premiere" title="Featured album premieres">Featured Albums</a></li>\n                    </ul>\n\n    </div>\n\n</div>\n\n<div id="footer">\n\n    <div id="footer-inner" class="content-centered">\n\n        <p>\n                Since 2005, Hype Machine is made in Brooklyn, NY<span class="hide_mobile"> by <a href="https://hypem.com/anthony" title="Anthony Volodkin">Anthony</a>, <a href="https://hypem.com/zoya" title="Zoya Feldman">Zoya</a> &amp; <a href="https://hypem.com/stadiumsshrines" title="Dave Sutton">Dave</a></span> and is funded by listeners like you. <a href="https://hypem.com/support-us">Support us here</a>.\n        \n        \n        <br>\n        <a href="/terms">Terms of Use</a> • <a href="/privacy">Privacy Policy</a>\n\n                <span class="hide_mobile">\n                • Advertising by <a href="http://hear-there.com/">Hear &amp; There</a>. <a href="http://hear-there.com/#contact" target="_blank">Advertise</a><br>\n                </span>\n        \n        \n        \n\t</p></div>\n</div>\n\n\n\n<div id="toast-prompt">\n    <h5>Want to be notified when the track changes?</h5>\n    <p>Click <strong>Allow</strong> to get desktop notifications when Hype Machine is in the background.</p>\n</div>\n\n\n    \n        \n    \n            <script>\n            var _qevents = _qevents || [];\n            (function() {\n                var elem = document.createElement(\'script\');\n                elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";\n                elem.async = true;\n                elem.type = "text/javascript";\n                var scpt = document.getElementsByTagName(\'script\')[0];\n                scpt.parentNode.insertBefore(elem, scpt);\n            })();\n        </script>\n    \n    \n        <script>\n            var _gaq = _gaq || [];\n            _gaq.push([\'_setAccount\', \'UA-97430-1\']);\n\n            (function() {\n            var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n            ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n            var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n            })();\n\n            _gaq.push([\'_addIgnoredOrganic\', \'hypem\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'hype machine\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'hypemachine\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'hypem.com\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'the hype machine\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'http://hypem.com/\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'hype m\']); \n            _gaq.push([\'_addIgnoredOrganic\', \'www.hypem.com\']);\n            _gaq.push([\'_addIgnoredOrganic\', \'http://hypem.com/popular\']);\n\n        </script>\n\n   \n        \n    <div id="keyboard">\n    <div class="overlay"></div>\n    <div class="popup">\n        <div id="close-keyboard-shortcuts"></div>\n        <h1>Keyboard Shortcuts</h1>\n        <div class="function">\n            Show / Hide this menu\n        </div>\n        <div class="keys">\n            <span>?</span>\n        </div>\n        <div class="function">\n            Next Track\n        </div>\n        <div class="keys">\n            <span>n</span>\n            <span>j</span>\n            <span>b</span>\n            <span>→</span>\n        </div>\n        <div class="function">\n            Previous Track\n        </div>\n        <div class="keys">\n            <span>p</span>\n            <span>k</span>\n            <span>z</span>\n            <span>←</span>\n        </div>\n        <div class="function">\n            Play / Pause\n        </div>\n        <div class="keys">\n            <span>space</span>\n            <span>x</span>\n            <span>c</span>\n        </div>\n        <div class="function">\n            Stop\n        </div>\n        <div class="keys">\n            <span>v</span>\n        </div>\n        <div class="function">\n            Heart\n        </div>\n        <div class="keys">\n            <span>l</span>\n            <span>h</span>\n            <span>f</span>\n        </div>\n        <div class="function">\n            Focus Search Bar\n        </div>\n        <div class="keys">\n            <span>/</span>\n        </div>\n        <div class="function">\n            Volume Up / Down\n        </div>\n        <div class="keys">\n            <span>+</span>\n            <span>-</span>\n        </div>\n        <div class="function">\n            Close Popups\n        </div>\n        <div class="keys">\n            <span>esc</span>\n        </div>\n    </div>\n</div>\n\n    \n\n\n\n</body></html>',
					],
					rank: [
						{
							value: '1',
							id: 0,
						},
						{
							value: '2',
							id: 1,
						},
						{
							value: '3',
							id: 2,
						},
						{
							value: '4',
							id: 3,
						},
						{
							value: '5',
							id: 4,
						},
						{
							value: '6',
							id: 5,
						},
						{
							value: '7',
							id: 6,
						},
						{
							value: '8',
							id: 7,
						},
						{
							value: '9',
							id: 8,
						},
						{
							value: '10',
							id: 9,
						},
						{
							value: '11',
							id: 10,
						},
						{
							value: '12',
							id: 11,
						},
						{
							value: '13',
							id: 12,
						},
						{
							value: '14',
							id: 13,
						},
						{
							value: '15',
							id: 14,
						},
						{
							value: '16',
							id: 15,
						},
						{
							value: '17',
							id: 16,
						},
						{
							value: '18',
							id: 17,
						},
						{
							value: '19',
							id: 18,
						},
						{
							value: '20',
							id: 19,
						},
					],
					thumb: [
						{
							value:
								'/track/33m6w/Aoife+Nessa+Frances+-+Way+to+Say+Goodbye',
							id: 0,
						},
						{
							value:
								'/track/33n62/The+Sweet+Serenades+-+Back+In+Your+Arms',
							id: 1,
						},
						{
							value: '/track/32m6z/SAULT+-+Heart',
							id: 2,
						},
						{
							value:
								'/track/33kza/Lowgo+-+Addict+%28feat.+Joseph+Tilley%29',
							id: 3,
						},
						{
							value:
								'/track/33nmw/Jouska+-+Blue+Like+the+Sun',
							id: 4,
						},
						{
							value:
								'/track/31dz4/K%2C+Le+Maestro+-+CAN%C2%B4T+FAKE+IT%21',
							id: 5,
						},
						{
							value: '/track/33khp/Furrows+-+Never+Here',
							id: 6,
						},
						{
							value: '/track/33gh7/PVA+-+Bunker',
							id: 7,
						},
						{
							value:
								'/track/2xsnd/Stay+Inside+-+Revisionist',
							id: 8,
						},
						{
							value:
								'/track/334gn/Loraine+James+-+Maybe+If+I+%28Stay+On+It%29',
							id: 9,
						},
						{
							value: '/track/33n8f/Kuni+-+Sleep+Baby',
							id: 10,
						},
						{
							value:
								'/track/33cnn/Sampa+The+Great+-+Never+Forget',
							id: 11,
						},
						{
							value:
								'/track/33g5s/Ian+Fink+-+Moonlite+%28Duality%2FDetroit+Version%29',
							id: 12,
						},
						{
							value:
								'/track/33m8g/Siv+Jakobsen+-+Tangerine',
							id: 13,
						},
						{
							value:
								'/track/32gap/Dopplereffekt+-+Neuroplasticity',
							id: 14,
						},
						{
							value:
								'/track/33mx1/Midnight+Rodeo+-+The+Big+Melt',
							id: 15,
						},
						{
							value: '/track/33ftk/Melby+-+Hammers',
							id: 16,
						},
						{
							value:
								'/track/33bsf/Trentem%C3%B8ller+-+Into+The+Silence+feat.+D%C3%ADSA',
							id: 17,
						},
						{
							value:
								'/track/33mpm/Krak%C3%B3w+Loves+Adana+-+When+The+Storm+Comes+%28feat.+Ruth+Radelet+%26+Adam+Miller%29',
							id: 18,
						},
						{
							value:
								'/track/33dkm/Hammered+Hulls+-+Rights+and+Reproduction',
							id: 19,
						},
					],
					thumbnail: [
						{
							value:
								'https://static.hypem.com/items_images/dc/33m6w_320.jpg',
							id: 0,
						},
						{
							value:
								'https://static.hypem.com/images/albumart/320/1.png',
							id: 1,
						},
						{
							value:
								'https://static.hypem.com/items_images/df/32m6z_320.jpg',
							id: 2,
						},
						{
							value:
								'https://static.hypem.com/items_images/ea/33kza_320.jpg',
							id: 3,
						},
						{
							value:
								'https://static.hypem.com/images/albumart/320/3.png',
							id: 4,
						},
						{
							value:
								'https://static.hypem.com/items_images/e4/31dz4_320.jpg',
							id: 5,
						},
						{
							value:
								'https://static.hypem.com/items_images/36/33khp_320.jpg',
							id: 6,
						},
						{
							value:
								'https://static.hypem.com/items_images/27/33gh7_320.jpg',
							id: 7,
						},
						{
							value:
								'https://static.hypem.com/items_images/ad/2xsnd_320.jpg',
							id: 8,
						},
						{
							value:
								'https://static.hypem.com/items_images/15/334gn_320.jpg',
							id: 9,
						},
						{
							value:
								'https://static.hypem.com/images/albumart/320/0.png',
							id: 10,
						},
						{
							value:
								'https://static.hypem.com/items_images/b5/33cnn_320.jpg',
							id: 11,
						},
						{
							value:
								'https://static.hypem.com/items_images/b9/33g5s_320.jpg',
							id: 12,
						},
						{
							value:
								'https://static.hypem.com/items_images/10/33m8g_320.jpg',
							id: 13,
						},
						{
							value:
								'https://static.hypem.com/items_images/56/32gap_320.jpg',
							id: 14,
						},
						{
							value:
								'https://static.hypem.com/images/albumart/320/3.png',
							id: 15,
						},
						{
							value:
								'https://static.hypem.com/items_images/53/33ftk_320.jpg',
							id: 16,
						},
						{
							value:
								'https://static.hypem.com/items_images/2f/33bsf_320.jpg',
							id: 17,
						},
						{
							value:
								'https://static.hypem.com/images/albumart/320/3.png',
							id: 18,
						},
						{
							value:
								'https://static.hypem.com/items_images/74/33dkm_320.jpg',
							id: 19,
						},
					],
					artist: [
						{
							value: 'Aoife Nessa Frances',
							id: 0,
						},
						{
							value: 'The Sweet Serenades',
							id: 1,
						},
						{
							value: 'SAULT',
							id: 2,
						},
						{
							value: 'Lowgo',
							id: 3,
						},
						{
							value: 'Jouska',
							id: 4,
						},
						{
							value: 'K, Le Maestro',
							id: 5,
						},
						{
							value: 'Furrows',
							id: 6,
						},
						{
							value: 'PVA',
							id: 7,
						},
						{
							value: 'Stay Inside',
							id: 8,
						},
						{
							value: 'Loraine James',
							id: 9,
						},
						{
							value: 'Kuni',
							id: 10,
						},
						{
							value: 'Sampa The Great',
							id: 11,
						},
						{
							value: 'Ian Fink',
							id: 12,
						},
						{
							value: 'Siv Jakobsen',
							id: 13,
						},
						{
							value: 'Dopplereffekt',
							id: 14,
						},
						{
							value: 'Midnight Rodeo',
							id: 15,
						},
						{
							value: 'Melby',
							id: 16,
						},
						{
							value: 'Trentemøller',
							id: 17,
						},
						{
							value: 'Kraków Loves Adana',
							id: 18,
						},
						{
							value: 'Hammered Hulls',
							id: 19,
						},
					],
					baseTitle: [
						{
							value: 'Way to Say Goodbye',
							id: 0,
						},
						{
							value: 'Back In Your Arms',
							id: 1,
						},
						{
							value: 'Heart',
							id: 2,
						},
						{
							value: 'Addict (feat. Joseph Tilley)',
							id: 3,
						},
						{
							value: 'Blue Like the Sun',
							id: 4,
						},
						{
							value: 'CAN´T FAKE IT!',
							id: 5,
						},
						{
							value: 'Never Here',
							id: 6,
						},
						{
							value: 'Bunker',
							id: 7,
						},
						{
							value: 'Revisionist',
							id: 8,
						},
						{
							value: 'Maybe If I (Stay On It)',
							id: 9,
						},
						{
							value: 'Sleep Baby',
							id: 10,
						},
						{
							value: 'Never Forget',
							id: 11,
						},
						{
							value: 'Moonlite',
							id: 12,
						},
						{
							value: 'Tangerine',
							id: 13,
						},
						{
							value: 'Neuroplasticity',
							id: 14,
						},
						{
							value: 'The Big Melt',
							id: 15,
						},
						{
							value: 'Hammers',
							id: 16,
						},
						{
							value: 'Into The Silence feat. DíSA',
							id: 17,
						},
						{
							value:
								'When The Storm Comes (feat. Ruth Radelet & Adam Miller)',
							id: 18,
						},
						{
							value: 'Rights and Reproduction',
							id: 19,
						},
					],
					remixLink: [
						{
							value: '',
							id: 0,
						},
						{
							value: '',
							id: 1,
						},
						{
							value: '',
							id: 2,
						},
						{
							value: '',
							id: 3,
						},
						{
							value: '',
							id: 4,
						},
						{
							value: '',
							id: 5,
						},
						{
							value: '',
							id: 6,
						},
						{
							value: '',
							id: 7,
						},
						{
							value: '',
							id: 8,
						},
						{
							value: '',
							id: 9,
						},
						{
							value: '',
							id: 10,
						},
						{
							value: '',
							id: 11,
						},
						{
							value: 'Duality/Detroit Version',
							id: 12,
						},
						{
							value: '',
							id: 13,
						},
						{
							value: '',
							id: 14,
						},
						{
							value: '',
							id: 15,
						},
						{
							value: '',
							id: 16,
						},
						{
							value: '',
							id: 17,
						},
						{
							value: '',
							id: 18,
						},
						{
							value: '',
							id: 19,
						},
					],
					socialMedia: [
						{
							value: 'Bandcamp',
							id: 0,
						},
						{
							value: 'SoundCloud',
							id: 1,
						},
						{
							value: 'Bandcamp',
							id: 2,
						},
						{
							value: 'SoundCloud',
							id: 3,
						},
						{
							value: 'SoundCloud',
							id: 4,
						},
						{
							value: 'Bandcamp',
							id: 5,
						},
						{
							value: 'Bandcamp',
							id: 6,
						},
						{
							value: 'Bandcamp',
							id: 7,
						},
						{
							value: 'Bandcamp',
							id: 8,
						},
						{
							value: 'Bandcamp',
							id: 9,
						},
						{
							value: 'Bandcamp',
							id: 10,
						},
						{
							value: 'Bandcamp',
							id: 11,
						},
						{
							value: 'Bandcamp',
							id: 12,
						},
						{
							value: 'SoundCloud',
							id: 13,
						},
						{
							value: 'Bandcamp',
							id: 14,
						},
						{
							value: 'Bandcamp',
							id: 15,
						},
						{
							value: 'Bandcamp',
							id: 16,
						},
						{
							value: 'Bandcamp',
							id: 17,
						},
						{
							value: 'Bandcamp',
							id: 18,
						},
						{
							value: 'Bandcamp',
							id: 19,
						},
					],
					socialMediaLink: [
						{
							value: '/go/bc/33m6w',
							id: 0,
						},
						{
							value: '/go/sc/33n62',
							id: 1,
						},
						{
							value: '/go/bc/32m6z',
							id: 2,
						},
						{
							value: '/go/sc/33kza',
							id: 3,
						},
						{
							value: '/go/sc/33nmw',
							id: 4,
						},
						{
							value: '/go/bc/31dz4',
							id: 5,
						},
						{
							value: '/go/bc/33khp',
							id: 6,
						},
						{
							value: '/go/bc/33gh7',
							id: 7,
						},
						{
							value: '/go/bc/2xsnd',
							id: 8,
						},
						{
							value: '/go/bc/334gn',
							id: 9,
						},
						{
							value: '/go/bc/33n8f',
							id: 10,
						},
						{
							value: '/go/bc/33cnn',
							id: 11,
						},
						{
							value: '/go/bc/33g5s',
							id: 12,
						},
						{
							value: '/go/sc/33m8g',
							id: 13,
						},
						{
							value: '/go/bc/32gap',
							id: 14,
						},
						{
							value: '/go/bc/33mx1',
							id: 15,
						},
						{
							value: '/go/bc/33ftk',
							id: 16,
						},
						{
							value: '/go/bc/33bsf',
							id: 17,
						},
						{
							value: '/go/bc/33mpm',
							id: 18,
						},
						{
							value: '/go/bc/33dkm',
							id: 19,
						},
					],
					headerLogo: [
						{
							title: 'Hype Machine',
							href: '/latest',
						},
					],
				};

				const {
					html,
					headerLogo,
					artist,
					baseTitle,
					rank,
					remixLink,
					socialMedia,
					socialMediaLink,
					thumb,
					thumbnail,
				} = data;
				setHtml(html);
				setHeaderLogo(headerLogo);
				setArtist(artist);
				setBaseTitle(baseTitle);
				setRank(rank);
				setRemixLink(remixLink);
				setSocMedia(socialMedia);
				setSocMediaLink(socialMediaLink);
				setThumb(thumb);
				setThumbNail(thumbnail);
			});
	};

	const handleSetKey = (data, idx) => {
		return data.value + data.id + idx + uuid();
	};

	useEffect(() => {
		sendUrl();
	}, [sampleUrl]);

	return (
		<div className='example'>
			<div className='example__container'>
				<div className='example__container-title'>
					Example View
				</div>
				<div className='example__container-data'>
					{!!html ? (
						<div className='example__container-data-container'>
							<textarea
								className='example__container-data-container-info'
								rows={'15'}
								cols={'120'}
								onChange={() => {}}
								value={html}></textarea>
						</div>
					) : null}
					{!!html ? (
						<div className='example__container-data-container'>
							<iframe
								className='example__container-data-container-info'
								srcDoc={html}
								title='preview'
								allowpaymentrequest='false'
							/>
						</div>
					) : null}
					<div className='example__container-data-container example__container-data-container-flex-col'>
						<div className='example__container-data-container-title'>
							Scraped Data Organized
						</div>
						{!!headerLogo ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Header Logo
								</div>
								<ul className='example__container-data-container-sorted-data'>
									<li className='example__container-data-container-sorted-data-item'>
										{!!headerLogo && !!headerLogo[0]?.title
											? headerLogo[0]?.title
											: null}
									</li>
									<li className='example__container-data-container-sorted-data-item'>
										{!!headerLogo && headerLogo[0]?.href
											? headerLogo[0]?.href
											: null}
									</li>
								</ul>
							</div>
						) : null}
						{!!rank ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Rank
								</div>
								<ul className='example__container-data-container-sorted-data'>
									{rank.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}
											</li>
										);
									})}
								</ul>
							</div>
						) : null}
						{!!baseTitle ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Titles
								</div>
								<ol className='example__container-data-container-sorted-data'>
									{baseTitle.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}{' '}
											</li>
										);
									})}
								</ol>
							</div>
						) : null}
						{!!artist ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Artists
								</div>
								<ol className='example__container-data-container-sorted-data'>
									{artist.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}
											</li>
										);
									})}
								</ol>
							</div>
						) : null}
						{!!remixLink ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Remix Links
								</div>
								<ol className='example__container-data-container-sorted-data'>
									{remixLink.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}
											</li>
										);
									})}
								</ol>
							</div>
						) : null}
						{!!socMedia ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Social Media
								</div>
								<ol className='example__container-data-container-sorted-data'>
									{socMedia.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}
											</li>
										);
									})}
								</ol>
							</div>
						) : null}
						{!!socMediaLink ? (
							<div className='example__container-data-container-sorted'>
								<div className='example__container-data-container-sorted-title'>
									Social Media Link
								</div>
								<ol className='example__container-data-container-sorted-data'>
									{socMediaLink.map((data, idx) => {
										return (
											<li
												className='example__container-data-container-sorted-data-item'
												key={handleSetKey(data, idx)}>
												{!!data.value ? data.value : 'N/A'}
											</li>
										);
									})}
								</ol>
							</div>
						) : null}
						<div className='example__container-data-container-sorted example__container-data-container-sorted-thumb'>
							{!!thumbNail ? (
								<div className='example__container-data-container-sorted-split'>
									<div className='example__container-data-container-sorted-split-title'>
										ThumbNail Link
									</div>
									<ol className='example__container-data-container-sorted-split-data'>
										{thumbNail.map((data, idx) => {
											return (
												<li
													className='example__container-data-container-sorted-data-item'
													key={handleSetKey(data, idx)}>
													{!!data.value
														? data.value
														: 'N/A'}
												</li>
											);
										})}
									</ol>
								</div>
							) : null}
							{!!thumb ? (
								<div className='example__container-data-container-sorted-split'>
									<div className='example__container-data-container-sorted-split-title'>
										ThumbNail Href
									</div>
									<ol className='example__container-data-container-sorted-split-data'>
										{thumb.map((data, idx) => {
											return (
												<li
													className='example__container-data-container-sorted-data-item'
													key={handleSetKey(data, idx)}>
													{!!data.value
														? data.value
														: 'N/A'}
												</li>
											);
										})}
									</ol>
								</div>
							) : null}
						</div>
					</div>

					<div className='example__container-data-container'>
						<div className='example__container-data-container-possible'>
							<div className='example__container-data-container-possible-title'>
								Example use case of scraped data
							</div>
							<div className='example__container-data-container-possible-design'>
								{!!previewRank ? (
									<div className='example__container-data-container-possible-design-rank'>
										{previewRank}
									</div>
								) : null}
								{!!previewArtist ? (
									<div className='example__container-data-container-possible-design-artist'>
										{previewArtist}
									</div>
								) : null}
								{!!previewTitle ? (
									<div className='example__container-data-container-possible-design-title'>
										{previewTitle}
									</div>
								) : null}
								{!!previewThumb ? (
									<img
										className={
											'example__container-data-container-possible-design-img'
										}
										src={previewThumb}
										alt='Thumbnail'
									/>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Example;
