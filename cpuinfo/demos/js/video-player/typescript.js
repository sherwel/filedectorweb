/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var alternate = true;

$(function () {
    $("#videoPlayer").igVideoPlayer({
        sources: [
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.mp4",
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.webm",
            "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/big_buck_bunny.ogv"
        ],
        width: 750,
        height: 500,
        posterUrl: "http://www.igniteui.com/images/samples/video-player/big-buck-bunny.png",
        fullscreen: false,
        browserControls: false,
        autohide: true,
        autoplay: false,
        showSeekTime: true,
        title: "$$(bunny)",
        relatedVideos: [
            {
                imageUrl: "http://www.igniteui.com/images/samples/video-player/quince-intro-2.png",
                title: "Quince $$(pres) $$(p1)",
                css: "relatedVideosBanner",
                sources: [
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.h264.mp4",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.webmvp8.webm",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.theora.ogv"
                ]
            }
        ],
        bookmarks: [
            {
                title: '$$(River)',
                description: '$$(River)',
                time: 13
            },
            {
                title: '$$(bunny_appears)',
                description: '$$(bunny_appears)',
                time: 33
            }
        ],
        banners: [{
                imageUrl: '../../images/samples/video-player/banner.png',
                link: 'http://quince.infragistics.com/',
                times: [5, 20, 60],
                visible: false,
                closeBanner: true,
                animate: true,
                autohide: true,
                hidedelay: 10000,
                width: 200,
                height: 67
            }],
        bannerVisible: function (sender, eventArgs) {
            if (alternate === true) {
                eventArgs.bannerElement.css('top', 130);
            } else {
                eventArgs.bannerElement.css('top', 0);
            }

            alternate = !alternate;
        },
        bannerClick: function (sender, eventArgs) {
            $("#videoPlayer").igVideoPlayer('pause');
        }
    });
});
//# sourceMappingURL=typescript.js.map
